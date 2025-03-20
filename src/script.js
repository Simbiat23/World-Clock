function updateTime() {
  // london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector("#london .date");
    let londonTimeElement = londonElement.querySelector("#london .time");
    let londonTime = moment().tz("London/Europe");

    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "HH:mm:ss:SS [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector("#paris .date");
    let parisTimeElement = parisElement.querySelector("#paris .time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = moment()
      .tz("Paris/Europe")
      .format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "HH:mm:ss:SS [<small>]A[</small>]"
    );
  }

  //   Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector("#tokyo .date");
    let tokyoTimeElement = tokyoElement.querySelector("#tokyo .time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "HH:mm:ss:SS [<small>]A[<small>]"
    );
  }
}

setInterval(updateTime, 1);

function updateCityTime(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#all-cities");
  citiesElement.innerHTML = `<div class="cities"> 
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "HH:mm:ss:SS"
            )} <small>${cityTime.format("A")}</small></div>
          </div>
          </div>`;
}

let selectCityElement = document.querySelector("#city");

selectCityElement.addEventListener("change", updateCityTime);
