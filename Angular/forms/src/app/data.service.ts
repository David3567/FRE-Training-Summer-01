import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  itemlist = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  constructor() {}
}
