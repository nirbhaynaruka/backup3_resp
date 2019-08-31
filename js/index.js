window.onscroll = function () {
    myFunction();
 myFunctionHeader();

  };

  var header = document.getElementById("fadein");
  function myFunction() {
   
    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
      header.classList.add("hidediv");
    } else {
      header.classList.remove("hidediv");
    }
  }
  
  var header1 = document.getElementById("myHeader");
  function myFunctionHeader() {
   
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      header1.classList.add("headertoggle");
    } else {
      header1.classList.remove("headertoggle");

    }
  }
