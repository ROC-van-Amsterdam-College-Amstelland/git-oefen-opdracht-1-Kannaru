window.onload = setInterval(clock,1000);
function clock()
{
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    document.getElementById("date").innerHTML=date+" "+month+", "+year;
}

var whichButton = "";
var counter = 0;                         
var counter2 = 0;                       
$("button").on("click", function(){     
  whichButton = this.id;                   
  if (whichButton === "button1") {        
    counter++; 
    $("#span1").html(counter);
  } else {
    counter2++
    $("#span2").html(counter2);
  }
});


function like() {
    document.body.style.backgroundColor = "green";
    window.setTimeout("chBackColor()",2);
  }