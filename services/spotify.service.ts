import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) { // metodo para optimizar y tener los hededers y la url del api en un solo sitio
    const URL = `https://api.spotify.com/v1/${query}`;
    const httpOptions = {
      headers: new HttpHeaders({  // headers para mandar token de spotify
        'Authorization': 'Bearer BQAb6gHSREt5Do55f55tgGj_NtUt11tkyHOnAsVctnUSTxfkrGxjo_Bi2jMRfq3eO7r3AoHPKQcfoMy4TT4'
      })
    }
    return this.http.get(URL, httpOptions);
  }

  getNewReleases(): Observable<[]> {  //servicio que captura la informacion de los los ultimos lanzamientos desde la api de spotify
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }


  getArtista(termino: string): Observable<[]> {  //mservicio que captura la informacion de los artistas buscados desde la api de spotify (recibe un termino desde el componente)
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

  }
}
