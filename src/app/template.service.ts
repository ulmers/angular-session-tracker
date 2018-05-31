import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Template } from './template';
import { Section } from './section'; 
import { Exercise } form '/exercise';
import { Option } from './option';
import { TEMPLATES } from './mock-templates';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }
  
  getTemplates(): Observable<Template[]> {
    return of(TEMPLATES);
  }
  
  addOption(option: Option, exerciseName: string, sectionName: string, templateId: string) {
    TEMPLATES.find(template => template.id === templateId).sections.find(section => section.name === sectionName).exercises.find(exercise => exercise.name === exerciseName).options.push(option);
  }
  
  addExercise(exercise: Exercise, sectionName: string, templateId: string) {
    TEMPLATES.find(template => template.id === templateId).sections.find(section => section.name === sectionName).exercises.push(exercise);
  }
  
  addSection(section: Section, templateId: string) {
    TEMPLATES.find(template => template.id === templateId).sections.push(section);
  }
}
