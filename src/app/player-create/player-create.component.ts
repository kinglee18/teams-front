import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required])
  });

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  submit() {
    this.playerService.createPlayer(this.form.value, this.route.snapshot.params.id).subscribe(
      data => this.router.navigate(['/teams', this.route.snapshot.params.id]),
      err => console.log(err.error)
    );
  }

}
