import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email:string='' ;
  password:string='';


  errorMessage:string='';
  constructor(private authService:AuthService,private alertController:AlertController,
    private router:Router
  ) { }

  ngOnInit():void {
  }
  async registro(){
    const result=await this.authService.signUp(this.email,this.password);
    let mensaje="";
    let cabeza="";
    if(result!==true){
      this.errorMessage=result;
      cabeza="Advertencia";
      mensaje="Revise los campos y vuelva a intentarlo"
    }else{
      cabeza = "Felicidades";
      mensaje = "Te vamos a rederigir a la pestaña de Iniciar Sesion...."


      this.router.navigate(['/login']);
    }
    const alert = await this.alertController.create({
      header:cabeza,
      message:mensaje,
      buttons:['Aceptar'],
    });
    await alert.present();
  }
}
