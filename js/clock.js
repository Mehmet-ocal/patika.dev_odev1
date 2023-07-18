let name = prompt ("Adınızı Giriniz: ")
document.getElementById("myName").innerHTML = name;

function showTime() {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    let currentDateTime = currentDate.toLocaleDateString() + " " + currentTime;
    
    document.getElementById("myClock").textContent = currentDateTime;
  }
  
  showTime();