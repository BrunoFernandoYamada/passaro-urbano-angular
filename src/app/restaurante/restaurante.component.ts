import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [ OfertaService]
})
export class RestauranteComponent implements OnInit {

  public ofertas : Oferta[] = []

  constructor(private ofertasService : OfertaService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => 
      this.ofertas = ofertas 
    )
  }



}
