import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seance } from '../Model/seance';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  path="http://localhost:3000/seance";

  constructor(private http: HttpClient) { }
  createSeance(data:any) {
    return this.http.post(this.path+"/",data) 
  }

  getAllSeance(){
    return this.http.get(this.path+"/");
  }

  deleteSeance(id:any) {
    return this.http.delete(this.path+"/"+ id);
  }
  uploadFile(data:any) {
    return this.http.post(this.path+"/upload",data) 
   
   }
  getSeance(id: number) {
    return this.http.get(this.path+"/"+ id);
  }

  updateSeance(id:number,seance: Seance){
    return this.http.put(this.path+"/"+id,seance);
  }

}
