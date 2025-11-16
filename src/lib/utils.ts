export const getCurrentDate = (mock?: Date) => {
	if (mock) {
		return mock;
	}
	return new Date();
};

export const isToday = (currentDate: Date, year: number, row: number, col: number) => {
	return (
		currentDate.getFullYear() === year &&
		currentDate.getMonth() === 11 &&
		currentDate.getDate() === row * 6 + col + 1
	);
};

export const isAfterToday = (currentDate: Date, year: number, row: number, col: number) => {
	if (currentDate.getFullYear() > year) {
		return false;
	}
	if (currentDate.getFullYear() < year) {
		return true;
	}
	if (currentDate.getMonth() < 11) {
		return false;
	}
	return currentDate.getDate() < row * 6 + col + 1;
};
