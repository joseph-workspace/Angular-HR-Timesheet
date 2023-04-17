export interface Employee {
    //index signature
    [key: string]: string | undefined | number;

    id: string;
    departmentId: string | undefined;
    name: string;
    payRate: number;
    Monday: number;
    Tuesday: number;
    Wednesday: number;
    Thursday: number;
    Friday: number;
    Saturday: number;
    Sunday: number;
}
