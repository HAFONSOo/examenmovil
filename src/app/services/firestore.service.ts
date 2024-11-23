import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs : AngularFirestore) { }

   crearDocumento(data: any, path: string, id: string){
    const coleccion = this.afs.collection(path);
    return coleccion.doc(id).set(data)
   }

  obtenerColeccion<tipo>(path:string){
    return this.afs.collection<tipo>(path).valueChanges()
  }

  crearID(){
    return this.afs.createId();
  }
  eliminarProd(id:string){
this.afs.collection('Auto').doc(id).delete();
  }
  modificarProd(id:string, data:any){
    this.afs.collection('Auto').doc(id).update(data)
  }
}
