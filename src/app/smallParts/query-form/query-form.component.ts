import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {
  
  model: NgbDateStruct;
  time: NgbTimeStruct = {hour: 12, minute: 0, second: 0};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitQuery(form: NgForm){
    if(form.valid) {
    console.log(form.value);
    }
  }

}
