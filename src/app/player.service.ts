import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get(environment.apiUrl + 'players');
  }

  getPlayerById(id: number): Observable<Player> {
    return this.http.get<Player>(environment.apiUrl + `players/${id}`);
  }

  createPlayer(player: Player, id: number) {
    return this.http.post(environment.apiUrl + `players/${id}`, player);
  }

  updatePlayer(player: Player, id: number) {
    return this.http.put(environment.apiUrl + `players/${id}`, player);
  }

  deletePlayer(id: number) {
    return this.http.delete(environment.apiUrl + `players/${id}`);
  }
}
