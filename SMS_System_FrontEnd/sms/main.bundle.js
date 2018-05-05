webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aas-registration/aas-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tableTitle\r\n{\r\n    color:white;\r\n    padding:7px;\r\n    font-weight:bold;\r\n    font-size:1rem;\r\n    border-radius: 10px;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass\r\n{\r\n    border-collapse: collapse;\r\n    border: 1px solid rgba(23, 26, 207, 0.473);\r\n}\r\n\r\n#classRegistered thead\r\n{\r\n    background: rgb(35,204,239);\r\n}\r\n\r\n#classRegistered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classPass th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered thead\r\n{\r\n    background: rgb(251,64,75);\r\n}\r\n\r\n#classPass thead\r\n{\r\n    background: rgb(121,182,50);\r\n}\r\n\r\n\r\n\r\n#classRegistered,#classOffered,#classPass tbody tr td\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass tr\r\n{\r\n    height:25px;\r\n    vertical-align: center;\r\n}\r\n\r\na\r\n{\r\n    color:#1441e4 !important;\r\n}\r\n.card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}\r\n\r\n.timeTableModal{\r\n    font-size: 1.3rem;\r\n}\r\n.firstTTBRow{\r\n    background-color: rgb(176, 231, 235);\r\n    width: 15%;\r\n    text-align: center;\r\n}\r\n.contentTTBRow{\r\n    text-align: center;\r\n}\r\n#TTBModalLabel{\r\n    text-align: center;\r\n    color: red;\r\n    margin: 0 auto;\r\n}\r\n.modal-full{\r\n    max-width: 98% !important;\r\n    width:98% !important;\r\n    margin: 15px auto; \r\n}\r\n@media (max-width: 768px){\r\n    .modal-full{\r\n        margin:5px;\r\n    }\r\n}\r\n.modal-full .modal-content{\r\n    height: 100%;\r\n    height:auto;\r\n    border-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aas-registration/aas-registration.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n  <div class=\"card\"> \r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b class=\"text-info\">AAS Registration</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex \">Semester/Year: \r\n              <span  style=\"padding:-5px;\">\r\n              <b>{{acaYear}}/{{convertToSemester(semester)}}</b>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex \">Student Id: \r\n              <span  style=\"padding:-5px;\">\r\n              <b>{{StudentAASInfoData.studentID}}</b>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Student Name: \r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{StudentAASInfoData.studentName}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Catalog: \r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{StudentAASInfoData.catalogYear}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Specialization: \r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{StudentAASInfoData.specialization}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">ESL Level:\r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{eslLevel}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-start no-gutters\">\r\n            <div class=\"col d-flex\">\r\n              <a href=\"http://www.saigontech.edu.vn/thoi-khoa-bieu-bang-diem.html\" target=\"_blank\" style=\"font-weight:bold; text-decoration: underline; color:#1441e4\">Overall Timetable</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group row pl-3\">\r\n                  <label class=\"col-form-label text-info text-nowrap\" style=\"font-size: 1rem;margin-bottom: -1rem\"><p class=\"font-weight-bold\">Specialization:</p></label>                 \r\n                  <select class=\"SpecializationSB ml-3\" id=\"Specialization\" name=\"Specialization\" style=\"width:100%;\" [(ngModel)]=\"majorCode\" (change)=\"updateData()\">\r\n                    <option *ngFor=\"let spec of specializationData\" [value]=\"spec.id\">{{spec.specializationName}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-danger \"><p class=\"font-weight-bold\" [innerHtml]=\"beforeAasRegistration\" ></p></div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <!-- __________________________________________ -->\r\n      <div class=\"row justify-content-start\">\r\n            <button class=\"btn btn-info ml-5\" (click)=\"deleteCourseRegistration()\">Delete</button>\r\n      </div>\r\n      <div class=\"row flexrow justify-content-center no-gutters\">\r\n        <h5 class=\"text-dark font-weight-bold\">CLASS(ES) REGISTERED</h5>\r\n      <div class=\"table-responsive\">\r\n        <table id = \"classRegistered\"s class=\"table table-hover table-striped table-bordered mt-2\">\r\n          <thead>\r\n          <tr align=\"center\" style=\"height: 32px;\" >\r\n            <th width=\"5%\">No</th>\r\n            <th width=\"5%\">Del.</th>\r\n            <th width=\"10%\">Class Code</th>\r\n            <th width=\"10%\">Course Code</th>\r\n            <th width=\"30%\">Course Name</th>\r\n            <th width=\"10%\">#/Max</th>\r\n            <th width=\"30%\">Prerequisiste</th>\r\n            </tr>\r\n          </thead>\r\n            <tbody>\r\n          <tr *ngFor = \"let classRegistered of getClassRegisteredData; let i = index\" bgcolor=\"#ffffff\">\r\n            <td>{{i+1}}</td>\r\n            <td><input type=\"checkbox\"  [value]=\"classRegistered.classCode\" class=\"classRegisteredCB\"\r\n              (click)=\"getClassRegisteredCode()\">\r\n            </td>\r\n            <td><a (click)=\"showTimetable(classRegistered.classCode)\" style=\"cursor: pointer\">{{classRegistered.classID}}</a></td>\r\n            <td>{{classRegistered.subjectID}}</td>\r\n            <td>{{classRegistered.subjectName}}</td>\r\n            <td>{{classRegistered.numberStudentRegistered}}/{{classRegistered.numberStudentClass}}</td>\r\n            <td>{{classRegistered.courseIDPrerequisite}}</td>\r\n            </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n      \r\n      </div>\r\n\r\n      <div class=\"row justify-content-start mt-5\">\r\n          <button class=\"btn btn-danger ml-5\" (click)=\"insertCourseRegistration()\">Add</button>\r\n    </div>\r\n      <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <h5 class=\"text-dark font-weight-bold\">CLASS(ES) OFFERED</h5>\r\n          <div class=\"table-responsive\">\r\n            <table id = \"classOffered\" class=\"table table-hover table-striped table-bordered  mt-2\">\r\n              <thead>\r\n              <tr align=\"center\" style=\"height: 32px;\" >\r\n                <th width=\"5%\">No</th>\r\n                <th width=\"5%\">Del.</th>\r\n                <th width=\"10%\">Class Code</th>\r\n                <th width=\"10%\">Course Code</th>\r\n                <th width=\"30%\">Course Name</th>\r\n                <th width=\"10%\">#/Max</th>\r\n                <th width=\"30%\">Prerequisiste</th>\r\n                </tr>\r\n              </thead>\r\n                <tbody>\r\n              <tr *ngFor = \"let classOpened of getClassOpenedData; let i = index\" bgcolor=\"#ffffff\">\r\n                <td>{{i+1}}</td>\r\n                <td><input type=\"checkbox\"  [value]=\"classOpened.classCode\" class=\"classOpenCB\"\r\n                  (click)=\"getClassOpenCode()\">\r\n                </td>\r\n                <td><a (click)=\"showTimetable(classOpened.classCode)\" style=\"cursor: pointer\">{{classOpened.classID}}</a></td>\r\n                <td>{{classOpened.courseCode}}</td>\r\n                <td>{{classOpened.courseName}}</td>\r\n                <td>{{classOpened.numberStudentRegistered}}/{{classOpened.numberStudentClass}}</td>\r\n                <td>{{classOpened.courseIDPrerequisite}}</td>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n          \r\n      </div>\r\n      \r\n      <div class=\"row justify-content-start mt-5\">\r\n          <button class=\"btn btn-success ml-5\" (click)=\"insertCoursePassed()\">Add</button>\r\n    </div>\r\n      <div class=\"row flexrow justify-content-center no-gutters \">\r\n          <h5 class=\"text-dark font-weight-bold\">CLASS(ES) PASS</h5>\r\n          <div class=\"table-responsive\">\r\n            <table id = \"classPass\"  class=\"table table-hover table-striped table-bordered mt-2\">\r\n              <thead>\r\n              <tr align=\"center\" style=\"height: 32px;\"  >\r\n                <th width=\"5%\">No</th>\r\n                <th width=\"5%\">Del.</th>\r\n                <th width=\"10%\">Class Code</th>\r\n                <th width=\"10%\">Course Code</th>\r\n                <th width=\"30%\">Course Name</th>\r\n                <th width=\"10%\">#/Max</th>\r\n                <th width=\"30%\">Prerequisiste</th>\r\n                </tr>\r\n              </thead>\r\n                <tbody>\r\n              <tr *ngFor = \"let classPassed of getClassPassedData; let i = index\" bgcolor=\"#ffffff\">\r\n                <td>{{i+1}}</td>\r\n                <td><input type=\"checkbox\"  [value]=\"classPassed.classCode\" class=\"classPassedCB\"\r\n                  (click)=\"getClassPassedCode()\">\r\n                </td>\r\n                <td><a (click)=\"showTimetable(classPassed.classCode)\" style=\"cursor: pointer\">{{classPassed.classID}}</a></td>\r\n                <td>{{classPassed.courseCode}}</td>\r\n                <td>{{classPassed.courseName}}</td>\r\n                <td>{{classPassed.numberStudentRegistered}}/{{classPassed.numberStudentClass}}</td>\r\n                <td>{{classPassed.courseIDPrerequisite}}</td>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n          \r\n      </div>\r\n      <!-- __________________________________________ -->\r\n    </div>\r\n  \r\n  </div>\r\n</div>\r\n  <!-- Modal For TimeTable -->\r\n  <div class=\"modal fade timeTableModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-full\">\r\n      \r\n      <div class=\"modal-content\">\r\n        \r\n          <div class=\"modal-header\">\r\n              <h2 class=\"modal-title\" id=\"TTBModalLabel\">TIMETABLE</h2>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"container\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"TimetableData != null\">\r\n                    <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                      <strong>Class: </strong>\r\n                    </span>\r\n                    {{TimetableData.classCode}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <p *ngIf=\"TimetableData != null\">\r\n                      <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                        <strong>Semester / Year: </strong>\r\n                      </span>\r\n                      {{TimetableData.semesterYear}}\r\n                    </p>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <p *ngIf=\"TimetableData != null\">\r\n                      <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                        <strong>Course Name: </strong>\r\n                      </span>\r\n                      {{TimetableData.className}}\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                      <p *ngIf=\"TimetableData != null\">\r\n                        <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                          <strong>Instructor Name: </strong>\r\n                        </span>\r\n                        {{TimetableData.instructorName}}\r\n                      </p>\r\n                    </div>\r\n              </div>              \r\n\r\n              <div class=\"row\">\r\n                  <div class=\"table-responsive\"  *ngIf=\"TimetableData != null\">\r\n                    <table class=\"table-bordered table-striped\">\r\n                      <tr  *ngFor=\"let r of TimetableData.timetableMatrix; let i=index\">\r\n                        <ng-container *ngIf = \"i==0\">\r\n                          <ng-container *ngFor=\"let c of r; let j = index\">\r\n                            <td *ngIf =\"j>0\" [innerHtml]=\"c\" class=\"firstTTBRow\"></td>\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf = \"i>0\">\r\n                          <ng-container *ngFor=\"let c of r; let j = index\">\r\n                            <td *ngIf =\"j>0\" [innerHtml]=\"c\" class=\"contentTTBRow\"></td>\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--End Modal For TimeTable -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/aas-registration/aas-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AasRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timetable_service__ = __webpack_require__("../../../../../src/app/timetable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AasRegistrationComponent = (function () {
    function AasRegistrationComponent(http, cookie, loginService, connectionLink, TimetableService, router) {
        this.http = http;
        this.cookie = cookie;
        this.loginService = loginService;
        this.connectionLink = connectionLink;
        this.TimetableService = TimetableService;
        this.router = router;
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // Loading data to show the page
    AasRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverLink = this.connectionLink.getConnection();
        this.currStudentID = this.cookie.get('loginID');
        this.initializeStudentAASInfo();
        this.initializeSpecialization();
        this.getESLLevel();
        this.getSystemTime();
        setTimeout(function () {
            _this.getBeforeAASRegistration();
            _this.getClassRegistered();
            _this.getClassOpened();
            _this.getClassPassed();
        }, 2000);
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/AASRegistration" class="text-infor">AAS Registration</a>');
        //Load current student's information (name, image, student Id,...)
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Set student's full name and a small photo in a sidebar 
            $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
        //  $('.SpecializationSB').select2();
        var that = this;
        $('.SpecializationSB').select2().on("change", function () {
            alert($('.SpecializationSB').val());
            that.majorCode = $('.SpecializationSB').val();
            that.updateData();
        });
    };
    //This function is used to get Student AAS Information
    AasRegistrationComponent.prototype.initializeStudentAASInfo = function () {
        var _this = this;
        this.http.get(this.serverLink + '/getStudentAASInfo/' + this.currStudentID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.StudentAASInfoData = data;
            _this.catalogID = data.catalogCode;
            _this.isToefl = data.isToefl;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get Specialization Information
    AasRegistrationComponent.prototype.initializeSpecialization = function () {
        var _this = this;
        this.http.get(this.serverLink + '/getSpecializationActived', this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.specializationData = data;
            _this.majorCode = data[0].id;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get ESL Level
    AasRegistrationComponent.prototype.getESLLevel = function () {
        var _this = this;
        this.http.get(this.serverLink + '/getESLLevel/' + this.currStudentID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.eslLevel = data.eslLevel;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get academic year and semester
    AasRegistrationComponent.prototype.getSystemTime = function () {
        var _this = this;
        return this.http.get(this.serverLink + '/getSystemTimeREST', this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.acaYear = data.acaYear;
            _this.semester = data.semester;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get Class Registered Information
    AasRegistrationComponent.prototype.getClassRegistered = function () {
        var _this = this;
        return this.http.get(this.serverLink + '/getClassRegistered/' + this.acaYear + '&' + this.semester + '&' + this.currStudentID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.getClassRegisteredData = data;
            // console.log(this.getClassRegisteredData);
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get Class Opened Information
    AasRegistrationComponent.prototype.getClassOpened = function () {
        var _this = this;
        return this.http.get(this.serverLink + '/getClassOpened/' + this.acaYear + '&' + this.semester + '&' + this.currStudentID +
            '&' + this.majorCode + '&' + this.catalogID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.getClassOpenedData = data;
            // console.log(this.getClassOpenedData);
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get Class Passed Information
    AasRegistrationComponent.prototype.getClassPassed = function () {
        var _this = this;
        return this.http.get(this.serverLink + '/getClassPassed/' + this.acaYear + '&' + this.semester + '&' + this.currStudentID +
            '&' + this.catalogID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.getClassPassedData = data;
            // console.log(this.getClassPassedData);
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to add new class from class offered (send class info to api)
    AasRegistrationComponent.prototype.insertCourseRegistration = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('domain', this.currStudentID);
        // formData.append('ipAddress', this.ipAddress);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        formData.append('classCode', this.classOpenCode);
        formData.append('catalog', this.catalogID);
        formData.append('isToefl', this.isToefl);
        this.http.post(this.serverLink + '/insertCourseRegistrationREST', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert(data.token);
            _this.updateData();
            if (data.token == 1) {
                var notification1 = new PNotify({
                    title: 'Successfully !!!',
                    text: 'Add New Class Successfully',
                    type: 'success',
                    delay: 2000
                });
            }
            else {
                if (data.token == 0) {
                    var notification0 = new PNotify({
                        title: 'Error !!!',
                        text: data.error,
                        type: 'error',
                        delay: 4000
                    });
                }
                else {
                    if (data.token == 2) {
                        var notification2 = new PNotify({
                            title: 'Error !!!',
                            text: data.error,
                            type: 'error',
                            delay: 4000
                        });
                    }
                    else {
                        if (data.token == 3) {
                            var notification3 = new PNotify({
                                title: 'Error !!!',
                                text: 'Timetable of ' + data.error + ' are duplicated',
                                type: 'error',
                                delay: 4000
                            });
                        }
                        else {
                            if (data.token == 4) {
                                var notification4 = new PNotify({
                                    title: 'Error !!!',
                                    text: data.error,
                                    type: 'error',
                                    delay: 4000
                                });
                            }
                            else {
                                if (data.token == 5) {
                                    var notification5 = new PNotify({
                                        title: 'Error !!!',
                                        text: data.error,
                                        type: 'error',
                                        delay: 4000
                                    });
                                }
                                else {
                                    if (data.token == 6) {
                                        var notification6 = new PNotify({
                                            title: 'Error !!!',
                                            text: data.error,
                                            type: 'error',
                                            delay: 4000
                                        });
                                    }
                                    else {
                                        if (data.token == 7) {
                                            var notification7 = new PNotify({
                                                title: 'Error !!!',
                                                text: data.error,
                                                type: 'error',
                                                delay: 4000
                                            });
                                        }
                                        else {
                                            if (data.token == 8) {
                                                var notification8 = new PNotify({
                                                    title: 'Error !!!',
                                                    text: data.error,
                                                    type: 'error',
                                                    delay: 4000
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, function (err) {
            console.log(err);
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to delete class (send class info to api)
    AasRegistrationComponent.prototype.deleteCourseRegistration = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('domain', this.currStudentID);
        // formData.append('ipAddress', this.ipAddress);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        formData.append('classCode', this.classRegisteredCode);
        formData.append('catalog', this.catalogID);
        this.http.post(this.serverLink + '/deleteCourseRegistrationREST', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert(data);
            _this.updateData();
            if (data == 1) {
                var notification1 = new PNotify({
                    title: 'Successfully !!!',
                    text: 'Delete Class Successfully',
                    type: 'success',
                    delay: 2000
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    //This function is used to add new class from class Passed (send class info to api)
    AasRegistrationComponent.prototype.insertCoursePassed = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('domain', this.currStudentID);
        // formData.append('ipAddress', this.ipAddress);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        formData.append('classCode', this.classPassedCode);
        formData.append('catalog', this.catalogID);
        formData.append('isToefl', this.isToefl);
        this.http.post(this.serverLink + '/insertCourseRegistrationREST', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert(data.token);
            _this.updateData();
            if (data.token == 1) {
                var notification1 = new PNotify({
                    title: 'Successfully !!!',
                    text: 'Add New Class Successfully',
                    type: 'success',
                    delay: 2000
                });
            }
            else {
                if (data.token == 0) {
                    var notification0 = new PNotify({
                        title: 'Error !!!',
                        text: data.error,
                        type: 'error',
                        delay: 4000
                    });
                }
                else {
                    if (data.token == 2) {
                        var notification2 = new PNotify({
                            title: 'Error !!!',
                            text: data.error,
                            type: 'error',
                            delay: 4000
                        });
                    }
                    else {
                        if (data.token == 3) {
                            var notification3 = new PNotify({
                                title: 'Error !!!',
                                text: 'Timetable of ' + data.error + ' are duplicated',
                                type: 'error',
                                delay: 4000
                            });
                        }
                        else {
                            if (data.token == 4) {
                                var notification4 = new PNotify({
                                    title: 'Error !!!',
                                    text: data.error,
                                    type: 'error',
                                    delay: 4000
                                });
                            }
                            else {
                                if (data.token == 5) {
                                    var notification5 = new PNotify({
                                        title: 'Error !!!',
                                        text: data.error,
                                        type: 'error',
                                        delay: 4000
                                    });
                                }
                                else {
                                    if (data.token == 6) {
                                        var notification6 = new PNotify({
                                            title: 'Error !!!',
                                            text: data.error,
                                            type: 'error',
                                            delay: 4000
                                        });
                                    }
                                    else {
                                        if (data.token == 7) {
                                            var notification7 = new PNotify({
                                                title: 'Error !!!',
                                                text: data.error,
                                                type: 'error',
                                                delay: 4000
                                            });
                                        }
                                        else {
                                            if (data.token == 8) {
                                                var notification8 = new PNotify({
                                                    title: 'Error !!!',
                                                    text: data.error,
                                                    type: 'error',
                                                    delay: 4000
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, function (err) {
            console.log(err);
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //Function is use to get Before AAS Registration
    AasRegistrationComponent.prototype.getBeforeAASRegistration = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        this.http.post(this.serverLink + '/getBeforeAASRegistration', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.beforeAasRegistration = data.beforeAASRegistraion;
        }, function (err) {
            console.log(err);
        });
    };
    AasRegistrationComponent.prototype.updateData = function () {
        this.getClassRegistered();
        this.getClassOpened();
        this.getClassPassed();
    };
    AasRegistrationComponent.prototype.getClassRegisteredCode = function () {
        var classRegisteredCodeArr = [];
        $(".classRegisteredCB:checked").each(function () {
            classRegisteredCodeArr.push($(this).val());
        });
        console.log(classRegisteredCodeArr);
        this.classRegisteredCode = classRegisteredCodeArr[0];
        for (var x = 1; x < classRegisteredCodeArr.length; x++) {
            this.classRegisteredCode = this.classRegisteredCode + "," + classRegisteredCodeArr[x];
        }
        // alert(this.classRegisteredCode);
    };
    AasRegistrationComponent.prototype.getClassOpenCode = function () {
        var classOpenCodeArr = [];
        $(".classOpenCB:checked").each(function () {
            classOpenCodeArr.push($(this).val());
        });
        console.log(classOpenCodeArr);
        this.classOpenCode = classOpenCodeArr[0];
        for (var x = 1; x < classOpenCodeArr.length; x++) {
            this.classOpenCode = this.classOpenCode + "," + classOpenCodeArr[x];
        }
        alert(this.classOpenCode);
    };
    AasRegistrationComponent.prototype.getClassPassedCode = function () {
        var classPassedCodeArr = [];
        $(".classPassedCB:checked").each(function () {
            classPassedCodeArr.push($(this).val());
        });
        console.log(classPassedCodeArr);
        this.classPassedCode = classPassedCodeArr[0];
        for (var x = 1; x < classPassedCodeArr.length; x++) {
            this.classPassedCode = this.classPassedCode + "," + classPassedCodeArr[x];
        }
        // alert(this.classPassedCode);
    };
    //This function is used to show Timetable Modal
    AasRegistrationComponent.prototype.showTimetable = function (classCode) {
        var _this = this;
        this.http.get(this.serverLink + '/getTimetableREST/' + classCode + '&' + this.acaYear + '&' + this.semester, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.TimetableData = data;
            console.log(_this.TimetableData.timetableMatrix);
            $('.timeTableModal').modal();
        });
    };
    AasRegistrationComponent.prototype.convertToSemester = function (semester) {
        if (semester == 1)
            return "SUMMER";
        else if (semester == 4)
            return "SPRING";
        else if (semester == 3)
            return "FALL";
        else
            return "UNKNOWN";
    };
    return AasRegistrationComponent;
}());
AasRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-aas-registration',
        template: __webpack_require__("../../../../../src/app/aas-registration/aas-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/aas-registration/aas-registration.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */], __WEBPACK_IMPORTED_MODULE_5__timetable_service__["a" /* TimetableService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__timetable_service__["a" /* TimetableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__timetable_service__["a" /* TimetableService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _f || Object])
], AasRegistrationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=aas-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/aas-transcript/aas-transcript.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainTable\r\n{\r\n    border-collapse: collapse;\r\n    font-size: 1rem;\r\n}\r\n\r\n#mainTable, #mainTable th, #mainTable td {\r\n    border: 1px solid rgb(119, 119, 119);\r\n }\r\n\r\n #mainTable thead\r\n{\r\n    background:rgb(187, 223, 253);\r\n}\r\n#mainTable th\r\n{\r\n    text-align: center;  \r\n    height:2.5rem; \r\n}\r\n\r\n#mainTable tr\r\n{\r\n    height:2rem\r\n}\r\n\r\n#mainTable td\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}\r\n\r\n#sgtImage\r\n{\r\n    width:55%;\r\n    margin-left:22%;\r\n}\r\n\r\n#firstHeading\r\n{\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:0.8rem;\r\n}\r\n\r\n#secondHeading\r\n{\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:2rem;\r\n}\r\n\r\n#thirdHeading\r\n{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:1.3rem;\r\n    font-style: italic;\r\n    margin-bottom: 6px;\r\n    margin-top:-2px;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .row\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #thirdHeading\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #secondHeading\r\n    {\r\n        font-size:1.8rem;\r\n    }\r\n\r\n    #firstHeading\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #sgtImage\r\n    {\r\n        width:40%;\r\n        margin-left:30%;\r\n    }\r\n\r\n    #mainTable\r\n    {\r\n        font-size:0.8rem;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aas-transcript/aas-transcript.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>AAS Transcript</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-4\">\r\n        <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <img id=\"loadingImg\" src=\"assets/img/loading.gif\" *ngIf=\"!showContent\" />\r\n        </div>\r\n        <ng-container *ngIf=\"showContent\">\r\n          <div class=\"row justify-content-center\" id=\"firstHeading\">\r\n            SAIGON INSTITUTE TECHNOLOGY\r\n          </div>\r\n          <div class=\"row justify-content-center\" id=\"secondHeading\">\r\n            ACADEMIC RECORD\r\n          </div>\r\n          <div class=\"row justify-content-center\" id=\"thirdHeading\">\r\n            BẢNG ĐIỂM\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <img id=\"sgtImage\" src=\"assets/img/sgtlogo.png\">\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Student Name\r\n                  <i>(Họ tên sinh viên)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.lastName}} {{currStudent.firstName}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Student ID\r\n                  <i>(Mã số sinh viên)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.studentID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">PID</div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.hccsID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">EMPID</div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.hccsPID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Date of Birth\r\n                  <i>(Ngày sinh dd/mm/yyyy)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.dob}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Institution\r\n                  <i>(Trường)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: SAIGON INSTITUTE OF TECHNOLOGY</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">Degree\r\n                  <i>(Bằng cấp)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: ASSOCIATE IN APPLIED SCIENCE</b>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Catalog of Choice\r\n                  <i>(Catalog)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{additionInfo[0].catalog}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Specialization\r\n                  <i>(Chuyên ngành)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{additionInfo[0].program}}</b>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-2 justify-content-center\" style=\"font-size:1.2rem\">\r\n            DATE ISSSUE: {{dateAndTimeInfo.dateAndTime}}\r\n          </div>\r\n          <div class=\"row mt-2\">\r\n            <div class=\"col\">\r\n              <table width=\"100%\" border=\"1\" cellspacing=\"1\" class=\"table-responsive\" id=\"mainTable\">\r\n                <thead>\r\n                  <th width=\"15%\">\r\n                    Semester\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Học kỳ)</i>\r\n                  </th>\r\n                  <th width=\"15%\">\r\n                    Course\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Mã số môn học)</i>\r\n                  </th>\r\n                  <th width=\"30%\">\r\n                    Description\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Tên môn học)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Grade\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Điểm)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Credit Attempts\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Tín chỉ dự định)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Credit Earned\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Tín chỉ đạt được)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Term GPA\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(TB kỳ)</i>\r\n                  </th>\r\n                  <th width=\"20%\">\r\n                    Cummulative GPA\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(TB tích lũy)</i>\r\n                  </th>\r\n                </thead>\r\n                <tbody>\r\n                  <ng-container *ngFor=\"let item of finalResult\">\r\n                    <tr *ngFor=\"let course of item.courseData; let i = index\">\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.courseData.length'>{{item.semester}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectId}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectName}}</td>\r\n                      <td>{{course.letter_mark}}</td>\r\n                      <td>{{course.credits}}</td>\r\n                      <td>{{course.credits_earned}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.courseData.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                        {{item.termGPA}}\r\n                      </td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.courseData.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                        {{item.cumGPA}}\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"6\"></td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4\">\r\n            <div class=\"col-6\" style=\"text-align:center;\">\r\n              CHANCELLOR\r\n              <br/> HIỆU TRƯỞNG\r\n              <br/>\r\n              <br/>\r\n              <br/>\r\n              <br/>\r\n              <br/>\r\n              <b>Nguyễn Thị Anh Thư</b>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align:center;\">\r\n              REGISTRAR\r\n              <br/> GIÁO VỤ\r\n              <br/>\r\n              <br/>\r\n              <br/>\r\n              <br/>\r\n              <br/>\r\n              <b>Huỳnh Kim Thủy Tiên</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4\">\r\n            <div class=\"col\">\r\n              <table width=\"100%\" border=\"0\" cellpadding=\"0\" bordercolorlight=\"#000000\" bordercolordark=\"#000000\" id=\"table1\" style=\"border-collapse: collapse; font-family: Tahoma, Geneva, sans-serif; font-size: 8pt;\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td width=\"4\">&nbsp;</td>\r\n                    <td colspan=\"5\" height=\"25\">\r\n                      <p align=\"left\">LEGEND\r\n                        <em> (HƯỚNG DẪN)</em>\r\n                        <br> Grade and Grade Points\r\n                        <em>(Điểm và Điểm số)</em>\r\n                      </p>\r\n                    </td>\r\n                    <td width=\"11\" height=\"25\">&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td width=\"75\" align=\"center\">&nbsp;</td>\r\n                    <td width=\"121\" align=\"center\">\r\n                      <font face=\"Tahoma\" style=\"font-size:8pt\">\r\n                        <u>Symbol</u>\r\n                        <em>(Ký hiệu)</em>\r\n                      </font>\r\n                    </td>\r\n                    <td width=\"313\" align=\"center\">\r\n                      <div align=\"left\">\r\n                        <font face=\"Tahoma\" style=\"font-size:8pt\">\r\n                          <u>Meaning</u>\r\n                          <em>(Xếp loại)</em>\r\n                        </font>\r\n                      </div>\r\n                    </td>\r\n                    <td width=\"157\" align=\"center\">\r\n                      <font face=\"Tahoma\" style=\"font-size:8pt\">\r\n                        <u>Grade Points</u>\r\n                        <em>(Điểm số)</em>\r\n                      </font>\r\n                    </td>\r\n                    <td width=\"265\">&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">A</font>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <div align=\"left\">\r\n                        <font style=\"font-size:8pt\" face=\"Tahoma\">Excellent\r\n                          <em>(Xuất sắc)</em>\r\n                        </font>\r\n                      </div>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">4</font>\r\n                    </td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">B</font>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <div align=\"left\">\r\n                        <font style=\"font-size:8pt\" face=\"Tahoma\">Good\r\n                          <em>(Giỏi)</em>\r\n                        </font>\r\n                      </div>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">3</font>\r\n                    </td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">C</font>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <div align=\"left\">\r\n                        <font style=\"font-size:8pt\" face=\"Tahoma\">Fair\r\n                          <em>(Khá)</em>\r\n                        </font>\r\n                      </div>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">2</font>\r\n                    </td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">D</font>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <div align=\"left\">\r\n                        <font style=\"font-size:8pt\" face=\"Tahoma\">Passing\r\n                          <em>(Đạt)</em>\r\n                        </font>\r\n                      </div>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">1</font>\r\n                    </td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">F</font>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <div align=\"left\">\r\n                        <font style=\"font-size:8pt\" face=\"Tahoma\">Failing\r\n                          <em>(Không đạt)</em>\r\n                        </font>\r\n                      </div>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">0</font>\r\n                    </td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">\r\n                      <font face=\"Tahoma\" style=\"font-size:8pt\">F(A/P/C)</font>\r\n                    </td>\r\n                    <td align=\"center\">\r\n                      <div align=\"left\">Failing\r\n                        <em>(Vắng thi/Cấm thi/Gian lận)</em>\r\n                      </div>\r\n                    </td>\r\n                    <td align=\"center\">0</td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td colspan=\"3\" align=\"LEFT\">The following grades are not calculated in GPA\r\n                      <em>(Điểm không được dùng để tính GPA)</em>: </td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">I</td>\r\n                    <td align=\"LEFT\">Incomplete\r\n                      <em>(Chưa hoàn thành)</em>\r\n                    </td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>&nbsp;</td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td align=\"center\">T</td>\r\n                    <td align=\"LEFT\">Transferred\r\n                      <em>(Chuyển điểm)</em>\r\n                    </td>\r\n                    <td align=\"center\">&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                    <td>&nbsp;</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/aas-transcript/aas-transcript.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AasTranscriptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AasTranscriptComponent = (function () {
    function AasTranscriptComponent(cookie, loginService, http, semesterService, connectionLink, router) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.semesterService = semesterService;
        this.connectionLink = connectionLink;
        this.router = router;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.showContent = false; //True, the data content will be shown, false, the loading gif will be shown
        this.finalResult = new Array(); //They result after loading semesters and coresponding courses
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    AasTranscriptComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/AASTranscript" class="text-infor"> AAS Transcript</a>');
        //Get general data 
        this.http.get(this.serverLink + '/getHCCTranscriptGeneralInfo/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.additionInfo = data;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.semesterInfo = data;
                _this.http.get(_this.serverLink + '/getSystemDateAndTime/0', _this.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.dateAndTimeInfo = data;
                    //Set student's full name and a small photo in a sidebar 
                    $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                    $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                    _this.getAASTranscriptData(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }, function (err) {
                _this.cookie.delete('loginID');
                _this.cookie.delete('token');
                _this.router.navigate(['/Login']);
            });
        });
    };
    AasTranscriptComponent.prototype.getAASTranscriptData = function (stuId, acaYear, semester) {
        var _this = this;
        this.http.get(this.serverLink + '/getAASTranscriptSemester/' + stuId + '&' + acaYear + '&' + semester, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.length == 0) {
                _this.showContent = true;
            }
            else {
                _this.aasTranscriptSemester = data;
                var arrayOfCourses = new Array(); //The array of courses
                //Loop through aasTranscriptSemester and get the courses for each of them
                for (var i = 0; i < _this.aasTranscriptSemester.length; i++) {
                    arrayOfCourses.push(_this.http.get(_this.serverLink + '/getAASTranscriptCourse/' + stuId + '&' + _this.aasTranscriptSemester[i].acaYear
                        + '&' + _this.aasTranscriptSemester[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(arrayOfCourses).subscribe(function (data) {
                    _this.aasTranscriptCourse = data;
                    //Combine all data into finalResult array
                    for (var i = 0; i < _this.aasTranscriptSemester.length; i++) {
                        _this.finalResult.push({
                            semester: _this.aasTranscriptSemester[i].semester_name + '/' + _this.aasTranscriptSemester[i].acaYear,
                            termGPA: _this.aasTranscriptSemester[i].term_gpa_aas,
                            cumGPA: _this.aasTranscriptSemester[i].cum_gpa_aas,
                            courseData: _this.aasTranscriptCourse[i]
                        });
                    }
                    // console.log(this.finalResult);
                    _this.showContent = true;
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    return AasTranscriptComponent;
}());
AasTranscriptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-aas-transcript',
        template: __webpack_require__("../../../../../src/app/aas-transcript/aas-transcript.component.html"),
        styles: [__webpack_require__("../../../../../src/app/aas-transcript/aas-transcript.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _f || Object])
], AasTranscriptComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=aas-transcript.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.isLoggedIn = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_navbar_sidebar_navbar_component__ = __webpack_require__("../../../../../src/app/sidebar-navbar/sidebar-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_information_student_information_component__ = __webpack_require__("../../../../../src/app/student-information/student-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_status_class_status_component__ = __webpack_require__("../../../../../src/app/class-status/class-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aas_registration_aas_registration_component__ = __webpack_require__("../../../../../src/app/aas-registration/aas-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__student_prohibited_student_prohibited_component__ = __webpack_require__("../../../../../src/app/student-prohibited/student-prohibited.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__grade_and_semester_grade_and_semester_component__ = __webpack_require__("../../../../../src/app/grade-and-semester/grade-and-semester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__transcript_hcc_transcript_hcc_component__ = __webpack_require__("../../../../../src/app/transcript-hcc/transcript-hcc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__policy2_policy2_component__ = __webpack_require__("../../../../../src/app/policy2/policy2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__degree_plan_degree_plan_component__ = __webpack_require__("../../../../../src/app/degree-plan/degree-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__aas_transcript_aas_transcript_component__ = __webpack_require__("../../../../../src/app/aas-transcript/aas-transcript.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__esl_transcript_esl_transcript_component__ = __webpack_require__("../../../../../src/app/esl-transcript/esl-transcript.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dars_dars_component__ = __webpack_require__("../../../../../src/app/dars/dars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__vn_registration_vn_registration_component__ = __webpack_require__("../../../../../src/app/vn-registration/vn-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__check_login_service__ = __webpack_require__("../../../../../src/app/check-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__enrichment_registration_enrichment_registration_component__ = __webpack_require__("../../../../../src/app/enrichment-registration/enrichment-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__esl_registration_esl_registration_component__ = __webpack_require__("../../../../../src/app/esl-registration/esl-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__course_enrolled_course_enrolled_component__ = __webpack_require__("../../../../../src/app/course-enrolled/course-enrolled.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__timetable_timetable_component__ = __webpack_require__("../../../../../src/app/timetable/timetable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__student_attendance_student_attendance_component__ = __webpack_require__("../../../../../src/app/student-attendance/student-attendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tuition_fee_tuition_fee_component__ = __webpack_require__("../../../../../src/app/tuition-fee/tuition-fee.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidebar_navbar_sidebar_navbar_component__["a" /* SidebarNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__student_information_student_information_component__["a" /* StudentInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__class_status_class_status_component__["a" /* ClassStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_11__aas_registration_aas_registration_component__["a" /* AasRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__student_prohibited_student_prohibited_component__["a" /* StudentProhibitedComponent */],
            __WEBPACK_IMPORTED_MODULE_13__grade_and_semester_grade_and_semester_component__["a" /* GradeAndSemesterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__transcript_hcc_transcript_hcc_component__["a" /* TranscriptHccComponent */],
            __WEBPACK_IMPORTED_MODULE_15__policy2_policy2_component__["a" /* Policy2Component */],
            __WEBPACK_IMPORTED_MODULE_16__degree_plan_degree_plan_component__["a" /* DegreePlanComponent */],
            __WEBPACK_IMPORTED_MODULE_17__aas_transcript_aas_transcript_component__["a" /* AasTranscriptComponent */],
            __WEBPACK_IMPORTED_MODULE_18__esl_transcript_esl_transcript_component__["a" /* EslTranscriptComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dars_dars_component__["a" /* DarsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__vn_registration_vn_registration_component__["a" /* VnRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__enrichment_registration_enrichment_registration_component__["a" /* EnrichmentRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_23__esl_registration_esl_registration_component__["a" /* EslRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_24__course_enrolled_course_enrolled_component__["a" /* CourseEnrolledComponent */],
            __WEBPACK_IMPORTED_MODULE_25__timetable_timetable_component__["a" /* TimetableComponent */],
            __WEBPACK_IMPORTED_MODULE_26__student_attendance_student_attendance_component__["a" /* StudentAttendanceComponent */],
            __WEBPACK_IMPORTED_MODULE_27__tuition_fee_tuition_fee_component__["a" /* TuitionFeeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                {
                    path: 'Login',
                    component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_8__sidebar_navbar_sidebar_navbar_component__["a" /* SidebarNavbarComponent */],
                    children: [
                        {
                            path: '',
                            component: __WEBPACK_IMPORTED_MODULE_9__student_information_student_information_component__["a" /* StudentInformationComponent */]
                        },
                        {
                            path: 'StudentInformation',
                            component: __WEBPACK_IMPORTED_MODULE_9__student_information_student_information_component__["a" /* StudentInformationComponent */]
                        },
                        {
                            path: 'ClassStatus',
                            component: __WEBPACK_IMPORTED_MODULE_10__class_status_class_status_component__["a" /* ClassStatusComponent */]
                        },
                        {
                            path: 'AASRegistration',
                            component: __WEBPACK_IMPORTED_MODULE_11__aas_registration_aas_registration_component__["a" /* AasRegistrationComponent */]
                        },
                        {
                            path: 'StudentProhibited',
                            component: __WEBPACK_IMPORTED_MODULE_12__student_prohibited_student_prohibited_component__["a" /* StudentProhibitedComponent */]
                        },
                        {
                            path: 'GradeAndSemester',
                            component: __WEBPACK_IMPORTED_MODULE_13__grade_and_semester_grade_and_semester_component__["a" /* GradeAndSemesterComponent */]
                        },
                        {
                            path: 'CourseEnrolled',
                            component: __WEBPACK_IMPORTED_MODULE_24__course_enrolled_course_enrolled_component__["a" /* CourseEnrolledComponent */]
                        },
                        {
                            path: 'StudentAttendance',
                            component: __WEBPACK_IMPORTED_MODULE_26__student_attendance_student_attendance_component__["a" /* StudentAttendanceComponent */]
                        },
                        {
                            path: 'Timetable',
                            component: __WEBPACK_IMPORTED_MODULE_25__timetable_timetable_component__["a" /* TimetableComponent */]
                        },
                        {
                            path: 'TuitionFee',
                            component: __WEBPACK_IMPORTED_MODULE_27__tuition_fee_tuition_fee_component__["a" /* TuitionFeeComponent */]
                        },
                        {
                            path: 'CourseEnrolled',
                            component: __WEBPACK_IMPORTED_MODULE_24__course_enrolled_course_enrolled_component__["a" /* CourseEnrolledComponent */]
                        },
                        {
                            path: 'TranscriptHCC',
                            component: __WEBPACK_IMPORTED_MODULE_14__transcript_hcc_transcript_hcc_component__["a" /* TranscriptHccComponent */]
                        },
                        {
                            path: 'Policy2',
                            component: __WEBPACK_IMPORTED_MODULE_15__policy2_policy2_component__["a" /* Policy2Component */]
                        },
                        {
                            path: 'DegreePlan',
                            component: __WEBPACK_IMPORTED_MODULE_16__degree_plan_degree_plan_component__["a" /* DegreePlanComponent */]
                        },
                        {
                            path: 'AASTranscript',
                            component: __WEBPACK_IMPORTED_MODULE_17__aas_transcript_aas_transcript_component__["a" /* AasTranscriptComponent */]
                        },
                        {
                            path: 'Dars',
                            component: __WEBPACK_IMPORTED_MODULE_19__dars_dars_component__["a" /* DarsComponent */]
                        },
                        {
                            path: 'VNRegistration',
                            component: __WEBPACK_IMPORTED_MODULE_20__vn_registration_vn_registration_component__["a" /* VnRegistrationComponent */]
                        },
                        {
                            path: 'ESLTranscript',
                            component: __WEBPACK_IMPORTED_MODULE_18__esl_transcript_esl_transcript_component__["a" /* EslTranscriptComponent */]
                        },
                        {
                            path: 'EnrichmentRegistration',
                            component: __WEBPACK_IMPORTED_MODULE_22__enrichment_registration_enrichment_registration_component__["a" /* EnrichmentRegistrationComponent */]
                        },
                        {
                            path: 'ESLRegistration',
                            component: __WEBPACK_IMPORTED_MODULE_23__esl_registration_esl_registration_component__["a" /* EslRegistrationComponent */]
                        },
                    ]
                },
                {
                    path: 'test',
                    component: __WEBPACK_IMPORTED_MODULE_11__aas_registration_aas_registration_component__["a" /* AasRegistrationComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__check_login_service__["a" /* CheckLoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/check-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckLoginService = (function () {
    function CheckLoginService(http) {
        this.http = http;
        this.loginAlready = false;
    }
    CheckLoginService.prototype.setLogin = function (login) {
        this.loginAlready = login;
    };
    CheckLoginService.prototype.getLogin = function () {
        return this.loginAlready;
    };
    return CheckLoginService;
}());
CheckLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CheckLoginService);

var _a;
//# sourceMappingURL=check-login.service.js.map

/***/ }),

/***/ "../../../../../src/app/class-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClassStatusService = (function () {
    function ClassStatusService(http, connectionLink, cookie) {
        this.http = http;
        this.connectionLink = connectionLink;
        this.cookie = cookie;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ClassStatusService.prototype.getAllClassStatus = function (acaYear, semester, type) {
        if (type !== '-1') {
            return this.http.get(this.connectionLink.getConnection() + '/getAllclassInformation1/' + semester + '&' + acaYear + '&' + type, this.options)
                .toPromise()
                .then(function (res) { return res.json(); })
                .then(function (resJson) { return resJson; });
        }
        else {
            return this.http.get(this.connectionLink.getConnection() + '/getAllclassInformation2/' + semester + '&' + acaYear, this.options)
                .toPromise()
                .then(function (res) { return res.json(); })
                .then(function (resJson) { return resJson; });
        }
    };
    return ClassStatusService;
}());
ClassStatusService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], ClassStatusService);

var _a, _b, _c;
//# sourceMappingURL=class-status.service.js.map

/***/ }),

/***/ "../../../../../src/app/class-status/class-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/class-status/class-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>List of Students in Classes</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 justify-content-start\">\r\n            <div class=\"row flexrow justify-content-center\">\r\n              <b>Semester/Year:</b>\r\n              <select size=\"1\" name=\"semester\" id = \"semester\" class=\"ml-2\" [(ngModel)]=\"currSemester.semester\">\r\n                <option value=\"1\">SUMMER</option>\r\n                <option value=\"3\">FALL</option>\r\n                <option selected=\"\" value=\"4\">SPRING</option>\r\n              </select>\r\n              <select size=\"1\" name=\"academicyear\" id = \"academicYear\" class=\"ml-2\" [(ngModel)]=\"currSemester.acaYear\">\r\n                <option *ngFor=\"let item of academicYearInfo\">{{item.acaYear}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center mt-2\">\r\n              <b>Filter:</b>\r\n              <input class=\"ml-2\" checked=\"\" type=\"radio\" value=\"-1\" name=\"aas_sgt\" (click)=\"choosed('-1');\">All\r\n              <input class=\"ml-2\" type=\"radio\" value=\"0\" name=\"aas_sgt\" (click)=\"choosed('0');\">AAS\r\n              <input class=\"ml-2\" type=\"radio\" value=\"1\" name=\"aas_sgt\" (click)=\"choosed('1');\">ESL\r\n              <input class=\"ml-2\" type=\"radio\" value=\"2\" name=\"aas_sgt\" (click)=\"choosed('2');\">Others\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center p-3\">\r\n              <table class=\"stripe hover\" id=\"datatable\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse\" width=\"100%\">\r\n                <thead>\r\n                  <tr align=\"center\" style=\"background:rgb(188,231,241);\">\r\n                    <td width=\"5%\">\r\n                      <b>\r\n                        <font face=\"Tahoma\" size=\"2\">No</font>\r\n                      </b>\r\n                    </td>\r\n                    <td width=\"10%\" title=\"Number of registered Students/Capacity of the class\">\r\n                      <b>\r\n                        <font face=\"Tahoma\" size=\"2\">#/Max</font>\r\n                      </b>\r\n                    </td>\r\n                    <td width=\"15%\">\r\n                      <b>\r\n                        <font face=\"Tahoma\" size=\"2\">Class Code</font>\r\n                      </b>\r\n                    </td>\r\n                    <td width=\"20%\">\r\n                      <b>\r\n                        <font face=\"Tahoma\" size=\"2\">Course Code</font>\r\n                      </b>\r\n                    </td>\r\n                    <td>\r\n                      <b>\r\n                        <font face=\"Tahoma\" size=\"2\">Course Name</font>\r\n                      </b>\r\n                    </td>\r\n                  </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n\r\n\r\n\r\n                  <tr *ngFor=\"let c of classes; let i=index\">\r\n                    <td>\r\n                      <font face=\"Tahoma\" style=\"font-size: 10pt\">&nbsp;{{i+1}}</font>\r\n                    </td>\r\n                    <td align=\"right\">\r\n                      <font face=\"Tahoma\" size=\"2\">&nbsp;{{c.numPermax}}</font>\r\n                    </td>\r\n                    <td>\r\n                      <font face=\"Tahoma\" style=\"font-size: 10pt\">&nbsp;{{c.classCode}}</font>\r\n                    </td>\r\n                    <td>\r\n                      <font face=\"Tahoma\" style=\"font-size: 10pt\">&nbsp;{{c.courseCode}}</font>\r\n                    </td>\r\n                    <td>\r\n                      <font face=\"Tahoma\" size=\"2\">{{c.className}}</font>\r\n                    </td>\r\n                  </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/class-status/class-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_status_service__ = __webpack_require__("../../../../../src/app/class-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_infofor_registration_service__ = __webpack_require__("../../../../../src/app/student-infofor-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassStatusComponent = (function () {
    function ClassStatusComponent(semesterService, cookie, classStatusService, studentInfoservice) {
        this.semesterService = semesterService;
        this.cookie = cookie;
        this.classStatusService = classStatusService;
        this.studentInfoservice = studentInfoservice;
    }
    ClassStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentInfoservice.getStudentinfoforRegistration(this.cookie.get('loginID'))
            .then(function (data) {
            _this.currStudent = data;
            // console.log(this.currStudent);
            $("#stuFullName").text(_this.currStudent.studentName);
        });
        this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
            .then(function (data) {
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
        });
        this.semesterService.getAcademicYear()
            .then(function (data) {
            _this.academicYearInfo = data;
            _this.semesterService.getSemesterInformation()
                .then(function (data1) {
                console.log(data1);
                _this.currSemester = data1;
                _this.getAllClassStatus(data1.acaYear, data1.semester, '-1');
            });
        });
    };
    ClassStatusComponent.prototype.getAllClassStatus = function (acaYear, semester, type) {
        var _this = this;
        this.classStatusService.getAllClassStatus(acaYear, semester, type)
            .then(function (data) {
            console.log(data);
            _this.classes = data;
        });
    };
    ClassStatusComponent.prototype.choosed = function (type) {
        this.getAllClassStatus($('#academicYear option:selected').text(), $('#semester option:selected').val(), type);
    };
    return ClassStatusComponent;
}());
ClassStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-class-status',
        template: __webpack_require__("../../../../../src/app/class-status/class-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/class-status/class-status.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__class_status_service__["a" /* ClassStatusService */], __WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */], __WEBPACK_IMPORTED_MODULE_3__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__class_status_service__["a" /* ClassStatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__class_status_service__["a" /* ClassStatusService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */]) === "function" && _d || Object])
], ClassStatusComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=class-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/connection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectionService = (function () {
    function ConnectionService() {
    }
    ConnectionService.prototype.getConnection = function () {
        return 'http://10.19.1.83:8080/SMS_System-2.0-Beta-1/';
    };
    return ConnectionService;
}());
ConnectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConnectionService);

//# sourceMappingURL=connection.service.js.map

/***/ }),

/***/ "../../../../../src/app/course-enrolled/course-enrolled.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/course-enrolled/course-enrolled.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card p-1\" style=\"border-radius: 0.3rem\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>List of Courses that you enrolled</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 justify-content-start\">\r\n            <div class=\"row flexrow justify-content-center\">\r\n              <b style=\"color: rgb(51, 170, 200)\">Semester/Year:</b>\r\n              <select size=\"1\" name=\"semester\" class=\"ml-2\" id=\"semester\" ng-model=\"selectedSemester\"(change)=\"update()\">\r\n                <option value=\"1\">SUMMER</option>\r\n                <option value=\"3\">FALL</option>\r\n                <option selected=\"\" value=\"4\">SPRING</option>\r\n              </select>\r\n              <select size=\"1\" name=\"academicyear\" id=\"academicyear\" ng-model=\"selectedYear\" class=\"ml-2\" (change)=\"update()\">\r\n                <option *ngFor=\"let year of years\" [value]=\"year\" >{{year}}</option>\r\n              </select>\r\n      \r\n            </div>\r\n            <div class=\"row flexrow justify-content-center p-3\">\r\n              <table class=\"table table-striped table-bordered\" id=\"datatable\"  width=\"100%\">\r\n                <thead align=\"center\" style=\"background:rgb(51, 170, 197);\">\r\n                    <th width=\"5%\">\r\n                      <b>\r\n                        No\r\n                      </b>\r\n                    </th>\r\n             \r\n                    <th width=\"30%\">\r\n                      <b>\r\n                        Course\r\n                      </b>\r\n                    </th>\r\n                    <th width=\"30%\">\r\n                      <b>\r\n                        Course Name\r\n                      </b>\r\n                    </th>\r\n                    <th width=\"15%\" id = \"errorCol\">\r\n                      <b>\r\n                        Credit\r\n                      </b>\r\n                    </th>\r\n                </thead>\r\n\r\n                <tbody>\r\n                  <tr *ngFor=\"let c of course; let i=index\">\r\n                    <td>\r\n                     {{i+1}}\r\n                    </td>\r\n                    <td>\r\n                     {{c.course}}\r\n                    </td>\r\n                    <td>\r\n                     {{c.courseName}}\r\n                    </td>\r\n                    <td>\r\n                      {{c.credit}}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/course-enrolled/course-enrolled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseEnrolledComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseEnrolledComponent = (function () {
    function CourseEnrolledComponent(cookie, router, http, connectionLink) {
        this.cookie = cookie;
        this.router = router;
        this.http = http;
        this.connectionLink = connectionLink;
        this.years = [
            '2002',
            '2003', '2004',
            '2005', '2006',
            '2007', '2008',
            '2009', '2010',
            '2011', '2012',
            '2013', '2014',
            '2015', '2016',
            '2017', '2018',
            '2019', '2020',
            '2021', '2022',
            '2023', '2024',
            '2025', '2026',
        ];
        this.currStudent = null;
        this.currSemesterAndYear = null;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    CourseEnrolledComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentCode = this.cookie.get('loginID');
        this.http.get(this.connectionLink.getConnection() + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            var temp;
            _this.http.get(_this.connectionLink.getConnection() + '/getSystemTimeREST', _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                temp = data;
                _this.Semester = temp.semester;
                _this.academicYear = temp.acaYear;
                _this.initialization();
            });
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    CourseEnrolledComponent.prototype.initialization = function () {
        var _this = this;
        $('#academicyear').val(this.academicYear);
        $('#semester').val(this.Semester);
        this.http.get(this.connectionLink.getConnection() + '/getCourseEnrolledList/' + this.studentCode + '&' + this.academicYear + '&' + this.Semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.course = data;
        });
    };
    CourseEnrolledComponent.prototype.ngOnChanges = function () {
        console.log($('#academicyear').val());
    };
    CourseEnrolledComponent.prototype.update = function () {
        var _this = this;
        var year = $('#academicyear').val();
        var semester = $('#semester').val();
        this.http.get(this.connectionLink.getConnection() + '/getCourseEnrolledList/' + this.studentCode + '&' + year + '&' + semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.course = data;
        });
    };
    return CourseEnrolledComponent;
}());
CourseEnrolledComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-course-enrolled',
        template: __webpack_require__("../../../../../src/app/course-enrolled/course-enrolled.component.html"),
        styles: [__webpack_require__("../../../../../src/app/course-enrolled/course-enrolled.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]) === "function" && _d || Object])
], CourseEnrolledComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course-enrolled.component.js.map

/***/ }),

/***/ "../../../../../src/app/dars/dars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainTable\r\n{\r\n    border-collapse: collapse;\r\n    font-size: 1rem;\r\n}\r\n\r\n#mainTable, #mainTable th, #mainTable td {\r\n    border: 1px solid rgb(119, 119, 119);\r\n }\r\n\r\n #mainTable thead\r\n{\r\n    background:rgb(187, 223, 253);\r\n}\r\n#mainTable th\r\n{\r\n    text-align: center;  \r\n    height:2.5rem; \r\n}\r\n\r\n#mainTable tr\r\n{\r\n    height:2rem\r\n}\r\n\r\n#mainTable td\r\n{\r\n    text-align: center;\r\n}\r\n\r\n.row\r\n{\r\n    font-size:100%;\r\n}\r\n#loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}\r\n\r\n#stuImage\r\n{\r\n    width:120px;\r\n}\r\n\r\n#firstHeading\r\n{\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:0.8rem;\r\n}\r\n\r\n#secondHeading\r\n{\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:2rem;\r\n}\r\n\r\n#thirdHeading\r\n{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:1rem;\r\n    font-style: italic;\r\n    margin-bottom: 6px;\r\n    margin-top:-2px;\r\n}\r\n\r\n.tableSubHeading\r\n{\r\n    font-weight: bold;\r\n    text-align: left !important;\r\n    padding-left: 6px;\r\n}\r\n\r\n.totalCreditEarned\r\n{\r\n    font-weight: bold;\r\n    text-align: right !important;\r\n    padding-right: 6px;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .row\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #thirdHeading\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #secondHeading\r\n    {\r\n        font-size:1.8rem;\r\n    }\r\n\r\n    #firstHeading\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #stuImage\r\n    {\r\n        width:120px;\r\n        margin-bottom:10px;\r\n    }\r\n\r\n    #mainTable\r\n    {\r\n        font-size:0.8rem;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dars/dars.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>Dars Report</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\">\r\n        <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <img id=\"loadingImg\" src=\"assets/img/loading.gif\" *ngIf=\"!showContentAAS || !showContentESL || !showContentEnrich || !showContentOther || !showDegreeGranted\"\r\n          />\r\n        </div>\r\n        <ng-container *ngIf=\"showContentAAS && showContentESL && showContentEnrich && showContentOther && showDegreeGranted\">\r\n          <div class=\"row justify-content-center\" id=\"firstHeading\">\r\n            SAIGON INSTITUTE TECHNOLOGY\r\n          </div>\r\n          <div class=\"row justify-content-center\" id=\"secondHeading\">\r\n            DARS REPORT\r\n          </div>\r\n          <div class=\"row justify-content-center\" id=\"thirdHeading\">\r\n            BÁO CÁO TIẾN ĐỘ HỌC TẬP\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3 text-center\" width=\"100%\">\r\n              <img id=\"stuImage\" class=\"rounded\" [src]=\"'http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/'+currStudent.image\"\r\n                width=\"140px\" />\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Student Name\r\n                  <i>(Họ tên sinh viên)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.lastName}} {{currStudent.firstName}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Student ID\r\n                  <i>(Mã số sinh viên)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.studentID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">PID</div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.hccsID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">EMPID</div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.hccsPID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Date of Birth\r\n                  <i>(Ngày sinh dd/mm/yyyy)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.dob}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Institution\r\n                  <i>(Trường)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: SAIGON INSTITUTE OF TECHNOLOGY</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">Degree\r\n                  <i>(Bằng cấp)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: ASSOCIATE IN APPLIED SCIENCE</b>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Catalog of Choice\r\n                  <i>(Catalog)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{additionInfo[0].catalog}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Specialization\r\n                  <i>(Chuyên ngành)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{additionInfo[0].program}}</b>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-2 justify-content-start\">\r\n            <div class=\"col\">\r\n              <b>Student Info </b>\r\n              <i>(Thông tin sinh viên)</i>\r\n            </div>\r\n          </div>\r\n          <ng-container *ngFor=\"let item of stuInfoFinalResult\">\r\n            <div class=\"row mt-2 justify-content-start\" style=\"font-size:95%;\">\r\n              <div class=\"col-9 col-md-5\">\r\n                {{item.name_e}}\r\n                <i>{{item.name_v}}</i>\r\n              </div>\r\n              <div class=\"col-2 col-md-7\">\r\n                {{item.value}}\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n          <div class=\"row mt-2 justify-content-center\" style=\"font-size:1.2rem\">\r\n            <b>STANDARDS OF WORK </b>\r\n            <i>(QUI CHẾ HỌC VỤ)</i>\r\n          </div>\r\n          <div class=\"row mt-2 justify-content-center\">\r\n            <div class=\"col\">\r\n              AAS Degree requires GPA of at least 2.0 on SaigonTech transcript and on transcript of Department of your specialization to\r\n              determine eligibility for graduation. Academic courses require at least a C grade to be completed. Workforce\r\n              courses require at least a D grade to be completed. The grades of all taken AAS courses are used to calculate\r\n              accumulated GPA. For repeated courses, the highest grade will be used in computing the GPA.\r\n              <br>\r\n              <i>Để được xét cấp bằng AAS và để được xác nhận hoàn tất chương trình AAS, điểm GPA tích lũy của SaigonTech và\r\n                điểm GPA tích lũy của các môn thuộc Khoa chuyên ngành phải đạt tối thiểu 2.0. Điểm đậu các môn học thuật\r\n                (academic) là C. Điểm đậu các môn kỹ năng (workforce) là D. Tất cả các môn đều được tính vào điểm trung bình.\r\n                Riêng các môn học lại, điểm cao nhất được dùng để tính GPA.</i>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-2 justify-content-center\" style=\"font-size:1.2rem\">\r\n            <b>LEGEND</b>\r\n            <i>(HƯỚNG DẪN)</i>\r\n          </div>\r\n          <div class=\"row mt-2 justify-content-center\">\r\n            <div class=\"col\">\r\n              PG = Pre-registered in next semester (Đăng ký cho học kỳ sau)\r\n              <br/> RG = Registered in the current semester (Đăng ký trong học kỳ hiện tại)\r\n              <br/> F(A/P/C) = Absent or Prohibited or Cheating (Vắng thi, cấm thi, gian lận)\r\n              <br/> T = Transferred (Điểm liên thông từ trường khác)\r\n              <br/>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-2 justify-content-center\" style=\"font-size:1.2rem\">\r\n            DATE ISSUE: {{dateAndTimeInfo.dateAndTime}}\r\n          </div>\r\n          <div class=\"row mt-2\">\r\n            <div class=\"col\">\r\n              <table width=\"100%\" border=\"1\" cellspacing=\"1\" class=\"table-responsive\" id=\"mainTable\">\r\n                <thead>\r\n                  <th width=\"15%\">\r\n                    Semester\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Học kỳ)</i>\r\n                  </th>\r\n                  <th width=\"15%\">\r\n                    Course\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Mã số môn học)</i>\r\n                  </th>\r\n                  <th width=\"30%\">\r\n                    Description\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Tên môn học)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Grade\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Điểm)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Credit Attempts\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Tín chỉ dự định)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Credit Earned\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(Tín chỉ đạt được)</i>\r\n                  </th>\r\n                  <th width=\"5%\">\r\n                    Term GPA\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(TB kỳ)</i>\r\n                  </th>\r\n                  <th width=\"20%\">\r\n                    Cummulative GPA\r\n                    <br/>\r\n                    <i style=\"font-weight: normal\">(TB tích lũy)</i>\r\n                  </th>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"tableSubHeading\" colspan=\"8\">AAS Course(s)</td>\r\n                  </tr>\r\n                  <ng-container *ngFor=\"let item of finalResultAAS\">\r\n                    <tr *ngFor=\"let course of item.courseData; let i = index\">\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.courseData.length'>{{item.semester}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectId}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectName}}</td>\r\n                      <td>{{course.letter_mark}}</td>\r\n                      <td>{{course.credits}}</td>\r\n                      <td>{{course.credits_earned}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.courseData.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                        {{item.termGPA}}\r\n                      </td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.courseData.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                        {{item.cumGPA}}\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"6\"></td>\r\n                    </tr>\r\n                  </ng-container>\r\n                  <tr>\r\n                    <td colspan=\"5\" class=\"totalCreditEarned\">Total Credits Earned - AAS Course(s):</td>\r\n                    <td>{{totalCreditEarnedAAS}}</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tableSubHeading\" colspan=\"8\">ESL Course(s)</td>\r\n                  </tr>\r\n\r\n\r\n                  <ng-container *ngFor=\"let item of finalResultESLBefore\">\r\n                    <tr *ngFor=\"let esl of item.esl ; let i = index\">\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length+item.toefl.length+1'>\r\n                        {{item.semester_name}}/{{item.aca_year}}\r\n                      </td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length'>ESL</td>\r\n                      <td>{{esl.subjectName}}</td>\r\n                      <td>{{esl.letter_Mark}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length'>{{item.credits}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length'>{{item.credits_earn}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">{{item.term_gpa_esl}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">{{item.cum_gpa_esl}}</td>\r\n                    </tr>\r\n\r\n                    <tr *ngIf=\"item.toefl.length > 0\">\r\n                      <td>TOEFL</td>\r\n                      <td colspan=\"4\">{{item.toefl[0].averageMark}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"5\"></td>\r\n                    </tr>\r\n                  </ng-container>\r\n                  <ng-container *ngFor=\"let item of finalResultESLAfter\">\r\n                    <ng-container *ngIf=\"item.course.length == 0; else elseClause\">\r\n                      <ng-container *ngFor=\"let ToeflandSat of item.toefl; let i = index\">\r\n                        <tr>\r\n                          <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1'>\r\n                            {{item.semester_name}}/{{item.aca_year}}\r\n                          </td>\r\n                          <td>{{item.toefl[0].subjectId}}</td>\r\n                          <td colspan=\"4\">{{item.toefl[0].averageMark}}</td>\r\n\r\n                          <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                            {{item.term_gpa_esl}}\r\n                          </td>\r\n                          <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                            {{item.cum_gpa_esl}}\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td colspan=\"5\"></td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #elseClause>\r\n                      <tr *ngFor=\"let course of item.course; let i = index\">\r\n                        <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1'>\r\n                          {{item.semester_name}}/{{item.aca_year}}\r\n                        </td>\r\n                        <td style=\"text-align:left;padding-left:4px;\">{{course.subjectId}}</td>\r\n                        <td style=\"text-align:left;padding-left:4px;\">{{course.subjectName}}</td>\r\n                        <td>{{course.letter_mark}}</td>\r\n                        <td>{{course.credits}}</td>\r\n                        <td>{{course.credit_earn}}</td>\r\n                        <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                          {{item.term_gpa_esl}}\r\n                        </td>\r\n                        <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                          {{item.cum_gpa_esl}}\r\n                        </td>\r\n                      </tr>\r\n                      <ng-container *ngIf=\"item.toefl.length > 0\">\r\n                        <tr *ngFor=\"let ToeflandSat of item.toefl\">\r\n                          <td>{{ToeflandSat.subjectId}}</td>\r\n                          <td colspan=\"4\">{{ToeflandSat.averageMark}}</td>\r\n                        </tr>\r\n                      </ng-container>\r\n                      <tr>\r\n                        <td colspan=\"5\"></td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </ng-container>\r\n                  <tr>\r\n                    <td colspan=\"5\" class=\"totalCreditEarned\">Total Credits Earned - ESL Course(s):</td>\r\n                    <td>{{totalCreditEarnedESL}}</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tableSubHeading\" colspan=\"8\">Enrichment Course(s)</td>\r\n                  </tr>\r\n                  <ng-container *ngFor=\"let item of finalResultEnrichment\">\r\n                    <tr *ngFor=\"let course of item.course; let i = index\">\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+1'>{{item.semester_name}}/{{item.acaYear}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectId}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectName}}</td>\r\n                      <td>{{course.letter_mark}}</td>\r\n                      <td>{{course.credits}}</td>\r\n                      <td>{{course.credits_Earn}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+1'></td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+1'></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"6\"></td>\r\n                    </tr>\r\n                  </ng-container>\r\n                  <tr>\r\n                    <td colspan=\"5\" class=\"totalCreditEarned\">Total Enrichment Course(s) Passed:</td>\r\n                    <td>{{totalCoursePassEnrich}}</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"tableSubHeading\" colspan=\"8\">Other Course(s)</td>\r\n                  </tr>\r\n\r\n                  <ng-container *ngFor=\"let item of finalResultOther\">\r\n                    <tr *ngFor=\"let course of item.course; let i = index\">\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length'>{{item.semester_name}}/{{item.acaYear}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectId}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{course.subjectName}}</td>\r\n                      <td>{{course.letter_mark}}</td>\r\n                      <td>{{course.credits}}</td>\r\n                      <td>{{course.credits_Earn}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+1'></td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+1'></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"6\"></td>\r\n                    </tr>\r\n                  </ng-container>\r\n\r\n                  <tr>\r\n                    <td colspan=\"5\" class=\"totalCreditEarned\">Total Other Other Course(s) Passed:</td>\r\n                    <td>{{totalCoursePassOther}}</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div *ngIf = \"degreeGranted.length > 0\" class=\"row mt-4\">\r\n            <div class=\"col\" style=\"text-align:center\">\r\n              <i>Degree granted on {{degreeGranted[0].semester}}</i>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col\" style=\"text-align:center\">\r\n              TP. Hồ Chí Minh, ngày {{dateAndTimeInfo.dateAndTime}} <br/>\r\n              Người lập bảng <br/><br/><br/><br/>\r\n              <b>Huỳnh Kim Thủy Tiên</b>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dars/dars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DarsComponent = (function () {
    function DarsComponent(cookie, loginService, http, semesterService, connectionLink, router) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.semesterService = semesterService;
        this.connectionLink = connectionLink;
        this.router = router;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.studentScore = new Array(); //Scores such as Math score, Vietnamese essay score, etc.
        this.stuInfoFinalResult = new Array(); //Final result after combining all information
        this.finalResultAAS = new Array(); //They result after loading AAS semesters and coresponding courses
        this.totalCreditEarnedAAS = 0; //Total earned credit of AAS courses
        this.totalCreditEarnedESL = 0; //Total earned credit of ESL courses
        this.totalCoursePassEnrich = 0; //Total earned credit of Enrichment courses
        this.totalCoursePassOther = 0; //Total earned credit of Other courses
        this.showContentAAS = false; //True, the data content of AAS courses will be shown, false, the loading gif will be shown
        this.showContentESL = false; //True, the data content of ESL courses will be shown, false, the loading gif will be shown
        this.showContentEnrich = false; //True, the data content of Enrichment courses will be shown, false, the loading gif will be shown
        this.showContentOther = false; //True, the data content of Other courses will be shown, false, the loading gif will be shown
        this.showDegreeGranted = false; //True if loading degree granted has been done, false, the loading gif will be shown
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    DarsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/Dars" class="text-infor"> Dars</a>');
        //Get general data 
        this.http.get(this.serverLink + '/getHCCTranscriptGeneralInfo/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.additionInfo = data;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.semesterInfo = data;
                _this.http.get(_this.serverLink + '/getSystemDateAndTime/0', _this.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.dateAndTimeInfo = data;
                    //Set student's full name and add a small photo in a sidebar 
                    $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                    $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                    _this.getStudentInfoDetail();
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            });
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //Function used to get student infomation in detail such as High School Diploma, Birth Certificate, Math Score,etc.
    DarsComponent.prototype.getStudentInfoDetail = function () {
        var _this = this;
        this.http.get(this.serverLink + '/getDarsStudentInfo/', this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.studentInfoDataDetail = data;
            for (var i = 0; i < _this.studentInfoDataDetail.length; i++) {
                //Get student score
                if (_this.studentInfoDataDetail[i].id_seq == '41' || _this.studentInfoDataDetail[i].id_seq == '42' || _this.studentInfoDataDetail[i].id_seq == '61') {
                    _this.studentScore.push(_this.http.get(_this.serverLink + '/getDarsStudentInfoScore/' + _this.currStudent.id + '&' + _this.studentInfoDataDetail[i].id_seq, _this.options).map(function (res) { return res.json(); }));
                }
            }
            Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.studentScore).subscribe(function (data) {
                _this.studentScore = data;
                //Get student's IELT/ELTS score
                _this.http.get(_this.serverLink + '/getDarsTOELF_IELTS/' + _this.currStudent.id, _this.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.toelf_ieltsScore = data;
                    //Combine everything into finalResult array
                    for (var i = 0; i < _this.studentInfoDataDetail.length + 1; i++) {
                        if (i == _this.studentInfoDataDetail.length) {
                            var value = "";
                            if (_this.toelf_ieltsScore.length == 0) {
                                value = "N/A";
                            }
                            else {
                                value = _this.toelf_ieltsScore.status;
                            }
                            _this.stuInfoFinalResult.push({
                                id_seq: "182",
                                name_e: "TOEFL/IELTS",
                                name_v: "",
                                status: 1,
                                note: "",
                                typeBox: "",
                                sequenceNum: 10,
                                value: value
                            });
                        }
                        else if (_this.studentInfoDataDetail[i].id_seq == '41') {
                            _this.stuInfoFinalResult.push({
                                id_seq: "41",
                                name_e: "Maths Score",
                                name_v: "(Điểm Toán)",
                                status: 1,
                                note: "",
                                typeBox: "",
                                sequenceNum: 10,
                                value: _this.studentScore[0].contents
                            });
                        }
                        else if (_this.studentInfoDataDetail[i].id_seq == '42') {
                            _this.stuInfoFinalResult.push({
                                id_seq: "42",
                                name_e: "Vietnamese Essay Score",
                                name_v: "(Điểm luận văn Tiếng Việt)",
                                status: 1,
                                note: "",
                                typeBox: "",
                                sequenceNum: 10,
                                value: _this.studentScore[1].contents
                            });
                        }
                        else if (_this.studentInfoDataDetail[i].id_seq == '61') {
                            _this.stuInfoFinalResult.push({
                                id_seq: "41",
                                name_e: "English Placement Test Score",
                                name_v: "(Điểm xếp lớp Tiếng Anh)",
                                status: 1,
                                note: "",
                                typeBox: "",
                                sequenceNum: 10,
                                value: _this.studentScore[1].contents
                            });
                        }
                        else {
                            var value = "";
                            if (_this.studentInfoDataDetail[i].status == '1')
                                value = "OK";
                            else
                                value = "N/A";
                            _this.stuInfoFinalResult.push({
                                id_seq: _this.studentInfoDataDetail[i].id_seq,
                                name_e: _this.studentInfoDataDetail[i].name_e,
                                name_v: "(" + _this.studentInfoDataDetail[i].name_v + ")",
                                status: _this.studentInfoDataDetail[i].status,
                                note: _this.studentInfoDataDetail[i].note,
                                typeBox: _this.studentInfoDataDetail[i].typeBox,
                                sequenceNum: _this.studentInfoDataDetail[i].sequenceNum,
                                value: value
                            });
                        }
                    }
                    _this.getAASTranscriptData(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            });
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    DarsComponent.prototype.getAASTranscriptData = function (stuId, acaYear, semester) {
        var _this = this;
        this.http.get(this.serverLink + '/getAASTranscriptSemester/' + stuId + '&' + acaYear + '&' + semester, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.length == 0) {
                _this.showContentAAS = true;
                _this.getESLTranscriptDataBefore(_this.currStudent.id);
            }
            else {
                _this.aasTranscriptSemester = data;
                var arrayOfCourses = new Array(); //The array of courses
                //Loop through aasTranscriptSemester and get the courses for each of them
                for (var i = 0; i < _this.aasTranscriptSemester.length; i++) {
                    arrayOfCourses.push(_this.http.get(_this.serverLink + '/getAASTranscriptCourse/' + stuId + '&' + _this.aasTranscriptSemester[i].acaYear
                        + '&' + _this.aasTranscriptSemester[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(arrayOfCourses).subscribe(function (data) {
                    _this.aasTranscriptCourse = data;
                    //Combine all data into finalResult array
                    for (var i = 0; i < _this.aasTranscriptSemester.length; i++) {
                        _this.finalResultAAS.push({
                            semester: _this.aasTranscriptSemester[i].semester_name + '/' + _this.aasTranscriptSemester[i].acaYear,
                            termGPA: _this.aasTranscriptSemester[i].term_gpa_aas,
                            cumGPA: _this.aasTranscriptSemester[i].cum_gpa_aas,
                            courseData: _this.aasTranscriptCourse[i]
                        });
                        for (var j = 0; j < _this.aasTranscriptCourse[i].length; j++) {
                            _this.totalCreditEarnedAAS = Number(_this.totalCreditEarnedAAS) + Number(_this.aasTranscriptCourse[i][j].credits_earned);
                        }
                    }
                    // console.log(this.finalResult);
                    _this.showContentAAS = true;
                    _this.getESLTranscriptDataBefore(_this.currStudent.id);
                });
            }
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get transcript ESL before Spring 2003
    DarsComponent.prototype.getESLTranscriptDataBefore = function (stuId) {
        var _this = this;
        //Get semesters data
        this.http.get(this.serverLink + '/getELSTranscriptSemesterBefore/' + stuId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.eslTranscriptSemesterBefore = data;
            //If current student doesn't have data before Spring 2003
            if (_this.eslTranscriptSemesterBefore.length == 0) {
                _this.getESLTranscriptDataAfter(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
            }
            else {
                //For each semesters, get corresponding courses
                _this.eslTranscriptCourseBefore = new Array();
                for (var i = 0; i < _this.eslTranscriptSemesterBefore.length; i++) {
                    _this.eslTranscriptCourseBefore.push(_this.http.get(_this.serverLink + "/getELSTranscriptCourseBefore/" +
                        stuId + "&" + _this.eslTranscriptSemesterBefore[i].aca_year + "&" + _this.eslTranscriptSemesterBefore[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.eslTranscriptCourseBefore).subscribe(function (data) {
                    _this.eslTranscriptCourseBefore = data;
                    //For each semesters, get corresponding TOEFL score
                    var tempToeflArray = new Array();
                    for (var i = 0; i < _this.eslTranscriptSemesterBefore.length; i++) {
                        tempToeflArray.push(_this.http.get(_this.serverLink + "/getELSTranscriptTOEFL/" +
                            stuId + "&" + _this.eslTranscriptSemesterBefore[i].aca_year + "&" + _this.eslTranscriptSemesterBefore[i].semester, _this.options).map(function (res) { return res.json(); }));
                    }
                    Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(tempToeflArray).subscribe(function (data) {
                        _this.eslTranscriptToeflBefore = data;
                        //Combine everything into finalResultESLBefore
                        _this.finalResultESLBefore = new Array();
                        for (var i = 0; i < _this.eslTranscriptSemesterBefore.length; i++) {
                            _this.finalResultESLBefore.push({
                                aca_year: _this.eslTranscriptSemesterBefore[i].aca_year,
                                semester_name: _this.eslTranscriptSemesterBefore[i].semester_name,
                                semestervn: _this.eslTranscriptSemesterBefore[i].semestervn,
                                esl: _this.eslTranscriptCourseBefore[i],
                                credits: _this.eslTranscriptSemesterBefore[i].credits,
                                credits_earn: _this.eslTranscriptSemesterBefore[i].credits_earn,
                                term_gpa_esl: _this.eslTranscriptSemesterBefore[i].term_gpa_esl,
                                cum_gpa_esl: _this.eslTranscriptSemesterBefore[i].cum_gpa_esl,
                                toefl: _this.eslTranscriptToeflBefore[i]
                            });
                            _this.totalCreditEarnedESL = Number(_this.totalCreditEarnedESL) + Number(_this.eslTranscriptSemesterBefore[i].credits_earn);
                        }
                        _this.getESLTranscriptDataAfter(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
                    }, function (err) {
                        _this.cookie.delete('loginID');
                        _this.cookie.delete('token');
                        _this.router.navigate(['/Login']);
                    });
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //Function is used to get Transcript ESL after Spring 2003
    DarsComponent.prototype.getESLTranscriptDataAfter = function (stuId, acaYear, semester) {
        var _this = this;
        //Get semester data
        this.http.get(this.serverLink + '/getESLTranscriptSemesterAfter/' + stuId + "&" + acaYear + "&" + semester, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.eslTranscriptSemesterAfter = data;
            //If there is no content in eslTranscriptSemesterAfter
            if (_this.eslTranscriptSemesterAfter.length == 0) {
                _this.showContentESL = true;
                _this.getEnrichmentTranscriptData(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
            }
            else {
                //For each semester, get the corresponding courses
                _this.eslTranscriptCourseAfter = new Array();
                for (var i = 0; i < _this.eslTranscriptSemesterAfter.length; i++) {
                    _this.eslTranscriptCourseAfter.push(_this.http.get(_this.serverLink + '/getESLTranscriptCourseAfter/' + _this.eslTranscriptSemesterAfter[i].stuId + "&" + _this.eslTranscriptSemesterAfter[i].acaYear + "&" + _this.eslTranscriptSemesterAfter[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.eslTranscriptCourseAfter).subscribe(function (data) {
                    _this.eslTranscriptCourseAfter = data;
                    //For each semesters, get corresponding TOEFL score
                    var tempToeflArray = new Array();
                    for (var i = 0; i < _this.eslTranscriptSemesterAfter.length; i++) {
                        tempToeflArray.push(_this.http.get(_this.serverLink + "/getELSTranscriptTOEFL/" +
                            stuId + "&" + _this.eslTranscriptSemesterAfter[i].acaYear + "&" + _this.eslTranscriptSemesterAfter[i].semester, _this.options).map(function (res) { return res.json(); }));
                    }
                    Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(tempToeflArray).subscribe(function (data) {
                        _this.eslTranscriptToeflAfter = data;
                        //Combine everything into finalResultESLAfter
                        _this.finalResultESLAfter = new Array();
                        for (var i = 0; i < _this.eslTranscriptSemesterAfter.length; i++) {
                            _this.finalResultESLAfter.push({
                                aca_year: _this.eslTranscriptSemesterAfter[i].acaYear,
                                semester_name: _this.eslTranscriptSemesterAfter[i].semester_name,
                                semesterVn: _this.eslTranscriptSemesterAfter[i].semesterVn,
                                course: _this.eslTranscriptCourseAfter[i],
                                term_gpa_esl: _this.eslTranscriptSemesterAfter[i].term_gpa_esl,
                                cum_gpa_esl: _this.eslTranscriptSemesterAfter[i].cum_gpa_esl,
                                toefl: _this.eslTranscriptToeflAfter[i]
                            });
                            for (var j = 0; j < _this.eslTranscriptCourseAfter[i].length; j++) {
                                _this.totalCreditEarnedESL = Number(_this.totalCreditEarnedESL) + Number(_this.eslTranscriptCourseAfter[i][j].credit_earn);
                            }
                        }
                        _this.showContentESL = true;
                        _this.getEnrichmentTranscriptData(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
                    }, function (err) {
                        _this.cookie.delete('loginID');
                        _this.cookie.delete('token');
                        _this.router.navigate(['/Login']);
                    });
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }
        });
    };
    //Function used to get enrichment transcript
    DarsComponent.prototype.getEnrichmentTranscriptData = function (stuId, acaYear, semester) {
        var _this = this;
        //Get semester data
        this.http.get(this.serverLink + '/getDarsEnrichmentSemester/' + stuId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.enrichmentTranscriptSemester = data;
            if (_this.enrichmentTranscriptSemester.length == 0) {
                _this.showContentEnrich = true;
                _this.getOtherTranscriptData(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
            }
            else {
                //For each semesters, get corresponding TOEFL score
                _this.enrichmentTranscriptCourse = new Array();
                for (var i = 0; i < _this.enrichmentTranscriptSemester.length; i++) {
                    _this.enrichmentTranscriptCourse.push(_this.http.get(_this.serverLink + "/getDarsEnrichmentCourse/" +
                        stuId + "&" + _this.enrichmentTranscriptSemester[i].acaYear + "&" + _this.enrichmentTranscriptSemester[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                ;
                Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.enrichmentTranscriptCourse).subscribe(function (data) {
                    _this.enrichmentTranscriptCourse = data;
                    //Combine everything to finalResult
                    _this.finalResultEnrichment = new Array();
                    for (var i = 0; i < _this.enrichmentTranscriptSemester.length; i++) {
                        _this.finalResultEnrichment.push({
                            semester_name: _this.enrichmentTranscriptSemester[i].semester_name,
                            acaYear: _this.enrichmentTranscriptSemester[i].acaYear,
                            course: _this.enrichmentTranscriptCourse[i],
                        });
                        for (var j = 0; j < _this.enrichmentTranscriptCourse[i].length; j++) {
                            if (_this.enrichmentTranscriptCourse[i][j].credits_Earn > 0) {
                                _this.totalCoursePassEnrich = Number(_this.totalCoursePassEnrich) + 1;
                            }
                        }
                    }
                    // console.log(this.finalResultEnrichment);
                    _this.showContentEnrich = true;
                    _this.getOtherTranscriptData(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }
        });
    };
    //Function used to get other courses transcript
    DarsComponent.prototype.getOtherTranscriptData = function (stuId, acaYear, semester) {
        var _this = this;
        //Get semester data
        this.http.get(this.serverLink + '/getDarsOthersSemester/' + stuId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.otherTranscriptSemester = data;
            if (_this.otherTranscriptSemester.length == 0) {
                _this.showContentOther = true;
                _this.getDegreeGranted(_this.currStudent.id);
            }
            else {
                //For each semesters, get corresponding TOEFL score
                _this.otherTranscriptCourse = new Array();
                for (var i = 0; i < _this.otherTranscriptSemester.length; i++) {
                    _this.otherTranscriptCourse.push(_this.http.get(_this.serverLink + "/getDarsOtherCourse/" +
                        stuId + "&" + _this.otherTranscriptSemester[i].acaYear + "&" + _this.otherTranscriptSemester[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                ;
                Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.otherTranscriptCourse).subscribe(function (data) {
                    _this.otherTranscriptCourse = data;
                    //Combine everything to finalResult
                    _this.finalResultOther = new Array();
                    for (var i = 0; i < _this.otherTranscriptSemester.length; i++) {
                        _this.finalResultOther.push({
                            semester_name: _this.otherTranscriptSemester[i].semester_name,
                            acaYear: _this.otherTranscriptSemester[i].acaYear,
                            course: _this.otherTranscriptCourse[i],
                        });
                        for (var j = 0; j < _this.otherTranscriptCourse[i].length; j++) {
                            if (_this.otherTranscriptCourse[i][j].credits_Earn > 0) {
                                _this.totalCoursePassOther = Number(_this.totalCoursePassOther) + 1;
                            }
                        }
                    }
                    _this.showContentOther = true;
                    _this.getDegreeGranted(_this.currStudent.id);
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    DarsComponent.prototype.getDegreeGranted = function (stuId) {
        var _this = this;
        this.http.get(this.serverLink + '/getDarsDegreeGranted/' + stuId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.degreeGranted = data;
            _this.showDegreeGranted = true;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    return DarsComponent;
}());
DarsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dars',
        template: __webpack_require__("../../../../../src/app/dars/dars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dars/dars.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _f || Object])
], DarsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dars.component.js.map

/***/ }),

/***/ "../../../../../src/app/degree-plan/degree-plan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/degree-plan/degree-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          Degree Plan\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-4\">\r\n        <div class=\"row flexrow justify-content-center no-gutters\" *ngIf=\"doneLoading\"  [innerHTML]=\"innerHtml\">\r\n        </div>\r\n        <div class=\"row flexrow justify-content-center no-gutters\" *ngIf=\"!doneLoading\">\r\n          <img id=\"loadingImg\" src=\"assets/img/loading.gif\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/degree-plan/degree-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DegreePlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DegreePlanComponent = (function () {
    function DegreePlanComponent(cookie, loginService, http, semesterService, sanitizer, connectionLink, router) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.semesterService = semesterService;
        this.sanitizer = sanitizer;
        this.connectionLink = connectionLink;
        this.router = router;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.doneLoading = false; //If it is true, hide loading gif and show content
        this.basePath = "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/degree_plan_upload/"; //Base path of the attchement
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    DegreePlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/DegreePlan" class="text-infor"> Degree Plan</a>');
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data2) {
                _this.semesterInfo = data;
                //Set student's full name and a small photo in a sidebar 
                $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                //Get HCC degree plan
                _this.http.get(_this.serverLink + '/getDegreePlanAttachment/' + _this.currStudent.id, _this.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    if (data.length == 0) {
                        _this.doneLoading = true;
                    }
                    else {
                        _this.degreePlanData = data;
                        _this.finalPath = _this.basePath + _this.degreePlanData[0].attachement;
                        //If user uses computer, allow him to view directly
                        if (window.screen.width >= 1024) {
                            _this.innerHtml = _this.sanitizer.bypassSecurityTrustHtml('<object data="' + _this.finalPath + '" type="application/pdf" style="width: 100%; height: 100vh"  class="embed-responsive-item"></object>');
                            _this.doneLoading = true;
                        }
                        else {
                            _this.innerHtml = _this.sanitizer.bypassSecurityTrustHtml('<a href="' + _this.finalPath + '" download>Click here</a> &nbsp;to download your degree plan.');
                            _this.doneLoading = true;
                        }
                    }
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            });
        });
    };
    return DegreePlanComponent;
}());
DegreePlanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-degree-plan',
        template: __webpack_require__("../../../../../src/app/degree-plan/degree-plan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/degree-plan/degree-plan.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _g || Object])
], DegreePlanComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=degree-plan.component.js.map

/***/ }),

/***/ "../../../../../src/app/enrichment-registration/enrichment-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tableTitle\r\n{\r\n    color:white;\r\n    padding:7px;\r\n    font-weight:bold;\r\n    font-size:1rem;\r\n    border-radius: 10px;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass\r\n{\r\n    border-collapse: collapse;\r\n    border: 1px solid rgba(23, 26, 207, 0.473);\r\n}\r\n\r\n#classRegistered thead\r\n{\r\n    background: rgb(35,204,239);\r\n}\r\n\r\n#classRegistered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classPass th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered thead\r\n{\r\n    background: rgb(251,64,75);\r\n}\r\n\r\n#classPass thead\r\n{\r\n    background: rgb(121,182,50);\r\n}\r\n\r\n\r\n\r\n#classRegistered,#classOffered,#classPass tbody tr td\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass tr\r\n{\r\n    height:25px;\r\n    vertical-align: center;\r\n}\r\n\r\na\r\n{\r\n    color:#1441e4 !important;\r\n}\r\n.card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}\r\n.timeTableModal{\r\n    font-size: 1.3rem;\r\n}\r\n.firstTTBRow{\r\n    background-color: rgb(176, 231, 235);\r\n    width: 15%;\r\n    text-align: center;\r\n}\r\n.contentTTBRow{\r\n    text-align: center;\r\n}\r\n#TTBModalLabel{\r\n    text-align: center;\r\n    color: red;\r\n    margin: 0 auto;\r\n}\r\n.modal-full{\r\n    max-width: 98% !important;\r\n    width:98% !important;\r\n    margin: 15px auto; \r\n}\r\n@media (max-width: 768px){\r\n    .modal-full{\r\n        margin:5px;\r\n    }\r\n}\r\n.modal-full .modal-content{\r\n    height: 100%;\r\n    height:auto;\r\n    border-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/enrichment-registration/enrichment-registration.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n  <div class=\"card\"> \r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b class=\"text-info\">Enrichment Registration</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex \">Semester/Year: \r\n              <span  style=\"padding:-5px;\">\r\n              <b>SPRING/2018</b>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex \">Student Id: \r\n              <span  style=\"padding:-5px;\">\r\n              <b>{{StudentAASInfoData.studentID}}</b>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Student Name: \r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{StudentAASInfoData.studentName}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Catalog: \r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{StudentAASInfoData.catalogYear}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Specialization: \r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{StudentAASInfoData.specialization}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">ESL Level:\r\n                <span  style=\"padding:-5px;\">\r\n                <b>{{eslLevel}}</b>\r\n                </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-start no-gutters\">\r\n            <div class=\"col d-flex\">\r\n              <a href=\"http://www.saigontech.edu.vn/thoi-khoa-bieu-bang-diem.html\" target=\"_blank\" style=\"font-weight:bold; text-decoration: underline; color:#1441e4\">Overall Timetable</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group row pl-3\">\r\n                  <label class=\"col-form-label text-info text-nowrap\" style=\"font-size: 1rem;margin-bottom: -1rem\"><p class=\"font-weight-bold\">Specialization:</p></label>                 \r\n                  <select class=\"SpecializationSB ml-3\" id=\"Specialization\" name=\"Specialization\" style=\"width:100%;\" [(ngModel)]=\"majorCode\" (change)=\"updateData()\">\r\n                    <option *ngFor=\"let spec of specializationData\" [value]=\"spec.id\">{{spec.specializationName}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-danger \"><p class=\"font-weight-bold\" [innerHtml]=\"beforeAasRegistration\" ></p></div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <!-- __________________________________________ -->\r\n      <div class=\"row justify-content-start\">\r\n            <button class=\"btn btn-info ml-5\" (click)=\"deleteCourseRegistration()\">Delete</button>\r\n      </div>\r\n      <div class=\"row flexrow justify-content-center no-gutters\">\r\n        <h5 class=\"text-dark font-weight-bold\">CLASS(ES) REGISTERED</h5>\r\n      <div class=\"table-responsive\">\r\n        <table id = \"classRegistered\"s class=\"table table-hover table-striped table-bordered mt-2\">\r\n          <thead>\r\n          <tr align=\"center\" style=\"height: 32px;\" >\r\n            <th width=\"5%\">No</th>\r\n            <th width=\"5%\">Del.</th>\r\n            <th width=\"10%\">Class Code</th>\r\n            <th width=\"10%\">Course Code</th>\r\n            <th width=\"30%\">Course Name</th>\r\n            <th width=\"10%\">#/Max</th>\r\n            <th width=\"30%\">Prerequisiste</th>\r\n            </tr>\r\n          </thead>\r\n            <tbody>\r\n          <tr *ngFor = \"let classRegistered of getClassRegisteredData; let i = index\" bgcolor=\"#ffffff\">\r\n            <td>{{i+1}}</td>\r\n            <td><input type=\"checkbox\"  [value]=\"classRegistered.classCode\" class=\"classRegisteredCB\"\r\n              (click)=\"getClassRegisteredCode()\">\r\n            </td>\r\n            <td><a (click)=\"showTimetable(classRegistered.classCode)\" style=\"cursor: pointer\">{{classRegistered.classID}}</a></td>\r\n            <td>{{classRegistered.subjectID}}</td>\r\n            <td>{{classRegistered.subjectName}}</td>\r\n            <td>{{classRegistered.numberStudentRegistered}}/{{classRegistered.numberStudentClass}}</td>\r\n            <td>{{classRegistered.courseIDPrerequisite}}</td>\r\n            </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n      \r\n      </div>\r\n\r\n      <div class=\"row justify-content-start mt-5\">\r\n          <button class=\"btn btn-danger ml-5\" (click)=\"insertCourseRegistration()\">Add</button>\r\n    </div>\r\n      <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <h5 class=\"text-dark font-weight-bold\">CLASS(ES) OFFERED</h5>\r\n          <div class=\"table-responsive\">\r\n            <table id = \"classOffered\" class=\"table table-hover table-striped table-bordered  mt-2\">\r\n              <thead>\r\n              <tr align=\"center\" style=\"height: 32px;\" >\r\n                <th width=\"5%\">No</th>\r\n                <th width=\"5%\">Del.</th>\r\n                <th width=\"10%\">Class Code</th>\r\n                <th width=\"10%\">Course Code</th>\r\n                <th width=\"30%\">Course Name</th>\r\n                <th width=\"10%\">#/Max</th>\r\n                <th width=\"30%\">Prerequisiste</th>\r\n                </tr>\r\n              </thead>\r\n                <tbody>\r\n              <tr *ngFor = \"let classOpened of getClassOpenedData; let i = index\" bgcolor=\"#ffffff\">\r\n                <td>{{i+1}}</td>\r\n                <td><input type=\"checkbox\"  [value]=\"classOpened.classCode\" class=\"classOpenCB\"\r\n                  (click)=\"getClassOpenCode()\">\r\n                </td>\r\n                <td><a (click)=\"showTimetable(classOpened.classCode)\" style=\"cursor: pointer\">{{classOpened.classID}}</a></td>\r\n                <td>{{classOpened.courseCode}}</td>\r\n                <td>{{classOpened.courseName}}</td>\r\n                <td>{{classOpened.numberStudentRegistered}}/{{classOpened.numberStudentClass}}</td>\r\n                <td>{{classOpened.courseIDPrerequisite}}</td>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n          \r\n      </div>\r\n      \r\n    \r\n      <!-- __________________________________________ -->\r\n    </div>\r\n  \r\n  </div>\r\n</div>\r\n <!-- Modal For TimeTable -->\r\n <div class=\"modal fade timeTableModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-full\">\r\n      \r\n      <div class=\"modal-content\">\r\n        \r\n          <div class=\"modal-header\">\r\n              <h2 class=\"modal-title\" id=\"TTBModalLabel\">TIMETABLE</h2>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"container\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"TimetableData != null\">\r\n                    <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                      <strong>Class: </strong>\r\n                    </span>\r\n                    {{TimetableData.classCode}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <p *ngIf=\"TimetableData != null\">\r\n                      <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                        <strong>Semester / Year: </strong>\r\n                      </span>\r\n                      {{TimetableData.semesterYear}}\r\n                    </p>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <p *ngIf=\"TimetableData != null\">\r\n                      <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                        <strong>Course Name: </strong>\r\n                      </span>\r\n                      {{TimetableData.className}}\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                      <p *ngIf=\"TimetableData != null\">\r\n                        <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                          <strong>Instructor Name: </strong>\r\n                        </span>\r\n                        {{TimetableData.instructorName}}\r\n                      </p>\r\n                    </div>\r\n              </div>              \r\n\r\n              <div class=\"row\">\r\n                  <div class=\"table-responsive\"  *ngIf=\"TimetableData != null\">\r\n                    <table class=\"table-bordered table-striped\">\r\n                      <tr  *ngFor=\"let r of TimetableData.timetableMatrix; let i=index\">\r\n                        <ng-container *ngIf = \"i==0\">\r\n                          <ng-container *ngFor=\"let c of r; let j = index\">\r\n                            <td *ngIf =\"j>0\" [innerHtml]=\"c\" class=\"firstTTBRow\"></td>\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf = \"i>0\">\r\n                          <ng-container *ngFor=\"let c of r; let j = index\">\r\n                            <td *ngIf =\"j>0\" [innerHtml]=\"c\" class=\"contentTTBRow\"></td>\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--End Modal For TimeTable -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/enrichment-registration/enrichment-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrichmentRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timetable_service__ = __webpack_require__("../../../../../src/app/timetable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnrichmentRegistrationComponent = (function () {
    function EnrichmentRegistrationComponent(http, cookie, loginService, connectionLink, TimetableService, router) {
        this.http = http;
        this.cookie = cookie;
        this.loginService = loginService;
        this.connectionLink = connectionLink;
        this.TimetableService = TimetableService;
        this.router = router;
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    EnrichmentRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverLink = this.connectionLink.getConnection();
        this.currStudentID = this.cookie.get('loginID');
        this.initializeStudentAASInfo();
        this.initializeSpecialization();
        this.getESLLevel();
        this.getSystemTime();
        setTimeout(function () {
            _this.getBeforeAASRegistration();
            _this.getClassRegistered();
            _this.getClassOpened();
        }, 2000);
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/EnrichmentRegistration" class="text-infor">Enrichment Registration</a>');
        //Load current student's information (name, image, student Id,...)
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Set student's full name and a small photo in a sidebar 
            $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
        });
        var that = this;
        $('.SpecializationSB').select2().on("change", function () {
            alert($('.SpecializationSB').val());
            that.majorCode = $('.SpecializationSB').val();
            that.updateData();
        });
    };
    //This function is used to get Student AAS Information
    EnrichmentRegistrationComponent.prototype.initializeStudentAASInfo = function () {
        var _this = this;
        this.http.get(this.serverLink + '/getStudentAASInfo/' + this.currStudentID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.StudentAASInfoData = data;
            _this.catalogID = data.catalogCode;
            _this.isToefl = data.isToefl;
        });
    };
    //This function is used to get Specialization Information
    EnrichmentRegistrationComponent.prototype.initializeSpecialization = function () {
        var _this = this;
        this.http.get(this.serverLink + '/getSpecializationActived', this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.specializationData = data;
            _this.majorCode = data[0].id;
        });
    };
    //This function is used to get ESL Level
    EnrichmentRegistrationComponent.prototype.getESLLevel = function () {
        var _this = this;
        this.http.get(this.serverLink + '/getESLLevel/' + this.currStudentID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.eslLevel = data.eslLevel;
        });
    };
    EnrichmentRegistrationComponent.prototype.getSystemTime = function () {
        var _this = this;
        return this.http.get(this.serverLink + '/getSystemTimeREST', this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.acaYear = data.acaYear;
            _this.semester = data.semester;
        });
    };
    //This function is used to get Class Registered Information
    EnrichmentRegistrationComponent.prototype.getClassRegistered = function () {
        var _this = this;
        return this.http.get(this.serverLink + '/getEnrichmentRegistered/' + this.acaYear + '&' + this.semester + '&' + this.currStudentID, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.getClassRegisteredData = data;
            console.log(_this.getClassRegisteredData);
        });
    };
    //This function is used to get Class Opened Information
    EnrichmentRegistrationComponent.prototype.getClassOpened = function () {
        var _this = this;
        return this.http.get(this.serverLink + '/getEnrichmentOffered/' + this.acaYear + '&' + this.semester + '&' + this.currStudentID +
            '&' + this.majorCode, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.getClassOpenedData = data;
            // console.log(this.getClassOpenedData);
        });
    };
    //This function is used to add new class from class offered (send class info to api)
    EnrichmentRegistrationComponent.prototype.insertCourseRegistration = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('domain', this.currStudentID);
        // formData.append('ipAddress', this.ipAddress);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        formData.append('classCode', this.classOpenCode);
        formData.append('catalog', this.catalogID);
        formData.append('isToefl', this.isToefl);
        this.http.post(this.serverLink + '/insertCourseRegistrationREST', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert(data.token);
            _this.updateData();
            if (data.token == 1) {
                var notification1 = new PNotify({
                    title: 'Successfully !!!',
                    text: 'Add New Class Successfully',
                    type: 'success',
                    delay: 2000
                });
            }
            else {
                if (data.token == 0) {
                    var notification0 = new PNotify({
                        title: 'Error !!!',
                        text: data.error,
                        type: 'error',
                        delay: 4000
                    });
                }
                else {
                    if (data.token == 2) {
                        var notification2 = new PNotify({
                            title: 'Error !!!',
                            text: data.error,
                            type: 'error',
                            delay: 4000
                        });
                    }
                    else {
                        if (data.token == 3) {
                            var notification3 = new PNotify({
                                title: 'Error !!!',
                                text: 'Timetable of ' + data.error + ' are duplicated',
                                type: 'error',
                                delay: 4000
                            });
                        }
                        else {
                            if (data.token == 4) {
                                var notification4 = new PNotify({
                                    title: 'Error !!!',
                                    text: data.error,
                                    type: 'error',
                                    delay: 4000
                                });
                            }
                            else {
                                if (data.token == 5) {
                                    var notification5 = new PNotify({
                                        title: 'Error !!!',
                                        text: data.error,
                                        type: 'error',
                                        delay: 4000
                                    });
                                }
                                else {
                                    if (data.token == 6) {
                                        var notification6 = new PNotify({
                                            title: 'Error !!!',
                                            text: data.error,
                                            type: 'error',
                                            delay: 4000
                                        });
                                    }
                                    else {
                                        if (data.token == 7) {
                                            var notification7 = new PNotify({
                                                title: 'Error !!!',
                                                text: data.error,
                                                type: 'error',
                                                delay: 4000
                                            });
                                        }
                                        else {
                                            if (data.token == 8) {
                                                var notification8 = new PNotify({
                                                    title: 'Error !!!',
                                                    text: data.error,
                                                    type: 'error',
                                                    delay: 4000
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    //This function is used to delete class (send class info to api)
    EnrichmentRegistrationComponent.prototype.deleteCourseRegistration = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('domain', this.currStudentID);
        // formData.append('ipAddress', this.ipAddress);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        formData.append('classCode', this.classRegisteredCode);
        formData.append('catalog', this.catalogID);
        this.http.post(this.serverLink + '/deleteCourseRegistrationREST', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert(data);
            _this.updateData();
            if (data == 1) {
                var notification1 = new PNotify({
                    title: 'Successfully !!!',
                    text: 'Delete Class Successfully',
                    type: 'success',
                    delay: 2000
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    //This function is used to add new class from class Passed (send class info to api)
    EnrichmentRegistrationComponent.prototype.insertCoursePassed = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('domain', this.currStudentID);
        formData.append('ipAddress', this.ipAddress);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        formData.append('classCode', this.classPassedCode);
        this.http.post(this.serverLink + '/insertCourseRegistrationREST', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            alert(data);
            _this.updateData();
        }, function (err) {
            console.log(err);
        });
    };
    //Function is use to get Before AAS Registration
    EnrichmentRegistrationComponent.prototype.getBeforeAASRegistration = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('studentID', this.currStudentID);
        formData.append('acaYear', this.acaYear);
        formData.append('semester', this.semester);
        this.http.post(this.serverLink + '/getBeforeAASRegistration', formData, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.beforeAasRegistration = data.beforeAASRegistraion;
        }, function (err) {
            console.log(err);
        });
    };
    EnrichmentRegistrationComponent.prototype.updateData = function () {
        this.getClassRegistered();
        this.getClassOpened();
    };
    EnrichmentRegistrationComponent.prototype.getClassRegisteredCode = function () {
        var classRegisteredCodeArr = [];
        $(".classRegisteredCB:checked").each(function () {
            classRegisteredCodeArr.push($(this).val());
        });
        console.log(classRegisteredCodeArr);
        this.classRegisteredCode = classRegisteredCodeArr[0];
        for (var x = 1; x < classRegisteredCodeArr.length; x++) {
            this.classRegisteredCode = this.classRegisteredCode + "," + classRegisteredCodeArr[x];
        }
        // alert(this.classRegisteredCode);
    };
    EnrichmentRegistrationComponent.prototype.getClassOpenCode = function () {
        var classOpenCodeArr = [];
        $(".classOpenCB:checked").each(function () {
            classOpenCodeArr.push($(this).val());
        });
        console.log(classOpenCodeArr);
        this.classOpenCode = classOpenCodeArr[0];
        for (var x = 1; x < classOpenCodeArr.length; x++) {
            this.classOpenCode = this.classOpenCode + "," + classOpenCodeArr[x];
        }
        alert(this.classOpenCode);
    };
    EnrichmentRegistrationComponent.prototype.getClassPassedCode = function () {
        var classPassedCodeArr = [];
        $(".classPassedCB:checked").each(function () {
            classPassedCodeArr.push($(this).val());
        });
        console.log(classPassedCodeArr);
        this.classPassedCode = classPassedCodeArr[0];
        for (var x = 1; x < classPassedCodeArr.length; x++) {
            this.classPassedCode = this.classPassedCode + "," + classPassedCodeArr[x];
        }
        // alert(this.classPassedCode);
    };
    EnrichmentRegistrationComponent.prototype.showTimetable = function (classCode) {
        var _this = this;
        this.http.get(this.serverLink + '/getTimetableREST/' + classCode + '&' + this.acaYear + '&' + this.semester, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.TimetableData = data;
            console.log(_this.TimetableData.timetableMatrix);
            $('.timeTableModal').modal();
        });
    };
    return EnrichmentRegistrationComponent;
}());
EnrichmentRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-enrichment-registration',
        template: __webpack_require__("../../../../../src/app/enrichment-registration/enrichment-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/enrichment-registration/enrichment-registration.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */], __WEBPACK_IMPORTED_MODULE_5__timetable_service__["a" /* TimetableService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__timetable_service__["a" /* TimetableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__timetable_service__["a" /* TimetableService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _f || Object])
], EnrichmentRegistrationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=enrichment-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/esl-registration/esl-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tableTitle\r\n{\r\n    color:white;\r\n    padding:7px;\r\n    font-weight:bold;\r\n    font-size:1rem;\r\n    border-radius: 10px;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass\r\n{\r\n    border-collapse: collapse;\r\n    border: 1px solid rgba(23, 26, 207, 0.473);\r\n}\r\n\r\n#classRegistered thead\r\n{\r\n    background: rgb(35,204,239);\r\n}\r\n\r\n#classRegistered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classPass th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered thead\r\n{\r\n    background: rgb(251,64,75);\r\n}\r\n\r\n#classPass thead\r\n{\r\n    background: rgb(121,182,50);\r\n}\r\n\r\n\r\n\r\n#classRegistered,#classOffered,#classPass tbody tr td\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass tr\r\n{\r\n    height:25px;\r\n    vertical-align: center;\r\n}\r\n\r\na\r\n{\r\n    color:#1441e4 !important;\r\n}\r\n.card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}\r\n.timetable{\r\n    cursor: alias;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/esl-registration/esl-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b class=\"text-info\">ESL Registration</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Semester/Year:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.semesterYear}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Student Id:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.studentID}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Student Name:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.studentName}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Catalog:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.catalog}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Specialization:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.specialization}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">ESL Level:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.eslLevel}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-start no-gutters\">\r\n              <div class=\"col d-flex\">\r\n                <a href=\"http://www.saigontech.edu.vn/thoi-khoa-bieu-bang-diem.html\" target=\"_blank\" style=\"font-weight:bold; text-decoration: underline; color:#1441e4\">Overall Timetable</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-7\">\r\n            <div class=\"text-danger \">\r\n              <p class=\"font-weight-bold\">Registration hotlines: 0932 172 334</p>\r\n            </div>\r\n            <div class=\"text-info \">\r\n              <p class=\"font-weight-bold\">\r\n                The registration period expired. Please come to see Ms. Ngoc Phuong for further request! </p>\r\n            </div>\r\n            <div class=\"text-danger \">\r\n              <p class=\"font-weight-bold\">Registration Time: 08:00 AM Jan 13, 2018 - 08:00 PM Jan 15, 2018</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <div class=\"row justify-content-start\">\r\n          <button class=\"btn btn-danger ml-5\" (click)=\"deleteClass()\">Delete</button>\r\n        </div>\r\n        <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <h5 class=\"text-dark font-weight-bold\">CLASS(ES) REGISTERED</h5>\r\n          <div class=\"table-responsive\">\r\n          <table id=\"classRegistered\" class=\"table table-hover table-striped table-bordered mt-2\">\r\n            <thead>\r\n              <tr align=\"center\" style=\"height: 32px;\">\r\n                <th width=\"5%\">No</th>\r\n                <th width=\"5%\">Del.</th>\r\n                <th width=\"20%\">Class Code</th>\r\n                <th width=\"20%\">Course Code</th>\r\n                <th width=\"30%\">Course Name</th>\r\n                <th width=\"10%\">#/Max</th>\r\n                <th width=\"10%\">Timetable</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let classRegistered of eslClassregistered; let i = index\" bgcolor=\"#ffffff\">\r\n                <td>{{i+1}}</td>\r\n                <td>\r\n                  <input class=\"registeredChecked\" type=\"checkbox\" [value] = \"classRegistered.classCode+ '|' +classRegistered.studyCode\" (click)=\"testCheckbox($event);\">\r\n                </td>\r\n                <td>{{classRegistered.classID}}</td>\r\n                <td>{{classRegistered.subjectID}}</td>\r\n                <td>{{classRegistered.subjectName}}</td>\r\n                <td>{{classRegistered.numberStudentregistered}}/{{classRegistered.numberStudentclass}}</td>\r\n                <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"showTimetable(classRegistered.classCode)\">Show</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-start mt-5\">\r\n          <button class=\"btn btn-success ml-5\" (click)=\"addClass()\">Add</button>\r\n        </div>\r\n        <div class=\"row flexrow justify-content-center no-gutters \">\r\n          <h5 class=\"text-dark font-weight-bold\">CLASS(ES) OFFERED</h5>\r\n          <div class=\"table-responsive\">\r\n          <table id=\"classOffered\" class=\"table table-hover table-striped table-bordered mt-2\">\r\n            <thead>\r\n              <tr align=\"center\" style=\"height: 32px;\">\r\n                <th width=\"5%\">No</th>\r\n                <th width=\"5%\">Del.</th>\r\n                <th width=\"20%\">Class Code</th>\r\n                <th width=\"20%\">Course Code</th>\r\n                <th width=\"30%\">Course Name</th>\r\n                <th width=\"10%\">#/Max</th>\r\n                <th width=\"10%\">Timetable</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let classOpened of eslClassavailable; let i = index\" bgcolor=\"#ffffff\">\r\n                <td>{{i+1}}</td>\r\n                <td>\r\n                  <input class=\"openedChecked\" type=\"checkbox\" [value]=\"classOpened.classCode\" (click)=\"testCheckbox($event);\">\r\n                </td>\r\n                <td>{{classOpened.classID}}</td>\r\n                <td>{{classOpened.subjectID}}</td>\r\n                <td>{{classOpened.subjectName}}</td>\r\n                <td>{{classOpened.numberStudentregistered}}/{{classOpened.numberStudentclass}}</td>\r\n                <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"showTimetable(classOpened.classCode)\">Show</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n        </div>\r\n\r\n        \r\n        \r\n        \r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!---->\r\n\r\n  \r\n\r\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      \r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h2 class=\"modal-title\" id=\"exampleModalLabel\">TIMETABLE</h2>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <p>Class:</p> \r\n                </div>\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">{{currTimetable.classCode}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <p>Semester / Year:</p> \r\n                </div>\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">{{currTimetable.semesterYear}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <p>Course Name:</p> \r\n                </div>\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">{{currTimetable.className}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <p>Instructor Name:</p> \r\n                </div>\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">{{currTimetable.instructorName}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"table-responsive\"  *ngIf=\"currTimetable != null\">\r\n                    <table class=\"table-bordered\">\r\n                      <tr  *ngFor=\"let r of currTimetable.timetableMatrix\">\r\n                        <td *ngFor=\"let c of r\">{{c}}</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/esl-registration/esl-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EslRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_infofor_registration_service__ = __webpack_require__("../../../../../src/app/student-infofor-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eslclass_service_service__ = __webpack_require__("../../../../../src/app/eslclass-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timetable_service__ = __webpack_require__("../../../../../src/app/timetable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EslRegistrationComponent = (function () {
    function EslRegistrationComponent(studentInfoservice, cookie, semesterService, ESLClassService, TimetableService, router) {
        this.studentInfoservice = studentInfoservice;
        this.cookie = cookie;
        this.semesterService = semesterService;
        this.ESLClassService = ESLClassService;
        this.TimetableService = TimetableService;
        this.router = router;
    }
    EslRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currStudentID = this.cookie.get('loginID');
        this.semesterService.getSemesterInformation()
            .then(function (data) {
            _this.currSemester = data;
            _this.studentInfoservice.getStudentinfoforRegistration1(_this.currSemester.acaYear, _this.currSemester.semester, _this.cookie.get('loginID'))
                .then(function (data) {
                _this.currStudent = data;
                console.log(_this.currStudent);
                $("#stuFullName").text(_this.currStudent.studentName);
            });
            _this.studentInfoservice.getStudentAvaImage(_this.cookie.get('loginID'))
                .then(function (data) {
                $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
            });
            _this.ESLClassService.getESLClassRegistered(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                .then(function (data1) {
                console.log(data1);
                _this.eslClassregistered = data1;
            });
            _this.ESLClassService.getESLClassAvailable(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                .then(function (data2) {
                console.log(data2);
                _this.eslClassavailable = data2;
            });
        });
    };
    EslRegistrationComponent.prototype.addClass = function () {
        var _this = this;
        var checkedOpenclassCodearr = [];
        $(".openedChecked:checked").each(function () {
            checkedOpenclassCodearr.push($(this).val());
        });
        console.log(checkedOpenclassCodearr);
        var openedClassstring = "";
        for (var _i = 0, checkedOpenclassCodearr_1 = checkedOpenclassCodearr; _i < checkedOpenclassCodearr_1.length; _i++) {
            var cl1 = checkedOpenclassCodearr_1[_i];
            openedClassstring += cl1 + ",";
        }
        console.log(openedClassstring);
        this.ESLClassService.addESLClass(this.currStudentID, this.currSemester.acaYear, this.currSemester.semester, openedClassstring);
        setTimeout(function () {
            _this.semesterService.getSemesterInformation()
                .then(function (data) {
                _this.currSemester = data;
                _this.ESLClassService.getESLClassRegistered(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data1) {
                    _this.eslClassregistered = data1;
                });
                _this.ESLClassService.getESLClassAvailable(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data2) {
                    _this.eslClassavailable = data2;
                });
            });
        }, 1000);
    };
    EslRegistrationComponent.prototype.testCheckbox = function (event) {
        console.log(event.target.value);
    };
    EslRegistrationComponent.prototype.deleteClass = function () {
        var _this = this;
        var ClassCodeandStudyCode = [];
        $(".registeredChecked:checked").each(function () {
            ClassCodeandStudyCode.push($(this).val());
        });
        var classCode = [];
        var studyCode = [];
        for (var _i = 0, ClassCodeandStudyCode_1 = ClassCodeandStudyCode; _i < ClassCodeandStudyCode_1.length; _i++) {
            var cl = ClassCodeandStudyCode_1[_i];
            var temp = cl;
            classCode.push(temp.split('|')[0]);
            studyCode.push(temp.split('|')[1]);
        }
        var classCodestring = "";
        var studyCodestring = "";
        for (var i = 0; i < classCode.length; i++) {
            classCodestring += classCode[i] + ",";
            studyCodestring += studyCode[i] + ",";
        }
        this.ESLClassService.deleteESLClass(this.currStudentID, this.currSemester.acaYear, this.currSemester.semester, classCodestring);
        setTimeout(function () {
            _this.semesterService.getSemesterInformation()
                .then(function (data) {
                _this.currSemester = data;
                _this.ESLClassService.getESLClassRegistered(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data1) {
                    _this.eslClassregistered = data1;
                });
                _this.ESLClassService.getESLClassAvailable(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data2) {
                    _this.eslClassavailable = data2;
                });
            });
        }, 1000);
    };
    EslRegistrationComponent.prototype.showTimetable = function (classCode) {
        var _this = this;
        this.TimetableService.getTimetableRegis(classCode, this.currSemester.acaYear, this.currSemester.semester)
            .then(function (data) {
            _this.currTimetable = data;
            console.log(_this.currTimetable.timetableMatrix);
        });
        setTimeout(function () {
            $('.bd-example-modal-lg').modal();
        }, 200);
    };
    return EslRegistrationComponent;
}());
EslRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-esl-registration',
        template: __webpack_require__("../../../../../src/app/esl-registration/esl-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/esl-registration/esl-registration.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_6__timetable_service__["a" /* TimetableService */], __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */], __WEBPACK_IMPORTED_MODULE_4__eslclass_service_service__["a" /* EslclassServiceService */], __WEBPACK_IMPORTED_MODULE_1__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__semester_info_service__["a" /* SemesterInformationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__eslclass_service_service__["a" /* EslclassServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__eslclass_service_service__["a" /* EslclassServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__timetable_service__["a" /* TimetableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__timetable_service__["a" /* TimetableService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _f || Object])
], EslRegistrationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=esl-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/esl-transcript/esl-transcript.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainTable\r\n{\r\n    border-collapse: collapse;\r\n    font-size: 1rem;\r\n}\r\n\r\n#mainTable, #mainTable th, #mainTable td {\r\n    border: 1px solid rgb(119, 119, 119);\r\n }\r\n\r\n #mainTable thead\r\n{\r\n    background:rgb(187, 223, 253);\r\n}\r\n#mainTable th\r\n{\r\n    text-align: center;  \r\n    height:2.5rem; \r\n}\r\n\r\n#mainTable tr\r\n{\r\n    height:2rem\r\n}\r\n\r\n#mainTable td\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}\r\n\r\n#sgtImage\r\n{\r\n    width:55%;\r\n    margin-left:22%;\r\n}\r\n\r\n#firstHeading\r\n{\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:0.8rem;\r\n}\r\n\r\n#secondHeading\r\n{\r\n    font-weight: bold;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:2rem;\r\n}\r\n\r\n#thirdHeading\r\n{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size:1.3rem;\r\n    font-style: italic;\r\n    margin-bottom: 6px;\r\n    margin-top:-2px;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .row\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #thirdHeading\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #secondHeading\r\n    {\r\n        font-size:1.8rem;\r\n    }\r\n\r\n    #firstHeading\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    #sgtImage\r\n    {\r\n        width:40%;\r\n        margin-left:30%;\r\n    }\r\n\r\n    #mainTable\r\n    {\r\n        font-size:0.8rem;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/esl-transcript/esl-transcript.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>ESL Transcript</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-4\">\r\n        <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <img id=\"loadingImg\" src=\"assets/img/loading.gif\" *ngIf=\"!showContentBefore || !showContentAfter \" />\r\n        </div>\r\n        <ng-container *ngIf=\"showContentBefore && showContentAfter\">\r\n          <div class=\"row justify-content-center\" id=\"firstHeading\">\r\n            SAIGON INSTITUTE TECHNOLOGY\r\n          </div>\r\n          <div class=\"row justify-content-center\" id=\"secondHeading\">\r\n            ACADEMIC RECORD\r\n          </div>\r\n          <div class=\"row justify-content-center\" id=\"thirdHeading\">\r\n            BẢNG ĐIỂM\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <img id=\"sgtImage\" src=\"assets/img/sgtlogo.png\">\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Student Name\r\n                  <i>(Họ tên sinh viên)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.lastName}} {{currStudent.firstName}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Student ID\r\n                  <i>(Mã số sinh viên)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.studentID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">PID</div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.hccsID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">EMPID</div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.hccsPID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Date of Birth\r\n                  <i>(Ngày sinh dd/mm/yyyy)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{currStudent.dob}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Institution\r\n                  <i>(Trường)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: SAIGON INSTITUTE OF TECHNOLOGY</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">Degree\r\n                  <i>(Bằng cấp)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: ASSOCIATE IN APPLIED SCIENCE</b>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Catalog of Choice\r\n                  <i>(Catalog)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{additionInfo[0].catalog}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-5 justify-content-start\">\r\n                  Specialization\r\n                  <i>(Chuyên ngành)</i>\r\n                </div>\r\n                <div class=\"col-7 col-sm-7 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>: {{additionInfo[0].program}}</b>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-2 justify-content-center\" style=\"font-size:1.2rem\">\r\n            DATE ISSSUE: {{dateAndTimeInfo.dateAndTime}}\r\n          </div>\r\n          <div class=\"row mt-2\">\r\n            <table width=\"100%\" border=\"1\" cellspacing=\"1\" class=\"table-responsive\" id=\"mainTable\">\r\n              <thead>\r\n                <th width=\"15%\">\r\n                  Semester\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(Học kỳ)</i>\r\n                </th>\r\n                <th width=\"15%\">\r\n                  Course\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(Mã số môn học)</i>\r\n                </th>\r\n                <th width=\"30%\">\r\n                  Description\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(Tên môn học)</i>\r\n                </th>\r\n                <th width=\"5%\">\r\n                  Grade\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(Điểm)</i>\r\n                </th>\r\n                <th width=\"5%\">\r\n                  Letter Grade\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(Điểm chữ)</i>\r\n                </th>\r\n                <th width=\"5%\">\r\n                  Credit Attempts\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(Tín chỉ dự định)</i>\r\n                </th>\r\n                <th width=\"5%\">\r\n                  Credit Earned\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(Tín chỉ đạt được)</i>\r\n                </th>\r\n                <th width=\"5%\">\r\n                  Term GPA\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(TB kỳ)</i>\r\n                </th>\r\n                <th width=\"20%\">\r\n                  Cummulative GPA\r\n                  <br/>\r\n                  <i style=\"font-weight: normal\">(TB tích lũy)</i>\r\n                </th>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <ng-container *ngFor=\"let item of finalResultBefore\">\r\n                  <tr *ngFor=\"let esl of item.esl ; let i = index\">\r\n                    <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length+item.toefl.length+1'>\r\n                      {{item.semester_name}}/{{item.aca_year}}\r\n                      <!-- <br/>{{item.semestervn}} -->\r\n                    </td>\r\n                    <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length'>ESL</td>\r\n                    <td>{{esl.subjectName}}</td>\r\n                    <td>{{esl.mark}}</td>\r\n                    <td>{{esl.letter_Mark}}</td>\r\n                    <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length'>{{item.credits}}</td>\r\n                    <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length'>{{item.credits_earn}}</td>\r\n                    <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">{{item.term_gpa_esl}}</td>\r\n                    <td *ngIf=\"i == 0\" [attr.rowspan]='item.esl.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">{{item.cum_gpa_esl}}</td>\r\n                  </tr>\r\n\r\n                  <tr *ngIf=\"item.toefl.length > 0\">\r\n                    <td>TOEFL</td>\r\n                    <td colspan=\"5\">{{item.toefl[0].averageMark}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td colspan=\"6\"></td>\r\n                  </tr>\r\n\r\n                </ng-container>\r\n                <ng-container *ngFor=\"let item of finalResultAfter\">\r\n                  <ng-container *ngIf=\"item.course.length == 0; else elseClause\">\r\n                    <ng-container *ngFor=\"let ToeflandSat of item.toefl; let i = index\">\r\n                      <tr>\r\n                        <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1'>\r\n                          {{item.semester_name}}/{{item.aca_year}}\r\n                          <!-- <br/>{{item.semesterVn}} -->\r\n                        </td>\r\n                        <td>{{item.toefl[0].subjectId}}</td>\r\n                        <td colspan=\"5\">{{item.toefl[0].averageMark}}</td>\r\n\r\n                        <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                          {{item.term_gpa_esl}}\r\n                        </td>\r\n                        <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                          {{item.cum_gpa_esl}}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-template #elseClause>\r\n                    <tr *ngFor=\"let course of item.course; let i = index\">\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1'>\r\n                        {{item.semester_name}}/{{item.aca_year}}\r\n                        <!-- <br/>{{item.semesterVn}} -->\r\n                      </td>\r\n                      <td>{{course.subjectId}}</td>\r\n                      <td>{{course.subjectName}}</td>\r\n                      <td>{{course.average_mark}}</td>\r\n                      <td>{{course.letter_mark}}</td>\r\n                      <td>{{course.credits}}</td>\r\n                      <td>{{course.credit_earn}}</td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                        {{item.term_gpa_esl}}\r\n                      </td>\r\n                      <td *ngIf=\"i == 0\" [attr.rowspan]='item.course.length+item.toefl.length+1' style=\"vertical-align: bottom;font-weight:bold;\">\r\n                        {{item.cum_gpa_esl}}\r\n                      </td>\r\n                    </tr>\r\n                    <ng-container *ngIf=\"item.toefl.length > 0\">\r\n                    <tr *ngFor = \"let ToeflandSat of item.toefl\">\r\n                      <td>{{ToeflandSat.subjectId}}</td>\r\n                      <td colspan=\"5\">{{ToeflandSat.averageMark}}</td>\r\n                    </tr>\r\n                  </ng-container>\r\n                    <tr>\r\n                      <td colspan=\"6\"></td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </ng-container>\r\n                \r\n              </tbody>\r\n              <tr>\r\n                <td colspan=\"9\" style=\"text-align:left\">\r\n                  Total Number of Credits Earned: {{totalCreditEarned}}\r\n                  <br/> Total Number of Courses Completed: {{totalCourse}}\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n          <div class=\"row mt-4\">\r\n              <div class=\"col-6\" style=\"text-align:center;\">\r\n                CHANCELLOR\r\n                <br/> HIỆU TRƯỞNG\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <b>Nguyễn Thị Anh Thư</b>\r\n              </div>\r\n  \r\n              <div class=\"col-6\" style=\"text-align:center;\">\r\n                REGISTRAR\r\n                <br/> GIÁO VỤ\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <b>Huỳnh Kim Thủy Tiên</b>\r\n              </div>\r\n            </div>\r\n            \r\n          <div class=\"row mt-2\">\r\n            <table width=\"100%\" border=\"0\" cellpadding=\"0\" bordercolorlight=\"#000000\" bordercolordark=\"#000000\" id=\"table1\" style=\"border-collapse: collapse; font-family: Tahoma, Geneva, sans-serif; font-size: 8pt;\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"4\">&nbsp;</td>\r\n                  <td colspan=\"5\" height=\"25\">\r\n                    <p align=\"left\">LEGEND\r\n                      <em> (HƯỚNG DẪN)</em>\r\n                      <br> Grade and Grade Points\r\n                      <em>(Điểm và Điểm số)</em>\r\n                    </p>\r\n                  </td>\r\n                  <td width=\"11\" height=\"25\">&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td width=\"75\" align=\"center\">&nbsp;</td>\r\n                  <td width=\"121\" align=\"center\">\r\n                    <font face=\"Tahoma\" style=\"font-size:8pt\">\r\n                      <u>Symbol</u>\r\n                      <em>(Ký hiệu)</em>\r\n                    </font>\r\n                  </td>\r\n                  <td width=\"313\" align=\"center\">\r\n                    <div align=\"left\">\r\n                      <font face=\"Tahoma\" style=\"font-size:8pt\">\r\n                        <u>Meaning</u>\r\n                        <em>(Xếp loại)</em>\r\n                      </font>\r\n                    </div>\r\n                  </td>\r\n                  <td width=\"157\" align=\"center\">\r\n                    <font face=\"Tahoma\" style=\"font-size:8pt\">\r\n                      <u>Grade Points</u>\r\n                      <em>(Điểm số)</em>\r\n                    </font>\r\n                  </td>\r\n                  <td width=\"265\">&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">A</font>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <div align=\"left\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">Excellent\r\n                        <em>(Xuất sắc)</em>\r\n                      </font>\r\n                    </div>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">4</font>\r\n                  </td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">B</font>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <div align=\"left\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">Good\r\n                        <em>(Giỏi)</em>\r\n                      </font>\r\n                    </div>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">3</font>\r\n                  </td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">C</font>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <div align=\"left\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">Fair\r\n                        <em>(Khá)</em>\r\n                      </font>\r\n                    </div>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">2</font>\r\n                  </td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">D</font>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <div align=\"left\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">Passing\r\n                        <em>(Đạt)</em>\r\n                      </font>\r\n                    </div>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">1</font>\r\n                  </td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">F</font>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <div align=\"left\">\r\n                      <font style=\"font-size:8pt\" face=\"Tahoma\">Failing\r\n                        <em>(Không đạt)</em>\r\n                      </font>\r\n                    </div>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <font style=\"font-size:8pt\" face=\"Tahoma\">0</font>\r\n                  </td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">\r\n                    <font face=\"Tahoma\" style=\"font-size:8pt\">F(A/P/C)</font>\r\n                  </td>\r\n                  <td align=\"center\">\r\n                    <div align=\"left\">Failing\r\n                      <em>(Vắng thi/Cấm thi/Gian lận)</em>\r\n                    </div>\r\n                  </td>\r\n                  <td align=\"center\">0</td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td colspan=\"3\" align=\"LEFT\">The following grades are not calculated in GPA\r\n                    <em>(Điểm không được dùng để tính GPA)</em>: </td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">I</td>\r\n                  <td align=\"LEFT\">Incomplete\r\n                    <em>(Chưa hoàn thành)</em>\r\n                  </td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>&nbsp;</td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td align=\"center\">T</td>\r\n                  <td align=\"LEFT\">Transferred\r\n                    <em>(Chuyển điểm)</em>\r\n                  </td>\r\n                  <td align=\"center\">&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                  <td>&nbsp;</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/esl-transcript/esl-transcript.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EslTranscriptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EslTranscriptComponent = (function () {
    function EslTranscriptComponent(cookie, loginService, http, semesterService, connectionLink, router) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.semesterService = semesterService;
        this.connectionLink = connectionLink;
        this.router = router;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.showContentBefore = false; //True, the data before Spring 2003 will be shown, false, the loading gif will be shown
        this.showContentAfter = false; //True, the data after Spring 2003 will be shown, false, the loading gif will be shown
        this.totalCreditEarned = 0; //Total number of credits earned
        this.totalCourse = 0; //Total number of courses
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    EslTranscriptComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/ESLTranscript" class="text-infor"> ESL Transcript</a>');
        //Get general data 
        this.http.get(this.serverLink + '/getHCCTranscriptGeneralInfo/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.additionInfo = data;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.semesterInfo = data;
                _this.http.get(_this.serverLink + '/getSystemDateAndTime/0', _this.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.dateAndTimeInfo = data;
                    //Set student's full name and a small photo in a sidebar 
                    $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                    $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                    _this.getESLTranscriptDataBefore(_this.currStudent.id);
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            });
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //This function is used to get transcript ESL before Spring 2003
    EslTranscriptComponent.prototype.getESLTranscriptDataBefore = function (stuId) {
        var _this = this;
        //Get semesters data
        this.http.get(this.serverLink + '/getELSTranscriptSemesterBefore/' + stuId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.semesterDataBefore = data;
            //If current student doesn't have data before Spring 2003
            if (_this.semesterDataBefore.length == 0) {
                _this.showContentBefore = true;
                _this.getESLTranscriptDataAfter(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
            }
            else {
                //For each semesters, get corresponding courses
                _this.courseDataBefore = new Array();
                for (var i = 0; i < _this.semesterDataBefore.length; i++) {
                    _this.courseDataBefore.push(_this.http.get(_this.serverLink + "/getELSTranscriptCourseBefore/" +
                        stuId + "&" + _this.semesterDataBefore[i].aca_year + "&" + _this.semesterDataBefore[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.courseDataBefore).subscribe(function (data) {
                    _this.courseDataBefore = data;
                    //For each semesters, get corresponding TOEFL score
                    var tempToeflArray = new Array();
                    for (var i = 0; i < _this.semesterDataBefore.length; i++) {
                        tempToeflArray.push(_this.http.get(_this.serverLink + "/getELSTranscriptTOEFL/" +
                            stuId + "&" + _this.semesterDataBefore[i].aca_year + "&" + _this.semesterDataBefore[i].semester, _this.options).map(function (res) { return res.json(); }));
                    }
                    Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__["a" /* forkJoin */])(tempToeflArray).subscribe(function (data) {
                        _this.toeflDataBefore = data;
                        //Combine everything into finalResultBefore
                        _this.finalResultBefore = new Array();
                        for (var i = 0; i < _this.semesterDataBefore.length; i++) {
                            _this.finalResultBefore.push({
                                aca_year: _this.semesterDataBefore[i].aca_year,
                                semester_name: _this.semesterDataBefore[i].semester_name,
                                semestervn: _this.semesterDataBefore[i].semestervn,
                                esl: _this.courseDataBefore[i],
                                credits: _this.semesterDataBefore[i].credits,
                                credits_earn: _this.semesterDataBefore[i].credits_earn,
                                term_gpa_esl: _this.semesterDataBefore[i].term_gpa_esl,
                                cum_gpa_esl: _this.semesterDataBefore[i].cum_gpa_esl,
                                toefl: _this.toeflDataBefore[i]
                            });
                            _this.totalCourse += _this.courseDataBefore[i].length;
                            _this.totalCreditEarned = Number(_this.totalCreditEarned) + Number(_this.semesterDataBefore[i].credits_earn);
                        }
                        _this.showContentBefore = true;
                        _this.getESLTranscriptDataAfter(_this.currStudent.id, _this.semesterInfo.acaYear, _this.semesterInfo.semester);
                    }, function (err) {
                        _this.cookie.delete('loginID');
                        _this.cookie.delete('token');
                        _this.router.navigate(['/Login']);
                    });
                });
            }
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //Function is used to get Transcript ESL after Spring 2003
    EslTranscriptComponent.prototype.getESLTranscriptDataAfter = function (stuId, acaYear, semester) {
        var _this = this;
        //Get semester data
        this.http.get(this.serverLink + '/getESLTranscriptSemesterAfter/' + stuId + "&" + acaYear + "&" + semester, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.semesterDataAfter = data;
            //If there is no content in semesterDataAfter
            if (_this.semesterDataAfter.length == 0) {
                _this.showContentAfter = true;
            }
            else {
                //For each semester, get the corresponding courses
                _this.courseDataAfter = new Array();
                for (var i = 0; i < _this.semesterDataAfter.length; i++) {
                    _this.courseDataAfter.push(_this.http.get(_this.serverLink + '/getESLTranscriptCourseAfter/' + _this.semesterDataAfter[i].stuId + "&" + _this.semesterDataAfter[i].acaYear + "&" + _this.semesterDataAfter[i].semester, _this.options).map(function (res) { return res.json(); }));
                }
                Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.courseDataAfter).subscribe(function (data) {
                    _this.courseDataAfter = data;
                    //For each semesters, get corresponding TOEFL score
                    var tempToeflArray = new Array();
                    for (var i = 0; i < _this.semesterDataAfter.length; i++) {
                        tempToeflArray.push(_this.http.get(_this.serverLink + "/getELSTranscriptTOEFL/" +
                            stuId + "&" + _this.semesterDataAfter[i].acaYear + "&" + _this.semesterDataAfter[i].semester, _this.options).map(function (res) { return res.json(); }));
                    }
                    Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_forkJoin__["a" /* forkJoin */])(tempToeflArray).subscribe(function (data) {
                        _this.toeflDataAfter = data;
                        //Combine everything into finalResultAfter
                        _this.finalResultAfter = new Array();
                        for (var i = 0; i < _this.semesterDataAfter.length; i++) {
                            _this.finalResultAfter.push({
                                aca_year: _this.semesterDataAfter[i].acaYear,
                                semester_name: _this.semesterDataAfter[i].semester_name,
                                semesterVn: _this.semesterDataAfter[i].semesterVn,
                                course: _this.courseDataAfter[i],
                                term_gpa_esl: _this.semesterDataAfter[i].term_gpa_esl,
                                cum_gpa_esl: _this.semesterDataAfter[i].cum_gpa_esl,
                                toefl: _this.toeflDataAfter[i]
                            });
                            _this.totalCourse += _this.courseDataAfter[i].length;
                            for (var j = 0; j < _this.courseDataAfter[i].length; j++) {
                                _this.totalCreditEarned = Number(_this.totalCreditEarned) + Number(_this.courseDataAfter[i][j].credit_earn);
                            }
                        }
                        _this.showContentAfter = true;
                    }, function (err) {
                        _this.cookie.delete('loginID');
                        _this.cookie.delete('token');
                        _this.router.navigate(['/Login']);
                    });
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    return EslTranscriptComponent;
}());
EslTranscriptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-esl-transcript',
        template: __webpack_require__("../../../../../src/app/esl-transcript/esl-transcript.component.html"),
        styles: [__webpack_require__("../../../../../src/app/esl-transcript/esl-transcript.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _f || Object])
], EslTranscriptComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=esl-transcript.component.js.map

/***/ }),

/***/ "../../../../../src/app/eslclass-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EslclassServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EslclassServiceService = (function () {
    function EslclassServiceService(http, connectionLink, cookie) {
        this.http = http;
        this.connectionLink = connectionLink;
        this.cookie = cookie;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    EslclassServiceService.prototype.getESLClassAvailable = function (studentCode, year, semester) {
        return this.http.get(this.connectionLink.getConnection() + '/getESLclassAvailableREST/' + studentCode + '&' + year + '&' + semester, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    EslclassServiceService.prototype.getESLClassRegistered = function (studentCode, year, semester) {
        console.log(studentCode);
        return this.http.get(this.connectionLink.getConnection() + '/getESLclassRegisteredREST/' + studentCode + '&' + year + '&' + semester, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    EslclassServiceService.prototype.addESLClass = function (studentID, acaYear, Semester, checkedCodes) {
        var classObject = {
            studentCode: studentID,
            acaYear: acaYear,
            Semester: Semester,
            ipAddress: "123",
            classCodes: checkedCodes
        };
        $.ajax({
            type: "POST",
            url: this.connectionLink.getConnection() + "/insertEslcourseREST",
            data: classObject,
            dataType: "text",
            headers: {
                'Authorization': 'Bearer ' + this.cookie.get('token')
            },
            success: function (response) {
                var notification0 = new PNotify({
                    title: 'Notification: ',
                    text: response
                });
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
    EslclassServiceService.prototype.deleteESLClass = function (studentID, acaYear, Semester, classCodes) {
        var classObject = {
            studentCode: studentID,
            acaYear: acaYear,
            Semester: Semester,
            ipAddress: "123",
            classCodes: classCodes,
        };
        $.ajax({
            type: "POST",
            url: this.connectionLink.getConnection() + "/deleteEslcourseREST",
            data: classObject,
            dataType: "text",
            headers: {
                'Authorization': 'Bearer ' + this.cookie.get('token')
            },
            cache: false,
            success: function (response) {
                var notification0 = new PNotify({
                    title: 'Notification: ',
                    text: response
                });
            },
            error: function (data) {
                alert(data);
            }
        });
    };
    return EslclassServiceService;
}());
EslclassServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], EslclassServiceService);

var _a, _b, _c;
//# sourceMappingURL=eslclass-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/grade-and-semester/grade-and-semester.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#gradeAnSemester-loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}\r\n\r\ntable\r\n{\r\n    border-collapse: collapse;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid rgb(119, 119, 119);\r\n }\r\n\r\n#header\r\n{\r\n    background:rgb(187, 223, 253);\r\n}\r\nth\r\n{\r\n    text-align: center;  \r\n    height:2.5rem; \r\n}\r\n\r\ntr\r\n{\r\n    height:2.2rem\r\n}\r\n\r\ntd\r\n{\r\n    text-align: center;\r\n}\r\n\r\n/* Format for assignment row */\r\n#assignmentCol\r\n{\r\n    text-align: center !important;\r\n    border:none;\r\n}\r\n\r\n#assignmentRow table\r\n{\r\n    border:none;\r\n}\r\n\r\n#assignmentRow td\r\n{\r\n    text-align: left;\r\n    padding-left:4px;\r\n}\r\n\r\n.mainPartTitle\r\n{\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n}\r\n     \r\n\r\n/* End format for assignment row */\r\n\r\n/* Resoinsive format */\r\n@media (max-width: 576px) {\r\n    #semester, #academicYear\r\n    {\r\n        width:40%;\r\n    }\r\n\r\n    table{\r\n        font-size: 80%;\r\n    }\r\n\r\n    body\r\n    {\r\n        font-size:90%;\r\n    }\r\n\r\n    .mainPartTitle\r\n    {\r\n        font-size:98%;\r\n    }\r\n\r\n}\r\n/* End resoinsive format */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grade-and-semester/grade-and-semester.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>Grade & Semester</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-4\">\r\n        <div *ngIf=\"upperPart\">\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Student Name:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b>{{currStudent.lastName}} {{currStudent.firstName}}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Student Id:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b>{{currStudent.studentID}}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Semester/Year:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <select size=\"1\" name=\"semester\" id=\"semester\" (change)=\"updateGradeData()\" [(ngModel)]=\"semesterInfo.semester\">\r\n                <option id=\"spring\" value=\"4\">SPRING</option>\r\n                <option id=\"summer\" value=\"1\">SUMMER</option>\r\n                <option id=\"fall\" value=\"3\">FALL</option>\r\n              </select>\r\n              /\r\n              <select size=\"1\" id=\"academicYear\" name=\"academicyear\" class=\"ml-2\" (change)=\"updateGradeData()\" [(ngModel)]=\"semesterInfo.acaYear\">\r\n                <option *ngFor=\"let item of academicYearInfo[0]\">{{item.acaYear}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-container *ngIf=\"lowerPart && lowerPart2\">\r\n          <p class=\"mainPartTitle\">I. Grade</p>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div id=\"gradeAnSemester-mainTable\" class=\"col d-flex justify-content-center\">\r\n              <table width=\"100%\" border=\"1\" cellspacing=\"1\" class=\"table-hover\">\r\n                <tr id=\"header\">\r\n                  <th width=\"5%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">No.</span>\r\n                  </th>\r\n                  <th width=\"15%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">Course ID</span>\r\n                  </th>\r\n                  <th width=\"30%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">Course Name</span>\r\n                  </th>\r\n                  <th width=\"50%\" colspan=\"6\">\r\n                    <span class=\"text_white_bold\">Grade</span>\r\n                  </th>\r\n                </tr>\r\n                <tr id=\"header\">\r\n                  <th colspan=\"2\">Midterm (%)</th>\r\n                  <th colspan=\"2\">Final (%)</th>\r\n                  <th>Average</th>\r\n                  <th>Policy #2</th>\r\n                </tr>\r\n\r\n                <tbody>\r\n                  <!-- <ng-container *ngFor=\"let mainItem of gradeData, let i = index\"> -->\r\n                  <ng-container *ngFor=\"let item of gradeData; let i = index\">\r\n                    <tr *ngIf=\"!item.isGEGradeTitle; else else_clause\">\r\n                      <td width=\"5%\">{{item.no}}</td>\r\n                      <td width=\"15%\" style=\"text-align:left;padding-left:5.5px;\">{{item.id}}</td>\r\n                      <td width=\"30%\" style=\"text-align:left;padding-left:5.5px;\">{{item.name}}</td>\r\n                      <td width=\"8%\">{{item.midMark}}</td>\r\n                      <td width=\"8%\">{{item.midPercent}}</td>\r\n                      <td width=\"8%\">{{item.finalMark}}</td>\r\n                      <td width=\"8%\">{{item.finalPercent}}</td>\r\n                      <td width=\"8%\">{{item.averageMark}}</td>\r\n                      <td width=\"8%\">{{item.policy2}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"item.assignment != ''\" id=\"assignmentRow\">\r\n                      <td colspan=\"9\">\r\n                        <table>\r\n                          <tr colspan=\"9\">\r\n                            <ng-container *ngFor=\"let assignment of item.assignment\">\r\n                              <td id=\"assignmentCol\">Assignment {{assignment.col}} ({{assignment.percent}}%)\r\n                                <br/> {{assignment.grade}}</td>\r\n                            </ng-container>\r\n                          </tr>\r\n                        </table>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"item.isGEGradeTitle\">\r\n                      <td>\r\n                        <b>{{item.no+1}}</b>\r\n                      </td>\r\n                      <td style=\"text-align:left;padding-left:5.5px;\">\r\n                        <b>{{item.id}}</b>\r\n                      </td>\r\n                      <td style=\"text-align:left;padding-left:5.5px;\">\r\n                        <b>{{item.name}}</b>\r\n                      </td>\r\n                      <td colspan=\"4\"></td>\r\n                      <td>\r\n                        <b>{{item.averageMark}}</b>\r\n                      </td>\r\n                      <td></td>\r\n                    </tr>\r\n                    <tr *ngIf=\"item.isGEGradeTitle\">\r\n                      <td colspan=\"9\" style=\"text-align:left;padding-left:5.5px;\">\r\n                        <b>Grade in detail</b>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <p class=\"mainPartTitle mt-3\">II. Comment</p>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-center\">\r\n              <table width=\"100%\" border=\"1\" cellspacing=\"1\" class=\"table-hover\">\r\n                <tr id=\"header\">\r\n                  <th width=\"5%\">No.</th>\r\n                  <th width=\"10%\">Class Code</th>\r\n                  <th width=\"15%\">Class Name</th>\r\n                  <th width=\"15%\">Instructor</th>\r\n                  <th width=\"26%\">Midterm Comment</th>\r\n                  <th width=\"26%\">Final Comment</th>\r\n                </tr>\r\n                <tr *ngFor=\"let comments of teacherComments; let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{comments.id}}</td>\r\n                    <td>{{comments.name}}</td>\r\n                    <td>{{comments.teacherName}}</td>\r\n                    <td>{{comments.midterComment}}</td>\r\n                    <td>{{comments.finalComment}}</td>\r\n                  </tr>\r\n              </table>\r\n              \r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <div class=\"row flexrow justify-content-center no-gutters\" *ngIf=\"!lowerPart || !lowerPart2\">\r\n          <img id=\"gradeAnSemester-loadingImg\" src=\"assets/img/loading.gif\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/grade-and-semester/grade-and-semester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeAndSemesterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GradeAndSemesterComponent = (function () {
    function GradeAndSemesterComponent(cookie, loginService, http, http2, http3, http4, semesterService, connectionLink, router) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.http2 = http2;
        this.http3 = http3;
        this.http4 = http4;
        this.semesterService = semesterService;
        this.connectionLink = connectionLink;
        this.router = router;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.upperPart = false; //When it is true, the page will show the upper part of the page (selection boxes)
        this.lowerPart = false; //When both lowerPart and lowerPart2 are true,loading gif disappears and table shows 
        this.lowerPart2 = false; //When both lowerPart and lowerPart2 are true,loading gif disappears and table shows 
        this.gradeData = new Array(); //Grade AAS data
        this.tempPolicy2AAS = new Array(); //Temp variable to store policy 2 for AAS data
        this.tempAssigmentAAS = new Array(); //Assgiment grade AAS data for each class
        this.tempPolicy2GE = new Array(); //Temp variable to store policy 2 for GE data
        this.tempAssigmentGE = new Array(); //Assgiment grade GE data for each class
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        console.log(this.options);
    }
    GradeAndSemesterComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.options);
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/GradeAndSemester" class="text-infor"> Grade & Semester</a>');
        //Load current student's information (name, image, student Id,...)
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data2) {
                _this.semesterInfo = data2;
                //Get academic year array
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.http.get(_this.serverLink + '/getAcademicYear/', _this.options).map(function (res) { return res.json(); }))
                    .subscribe(function (data) {
                    _this.academicYearInfo = data;
                    //Set student's full name and a small photo in a sidebar 
                    $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                    $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                    //Get grade data
                    _this.loadGradeData(_this.semesterInfo.semester, _this.semesterInfo.acaYear, _this.currStudent.id);
                    _this.upperPart = true;
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            });
        });
    };
    //Function to get attendance information from semester, academic year and student id
    GradeAndSemesterComponent.prototype.loadGradeData = function (semester, academicYear, studentId) {
        //Reset variables
        this.gradeData = [];
        this.tempAssigmentAAS = [];
        this.tempGradeAASData = "";
        this.tempPolicy2AAS = [];
        this.tempGradeGEData = "";
        this.tempPolicy2GE = [];
        this.tempAssigmentGE = [];
        this.lowerPart = false; //Make the loading gif appear if both lowerPart and lowerPart2 are true
        this.lowerPart2 = false; //Make the loading gif appear if both lowerPart and lowerPart2 are true
        this.getGradeAAS(semester, academicYear, studentId);
    };
    GradeAndSemesterComponent.prototype.getGradeAAS = function (semester, academicYear, studentId) {
        var _this = this;
        this.http.get(this.serverLink + '/getGradeAAS/' + semester + '&' + academicYear + '&' + studentId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tempGradeAASData = data;
            //If student has no course in AAS to display, hide loading gif and display table
            if (_this.tempGradeAASData.length == 0) {
                _this.lowerPart = true;
                _this.getGradeGE(semester, academicYear, studentId);
            }
            else {
                for (var i = 0; i < _this.tempGradeAASData.length; i++) {
                    //If mid percent or final percent == 0, convert it to N/A, if not, add "%"
                    if (_this.tempGradeAASData[i].midPercent == '0')
                        _this.tempGradeAASData[i].midPercent = 'N/A';
                    else
                        _this.tempGradeAASData[i].midPercent = _this.tempGradeAASData[i].midPercent + "%";
                    if (_this.tempGradeAASData[i].finalPercent == '0')
                        _this.tempGradeAASData[i].finalPercent = 'N/A';
                    else
                        _this.tempGradeAASData[i].finalPercent = _this.tempGradeAASData[i].finalPercent + "%";
                }
                for (var i = 0; i < _this.tempGradeAASData.length; i++) {
                    //Get policy 2 data
                    _this.tempPolicy2AAS.push(_this.http.get(_this.serverLink + '/getPolicyGrade/' + semester + '&' + academicYear
                        + '&' + _this.tempGradeAASData[i].subjectCode + '&' + studentId, _this.options).map(function (res) { return res.json(); }));
                }
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.tempPolicy2AAS).subscribe(function (data) {
                    _this.tempPolicy2AAS = data;
                    for (var i = 0; i < _this.tempGradeAASData.length; i++) {
                        //Get assgiment data for each course
                        _this.tempAssigmentAAS.push(_this.http.get(_this.serverLink + '/getAssgimentGradeAAS/'
                            + _this.tempGradeAASData[i].studyCode + '&' + _this.tempGradeAASData[i].classCode, _this.options).map(function (res) { return res.json(); }));
                    }
                    Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.tempAssigmentAAS).subscribe(function (data) {
                        _this.tempAssigmentAAS = data;
                        //AAS data has been done, start to merge
                        for (var i = 0; i < _this.tempGradeAASData.length; i++) {
                            var policy2ForDisplay = "";
                            if (_this.tempPolicy2AAS[i] == "") {
                                policy2ForDisplay = "";
                            }
                            else {
                                policy2ForDisplay = _this.tempPolicy2AAS[i][0].numOfViolate * _this.tempPolicy2AAS[i][0].minusGrade;
                            }
                            _this.gradeData.push({
                                no: i + 1,
                                id: _this.tempGradeAASData[i].id,
                                name: _this.tempGradeAASData[i].name,
                                midMark: _this.tempGradeAASData[i].midMark,
                                finalMark: _this.tempGradeAASData[i].finalMark,
                                averageMark: _this.tempGradeAASData[i].averageMark,
                                classCode: _this.tempGradeAASData[i].classCode,
                                studyCode: _this.tempGradeAASData[i].studyCode,
                                midPercent: _this.tempGradeAASData[i].midPercent,
                                finalPercent: _this.tempGradeAASData[i].finalPercent,
                                subjectCode: _this.tempGradeAASData[i].subjectCode,
                                aasSGT: _this.tempGradeAASData[i].aasSGT,
                                policy2: policy2ForDisplay,
                                assignment: _this.tempAssigmentAAS[i],
                                isGEGradeTitle: false
                            });
                        }
                        _this.lowerPart = true;
                        _this.getGradeGE(semester, academicYear, studentId);
                    }, function (err) {
                        _this.cookie.delete('loginID');
                        _this.cookie.delete('token');
                        _this.router.navigate(['/Login']);
                    });
                });
            }
        });
    };
    GradeAndSemesterComponent.prototype.getGradeGE = function (semester, academicYear, studentId) {
        var _this = this;
        //Get gradeGE
        this.http2.get(this.serverLink + '/getGradeGE/' + semester + '&' + academicYear + "&" + studentId, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.gradeGEData = data;
            //If student has no course in GE to display, hide loading gif and display table
            if (_this.gradeGEData.length == 0) {
                _this.getTeacherComment(semester, academicYear, studentId);
                _this.lowerPart2 = true;
            }
            else {
                _this.gradeData.push({
                    no: _this.tempGradeAASData.length,
                    id: _this.gradeGEData[0].geId,
                    name: _this.gradeGEData[0].geName,
                    midMark: null,
                    finalMark: null,
                    averageMark: _this.gradeGEData[0].averageMark,
                    classCode: null,
                    studyCode: null,
                    midPercent: null,
                    finalPercent: null,
                    subjectCode: _this.gradeGEData[0].subjectCode,
                    aasSGT: null,
                    policy2: null,
                    assignment: "",
                    isGEGradeTitle: true
                });
                _this.http2.get(_this.serverLink + '/getGradeGEDetail/' + semester + '&' + academicYear + "&" + studentId, _this.options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.tempGradeGEData = data;
                    if (_this.tempGradeGEData.length == 0) {
                        _this.getTeacherComment(semester, academicYear, studentId);
                    }
                    else {
                        for (var i = 0; i < _this.tempGradeGEData.length; i++) {
                            //If mid percent or final percent == 0, convert it to N/A, if not, add "%"
                            if (_this.tempGradeGEData[i].midPercent == '0')
                                _this.tempGradeGEData[i].midPercent = 'N/A';
                            else
                                _this.tempGradeGEData[i].midPercent = _this.tempGradeGEData[i].midPercent + "%";
                            if (_this.tempGradeGEData[i].finalPercent == '0')
                                _this.tempGradeGEData[i].finalPercent = 'N/A';
                            else
                                _this.tempGradeGEData[i].finalPercent = _this.tempGradeGEData[i].finalPercent + "%";
                        }
                        for (var i = 0; i < _this.tempGradeGEData.length; i++) {
                            //Get policy 2 data
                            _this.tempPolicy2GE.push(_this.http.get(_this.serverLink + '/getPolicyGrade/' + semester + '&' + academicYear
                                + '&' + _this.tempGradeGEData[i].subjectCode + '&' + studentId, _this.options).map(function (res) { return res.json(); }));
                        }
                        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.tempPolicy2GE).subscribe(function (data) {
                            _this.tempPolicy2GE = data;
                            for (var i = 0; i < _this.tempGradeGEData.length; i++) {
                                //Get assgiment data for each course
                                _this.tempAssigmentGE.push(_this.http.get(_this.serverLink + '/getAssgimentGradeGE/'
                                    + _this.tempGradeGEData[i].studySubCode + '&' + _this.tempGradeGEData[i].classCode, _this.options).map(function (res) { return res.json(); }));
                            }
                            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.tempAssigmentGE).subscribe(function (data) {
                                _this.tempAssigmentGE = data;
                                //GE data has been done, start to merge
                                for (var i = 0; i < _this.tempGradeGEData.length; i++) {
                                    var policy2ForDisplay = "";
                                    if (_this.tempPolicy2GE[i] == "") {
                                        policy2ForDisplay = "";
                                    }
                                    else {
                                        policy2ForDisplay = _this.tempPolicy2GE[i][0].numOfViolate * _this.tempPolicy2GE[i][0].minusGrade;
                                    }
                                    _this.gradeData.push({
                                        no: i + 1,
                                        id: _this.tempGradeGEData[i].id,
                                        name: _this.tempGradeGEData[i].name,
                                        midMark: _this.tempGradeGEData[i].midMark,
                                        finalMark: _this.tempGradeGEData[i].finalMark,
                                        averageMark: _this.tempGradeGEData[i].averageMark,
                                        classCode: _this.tempGradeGEData[i].classCode,
                                        studyCode: _this.tempGradeGEData[i].studyCode,
                                        midPercent: _this.tempGradeGEData[i].midPercent,
                                        finalPercent: _this.tempGradeGEData[i].finalPercent,
                                        subjectCode: _this.tempGradeGEData[i].subjectCode,
                                        aasSGT: _this.tempGradeGEData[i].aasSGT,
                                        policy2: policy2ForDisplay,
                                        assignment: _this.tempAssigmentGE[i],
                                        isGEGradeTitle: false
                                    });
                                }
                                _this.getTeacherComment(semester, academicYear, studentId);
                            }, function (err) {
                                _this.cookie.delete('loginID');
                                _this.cookie.delete('token');
                                _this.router.navigate(['/Login']);
                            });
                        });
                    }
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }
        });
    };
    //Function is used to get teachers' comments
    GradeAndSemesterComponent.prototype.getTeacherComment = function (semester, acaYear, stuId) {
        var _this = this;
        this.teacherComments = ""; //Reset variable
        this.http.get(this.serverLink + '/getTeacherComment/' + semester + '&' + acaYear + '&' + stuId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.teacherComments = data;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
        this.lowerPart2 = true; //Make the loading gif disappear and show table data
    };
    //Function to update the table grade data when user click other selection box
    GradeAndSemesterComponent.prototype.updateGradeData = function () {
        this.gradeData = [];
        this.loadGradeData(this.semesterInfo.semester, this.semesterInfo.acaYear, this.currStudent.id);
    };
    //Function used to convert number to coresponding semester. Ex: 4 = Spring, 1 = Summer,etc.
    GradeAndSemesterComponent.prototype.convertToSemester = function (semester) {
        if (semester == 1)
            return "SUMMER";
        else if (semester == 4)
            return "SPRING";
        else if (semester == 3)
            return "FALL";
        else
            return "UNKNOWN";
    };
    return GradeAndSemesterComponent;
}());
GradeAndSemesterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grade-and-semester',
        template: __webpack_require__("../../../../../src/app/grade-and-semester/grade-and-semester.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grade-and-semester/grade-and-semester.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _j || Object])
], GradeAndSemesterComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=grade-and-semester.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http, connectionLink) {
        this.http = http;
        this.connectionLink = connectionLink;
        this.loginState = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    LoginService.prototype.getStudent = function (id) {
        return this.http.get(this.connectionLink.getConnection() + '/getStudentinfoByIDREST/' + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    LoginService.prototype.setState = function (state) {
        this.loginState.next(state);
    };
    LoginService.prototype.getState = function () {
        return this.loginState.asObservable();
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  /*TODO: Use media queries to load smallest image that will fill screen.*/\r\n  /* background: url(../../assets/img/sgt2.jpg) no-repeat center top fixed;\r\n  background-size: cover; */\r\n}\r\n\r\n#backgroundImg\r\n{\r\n  width: 90%;\r\n  height:auto;\r\n}\r\n\r\n\r\na, a:hover {\r\n  color: black;\r\n}\r\n.container {\r\n  max-width: 400px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n  border-radius: 15px;\r\n}\r\n\r\n.overlay {\r\n  padding: 25px;\r\n  /* outline-offset: 10px;\r\n  outline: 2px solid gray; */\r\n\r\n  margin:10px;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  -moz-border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n\r\n  /*-webkit-filter: blur(5px);*/\r\n}\r\n\r\n.outer-overlay {\r\n  border:2px solid gray;\r\n  border-spacing: 200 px;\r\n  border-radius: 10px;\r\n  margin-top:50px;\r\n}\r\n\r\n\r\nh1 { color: black; }\r\n.form-signin {\r\n  color: black;\r\n  font-family: 'Maven Pro', sans-serif;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox { font-weight: normal; }\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 1rem;\r\n}\r\n.form-signin .form-control:focus { z-index: 2; }\r\n\r\n.rotate-45-left {\r\n  -webkit-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n.rotate-45-right {\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.footer {\r\n  font-size: .75em;\r\n  margin-top: 20px;\r\n}\r\n.header {\r\n  font-family: 'Maven Pro', sans-serif;\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.media-body\r\n{\r\n  font-size:0.75rem;\r\n}\r\n\r\n#loginBtn[disabled=disabled], #loginBtn:disabled {\r\n  background: yellow;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"container\">\r\n      <div class=\"outer-overlay\">\r\n        <div class=\"overlay \">\r\n          <h1 class=\"header\">\r\n            <img id=\"backgroundImg\" src=\"assets/img/logo3.png\" />\r\n          </h1>\r\n\r\n            <h4 class=\"form-signin-heading\">Sign in</h4>\r\n\r\n            <div class=\"input-group margin-bottom-sm\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"fa fa-user fa-fw\"></i>\r\n              </span>\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)] = \"inputUsername\" placeholder=\"Username\" required autofocus >\r\n            </div>\r\n            <div class=\"input-group mt-2\">\r\n              <span class=\"input-group-addon\">\r\n                <i class=\"fa fa-unlock-alt fa-fw\"></i>\r\n              </span>\r\n              <input id = \"passwordField\" class=\"form-control\" type=\"password\" [(ngModel)] = \"inputPassword\" placeholder=\"Password\" required> \r\n            </div>\r\n\r\n            <div class=\"d-flex justify-content-end\" style=\"margin-top:10px;\">\r\n              <p id = \"warningMes\" style=\"color:red;font-weight:bold;\">\r\n                \r\n              </p>\r\n            </div>\r\n            <button id = \"loginBtn\"  class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"validAccount()\">Log in</button>\r\n          <div class=\"footer\">\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                        <div class=\"media\">\r\n                            <img class=\"mr-3\" src= \"assets/img/sgtlogo.png\" alt=\"Saigontech Logo\" style=\"width:20%;\">\r\n                            <div class=\"media-body\">\r\n                              \t<b>Tel:</b> +84 8 7155033 - <b>Fax:</b> +84 8 7155035<br/>\r\n                                <b>Email:</b> info@saigontech.edu.vn<br/>\r\n                                Copyright © 2018 <a href=\"www.saigontech.edu.vn\" style=\"font-weight: bold;\">www.saigontech.edu.vn</a>\r\n                            </div>\r\n                          </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(cookieService, router, http, connectionLink) {
        this.cookieService = cookieService;
        this.router = router;
        this.http = http;
        this.connectionLink = connectionLink;
        this.inputUsername = '';
        this.inputPassword = '';
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        var cookie = this.cookieService;
        //Reset the cookie cookie
        cookie.delete('loginID');
        cookie.delete('token');
    }
    LoginComponent.prototype.ngOnInit = function () {
        $("#passwordField").keyup(function (event) {
            if (event.keyCode === 13) {
                $("#loginBtn").click();
            }
        });
    };
    LoginComponent.prototype.validAccount = function () {
        var router = this.router;
        var cookie = this.cookieService;
        // $.ajax({
        //   url: 'http://localhost:9000/getUserIDbyUsernameandPassword/' + this.inputUsername + '&' + this.inputPassword,
        //   type: 'GET',
        //   dataType: 'html',
        //   contentType: 'application/json',
        //   success: function (result) {
        //     console.log(result);
        //     if (result == -1) {
        //       $("#warningMes").html('Login failed. Please check your username and password.');
        //     }
        //     else {
        //       cookie.set('loginID', result);
        //       router.navigate(['/']);
        //     }
        //   },
        //   error: function (result) {
        //     $("#warningMes").html('An error occured in server. Please come back later');
        //   }
        // });
        // this.http.post('http://localhost:9000/login', JSON.stringify({ username: this.inputUsername, password: this.inputPassword }))
        //         .map((response: Response) => {
        //           console.log(response);
        //  });
        var user = {
            "userName": this.inputUsername,
            "password": this.inputPassword
        };
        this.http.post(this.serverLink + '/login', user).subscribe(function (res) {
            var result = res.text().split(" ");
            cookie.set('loginID', result[1]);
            cookie.set('token', result[0]);
            router.navigate(['/']);
        }, function (err) {
            $("#warningMes").html('Invalid username or password. Please check them again');
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.loadAPI = new Promise(function (resolve) {
            _this.loadScript();
            resolve(true);
        });
    };
    LoginComponent.prototype.loadScript = function () {
        var isFound = false;
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
                isFound = true;
            }
        }
        if (!isFound) {
            var dynamicScripts = ["./assets/js/light-bootstrap-dashboard.js-v=2.0.1.htm"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy2/policy2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/policy2/policy2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>Policy 2</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-4\">\r\n        <div *ngIf=\"doneLoading\">\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Student Name:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b>{{currStudent.lastName}} {{currStudent.firstName}}</b>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Student Id:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b>{{currStudent.studentID}}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Grade/Semester:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <select size=\"1\" name=\"semester\" id=\"semester\" (change)=\"updatePolicy2Data()\" [(ngModel)]=\"semesterInfo.semester\">\r\n                <option id=\"summer\" value=\"1\">SUMMER</option>\r\n                <option id=\"fall\" value=\"3\">FALL</option>\r\n                <option id=\"spring\" value=\"4\">SPRING</option>\r\n              </select>\r\n              /\r\n              <select size=\"1\" id=\"academicYear\" name=\"academicyear\" class=\"ml-2\" (change)=\"updatePolicy2Data()\" [(ngModel)]=\"semesterInfo.acaYear\">\r\n                <option *ngFor=\"let item of academicYearInfo[0]\">{{item.acaYear}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Num of Violate:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b *ngIf = \"policy2Data.length > 0\">{{policy2Data[0].numOfViolate}}</b>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Substract:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b *ngIf = \"policy2Data.length > 0\">{{policy2Data[0].minusGrade*policy2Data[0].numOfViolate}}</b> &nbsp; <i>(point)</i>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Note:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b *ngIf = \"policy2Data.length > 0\">{{policy2Data[0].note}}</b>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row flexrow justify-content-center no-gutters\" *ngIf=\"!doneLoading\">\r\n          <img id=\"loadingImg\" src=\"assets/img/loading.gif\" />\r\n        </div>   \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/policy2/policy2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Policy2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Policy2Component = (function () {
    function Policy2Component(cookie, loginService, http, semesterService, connectionLink, router) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.semesterService = semesterService;
        this.connectionLink = connectionLink;
        this.router = router;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.doneLoading = false; //If it is true, the data has been loaded completely
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    Policy2Component.prototype.ngOnInit = function () {
        var _this = this;
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/Policy2" class="text-infor"> Policy 2</a>');
        //Load current student's information (name, image, student Id,...)
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data2) {
                _this.semesterInfo = data2;
                //Get academic year array
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.http.get(_this.serverLink + '/getAcademicYear/', _this.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                    _this.academicYearInfo = data;
                    //Set student's full name and a small photo in a sidebar 
                    $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                    $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                    _this.getPolicy2Data(_this.semesterInfo.semester, _this.semesterInfo.acaYear, _this.currStudent.id);
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }, function (err) {
                _this.cookie.delete('loginID');
                _this.cookie.delete('token');
                _this.router.navigate(['/Login']);
            });
        });
    };
    //Function is used to get policy 2 data
    Policy2Component.prototype.getPolicy2Data = function (semester, acaYear, stuId) {
        var _this = this;
        this.policy2Data = "";
        this.http.get(this.serverLink + '/getPolicy2Data/' + semester + "&" + acaYear + "&" + stuId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.policy2Data = data;
            _this.doneLoading = true;
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //Function is used to update data when user select another item in selection box
    Policy2Component.prototype.updatePolicy2Data = function () {
        this.getPolicy2Data(this.semesterInfo.semester, this.semesterInfo.acaYear, this.currStudent.id);
    };
    //Function is used to convert number to coresponding semester. Ex: 4 = Spring, 1 = Summer,etc.
    Policy2Component.prototype.convertToSemester = function (semester) {
        if (semester == 1)
            return "SUMMER";
        else if (semester == 4)
            return "SPRING";
        else if (semester == 3)
            return "FALL";
        else
            return "UNKNOWN";
    };
    return Policy2Component;
}());
Policy2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-policy2',
        template: __webpack_require__("../../../../../src/app/policy2/policy2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/policy2/policy2.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _f || Object])
], Policy2Component);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=policy2.component.js.map

/***/ }),

/***/ "../../../../../src/app/semester-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemesterInformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SemesterInformationService = (function () {
    function SemesterInformationService(http, connectionLink, cookie) {
        this.http = http;
        this.connectionLink = connectionLink;
        this.cookie = cookie;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    SemesterInformationService.prototype.getSemesterInformation = function () {
        return this.http.get(this.connectionLink.getConnection() + '/getSystemTimeREST', this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    SemesterInformationService.prototype.getAcademicYear = function () {
        return this.http.get(this.connectionLink.getConnection() + '/getAcademicYear', this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    SemesterInformationService.prototype.getSystemDateAndTime = function (format) {
        return this.http.get(this.connectionLink.getConnection() + '/getSystemDateAndTime/' + format, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    return SemesterInformationService;
}());
SemesterInformationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], SemesterInformationService);

var _a, _b, _c;
//# sourceMappingURL=semester-info.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-navbar/sidebar-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar\r\n{\r\n    background-image: url('/sms/assets/img/test.jpg');\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-navbar/sidebar-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"green\">\r\n  <!--\r\nTip 1: You can change the color of the sidebar using: data-color=\"purple | blue | green | orange | red\"\r\n\r\nTip 2: you can also add an image using data-image tag\r\n-->\r\n  <div class=\"sidebar-wrapper\">\r\n      <div class=\"logo\">\r\n          <a href=\"#\">\r\n              <img src=\"assets/img/logo3.png\" style=\"width:85%\" />\r\n          </a>\r\n      </div>\r\n      <div class=\"user\">\r\n        <div class=\"photo\">\r\n            <img id = \"smallPhoto\">\r\n        </div>\r\n        <div class=\"info \">\r\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                <span><b id = \"stuFullName\"></b>\r\n                    <b class=\"caret\"></b>\r\n                </span>\r\n            </a>\r\n            <div class=\"collapse\" id=\"collapseExample\">\r\n                <ul class=\"nav\">\r\n                    <li style=\"margin-top: 5px;\">\r\n                        <a class=\"profile-dropdown\" [routerLink]=\"['/']\">\r\n                            <span class=\"sidebar-mini\">MP</span>\r\n                            <span class=\"sidebar-normal\">My Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"profile-dropdown\" href=\"#pablo\">\r\n                            <span class=\"sidebar-mini\">EP</span>\r\n                            <span class=\"sidebar-normal\">Edit Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"profile-dropdown\" href=\"#pablo\">\r\n                            <span class=\"sidebar-mini\">S</span>\r\n                            <span class=\"sidebar-normal\">Settings</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      <ul class=\"nav\">\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#componentsExamples\">\r\n                  <i class=\"nc-icon nc-atom\"></i>\r\n                  <p>\r\n                      Registration\r\n                      <b class=\"caret\"></b>\r\n                  </p>\r\n              </a>\r\n              <div class=\"collapse \" id=\"componentsExamples\">\r\n                  <ul class=\"nav\">\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" [routerLink]=\"['/ClassStatus']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-pin-3\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Class status</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\"  [routerLink]=\"['/AASRegistration']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-spaceship\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">AAS Registration</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" [routerLink]=\"['/ESLRegistration']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-send\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">ESL Registration</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" [routerLink]=\"['/EnrichmentRegistration']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-air-baloon\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Enrichment-course Registrations</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" [routerLink]=\"['/VNRegistration']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-ruler-pencil\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">VN-course Registration</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-simple-remove\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Add/Drop AAS Class Request</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#formsExamples\">\r\n                  <i class=\"nc-icon nc-notes\"></i>\r\n                  <p>\r\n                      Class\r\n                      <b class=\"caret\"></b>\r\n                  </p>\r\n              </a>\r\n              <div class=\"collapse \" id=\"formsExamples\">\r\n                  <ul class=\"nav\">\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\"  [routerLink]=\"['/CourseEnrolled']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-palette\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Courses Enrolled</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\"  [routerLink]=\"['/Timetable']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-single-copy-04\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Timetable</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\"  [routerLink]=\"['/StudentAttendance']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-tag-content\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Attendance</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\"  [routerLink]=\"['/TuitionFee']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-grid-45\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Tuition Fee</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#tablesExamples\">\r\n                  <i class=\"nc-icon nc-single-02\"></i>\r\n                  <p>\r\n                      Personal Information\r\n                      <b class=\"caret\"></b>\r\n                  </p>\r\n              </a>\r\n              <div class=\"collapse \" id=\"tablesExamples\">\r\n                  <ul class=\"nav\">\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/Policy2']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-support-17\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Policy #2</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/StudentProhibited']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-tap-01\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Student Prohibited</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/GradeAndSemester']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-check-2\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Grade/Semester</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/TranscriptHCC']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-delivery-fast\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">HCC Workforce Transcript</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/DegreePlan']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-compass-05\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Degree Plan</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/AASTranscript']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-badge\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">AAS Transcript</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/ESLTranscript']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-badge\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">ESL Transcript</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/Dars']\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-align-left-2\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Dars</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#mapsExamples\">\r\n                  <i class=\"nc-icon nc-app\"></i>\r\n                  <p>\r\n                      Others\r\n                      <b class=\"caret\"></b>\r\n                  </p>\r\n              </a>\r\n              <div class=\"collapse \" id=\"mapsExamples\">\r\n                  <ul class=\"nav\">\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-puzzle-10\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">AAS SEOI</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-puzzle-10\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Enrichment SEOI</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-puzzle-10\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">ESL SEOI</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-puzzle-10\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Other SEOI</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item ml-2\">\r\n                          <a class=\"nav-link\" href=\"#\">\r\n                              <span class=\"sidebar-mini\">\r\n                                  <i class=\"nc-icon nc-email-83\" style=\"font-size:1.2rem\"></i>\r\n                              </span>\r\n                              <span class=\"sidebar-normal\">Request for AAS Degree</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </div>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n</div>\r\n<div class=\"main-panel\">\r\n    <!-- Navbar -->\r\n\r\n    <nav class=\"navbar navbar-expand-lg \">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-wrapper\">\r\n                <div class=\"navbar-minimize\">\r\n                    <button id=\"minimizeSidebar\" class=\"btn btn-success btn-fill btn-round btn-icon d-none d-lg-block\">\r\n                        <i class=\"fa fa-ellipsis-v visible-on-sidebar-regular\"></i>\r\n                        <i class=\"fa fa-navicon visible-on-sidebar-mini\"></i>\r\n                    </button>\r\n                </div>\r\n                <p id=\"locationLink\"></p>\r\n            </div>\r\n            <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\"\r\n                aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-bar burger-lines\"></span>\r\n                <span class=\"navbar-toggler-bar burger-lines\"></span>\r\n                <span class=\"navbar-toggler-bar burger-lines\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse justify-content-end\">\r\n\r\n                <ul class=\"navbar-nav\">\r\n                    <!-- <li class=\"dropdown nav-item\">\r\n                        <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\r\n                            <i class=\"nc-icon nc-planet\"></i>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">Create New Post</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Manage Something</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Do Nothing</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Submit to live</a>\r\n                            <li class=\"divider\"></li>\r\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        </ul>\r\n                    </li> -->\r\n                    <li class=\"dropdown nav-item\">\r\n                        <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\r\n                            <i class=\"nc-icon nc-bell-55\"></i>\r\n                            <span class=\"notification\">5</span>\r\n                            <span class=\"d-lg-none\">Notification</span>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">Notification 1</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Notification 2</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Notification 3</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Notification 4</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Notification 5</a>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"nav-item dropdown\">\r\n                        <a class=\"nav-link dropdown-toggle\" href=\"javascript:if(confirm('http://example.com\\n\\nThis file was not retrieved because it was filtered out by your project settings.\\n\\nWould you like to open it from the server?'))window.location='http://example.com'\"\r\n                            id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            <i class=\"nc-icon nc-bullet-list-67\"></i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                                <i class=\"nc-icon nc-email-85\"></i> Messages\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                                <i class=\"nc-icon nc-umbrella-13\"></i> Help Center\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                                <i class=\"nc-icon nc-settings-90\"></i> Settings\r\n                            </a>\r\n                            <div class=\"divider\"></div>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                                <i class=\"nc-icon nc-lock-circle-open\"></i> Lock Screen\r\n                            </a>\r\n                            <a style = \"cursor: pointer\" class=\"dropdown-item text-danger\" (click) = \"logOut()\" [routerLink]=\"['/Login']\">\r\n                                <i class=\"nc-icon nc-button-power\"></i> Log out\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <!-- End Navbar -->\r\n    <div class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header \">\r\n                            <h4 class=\"card-title\">\r\n                                <b>Student Information</b>\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body p-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12 col-md-9 justify-content-start\">\r\n                                    <div class=\"row flexrow\">\r\n                                        <div class=\"col-6 font-weight-bold stuInfor\">\r\n                                            Student ID:\r\n                                            <br/> HCCS PID:\r\n                                            <br/> HCCS ID:\r\n                                            <br/> HCCS Library Barcode:\r\n                                            <br/> TOEFL:\r\n                                            <br/> Last Name:\r\n                                            <br/> First Name:\r\n                                            <br/> Birthday:\r\n                                            <br/> Gender:\r\n                                            <br/> Course:\r\n                                            <br/> Phone:\r\n                                            <br/> Email:\r\n                                            <br/> Permanent Address:\r\n                                            <br/> Mailing Address:\r\n                                            <br/>\r\n                                        </div>\r\n                                        <div class=\"col-6 stuInfor\">\r\n                                            01-14-0-00016\r\n                                            <br/> 208932652\r\n                                            <br/> P10276509\r\n                                            <br/> 27522309102749\r\n                                            <br/> N/A\r\n                                            <br/> Im\r\n                                            <br/> Yoona\r\n                                            <br/> 25/4/1991\r\n                                            <br/> Female\r\n                                            <br/> AAS40\r\n                                            <br/> 09875543296\r\n                                            <br/> yoona@snsd.com\r\n                                            <br/> Seoul, Korea\r\n                                            <br/> Seoul, Korea\r\n                                            <br/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12 col-md-3 justify-content-between\">\r\n                                    <img src=\"../assets/img/yoona.jpg\" width=\"95%;\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n            </div>\r\n            </div> -->\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav>\r\n                    <ul class=\"footer-menu\">\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Portfolio\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">\r\n                                Blog\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <p class=\"copyright text-center\">\r\n                        ©\r\n                        <script>\r\n                            document.write(new Date().getFullYear())\r\n                        </script>\r\n                        <a href=\"http://www.saigontech.edu.vn\">Saigontech</a>\r\n                    </p>\r\n                </nav>\r\n            </div>\r\n        </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar-navbar/sidebar-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarNavbarComponent = (function () {
    function SidebarNavbarComponent(cookie, router) {
        this.cookie = cookie;
        this.router = router;
    }
    SidebarNavbarComponent.prototype.ngOnInit = function () {
    };
    SidebarNavbarComponent.prototype.loadScript = function () {
        var isFound = false;
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
                isFound = true;
            }
        }
        if (!isFound) {
            var dynamicScripts = ["./assets/js/light-bootstrap-dashboard.js-v=2.0.1.htm"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
    };
    SidebarNavbarComponent.prototype.logOut = function () {
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
    };
    return SidebarNavbarComponent;
}());
SidebarNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-sidebar-navbar',
        template: __webpack_require__("../../../../../src/app/sidebar-navbar/sidebar-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-navbar/sidebar-navbar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SidebarNavbarComponent);

var _a, _b;
//# sourceMappingURL=sidebar-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-attendance/student-attendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-attendance/student-attendance.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\" style=\"border-radius: 0.3rem\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\">\r\n          <b>Student's Attendance</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 justify-content-start\">\r\n            <div class=\"row flexrow justify-content-center\">\r\n              <b style=\"color: rgb(51, 170, 200)\">Semester/Year:</b>\r\n              <select size=\"1\" name=\"semester\" class=\"ml-2\" id=\"semester\" ng-model=\"selectedSemester\" (change)=\"update()\">\r\n                <option value=\"1\">SUMMER</option>\r\n                <option value=\"3\">FALL</option>\r\n                <option selected=\"\" value=\"4\">SPRING</option>\r\n              </select>\r\n              <select size=\"1\" name=\"academicyear\" id=\"academicyear\" ng-model=\"selectedYear\" class=\"ml-2\" (change)=\"update()\">\r\n                  <option *ngFor=\"let year of years\" [value]=\"year\" >{{year}}</option>\r\n              </select>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-12\"><strong style=\"font-size:1.5rem;margin-left:1rem;color: dodgerblue\" >AAS Classes</strong></div>\r\n          <div class=\"col-12\" *ngIf=\"checkAAS\">\r\n            <div class=\"row flexrow justify-content-center p-3\">\r\n              <table class=\"table table-bordered table-responsive\" id=\"datatable\" width=\"100%\" style=\"border-radius: 0.3rem\">\r\n                <thead align=\"center\" style=\"background: rgba(247, 64, 18, 0.699) \">\r\n                  <th width=\"10%\">\r\n                    <b>\r\n                      No\r\n                    </b>\r\n                  </th>\r\n                  <th width=\"10%\">\r\n                    <b>\r\n                      Class Code\r\n                    </b>\r\n                  </th>\r\n                  <th width=\"35%\">\r\n                    <b>\r\n                      Course Name\r\n                    </b>\r\n                  </th>\r\n                  <th width=\"15%\">\r\n                    <b>\r\n                      Date\r\n                    </b>\r\n                  </th>\r\n                  <th width=\"20%\">\r\n                    <b>\r\n                      Reason\r\n                    </b>\r\n                  </th>\r\n      \r\n                </thead>\r\n                <tbody *ngFor=\"let aas of attendanceAAS; let i=index\">\r\n                  <tr *ngFor=\"let array of aas.detail; let j=index\">\r\n                    <td  [attr.rowspan]=aas.detail.length *ngIf=\"j==0\"style=\"font-size: 1.3rem\" >\r\n                      {{i+1}}\r\n                    </td>\r\n                    <td  [attr.rowspan]=aas.detail.length *ngIf=\"j==0\">\r\n                      {{array.classID}}\r\n                    </td>\r\n                    <td  [attr.rowspan]=aas.detail.length *ngIf=\"j==0\">\r\n                      {{array.name}}\r\n                    </td>\r\n                    <td>\r\n                      {{array.dateIn}}\r\n                    </td>\r\n                    <td>\r\n                      {{array.reason}}\r\n                    </td>\r\n               \r\n                  </tr>\r\n                  <tr>\r\n                    <td colspan=\"4\" align=\"right\">\r\n                      Total absent hours:\r\n                    </td>\r\n                    <td align=\"center\" width=\"13%\">\r\n                      <b>{{aas.hoursAbsent}}</b>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td colspan=\"4\" align=\"right\">\r\n                      Total hours must learn:\r\n                    </td>\r\n                    <td align=\"center\" width=\"13%\">\r\n                      <b>{{aas.hoursStudy}}</b>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td colspan=\"4\" align=\"right\">\r\n                      Percentage absent hours :\r\n                    </td>\r\n                    <td align=\"center\" width=\"13%\">\r\n                      <b>{{aas.percentAbsent}}</b>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12\"><strong style=\"font-size:1.5rem;margin-left:1rem;color: dodgerblue\" >General english classes</strong></div>\r\n          <div class=\"col-12\" *ngIf=\"checkGE\">\r\n              <div class=\"row flexrow justify-content-center p-3\">\r\n                <table class=\"table table-bordered table-responsive\" id=\"datatable\" width=\"100%\" style=\"border-radius: 0.3rem\">\r\n                  <thead align=\"center\" style=\"background: rgb(75, 253, 40)\">\r\n                    <th width=\"10%\">\r\n                      <b>\r\n                        No\r\n                      </b>\r\n                    </th>\r\n                    <th width=\"10%\">\r\n                      <b>\r\n                        Class Code\r\n                      </b>\r\n                    </th>\r\n                    <th width=\"35%\">\r\n                      <b>\r\n                        Course Name\r\n                      </b>\r\n                    </th>\r\n                    <th width=\"15%\">\r\n                      <b>\r\n                        Date\r\n                      </b>\r\n                    </th>\r\n                    <th width=\"20%\">\r\n                      <b>\r\n                        Reason\r\n                      </b>\r\n                    </th>\r\n            \r\n                  </thead>\r\n                  <tbody *ngFor=\"let ge of attendanceGE; let i=index\">\r\n                    <tr *ngFor=\"let array of ge.detail;let j=index\">\r\n                      <td [attr.rowspan]=ge.detail.length *ngIf=\"j==0\">\r\n                        {{i+1}}\r\n                      </td>\r\n                      <td [attr.rowspan]=ge.detail.length *ngIf=\"j==0\">\r\n                        {{ge.classID}}\r\n                      </td>\r\n                      <td [attr.rowspan]=ge.detail.length *ngIf=\"j==0\">\r\n                        {{ge.name}}\r\n                      </td>\r\n                      <td>\r\n                        {{array.dateIn}}\r\n                      </td>\r\n                      <td>\r\n                        {{array.reason}}\r\n                      </td>\r\n               \r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"4\" align=\"right\">\r\n                        Total absent hours:\r\n                      </td>\r\n                      <td align=\"center\" width=\"13%\">\r\n                        <b>{{ge.absentHours}}</b>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"4\" align=\"right\">\r\n                        Total hours must learn:\r\n                      </td>\r\n                      <td align=\"center\" width=\"13%\">\r\n                        <b>{{ge.studyHours}}</b>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"4\" align=\"right\">\r\n                        Percentage absent hours :\r\n                      </td>\r\n                      <td align=\"center\" width=\"13%\">\r\n                        <b>{{ge.percentAbsent}}</b>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/student-attendance/student-attendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentAttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentAttendanceComponent = (function () {
    function StudentAttendanceComponent(cookie, router, http, connectionLink) {
        this.cookie = cookie;
        this.router = router;
        this.http = http;
        this.connectionLink = connectionLink;
        this.checkGE = true;
        this.checkAAS = true;
        this.years = [
            '2002',
            '2003', '2004',
            '2005', '2006',
            '2007', '2008',
            '2009', '2010',
            '2011', '2012',
            '2013', '2014',
            '2015', '2016',
            '2017', '2018',
            '2019', '2020',
            '2021', '2022',
            '2023', '2024',
            '2025', '2026',
        ];
        this.currStudent = null;
        this.currSemesterAndYear = null;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    StudentAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentCode = this.cookie.get('loginID');
        this.http.get(this.connectionLink.getConnection() + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            var temp;
            _this.http.get(_this.connectionLink.getConnection() + '/getSystemTimeREST', _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                temp = data;
                _this.Semester = temp.semester;
                _this.academicYear = temp.acaYear;
                _this.initialization();
            });
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    StudentAttendanceComponent.prototype.initialization = function () {
        var _this = this;
        $('#academicyear').val(this.academicYear);
        $('#semester').val(this.Semester);
        this.http.get(this.connectionLink.getConnection() + '/getStudentAttendanceAASList/' + this.studentCode + '&' + this.academicYear + '&' + this.Semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.attendanceAAS = data;
        });
        this.http.get(this.connectionLink.getConnection() + '/getStudentAttendanceGEList/' + this.studentCode + '&' + this.academicYear + '&' + this.Semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.attendanceGE = data;
        });
        // this.studentAASAttendanceService.getStudentAttendanceAASLists(this.academicYear,this.Semester,this.studentCode)
        // .then(data =>{console.log(data); this.attendanceAAS = data}); 
        // this.studentGEAttendanceService.getStudentAttendanceGELists(this.academicYear,this.Semester,this.studentCode)
        // .then(data =>{console.log(data); this.attendanceGE = data}); 
        // console.log(this.studentCode)
    };
    StudentAttendanceComponent.prototype.update = function () {
        var _this = this;
        var year = $('#academicyear').val();
        var semester = $('#semester').val();
        this.http.get(this.connectionLink.getConnection() + '/getStudentAttendanceAASList/' + this.studentCode + '&' + year + '&' + semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.attendanceAAS = data;
        });
        this.http.get(this.connectionLink.getConnection() + '/getStudentAttendanceGEList/' + this.studentCode + '&' + year + '&' + semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.attendanceGE = data;
        });
    };
    return StudentAttendanceComponent;
}());
StudentAttendanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-attendance',
        template: __webpack_require__("../../../../../src/app/student-attendance/student-attendance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-attendance/student-attendance.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]) === "function" && _d || Object])
], StudentAttendanceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=student-attendance.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-infofor-registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentInfoforRegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentInfoforRegistrationService = (function () {
    function StudentInfoforRegistrationService(http, connectionLink, cookie) {
        this.http = http;
        this.connectionLink = connectionLink;
        this.cookie = cookie;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    StudentInfoforRegistrationService.prototype.getStudentinfoforRegistration = function (id) {
        return this.http.get(this.connectionLink.getConnection() + '/getStudentVNInfo/' + id, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    StudentInfoforRegistrationService.prototype.getStudentAvaImage = function (id) {
        console.log(this.options);
        return this.http.get(this.connectionLink.getConnection() + '/getStudentVNAvaImage/' + id, this.options)
            .toPromise()
            .then(function (res) { return res.text(); });
    };
    StudentInfoforRegistrationService.prototype.getStudentinfoforRegistration1 = function (acaYear, semester, id) {
        return this.http.get(this.connectionLink.getConnection() + '/getStudentESLInfo/' + acaYear + '&' + semester + '&' + id, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    StudentInfoforRegistrationService.prototype.getStudentAvaImage1 = function (id) {
        return this.http.get(this.connectionLink.getConnection() + '/getStudentESLAvaImage/' + id, this.options)
            .toPromise()
            .then(function (res) { return res.text(); });
    };
    return StudentInfoforRegistrationService;
}());
StudentInfoforRegistrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], StudentInfoforRegistrationService);

var _a, _b, _c;
//# sourceMappingURL=student-infofor-registration.service.js.map

/***/ }),

/***/ "../../../../../src/app/student-information/student-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#studentPro-loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}\r\n\r\n\r\n@media (max-width: 400px) {\r\n  #semester, #academicYear\r\n  {\r\n      width:40%;\r\n  }\r\n\r\n  table th{\r\n      font-size: 10px;\r\n  }\r\n\r\n  body\r\n  {\r\n      font-size:12px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-information/student-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"currStudentID\">\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header \">\r\n                <h4 class=\"card-title\">\r\n                    <b>Student Information</b>\r\n                </h4>\r\n            </div>\r\n            <div class=\"card-body p-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md-9 justify-content-start\">\r\n                        <div class=\"row flexrow\">\r\n                            <div class=\"col-6 font-weight-bold stuInfor\">\r\n                                Student ID:\r\n                                <br/> HCCS PID:\r\n                                <br/> HCCS ID:\r\n                                <br/> HCCS Library Barcode:\r\n                                <br/> TOEFL:\r\n                                <br/> Last Name:\r\n                                <br/> First Name:\r\n                                <br/> Birthday:\r\n                                <br/> Gender:\r\n                                <br/> Course:\r\n                                <br/> Phone:\r\n                                <br/> Email:\r\n                                <br/> Permanent Address:\r\n                                <br/> Mailing Address:\r\n                                <br/>\r\n                            </div>\r\n                            <div class=\"col-6 stuInfor\" *ngIf=\"currStudent != null\">\r\n                                {{currStudent.studentID}}\r\n                                <br/> {{currStudent.hccsPID}}\r\n                                <br/> {{currStudent.hccsID}}\r\n                                <br/> {{currStudent.hccsLIB}}\r\n                                <br/> {{currStudent.toefl}}\r\n                                <br/> {{currStudent.lastName}}\r\n                                <br/> {{currStudent.firstName}}\r\n                                <br/> {{currStudent.dob}}\r\n                                <br/> {{currStudent.gender}}\r\n                                <br/> {{currStudent.course}}\r\n                                <br/> {{currStudent.phoneNumber}}\r\n                                <br/> {{currStudent.email}}\r\n                                <br/> {{currStudent.permanentAD}}\r\n                                <br/> {{currStudent.mailAD}}\r\n                                <br/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-3 justify-content-between\" *ngIf=\"currStudent != null\">\r\n                        <img [src]=\"'http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/'+currStudent.image\" width=\"95%\" />\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/student-information/student-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentInformationComponent = (function () {
    function StudentInformationComponent(cookie, loginService, http, router, connectionLink) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.router = router;
        this.connectionLink = connectionLink;
        this.currStudent = null;
        this.currSemesterAndYear = null;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    StudentInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.connectionLink.getConnection() + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Set student's full name and a small photo in a sidebar 
            $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    return StudentInformationComponent;
}());
StudentInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-information',
        template: __webpack_require__("../../../../../src/app/student-information/student-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-information/student-information.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]) === "function" && _e || Object])
], StudentInformationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=student-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-prohibited/student-prohibited.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table\r\n{\r\n    border-collapse: collapse;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid rgb(119, 119, 119);\r\n }\r\n\r\nthead\r\n{\r\n    background:rgb(187, 223, 253);\r\n}\r\nth\r\n{\r\n    text-align: center;  \r\n    height:2.5rem; \r\n}\r\n\r\ntr\r\n{\r\n    height:2rem\r\n}\r\n\r\ntd\r\n{\r\n    text-align: center;\r\n}\r\n\r\n  \r\n#studentPro-loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}\r\n\r\n\r\n@media (max-width: 400px) {\r\n    #semester, #academicYear\r\n    {\r\n        width:40%;\r\n    }\r\n\r\n    table th{\r\n        font-size: 10px;\r\n    }\r\n\r\n    body\r\n    {\r\n        font-size:12px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-prohibited/student-prohibited.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>Student Prohibited</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-4\">\r\n        <div *ngIf=\"upperPart\">\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Semester/Year:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b>{{convertToSemester(semesterInfo.semester)}}/{{semesterInfo.acaYear}}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Student Name:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b>{{currStudent.lastName}} {{currStudent.firstName}}</b>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Student Id:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <b>{{currStudent.studentID}}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"row flexrow justify-content-center no-gutters\">\r\n            <div class=\"col d-flex justify-content-end\">Grade/Semester:</div>\r\n            <div class=\"col justify-content-start ml-2\" style=\"padding:-5px;\">\r\n              <select size=\"1\" name=\"semester\" id=\"semester\" (change)=\"updateTableInformation()\" [(ngModel)]=\"semesterInfo.semester\">\r\n                <option id=\"summer\" value=\"1\">SUMMER</option>\r\n                <option id=\"fall\" value=\"3\">FALL</option>\r\n                <option id=\"spring\" value=\"4\">SPRING</option>\r\n              </select>\r\n              /\r\n              <select size=\"1\" id=\"academicYear\" name=\"academicyear\" class=\"ml-2\" (change)=\"updateTableInformation()\" [(ngModel)]=\"semesterInfo.acaYear\">\r\n                <option *ngFor=\"let item of academicYearInfo[0]\">{{item.acaYear}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <div class=\"col d-flex justify-content-start\">\r\n            <span style=\"width:7rem; background:#FFFF00\"></span>\r\n            <span style=\"margin-left:10px;\">\r\n              <b>\r\n                Nearly Prohibited\r\n              </b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row flexrow justify-content-center no-gutters mt-1\">\r\n          <div class=\"col d-flex justify-content-start\">\r\n            <span style=\"width:7rem; background:#FF3300\"></span>\r\n            <span style=\"margin-left:10px;\">\r\n              <b>\r\n                Prohibited\r\n              </b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row flexrow justify-content-center no-gutters mt-4\">\r\n          <div id=\"studentPro-mainTable\" class=\"col d-flex justify-content-center\" *ngIf=\"lowerPart\">\r\n            <table width=\"100%\" border=\"1\" cellspacing=\"1\" class=\"table-hover\">\r\n              <thead>\r\n                <th width=\"7%\">\r\n                  <span class=\"text_white_bold\">No.</span>\r\n                </th>\r\n                <th width=\"15%\">\r\n                  <span class=\"text_white_bold\">Class Code</span>\r\n                </th>\r\n                <th>\r\n                  <span class=\"text_white_bold\">Class Name</span>\r\n                </th>\r\n                <th width=\"20%\">\r\n                  <span class=\"text_white_bold\">Total Absent Hours</span>\r\n                </th>\r\n                <th width=\"20%\">\r\n                  <span class=\"text_white_bold\">Percentage (%)</span>\r\n                </th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of attendanceData, let i = index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{item.classid}}</td>\r\n                  <td>{{item.name}}</td>\r\n                  <td>{{item.tong}}</td>\r\n                  <td>{{item.percent}}</td>\r\n                </tr> \r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <img id=\"studentPro-loadingImg\" src=\"assets/img/loading.gif\" *ngIf=\"!lowerPart\" />\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/student-prohibited/student-prohibited.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProhibitedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StudentProhibitedComponent = (function () {
    function StudentProhibitedComponent(cookie, loginService, http, semesterService, connectionLink, router) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.semesterService = semesterService;
        this.connectionLink = connectionLink;
        this.router = router;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.upperPart = false; //When it is true, the page will show the upper part of the page (selection boxes)
        this.lowerPart = false; //When it is true, the page will show the lower part (the table), if not, a loading gif will be displayed instead
        this.yearArray = new Array(); //The array of year (beginning is 2001, end will be the current year + 5)
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    StudentProhibitedComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/StudentProhibited" class="text-infor"> Student Prohibited</a>');
        //Load current student's information (name, image, student Id,...)
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data2) {
                _this.semesterInfo = data2;
                //Get academic year array
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["a" /* forkJoin */])(_this.http.get(_this.serverLink + '/getAcademicYear/', _this.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                    _this.academicYearInfo = data;
                    //Set student's full name and a small photo in a sidebar 
                    $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                    $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                    //Get attendance information
                    _this.loadStudentProhibitedInformation(_this.semesterInfo.semester, _this.semesterInfo.acaYear, _this.currStudent.id);
                    _this.upperPart = true;
                }, function (err) {
                    _this.cookie.delete('loginID');
                    _this.cookie.delete('token');
                    _this.router.navigate(['/Login']);
                });
            }, function (err) {
                _this.cookie.delete('loginID');
                _this.cookie.delete('token');
                _this.router.navigate(['/Login']);
            });
        });
    };
    //Function to get attendance information from semester, academic year and student id
    StudentProhibitedComponent.prototype.loadStudentProhibitedInformation = function (semester, academicYear, studentId) {
        var _this = this;
        this.lowerPart = false; //Make the loading gif appear
        var tableResult = ""; //The code of result table in html
        this.http.get(this.serverLink + '/getStudentProhibitedInformation/' + semester + '&' + academicYear + '&' + studentId, this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.attendanceData = data;
            _this.lowerPart = true; //Make the loading gif disappear and the result table will be shown
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    //Funtion used to update the table information after the user selects another item in selection boxes
    StudentProhibitedComponent.prototype.updateTableInformation = function () {
        //Add loading image before the table appears
        $("#studentPro-mainTable").html('<img id = "studentPro-loadingImg" src = "assets/img/loading.gif"/>');
        //Get attendance information
        this.loadStudentProhibitedInformation($("#semester").val(), $("#academicYear").val(), this.currStudent.id);
    };
    //Function used to convert number to coresponding semester. Ex: 4 = Spring, 1 = Summer,etc.
    StudentProhibitedComponent.prototype.convertToSemester = function (semester) {
        if (semester == 1)
            return "SUMMER";
        else if (semester == 4)
            return "SPRING";
        else if (semester == 3)
            return "FALL";
        else
            return "UNKNOWN";
    };
    return StudentProhibitedComponent;
}());
StudentProhibitedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-prohibited',
        template: __webpack_require__("../../../../../src/app/student-prohibited/student-prohibited.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-prohibited/student-prohibited.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _f || Object])
], StudentProhibitedComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=student-prohibited.component.js.map

/***/ }),

/***/ "../../../../../src/app/timetable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimetableService = (function () {
    function TimetableService(http, connectionLink, cookie) {
        this.http = http;
        this.connectionLink = connectionLink;
        this.cookie = cookie;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TimetableService.prototype.getTimetable = function (academicyear, semester, id, beginDate, endDate) {
        console.log(this.connectionLink.getConnection() + '/getTimeTable/' + id + '&' + academicyear + '&' + semester + '&' + beginDate + '&' + endDate);
        return this.http.get(this.connectionLink.getConnection() + '/getTimeTable/' + id + '&' + academicyear + '&' + semester + '&' + beginDate + '&' + endDate, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    TimetableService.prototype.getTimetableRegis = function (classCode, acaYear, semester) {
        return this.http.get(this.connectionLink.getConnection() + '/getTimetableREST/' + classCode + '&' + acaYear + '&' + semester, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    return TimetableService;
}());
TimetableService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], TimetableService);

var _a, _b, _c;
//# sourceMappingURL=timetable.service.js.map

/***/ }),

/***/ "../../../../../src/app/timetable/timetable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timetable/timetable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\" style=\"border-radius: 0.3rem\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\" style=\"display: inline-block\">\r\n          <b>Timetable</b> of <span style=\"color: rgba(8, 151, 27, 0.877)\">{{semesterName}}</span> semester in {{academicYear}}\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row m-1\">\r\n\r\n          <div class=\"col-md-3 col-12 justify-content-center\">\r\n            <div class=\"row p-2\">\r\n                <h3>From:</h3>\r\n              <form #myForm=\"ngForm\" novalidate>\r\n                <my-date-picker name=\"beginDate\" [options]=\"DateOptions\" (dateChanged)=\"onBeginDateChanged($event)\" [(ngModel)]=\"modelBegin\"\r\n                  required></my-date-picker>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-1\"></div>\r\n          <div class=\"col-md-3 col-12  justify-content-centert\">\r\n            <div class=\"row p-2\">          \r\n              <form #myForm=\"ngForm\" novalidate>\r\n                  <h3>To:</h3>\r\n                <my-date-picker name=\"endDate\" [options]=\"DateOptions\" (dateChanged)=\"onEndDateChanged($event)\"[(ngModel)]=\"modelEnd\"\r\n                ></my-date-picker>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <div class=\"row flexrow justify-content-center p-3\">\r\n              <table class=\"table table-bordered table-responsive\" id=\"datatable\" width=\"100%\" style=\"border-radius: 0.3rem\">\r\n                <tbody>\r\n                  <tr *ngFor=\"let day of dayOfWeek;let i=index\">\r\n                    <td width=\"10%\">\r\n                      <strong>{{dayName[i]}}</strong>\r\n                    </td>\r\n                    <td>\r\n                      <ul *ngFor=\"let detail of day\" style=\"list-style-type:circle;display: inline-block\">\r\n                        <li>\r\n                          <h5 style=\"color: darkred\">{{detail.time}} </h5>{{detail.classID}} {{detail.room}}</li>\r\n                      </ul>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/timetable/timetable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimetableComponent = (function () {
    function TimetableComponent(cookie, router, http, connectionLink) {
        this.cookie = cookie;
        this.router = router;
        this.http = http;
        this.connectionLink = connectionLink;
        this.endDate = null;
        this.dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.currStudent = null;
        this.currSemesterAndYear = null;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TimetableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentCode = this.cookie.get('loginID');
        this.http.get(this.connectionLink.getConnection() + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            var temp;
            _this.http.get(_this.connectionLink.getConnection() + '/getSystemTimeREST', _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                temp = data;
                _this.Semester = temp.semester;
                _this.academicYear = temp.acaYear;
                _this.initialization();
            });
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    TimetableComponent.prototype.initialization = function () {
        console.log(this.Semester);
        if (this.Semester === 1) {
            this.semesterName = "Summer";
        }
        else if (this.Semester === 2) {
            this.semesterName = "Fall";
        }
        else {
            this.semesterName = "Spring";
        }
        this.DateOptions = {
            // disableUntil : {day: 1, month: 1,year: this.academicYear},
            // disableSince : {day: 1, month: 1,year: this.academicYear+1},
            sunHighlight: true,
            dateFormat: 'dd/mm/yyyy',
        };
        this.modelBegin = { date: { year: this.academicYear, month: 1, day: 1 } };
        this.modelEnd = { date: { year: this.academicYear, month: 1, day: 1 } };
        this.beginDate = this.modelBegin.date.day + ":" + this.modelBegin.date.month + ":" + this.modelBegin.date.year;
    };
    TimetableComponent.prototype.onBeginDateChanged = function (event) {
        var _this = this;
        if (this.endDate === null) {
            this.beginDate = event.date.day + ":" + event.date.month + ":" + event.date.year;
        }
        else {
            this.beginDate = event.date.day + ":" + event.date.month + ":" + event.date.year;
            this.http.get(this.connectionLink.getConnection() + '/getTimeTable/' + this.studentCode + '&' + this.academicYear + '&' + this.Semester + '&' + this.beginDate + '&' + this.endDate, this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.timeTable = data;
                _this.dayOfWeek = _this.timeTable.dayOfWeek;
            });
            // this.timetableService.getTimetable(this.academicYear,this.Semester,this.studentCode,this.beginDate,this.endDate)
            // .then(data =>{this.timeTable = data;this.dayOfWeek=this.timeTable.dayOfWeek});
        }
    };
    TimetableComponent.prototype.onEndDateChanged = function (event) {
        var _this = this;
        //  console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.endDate = event.date.day + ":" + event.date.month + ":" + event.date.year;
        this.http.get(this.connectionLink.getConnection() + '/getTimeTable/' + this.studentCode + '&' + this.academicYear + '&' + this.Semester + '&' + this.beginDate + '&' + this.endDate, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.timeTable = data;
            _this.dayOfWeek = _this.timeTable.dayOfWeek;
        });
        // this.timetableService.getTimetable(this.academicYear,this.Semester,this.studentCode,this.beginDate,this.endDate)
        // .then(data =>{this.timeTable = data;this.dayOfWeek=this.timeTable.dayOfWeek});
    };
    return TimetableComponent;
}());
TimetableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-timetable',
        template: __webpack_require__("../../../../../src/app/timetable/timetable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timetable/timetable.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_service__["a" /* ConnectionService */]) === "function" && _d || Object])
], TimetableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=timetable.component.js.map

/***/ }),

/***/ "../../../../../src/app/transcript-hcc/transcript-hcc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table\r\n{\r\n    border-collapse: collapse;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid rgb(119, 119, 119);\r\n }\r\n\r\nthead\r\n{\r\n    background:rgb(187, 223, 253);\r\n}\r\nth\r\n{\r\n    text-align: center;  \r\n    height:2.5rem; \r\n}\r\n\r\ntr\r\n{\r\n    height:2rem\r\n}\r\n\r\ntd\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#loadingImg\r\n{\r\n    width:5%;\r\n    height:100%;\r\n}\r\n\r\n#hccImage\r\n{\r\n    width:90%;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .row\r\n    {\r\n        font-size:90%;\r\n    }\r\n    table\r\n    {\r\n        font-size:85%;\r\n    }\r\n    #hccImage\r\n    {\r\n        width:60%;\r\n        height:95%;\r\n        margin-left:20%;\r\n    }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transcript-hcc/transcript-hcc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b>HCC Workforce Transcript</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-4\">\r\n        <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <img id=\"loadingImg\" src=\"assets/img/loading.gif\" *ngIf=\"!showContent\" />\r\n        </div>\r\n        <ng-container *ngIf=\"showContent\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\" id=\"hccContainer\">\r\n              <img id=\"hccImage\" src=\"assets/img/hcc.jpg\" />\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">Student Name:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>{{currStudent.lastName}} {{currStudent.firstName}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">Student ID:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>{{currStudent.studentID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">PID:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>{{currStudent.hccsID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">EMPID:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>{{currStudent.hccsPID}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">Date of Birth:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>{{currStudent.dob}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">Institution:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>SAIGON INSTITUTE OF TECHNOLOGY</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">Degree:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>ASSOCIATE IN APPLIED SCIENCE</b>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">Catalog of Choice:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>{{additionInfo[0].catalog}}</b>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-5 col-sm-4 justify-content-start\">Specialization:</div>\r\n                <div class=\"col-7 col-sm-8 justify-content-start\" style=\"padding:-5px;\">\r\n                  <b>{{additionInfo[0].program}}</b>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-4\">\r\n            <table width=\"100%\" border=\"1\" cellspacing=\"1\" class=\"table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"5%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">No.</span>\r\n                  </th>\r\n                  <th width=\"12%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">Semester</span>\r\n                  </th>\r\n                  <th width=\"12%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">Course</span>\r\n                  </th>\r\n                  <th width=\"38%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">Description</span>\r\n                  </th>\r\n                  <th width=\"12%\" colspan=\"2\">\r\n                    <span class=\"text_white_bold\">Grade</span>\r\n                  </th>\r\n                  <th width=\"12%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">Credits Attempted</span>\r\n                  </th>\r\n                  <th width=\"12%\" rowspan=\"2\">\r\n                    <span class=\"text_white_bold\">Credits Earned</span>\r\n                  </th>\r\n                </tr>\r\n                <tr>\r\n                  <th>\r\n                    <span class=\"text_white_bold\">Letter</span>\r\n                  </th>\r\n                  <th>\r\n                    <span class=\"text_white_bold\">Point</span>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let item of hccTranscriptData; let i = index\">\r\n                  <ng-container *ngIf=\"canShowCheck(semesterInfo.semester, semesterInfo.acaYear,convertSemesterToNumber(item.semester_name),item.acaYear)\">\r\n                    <tr>\r\n                      <td>{{i+1}}</td>\r\n                      <td>{{item.semester_name}} {{item.acaYear}}</td>\r\n                      <td>{{item.subjectId}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{item.subjectName}}</td>\r\n                      <td>{{item.letter_mark}}</td>\r\n                      <td>{{item.grade}}</td>\r\n                      <td>{{item.credits}}</td>\r\n                      <td>{{item.credits_Earn}}</td>\r\n                    </tr>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"!canShowCheck(semesterInfo.semester, semesterInfo.acaYear,convertSemesterToNumber(item.semester_name),item.acaYear)\">\r\n                    <tr>\r\n                      <td>{{i+1}}</td>\r\n                      <td>{{item.semester_name}} {{item.acaYear}}</td>\r\n                      <td>{{item.subjectId}}</td>\r\n                      <td style=\"text-align:left;padding-left:4px;\">{{item.subjectName}}</td>\r\n                      <td></td>\r\n                      <td></td>\r\n                      <td>{{item.credits}}</td>\r\n                      <td></td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </ng-container>\r\n                <tr>\r\n                  <td colspan=\"4\" style=\"text-align: right; font-weight:bold;\">Workforce GPA:&nbsp;</td>\r\n                  <td colspan=\"4\" style=\"text-align: left; font-weight:bold;\">{{averageGPA[0].averageGPA}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/transcript-hcc/transcript-hcc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranscriptHccComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TranscriptHccComponent = (function () {
    function TranscriptHccComponent(cookie, loginService, http, semesterService, connectionLink) {
        this.cookie = cookie;
        this.loginService = loginService;
        this.http = http;
        this.semesterService = semesterService;
        this.connectionLink = connectionLink;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.yearArray = new Array(); //The array of year (beginning is 2001, end will be the current year + 5)
        this.showContent = false; //True, the data content will be shown, false, the loading gif will be shown
        //Initiate header (for security)
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TranscriptHccComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set navigation bar 
        $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
            '<a href="/TranscriptHCC" class="text-infor"> HCC Workforce Transcript</a>');
        //Get general data 
        this.http.get(this.serverLink + '/getHCCTranscriptGeneralInfo/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.additionInfo = data;
        });
        this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            //Load current semester's information
            _this.http.get(_this.serverLink + '/getSystemTimeREST/', _this.options).map(function (res) { return res.json(); })
                .subscribe(function (data2) {
                _this.semesterInfo = data2;
                //Set student's full name and a small photo in a sidebar 
                $("#stuFullName").text(_this.currStudent.lastName + " " + _this.currStudent.firstName);
                $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + _this.currStudent.image);
                //Get HCC transcript data 
                _this.http.get(_this.serverLink + '/getHCCTranscript/' + _this.cookie.get('loginID'), _this.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.hccTranscriptData = data;
                    //Get HCC transcript average GPA
                    _this.http.get(_this.serverLink + '/getHCCTranscriptAverageGPA/' + _this.currStudent.id + "&" + _this.semesterInfo.acaYear
                        + "&" + _this.semesterInfo.semester, _this.options).map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.averageGPA = data;
                        _this.showContent = true;
                    });
                });
            });
        });
    };
    //This method is used to convert the semester name to number. VD: SPRING => 4
    TranscriptHccComponent.prototype.convertSemesterToNumber = function (semester) {
        if (semester.toUpperCase() == 'SPRING')
            return 4;
        else if (semester.toUpperCase() == 'SUMMER')
            return 2;
        else if (semester.toUpperCase() == 'FALL')
            return 3;
        else
            return;
    };
    //Check if we can show grade and credit earn of a specific semester
    TranscriptHccComponent.prototype.canShowCheck = function (currSemester, currAcaYear, itemSemester, itemAcaYear) {
        if (Number(currAcaYear) > Number(itemAcaYear))
            return true;
        else if (Number(currSemester) != Number(itemSemester))
            return true;
        else
            return false;
    };
    return TranscriptHccComponent;
}());
TranscriptHccComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-transcript-hcc',
        template: __webpack_require__("../../../../../src/app/transcript-hcc/transcript-hcc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/transcript-hcc/transcript-hcc.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */], __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__connection_service__["a" /* ConnectionService */]) === "function" && _e || Object])
], TranscriptHccComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=transcript-hcc.component.js.map

/***/ }),

/***/ "../../../../../src/app/tuition-fee/tuition-fee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tuition-fee/tuition-fee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\" style=\"border-radius: 0.3rem\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\">\r\n          <b>Tuition Fee</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:2rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\" >\r\n            <div class=\"row flexrow justify-content-center\">\r\n              <table class=\"table table-bordered  table-responsive\" id=\"datatable\" width=\"100%\" style=\"border-radius: 0.5rem\">\r\n                <thead align=\"center\">\r\n                  <tr>\r\n                    <td colspan=\"7\" align=\"left\" height=\"30\"><strong style=\"margin-left: 0.5rem;color: dodgerblue\" >REGISTERED CLASSES</strong></td>\r\n                  </tr>\t\r\n                <tr align=\"center\">\r\n                    <td width=\"4%\" rowspan=\"2\"><b>No.</b></td>\r\n                    <td width=\"15%\" rowspan=\"2\"><b>Class Name</b></td>\r\n                    <td width=\"15%\" rowspan=\"2\"><b>Course Code</b></td>\r\n                    <td rowspan=\"2\"><b>Course Name</b></td>\r\n                    <td width=\"7%\" rowspan=\"2\"><b>Credits</b></td>\r\n                    <td width=\"30%\" colspan=\"2\"><b>Payable Amount</b></td>\r\n                </tr>\r\n                <tr align=\"center\">\r\n                    <td width='15%'><b><font face=\"Tahoma\" size=\"2\">USD</font></b></td>\r\n                    <td width=\"15%\"><b><font face=\"Tahoma\" size=\"2\">VND</font></b></td>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr  *ngFor=\"let tuition of tuitionFee; let i=index\">\r\n                    <td align=\"left\">{{i}}</td>\r\n                    <td align=\"left\">{{tuition.className}}</td>        \t\t\t\t\t\t\t\t\r\n                    <td align=\"left\">{{tuition.courseCode}}</td>\r\n                    <td align=\"left\">{{tuition.courseName}}</td> \t\t\t\r\n                    <td align=\"right\">{{tuition.Credit}}</td>\r\n                    <td align=\"right\">{{tuition.submitUSD}}</td>\r\n                    <td align=\"right\">{{tuition.submitVND}}</td>\r\n                </tr> \r\n                <tr align=\"right\">\r\n                  <td colspan=\"5\"><p style=\"color: rgb(23, 202, 23);font-size: 1.5rem\"><strong> Total tuition fee</strong></p></td>\r\n                  <td><b>{{tuitionUSDSubmit.toLocaleString('en-us', {minimumFractionDigits:0})}}</b></td>\r\n                  <td><b>{{tuitionVNDSubmit.toLocaleString('en-us', {minimumFractionDigits:0})}}</b></td>\r\n              </tr>                \r\n              </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12\" >\r\n            <div class=\"row flexrow justify-content-center\">\r\n              <table class=\"table table-bordered table-responsive\" id=\"datatable\" width=\"100%\" style=\"border-radius: 0.5rem\">\r\n                <thead align=\"center\">\r\n                  <tr>\r\n                    <td colspan=\"7\" align=\"left\" height=\"30\"><strong style=\"margin-left: 0.5rem;color: dodgerblue\" >DROPPED CLASSES</strong></td>\r\n                  </tr>\t\r\n                <tr align=\"center\">\r\n                    <td width=\"4%\" rowspan=\"2\"><b>No.</b></td>\r\n                    <td width=\"15%\" rowspan=\"2\"><b>Class Name</b></td>\r\n                    <td width=\"15%\" rowspan=\"2\"><b>Course Code</b></td>\r\n                    <td rowspan=\"2\"><b>Course Name</b></td>\r\n                    <td width=\"7%\" rowspan=\"2\"><b>Credits</b></td>\r\n                    <td width=\"30%\" colspan=\"2\"><b>Payable Amount</b></td>\r\n                </tr>\r\n                <tr align=\"center\">\r\n                    <td width='15%'><b><font face=\"Tahoma\" size=\"2\">USD</font></b></td>\r\n                    <td width=\"15%\"><b><font face=\"Tahoma\" size=\"2\">VND</font></b></td>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr  *ngFor=\"let drop of dropFee; let i=index\">\r\n                    <td align=\"left\">{{i}}</td>\r\n                    <td align=\"left\">{{drop.className}}</td>        \t\t\t\t\t\t\t\t\r\n                    <td align=\"left\">{{drop.courseCode}}</td>\r\n                    <td align=\"left\">{{drop.courseName}}</td> \t\t\t\r\n                    <td align=\"right\">{{drop.Credit}}</td>\r\n                    <td align=\"right\">{{drop.submitUSD}}</td>\r\n                    <td align=\"right\">{{drop.submitVND}}</td>\r\n                </tr> \r\n                <tr align=\"right\">\r\n                  <td colspan=\"5\"><p style=\"color: rgb(23, 202, 23);font-size: 1.5rem\"><strong> Total fee for classes dropping</strong></p></td>\r\n                  <td><b>{{dropUSDSubmit.toLocaleString('en-us', {minimumFractionDigits:0})}}</b></td>\r\n                  <td><b>{{dropVNDSubmit.toLocaleString('en-us', {minimumFractionDigits:0})}}</b></td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"8\"></td>\r\n                </tr>\t  \r\n                <tr>\r\n                    <td colspan=\"5\" height=\"30\" align=\"right\"><p style=\"font-size: 1rem\"><strong>Infrastructure Fee</strong></p></td>\r\n                    <td width='15%'>&nbsp;</td>\r\n                    <td width=\"15%\" align=\"right\">{{tuitionFee[0].infrastructureHccFee[0].toLocaleString('en-us', {minimumFractionDigits:0})}}</td>\r\n                </tr>\r\n                <tr height=\"30\">\r\n                    <td colspan=\"5\" align=\"right\"><p style=\"font-size: 1rem\"><strong>HCCS Fee</strong></p></td>\r\n                    <td align=\"right\">{{tuitionFee[0].infrastructureHccFee[1].toLocaleString('en-us', {minimumFractionDigits:0})}}</td>\r\n                    <td>&nbsp;</td>\r\n                </tr>\r\n                <tr height=\"30\">\r\n                    <td colspan=\"5\" align=\"right\"><p style=\"font-size: 1rem\"><strong>Opening Debt</strong></p></td>\r\n                    <td align=\"right\">{{tuitionFee[0].studentFee[0].toLocaleString('en-us', {minimumFractionDigits:0})}}</td>\r\n                    <td align=\"right\">{{tuitionFee[0].studentFee[1].toLocaleString('en-us', {minimumFractionDigits:0})}}</td>\r\n                </tr>\r\n                <tr valign=\"middle\" height=\"40\">\r\n                    <td colspan=\"5\" align=\"right\"><p style=\"color: rgba(23, 65, 204, 0.911);font-size: 1.2rem\"><strong>TOTAL PAYABLE AMOUNT</strong></p></td>\r\n                    <td align=\"right\">{{(tuitionFee[0].studentFee[0]+tuitionFee[0].studentFee[2]).toLocaleString('en-us', {minimumFractionDigits:0})}}</td>\r\n                    <td align=\"right\">{{(tuitionFee[0].studentFee[1]+tuitionFee[0].studentFee[3]).toLocaleString('en-us', {minimumFractionDigits:0})}}</td>\r\n                </tr>\r\n                  \r\n              </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tuition-fee/tuition-fee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TuitionFeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TuitionFeeComponent = (function () {
    function TuitionFeeComponent(cookie, router, http, connectionLink) {
        this.cookie = cookie;
        this.router = router;
        this.http = http;
        this.connectionLink = connectionLink;
        this.currStudent = null;
        this.currSemesterAndYear = null;
        this.serverLink = this.connectionLink.getConnection(); //The link of the server
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TuitionFeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tuitionUSDSubmit = 0.0;
        this.tuitionVNDSubmit = 0.0;
        this.dropUSDSubmit = 0.0;
        this.dropVNDSubmit = 0.0;
        this.studentCode = this.cookie.get('loginID');
        this.http.get(this.connectionLink.getConnection() + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.currStudent = data;
            var temp;
            _this.http.get(_this.connectionLink.getConnection() + '/getSystemTimeREST', _this.options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                temp = data;
                _this.Semester = temp.semester;
                _this.academicYear = temp.acaYear;
                _this.initialization();
            });
        }, function (err) {
            _this.cookie.delete('loginID');
            _this.cookie.delete('token');
            _this.router.navigate(['/Login']);
        });
    };
    TuitionFeeComponent.prototype.initialization = function () {
        var _this = this;
        this.http.get(this.connectionLink.getConnection() + '/getTuitionFee/' + this.studentCode + '&' + this.academicYear + '&' + this.Semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tuitionFee = data;
            _this.tuitionFeeTotal();
        });
        this.http.get(this.connectionLink.getConnection() + '/getDropFee/' + this.studentCode + '&' + this.academicYear + '&' + this.Semester, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.dropFee = data;
            _this.dropFeeTotal();
        });
        // this.tuitionFeeService.getTuitionFee(this.academicYear,this.Semester,this.studentCode)
        // .then(data =>{console.log(data);this.tuitionFee= data;this.tuitionFeeTotal()}); 
        // this.dropFeeService.getDropFee(this.academicYear,this.Semester,this.studentCode)
        // .then(data =>{ this.dropFee= data;this.dropFeeTotal()}); 
    };
    TuitionFeeComponent.prototype.tuitionFeeTotal = function () {
        for (var _i = 0, _a = this.tuitionFee; _i < _a.length; _i++) {
            var tu = _a[_i];
            this.tuitionUSDSubmit += tu.submitUSD;
            this.tuitionVNDSubmit += tu.submitVND;
            if (tu.submitUSD === 0) {
                tu.submitUSD = " ";
            }
            else {
                tu.submitUSD = (tu.submitUSD).toLocaleString('en-us', { minimumFractionDigits: 0 });
            }
            if (tu.submitVND === 0) {
                tu.submitVND = " ";
            }
            else {
                tu.submitVND = (tu.submitVND).toLocaleString('en-us', { minimumFractionDigits: 0 });
            }
        }
    };
    TuitionFeeComponent.prototype.dropFeeTotal = function () {
        for (var _i = 0, _a = this.dropFee; _i < _a.length; _i++) {
            var dr = _a[_i];
            this.dropUSDSubmit += dr.submitUSD;
            this.dropVNDSubmit += dr.submitVND;
            if (dr.submitUSD === 0) {
                dr.submitUSD = " ";
            }
            else {
                dr.submitUSD = (dr.submitUSD).toLocaleString('en-us', { minimumFractionDigits: 0 });
            }
            if (dr.submitVND === 0) {
                dr.submitVND = " ";
            }
            else {
                dr.submitVND = (dr.submitVND).toLocaleString('en-us', { minimumFractionDigits: 0 });
            }
        }
        console.log(this.tuitionUSDSubmit);
    };
    return TuitionFeeComponent;
}());
TuitionFeeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tuition-fee',
        template: __webpack_require__("../../../../../src/app/tuition-fee/tuition-fee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tuition-fee/tuition-fee.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]) === "function" && _d || Object])
], TuitionFeeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tuition-fee.component.js.map

/***/ }),

/***/ "../../../../../src/app/vn-registration/vn-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tableTitle\r\n{\r\n    color:white;\r\n    padding:7px;\r\n    font-weight:bold;\r\n    font-size:1rem;\r\n    border-radius: 10px;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass\r\n{\r\n    border-collapse: collapse;\r\n    border: 1px solid rgba(23, 26, 207, 0.473);\r\n}\r\n\r\n#classRegistered thead\r\n{\r\n    background: rgb(35,204,239);\r\n}\r\n\r\n#classRegistered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classPass th {\r\n    font-weight: bold;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n#classOffered thead\r\n{\r\n    background: rgb(251,64,75);\r\n}\r\n\r\n#classPass thead\r\n{\r\n    background: rgb(121,182,50);\r\n}\r\n\r\n\r\n\r\n#classRegistered,#classOffered,#classPass tbody tr td\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#classRegistered,#classOffered,#classPass tr\r\n{\r\n    height:25px;\r\n    vertical-align: center;\r\n}\r\n\r\na\r\n{\r\n    color:#1441e4 !important;\r\n}\r\n.card .table tbody td:last-child, .card .table thead th:last-child {\r\n    display: table-cell;\r\n}\r\n\r\n.timeTableModal{\r\n    font-size: 1.3rem;\r\n}\r\n.firstTTBRow{\r\n    background-color: rgb(176, 231, 235);\r\n    width: 15%;\r\n    text-align: center;\r\n}\r\n.contentTTBRow{\r\n    text-align: center;\r\n}\r\n#TTBModalLabel{\r\n    text-align: center;\r\n    color: red;\r\n    margin: 0 auto;\r\n}\r\n.modal-full{\r\n    max-width: 98% !important;\r\n    width:98% !important;\r\n    margin: 15px auto; \r\n}\r\n@media (max-width: 768px){\r\n    .modal-full{\r\n        margin:5px;\r\n    }\r\n}\r\n.modal-full .modal-content{\r\n    height: 100%;\r\n    height:auto;\r\n    border-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vn-registration/vn-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header \">\r\n        <h4 class=\"card-title\">\r\n          <b class=\"text-info\">VN Registration</b>\r\n        </h4>\r\n      </div>\r\n      <div class=\"card-body p-3\" style=\"padding:8rem;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Semester/Year:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.semesterYear}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Student Id:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.studentID}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Student Name:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.studentName}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Catalog:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.catalog}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">Specialization:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.specialization}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-center no-gutters\">\r\n              <div class=\"col d-flex \">ESL Level:\r\n                <span style=\"padding:-5px;\">\r\n                  <b *ngIf=\"currStudent != null\">{{currStudent.eslLevel}}</b>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexrow justify-content-start no-gutters\">\r\n              <div class=\"col d-flex\">\r\n                <a href=\"http://www.saigontech.edu.vn/thoi-khoa-bieu-bang-diem.html\" target=\"_blank\" style=\"font-weight:bold; text-decoration: underline; color:#1441e4\">Overall Timetable</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-7\">\r\n            <div class=\"text-danger \">\r\n              <p class=\"font-weight-bold\">Registration hotlines: 0932 172 334</p>\r\n            </div>\r\n            <div class=\"text-info \">\r\n              <p class=\"font-weight-bold\">\r\n                The registration period expired. Please come to see Ms. Ngoc Phuong for further request! </p>\r\n            </div>\r\n            <div class=\"text-danger \">\r\n              <p class=\"font-weight-bold\">Registration Time: 08:00 AM Jan 13, 2018 - 08:00 PM Jan 15, 2018</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <div class=\"row justify-content-start\">\r\n          <button class=\"btn btn-danger ml-5\" (click)=\"deleteClass()\">Delete</button>\r\n        </div>\r\n        <div class=\"row flexrow justify-content-center no-gutters\">\r\n          <h5 class=\"text-dark font-weight-bold\">CLASS(ES) REGISTERED</h5>\r\n          <div class=\"table-responsive\">\r\n          <table id=\"classRegistered\" class=\"table table-hover table-striped table-bordered mt-2\">\r\n            <thead>\r\n              <tr align=\"center\" style=\"height: 32px;\">\r\n                <th width=\"5%\">No</th>\r\n                <th width=\"5%\">Del.</th>\r\n                <th width=\"20%\">Class Code</th>\r\n                <th width=\"20%\">Course Code</th>\r\n                <th width=\"30%\">Course Name</th>\r\n                <th width=\"10%\">#/Max</th>\r\n                <th width=\"10%\">Timetable</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let classRegistered of vnClassregistered; let i = index\" bgcolor=\"#ffffff\">\r\n                <td>{{i+1}}</td>\r\n                <td>\r\n                  <input class=\"registeredChecked\" type=\"checkbox\" [value] = \"classRegistered.classCode+ '|' +classRegistered.studyCode\" (click)=\"testCheckbox($event);\">\r\n                </td>\r\n                <td>{{classRegistered.classID}}</td>\r\n                <td>{{classRegistered.subjectID}}</td>\r\n                <td>{{classRegistered.subjectName}}</td>\r\n                <td>{{classRegistered.total}}</td>\r\n                <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"showTimetable(classRegistered.classCode)\">Show</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-start mt-5\">\r\n          <button class=\"btn btn-success ml-5\" (click)=\"addClass()\">Add</button>\r\n        </div>\r\n        <div class=\"row flexrow justify-content-center no-gutters \">\r\n          <h5 class=\"text-dark font-weight-bold\">CLASS(ES) OFFERED</h5>\r\n          <div class=\"table-responsive\">\r\n          <table id=\"classOffered\" class=\"table table-hover table-striped table-bordered mt-2\">\r\n            <thead>\r\n              <tr align=\"center\" style=\"height: 32px;\">\r\n                <th width=\"5%\">No</th>\r\n                <th width=\"5%\">Del.</th>\r\n                <th width=\"20%\">Class Code</th>\r\n                <th width=\"20%\">Course Code</th>\r\n                <th width=\"30%\">Course Name</th>\r\n                <th width=\"10%\">#/Max</th>\r\n                <th width=\"10%\">Timetable</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let classOpened of vnClassavailable; let i = index\" bgcolor=\"#ffffff\">\r\n                <td>{{i+1}}</td>\r\n                <td>\r\n                  <input class=\"openedChecked\" type=\"checkbox\" [value]=\"classOpened.classCode\" (click)=\"testCheckbox($event);\">\r\n                </td>\r\n                <td>{{classOpened.classID}}</td>\r\n                <td>{{classOpened.courseCode}}</td>\r\n                <td>{{classOpened.courseName}}</td>\r\n                <td>{{classOpened.total}}</td>\r\n                <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"showTimetable(classOpened.classCode)\">Show</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n        </div>\r\n\r\n        \r\n        \r\n        \r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!---->\r\n\r\n  \r\n\r\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      \r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h2 class=\"modal-title\" id=\"exampleModalLabel\">TIMETABLE</h2>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <!-- <div class=\"col\">\r\n                  <p>Class:</p> \r\n                </div>\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">{{currTimetable.classCode}}</p>\r\n                </div> -->\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">\r\n                    <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                      <strong>Class: </strong>\r\n                    </span>\r\n                    {{currTimetable.classCode}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <p *ngIf=\"currTimetable != null\">\r\n                      <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                        <strong>Semester / Year: </strong>\r\n                      </span>\r\n                      {{currTimetable.semesterYear}}\r\n                    </p>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                <!-- <div class=\"col\">\r\n                  <p>Course Name:</p> \r\n                </div>\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">{{currTimetable.className}}</p>\r\n                </div> -->\r\n                <div class=\"col\">\r\n                  <p *ngIf=\"currTimetable != null\">\r\n                    <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                      <strong>Course Name: </strong>\r\n                    </span>\r\n                    {{currTimetable.className}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <p *ngIf=\"currTimetable != null\">\r\n                      <span class=\"text-info\" style=\"font-size: 1.2rem\">\r\n                        <strong>Instructor Name: </strong>\r\n                      </span>\r\n                      {{currTimetable.instructorName}}\r\n                    </p>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                  <!-- <div class=\"table-responsive\"  *ngIf=\"currTimetable != null\">\r\n                    <table class=\"table-bordered\">\r\n                      <tr  *ngFor=\"let r of currTimetable.timetableMatrix\">\r\n                        <td *ngFor=\"let c of r\">{{c}}</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div> -->\r\n                  <div class=\"table-responsive\"  *ngIf=\"currTimetable != null\">\r\n                    <table class=\"table-bordered table-striped\">\r\n                      <tr  *ngFor=\"let r of currTimetable.timetableMatrix; let i=index\">\r\n                        <ng-container *ngIf = \"i==0\">\r\n                          <ng-container *ngFor=\"let c of r; let j = index\">\r\n                            <td *ngIf =\"j>0\" [innerHtml]=\"c\" class=\"firstTTBRow\"></td>\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf = \"i>0\">\r\n                          <ng-container *ngFor=\"let c of r; let j = index\">\r\n                            <td *ngIf =\"j>0\" [innerHtml]=\"c\" class=\"contentTTBRow\"></td>\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vn-registration/vn-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VnRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_infofor_registration_service__ = __webpack_require__("../../../../../src/app/student-infofor-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__semester_info_service__ = __webpack_require__("../../../../../src/app/semester-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vnclass_service_service__ = __webpack_require__("../../../../../src/app/vnclass-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timetable_service__ = __webpack_require__("../../../../../src/app/timetable.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VnRegistrationComponent = (function () {
    function VnRegistrationComponent(studentInfoservice, cookie, semesterService, VNClassService, TimetableService) {
        this.studentInfoservice = studentInfoservice;
        this.cookie = cookie;
        this.semesterService = semesterService;
        this.VNClassService = VNClassService;
        this.TimetableService = TimetableService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        //console.log(this.options);
    }
    VnRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currStudentID = this.cookie.get('loginID');
        this.studentInfoservice.getStudentinfoforRegistration(this.cookie.get('loginID'))
            .then(function (data) {
            _this.currStudent = data;
            console.log(_this.currStudent);
            $("#stuFullName").text(_this.currStudent.studentName);
        });
        this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
            .then(function (data) {
            console.log(data);
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
        });
        this.semesterService.getSemesterInformation()
            .then(function (data) {
            console.log(data);
            _this.currSemester = data;
            _this.VNClassService.getVNClassRegistered(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                .then(function (data1) {
                _this.vnClassregistered = data1;
            });
            _this.VNClassService.getVNClassAvailable(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                .then(function (data2) {
                _this.vnClassavailable = data2;
            });
        });
    };
    VnRegistrationComponent.prototype.addClass = function () {
        var _this = this;
        var checkedOpenclassCodearr = [];
        $(".openedChecked:checked").each(function () {
            checkedOpenclassCodearr.push($(this).val());
        });
        console.log(checkedOpenclassCodearr);
        var openedClassstring = "";
        for (var _i = 0, checkedOpenclassCodearr_1 = checkedOpenclassCodearr; _i < checkedOpenclassCodearr_1.length; _i++) {
            var cl1 = checkedOpenclassCodearr_1[_i];
            openedClassstring += cl1 + ",";
        }
        console.log(openedClassstring);
        this.VNClassService.addVnclass(this.currStudentID, this.currSemester.acaYear, this.currSemester.semester, openedClassstring);
        setTimeout(function () {
            _this.semesterService.getSemesterInformation()
                .then(function (data) {
                _this.currSemester = data;
                _this.VNClassService.getVNClassRegistered(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data1) {
                    _this.vnClassregistered = data1;
                });
                _this.VNClassService.getVNClassAvailable(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data2) {
                    _this.vnClassavailable = data2;
                });
            });
        }, 1000);
    };
    VnRegistrationComponent.prototype.testCheckbox = function (event) {
        console.log(event.target.value);
    };
    VnRegistrationComponent.prototype.deleteClass = function () {
        var _this = this;
        var ClassCodeandStudyCode = [];
        $(".registeredChecked:checked").each(function () {
            ClassCodeandStudyCode.push($(this).val());
        });
        var classCode = [];
        var studyCode = [];
        for (var _i = 0, ClassCodeandStudyCode_1 = ClassCodeandStudyCode; _i < ClassCodeandStudyCode_1.length; _i++) {
            var cl = ClassCodeandStudyCode_1[_i];
            var temp = cl;
            classCode.push(temp.split('|')[0]);
            studyCode.push(temp.split('|')[1]);
        }
        var classCodestring = "";
        var studyCodestring = "";
        for (var i = 0; i < classCode.length; i++) {
            classCodestring += classCode[i] + ",";
            studyCodestring += studyCode[i] + ",";
        }
        this.VNClassService.deleteVnclass(this.currStudentID, this.currSemester.acaYear, this.currSemester.semester, classCodestring, studyCodestring);
        setTimeout(function () {
            _this.semesterService.getSemesterInformation()
                .then(function (data) {
                _this.currSemester = data;
                _this.VNClassService.getVNClassRegistered(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data1) {
                    _this.vnClassregistered = data1;
                });
                _this.VNClassService.getVNClassAvailable(_this.currStudentID, _this.currSemester.acaYear, _this.currSemester.semester)
                    .then(function (data2) {
                    _this.vnClassavailable = data2;
                });
            });
        }, 1000);
    };
    VnRegistrationComponent.prototype.showTimetable = function (classCode) {
        var _this = this;
        this.TimetableService.getTimetableRegis(classCode, this.currSemester.acaYear, this.currSemester.semester)
            .then(function (data) {
            _this.currTimetable = data;
            console.log(_this.currTimetable.timetableMatrix);
        });
        setTimeout(function () {
            $('.bd-example-modal-lg').modal();
        }, 200);
    };
    return VnRegistrationComponent;
}());
VnRegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vn-registration',
        template: __webpack_require__("../../../../../src/app/vn-registration/vn-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vn-registration/vn-registration.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_7__timetable_service__["a" /* TimetableService */], __WEBPACK_IMPORTED_MODULE_6__connection_service__["a" /* ConnectionService */], __WEBPACK_IMPORTED_MODULE_5__vnclass_service_service__["a" /* VnclassServiceService */], __WEBPACK_IMPORTED_MODULE_2__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__student_infofor_registration_service__["a" /* StudentInfoforRegistrationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__semester_info_service__["a" /* SemesterInformationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__vnclass_service_service__["a" /* VnclassServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__vnclass_service_service__["a" /* VnclassServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__timetable_service__["a" /* TimetableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__timetable_service__["a" /* TimetableService */]) === "function" && _e || Object])
], VnRegistrationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=vn-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/vnclass-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VnclassServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_service__ = __webpack_require__("../../../../../src/app/connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VnclassServiceService = (function () {
    function VnclassServiceService(http, connectionLink, cookie) {
        this.http = http;
        this.connectionLink = connectionLink;
        this.cookie = cookie;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    VnclassServiceService.prototype.getVNClassAvailable = function (studentCode, year, semester) {
        return this.http.get(this.connectionLink.getConnection() + '/getVNclassAvailableREST/' + studentCode + '&' + year + '&' + semester, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    VnclassServiceService.prototype.getVNClassRegistered = function (studentCode, year, semester) {
        console.log(studentCode);
        return this.http.get(this.connectionLink.getConnection() + '/getVNclassRegisteredREST/' + studentCode + '&' + year + '&' + semester, this.options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson; });
    };
    VnclassServiceService.prototype.addVnclass = function (studentID, acaYear, Semester, checkedCodes) {
        var classObject = {
            studentCode: studentID,
            acaYear: acaYear,
            Semester: Semester,
            ipAddress: "123",
            classCodeOpen: checkedCodes
        };
        $.ajax({
            type: "POST",
            url: this.connectionLink.getConnection() + "/insertVncourseREST",
            data: classObject,
            headers: {
                'Authorization': 'Bearer ' + this.cookie.get('token')
            },
            dataType: "text",
            success: function (response) {
                var notification0 = new PNotify({
                    title: 'Notification: ',
                    text: response
                });
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
    VnclassServiceService.prototype.deleteVnclass = function (studentID, acaYear, Semester, classCodes, studyCodes) {
        var classObject = {
            studentCode: studentID,
            acaYear: acaYear,
            Semester: Semester,
            ipAddress: "123",
            classCodes: classCodes,
            studyCodes: studyCodes
        };
        $.ajax({
            type: "POST",
            url: this.connectionLink.getConnection() + "/deleteVncourseREST",
            data: classObject,
            headers: {
                'Authorization': 'Bearer ' + this.cookie.get('token')
            },
            dataType: "text",
            success: function (response) {
                var notification0 = new PNotify({
                    title: 'Notification: ',
                    text: response
                });
            },
            error: function (data) {
                console.log(data);
            }
        });
    };
    return VnclassServiceService;
}());
VnclassServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__connection_service__["a" /* ConnectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], VnclassServiceService);

var _a, _b, _c;
//# sourceMappingURL=vnclass-service.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map