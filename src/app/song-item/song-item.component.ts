import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit {

  constructor() {
  }

  @Input() track = {duration_ms: 0, explicit: true, name: 'N/A'};

  get songDuration() {
    const {duration_ms} = this.track;
    const songInSeconds = Math.ceil(duration_ms / 1000);
    const getMinutes = Math.floor(songInSeconds / 60);
    const getSecondsRemainder = songInSeconds % 60;

    return `${getMinutes}:${getSecondsRemainder}`;
  }

  ngOnInit() {
  }

}
