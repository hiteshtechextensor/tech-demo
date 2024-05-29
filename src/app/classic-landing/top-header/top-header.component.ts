import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-header',
  standalone: false,
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
})
export class TopHeaderComponent {
  panelStatus: boolean = true;
  isNotificationListVisible: boolean = false;
  isUserDropDownVisible: boolean = false;
  notificationCount: number = 3;
  @Output() notification = new EventEmitter<boolean>();
  @Output() panelOpenClose = new EventEmitter<boolean>();

  leftMenuSlide() {
    this.panelStatus = !this.panelStatus;
    this.panelOpenClose.emit(this.panelStatus);
  }
  /**
   * Toggles the visibility of the notification list.
   */
  showNotification() {
    const isVisible = !this.isNotificationListVisible;
    this.isNotificationListVisible = isVisible;
    this.notification.emit(isVisible);
  }
  /**
   * Toggles the visibility of the user drop down list.
   */
  userDropDown() {
    this.isUserDropDownVisible = !this.isUserDropDownVisible;
    // this.userDropDownShowHide.emit(this.isUserDropDownVisible);
  }
}
