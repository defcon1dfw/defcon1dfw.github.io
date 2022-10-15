

// Get list of reviews from google api

// generate a few cards

// inject into DOM in spcific loction at bottom of home page. Probably using an id and the google api key.

var test = "";

for (let i = 0; i < 5; i++) {
    test = test + "<div class='col-xl-4'><h2>Test<h2></div>";
} 

document.getElementById('google-reviews-loc-id').innerHTML = test;
