import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Producto } from 'src/app/modelo/producto';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registroauto',
  templateUrl: './registroauto.page.html',
  styleUrls: ['./registroauto.page.scss'],
})
export class RegistroautoPage implements OnInit {

  constructor(public navCtrl:NavController, private database: FirestoreService, public altCtrl:AlertController){

  }

//variable para generar posteriormente un alert
  alertError={
    header: `Error`,
    subHeader: `Campos no rellenados`,
    message: `Tendra que rellenar los campos faltantes`,
    buttons: ['De nuevo'],
  };

  //funcion parametrizada para alert, alert con los datos del producto agregado
  
  //funcion para volver a la pagina anterior
  volver(){
      this.navCtrl.back()
  }

  //variable para poder usar en la funcion de crearDocumento()
  //sirve para obtener los datos de los input
  data:Producto={
      marca:'',
      color:'',
      patente:'',
      annio:'',
      id:''
    }
  
    //variable array con instancia del modelo "Producto",  para almacenar los productos de la base de datos
    productos:Producto[]=[];
  
    //inicializador
    ngOnInit() {
      this.getProductos();
    }

    //funcion para poder agregar un producto
    async crearDocumento(){

      //condicion para poder agregar un producto
      if(this.data.marca!='' && this.data.color!='' && this.data.patente!='' && this.data.annio!='' ){

        //creador de id para el documento que se creara para almacenar el producto agregado
        const id=this.database.crearID();
        
        //almacenar la creacion de id en la varibale data(id)
        this.data.id=id;
        
        //se llama la funcion de firestore para generar un documento para almacenar el producto
        this.database.crearDocumento(this.data,'Auto',id);
        
        
  
    
        //se llama a la funcion para dejar en estado vacio los campos ya rellenados en la pagina de agregar
        this.normalState();
      }
      else{

        //condicion por si los campos no fueron correctamente rellenados 
        const alert= await this.altCtrl.create(this.alertError)
        await alert.present();
      }


    }
    
    //funcion para obtener los productos almacenados
    getProductos(){
      this.database.obtenerColeccion<Producto>('Productos').subscribe(prod=>{

        //almacenar los productos a la variable productos
        this.productos=prod;
      })
    }

    //funcion para dejar en estado vacio los campos de ingreso de datos
    normalState(){
      this.data={
        marca:'',
        color:'',
        patente:'',
        annio:'',
        id:''
      }
          }
}
