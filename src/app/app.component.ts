import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tab-demo';

  ngAfterViewInit() {
    this.removeOverlayDivs();
  }

  private removeOverlayDivs(): void {
    setTimeout(() => {
      document
        .querySelectorAll('div[style*="background-color: rgba(0, 0, 0, 0.5)"]')
        .forEach((e) => e.remove());
      document
        .querySelectorAll('div[style*="z-index: 999999999"]')
        .forEach((e) => e.remove());
    }, 100);
  }
}
