(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app.routes.ts":
/*!***************************!*\
  !*** ./src/app.routes.ts ***!
  \***************************/
/*! exports provided: app_routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app_routes", function() { return app_routes; });
/* harmony import */ var _app_trips_trips_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/trips/trips.component */ "./src/app/trips/trips.component.ts");
/* harmony import */ var _app_create_route_create_route_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/create-route/create-route.component */ "./src/app/create-route/create-route.component.ts");


var app_routes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'create-route' },
    { path: 'create-route', component: _app_create_route_create_route_component__WEBPACK_IMPORTED_MODULE_1__["CreateRouteComponent"] },
    { path: 'trips', component: _app_trips_trips_component__WEBPACK_IMPORTED_MODULE_0__["TripsComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<aside>\n  <nav>\n    <ul>\n      <li (click)=\"toggleFindModal()\" [ngClass]=\"{'active' : findModal=='show'}\"><i class=\"fas fa-search\"></i></li>\n      <li [routerLink]=\"['/create-route']\" routerLinkActive=\"active-link\"><i class=\"fa fa-route\"></i></li>\n      <li [routerLink]=\"['/trips']\" routerLinkActive=\"active-link\"><i class=\"far fa-map\"></i></li>\n    </ul>\n  </nav>\n</aside>\n<main>\n  <router-outlet></router-outlet>\n  <app-map [findPlaceModal]='findModal'></app-map>\n  <app-waiting-modal></app-waiting-modal>\n  <!-- <app-tutorial></app-tutorial> -->\n</main>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  position: absolute;\n  left: 0;\n  z-index: 99;\n  height: 100%;\n  background-color: #272235; }\n  aside ul {\n    margin: 0;\n    padding: 0; }\n  aside ul li {\n      padding: 15px;\n      cursor: pointer; }\n  aside ul li.active {\n        background-color: #494064 !important; }\n  aside ul li i {\n        color: #6e6e6e;\n        font-size: 15px; }\n  aside ul li:focus {\n        outline: none; }\n  aside ul li:after {\n        color: whitesmoke;\n        font-size: 11px;\n        font-weight: bold;\n        position: absolute;\n        padding: 10px 15px;\n        left: 50px;\n        background-color: rgba(0, 0, 0, 0.6);\n        z-index: 2;\n        width: -webkit-max-content;\n        width: -moz-max-content;\n        width: max-content; }\n  aside ul li:nth-child(1) {\n        background-color: #3e3654;\n        transition: all ease-in-out 0.4s; }\n  aside ul li:nth-child(2):hover:after {\n        content: \"NOWA TRASA\"; }\n  aside ul li:nth-child(3):hover:after {\n        content: \"TRASY TURYSTYCZNE\"; }\n  .active-link {\n  background-color: #1c1825;\n  border-left: solid 1px #1b9fe6; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.findModal = 'hide';
    }
    AppComponent.prototype.toggleFindModal = function () {
        this.findModal = (this.findModal === 'hide' ? 'show' : 'hide');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _create_route_create_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-route/create-route.component */ "./src/app/create-route/create-route.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.routes */ "./src/app.routes.ts");
/* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trips/trips.component */ "./src/app/trips/trips.component.ts");
/* harmony import */ var _waiting_modal_waiting_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./waiting-modal/waiting-modal.component */ "./src/app/waiting-modal/waiting-modal.component.ts");
/* harmony import */ var promise_prototype_finally__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! promise.prototype.finally */ "./node_modules/promise.prototype.finally/index.js");
/* harmony import */ var promise_prototype_finally__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(promise_prototype_finally__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














Object(promise_prototype_finally__WEBPACK_IMPORTED_MODULE_11__["shim"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
                _create_route_create_route_component__WEBPACK_IMPORTED_MODULE_6__["CreateRouteComponent"],
                _trips_trips_component__WEBPACK_IMPORTED_MODULE_9__["TripsComponent"],
                _waiting_modal_waiting_modal_component__WEBPACK_IMPORTED_MODULE_10__["WaitingModalComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_13__["TutorialComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["app_routes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-route/create-route.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-route/create-route.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"create-panel\">\r\n  <div id=\"distance\" *ngIf=\"coordinates?.length>1\">Długość trasy: <span>{{ distance | number : '1.2-2'}}km</span></div>\r\n  <ul>\r\n    <li *ngIf=\"!coordinates || coordinates.length==0\">\r\n        <div class=\"step_address\">Zacznij rysować trasę!</div>\r\n    </li>\r\n    <li *ngFor=\"let coordinate of coordinates; let i = index\">\r\n      <div class=\"step_address\">{{coordinate?.address}}</div>\r\n      <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n      <div class=\"step_address\">{{coordinates[i+1]?.address}}</div>\r\n    </li>\r\n  </ul>\r\n  <div id=\"button-wrapper\">\r\n    <button type='button' *ngIf=\"coordinates?.length>0\" id=\"undo\" (click)=\"removeLast()\"><i class=\"fas fa-undo\"></i></button>\r\n    <button type='button' *ngIf=\"coordinates?.length>0\" id=\"delete\" (click)=\"deleteAll()\"><i class=\"fas fa-trash\"></i></button>\r\n    <button type='button' *ngIf=\"coordinates?.length>1\" id=\"save\" (click)=\"saveTrip()\">Zapisz jako trasa turystyczna</button>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"create-panel markers\">\r\n  <ul>\r\n    <li *ngFor=\"let marker of markers; let i = index\" class=\"marker\">\r\n      <div class=\"step_address\">{{marker?.title}}</div><i (click)=\"deleteMarker(i)\" class=\"fas fa-times delete-marker\"></i>\r\n    </li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/create-route/create-route.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/create-route/create-route.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-panel {\n  border-radius: 5px;\n  position: absolute;\n  top: 30px;\n  left: 100px;\n  z-index: 1; }\n  .create-panel.markers {\n    right: 20px;\n    left: auto; }\n  .create-panel #distance {\n    font-size: 13px;\n    background-color: whitesmoke;\n    padding: 15px;\n    margin-bottom: 20px; }\n  .create-panel #distance span {\n      color: #4e3693;\n      font-weight: 600; }\n  .create-panel ul {\n    width: 400px;\n    box-shadow: 0 0 9px 0px rgba(0, 0, 0, 0.75);\n    background-color: whitesmoke;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    margin-bottom: 20px;\n    max-height: 400px;\n    overflow-y: auto; }\n  .create-panel ul li {\n      border-bottom: solid 1px #e0e0e0;\n      font-size: 13px; }\n  .create-panel ul li.marker {\n        border: none; }\n  .create-panel ul li i {\n        color: #4ee809; }\n  .create-panel ul li .step_nr {\n        background-color: #dcdbdb; }\n  .create-panel ul li .delete-marker {\n        float: right;\n        padding: 17px;\n        color: whitesmoke;\n        background-color: #ff4d4d;\n        cursor: pointer; }\n  .create-panel ul li .delete-marker:hover {\n          background-color: #ff8080; }\n  .create-panel ul li .step_nr, .create-panel ul li .step_address {\n        padding: 15px;\n        display: inline-block; }\n  .create-panel #button-wrapper {\n    display: flex; }\n  .create-panel #button-wrapper #undo, .create-panel #button-wrapper #delete, .create-panel #button-wrapper #save {\n      padding: 15px 25px;\n      border: none;\n      cursor: pointer; }\n  .create-panel #button-wrapper #save {\n      flex: 1;\n      margin-left: 20px;\n      background-color: #00ba6a;\n      color: whitesmoke;\n      font-weight: 500; }\n  .create-panel #button-wrapper #delete {\n      background-color: #ff4d4d;\n      cursor: pointer;\n      color: #dddddd; }\n"

/***/ }),

/***/ "./src/app/create-route/create-route.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-route/create-route.component.ts ***!
  \********************************************************/
/*! exports provided: CreateRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRouteComponent", function() { return CreateRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/map-api.service */ "./src/app/services/map-api.service.ts");
/* harmony import */ var _services_waiting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/waiting.service */ "./src/app/services/waiting.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRouteComponent = /** @class */ (function () {
    function CreateRouteComponent(mapService, waitingService, zone) {
        this.mapService = mapService;
        this.waitingService = waitingService;
        this.zone = zone;
    }
    CreateRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.setPaintStatus(true);
        this.mapService.getMap().subscribe(function (map) {
            _this.coordinates = map;
            _this.distance = _this.mapService.getDistance(_this.coordinates);
            _this.zone.run(function () { });
        });
        this.mapService.getMarkers().subscribe(function (markers) {
            _this.markers = markers;
            _this.zone.run(function () { });
        });
    };
    CreateRouteComponent.prototype.ngOnDestroy = function () {
        this.mapService.refreshMap([]);
        this.mapService.refreshMarkers([]);
    };
    CreateRouteComponent.prototype.removeLast = function () {
        this.mapService.removeLast();
    };
    CreateRouteComponent.prototype.deleteAll = function () {
        this.mapService.deleteAll();
    };
    CreateRouteComponent.prototype.deleteMarker = function (index) {
        this.mapService.deleteMarker(index);
    };
    CreateRouteComponent.prototype.saveTrip = function () {
        var _this = this;
        this.waitingService.setModalStatus(true);
        this.mapService.saveTrip(this.coordinates, this.markers).then(function (trip) {
            _this.waitingService.setInfoStatus(true, 'Poprawnie dodano trasę');
        }).catch(function (err) {
            _this.waitingService.setInfoStatus(true, err);
        }).finally(function () {
            _this.waitingService.setModalStatus(false);
        });
    };
    CreateRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-route',
            template: __webpack_require__(/*! ./create-route.component.html */ "./src/app/create-route/create-route.component.html"),
            styles: [__webpack_require__(/*! ./create-route.component.scss */ "./src/app/create-route/create-route.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_map_api_service__WEBPACK_IMPORTED_MODULE_1__["MapApiService"], _services_waiting_service__WEBPACK_IMPORTED_MODULE_2__["WaitingService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CreateRouteComponent);
    return CreateRouteComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #gmap id=\"map\"></div>\n\n<form [@openClose]=\"findPlaceModal\" (ngSubmit)=\"findPlace()\" id=\"findPlace\">\n  <input  [(ngModel)]=\"cityname\" name=\"cityname\" type=\"text\" placeholder=\"Wpisz nazwę miasta\" required/>\n  <button type=\"submit\"><i class=\"fas fa-play\"></i></button>\n  <ul >\n    <li *ngFor=\"let city of cities\" (click)=\"selectPlace(city)\" >{{city.address.municipality}}</li>\n  </ul>\n</form>\n<section  *ngIf=\"marker_modal\" id=\"marker-modal\">\n  <form>\n    <div>\n      <input [(ngModel)]=\"marker_info.title\" name=\"mark_name\" value=\"Tytuł markera\" />\n      <textarea [(ngModel)]=\"marker_info.description\" name=\"mark_description\" rows=\"10\">Przykładowy tekst blabla</textarea>\n    </div>\n    <div class=\"button-wrapper\">\n      <button type='button' (click)=\"marker_modal=false\" id=\"marker-cancel\">ANULUJ</button>\n      <button type='button' (click)=\"addMarker()\" id=\"marker-accept\">ZATWIERDŹ</button>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%;\n  position: initial !important;\n  overflow: hidden !important; }\n\n#marker-modal {\n  position: absolute;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n#marker-modal form {\n    background-color: white;\n    width: 600px;\n    margin: 0 auto;\n    margin-top: 50px;\n    padding: 25px 20px;\n    font-size: 13px; }\n\n#marker-modal form .button-wrapper {\n      margin-bottom: -25px;\n      margin-right: -20px;\n      margin-left: -20px; }\n\n#marker-modal form .button-wrapper button {\n        padding: 15px;\n        width: 50%;\n        border: none;\n        background-color: none;\n        font-weight: 600;\n        cursor: pointer; }\n\n#marker-modal form .button-wrapper button#marker-cancel {\n          background-color: whitesmoke;\n          color: gray; }\n\n#marker-modal form .button-wrapper button#marker-accept {\n          background-color: #00ba6a;\n          color: whitesmoke; }\n\n#marker-modal form input, #marker-modal form textarea {\n      color: gray;\n      padding: 7px 3px;\n      width: 100%;\n      border: none; }\n\n#marker-modal form input:focus, #marker-modal form textarea:focus {\n        outline: none; }\n\n#marker-modal form input {\n      font-size: 22px; }\n\n#findPlace {\n  height: 100%;\n  background-color: whitesmoke;\n  border-top: none;\n  top: 0px;\n  position: absolute;\n  z-index: 2; }\n\n#findPlace input {\n    padding: 18px 10px;\n    width: 300px;\n    border: none; }\n\n#findPlace button {\n    padding: 18px 35px;\n    border: none; }\n\n#findPlace button i {\n      color: #272235; }\n\n#findPlace button:hover {\n      opacity: 0.9;\n      cursor: pointer; }\n\n#findPlace ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow-y: auto; }\n\n#findPlace ul li {\n      font-size: 13px;\n      padding: 15px 10px;\n      background-color: whitesmoke; }\n\n#findPlace ul li:hover {\n        background-color: #dcdbdb;\n        cursor: pointer; }\n\n#expand-list {\n  padding: 15px 15px !important;\n  background-color: #272235;\n  border: 1px solid #272235 !important;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _services_waiting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/waiting.service */ "./src/app/services/waiting.service.ts");
/* harmony import */ var _services_map_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/map-api.service */ "./src/app/services/map-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function MapComponent(mapService, ngzone, waitingService) {
        this.mapService = mapService;
        this.ngzone = ngzone;
        this.waitingService = waitingService;
        this.marker_modal = false;
        this.marker_info = this.setMarker();
        this.all_markers = [];
        this.new_route_coordinates = [];
        this.new_route_markers = [];
        this.findPlaceModal = 'show';
    }
    MapComponent.prototype.toggleFindPlaceModal = function () {
        console.log(this.findPlaceModal);
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var mapProp = {
            center: new google.maps.LatLng(51.092289, 17.039216),
            zoom: 15,
            fullscreenControl: false,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var flightPath = new google.maps.Polyline({
            path: this.new_route_coordinates,
            geodesic: true,
            strokeColor: '#4e3693',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });
        this.mapService.getPaintStatus().subscribe(function (route) {
            _this.paint_status = route;
        });
        this.mapService.getMapCenter().subscribe(function (mapcenter) {
            _this.map.setCenter(mapcenter);
            _this.map.setZoom(15);
        });
        this.mapService.getMap().subscribe(function (mapx) {
            if (_this.start_marker) {
                _this.start_marker.setMap(null);
            }
            ;
            _this.new_route_coordinates = mapx;
            if (_this.new_route_coordinates.length > 0) {
                _this.start_marker = new google.maps.Marker({
                    position: { lat: _this.new_route_coordinates[0].lat, lng: _this.new_route_coordinates[0].lng },
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                });
            }
            flightPath.setPath(_this.new_route_coordinates);
            flightPath.setMap(_this.map);
        });
        this.mapService.getMarkers().subscribe(function (markersx) {
            _this.all_markers.forEach(function (elem) {
                elem.setMap(null);
            });
            _this.new_route_markers = markersx;
            _this.new_route_markers.forEach(function (elem) {
                var marker = new google.maps.Marker({
                    position: { lat: elem.lat, lng: elem.lng },
                    map: _this.map
                });
                _this.all_markers.push(marker);
                var contentString = "<div id=\"content\">\n        <div id=\"siteNotice\">\n        </div>\n        <h1 id=\"firstHeading\" class=\"firstHeading\">" + elem.title + "</h1>\n        <div id=\"bodyContent\">\n        <p>" + elem.description + "</p>\n        </div>\n        </div>";
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                marker.addListener('click', function () {
                    infowindow.open(_this.map, marker);
                });
            });
        });
        google.maps.event.addListener(this.map, 'click', function (event) {
            if (_this.paint_status) {
                var myLatLng = event.latLng;
                var new_geo_1 = { lat: myLatLng.lat(), lng: myLatLng.lng(), address: undefined };
                _this.mapService.getAddress(new_geo_1).subscribe(function (result) {
                    new_geo_1.address = result.addresses[0].address.streetNameAndNumber || result.addresses[0].address.street || 'brak adresu';
                    _this.mapService.updateMap(new_geo_1);
                    flightPath.setPath(_this.new_route_coordinates);
                    flightPath.setMap(_this.map);
                });
            }
        });
        google.maps.event.addListener(this.map, 'rightclick', function (event) {
            if (_this.paint_status) {
                _this.marker_modal = !_this.marker_modal;
                _this.ngzone.run(function () { });
                var myLatLng = event.latLng;
                var new_geo = { lat: myLatLng.lat(), lng: myLatLng.lng(), address: undefined };
                _this.marker_info.lat = new_geo.lat;
                _this.marker_info.lng = new_geo.lng;
            }
        });
    };
    MapComponent.prototype.setMarker = function () {
        return {
            title: 'Tytuł markera',
            description: 'Opis markera',
            lat: undefined,
            lng: undefined
        };
    };
    MapComponent.prototype.addMarker = function () {
        var _this = this;
        var new_marker = Object.assign({}, this.marker_info);
        this.mapService.updateMarkers(new_marker).then(function () {
            _this.marker_modal = !_this.marker_modal;
            _this.marker_info = _this.setMarker();
        }).catch(function (err) {
            _this.waitingService.setInfoStatus(true, err);
        });
    };
    MapComponent.prototype.findPlace = function () {
        var _this = this;
        this.waitingService.setModalStatus(true);
        this.mapService.getGeocode(this.cityname).subscribe(function (res) {
            _this.cities = res.results.filter(function (elem) { return elem.entityType === 'Municipality'; });
            _this.waitingService.setModalStatus(false);
            _this.findPlaceModal = 'show';
        }, function (err) {
            _this.waitingService.setModalStatus(false);
            _this.findPlaceModal = 'show';
        });
    };
    MapComponent.prototype.selectPlace = function (city) {
        console.log(city);
        this.mapService.changePlace(city.address.municipality);
        this.mapService.setMapCenter(new google.maps.LatLng(city.position.lat, city.position.lon));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "findPlaceModal", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-map',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'translateX(47px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'translateX(-452px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide <=> show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('350ms ease-in')),
                ]),
            ],
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_map_api_service__WEBPACK_IMPORTED_MODULE_1__["MapApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _services_waiting_service__WEBPACK_IMPORTED_MODULE_0__["WaitingService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.URL_DB = 'https://api.mlab.com/api/1/databases/tripideas/collections/trips';
    }
    HttpService.prototype.getTrips = function (city) {
        if (city) {
            this.param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apiKey', 'hIfSGD4Yl2MCQATpWMzlhMm5yaybuPc0').set('q', "{\"city\": \"" + city + "\"}");
        }
        else {
            this.param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apiKey', 'hIfSGD4Yl2MCQATpWMzlhMm5yaybuPc0');
        }
        return this.http.get(this.URL_DB, { params: this.param });
    };
    HttpService.prototype.saveTrip = function (trip) {
        this.param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apiKey', 'hIfSGD4Yl2MCQATpWMzlhMm5yaybuPc0');
        return this.http.post(this.URL_DB, trip, { params: this.param });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/map-api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/map-api.service.ts ***!
  \*********************************************/
/*! exports provided: MapApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapApiService", function() { return MapApiService; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapApiService = /** @class */ (function () {
    function MapApiService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
        this.$geo_tab = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.geo_tab = [];
        this.$paint_active = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.paint_active = true;
        this.$markers_tab = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.markers_tab = [];
        this.$current_place = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.current_place);
        this.$map_center = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.map_center = new google.maps.LatLng(51.092289, 17.039216);
    }
    MapApiService.prototype.getPaintStatus = function () {
        return this.$paint_active.asObservable();
    };
    MapApiService.prototype.setPaintStatus = function (status) {
        this.paint_active = status;
        this.$paint_active.next(this.paint_active);
    };
    MapApiService.prototype.getMapCenter = function () {
        return this.$map_center.asObservable();
    };
    MapApiService.prototype.setMapCenter = function (center) {
        this.map_center = center;
        this.$map_center.next(this.map_center);
    };
    MapApiService.prototype.updateMarkers = function (marker) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!marker.title || marker.title.length < 3) {
                return reject('Uzupełnij tytuł (minimum 3 znaków)');
            }
            else if (!marker.description || marker.description.length < 10) {
                return reject('Uzupełnij opis (minimum 10 znaków)');
            }
            else {
                _this.markers_tab.push(marker);
                _this.$markers_tab.next(_this.markers_tab);
                return resolve();
            }
        });
    };
    MapApiService.prototype.getMarkers = function () {
        return this.$markers_tab.asObservable();
    };
    MapApiService.prototype.deleteMarker = function (index) {
        this.markers_tab.splice(index, 1);
        this.$markers_tab.next(this.markers_tab);
    };
    MapApiService.prototype.updateMap = function (coordinates) {
        this.geo_tab.push(coordinates);
        this.$geo_tab.next(this.geo_tab);
    };
    MapApiService.prototype.refreshMap = function (coord_array) {
        this.geo_tab = coord_array;
        this.$geo_tab.next(this.geo_tab);
    };
    MapApiService.prototype.refreshMarkers = function (markers_array) {
        this.markers_tab = markers_array;
        this.$markers_tab.next(this.markers_tab);
    };
    MapApiService.prototype.getMap = function () {
        return this.$geo_tab.asObservable();
    };
    MapApiService.prototype.removeLast = function () {
        this.geo_tab.pop();
        this.$geo_tab.next(this.geo_tab);
    };
    MapApiService.prototype.deleteAll = function () {
        this.geo_tab = [];
        this.$geo_tab.next(this.geo_tab);
    };
    MapApiService.prototype.saveTrip = function (coords, markers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAddress(coords[0]).subscribe(function (result) {
                console.log(result);
                var city = result.addresses[0].address.municipality || 'Brak miasta';
                _this.httpService.saveTrip({ coords: coords, markers: markers, city: city, length: _this.getDistance(coords) }).subscribe(function (trip) {
                    resolve(trip);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    MapApiService.prototype.changePlace = function (city) {
        this.current_place = city;
        this.$current_place.next(this.current_place);
    };
    MapApiService.prototype.getCurrentPlace = function () {
        return this.$current_place.asObservable();
    };
    MapApiService.prototype.getAddress = function (geo) {
        // tslint:disable-next-line:max-line-length
        return this.http.get("https://api.tomtom.com/search/2/reverseGeocode/" + geo.lat + "," + geo.lng + ".JSON?key=lnFJTllYtD8wNkWMLDGOV9iKGfoKUR3f");
    };
    MapApiService.prototype.getGeocode = function (cityname) {
        // tslint:disable-next-line:max-line-length
        return this.http.get("https://api.tomtom.com/search/2/geocode/" + (cityname ? cityname : '%20') + ".JSON?key=lnFJTllYtD8wNkWMLDGOV9iKGfoKUR3f&language=pl-PL");
    };
    MapApiService.prototype.getDistance = function (points) {
        var total = 0;
        for (var i = 0; i <= points.length - 1; i++) {
            if (points[i + 1]) {
                // tslint:disable-next-line:max-line-length
                var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(points[i].lat, points[i].lng), new google.maps.LatLng(points[i + 1].lat, points[i + 1].lng));
                total += distance;
            }
        }
        return total / 1000;
    };
    MapApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]])
    ], MapApiService);
    return MapApiService;
}());



/***/ }),

/***/ "./src/app/services/waiting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/waiting.service.ts ***!
  \*********************************************/
/*! exports provided: WaitingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingService", function() { return WaitingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WaitingService = /** @class */ (function () {
    function WaitingService() {
        this.status = {
            modal: false,
            info: {
                show: false,
                text: '',
            }
        };
        this.$status = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    WaitingService.prototype.getStatus = function () {
        return this.$status.asObservable();
    };
    WaitingService.prototype.setModalStatus = function (status) {
        this.status.modal = status;
        this.$status.next(this.status);
    };
    WaitingService.prototype.setInfoStatus = function (status, text) {
        var _this = this;
        if (text === void 0) { text = ''; }
        this.status.info.show = status;
        this.status.info.text = text;
        this.$status.next(this.status);
        setTimeout(function () {
            _this.setInfoStatus(false);
        }, 3000);
    };
    WaitingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WaitingService);
    return WaitingService;
}());



/***/ }),

/***/ "./src/app/trips/trips.component.html":
/*!********************************************!*\
  !*** ./src/app/trips/trips.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"create-panel\">\n  <ul>\n    <li *ngIf=\"trips?.length==0\"><div class=\"step_address\" >Brak tras dla tego miasta</div></li>\n    <li *ngFor=\"let trip of trips; let i = index\" (click)=\"showOnMap(trip)\" [ngClass]=\"{'active' : trip.active}\">\n      <div class=\"step_address\" >{{trip?.city}}</div>\n      <div class=\"step_address\" >długość: {{trip?.length | number : '1.2-2'}}</div>\n    </li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/trips/trips.component.scss":
/*!********************************************!*\
  !*** ./src/app/trips/trips.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer; }\n\n.active {\n  color: #4e3693;\n  font-weight: 600;\n  background-color: #f0f0f0; }\n"

/***/ }),

/***/ "./src/app/trips/trips.component.ts":
/*!******************************************!*\
  !*** ./src/app/trips/trips.component.ts ***!
  \******************************************/
/*! exports provided: TripsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsComponent", function() { return TripsComponent; });
/* harmony import */ var _services_waiting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/waiting.service */ "./src/app/services/waiting.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map-api.service */ "./src/app/services/map-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripsComponent = /** @class */ (function () {
    function TripsComponent(mapService, httpService, waitingService) {
        this.mapService = mapService;
        this.httpService = httpService;
        this.waitingService = waitingService;
        this.first_try = true;
    }
    TripsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.setPaintStatus(false);
        this.waitingService.setModalStatus(true);
        this.mapService.getCurrentPlace().subscribe(function (city) {
            var city_go = _this.first_try ? city = '' : city;
            _this.first_try = false;
            _this.httpService.getTrips(city).subscribe(function (trips) {
                _this.trips = trips;
                _this.waitingService.setModalStatus(false);
            });
        });
    };
    TripsComponent.prototype.ngOnDestroy = function () {
        this.mapService.refreshMap([]);
        this.mapService.refreshMarkers([]);
    };
    TripsComponent.prototype.showOnMap = function (elem) {
        this.trips.forEach(function (elemx) {
            elemx.active = false;
        });
        elem.active = !elem.active;
        this.mapService.setMapCenter(new google.maps.LatLng(elem.coords[0].lat, elem.coords[0].lng));
        this.mapService.refreshMap(elem.coords);
        this.mapService.refreshMarkers(elem.markers || []);
    };
    TripsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(/*! ./trips.component.html */ "./src/app/trips/trips.component.html"),
            styles: [__webpack_require__(/*! ../create-route/create-route.component.scss */ "./src/app/create-route/create-route.component.scss"), __webpack_require__(/*! ./trips.component.scss */ "./src/app/trips/trips.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_map_api_service__WEBPACK_IMPORTED_MODULE_3__["MapApiService"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_waiting_service__WEBPACK_IMPORTED_MODULE_0__["WaitingService"]])
    ], TripsComponent);
    return TripsComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"tutorial\" *ngIf=\"showTutorial\">\n  <div id=\"content\">\n    <div class=\"slide\" *ngIf=\"currentSlide==1\">\n      <h1>Witaj w aplikacji!</h1>\n      <p>Aplikacja służy do udostępniania ciekawych tras wycieczkowych</p>\n      <p>Możesz również sprawdzić, jak długa była trasa, którą właśnie co przeszedłeś!</p>\n    </div>\n    <div class=\"slide\" *ngIf=\"currentSlide==2\">\n        <img src=\"./assets/rysowanko.png\">\n        <p>Zaznaczaj na mapie trasy!</p>\n        <p>Dodawaj znaczniki i je opisuj!</p>\n        <p>Jeśli masz sprawdzoną trasę wycieczkową, udostępnij ją!</p>\n    </div>\n    <div class=\"slide\" *ngIf=\"currentSlide==3\">\n      <img src=\"./assets/czytanko.png\">\n      <p>Wyszukuj w wybranych miastach tras wycieczkowych!</p>\n    </div>\n    <button (click)=\"cancel()\" *ngIf=\"currentSlide!=3\">POMIŃ</button>\n    <button (click)=\"nextSlide()\">{{currentSlide==3? 'ZAKOŃCZ' : 'DALEJ'}}</button>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tutorial {\n  position: absolute;\n  width: 100vw;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  background-color: rgba(0, 0, 0, 0.8); }\n  #tutorial #content {\n    width: 50%;\n    position: relative;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  #tutorial #content .slide {\n      color: gray;\n      background-color: whitesmoke;\n      text-align: center;\n      padding: 35px; }\n  #tutorial #content .slide p {\n        font-size: 14px;\n        margin: 5px; }\n  #tutorial #content img {\n      width: 100%; }\n  #tutorial #content button {\n      width: 50%;\n      padding: 15px;\n      border: none;\n      font-weight: 600;\n      color: whitesmoke; }\n  #tutorial #content button:hover {\n        cursor: pointer;\n        opacity: 0.9; }\n  #tutorial #content button:nth-child(2) {\n        background-color: #ff4d4d; }\n  #tutorial #content button:nth-child(3) {\n        background-color: #00ba6a; }\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.currentSlide = 1;
        this.showTutorial = true;
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.prototype.nextSlide = function () {
        this.currentSlide === 3 ? this.showTutorial = false : this.currentSlide++;
    };
    TutorialComponent.prototype.cancel = function () {
        this.showTutorial = false;
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/tutorial/tutorial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/waiting-modal/waiting-modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/waiting-modal/waiting-modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"waiting-modal\" *ngIf=\"show_modal\">\n  <img class=\"ldi\" src=\"assets/loading.svg\">\n</div>\n<div id=\"action-info\" *ngIf=\"show_info?.show\">{{show_info.text}}</div>\n"

/***/ }),

/***/ "./src/app/waiting-modal/waiting-modal.component.scss":
/*!************************************************************!*\
  !*** ./src/app/waiting-modal/waiting-modal.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#waiting-modal {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  position: absolute;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.7); }\n  #waiting-modal img {\n    top: 50%;\n    left: 50%;\n    position: relative;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  #action-info {\n  left: 50%;\n  top: 30px;\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  padding: 15px 50px;\n  background-color: #1b9fe6;\n  color: whitesmoke;\n  font-size: 14px;\n  font-weight: bold;\n  z-index: 1001; }\n"

/***/ }),

/***/ "./src/app/waiting-modal/waiting-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/waiting-modal/waiting-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: WaitingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingModalComponent", function() { return WaitingModalComponent; });
/* harmony import */ var _services_waiting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/waiting.service */ "./src/app/services/waiting.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WaitingModalComponent = /** @class */ (function () {
    function WaitingModalComponent(waitingService) {
        this.waitingService = waitingService;
    }
    WaitingModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.waitingService.getStatus().subscribe(function (status) {
            _this.show_modal = status.modal;
            _this.show_info = status.info;
        });
    };
    WaitingModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waiting-modal',
            template: __webpack_require__(/*! ./waiting-modal.component.html */ "./src/app/waiting-modal/waiting-modal.component.html"),
            styles: [__webpack_require__(/*! ./waiting-modal.component.scss */ "./src/app/waiting-modal/waiting-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_waiting_service__WEBPACK_IMPORTED_MODULE_0__["WaitingService"]])
    ], WaitingModalComponent);
    return WaitingModalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Konrad Dzień\Documents\dev\TripIdeas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map