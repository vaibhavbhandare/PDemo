import { Component, OnInit } from '@angular/core';
import { HelloElement } from './elements/lit-element';
import { ElementTwo } from './elements/lit-element-two';
import './elements/element-three.js';

// checking the element present or not otherwise asseration get fails
console.assert(HelloElement !== undefined);
console.assert(ElementTwo !== undefined);

@Component({
  selector: 'app-lit-element',
  templateUrl: './lit-element.component.html',
  styleUrls: ['./lit-element.component.css']
})
export class LitElementComponent implements OnInit {

  public title = 'Below are the LitElement inside an Angular component!';
  public name = 'and First Lit-Element';
  public inputValue = '';

  constructor() { }

  ngOnInit() {
  }

  getvalue(value) {
    this.inputValue = value;
  }

}
