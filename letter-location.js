function countLetters(string) {
  var noSpaces = string.split(" ").join("");
  var stats = {};

  for (var i = 0; i < noSpaces.length; i++){
    var currentLetter = noSpaces[i];
    if (!stats[currentLetter]) {
          stats[currentLetter] = i;
        } else {
          stats[currentLetter] += ", " + i;
        }
      }
console.log(stats);
 }

countLetters("lighthouse in the house");