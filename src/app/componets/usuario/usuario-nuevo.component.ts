import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(public router: ActivatedRoute) { 
    this.router.parent.params.subscribe( params => {
      console.log("Ruta hija usuario Nuevo")
      console.log(params)
    })
  }

  ngOnInit() {
  }

}
