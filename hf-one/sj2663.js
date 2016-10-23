var areaCal=function(length,width){
  var area=length*width;
  console.log(area);
}
areaCal(10,6);

var StudyorNot=function(dayNum){
  if(dayNum>=10){
    console.log("You've already spent"+" "+dayNum+" "+"hours on study, you may have fun now.")
  }
  else{
    console.log("You've only spent"+dayNum+"hours on study, you should go to study now.")
  }
}
StudyorNot(5);

var List=["Harrods","Netaporter","Shopbop","Matchesfashion","Shopstyle"]
var count=0;
for(var i=0;i<List.length;i++){
  console.log(List[i].length);
  count=count+List[i].length;
}
console.log(count);
