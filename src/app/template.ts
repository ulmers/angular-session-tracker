import { Section } from './section';

export class Template {
  id: number;
  name: string;
  desc: string;
  creatorId: number;
  sections: Section[];
}