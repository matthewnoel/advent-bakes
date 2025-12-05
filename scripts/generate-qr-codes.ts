import QRCode from 'qrcode';
import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://matthewnoel.github.io/advent-bakes';
const OUTPUT_FILE = 'qr-codes.pdf';
const MARGIN = 40; // Margin around the page
const SPACING = 8; // Space between QR code and text

// Page dimensions (US Letter: 8.5 x 11 inches = 612 x 792 points)
const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;

// Calculate layout: 3 columns, 4 rows (12 items per page)
// This gives enough space for QR code + text without overlap
const COLUMNS = 3;
const ROWS = 4;
const ITEMS_PER_PAGE = COLUMNS * ROWS;
const ITEM_WIDTH = (PAGE_WIDTH - 2 * MARGIN) / COLUMNS;
const ITEM_HEIGHT = (PAGE_HEIGHT - 2 * MARGIN) / ROWS;

// Calculate QR code size to fit in item with space for text
// Reserve space for two lines of text (14pt + 10pt + spacing)
const TEXT_HEIGHT = 14 + 10 + 6; // Day text + URL text + spacing between lines
const QR_SIZE = Math.min(ITEM_WIDTH - 10, ITEM_HEIGHT - TEXT_HEIGHT - SPACING - 10);

async function generateQRCode(url: string): Promise<Buffer> {
  return await QRCode.toBuffer(url, {
    width: QR_SIZE,
    margin: 1,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
  });
}

async function generatePDF() {
  return new Promise<void>((resolve, reject) => {
    const doc = new PDFDocument({
      size: [PAGE_WIDTH, PAGE_HEIGHT],
      margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
    });

    // Pipe the PDF to a file
    const outputPath = join(process.cwd(), OUTPUT_FILE);
    const stream = createWriteStream(outputPath);
    doc.pipe(stream);

    stream.on('finish', () => {
      console.log(`✅ PDF generated successfully: ${outputPath}`);
      resolve();
    });

    stream.on('error', (error) => {
      reject(error);
    });

    // Generate QR codes for days 1-24
    (async () => {
      for (let day = 1; day <= 24; day++) {
        // Calculate which page this item belongs on
        const pageIndex = Math.floor((day - 1) / ITEMS_PER_PAGE);
        const itemIndexOnPage = (day - 1) % ITEMS_PER_PAGE;
        
        // Add new page if needed (skip first page, it's already created)
        if (pageIndex > 0 && itemIndexOnPage === 0) {
          doc.addPage();
        }
        
        const url = `${BASE_URL}/2025/day/${day}`;
        
        // Calculate position for this QR code within the current page
        const row = Math.floor(itemIndexOnPage / COLUMNS);
        const col = itemIndexOnPage % COLUMNS;
        
        // Center QR code horizontally in item
        const x = MARGIN + col * ITEM_WIDTH + (ITEM_WIDTH - QR_SIZE) / 2;
        
        // Calculate total content height (QR + spacing + text)
        const totalContentHeight = QR_SIZE + SPACING + TEXT_HEIGHT;
        // Center content vertically in item
        const itemTopY = MARGIN + row * ITEM_HEIGHT;
        const y = itemTopY + (ITEM_HEIGHT - totalContentHeight) / 2;

        // Generate QR code
        const qrBuffer = await generateQRCode(url);

        // Add QR code image to PDF
        doc.image(qrBuffer, x, y, {
          width: QR_SIZE,
          height: QR_SIZE,
        });

        // Add text below QR code
        const textStartY = y + QR_SIZE + SPACING;
        const textX = MARGIN + col * ITEM_WIDTH;
        const textWidth = ITEM_WIDTH;

        // Day number text (centered)
        doc.fontSize(14)
           .font('Helvetica-Bold')
           .text(`Day ${day}`, textX, textStartY, {
             width: textWidth,
             align: 'center',
             lineGap: 2,
           });

        // Calculate Y position for URL text (after Day text)
        const dayTextHeight = 14 + 2; // font size + line gap
        const urlTextY = textStartY + dayTextHeight + 2; // 2pt spacing between lines

        // URL text (smaller, centered, may wrap if needed)
        doc.fontSize(10)
           .font('Helvetica')
           .text(url, textX, urlTextY, {
             width: textWidth,
             align: 'center',
             lineGap: 2,
           });
      }

      // Finalize the PDF
      doc.end();
    })().catch(reject);
  });
}

// Run the script
generatePDF().catch((error) => {
  console.error('❌ Error generating PDF:', error);
  process.exit(1);
});

