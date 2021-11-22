import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ruta} from 'src/app/Models/Ruta';
import { ServiceService } from 'src/app/Service/service.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  rutas: Ruta = new Ruta();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {  
  }

  Guardar(){
    this.service.createRutas(this.rutas)
    .subscribe(data=>{
      alert("Se creo registro con éxito....!!");
      this.router.navigate(["listar"]);
    }
      )
  }
}

