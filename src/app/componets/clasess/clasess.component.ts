import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clasess',
  templateUrl: './clasess.component.html',
  styles: []
})
export class ClasessComponent implements OnInit {

  tipoAlerta:string = "alert-danger"  ;
  propiedades:object = {
    danger:false
  };
  loading:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar()
  {
  this.loading = true;
  setTimeout(() => this.loading = false,3000)


  }

}
