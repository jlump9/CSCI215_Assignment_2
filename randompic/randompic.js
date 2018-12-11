

var randomPic = [];

randomPic[0] = "images/yam.jpg";
randomPic[1] = "images/coins.jpeg";
randomPic[2] = "images/cow.jpg";
randomPic[3] = "images/pineapple.jpeg";
randomPic[4] = "images/bike.jpg";

var randomChoice = math.floor(math.random(randomPic)))


function randomPic(){
    var randNum = Math.floor(Math.random() * 10);
    var name = "puppy" + randNum + ".jpg";
    document.getElementById("randomPic").src = "../img/" + name;