var planets = ["images/mercury.jpg","images/venus.jpg","images/earth.jpg","images/mars.jpg","images/jupiter.jpg","images/saturn.jpg","images/uranus.jpg","images/neptune.jpg","images/pluto.jpg"];
var img = document.getElementById("planet");
var num = 0;
var names = ['Mercury','Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
var heading = document.getElementById("heading");
function prev(){
    num--;
    if(num <= 0){
        num = planets.length - 1;
    }
    img.src = planets[num];
    heading.innerHTML = names[num];
    
}
function next(){
    num++;
    if(num >= planets.length - 1){
        num = 0;
    }
    img.src = planets[num];
    heading.innerHTML = names[num];
    
}