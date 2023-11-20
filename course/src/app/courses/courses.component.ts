import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  portal: string;
  courses: string[];
  actualValue: string = '';  // To show the value received in #inputField
  savedValue:string = '';  // To show the value entered or clicked outside from #inputField
  isMouseOver: boolean = false;
  person:any = {
    name: '',
    age: 0,
  }
  courseName: string = 'Angular';
  initialValue: number = 15;

  constructor(private cursosService: CoursesService) { 
    
    this.portal = 'http://loiane.training'
    this.courses = this.cursosService.getCourses();

  }

  clickedButton(){
    alert('Clicked button!');
  }

	/* For intellisense to work with the event, use variable typing. */
  onKeyUp(event: KeyboardEvent){
		/* 
			If we use `evento.target,value`, it gives a compilation error, because 
      the `event.target` is of type <HTMLInputElement> . It is an interface
      that TS uses to deal with JavaScript object types.
		 */
    this.actualValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value:string){
    this.savedValue = value;
  }

	onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onChangeValue(event: any){
    console.log(event.newValue);
  }
}
