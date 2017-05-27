import { Injectable } from '@angular/core';

import { AudioProvider } from 'ionic-audio';

import { Track } from '../../model/track';

@Injectable()
export class MusicService {

  trackSteps: number = 2;

  isPlaying: boolean = false;

  playList: Track[];

  constructor(private audioProvider: AudioProvider) {

  }

  init(tracks: Track[]) {
    if (this.audioProvider.tracks && this.audioProvider.tracks[this.audioProvider.current]) {
      this.isPlaying = this.audioProvider.tracks[this.audioProvider.current].isPlaying;
    }

    if (tracks) {
      this.playList = tracks;

      for (var track of tracks) {
        this.loadTrack(track);
      }
    }
  }

  play() {
    if (this.audioProvider.current) {
      this.audioProvider.play(this.audioProvider.current);
    } else {
      this.audioProvider.play(0);
    }

    this.isPlaying = true;
  }

  canPlayNext() {
    return this.audioProvider.current < this.playList.length;
  }

  playNext() {
    if (this.canPlayNext()) {
      this.audioProvider.play(this.audioProvider.current + this.trackSteps);

      return true;
    }

    return false;
  }

  canPlayPrevious() {
    return this.audioProvider.current > 0;
  }

  playPrevious() {
    if (this.canPlayPrevious()) {
      this.audioProvider.play(this.audioProvider.current - this.trackSteps);

      return true;
    }

    return false;
  }

  pause() {
    this.audioProvider.pause();
    this.isPlaying = false;
  }

  resetTrack() {
    this.audioProvider.tracks[this.audioProvider.current].seekTo(0);
  }

  loadTrack(track: Track) {
    let nextAudioTrack = this.audioProvider.create(track);
    this.audioProvider.add(nextAudioTrack);
  }

  seekTrack(position) {
    console.log('seekTrack');

    let track = this.audioProvider.tracks[this.audioProvider.current];

    if (track) {
      track.seekTo(position);
    }
  }

  getTrackProgress() {
    if (this.audioProvider.tracks[this.audioProvider.current]) {
      let track = this.audioProvider.tracks[this.audioProvider.current];

      if (track.isPlaying && this.audioProvider.tracks[this.audioProvider.current].progress) {
        return this.audioProvider.tracks[this.audioProvider.current].progress;
      }
    }
  }

  getTrackDuration() {
    if (this.audioProvider.tracks[this.audioProvider.current]) {
      // let track = this.audioProvider.tracks[this.audioProvider.current];

      if (this.audioProvider.tracks[this.audioProvider.current].duration) {
        return this.audioProvider.tracks[this.audioProvider.current].duration;
      }
    }
  }

}
