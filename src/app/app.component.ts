import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CharacterlistComponent, CharacterfilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hp-lab';
  selectedHouse: string = '';
}
