import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit,AfterViewChecked {

  constructor(private parent: AppComponent) { }

  ngOnInit() {
    this.parent.text='Modified text in parent component';
  }

  ngAfterViewInit(){
    //Uncomment below line to generate error
    //this.parent.text='Modified text in parent component';
  }

  ngAfterViewChecked(){
    //Uncomment below line to generate error
    //this.parent.text='Modified text in parent component';
  }
}
