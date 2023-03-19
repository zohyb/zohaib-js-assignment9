var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var result = document.getElementById("result");
var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];





//-----------------------------------------------------------------------------------------------------------




function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};




//-----------------------------------------------------------------------------------------------------------


let fullName = sessionStorage.getItem("fullName");
console.log(fullName);
document.getElementById("uname").innerHTML = fullName;

//-----------------------------------------------------------------------------------------------------------


//Print All Cities--------------------------------------------------------------------------------------------------------------


btn1.onclick = function(){
    
    result.innerHTML = " "
    for(let index = 0 , sr = 1 ; index < cities.length ; index++ , sr++){
        result.innerHTML += sr + ")" + cities[index] + "<br>";
    }
    
}


//Add City in List--------------------------------------------------------------------------------------------------------------


btn2.onclick = function(){
    result.innerHTML = "Click On 'Print All Cities' To View Your Cities List.";
    let city = document.getElementById("cityInput").value;
    
    if(city.length < 3){
        result.innerHTML = "Please Enter Valid City Name in Input Field !"
        return;
    } 
    
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    let capitalized = cityFirstLetter + cityAllLetters;
    
    let cityFound = false;
    
    
    for( let i = 0; i < cities.length; i++){
        
        if (cities[i] === capitalized ) {
            cityFound = true;
             Toastify({
                text: capitalized + ' is already in your list !',
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "red",
                },
                }).showToast();
        }
        
    }
    
    if( cityFound === false){
        cities.push(capitalized);
        Toastify({
                text: capitalized + ' is added to your list !',
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "green",
                },
                }).showToast();
    }
    
}


//--------------------------------------------------------------------------------------------------------------
