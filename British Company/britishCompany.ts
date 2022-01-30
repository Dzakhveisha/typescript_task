interface IEmployee {
    getCurrentProject(): string;

    getName(): string;
}

interface ILocation {

    addPerson(employee: IEmployee): void;

    getPerson(index: number): IEmployee;

    getCount(): number
}

class CompanyLocationArray implements ILocation {

    private readonly employees: IEmployee[];

    constructor() {
        this.employees = []
    }

    getCount(): number {
        return this.employees.length;
    }

    getPerson(index: number): IEmployee {
        return this.employees[index];
    }

    addPerson(employee: IEmployee): void {
        this.employees.push(employee);
    }
}

class CompanyLocationLocalStorage implements ILocation {

    private readonly itemName: string = "employees";

    constructor() {
        let tempArray: IEmployee[] = [];
        localStorage.setItem(this.itemName, JSON.stringify(tempArray));
    }


    addPerson(employee: IEmployee): void {
        let tempArray: IEmployee[] = JSON.parse(localStorage.getItem(this.itemName));
        tempArray.push(employee);
        localStorage.setItem(this.itemName, JSON.stringify(tempArray));
    }

    getCount(): number {
        let tempArray: IEmployee[] = JSON.parse(localStorage.getItem(this.itemName));
        return tempArray.length;
    }

    getPerson(index: number): IEmployee {
        let tempArray: any[] = JSON.parse(localStorage.getItem(this.itemName));
        return new Employee(tempArray[index].name, tempArray[index].currentProject);
    }
}

class Employee implements IEmployee {

    private readonly currentProject: string;
    private readonly name: string;

    constructor(name: string, project: string) {
        this.name = name;
        this.currentProject = project;
    }

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}

class Company<T extends ILocation> {

    employeesLocation: T;

    constructor(location: T) {
       this.employeesLocation = location ;
    }

    add(newEmployee: IEmployee): void {
        this.employeesLocation.addPerson(newEmployee);
    }

    getProjectList(): string[] {
        let result: string[] = [];
        for (let i = 0; i < this.employeesLocation.getCount(); i++) {
            if (result.indexOf(this.employeesLocation.getPerson(i).getCurrentProject()) === -1) {
                result.push(this.employeesLocation.getPerson(i).getCurrentProject());
            }
        }
        return result
    }

    getNameList(): string[] {
        let result: string[] = [];
        for (let i = 0; i < this.employeesLocation.getCount(); i++) {
            result.push(this.employeesLocation.getPerson(i).getName());
        }
        return result;
    }
}

let company1 = new Company<CompanyLocationArray>(new CompanyLocationArray())
let front1 = new Employee("Jhonnsy", "project1");
company1.add(front1);
let front2 = new Employee("Kate", "project2");
company1.add(front2)
let back1 = new Employee("Mike", "project2");
company1.add(back1)
let back2 = new Employee("Jane", "project2");
company1.add(back2)
console.log(company1.getProjectList())
console.log(company1.getNameList())

let company2 = new Company<CompanyLocationLocalStorage>(new CompanyLocationLocalStorage())
company2.add(front1);
company2.add(front2)
company2.add(back1)
company2.add(back2)
company2.add(new Employee("Stella","lab"))
console.log(company2.getProjectList())
console.log(company2.getNameList())