import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { PlayerUpdateComponent } from './player-update/player-update.component';
import { TeamListComponent } from './team-list/team-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlayerCreateComponent } from './player-create/player-create.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamCreateComponent,
    TeamDetailComponent,
    PlayerUpdateComponent,
    TeamListComponent,
    PlayerCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
