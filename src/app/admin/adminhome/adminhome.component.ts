import { Component } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase';
import { HttpClient, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-adminhome',
  templateUrl: './adminhome.component.html',
})


export class AdminhomeComponent {
  lightCard: any
  usuario: any;
  settings = {
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
columns: {
  id: {
    title: 'ID'
  },
  name: {
    title: 'Campeonato'
  },
  tipo: {
    title: 'Tipo'
  },
  sexo: {
    title: 'Sexo'
  },
  unicacion:{
  title: 'Ubicacion'
  },
  categoria: {
    title: 'Categoria'
  }
}
};
data: any;
datos: any;

  constructor(private router: Router, private http: HttpClient){
      this.datos = new Array();

    firebase.auth().onAuthStateChanged(usuario => {
      if (usuario){
        this.usuario = usuario.uid
        let perfil = localStorage.getItem('perfil')
        if (perfil!="Administrador"){
          this.router.navigate(['/login']);
        }
        this.http.get(environment.server+'/campeonatos?idUsuario='+usuario.uid).subscribe((campeonatos: any) => {
          campeonatos.forEach(c  => {
            this.datos =campeonatos.map( c => {
            return  {
                id: c.IDCAMPEONATO,
                name: c.NOMBRECAMPEONATO,
                tipo: c.TIPO,
                sexo: c.SEXO,
                ubicacion: c.UBICACION,
                categoria: c.CATEGORIA
              }
            })
          })
        })
      }
      else{
        this.router.navigate(['/login'])
      }
    })


  }

  onCreateConfirm(event){
    console.log(event.newData)
    let datos = [{
        "Nombre": event.newData.name,
        "Categoria": event.newData.categoria,
        "Sexo": event.newData.sexo,
        "Ubicación": event.newData.ubicacion,
        "Tipo": event.newData.tipo,
        "IdAdministrador": this.usuario
    }];
    this.http.post(environment.server+'/campeonato',datos,{observe:'response'}).subscribe((result: any) => {
      console.log(result);
      event.confirm.resolve(event.newData);

    })

  }
}
