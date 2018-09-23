import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service: ApiServiceService,
  private route: ActivatedRoute,
private router: Router) { }
id: number;
private sub: any;

  ngOnInit() {

  }

  navigation(){
    
    this.router.navigateByUrl('/products');
  }

}
