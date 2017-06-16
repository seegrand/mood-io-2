import { Pipe, PipeTransform } from "@angular/core";

import { Song } from '../model/song';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{

    transform(songs: Song[], term: string){

        if (!term) return songs;

        return songs.filter(function(song){
          return song.name.toLowerCase().includes(term.toLowerCase());
        });
    }
}
