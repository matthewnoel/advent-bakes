export const DECEMBER = 11;

export const getCurrentDate = (mock?: Date) => {
	if (mock) {
		return mock;
	}
	return new Date();
};

export const rowColToDay = (row: number, col: number) => {
	return row * 6 + col + 1;
};

export const isToday = (currentDate: Date, year: number, row: number, col: number) => {
	return (
		currentDate.getFullYear() === year &&
		currentDate.getMonth() === DECEMBER &&
		currentDate.getDate() === rowColToDay(row, col)
	);
};

export const isAfterToday = (currentDate: Date, year: number, row: number, col: number) => {
	if (currentDate.getFullYear() > year) {
		return false;
	}
	if (currentDate.getFullYear() < year) {
		return true;
	}
	if (currentDate.getMonth() < DECEMBER) {
		return false;
	}
	return currentDate.getDate() < rowColToDay(row, col);
};
