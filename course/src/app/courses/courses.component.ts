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

  constructor(private cursosService: CoursesService) { 
    
    this.portal = 'http://loiane.training'
    this.courses = this.cursosService.getCourses();

  }
}
