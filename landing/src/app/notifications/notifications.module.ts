import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './notification-list/notification-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotificationListComponent
  ],
  exports: [NotificationListComponent]
})
export class NotificationsModule { }
