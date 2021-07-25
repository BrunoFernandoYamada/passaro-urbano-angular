import { Oferta } from "./shared/oferta.model";
import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class OfertaService {
    

    constructor(private http : HttpClient){

    }

    public getOfertas() : Promise<Oferta[]> {
         return this.http.get(`${environment.URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta : any) => 
            resposta)
            
    }

    public getOfertasPorCategoria(categoria : string) : Promise<Oferta[]> {

        return this.http.get(`${environment.URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) =>
            resposta)

    }

    getOfertaPorId(id: number) : Promise<Oferta> {
        return this.http.get(`${environment.URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
            return resposta[0]
            }
        )}

    public getComoUsarOfertaPorId(id : number) : Promise<string> {
        return this.http.get(`${environment.URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            console.log(resposta)
            return resposta[0].descricao
        })
    }

    public getOndeFica(id: number) : Promise<string> {
        return this.http.get(`${environment.URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta : any) => {
            return resposta[0].descricao
        })

    }


    /*
    public getOfertas2() : Promise<Oferta[]> {
        return new Promise( (resolve, reject) => {
            let deu_certo = true
            if(deu_certo){
                setTimeout(() => resolve(this.ofertas) ,3000)
                
            }else{
                reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
            }  
        })
    }
   */
}