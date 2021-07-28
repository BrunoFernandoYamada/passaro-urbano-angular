import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { registerLocaleData } from '@angular/common';

//Foi necessário incluir estas duas linhas para funcionar a conversão da moeda
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestauranteComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    //adicionando a convesão da moeda
    { provide: LOCALE_ID, useValue: 'pt-BR' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
