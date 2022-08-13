import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss'],
})
export class TrackByComponent implements OnInit {
  title: string = 'Top 5 Movies';
  movies: Movie[] = [];
  mTitle: string = '';
  mDirector: string = '';

  ngOnInit() {
    this.Refresh();
  }

  remove(i: number) {
    this.movies.splice(i, 1);
  }

  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector });
    this.mTitle = '';
    this.mDirector = '';
  }

  trackByFn(index: number, item: Movie) {
    return item.title;
  }

  Refresh() {
    console.log('refresh');
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore' },
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder' },
      {
        title: 'Captain American: Civil War',
        director: 'Anthony Russo, Joe Russo',
      },
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer' },
      { title: 'Warcraft', director: 'Duncan Jones' },
    ];
  }
}

class Movie {
  constructor(public title: string, public director: string) {}
}
