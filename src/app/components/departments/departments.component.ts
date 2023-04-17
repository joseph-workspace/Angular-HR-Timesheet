import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../interfaces/department';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  departments: Department[]

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.departments = this.departmentsService.departments;
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
