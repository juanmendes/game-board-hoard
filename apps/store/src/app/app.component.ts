import {Component} from '@angular/core';
import {formatRating} from "@bg-hoard/store/util-formatters";
import {HttpClient} from "@angular/common/http";
import {Game} from "@bg-hoard/util-interface";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  formatRating = formatRating;
  games = this.http.get<Game[]>('/api/games');
  title = "Board Game Hoarder";
}
