import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Reservation } from '@app/api/models';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ReservationService {
	private static readonly route = '/reservations';

	constructor(private httpClient: HttpClient) {}

	get(accomodationId: string): Observable<Reservation[]> {
		return this.httpClient
			.get<Reservation[]>(ReservationService.route, { params: { accomodationId: accomodationId } })
			.pipe(map((x: Reservation[]) => x.map(r => ({ ...r, fromDate: new Date(r.fromDate), toDate: new Date(r.toDate) }))));
	}

	getById(id: string): Observable<Reservation> {
		return this.httpClient.get<Reservation>(`${ReservationService.route}/${id}`);
	}

	upsert(reservation: Reservation): Observable<Reservation> {
		return reservation.id
			? this.httpClient.put<Reservation>(`${ReservationService.route}/${reservation.id}`, reservation)
			: this.httpClient.post<Reservation>(ReservationService.route, reservation);
	}

	delete(id: string): Observable<any> {
		return this.httpClient.delete(`${ReservationService.route}/${id}`);
	}
}
