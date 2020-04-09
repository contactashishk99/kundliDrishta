import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {
  
  model: NgbDateStruct;
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  constructor() { }

  toggleSeconds() {
    this.seconds = !this.seconds;
}
  
  ngOnInit(): void {
  }

}
