import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor2',
  templateUrl: './ngfor2.component.html',
  styleUrls: ['./ngfor2.component.css']
})
export class Ngfor2Component implements OnInit {

  title: string = 'Top 6 Bollywood Singers';

  singers: Singer[] = [
    {name: 'Lata Mangeshkar', noOfsongs: 200,hitSong: 'Lag ja Gale'},
    {name: 'Sonu Nigam', noOfsongs: 100,hitSong: 'Main ki karaan'},
    {name: 'Astha Gill', noOfsongs: 40,hitSong: 'Sawariya'},
    {name: 'Udit Narayan', noOfsongs: 150,hitSong: 'Agar main kahoon'},
    {name: 'Shreya Ghoshal', noOfsongs: 200,hitSong: 'Teri ore'},
    {name: 'Shaan', noOfsongs: 45,hitSong: 'Kuch to hua hai'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
class Singer{
  name: string;
  noOfsongs: number;
  hitSong: string;
  }