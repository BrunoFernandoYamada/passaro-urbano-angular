import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas? : Observable<Oferta[]>

  constructor(private ofertaService : OfertaService) { }

  ngOnInit(): void {
    
  }

  pesquisa(termodaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termodaBusca)

    this.ofertas.subscribe(
      (data: Oferta[]) => console.log(data),
      (erro: any) => console.log('Status do Erro: ', erro.status)
    )
      
  }

}
