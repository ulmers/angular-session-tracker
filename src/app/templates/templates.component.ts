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

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.getTemplates();
  }
  
  getTemplates(): void {
    this.templateService.getTemplates().subscribe(templates => this.templates = templates);
  }
  
  newOption(exerciseName: string, sectionName: string, templateId: string): void {
    this.templateService.addOption( new Option(),
                                    exerciseName, 
                                    sectionName, 
                                    templateId);
  }
  
  newExercise(sectionName: string, templateId: string): void {
    this.templateService.addExercise( new Exercise(),
                                      sectionName,
                                      templateId);
  }
  
  newSection(templateId: string): void {
    this.templateService.addSection( new Section(),
                                     templateId);
  }
}