import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DatabeaseService {

  constructor(private http: HttpClient) { }

  storeOnServer(queryData: any[]){
    return this.http.post(environment.firebaseConfig.databaseURL + '/query.json', queryData);
  }
}
