import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  // 01
  // constructor(private elementref: ElementRef) { 
  //   this.elementref.nativeElement.style.backgroundColor = 'green';
  //  }

  //2
  // constructor(private elementref: ElementRef,private renderer : Renderer) { 
  //  this.renderer.setElementStyle(this.elementref.nativeElement,"background-color","green");
  // }

  //3

  @HostListener("mouseenter") mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding("style.backgroundColor") get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = "white";
  //@Input() highlightColor = "green";
  // OR share with property binding
  @Input('highlight') highlightColor = "green";
  private backgroundColor: string = this.defaultColor;

  constructor() { }
  ngInit() {
    this.backgroundColor = this.defaultColor;
  }



}
