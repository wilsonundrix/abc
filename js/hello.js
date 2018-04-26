function sayHello(){
	var a = 'Hey Mehn, How you doing ?';
	var b = 'go away';
	var c = 'send off';
	var d = 'say hello';
	//innerHTML writes into a html element
	if(document.getElementById('hey').innerHTML == b){
		document.getElementById('hey').innerHTML = a;
		document.getElementById('kaka').innerHTML = c;
	}else{
		document.getElementById('hey').innerHTML = b;
		document.getElementById('kaka').innerHTML = d;
	}
}
function popHello(){
	//this creates an alert on the screen
	window.alert('Hey Mehn, How you doing ?');
}
function objectos(){
	var mimi = {
		first: "Wilson",
		age: 23,
		last: "Maina",
		fullName: function(){return this.first + " " + this.last;}
	};
	document.getElementById('hey').innerHTML = mimi.fullName();
}