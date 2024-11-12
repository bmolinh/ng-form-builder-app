export interface Form {
  id: number;
  name: string;
  description: string;
  fields: Field[];
  submissions: Submission[];
}

export interface Field {
  id: number;
  name: string;
  label: string;
  type: string;
  required: boolean;
  values: string[] | null;
  defaultValue: string | null;
}

export interface Submission {
  id: number;
  answers: Answer[];
}

export interface Answer {
  id: number;
  value: string;
  field: Field;
}

export interface AnswerDto {
  fieldId: number;
  value: string;
}
