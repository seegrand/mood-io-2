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

  init(playlist): number {
    if (playlist instanceof Array) {
      this.playlist = playlist;

      for (var track of playlist) {
        var index = this.isTrackInPlaylist(track);

        if (index < 0) {
          this.loadTrack(track);
        }

        return index;
      }
    } else if (playlist instanceof Object) {
      var index = this.isTrackInPlaylist(playlist);

      if (index < 0) {
        this.loadTrack(playlist);
      }

      return index;
    }
  }

  isTrackInPlaylist(track: Track): number {
    for (var i = 0; i < this.getPlaylistLength(); i = i + this.trackSteps) {
      var trackInPlaylist = <any> this.audioProvider.tracks[i];
      
      if (trackInPlaylist.trackId) {
        if (track.trackId == trackInPlaylist.trackId) {
          return i;
        }
      }
    }

    return -1;
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
    return this.audioProvider.current + this.trackSteps < this.audioProvider.tracks.length;
  }

  playNext(): boolean {
    if (this.canPlayNext()) {
      this.audioProvider.tracks[this.audioProvider.current + this.trackSteps].seekTo(0);

      this.audioProvider.pause();
      this.audioProvider.play(this.audioProvider.current + this.trackSteps);

      this.isPlaying = true;

      return true;
    }

    return false;
  }

  canPlayPrevious(): boolean {
    return this.audioProvider.current > 0;
  }

  playPrevious(): boolean {
    if (this.canPlayPrevious()) {
      this.audioProvider.tracks[this.audioProvider.current - this.trackSteps].seekTo(0);

      this.audioProvider.pause();
      this.audioProvider.play(this.audioProvider.current - this.trackSteps);

      this.isPlaying = true;

      return true;
    }

    return false;
  }

  canPlayIndex(index: number): boolean {
    return index >= 0 && index < this.getPlaylistLength();
  }

  playIndex(index: number): boolean {
    if (this.canPlayIndex(index)) {
      this.audioProvider.tracks[index].seekTo(0);

      this.audioProvider.pause();
      this.audioProvider.play(index);

      this.isPlaying = true;

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

      if (this.audioProvider.tracks[this.audioProvider.current].duration) {
        return this.audioProvider.tracks[this.audioProvider.current].duration;
      }
    }
  }

}
