import { ITrackConstraint } from 'ionic-audio';

export class Track implements ITrackConstraint {
  title: string;
  artist: string;
  src: string;
  preload: string;
}
