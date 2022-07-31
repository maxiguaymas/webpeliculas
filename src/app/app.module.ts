import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PelisPageComponent } from './pages/pelis-page/pelis-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FormsModule } from '@angular/forms';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PelisPageComponent,
    ContactPageComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    PeliculaComponent,
    NoResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
