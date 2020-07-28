import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { PlayerUpdateComponent } from './player-update/player-update.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { PlayerCreateComponent } from './player-create/player-create.component';


const routes: Routes = [
  {
    path: '',
    component: TeamListComponent
  },
  {
    path: 'teams/create',
    component: TeamCreateComponent
  },
  {
    path: 'teams/:id',
    component: TeamDetailComponent
  },
  {
    path: 'players/:id',
    component: PlayerUpdateComponent
  },
  {
    path: 'team/players/create/:id',
    component: PlayerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
