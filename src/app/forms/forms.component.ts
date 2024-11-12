import { Component } from '@angular/core';
import { FormsService } from './forms.service';
import { Observable } from 'rxjs';
import { Answer, Form } from './forms.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  forms$!: Observable<Form[]>;

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    this.forms$ = this.formsService.findAll();
  }

  getAnswer(answers: Answer[], fieldId: number): string {
    return answers.find((a) => a.field.id === fieldId)?.value || 'N/A';
  }
}
