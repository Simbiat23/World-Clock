// london
function updateTime() {
  let londonElement = document.querySelector("#london");

  let londonDateElement = londonElement.querySelector("#london .date");

  let londonTimeElement = londonElement.querySelector("#london .time");
  let londonTime = moment().tz("London/Europe");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "H:mm:ss:SS [<small>]A[</small>]"
  );

  // Paris
  let parisElement = document.querySelector("#paris");

  let parisDateElement = parisElement.querySelector("#paris .date");

  let parisTimeElement = parisElement.querySelector("#paris .time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment()
    .tz("Paris/Europe")
    .format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "H:mm:ss:SS [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1);
