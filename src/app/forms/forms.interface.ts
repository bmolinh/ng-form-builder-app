export interface Form {
  id: number;
  name: string;
  description: string;
  fields: Field[];
}

export interface Field {
  id: number;
  name: string;
  label: string;
  type: string;
  required: boolean;
  values: string[] | null;
  defaultValue: string | null;
  answers: Answer[];
}

export interface Answer {
  id: number;
  value: string;
}

export interface AnswerDto {
  fieldId: number;
  value: string;
}
