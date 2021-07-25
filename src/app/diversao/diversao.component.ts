import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaService]
})
export class DiversaoComponent implements OnInit {

  public ofertas : Oferta[] = []

  constructor(private ofertasService : OfertaService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao')
    .then((ofertas: Oferta[]) => 
      this.ofertas = ofertas 
    )
  }

}
