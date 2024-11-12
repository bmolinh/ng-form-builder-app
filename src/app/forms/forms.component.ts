import { Component } from '@angular/core';
import { FormsService } from './forms.service';
import { map, Observable } from 'rxjs';
import { Answer, Form } from './forms.interface';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  forms$!: Observable<Form[]>;
  form$!: Observable<Form>;

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    this.forms$ = this.formsService.findAll();
    this.form$ = this.forms$.pipe(map((forms) => forms[0]));
  }

  getAnswer(answers: Answer[], fieldId: number): string {
    return answers.find((a) => a.field.id === fieldId)?.value || 'N/A';
  }

  setForm(event: unknown) {
    const casted = event as { target?: { value?: string } };
    const formId = casted.target?.value || '0';

    this.form$ = this.forms$.pipe(
      map((forms) => forms.find((form) => form.id === +formId)!)
    );
  }
}
