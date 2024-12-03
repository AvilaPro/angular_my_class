import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroment } from "../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  apiURL = enviroment.apiDolar;

  constructor(private http: HttpClient) { }

  getTasasDolar(){
    return this.http.get(this.apiURL) as Observable<any[]>;
  }
}
