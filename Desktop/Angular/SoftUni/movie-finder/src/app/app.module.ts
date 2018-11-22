// Modules
import { HttpClientModule } from "@angular/common/http"; 
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';

// Services
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ MoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
