var value=0;

var    allvalue=0;
if (!!window.EventSource) {

  var tweetJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602";
  var twitterJSON = "https://emojitrack-gostreamer.herokuapp.com/subscribe/eps";
  var countnow, countori, thr, tm, ts,counttime;
  countnow = 10000;
var tweet_list, tweet_list_elements;
  countori = 0;
counttime=0;
var key;
  // var source = new EventSource('/dates');


  // if (!!window.EventSource) {
  var source = new EventSource(twitterJSON);
  

  source.addEventListener("message", function(event) {
  // source.addEventListener("stream.tweet_updates.1F602", function (event) {
    var data = event.data;
    var text = data.text;
    var lastEventId = event.lastEventId;
    
    countnow++;
    countori++;
    // ts = countnow * 6;
    // tm = ts / 60;
    // thr = tm / 60 * 5;
    // // console.log(countnow);
    // $(".minute").css("transform", "rotate(" + tm + "deg)");
    // $(".second").css("transform", "rotate(" + ts + "deg)");
    // $(".hour").css("transform", "rotate(" + thr + "deg)");
    // $("#thr").html(Math.floor(thr / 30));
    // $("#tm").html(Math.floor((tm / 6) % 60));
    // $("#ts").html(Math.floor((ts / 360) * 60) % 60);
    
    var dataarry = JSON.parse(data);
    // dataarry=event.data[9];
 // value=0;
    for (key in dataarry) {
      value += dataarry[key];
      
    }
// console.log(countori);
   
    var rleft, rtop;


    // var innerhtml = "<li style='left:"+ Math.floor(Math.random()* 80) +"vw;top:" + Math.floor(Math.random()* 95) +"vh'>"+dataarry.text+"</li>";
    // var innerhtml = "<li style='left:" + Math.floor(Math.random() * 80) + "vw;top:0vh'>" + dataarry.text + "</li>";
   

    
    tweet_list_elements = [];
    tweet_list = $('#tweet_list');
    tweet_connents = $('.tweet-container').last();
    // tweet_list_elements = $("li");
    // console.log(tweet_list_elements.length);
    // if (tweet_list_elements.length >= 80) {
    //   tweet_list_elements.first().remove();
    // }

    // handle message
  }, false);
  function recount(){
   var dotnum=0;
    counttime ++;
    var nowfeed = countori;
    // console.log(nowfeed);
   if(nowfeed !== 0){
    // value*=4;

innerhtml="<span>";
    // value*=4;
     for(var i=0; i<10-Math.floor(value/2);i++){
     innerhtml+="<div class='dot-dark'></div>";
     
     }
      allvalue+=2;
     for(var i=0; i<Math.floor(value/2);i++){
      innerhtml+="<div class='dot'></div>";
      // dotnum++;
     }
     // var cls

    

     innerhtml+="</span>";
     // if (value >20){
     //  cls="st7";
     // }
     // else {
     //  cls= "st"+ value/3;}

      // innerhtml="<span class="+ cls +" style='height:" + value*2 +"px'></span>";
     value=0;
     // dotnum=0
    

     // tweet_connents.append(innerhtml);
   
   }else {
     // tweet_connents.append("<span class='space' style='border:none'>&nbsp</span>");
     innerhtml="<span>";
for(var i=0; i<10;i++){
      innerhtml+="<div class='dot-dark'></div>";
      
     }
      innerhtml+="</span>";

   }
 tweet_connents.append(innerhtml);


    countori=0;
    if (counttime%10== 0){
      value=0;
     
    console.log(counttime);
    tweet_list.append('</div> <div class="tweet-container" >');
    // console.log(' </div> <div id="tweet_list">');
    }
    return nowfeed;

  };

setInterval("recount()",102);


}
