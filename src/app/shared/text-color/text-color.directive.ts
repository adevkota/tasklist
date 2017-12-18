import { Directive, ElementRef, Renderer, OnChanges, Input } from '@angular/core';

@Directive({
	selector: '[appTextColor]'
})
export class TextColorDirective implements OnChanges{
	constructor(private el: ElementRef, private renderer: Renderer) { }
	@Input() public appTextColor: string;
	ngOnChanges() {
		this.renderer.setElementStyle(this.el.nativeElement, 'color', this.appTextColor);
	}
}
