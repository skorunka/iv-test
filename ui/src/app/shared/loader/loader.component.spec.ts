import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { I18nService } from '@app/core';

import { LoaderComponent } from './loader.component';
import { Observable, of } from 'rxjs';

class MockI18nService {
	translate(key: string | Array<string>, interpolateParams?: Object): Observable<string | any> {
		return of(key);
	}
}

describe('LoaderComponent', () => {
	let component: LoaderComponent;
	let fixture: ComponentFixture<LoaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LoaderComponent],
			providers: [{ provide: I18nService, useClass: MockI18nService }],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be visible by default', () => {
		const div = fixture.nativeElement.querySelectorAll('div')[0];
		expect(div.getAttribute('hidden')).toBeNull();
	});

	it('should be visible when loading', () => {
		const div = fixture.nativeElement.querySelectorAll('div')[0];
		fixture.componentInstance.isLoading = true;
		fixture.detectChanges();
		expect(div.getAttribute('hidden')).toBeNull();
	});

	it('should be hidden when not loading', () => {
		const div = fixture.nativeElement.querySelectorAll('div')[0];
		fixture.componentInstance.isLoading = false;
		fixture.detectChanges();
		expect(div.getAttribute('hidden')).not.toBeNull();
	});

	it('should display a default message by default', () => {
		const div = fixture.nativeElement.querySelectorAll('div')[0];
		expect(div.textContent).toMatch('Loading...');
	});

	it('should display specified message', () => {
		const div = fixture.nativeElement.querySelectorAll('div')[0];
		fixture.componentInstance.message = 'testing';
		fixture.detectChanges();
		expect(div.textContent).toMatch('testing');
	});
});
