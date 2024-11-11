import { Form } from './forms.interface';

export const allForms: Form[] = [
  {
    id: 1,
    name: 'test name',
    description: 'test description',
    fields: [
      {
        id: 1,
        name: 'test name',
        label: 'test label',
        type: 'text',
        required: true,
        values: null,
        defaultValue: null,
        answers: [
          {
            id: 1,
            value: 'test answer',
          },
        ],
      },
      {
        id: 2,
        name: 'new test name',
        label: 'new test label',
        type: 'text',
        required: false,
        values: null,
        defaultValue: null,
        answers: [],
      },
      {
        id: 3,
        name: 'new test name',
        label: 'new test label',
        type: 'text',
        required: false,
        values: ['test', 'test1', 'test2'],
        defaultValue: 'test',
        answers: [],
      },
    ],
  },
];
