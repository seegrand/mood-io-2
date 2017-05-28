import { ITrackConstraint } from 'ionic-audio';

export class Track implements ITrackConstraint {
  trackId: number;
  title: string;
  artist: string;
  src: string;
  preload: string;
}
