import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  color = 'primary';
  priceFrom: number = 0;
  priceTo: number = 0;
  size = 'small';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.priceFrom = params['priceFrom'];
      this.priceTo = params['priceTo'];
      this.size = params['size'];
      this.color = params['color'];

      console.log(params);
      const interval = params;

      this;
    });
  }

  ngOnInit(): void {}
}
