import { Exercise } from './exercise';

export class Section {
  name: string;
  desc: string;
  shouldSuperset: boolean;
  exercises: Exercise[];
}