import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  name = new FormControl();
  team = this.teamService.getTeamById(this.route.snapshot.params.id);

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.teamService.deleteTeam(this.route.snapshot.params.id).subscribe(
      data => this.router.navigate(['/']),
      error => console.error(error)
    );
  }

  update() {
    this.teamService.updateTeam(this.name.value, this.route.snapshot.params.id).subscribe(
      data => this.router.navigate(['/']),
      error => console.error(error)
    );
  }

  addPlayer() {
    this.router.navigate(['team/players/create/', this.route.snapshot.params.id]);
  }
}
