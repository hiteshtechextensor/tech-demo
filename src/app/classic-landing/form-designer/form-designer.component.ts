import { Component } from '@angular/core';
import { FormioForm } from '@formio/angular';

@Component({
  selector: 'app-form-designer',
  standalone: false,

  templateUrl: './form-designer.component.html',
  styleUrl: './form-designer.component.scss',
})
export class FormDesignerComponent {
  formJSON: FormioForm = { display: 'form', components: [] };

  handleFormChange(event: any) {
    console.log(event.form);
  }
}
