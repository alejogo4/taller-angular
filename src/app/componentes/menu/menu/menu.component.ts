import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //Variables - propiedades 

  boton1:string;
  boton2:string;
  mostrar:boolean = false;


  //metodos - funciones
  MostrarOcultar(){
    this.mostrar = !this.mostrar;
  }

  constructor() {
       this.boton1 = "Inicio";
       this.boton2 = "Sobre Mi";
   }

  ngOnInit() {
      console.log("Cargo el componente MenuComponent");
  }

}
