import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EntrepriseService } from './services/entreprise.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    EntrepriseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
