/// <reference path="typings/angular2/angular2.d.ts" />
 
import {
  Component,
  View,
  bootstrap,
  NgFor,
  bind
} from 'angular2/angular2';
 
//importamos los componentes que necesitamos del router
import {
    Router,
    RouteConfig,
    RouterLink,
    RouterOutlet,
    routerInjectables,
    HashLocationStrategy,
    LocationStrategy,
    routerDirectives
} from 'angular2/router';
 
//importamos nuestros compoenentes
import { Home } from 'components/home/home';
import { Login } from 'components/login/login';
import { About } from 'components/about/about';
 
@Component({
    selector: 'app',
})
 
//añadimos las directivas RouterOutlet y RouterLink
@View({
    templateUrl: 'app.html',
    directives: [RouterOutlet, RouterLink]
})
 
//hacemos la configuración del router
@RouteConfig([
    { path: '/', as: 'home', component: Home },
    { path: '/login', as: 'login', component: Login },
    { path: '/about', as: 'about', component: About }
])
 
class App
{
    constructor()
    {
 
    }
}
 
//hacemos el bootstrap con el # en las urls /#/about
bootstrap(App, [routerInjectables, bind(LocationStrategy).toClass(HashLocationStrategy)]);
