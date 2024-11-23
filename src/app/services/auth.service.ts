import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa:AngularFireAuth) { }


  async signIn(email: string, password: string): Promise<boolean> {
    try {
      await this.afa.signInWithEmailAndPassword(email, password); // Utilizamos el método de AngularFireAuth
      return true;
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      return false;
    }
  }
  async signUp(email: string, password: string): Promise<any> {
    try {
        await this.afa.createUserWithEmailAndPassword(email, password);
        return true;
    } catch (error) {

      return false;

    }
}
async getUser(){
  let user=await this.afa.currentUser
  if(user){
    console.log('el usuario es '+user)
    return user.email
    
  }else{
    console.log('doesnt work')
    return null
  }
}

async logOut():Promise<void>{
  await this.afa.signOut();
}

}
