import { AccomodationService } from './accomodation.service';
import { Accomodation } from '@app/api/models/accomodation';

describe('AccomodationService', () => {
	const provide = (mock: any): any => mock;

	let service: AccomodationService;

	const httpClient = {
		post: jest.fn(),
		put: jest.fn(),
	};

	beforeEach(() => {
		service = new AccomodationService(provide(httpClient));
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should POST for Accomodation without "Id"', () => {
		service.upsert({} as Accomodation);
		expect(httpClient.post).toBeCalled();
	});

	it('should PUT for Accomodation with "Id"', () => {
		service.upsert({ id: '1' } as Accomodation);
		expect(httpClient.put).toBeCalled();
	});
});
