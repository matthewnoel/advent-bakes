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
	const datumDate = new Date(year, 11, rowColToDay(row, col));
	return (
		!(
			currentDate.getFullYear() === datumDate.getFullYear() &&
			currentDate.getMonth() === datumDate.getMonth() &&
			currentDate.getDate() === datumDate.getDate()
		) && datumDate > currentDate
	);
};

export const isCurrentlyChristmasForYear = (currentDate: Date, menuYear: number) => {
	return (
		currentDate.getFullYear() === menuYear &&
		currentDate.getMonth() === DECEMBER &&
		currentDate.getDate() === 25
	);
};

export const getDaysUntilMenuStart = (currentDate: Date, menuYear: number) => {
	const menuStartDate = new Date(menuYear, 11, 1);
	const modifiedCurrentDate = new Date(currentDate);
	menuStartDate.setHours(0, 0, 0, 0);
	modifiedCurrentDate.setHours(0, 0, 0, 0);
	const menuStartDateTime = menuStartDate.getTime();
	const currentDateTime = modifiedCurrentDate.getTime();
	return (menuStartDateTime - currentDateTime) / (1000 * 60 * 60 * 24);
};
