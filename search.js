const lyrics ='Tumi bondhu kala pakhi ami jano ki. bosonto kal e tomai bolte pari ni.sada sada kala kala ';
const searchString = 'paKhi';
const lyricsLowerCase  = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExist);

// in one line
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);

// --------------------------------
//indexOf
console.log(lyrics.indexOf('kaala'));

if(lyrics.indexOf('saada') !== -1){
    console.log("exists inside the string");
}
else{
    console.log("can't Find It");
}

//startWith
console.log(lyrics.startsWith('2mi'));

//endWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('.pdf'));
console.log(otherFile.endsWith('.png'));
