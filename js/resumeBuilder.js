/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Ray Zhang",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "1234567",
		"email": "ray@gmail.com",
		"github": "ray",
		"twitter": "@ray",
		"location": "Madison WI"
	},
	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"skills": ["JavaScript","HTML5","CSS3"],
	"bioPic" : "images/me.png"
};

bio.display = function () {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// contacts
	var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedmobile);

	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedemail);

	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedtwitter);

	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedgithub);

	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedlocation);

	//image 
	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPicture); 

	//welcome message
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMsg);

	//bio skill
	$("#header").append(HTMLskillsStart);
	for (var indexCount = 0; indexCount < bio.skills.length; indexCount++){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[indexCount]) ;
		$("#header").append(formattedSkill);
	}

}

bio.display();


var work = {
	"jobs": [
	 {
		"title": "engineer",
		"employer": "ABCDE",
		"dates": "Sept 2016",
		"location": "Hong Kong",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at condimentum risus. Phasellus scelerisque facilisis tempor. Donec vitae commodo turpis, sodales venenatis arcu. Mauris diam ligula, pellentesque in faucibus ut, tincidunt et ex. Morbi vestibulum viverra leo, et placerat dui tristique eu. Ut sit amet massa neque. Quisque ut orci eu diam tempus efficitur vel vel libero. Suspendisse semper nisi augue, vitae porttitor metus varius non. Donec sed odio sagittis, porttitor nisl nec, varius massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce malesuada lorem sit amet posuere pharetra. In ultricies volutpat libero, et ultricies est scelerisque nec. Vivamus urna sem, elementum vitae volutpat vitae, aliquet eu ligula. Praesent fringilla metus felis, tempor molestie libero mattis sed."
	 },
	 {
		"title": "Research Assistant",
		"employer":"HIJKL",
		"dates": "June 2016",
		"location": "Hong Kong",
		"description": "Aliquam ornare velit orci, accumsan varius velit malesuada convallis. Sed fringilla mi diam, eu accumsan lectus eleifend non. Morbi dictum ultrices lacinia. Quisque sit amet urna ut nulla ullamcorper bibendum. Vestibulum id elementum magna, a ullamcorper nisl. Sed sagittis egestas varius. Vivamus auctor commodo velit, non dignissim velit efficitur at. Nullam vel lacus gravida, aliquet nisi et, mattis tellus. In sapien quam, aliquet elementum dignissim sed, vestibulum in tortor. Etiam et eleifend nibh."
	 }
	]	
};

work.display = function() {
	work.jobs.forEach ( function(jobItem) { 
		$("#workExperience").append(HTMLworkStart);
		//employer title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", jobItem.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", jobItem.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		//dates
		var formattedWorkDates = HTMLworkDates.replace("%data%", jobItem.dates);
		$(".work-entry:last").append(formattedWorkDates);	
		//description
		var formattedDescription = HTMLworkDescription.replace("%data%", jobItem.description);
		$(".work-entry:last").append(formattedDescription);	
		}
	)
}

work.display();

var education = {
	"schools":[
	{
		"name": "HKU",
		"location": "Hong Kong",
		"degree": "Bachelor",
		"majors": "Engineering",
		"dates": "2014-2016",
		"url": "http://hku.hk/"
	},
	{
		"name": "UW madison",
		"location": "Madison, WI",
		"degree": "Bachelor",
		"majors": "Engineering",
		"dates": "2016",
		"url": "http://wisc.edu"
	}],

	"onlineCourses":[
	{
		"title":"Front-End Developer Nanodegree",
		"school": "Udacity",
		"dates":"2016",
		"url": "http://udacity.com"
	}]
}

education.display =  function() {
	education.schools.forEach ( function(schoolItem) { 
		$("#education").append(HTMLschoolStart);
		//name
		var formattedschoolName = HTMLschoolName.replace("%data%", schoolItem.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", schoolItem.degree);

		$(".education-entry:last").append(formattedschoolName+formattedDegree);
		//date
		var formattedEduDate = HTMLschoolDates.replace("%data%", schoolItem.dates);
		$(".education-entry:last").append(formattedEduDate);
		//location
		var formattedlocation = HTMLschoolLocation.replace("%data%", schoolItem.location);
		$(".education-entry:last").append(formattedlocation);	
		//major
		var formattedMajor = HTMLschoolMajor.replace("%data%", schoolItem.majors);
		$(".education-entry:last").append(formattedMajor);	
		}
	)

	education.onlineCourses.forEach ( function(courseItem) { 
		$("#education").append(HTMLonlineClasses);

		$("#education").append(HTMLschoolStart);
		//name+degree
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", courseItem.title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", courseItem.school);
		$(".education-entry:last").append(formattedonlineTitle+formattedonlineSchool);
		//date
		var formattedonlineDate = HTMLonlineDates.replace("%data%", courseItem.dates);
		$(".education-entry:last").append(formattedonlineDate);
		//url
		var formattedonlineURL = HTMLonlineURL.replace("%data%", courseItem.url);
		$(".education-entry:last").append(formattedonlineURL);	
		}
	)
}

education.display();


var projects = {
 "projects":[
  {
  	"title": "Sample 1",
  	"dates": "2016",
  	"description": "Nunc sed feugiat eros. Etiam ac placerat metus. Morbi dictum ultrices fringilla. Fusce in auctor nulla. Quisque auctor lectus eu odio auctor tempor. Integer elementum sem turpis, sed suscipit enim sagittis sed. Etiam at tortor hendrerit nulla dignissim porttitor. Duis dapibus est tellus, at lobortis ante interdum vitae. Pellentesque facilisis aliquet quam eu rhoncus. Nunc congue vitae metus eget egestas. Maecenas vitae faucibus nunc. In sit amet est a massa feugiat vestibulum. Pellentesque commodo facilisis lacus consequat egestas.",
  	"images":[
	    "http://stilltechnology.com/img/code.png",
	    "http://stilltechnology.com/img/code.png"
	]
  }
 ]
}

projects.display =  function() {

	projects.projects.forEach ( function(projectItem) {
		$("#projects").append(HTMLprojectStart);
		//title
		var fomattedprojectTitle = HTMLprojectTitle.replace("%data%", projectItem.title);
		$(".project-entry:last").append(fomattedprojectTitle);
		//date
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projectItem.dates);
		$(".project-entry:last").append(formattedprojectDates);
		//description
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projectItem.description);
		$(".project-entry:last").append(formattedprojectDescription);	
		//image
		for (var indexCount = 0; indexCount < projectItem.images.length; indexCount++){
		var formattedprojectImage = HTMLprojectImage.replace("%data%", projectItem.images[indexCount]);
		$(".project-entry:last").append(formattedprojectImage);	
		}
	})
}

projects.display();

$("#main").append(internationalizeButton);

//append google map
$("#mapDiv").append(googleMap);