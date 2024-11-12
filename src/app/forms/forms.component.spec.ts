import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { of } from 'rxjs';
import { FormsService } from './forms.service';
import { ALL_FORMS_MOCK, FIELDS_MOCK } from './forms.mocks';
import { provideRouter } from '@angular/router';
import { Answer } from './forms.interface';

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
      providers: [
        { provide: FormsService, useValue: formsServiceStub },
        provideRouter([]),
      ],
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

  it('should have forms$ as an observable of forms', (done) => {
    component.forms$.subscribe((forms) => {
      expect(forms.length).toBe(ALL_FORMS_MOCK.length);
      expect(forms[0].name).toBe(ALL_FORMS_MOCK[0].name);
      done();
    });
  });

  it('should set form$ to the first form on init', (done) => {
    component.form$.subscribe((form) => {
      expect(form).toBe(ALL_FORMS_MOCK[0]);
      done();
    });
  });

  it('should return the correct answer for a given fieldId', () => {
    const answers: Answer[] = [
      { id: 0, field: FIELDS_MOCK[1], value: 'Answer 2' },
      { id: 1, field: FIELDS_MOCK[0], value: 'Answer 1' },
    ];
    expect(component.getAnswer(answers, 1)).toBe('Answer 1');
    expect(component.getAnswer(answers, 2)).toBe('Answer 2');
    expect(component.getAnswer(answers, 3)).toBe('N/A');
  });

  it('should set form$ to the selected form based on event', (done) => {
    component.setForm({ target: { value: '2' } });
    component.form$.subscribe((form) => {
      expect(form).toBe(ALL_FORMS_MOCK[1]);
      done();
    });
  });
});
