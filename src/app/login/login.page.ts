import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    
  constructor(private as:AuthService, public ac:AlertController, public nc:NavController) { }

  email:string=""
  password:string=""

  ngOnInit() {
  }

  vaciarCampos(){
    this.email="";
    this.password="";
  }
  

  async showMensaje(header:string,subHeader:string,mensaje:string){
    const alerta=await this.ac.create({
      header:header,
      subHeader:subHeader,
      message:mensaje,
      buttons:['Ok']
    })
    alerta.present();
  }
//funcion para poder iniciar sesion gracias a funciones de firebase
async  iniciar_sesion(){

  //obtener resultado boolean mediante una funcion que se llamo en el constructor(authService) 
    const res=await this.as.signIn(this.email,this.password);

    if(res){
      this.showMensaje('Bienvenido','Sesion exitosa','Te redigiremos a inicio');
      this.vaciarCampos();
      this.nc.navigateRoot('/home')
    }
    else{
      this.showMensaje('Error','Sesion fallida','Revise los campos que ingresó');
    }

  }
//funcion para poder registrarse gracias a funciones de firebase
  volver(){
      this.nc.back()
  }
}



