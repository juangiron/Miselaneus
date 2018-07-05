import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public elRef:ElementRef) { 
    
    console.log("directiva llamada")
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  resaltar(color:string){
    this.elRef.nativeElement.style.backgroundColor = color;
  }

}
