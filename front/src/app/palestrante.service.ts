import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService {

  // ==> usar a uri da api (Back-End)
  uri = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  /**
   * Método responsável por criar um novo 'Palestrante'
   */
  adicionarPalestrante(nomePalestrante, tituloPalestra) {
    const palestrante = {
      nomePalestrante,
      tituloPalestra
    };
    console.log(palestrante);

    // ==> (POST - Url no Back-End): http://localhost:8000/api/palestrante
    this.http.post(`${this.uri}/palestrante`, palestrante)
      .subscribe(res => console.log('Feito'));
  }
}
