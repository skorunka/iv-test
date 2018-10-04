export interface Reservation {
	id?: string;
	accomodationId: string;
	fromDate: Date;
	toDate: Date;
	reasonOfStayCode: string;
}
