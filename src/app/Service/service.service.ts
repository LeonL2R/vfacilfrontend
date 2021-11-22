import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ruta} from '../Models/Ruta';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url="http://localhost:3000/rutas"

  getRutas(){
    return this.http.get<Ruta[]>(this.Url);
  }

  createRutas(ruta:Ruta){
    return this.http.post<Ruta>(this.Url, ruta);
  }
  
  getRuta(Idruta:String){
    return this.http.get<Ruta>(this.Url+"/"+Idruta);
  }

  updateRuta(ruta:Ruta){
    return this.http.put(this.Url+"/"+ruta.Idruta,ruta);
  }

  deleteRuta(ruta:Ruta){
    return this.http.delete(this.Url+"/"+ruta.Idruta);
  }
}

