import { Component } from '@angular/core';
import { NotificationsService, Command } from '../notifications.service';
import { Observable } from 'rxjs';
import { NgFor, AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, NgClass],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.css'
})
export class NotificationListComponent {
  messages: Observable<Command[]>;

  constructor(private notificationsService: NotificationsService) {
    this.messages = this.notificationsService.messagesOutput;
  }

  clearMessage(id: number) {
    this.notificationsService.clearMessage(id);
  }

}
