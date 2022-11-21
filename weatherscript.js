function loadDoc() {
    var xhttp = new XMLHttpRequest();
    var location =  document.getElementById("city").value;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);
            document.getElementById("DayHourValue").innerHTML = obj.currentConditions.dayhour;
            document.getElementById("tempValue").innerHTML = obj.currentConditions.temp.c + " degree Celcius";
            document.getElementById("precipvalue").innerHTML = obj.currentConditions.precip;
            document.getElementById("humidtyvalue").innerHTML = obj.currentConditions.humidity;
            document.getElementById("windvalue").innerHTML = obj.currentConditions.wind.mile + " miles";
            document.getElementById("commentValue").innerHTML = obj.currentConditions.comment;
            document.getElementById("icon").src = obj.currentConditions.iconURL;

            for(i=1;i<8;i++){
                $("#NextDays").append("<tr><td>Day:"+obj.next_days[i].day+"</td><td>Comment:"+obj.next_days[i].comment+"</td><td>Max Temp:"+obj.next_days[i].max_temp.c+" degree celcius</td><td>Min Temp:"+obj.next_days[i].min_temp.c+' degree celcius</td><td><img src="'+obj.next_days[i].iconURL+'"></img></td></tr>')
            }
            
       }
    };
    xhttp.open("GET", "https://weatherdbi.herokuapp.com/data/weather/"+location, true);
    xhttp.send();
}