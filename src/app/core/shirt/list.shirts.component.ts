import {Component, OnInit} from '@angular/core';
import {ShirtService} from "../services/shirt.service";
import {Shirt} from "../models/Shirt";

@Component({
  selector: 'create-shirt',
  templateUrl: './list.shirts.component.html',

})
export class ListShirtsComponent implements OnInit {

  shirts: Shirt[];
  constructor( service: ShirtService

  ) {
    console.log("here")
    service.getAll().subscribe(shirts => {
      this.shirts = shirts;
      console.log(this.shirts)
    })
  }

  ngOnInit() {

  }
}
