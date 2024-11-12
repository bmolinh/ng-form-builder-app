import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsService } from '../forms.service';
import { Observable } from 'rxjs';
import { AnswerDto, Form } from '../forms.interface';
import { AsyncPipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ReactiveFormsModule],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss',
})
export class SubmissionComponent {
  form$!: Observable<Form>;
  formGroup!: FormGroup;
  success = false;

  constructor(
    private formsService: FormsService,
    private formBuilder: FormBuilder
  ) {}

  @Input()
  set id(formId: string) {
    this.form$ = this.formsService.find(+formId);
    this.form$.subscribe((form) => {
      this.createFormGroup(form);
    });
  }

  createFormGroup(form: Form): void {
    const group: any = {};
    form.fields.forEach((field) => {
      group[field.id] = new FormControl(field.defaultValue || '');
    });
    this.formGroup = this.formBuilder.group(group);
  }

  submit(formId: number) {
    const answers: AnswerDto[] = [];

    for (const key in this.formGroup.value) {
      answers.push({ fieldId: +key, value: this.formGroup.value[key] });
    }

    this.formsService.submit(formId, answers).subscribe(() => {
      this.success = true;
    });
  }
}
