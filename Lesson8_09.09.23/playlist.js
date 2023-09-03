function Playlist() {
    this.songsTitles = [];
    this.songIndex = 0;
}

Playlist.prototype.add = function(song) { this.songsTitles.push(song.title); }
Playlist.prototype.play = function() { return `${this.songsTitles[this.songIndex]} started to play.`; }
Playlist.prototype.stop = function() { return `${this.songsTitles[this.songIndex]} stopped.`; }
Playlist.prototype.next = function() {
    if (this.songIndex === this.songsTitles.length - 1) {
        this.songIndex = 0;
        return `${this.songsTitles.at(-1)} stopped, ${this.songsTitles[this.songIndex]} started.`;
    }
    
    this.songIndex += 1;
    return `${this.songsTitles[this.songIndex - 1]} stopped, ${this.songsTitles[this.songIndex]} started.`;
}

function Song(title, artist) {
    this.title = title;
    this.artist = artist;
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);
console.log(playlist.songsTitles);

console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.stop());
console.log(playlist.play());