"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var show_service_1 = require("./show.service");
var show_entity_1 = require("./show.entity");
var ShowEntityComponent = (function () {
    function ShowEntityComponent(service) {
        this.service = service;
    }
    return ShowEntityComponent;
}());
__decorate([
    core_1.Input('show'),
    __metadata("design:type", show_entity_1.Show)
], ShowEntityComponent.prototype, "ticket", void 0);
ShowEntityComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'showentity',
        templateUrl: 'show.html',
    }),
    __metadata("design:paramtypes", [show_service_1.ShowService])
], ShowEntityComponent);
exports.ShowEntityComponent = ShowEntityComponent;
//# sourceMappingURL=showentity.component.js.map