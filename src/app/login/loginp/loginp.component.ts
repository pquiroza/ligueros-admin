import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase';
import { HttpClient, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'ngx-loginp',
  templateUrl: './loginp.component.html',
})


export class LoginpComponent {

  constructor(private router: Router, public afAuth: AngularFireAuth, private http: HttpClient){

  }


  login(email,password){
    this.afAuth.signInWithEmailAndPassword(email,password).then((result) => {
      console.log(result)
      firebase.auth().onAuthStateChanged(usuario => {
        console.log(usuario)
        console.log(tipo[0])
        console.log(typeof("Administrador"))
        this.router.navigate(['/admin'])
        localStorage.setItem('perfil',tipo[0].TIPO)
        this.http.get(environment.server+'/usuario?IdGoogle='+usuario.uid).subscribe((tipo:any) => {

          /*
          if (tipo[0].TIPO=="Administrador"){
            this.router.navigate(['/admin'])
            localStorage.setItem('perfil',tipo[0].TIPO)
          }
          if (tipo[0].TIPO=="Colaborador"){
            this.router.navigate(['/pages'])
          }
*/


        })
      })
    })
  }
}
