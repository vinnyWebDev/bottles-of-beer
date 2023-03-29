function playSong() {
    //for loop to itterate through the song
    for (i = 99; i >= 2; i--) {
        let minusBeer = i - 1;
        document.getElementById("loopSongText").innerHTML += "<br />" + i + " Bottles of beer on the wall " + i + " Bottles of beer. <br /> You take one down, you pass it aroun, <br />" + minusBeer + " Bottles of beer on the wall. <br />";
    }
    //not par of the loop as the lyrics here occur only once, when the song ends.
    document.getElementById("songText").innerHTML += "One Bottle of beer on the wall, One bottle of beer <br /> You take it down you pass it around, 0 bottles of beer on the wall. <br /> No more bottles of beer on the wall, no more bottles of beer. <br />Go to the store buy some more, 99 bottles of beer on the wall!";

}