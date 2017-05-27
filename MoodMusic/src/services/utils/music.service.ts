import { Injectable } from '@angular/core';

import { AudioProvider } from 'ionic-audio';

import { Track } from '../../model/track';

@Injectable()
export class MusicService {

  trackSteps: number = 2;

  isPlaying: boolean = false;

  playlist: Track[];

  constructor(private audioProvider: AudioProvider) {

  }

  init(playlist): boolean {
    if (playlist) {
      if (playlist instanceof Array) {
        this.playlist = playlist;

        for (var track of playlist) {
          this.loadTrack(track);

        }
      } else if (playlist instanceof Object) {
        this.loadTrack(playlist);
      }

      return true;
    } else {
      return false;
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

  canPlayNext(): boolean {
    return this.audioProvider.current < this.audioProvider.tracks.length;
  }

  playNext() {
    if (this.canPlayNext()) {
      this.isPlaying = true;
      this.audioProvider.pause();
      this.audioProvider.play(this.audioProvider.current + this.trackSteps);

      return true;
    }

    return false;
  }

  canPlayPrevious(): boolean {
    return this.audioProvider.current > 0;
  }

  playPrevious() {
    if (this.canPlayPrevious()) {
      this.isPlaying = true;
      this.audioProvider.pause();
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

  getPlaylistLength(): number {
    if (this.audioProvider.tracks) {
      return this.audioProvider.tracks.length;
    }

    return 0;
  }

  getCurrentTrackIndex(): number {
    if (this.audioProvider.tracks) {
      if (this.audioProvider.tracks.length > 0) {
        return this.audioProvider.current;
      }
    }

    return -1;
  }

  getTrackProgress(): number {
    if (this.audioProvider.tracks[this.audioProvider.current]) {
      let track = this.audioProvider.tracks[this.audioProvider.current];

      if (track.isPlaying && this.audioProvider.tracks[this.audioProvider.current].progress) {
        return this.audioProvider.tracks[this.audioProvider.current].progress;
      }
    }
  }

  getTrackDuration(): number {
    if (this.audioProvider.tracks[this.audioProvider.current]) {
      // let track = this.audioProvider.tracks[this.audioProvider.current];

      if (this.audioProvider.tracks[this.audioProvider.current].duration) {
        return this.audioProvider.tracks[this.audioProvider.current].duration;
      }
    }
  }

}
