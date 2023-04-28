import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Employee } from '../interfaces/employee';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private db: AngularFirestore
  ) { }

  saveEmployeeHours(employee: Employee): any {
    this.db.collection('employee-hours').add(employee);
  }

  getEmployeeHoursByDepartment(departmentId: string): Observable<Employee[]> {
    const filteredEmployees = this.db.collection('employee-hours', ref => ref.where('departmentId', '==', departmentId));
    return filteredEmployees.snapshotChanges().pipe(
      map((items: DocumentChangeAction<Employee>[]): Employee[] => {
        return items.map((item: DocumentChangeAction<Employee>): Employee => {
          return {
            //below id is being set to equal departmentId param that was passed into the function
            id: item.payload.doc.id,
            departmentId,
            //below the properties are being read which is why .data() is used there but not used above when setting
            name: item.payload.doc.data().name,
            payRate: item.payload.doc.data().payRate,
            monday: item.payload.doc.data().monday,
            tuesday: item.payload.doc.data().tuesday,
            wednesday: item.payload.doc.data().wednesday,
            thursday: item.payload.doc.data().thursday,
            friday: item.payload.doc.data().friday,
            saturday: item.payload.doc.data().saturday,
            sunday: item.payload.doc.data().sunday,
          };
        });
      })
    );
  }

  updateEmployeeHours(employee: Employee): any {
    this.db.collection('employee-hours').doc(employee.id).set(employee);
  }

  deleteEmployeeHours(employee: Employee): any {
    this.db.collection('employee-hours').doc(employee.id).delete();
  }
}
