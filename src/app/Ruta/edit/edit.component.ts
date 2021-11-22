import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ruta} from 'src/app/Models/Ruta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  ruta: Ruta = new Ruta();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let Idruta = localStorage.getItem("Idruta");
    this.service.getRuta("/"+Idruta)
    .subscribe(data => {
      this.ruta=data;
    })
  }

  Actualizar(ruta:Ruta){
    this.service.updateRuta(ruta)
    .subscribe(data => {
      alert("se actualizo con exito...!!");
      this.router.navigate(["listar"]);
    })  
  }

}
