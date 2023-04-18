import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../interfaces/department';
import { DepartmentsService } from '../../services/departments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  // departments: Department[]
  $departments: Observable<Department[]> | undefined;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.departmentsService.getDepartments().subscribe(departments => {
    //   this.departments = departments;
    // });
    this.$departments = this.departmentsService.getDepartments();
    
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
