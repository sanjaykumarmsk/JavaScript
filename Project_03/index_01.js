const clock = document.getElementById("clock");
// const clock = document.querySelecter('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocalTimeString());
  let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  clock.innerHTML = date.toLocaleTimeString() + " " + date.toLocaleDateString(undefined, options);
}, 1000);

