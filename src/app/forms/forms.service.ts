import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnswerDto, Form } from './forms.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Form[]>(`${this.apiUrl}/forms`);
  }

  find(id: number) {
    return this.http.get<Form>(`${this.apiUrl}/forms/${id}`);
  }

  submit(formId: string, fields: AnswerDto[]) {
    return this.http.post<Form>(`${this.apiUrl}/forms/${formId}`, fields)
  }
}
