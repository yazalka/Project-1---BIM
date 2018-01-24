
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

var html = " ";

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

	

html +=        '<div class="bg-color-sky-light">';
html +=            '<div class="content-lg container">';
html +=                '<div class="row row-space-1">'
html +=                   '<div class="col-sm-4 sm-margin-b-2">';
html +=                        '<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".1s">';
                                    // pricing 
html +=                              '<div class="pricing">';
html +=                                '<div class="margin-b-30">';
html +=                                    '<i class="pricing-icon icon-notebook"></i>';
html +=                                    '<h3>BIM Constructor</h3>';
html +=                                    '<p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>';
html +=                                '</div>';
html +=                                '<ul class="list-unstyled pricing-list margin-b-50">';
html +=                                    '<li class="pricing-list-item">'+"Sign up for our " + name1 + '</li>';
html +=                                   '<li class="pricing-list-item">'+"The duration is " + duration1 + '</li>';
html +=                                    '<li class="pricing-list-item">'+"Only for " + cost1 + '</li>';
html +=                                '</ul>';
html +=                                '<button href="courses.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase" onclick="chosingOne()">Choose</button>';
html +=                                '<p id="p1">'+ '</p>';
html +=                              '</div>';
                                     // pricing end
html +=                             '</div>';
html +=                            '</div>';

html +=                     '<div class="col-sm-4 sm-margin-b-2">'
html +=                         '<div class="wow fadeInUp" data-wow-duration=".3" data-wow-delay=".2s">'

html +=                             '<div class="pricing pricing-active">'
html +=                                '<div class="margin-b-30">'
html +=                                    '<i class="pricing-icon icon-notebook"></i>'
html +=                                     '<h3>BIM Constructor</h3>' 
html +=                                     '<p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>'
html +=                                 '</div>'
html +=                                 '<ul class="list-unstyled pricing-list margin-b-50">'
html +=                                    '<li class="pricing-list-item">'+"Sign up for our " + name2 + '</li>';
html +=                                   '<li class="pricing-list-item">'+"The duration is " + duration2 + '</li>';
html +=                                    '<li class="pricing-list-item">'+"Only for " + cost2 + '</li>';

html +=                                 '</ul>'
html +=                                 '<button href="courses.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase" onclick="chosingTwo()">Choose</button>'
html +=                                '<p id="p2">'+ '</p>';
html +=                             '</div>'
                            // pricing end
html +=                           '</div>';
html +=                          '</div>';
html +=                         '<div class="col-sm-4">'
html +=                        '<div class="wow fadeInRight" data-wow-duration=".3" data-wow-delay=".1s">'

html +=                            '<div class="pricing">'
html +=                                '<div class="margin-b-30">'
html +=                                    '<i class="pricing-icon icon-notebook"></i>'
html +=                                    '<h3>BIM Constructor</h3>'
html +=                                    '<p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>'
html +=                                '</div>'
html +=                                '<ul class="list-unstyled pricing-list margin-b-50">'
html +=                                    '<li class="pricing-list-item">'+"Sign up for our " + name3 + '</li>';
html +=                                   '<li class="pricing-list-item">'+"The duration is " + duration3 + '</li>';
html +=                                    '<li class="pricing-list-item">'+"Only for " + cost3 + '</li>';

html +=                                '</ul>'
html +=                                '<button href="courses.html" class="btn-theme btn-theme-sm btn-default-bg text-uppercase" onclick="chosingThree()">Choose</button>'
html +=                                '<p id="p3">'+ '</p>';					
html +=                            '</div>'
							// pricing end

html +=                          '</div>'
html +=                      '</div>'
html +=                  '</div>'



html +=             '</div>'
html +=         '</div>'





  	$('#coursesnames_result').html(html);

 }

function chosingOne(){

 	document.getElementById("p1").innerHTML = "You Chose Our " + name1 
 	document.getElementById("p2").innerHTML = " " 
 	document.getElementById("p3").innerHTML = " " 
 }

function chosingTwo(){

  	document.getElementById("p1").innerHTML = " "
 	document.getElementById("p2").innerHTML = "You Chose Our " + name2 
  	document.getElementById("p3").innerHTML = " " 
 }

function chosingThree(){
	document.getElementById("p1").innerHTML = " " 
 	document.getElementById("p2").innerHTML = " " 
 	document.getElementById("p3").innerHTML = "You Chose Our " + name3 
 }

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
