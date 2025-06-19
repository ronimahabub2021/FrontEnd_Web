
var searchBtn = document.getElementById('searchBtn');
searchBtn.onclick = function() {
    var data = ["Search Result Found", "Search Result Not Found"];
    var randomFlootNumber = Math.random(0,1);
    var index = Math.round(randomFlootNumber);
    document.getElementById('searchResult').innerText = data[index];    
}; 




function myWatch()
{
    var dateTime = new Date();
    var hour    = dateTime.getHours();
    var minute  = dateTime.getMinutes();
    var second  = dateTime.getSeconds();
    var time    = hour + ' : '+ minute +' : '+ second;
    document.getElementById('watchRes').innerText = time;
}

setInterval(myWatch, 1000);

//setTimeout();


