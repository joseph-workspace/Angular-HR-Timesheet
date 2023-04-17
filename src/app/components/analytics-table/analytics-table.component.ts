import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.scss']
})
export class AnalyticsTableComponent implements OnInit {
  @Input()
  departmentId: string | undefined;

  weekdays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  employees: Employee[] = [];
  employeeData: Employee[] = [
    {
      departmentId: '1',
      Friday: 6,
      id: '1',
      Monday: 4,
      name: 'a',
      payRate: 70,
      Saturday: 7,
      Sunday: 6,
      Thursday: 5,
      Tuesday: 3,
      Wednesday: 4
    },
    {
      departmentId: '1',
      Friday: 2,
      id: '2',
      Monday: 4,
      name: 'b',
      payRate: 63,
      Saturday: 1,
      Sunday: 2,
      Thursday: 3,
      Tuesday: 3,
      Wednesday: 4
    },
    {
      departmentId: '2',
      Friday: 9,
      id: '3',
      Monday: 8,
      name: 'c',
      payRate: 76,
      Saturday: 7,
      Sunday: 5,
      Thursday: 4,
      Tuesday: 7,
      Wednesday: 5
    },
    {
      departmentId: '3',
      Friday: 2,
      id: '4',
      Monday: 3,
      name: 'd',
      payRate: 56,
      Saturday: 3,
      Sunday: 2,
      Thursday: 0,
      Tuesday: 4,
      Wednesday: 5
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.employees = this.employeeData.filter(employee => employee.departmentId === this.departmentId);
  }

  getTotalHours(employee: Employee): number {
    return employee.Monday + employee.Tuesday + employee.Wednesday
        + employee.Thursday + employee.Friday + employee.Saturday + employee.Sunday;
  }

}
