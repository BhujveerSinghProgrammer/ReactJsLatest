document.getElementById("btn").addEventListener("click", function () {
  console.log("clicked");
});

var frm = document.getElementById("frm").addEventListener(
  "click",
  function () {
    console.log("frm");
  },
  false
);

var div = document.getElementById("dv").addEventListener(
  "click",
  function () {
    console.log("dv");
  },
  false
);

var p = document.getElementById("p").addEventListener(
  "click",
  function (event) {
    //we can also use 'e' instead of event
    event.stopPropagation();

    console.log(event.target); //it returns paragraph element
    console.log("p");
  },
  true
);

var artg = document.getElementById("artg").addEventListener(
  "click",
  function (event) {
    event.preventDefault(); //its preventing default behavior of anchor tag to be open url,url will not be open
  },
  true
);
