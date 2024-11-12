import { TestBed } from '@angular/core/testing';

import { FormsService } from './forms.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { AnswerDto, Form } from './forms.interface';
import { ALL_FORMS_MOCK } from './forms.mocks';

describe('FormsService', () => {
  let service: FormsService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(FormsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all forms', () => {
    const dummyForms: Form[] = ALL_FORMS_MOCK;

    service.findAll().subscribe((forms) => {
      expect(forms).toEqual(dummyForms);
    });

    const req = httpMock.expectOne(`${apiUrl}/forms`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyForms);
  });

  it('should retrieve a form by id', () => {
    const dummyForm: Form = ALL_FORMS_MOCK[0];

    service.find(dummyForm.id).subscribe((form) => {
      expect(form).toEqual(dummyForm);
    });

    const req = httpMock.expectOne(`${apiUrl}/forms/${dummyForm.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyForm);
  });

  it('should submit form answers', () => {
    const dummyForm: Form = ALL_FORMS_MOCK[0];
    const answers: AnswerDto[] = [{ fieldId: 1, value: 'Answer 1' }];

    service.submit('1', answers).subscribe((form) => {
      expect(form).toEqual(dummyForm);
    });

    const req = httpMock.expectOne(`${apiUrl}/forms/1`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(answers);
    req.flush(dummyForm);
  });
});
