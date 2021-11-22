import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ruta} from 'src/app/Models/Ruta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  rutas: Ruta[] = []; 
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getRutas()
    .subscribe(data=>{
      this.rutas = data;
    })
  }

  Editar(ruta:Ruta):void{
    localStorage.setItem("Idruta", ruta.Idruta.toString());
    this.router.navigate(["edit"]);
  }

  Borrar(ruta:Ruta){
    this.service.deleteRuta(ruta)
    .subscribe(data => {
      this.rutas = this.rutas.filter(p=>p!==ruta);
      alert("La ruta fue borrada con éxito..")
    })

  }

}
