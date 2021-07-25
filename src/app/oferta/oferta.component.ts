import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit {

  public oferta? : Oferta

  constructor(
    private route : ActivatedRoute, 
    private ofertasService : OfertaService
    ) { 
    
  }

  ngOnInit(): void {
    //capturando parâtro por snapshot
    //console.log('Valor do id na url: ',this.route.snapshot.params['id'])

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta : Oferta) => {
      this.oferta = oferta
    })

    //capturando o parâmetro da url por subscribe
    /*
    this.route.params.subscribe((parametro : any) => {
      console.log(parametro.id)
    })
    */
  }

}
