/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
//importamos los componentes que necesitamos del router
var router_1 = require('angular2/router');
//importamos nuestros compoenentes
var home_1 = require('components/home/home');
var login_1 = require('components/login/login');
var about_1 = require('components/about/about');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            templateUrl: 'app.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'home', component: home_1.Home },
            { path: '/login', as: 'login', component: login_1.Login },
            { path: '/about', as: 'about', component: about_1.About }
        ])
    ], App);
    return App;
})();
//hacemos el bootstrap con el # en las urls /#/about
angular2_1.bootstrap(App, [router_1.routerInjectables, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
