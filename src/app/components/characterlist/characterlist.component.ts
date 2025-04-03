import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HpService } from '../../services/hp.service';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnChanges {
  @Input() house: string = '';
  characters: any[] = [];

  constructor(private hpService: HpService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['house']) {
      this.loadCharacters();
    }
  }

  loadCharacters(): void {
    if (this.house) {
      this.hpService.getCharactersByHouse(this.house).subscribe(data => {
        this.characters = data;
      });
    } else {
      this.hpService.getAllCharacters().subscribe(data => {
        this.characters = data;
      });
    }
  }
}
