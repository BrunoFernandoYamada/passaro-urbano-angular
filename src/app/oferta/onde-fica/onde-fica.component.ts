import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from 'src/app/oferta.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertaService]
})
export class OndeFicaComponent implements OnInit {

  public descricao : string = ''

  constructor(
    private route : ActivatedRoute,
    private ofertaService : OfertaService
    ) { }

  ngOnInit(): void {
    this.ofertaService.getOndeFica(this.route.parent?.snapshot.params['id'])
    .then((resposta : any) => {
      this.descricao = resposta
    })
  }

}
