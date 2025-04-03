import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HpService {
  private baseUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharactersByHouse(house: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/house/${house}`);
  }

  getAllCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
