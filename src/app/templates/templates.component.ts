import { Component, OnInit } from '@angular/core';

import { Template } from '../template';
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
    this.templateService.getTemplates().subscribe();
  }

}
