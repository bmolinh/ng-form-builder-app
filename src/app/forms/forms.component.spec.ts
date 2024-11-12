import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { of } from 'rxjs';
import { FormsService } from './forms.service';
import { ALL_FORMS_MOCK, ALL_FORMS_MOCK_2 } from './forms.mocks';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;
  let formsServiceStub: Partial<FormsService>;

  beforeEach(async () => {
    formsServiceStub = {
      findAll: () => of(ALL_FORMS_MOCK),
    };

    await TestBed.configureTestingModule({
      imports: [FormsComponent],
      providers: [{ provide: FormsService, useValue: formsServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have forms$ as an observable of forms', (done) => {
    component.forms$.subscribe((forms) => {
      expect(forms.length).toBe(ALL_FORMS_MOCK.length);
      expect(forms[0].name).toBe(ALL_FORMS_MOCK[0].name);
      done();
    });
  });
});
