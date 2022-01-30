var Backend = /** @class */ (function () {
    function Backend(name, project) {
        this.name = name;
        this.currentProject = project;
    }
    Backend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Backend.prototype.getName = function () {
        return this.name;
    };
    return Backend;
}());
var Frontend = /** @class */ (function () {
    function Frontend(name, project) {
        this.name = name;
        this.currentProject = project;
    }
    Frontend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Frontend.prototype.getName = function () {
        return this.name;
    };
    return Frontend;
}());
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
var front1 = new Frontend("Jhonnsy", "project1");
company.add(front1);
var front3 = new Frontend("Kate", "project2");
company.add(front3);
var back1 = new Backend("Mike", "project2");
company.add(back1);
var back2 = new Backend("Jane", "project2");
company.add(back2);
console.log(company.getProjectList());
console.log(company.getNameList());
