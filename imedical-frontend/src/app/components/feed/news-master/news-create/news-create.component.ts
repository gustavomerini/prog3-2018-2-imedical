import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { News } from 'src/app/models/news';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  news: News;
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private newsId: string;

  constructor(public newsService: NewsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('newsId')) {
        this.mode = 'edit';
        this.newsId = paramMap.get('newsId');
        this.isLoading = true;
        this.newsService.getNew(this.newsId).subscribe(newsData => {
          this.isLoading = false;
          this.news = {
            id: newsData._id,
            Title: newsData.title,
            Content: newsData.content,
            likes: 0
          };
          this.form.setValue({
            title: this.news.Title,
            content: this.news.Content
          });
        });
      } else {
        this.mode = 'create';
        this.newsId = null;
      }
    });
  }

  onSaveNews() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.newsService
        .addNews(this.form.value.title, this.form.value.content)
        .subscribe(() => {
          this.isLoading = false;
          this.newsService.getNews(5, 1);
        });
    } else {
      this.newsService
        .updateNews(this.newsId, this.form.value.title, this.form.value.content)
        .subscribe(() => {
          this.isLoading = false;
          this.newsService.getNews(5, 1);
        });
    }

    this.form.reset();
  }
}