import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  
  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.teamService.createTeam(this.name.value).subscribe(
      data => this.router.navigate(['/'])
    );
  }
}
