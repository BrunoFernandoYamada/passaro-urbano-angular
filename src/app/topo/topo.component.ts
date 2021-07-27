import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas? : Observable<Oferta[]>
  private subjectPesquisa : Subject<string> = new Subject<string>();

  constructor(private ofertaService : OfertaService) { }

  ngOnInit(): void {
    this.ofertas  = this.subjectPesquisa //retorno Oferta[]
      .debounceTime(1000) // executa a ação do switchMap após 1 segundo
      .switchMap((termo : string) => {
        console.log('requisição http para api: ')
          return this.ofertaService.pesquisaOfertas(termo)
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }

  pesquisa(termodaBusca: string): void {
    console.log('keyup caracter: ', termodaBusca)
    this.subjectPesquisa.next(termodaBusca)
      
  }

}
