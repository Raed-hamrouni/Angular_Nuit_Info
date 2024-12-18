import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adhérent } from '../Model/adhérent';
@Injectable({
  providedIn: 'root'
})
export class AdherentService {
  path="http://localhost:3000/adherent";

  constructor(private http: HttpClient) { }
  login(data:any){
    return this.http.post(this.path+"/login",data)
  }
  createAdherent(data:any) {
    return this.http.post(this.path+"/",data) 
  
  }
  deleteAdherent(id:any) {
    return this.http.delete(this.path+"/"+ id);
  }

  updateAdherent(id:number,adherent: Adhérent){
    return this.http.put(this.path+"/"+id,adherent);
  }
  getAllAdherent(){
    return this.http.get(this.path+"/");
  }

  getAdherent(id: number) {
    return this.http.get(this.path+"/"+ id);
  }
  uploadFile(data:any) {
    return this.http.post(this.path+"/upload",data) 
   
   }
    participer(data:any) {
    return this.http.post(this.path+"/a/",data) 
  
  }
  getAdherentBySeance(id:any){
    return this.http.get(this.path+"/get/"+id);
    
    }
    








}
