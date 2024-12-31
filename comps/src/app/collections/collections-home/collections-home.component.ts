import { Component } from '@angular/core';
import { DividerComponent } from "../../shared/divider/divider.component";
import { TableComponent } from "../table/table.component";
import { TabsComponent } from '../tabs/tabs.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [
    DividerComponent,
    TableComponent,
    TabsComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 26, job: 'Engineer' },
    { name: 'Elyse', age: 25, job: 'Engineer' }
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];
}
