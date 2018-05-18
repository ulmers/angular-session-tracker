import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Template } from './template';
import { TEMPLATES } from './mock-templates';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }
  
  getTemplates(): Observable<Template[]> {
    return of(TEMPLATES);
  }
}
