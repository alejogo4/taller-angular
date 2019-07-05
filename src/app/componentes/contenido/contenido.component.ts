import { Component, OnInit } from '@angular/core';
import {PostService} from './../../servicios/post.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  datosPost:any;
  constructor(private servicio:PostService) { 
      
  }

  ngOnInit() {
  }
  

  traerDatos(){
    this.servicio.obtenerPost().subscribe(
      (datos)=>{
          this.datosPost = datos;
          console.log(this.datosPost);
      }
    );
  }
}
