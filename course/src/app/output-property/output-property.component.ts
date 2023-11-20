import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {

  @Input() value: number = 0;
  @Output() changeValue = new EventEmitter();

  increment(){
    this.value++;
    this.changeValue.emit({newValue: this.value});
  }

  decrement(){
    this.value--;
    this.changeValue.emit({newValue: this.value});
  }

  constructor() { }
}
