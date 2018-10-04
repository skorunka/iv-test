import { ReservationService } from './reservation.service';
import { Reservation } from '@app/api/models/reservation';

describe('ReservationService', () => {
	const provide = (mock: any): any => mock;

	let service: ReservationService;

	const httpClient = {
		post: jest.fn(),
		put: jest.fn(),
	};

	beforeEach(() => {
		service = new ReservationService(provide(httpClient));
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should POST for Reservation without "Id"', () => {
		service.upsert({} as Reservation);
		expect(httpClient.post).toBeCalled();
	});

	it('should PUT for Reservation with "Id"', () => {
		service.upsert({ id: '1' } as Reservation);
		expect(httpClient.put).toBeCalled();
	});
});
