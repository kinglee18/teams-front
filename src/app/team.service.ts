import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './team';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  createTeam(name) {
    return this.http.post(environment.apiUrl + 'teams', { name });
  }

  updateTeam(name: string , id: number) {
    return this.http.put(environment.apiUrl + `teams/${id}`, { name });
  }

  getTeams(): Observable<any> {
    return this.http.get(environment.apiUrl + 'teams');
  }

  getTeamById(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + `teams/${id}`);
  }

  deleteTeam(id: number) {
    return this.http.delete(environment.apiUrl + `teams/${id}`);
  }
}
