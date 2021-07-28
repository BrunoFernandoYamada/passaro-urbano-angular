import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';
import '../util/rxjs-extensions';



@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas? : Observable<Oferta[]>
  public ofertas2? : Oferta[];
  private subjectPesquisa : Subject<string> = new Subject<string>();

  constructor(private ofertaService : OfertaService) { }

  ngOnInit(): void {
    this.ofertas  = this.subjectPesquisa //retorno Oferta[]
      .debounceTime(2000) // executa a ação do switchMap após 2 segundo
      .distinctUntilChanged()
      .switchMap((termo : string) => {
        console.log('requisição http para api: ')

        if(termo.trim() === ''){
          //retornar um obsevable de array de ofertas vazio
          return Observable.of<Oferta[]>([]);
        }
          return this.ofertaService.pesquisaOfertas(termo)
      })
      .catch((erro : any) => {console.log(erro)
        return Observable.of<Oferta[]>([])
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => {
        this.ofertas2 = ofertas
      })
  }

  pesquisa(termodaBusca: string): void {
    console.log('keyup caracter: ', termodaBusca)
    this.subjectPesquisa.next(termodaBusca)
      
  }

}
