import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products;
product;
id;
  constructor( private service: ApiServiceService,
  private route: ActivatedRoute,
private router: Router,
) { }

  ngOnInit() {
    this.service.getProducts().subscribe((data:any) => {
      console.log(data);
      this.products = data;
     
      
    
    });
    
  

  }

  navigation(id){
    
    this.router.navigate(['/product-details/' + id]);
    
  }

}
