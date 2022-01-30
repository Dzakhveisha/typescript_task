var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Backend = /** @class */ (function (_super) {
    __extends(Backend, _super);
    function Backend(name, project) {
        return _super.call(this, name, project) || this;
    }
    return Backend;
}(Employee));
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend(name, project) {
        return _super.call(this, name, project) || this;
    }
    return Frontend;
}(Employee));
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.add = function (newEmployee) {
        this.employees.push(newEmployee);
    };
    Company.prototype.getProjectList = function () {
        var result = [];
        for (var i = 0; i < this.employees.length; i++) {
            if (result.indexOf(this.employees[i].getCurrentProject()) === -1) {
                result.push(this.employees[i].getCurrentProject());
            }
        }
        return result;
    };
    Company.prototype.getNameList = function () {
        var result = [];
        for (var i = 0; i < this.employees.length; i++) {
            result.push(this.employees[i].getName());
        }
        return result;
    };
    return Company;
}());
var company = new Company();
var front1 = new Frontend("Jhon", "project1");
company.add(front1);
var front3 = new Frontend("Kate", "project2");
company.add(front3);
var back1 = new Backend("Mike", "project2");
company.add(back1);
var back2 = new Backend("Jane", "project2");
company.add(back2);
console.log(company.getProjectList());
console.log(company.getNameList());
