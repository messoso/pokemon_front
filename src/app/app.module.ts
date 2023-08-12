import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './component/header/header.component';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { GetPokemonUtil } from './util/get-pokemon-util';

@NgModule({
  declarations: [
    AppComponent
    , PokemonListComponent, HeaderComponent, PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [GetPokemonUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
