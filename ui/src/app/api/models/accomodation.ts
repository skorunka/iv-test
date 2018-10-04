export interface Accomodation {
	id?: string;
	userId: string;
	name: string;
	district: string;
	municipality: string;
	municipalityPart: string;
	street: string;
	locationNumber1: number;
	locationNumber2: number;
	systems: { [id: string]: {} };
}
