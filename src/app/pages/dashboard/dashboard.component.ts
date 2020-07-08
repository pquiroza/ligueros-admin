import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  settings = {
    add: {
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
  username: {
    title: 'Tipo'
  },
  email: {
    title: 'Sexo'
  }
}
};
data: any;
  constructor(){
this.data = [
  {
    id:1,
    name: "Campeonato de los Pulentos",
    username: "Liga",
    email: "Masculino"
  },
  {
    id:2,
    name: "Campeonato del Ale Gay",
    username: "Liga",
    email: "Transexual"
  }
  ,
  {
    id:1,
    name: "Campeonato del Pedro Bakan",
    username: "Play Off",
    email: "Masculino"
  }
]
  }


  detalleCampeonato(){
    console.log("funciona")
  }
}
