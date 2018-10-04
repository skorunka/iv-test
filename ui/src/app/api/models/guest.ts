export interface Guest {
	id?: string;
	reservationId: string;
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	nationalityCode: string;
	travelDocumentId: string;
}
