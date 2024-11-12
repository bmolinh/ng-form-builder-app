import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionComponent } from './submission.component';
import { provideRouter } from '@angular/router';
import { FormsService } from '../forms.service';
import { ALL_FORMS_MOCK_2 } from '../forms.mocks';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;
  let formsServiceStub: Partial<FormsService>;

  beforeEach(async () => {
    formsServiceStub = {
      find: () => of(ALL_FORMS_MOCK_2[0]),
      submit: () => of(ALL_FORMS_MOCK_2[0]),
    };

    await TestBed.configureTestingModule({
      imports: [SubmissionComponent],
      providers: [
        { provide: FormsService, useValue: formsServiceStub },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set form$ and create form group when id is set', () => {
    component.id = '1';
    fixture.detectChanges();

    component.form$.subscribe((form) => {
      expect(form).toEqual(ALL_FORMS_MOCK_2[0]);
      expect(component.formGroup).toBeDefined();
      expect(Object.keys(component.formGroup.controls)).toEqual(
        ALL_FORMS_MOCK_2[0].fields.map((field) => field.id.toString())
      );
    });
  });

  it('should submit form and set success to true', () => {
    component.id = '1';
    fixture.detectChanges();

    component.form$.subscribe(() => {
      component.submit(1);
      expect(component.success).toBeTrue();
    });
  });
});
