import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { DatabeaseService } from '../../service/databease.service';
import { Utilities } from '../../service/utilites.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {
  
  model: NgbDateStruct;
  time: NgbTimeStruct = {hour: 12, minute: 0, second: 0};
  constructor(private dbService : DatabeaseService) { }

  ngOnInit(): void {
  }

  onSubmitQuery(form: NgForm){
    if(form.valid) {
      let formValues = form.value;
      let queryFormDetails:any = {};
      let dobAndTime:any = {}
      dobAndTime.dateOfBirth = formValues.dateOfBirth._d;
      dobAndTime.time = formValues.time;
      queryFormDetails.dobAndTime = dobAndTime;
      queryFormDetails.birthPlace = formValues.birthPlace;
      queryFormDetails.emailID = formValues.emailID
      queryFormDetails.question = formValues.question
      queryFormDetails.userName = formValues.userName
      
      // console.log(queryFormDetails);
      this.dbService.storeOnServer(queryFormDetails).subscribe(
        (response) => {console.log(response)},
        (error) => { console.log(error)}
      )
    }
  }

}
