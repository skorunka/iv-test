import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Accomodation } from '@app/api/models/accomodation';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccomodationService {
	private static readonly route = '/accomodations';

	constructor(private httpClient: HttpClient) {}

	get(): Observable<Accomodation[]> {
		return this.httpClient.get<Accomodation[]>(AccomodationService.route);
	}

	getById(id: string): Observable<Accomodation> {
		return this.httpClient.get<Accomodation>(`${AccomodationService.route}/${id}`);
	}

	upsert(accomodation: Accomodation): Observable<Accomodation> {
		return accomodation.id
			? this.httpClient.put<Accomodation>(`${AccomodationService.route}/${accomodation.id}`, accomodation)
			: this.httpClient.post<Accomodation>(AccomodationService.route, accomodation);
	}

	delete(id: string): Observable<any> {
		return this.httpClient.delete(`${AccomodationService.route}/${id}`);
	}
}
