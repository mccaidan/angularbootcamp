import { Component } from '@angular/core';
import { NewsApiService, Article } from '../news-api.service';
import { NgFor } from '@angular/common';
import { TrimOutletNamePipe } from "../trim-outlet-name.pipe";
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: 'app-na-article-list',
    standalone: true,
    templateUrl: './na-article-list.component.html',
    styleUrl: './na-article-list.component.css',
    imports: [NgFor, TrimOutletNamePipe, SharedModule]
})
export class NaArticleListComponent {
  articles?: Article[];

  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.pagesOutput.subscribe(articles => {
      this.articles = articles;
    });

    this.newsApiService.getPage(1);
  }

}
