import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from 'src/app/oferta.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertaService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar : string = ''

  constructor(
    private route : ActivatedRoute,
    private ofertaService : OfertaService
  ) { }

  ngOnInit(): void {
    console.log('id da rota pai ', this.route.parent?.snapshot.params['id'])
    this.ofertaService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then((resposta: any) => {
      this.comoUsar = resposta
    }
    )
  }

}
