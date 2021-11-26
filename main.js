var images = [
  "https://www.google.com/search?q=family+book&sxsrf=AOaemvK7UJVcKXRQSqmbyJ7en_1tfMsThQ:1637941680069&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjg6IKgsLb0AhWVwjgGHSQBBJ8Q_AUoAXoECAEQAw&cshid=1637941925218413&biw=1280&bih=577&dpr=1.5#imgrc=TpL9qY8WTsFz7M",
  "Rajit.JPG",
  "Syama.jpg",
  "Hasini.JPG",
  "Lakshya.jpg",
  "Rinav.jpg",
];
var names = [
  "Family Book",
  "Rajit Gummadi",
  "Syama Gummadi",
  "Hasini Gummadi",
  "Lakshya Gummadi",
  "Rinav",
];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = 4;
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }

  //Debug the code to store list of images in updatedImage. Use images[i]
  var updatedImage = images[i];
  //Debug the code to store list of names in updatedName. Use names[i]
  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}
