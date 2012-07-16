var zomgImages = 10,
    zomgCounter = 0,
    profileImages = document.getElementsByClassName('profilePic');

for( var i in profileImages ) {
  if( ++zomgCounter > zomgImages ) { zomgCounter = 0; }
  var imgURL = chrome.extension.getURL("/images/" + zomgCounter + ".jpg");
  profileImages[i].src = imgURL;
}
