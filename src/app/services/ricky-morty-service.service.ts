import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RM } from '../config/url.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyServiceService {

  constructor(private http: HttpClient) { }

  getPersonajes():any{


    let url = `${URL_RM}/character`;
 
 
    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJES_RK',res);
        return res;
      })
    );
  }

  geUnPersonaje(unId: number): any {
    let url = `${URL_RM}/character/${unId}`;


    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJE_RK', res);
        return res;
      })
    );
  }

  getEpisodios():any{

    let url = `${URL_RM}/episode`;
 
    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('EPISODES_RK',res);
        return res;
      })
    );
  }

  getPersonajeEpisodio(url: string):any{

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJE_EPISODIO',res);
        return res;
      })
    );
  }

  getEpisodiosConImagenes() {
    return this.http.get<any>('assets/filtered_episodes.json');
  }

  getMasPersonajes(url:string):any{
    //let url = `${URL_RM}/character`;


    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJES_RK',res);
        return res;
      })
    );
 
  }

  getMasEpisodios(url: string): any {
    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('EPISODES_RK', res);
        return res;
      })
    );
  }




}
  


