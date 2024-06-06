import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() numberOfPages!: number;
  pageOptions: number[];

  currentPage = 1;

  constructor() {
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2
    ].filter(pageNumber => pageNumber >= 1 && pageNumber <= this.numberOfPages);
  }

}
