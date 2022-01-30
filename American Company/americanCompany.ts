interface IEmployee {
    getCurrentProject(): string;

    getName(): string;
}

class Backend implements IEmployee {

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

class Frontend implements IEmployee {
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

class Company {
    employees:  IEmployee[];

    constructor() {
        this.employees = [];
    }

    add(newEmployee: IEmployee): void {
        this.employees.push(newEmployee);
    }

    getProjectList(): string[] {
        let result: string[] = [];
        for (let i = 0; i < this.employees.length; i++) {
            if (result.indexOf(this.employees[i].getCurrentProject()) === -1) {
                result.push(this.employees[i].getCurrentProject());
            }
        }
        return result
    }

    getNameList(): string[] {
        let result: string[] = [];
        for (let i = 0; i < this.employees.length; i++) {
            result.push(this.employees[i].getName());
        }
        return result;
    }
}


let company = new Company();

let front1 = new Frontend("Jhonnsy", "project1");
company.add(front1);
let front3 = new Frontend("Kate", "project2");
company.add(front3)
let back1 = new Backend("Mike", "project2");
company.add(back1)
let back2 = new Backend("Jane", "project2");
company.add(back2)

console.log(company.getProjectList())
console.log(company.getNameList())