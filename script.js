var now = moment(); // new Date().getTime();
var tempDate = moment();

tempDate.hour(9) // sets the hour to 9 am
tempDate.hour(17) // sets hour to 5pm



// $(".now").text(moment(now).format('h:mm:ss a'));
// $(".then").text(moment(then).format('h:mm:ss a'));
// $(".duration").text(moment(now).to(then));
// (function timerLoop() {
  
//   $(".difference").text(moment().to(then));
//   $(".countdown").text(countdown(then).toString());
//   $(".hacked").animate("pwned");
//   requestAnimationFrame(timerLoop);
// })();
var dateToday = now.format("dddd, MMMM Do")
