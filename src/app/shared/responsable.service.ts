import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  path="http://localhost:3000/responsable/";


  constructor(private http: HttpClient) { }
  createResponsable(data:any) {
    return this.http.post(this.path,data) 
  
  }
  
  getResponsable(id: number) {
    return this.http.get(this.path+ id);
  }
  getAllResponsable() {
    return this.http.get(this.path) 
  
  }
  login(data:any){
    return this.http.post(this.path+"login",data)
  }
}
