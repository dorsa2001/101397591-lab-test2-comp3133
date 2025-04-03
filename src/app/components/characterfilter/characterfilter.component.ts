import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent implements OnInit {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  selectedHouse: string = '';

  @Output() houseSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onHouseChange(): void {
    this.houseSelected.emit(this.selectedHouse);
  }
}
