import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Template } from './template';
import { Section } from './section'; 
import { Exercise } from './exercise';
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
      
    while((TEMPLATES.find(template => template.id === templateId).sections.find(section => section.name === sectionName).exercises.find(exercise => exercise.name === exerciseName).options.some(o => o.name == option.name))){
      var dup = new RegExp('\([0-9*]\)');
      
      var len = option.name.length;
      
      if(dup.test(option.name.substring(len-3, len))){
        option.name = option.name.substring(0, len-3).concat('(',(parseInt(option.name.substring(option.name.lastIndexOf('(') + 1, option.name.lastIndexOf(')')))+1).toString(),')');
      } else {
        option.name += '(1)';
      }
      
    }
    
    TEMPLATES.find(template => template.id === templateId).sections.find(section => section.name === sectionName).exercises.find(exercise => exercise.name === exerciseName).options.push(option);
  }
  
  addExercise(exercise: Exercise, sectionName: string, templateId: string) {
    TEMPLATES.find(template => template.id === templateId).sections.find(section => section.name === sectionName).exercises.push(exercise);
  }
  
  addSection(section: Section, templateId: string) {
    TEMPLATES.find(template => template.id === templateId).sections.push(section);
  }
}
