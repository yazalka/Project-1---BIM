$(document).ready(function() {   

var Coursesnames = [

  				{

  					course1: 'January-February Course',
  					course2: 'May-June Course',
  					course3: 'September-October Course'

  				}
  		     ];

var Coursesduration = [

  				{

  					duration1: '6 Weeks',
  					duration2: '8 Weeks',
  					duration3: '6 Weeks'

  				}
  	       	 ];

var Coursescost = [

  				{

  					cost1: '250$',
  					cost2: '300$',
  					cost3: '200$'

  				}
            ];

var html = "";

  for (var i = 0; i < Coursesnames.length; i++) {

  var name1 = Coursesnames[i].course1;
  var name2 = Coursesnames[i].course2;
  var name3 = Coursesnames[i].course3;
var	duration1 = Coursesduration[i].duration1;
var	duration2 = Coursesduration[i].duration2;
var	duration3 = Coursesduration[i].duration3;
var	cost1 = Coursescost[i].cost1;
var	cost2 = Coursescost[i].cost2;
var	cost3 = Coursescost[i].cost3;

 
html +=     '<div class="row">';
 html +=      '<div class=" course1 col-lg-4">';
	    html +=	    '<h2>' + name1 + '</h2>';
  		html +=     '<p id="p1">'+'</p>';
	 html +=      '</div>';

		 html +=  '<div class="course2 col-lg-4">';
	   html +=		'<h2>' + name2 + '</h2>'
	   html +=     '<p id="p2">'+'</p>';
	 html +=      '</div>';
	 	html +=   '<div class="course3 col-lg-4">';
	    html +=		'<h2>' + name3 + '</h2>';
	    html +=     '<p id="p3">'+'</p>';
	 html +=      '</div>';
 			
	 html +=  '</div>'; 

  	$('#coursesnames_result').html(html);

  }

 $('.course1').click(function(){

 	$('#p1').html("This course duration is " + duration1 + " and it costs: " + cost1)
 })

  $('.course2').click(function(){

 	$('#p2').html("This course duration is " + duration2 + " and it costs: " + cost2)
 })

   $('.course3').click(function(){

 	$('#p3').html("This course duration is " + duration3 + " and it costs: " + cost3)
 })



})

function submit() {

  var first_name = document.getElementById('first_name').value; 
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var phone_number = document.getElementById('phone_number').value;
  var result;

	var array =[first_name , last_name , email , phone_number];
	var array_error_name = ['first_name_error','last_name_error','email_error','phone_number_error'];
	var array_name =['first_name','last_name','email','phone_number'];
	var array_error = ["Please Fill Your First Name ","Please Fill Your Last Name ","Email is required","Phone Number is required"];

function isTrue(currentValue) {

  return currentValue === true;

}
	for (var i = 0; i < array.length ; i++) {

	 	if (array[i] === '') {

	 		document.getElementById(array_error_name[i]).innerHTML = '<p style = "color:red">' + array_error[i] + '</p>';

	 	} else if(array[i] = true) {

	 		document.getElementById(array_error_name[i]).innerHTML = '<p style = "color:red"></p>';
	 	}

	 	if (array.every(isTrue)) {

	 		result = "<p>" + "Dear Mr/Mrs " + first_name + " " + last_name + " " + "We Will Contact You Soon" + "</p>";

 	 		 document.getElementById("result").innerHTML = result;
	 	}
	 } 
 }

