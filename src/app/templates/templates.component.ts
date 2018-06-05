import { Component, OnInit } from '@angular/core';

import { Template } from '../template';
import { Section } from '../section';
import { Exercise } from '../exercise';
import { Option } from '../option';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  templates: Template[];
  
  isEditing: false;

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.getTemplates();
  }
  
  getTemplates(): void {
    this.templateService.getTemplates().subscribe(templates => this.templates = templates);
  }
  
  newOption(exerciseName: string, sectionName: string, templateId: string): void {
    
    var opt = new Option();
    opt.name = 'New Option';
    opt.desc = 'Add Option Description...';
    opt.setRange = [0,0];
    opt.repRange = [0,0];
    
    this.templateService.addOption( opt,
                                    exerciseName, 
                                    sectionName, 
                                    templateId);
  }
  
  newExercise(sectionName: string, templateId: string): void {
    
    var exer = new Exercise();
    exer.name = 'New Exercise';
    exer.options = new Array<Option>();
    
    this.templateService.addExercise( exer,
                                      sectionName,
                                      templateId);
  }
  
  newSection(templateId: string): void {
    
    var sec = new Section();
    
    sec.name = 'New Section';
    sec.desc = 'Add a description...';
    sec.shouldSuperset = false;
    sec.exercises = new Array<Exercise>();
    
    this.templateService.addSection(sec,
                                    templateId);
  }
}