import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.scss']
})
export class PlayerUpdateComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.playerService.getPlayerById(this.route.snapshot.params.id).subscribe(
      data => {
        this.form.patchValue(data);
      },
      err => alert('no')
    );
  }

  updatePlayer() {
    this.playerService.updatePlayer(this.form.getRawValue(), this.route.snapshot.params.id).subscribe(
      data => this.router.navigate(['/teams', data['_id']]),
      err => console.error(err)
    );
  }

  delete() {
    this.playerService.deletePlayer(this.route.snapshot.params.id).subscribe(
      data => this.router.navigate(['/teams', data['_id']]),
      err => console.error(err)
    );
  }

}
