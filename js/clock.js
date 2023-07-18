let name = prompt ("Adınızı Giriniz: ")
document.getElementById("myName").innerHTML = name;

function showTime() {
  let clockElement = document.getElementById("myClock");

  setInterval(() => {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    let currentDateFormatted = currentDate.toLocaleDateString();
    clockElement.textContent = currentTime + " " + currentDateFormatted;
  }, 1000);
}

showTime();
