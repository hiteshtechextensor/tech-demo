import { Component } from '@angular/core';

@Component({
  selector: 'app-classic-landing',
  standalone: false,
  templateUrl: './classic-landing.component.html',
  styleUrl: './classic-landing.component.scss'
})
export class ClassicLandingComponent {
  isPanelOpen : boolean = true;

  panelOpenClose(event:boolean){
    this.isPanelOpen = event
  }
}
