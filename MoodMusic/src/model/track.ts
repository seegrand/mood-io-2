import { ITrackConstraint } from 'ionic-audio';

export class Track implements ITrackConstraint {
  id: number;
  title: string;
  artist: string;
  src: string;
  preload: string;
}
