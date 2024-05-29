import { Component } from '@angular/core';

@Component({
  selector: 'app-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrl: './setting-panel.component.scss',
})
export class SettingPanelComponent {
  showHideDrawerFlag: boolean = false;

  showHideDrawer(): void {
    this.showHideDrawerFlag = !this.showHideDrawerFlag;
  }
}
