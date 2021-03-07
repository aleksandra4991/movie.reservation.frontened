import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MovieSeanceSelectionService } from './movieSeanceSelectionService';
import { SeanceComponent } from './seance/seance.component';

@NgModule({
  declarations: [
    AppComponent,
    SeanceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieSeanceSelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
