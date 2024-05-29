import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  isPopupVisible = true;

  notifications = [
    {
      type: 'Mailbox',
      message: 'You have 15 unread mails across 3 mailboxes',
      time: 'May 23, 9:04 AM',
      icon: 'ph-envelope',
      read: true,
    },
    {
      type: 'Cron jobs',
      message: 'Your Docker container is ready to publish',
      time: 'May 23, 7:04 AM',
      icon: 'ph-star',
      read: true,
    },
    {
      type: 'Mailbox',
      message: 'You have 3 new mails',
      time: 'May 22, 12:04 PM',
      icon: 'ph-envelope',
      read: false,
    },
    {
      type: 'Mailbox',
      message: 'You have 15 unread mails across 3 mailboxes',
      time: 'May 23, 9:04 AM',
      icon: 'ph-envelope',
      read: true,
    },
    {
      type: 'Cron jobs',
      message: 'Your Docker container is ready to publish',
      time: 'May 23, 7:04 AM',
      icon: 'ph-star',
      read: true,
    },
    {
      type: 'Mailbox',
      message: 'You have 3 new mails',
      time: 'May 22, 12:04 PM',
      icon: 'ph-envelope',
      read: false,
    },
    {
      type: 'Mailbox',
      message: 'You have 15 unread mails across 3 mailboxes',
      time: 'May 23, 9:04 AM',
      icon: 'ph-envelope',
      read: true,
    },
    {
      type: 'Cron jobs',
      message: 'Your Docker container is ready to publish',
      time: 'May 23, 7:04 AM',
      icon: 'ph-star',
      read: true,
    },
    {
      type: 'Mailbox',
      message: 'You have 3 new mails',
      time: 'May 22, 12:04 PM',
      icon: 'ph-envelope',
      read: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  removeNotification(notificationToRemove: any): void {
    this.notifications = this.notifications.filter(
      (notification) => notification !== notificationToRemove
    );
  }

  markAsRead(notification: any) {
    notification.read = true; // Assuming you have a 'read' property in your notification object
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
