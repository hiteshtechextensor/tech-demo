import { Component } from '@angular/core';
import { FormioForm } from '@formio/angular';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent {

  public data:object[] = [
    {
      no: 1,
      name : "Piyush",
      age : 28,
      city:"Pune",
      country:"India"
    },
    {
      no: 2,
      name : "karan",
      age : 24,
      city:"Mumbai",
      country:"India"
    },
    {
      no: 3,
      name : "mark",
      age : 22,
      city:"New York",
      country:"USA"
    }
  ]

  formJSON: FormioForm = { display: 'form', components: [] };

  handleFormChange(event:any) {
   console.log(event.form);
  }
}
