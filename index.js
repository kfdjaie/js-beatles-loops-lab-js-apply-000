function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    empty[i] = musicians[i] + " plays " + instruments[i];
  }
  return empty;
}



function iLoveTheBeatles(num){
  var empty2 = [];
  var i = num.length;
  do {
    empty2[i] = "I love the Beatles!";
    i--;
  }
  while (i < 15)
  return empty2;
}