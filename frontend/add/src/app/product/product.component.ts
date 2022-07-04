import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {




  constructor(private activatedRoute: ActivatedRoute) { 
 
    this.activatedRoute.params.subscribe((params) => {   

      console.log(params); 
      const interval = params;

      this
    }); 
  }

  ngOnInit(): void {
  }

}
