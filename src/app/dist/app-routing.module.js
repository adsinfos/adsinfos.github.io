"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contratacion_component_1 = require("./shared/contratacion/contratacion.component");
var init_component_1 = require("./shared/init/init.component");
var tipos_component_1 = require("./shared/tipos/tipos.component");
var monitor_component_1 = require("./shared/monitor/monitor.component");
var test_component_1 = require("./shared/test/test.component");
var routes = [
    { path: '', component: init_component_1.InitComponent },
    { path: 'contratacion', component: contratacion_component_1.ContratacionComponent },
    { path: 'tipos', component: tipos_component_1.TiposComponent },
    { path: 'monitor', component: monitor_component_1.MonitorComponent },
    { path: ':data', component: init_component_1.InitComponent },
    { path: ':data/:tipo', component: init_component_1.InitComponent },
    { path: 'test', component: test_component_1.TestComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    useHash: true
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
