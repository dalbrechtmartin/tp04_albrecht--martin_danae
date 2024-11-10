import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './components/tetiere/tetiere.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarteModule } from './modules/carte/carte.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TetiereComponent,
    FooterComponent,
    CarteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }