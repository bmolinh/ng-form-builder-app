import { Field, Form } from './forms.interface';

export const FIELDS_MOCK: Field[] = [
  {
    id: 1,
    name: 'test name',
    label: 'test label',
    type: 'text',
    required: true,
    values: null,
    defaultValue: null,
  },
  {
    id: 2,
    name: 'new test name',
    label: 'new test label',
    type: 'text',
    required: false,
    values: null,
    defaultValue: null,
  },
  {
    id: 3,
    name: 'new test name',
    label: 'new test label',
    type: 'text',
    required: false,
    values: ['test', 'test1', 'test2'],
    defaultValue: 'test',
  },
];

export const ALL_FORMS_MOCK: Form[] = [
  {
    id: 1,
    name: 'test name',
    description: 'test description',
    fields: FIELDS_MOCK,
    submissions: [
      {
        id: 1,
        answers: [
          {
            id: 1,
            value: 'test answer',
            field: FIELDS_MOCK[0],
          },
        ],
      },
    ],
  },
];

export const ALL_FORMS_MOCK_2: Form[] = [
  {
    id: 1,
    name: 'test name',
    description: 'test description',
    fields: FIELDS_MOCK,
    submissions: [
      {
        id: 1,
        answers: [
          {
            id: 1,
            value: 'test answer',
            field: FIELDS_MOCK[0],
          },
          {
            id: 2,
            value: 'test answer',
            field: FIELDS_MOCK[1],
          },
          {
            id: 3,
            value: 'test answer',
            field: FIELDS_MOCK[2],
          },
        ],
      },
      {
        id: 2,
        answers: [
          {
            id: 1,
            value: 'test answer',
            field: FIELDS_MOCK[0],
          },
          {
            id: 2,
            value: 'test answer',
            field: FIELDS_MOCK[1],
          },
        ],
      },
      {
        id: 3,
        answers: [
          {
            id: 1,
            value: 'test answer',
            field: FIELDS_MOCK[0],
          },
        ],
      },
    ],
  },
];
