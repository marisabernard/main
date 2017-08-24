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
var show_entity_1 = require("./show.entity");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ShowService = (function () {
    function ShowService(http) {
        this.http = http;
        this.shows = [];
    }
    ShowService.prototype.addNewShow = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var newShow = new show_entity_1.Show("0", 'New Show', 'Nobody', 'Enter show description here', 0);
        this.http
            .post('http://localhost:8091/api/show', JSON.stringify(newShow), headers)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.shows.push(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Updated Show'); });
    };
    ShowService.prototype.saveShow = function (show) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post('http://localhost:8091/api/show', JSON.stringify(show), headers)
            .map(function (res) { return res.json(); })
            .subscribe(null, function (err) { return _this.logError(err); }, function () { return console.log('Updated Show'); });
    };
    ShowService.prototype.deleteShow = function (show) {
        var _this = this;
        this.http
            .delete('http://localhost:8091/api/show/' + show._id)
            .map(function (res) { return res.text(); })
            .subscribe(function (data) {
            var midx = -1;
            _this.shows.forEach(function (t, idx) {
                if (t._id == show._id) {
                    midx = idx;
                }
            });
            _this.shows.splice(midx, 1);
        }, function (err) { return _this.logError(err); }, function () { return console.log('Request for all shows completed successfully'); });
    };
    ShowService.prototype.loadAllShows = function () {
        var _this = this;
        this.http
            .get('http://localhost:8091/api/show')
            .map(function (res) {
            return res.json();
        })
            .subscribe(function (data) {
            _this.shows = data;
        }, function (err) { return _this.logError(err); }, function () { return console.log("Loaded all shows"); });
    };
    ShowService.prototype.loadShowById = function (id) {
        var _this = this;
        this.http
            .get('http://localhost:8091/api/show/' + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.shows = [data]; }, function (err) { return _this.logError(err); }, function () { return console.log("Loaded show with id " + id); });
    };
    ShowService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    ShowService.prototype.loadShows = function () {
        return this.http.get('http://localhost:8091/api/show')
            .map(function (res) { return res.json(); });
    };
    return ShowService;
}());
ShowService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShowService);
exports.ShowService = ShowService;
//# sourceMappingURL=show.service.js.map