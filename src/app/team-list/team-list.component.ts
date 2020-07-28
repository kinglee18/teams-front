import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teams = this.teamService.getTeams();

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

}
