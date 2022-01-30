var CompanyLocationArray = /** @class */ (function () {
    function CompanyLocationArray() {
        this.employees = [];
    }
    CompanyLocationArray.prototype.getCount = function () {
        return this.employees.length;
    };
    CompanyLocationArray.prototype.getPerson = function (index) {
        return this.employees[index];
    };
    CompanyLocationArray.prototype.addPerson = function (employee) {
        this.employees.push(employee);
    };
    return CompanyLocationArray;
}());
var CompanyLocationLocalStorage = /** @class */ (function () {
    function CompanyLocationLocalStorage() {
        this.itemName = "employees";
        var tempArray = [];
        localStorage.setItem(this.itemName, JSON.stringify(tempArray));
    }
    CompanyLocationLocalStorage.prototype.addPerson = function (employee) {
        var tempArray = JSON.parse(localStorage.getItem(this.itemName));
        tempArray.push(employee);
        localStorage.setItem(this.itemName, JSON.stringify(tempArray));
    };
    CompanyLocationLocalStorage.prototype.getCount = function () {
        var tempArray = JSON.parse(localStorage.getItem(this.itemName));
        return tempArray.length;
    };
    CompanyLocationLocalStorage.prototype.getPerson = function (index) {
        var tempArray = JSON.parse(localStorage.getItem(this.itemName));
        return new Employee(tempArray[index].name, tempArray[index].currentProject);
    };
    return CompanyLocationLocalStorage;
}());
var Employee = /** @class */ (function () {
    function Employee(name, project) {
        this.name = name;
        this.currentProject = project;
    }
    Employee.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var Company = /** @class */ (function () {
    function Company(location) {
        this.employeesLocation = location;
    }
    Company.prototype.add = function (newEmployee) {
        this.employeesLocation.addPerson(newEmployee);
    };
    Company.prototype.getProjectList = function () {
        var result = [];
        for (var i = 0; i < this.employeesLocation.getCount(); i++) {
            if (result.indexOf(this.employeesLocation.getPerson(i).getCurrentProject()) === -1) {
                result.push(this.employeesLocation.getPerson(i).getCurrentProject());
            }
        }
        return result;
    };
    Company.prototype.getNameList = function () {
        var result = [];
        for (var i = 0; i < this.employeesLocation.getCount(); i++) {
            result.push(this.employeesLocation.getPerson(i).getName());
        }
        return result;
    };
    return Company;
}());
var company1 = new Company(new CompanyLocationArray());
var front1 = new Employee("Jhonnsy", "project1");
company1.add(front1);
var front2 = new Employee("Kate", "project2");
company1.add(front2);
var back1 = new Employee("Mike", "project2");
company1.add(back1);
var back2 = new Employee("Jane", "project2");
company1.add(back2);
console.log(company1.getProjectList());
console.log(company1.getNameList());
var company2 = new Company(new CompanyLocationLocalStorage());
company2.add(front1);
company2.add(front2);
company2.add(back1);
company2.add(back2);
company2.add(new Employee("Stella", "lab"));
console.log(company2.getProjectList());
console.log(company2.getNameList());
