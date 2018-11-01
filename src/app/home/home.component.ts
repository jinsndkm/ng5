import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:String="Add item";
  goalText:string="My first goal";
  goals=[];
  products:any = [];
  constructor(public rest:RestService) { }

  ngOnInit() {
 
    this.itemCount=this.goals.length;

  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      alert(JSON.stringify(data))
      console.log(data);
      this.products = data;
    });
  }

 
  addItem(){
    this.getProducts();
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
     
  }

}
