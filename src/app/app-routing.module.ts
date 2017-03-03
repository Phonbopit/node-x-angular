import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'heroes',
    component: HeroListComponent
  }, {
    path: 'heroes/:id',
    component: HeroComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
