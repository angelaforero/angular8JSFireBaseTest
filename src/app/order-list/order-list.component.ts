import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private ordersService:OrdersService, private http: HttpClient){}
  ngOnInit() {
    //this.getCoffeeOrders();
  }

  //coffeeOrders;   getCoffeeOrders = () =>
  //this.ordersService.getCoffeeOrders().subscribe(res =>(this.coffeeOrders = res));

}
