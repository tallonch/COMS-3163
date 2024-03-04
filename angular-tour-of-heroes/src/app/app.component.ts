import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
