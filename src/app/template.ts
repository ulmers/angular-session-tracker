import { Section } from './section';

export class Template {
  id: string;
  name: string;
  desc: string;
  creatorId: number;
  sections: Section[];
}