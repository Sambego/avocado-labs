export class Registrant {
  readonly email: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly job_title: string;
  readonly org: string;
  readonly custom_questions: [
    {
      readonly title: string;
      readonly value: boolean;
    },
  ];
}
