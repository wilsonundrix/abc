function readoutjson(){
	var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myArr[0][1];//[0]
    }
};
xmlhttp.open("GET", "women.txt", true);
xmlhttp.send(); 
}