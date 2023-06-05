"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InitComponent = void 0;
var core_1 = require("@angular/core");
var sitios_json_1 = require("./sitios.json");
var buffer_1 = require("buffer");
var InitComponent = /** @class */ (function () {
    function InitComponent(route, location, router, util, tipo, llave) {
        var _a, _b;
        this.route = route;
        this.router = router;
        this.util = util;
        this.tipo = tipo;
        this.llave = llave;
        this.texto = "";
        this.link = "";
        this.disable = false;
        this.count = 0;
        this.readyLink = false;
        this.hostin = "";
        this.showInferior = true;
        this.showSuperior = true;
        this.maximo = 15;
        this.cuando = false;
        this.hostsvalidos = "";
        this.nohay = false;
        this.ti = "";
        this.alterdata = "";
        this.altertipo = "";
        this.alterdata = (_a = this.route.snapshot.paramMap.get('data')) !== null && _a !== void 0 ? _a : "";
        this.altertipo = (_b = this.route.snapshot.paramMap.get('tipo')) !== null && _b !== void 0 ? _b : "";
        this.ti = util.getparameter('ti');
        this.link = util.getparameter('link');
        if (this.ti === "" && this.link === "") {
            this.link = this.alterdata;
            this.ti = this.altertipo;
        }
        if (this.ti === "" || this.ti == null) {
            this.link = buffer_1.Buffer.from(this.link, 'base64').toString();
            var host = void 0;
            var mandaron = void 0;
            try {
                host = new URL(this.link == null ? "" : this.link);
                mandaron = true;
            }
            catch (ex) {
                mandaron = false;
            }
            if (mandaron) {
                this.nohay = false;
                var hostlink = void 0;
                hostlink = host.hostname;
                var esta = void 0;
                esta = false;
                hostlink = hostlink.replace("www.", "");
                for (var i = 0; i < sitios_json_1["default"].lista.length; i++) {
                    if (sitios_json_1["default"].lista[i].host == hostlink) {
                        esta = true;
                    }
                }
                if (esta == false) {
                    this.link = "NO PERMITIDO";
                }
                else {
                    this.hostin = hostlink;
                }
                this.texto = "Entrar a link";
                tipo.image = "links";
                tipo.wid = "284";
                tipo.hei = "96";
            }
            else {
                tipo.image = "completo";
                this.nohay = true;
                window.location.href = "http://homecito.adsinfo.me";
            }
        }
        else if (this.ti === "2") {
            var data_1 = util.getparameter('data') === "" ? this.alterdata : util.getparameter('data');
            var ti = this.ti;
            if (llave.valid(data_1)) {
                this.texto = "Ver los datos";
                this.disable = false;
                this.hostin = "ver datos Sicoes";
                this.link = "/#/contratacion";
                tipo.setTipo(ti);
                tipo.setAux(data_1);
            }
            else {
                this.texto = "Datos no validos";
                this.disable = true;
                this.hostin = "DAtos no validos";
                this.link = "/#/error";
                tipo.setTipo("");
                tipo.setAux("");
            }
            tipo.image = "info";
            tipo.wid = "284";
            tipo.hei = "96";
        }
        else if (this.ti === "3") {
            var data_2 = util.getparameter('data') === "" ? this.alterdata : util.getparameter('data');
            var ti = this.ti;
            if (llave.valid(data_2)) {
                this.texto = "Ver los datos de las divisas";
                this.disable = false;
                this.hostin = "ver datos Divisas";
                this.link = "/#/tipos";
                tipo.setTipo(ti);
                tipo.setAux(data_2);
            }
            else {
                this.texto = "Datos no validos";
                this.disable = true;
                this.hostin = "Datos no validos";
                this.link = "/#/error";
                tipo.setTipo("");
                tipo.setAux("");
            }
            tipo.image = "tipos";
            tipo.wid = "284";
            tipo.hei = "96";
        }
        else if (this.ti === "4") {
            var data_3 = util.getparameter('data') === "" ? this.alterdata : util.getparameter('data');
            var ti = this.ti;
            if (llave.valid(data_3)) {
                this.texto = "Ver monitoreo";
                this.disable = false;
                this.hostin = "ver monitoreo de Sistemas";
                this.link = "/#/monitor";
                tipo.setTipo(ti);
                tipo.setAux(data_3);
            }
            else {
                this.texto = "Datos no validos";
                this.disable = true;
                this.hostin = "Datos no validos";
                this.link = "/#/error";
                tipo.setTipo("");
                tipo.setAux("");
            }
            tipo.image = "monitor";
            tipo.wid = "284";
            tipo.hei = "96";
        }
    }
    InitComponent.prototype.validos = function () {
        this.hostsvalidos = "";
        for (var i = 0; i < sitios_json_1["default"].lista.length; i++) {
            this.hostsvalidos = this.hostsvalidos + sitios_json_1["default"].lista[i].site + ",";
        }
        this.hostsvalidos.substring(0, this.hostsvalidos.length - 1);
    };
    InitComponent.prototype.click = function () {
        var _this = this;
        if (!this.readyLink) {
            this.disable = true;
            this.cuando = true;
            var intervalId = setInterval(function () {
                _this.count++;
                if (_this.count === _this.maximo) {
                    //clearInterval(intervalId);
                    _this.disable = false;
                    //this.count = 0;
                    _this.readyLink = true;
                    _this.texto = "Ir a " + _this.hostin;
                    _this.cuando = false;
                }
                if (_this.count % 5 == 0) {
                    _this.refreshDivs();
                }
            }, 1000);
        }
        else if (this.tipo.getTipo() == "2") {
            this.router.navigate(['/contratacion']);
        }
        else if (this.tipo.getTipo() == "3") {
            this.router.navigate(['/tipos']);
        }
        else if (this.tipo.getTipo() == "4") {
            this.router.navigate(['/monitor']);
        }
        else {
            window.location.href = this.link != null ? this.link : '';
        }
    };
    InitComponent.prototype.clicklink = function (link) {
        window.open(link, "_blank");
    };
    InitComponent.prototype.refreshDivs = function () {
        var _this = this;
        console.log("refrescando divs");
        this.showInferior = false;
        this.showSuperior = false;
        setTimeout(function () {
            _this.showInferior = true;
            _this.showSuperior = true;
        });
    };
    InitComponent.prototype.resto = function () {
        return this.maximo - this.count;
    };
    InitComponent = __decorate([
        core_1.Component({
            selector: 'app-init',
            templateUrl: './init.component.html',
            styleUrls: ['./init.component.scss']
        })
    ], InitComponent);
    return InitComponent;
}());
exports.InitComponent = InitComponent;
