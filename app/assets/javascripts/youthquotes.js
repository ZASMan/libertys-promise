/*This file stores quotes from Liberty's Promise participants and are randomly generated on specific sections of the websites. Each object is based on the program that the youth quote is about
and the impact the program had on the youth. The quote subjects include community, college, jobs, support, and diversity.
Please note that the quotes feature both participants from Liberty's Promise Civics and Citizenship AND CE-BELL programs. 
To respect the privacy of participants, only the youth country and program is retained.*/

//Quotes about involvement in community for the "impact" page
var communityQuotes = {
	"quote1": 'Youth from Jamaica: <i>"I participate in Liberty’s Promise because I want to be more engaged in the community and be more prepared for my future." </i>',
	"quote2": 'Youth from El Salvador: <i>"I learned how to help people from my community, and I also learned that if you do something small for someone, it can go a long way."</i>',
	"quote3": 'Youth from Bolivia: <i>"I participated in Liberty’s Promise because I needed help with my community service hours and because I wanted to learn how everything works in the United States."</i>',
	"quote4": 'Youth from El Salvador: <i>"Liberty’s Promise is very important to me because it helped me to get involved in my community."</i>',
};

//Quotes about preperation for college for the "impact" page
var collegeQuotes = {
	"quote1": 'Youth from Congo: <i>"I told my friends at school that we\'re learning how we can be the best students at school."</i>',
	"quote2": 'Youth from Ethiopia: <i>"I learned that learning can change my life. And if I give an effort, I can change the world."</i>',
	"quote3: ": 'Youth from the United Arab Emirates: <i>"In Liberty\'s Promise, I learned a lot of stuff. When I started I didn\'t know anything about college and careers and now I know everything about them,"</i>',
	"quote4": 'Youth from Ecuador: <i>"I learned that we must achieve our dreams. This program will help me be something in life, like go to a college and graduate. This program will help me a lot."</i>',
};

//Quotes about preperation for jobs for the "impact" page
var jobQuotes = {
	"quote1": 'Youth from Ethiopia: <i>"My internship gave me an experience of what the working world is like. Now I know what to expect- what to do and what not to do."</i>',
	"quote2": 'Youth from Ethiopia: <i>"In Liberty’s Promise this semester I learned how to apply for a job and how to shake hands.</i>',
	"quote3": 'Youth from Honduras: <i>"In Liberty’s Promise, I learned how to do a successful interview and apply for a job."</i>',
	"quote4": 'Youth from Ecuador: <i>"This program will help me in the future by meeting more people that are experienced in their careers."</i>'
};

//Quotes about individual support and mentoring for the "impact" page

var supportQuotes = {
	"quote1": 'Youth from Rwanda: <i>"I love Liberty\'s Promise staff because they help me in different things. Every thing I ask them, they would answer my question like how I need it."</i>',
	"quote2": 'Youth from Democratic Republic of the Congo: <i>"I really thank you guys for helping me in all kinds of ways. May God bless and protect you guys. You\'re heroes. You did a lot of things that I can\'t explain. Thank you so much,"</i>',
	"quote3": 'Youth from El Salvador: <i>"Liberty’s Promise is a great program that helps the Hispanic community. They have always been there for me when I face difficulties at home," </i>',
	"quote4": 'Youth from El Salvador: <i>"I participate in Liberty\'s Promise because it makes me feel great. They support me and I get to meet new people,"</i>',
};

//Quotes about friendship and diversity in LP programs for the "map" page

var diversityQuotes = {
	"quote1": 'Youth from Ethiopia: <i>"Liberty\'s Promise helped me communicate with different kinds of students who are from different countries and cultures,"</i>',
	"quote2": 'Youth from Guatemala: <i>"I like the variety of cultures that are a part of Liberty\'s Promise," </i>',
	"quote3": 'Youth from Nigeria: <i>"Liberty\'s Promise is about immigrants coming together to learn new things, build relationships, and learn about different opportunities,"</i>',
	"quote4": 'Youth from Pakistan: <i>"Liberty\'s Promise is about working together as a family and growing stronger with the increase in knowledge,"</i>',
};

//General youth quotes about Liberty's Promise appended to the about us, staff, donor, and board pages

var generalQuotes = {
	"quote1": 'Youth from Ethiopia: <i>"I faced challenges in the U.S. and Liberty\'s Promise gave me a better understanding of my new environment and how I can relate to the people."</i>',
	"quote2": 'Youth from the Philippines: <i>"I participate in Liberty\'s Promise because I know that I can do something and make a future for my life and the world."</i>',
	"quote3": 'Youth from Nepal: <i>"Liberty\'s Promise is about learning about college, our society, and the community."</i>',
	"quote4": 'Youth from El Salvador: <i>"I participate in Liberty\'s Promise because it is the first place where I feel comfortable."</i>',
};


//The functions below deal with rendering the quotes onto the blank divs on their respective pages

var randomNumber = Math.floor(Math.random(10)*10);

//Rending Quotes about involvement in community for the "impact" page

$(document).ready(function() {
	if (randomNumber <= 2) {
		$(".community-quote").append(communityQuotes.quote1);
	} else if (randomNumber > 2 && randomNumber <= 4) {
		$(".community-quote").append(communityQuotes.quote2);
	} else if (randomNumber > 4 && randomNumber <= 6) {
		$(".community-quote").append(communityQuotes.quote3);
	} else {
		$(".community-quote").append(communityQuotes.quote4);
	};
});

//Quotes about preperation for college for the "impact" page
$(document).ready(function() {
	if (randomNumber <= 2) {
		$(".college-quote").append(collegeQuotes.quote1);
	} else if (randomNumber > 2 && randomNumber <= 4) {
		$(".college-quote").append(collegeQuotes.quote2);
	} else if (randomNumber > 4 && randomNumber <= 6) {
		$(".college-quote").append(collegeQuotes.quote3);
	} else {
		$(".college-quote").append(collegeQuotes.quote4);
	};
});

//Quotes about preperation for jobs for the "impact" page
$(document).ready(function() {
	if (randomNumber <= 2) {
		$(".job-quote").append(jobQuotes.quote1);
	} else if (randomNumber > 2 && randomNumber <= 4) {
		$(".job-quote").append(jobQuotes.quote2);
	} else if (randomNumber > 4 && randomNumber <= 6) {
		$(".job-quote").append(jobQuotes.quote3);
	} else {
		$(".job-quote").append(jobQuotes.quote4);
	};
});

//Quotes about individual support and mentoring for the "impact" page
$(document).ready(function() {
	if (randomNumber <= 2) {
		$(".support-quote").append(supportQuotes.quote1);
	} else if (randomNumber > 2 && randomNumber <= 4) {
		$(".support-quote").append(supportQuotes.quote2);
	} else if (randomNumber > 4 && randomNumber <= 6) {
		$(".support-quote").append(supportQuotes.quote3);
	} else {
		$(".support-quote").append(supportQuotes.quote4);
	};
});

//Quotes about friendship and diversity in LP programs for the "map" page
$(document).ready(function() {
	if (randomNumber <= 2) {
		$(".diversity-quote").append(diversityQuotes.quote1);
	} else if (randomNumber > 2 && randomNumber <= 4) {
		$(".diversity-quote").append(diversityQuotes.quote2);
	} else if (randomNumber > 4 && randomNumber <= 6) {
		$(".diversity-quote").append(diversityQuotes.quote3);
	} else {
		$(".diversity-quote").append(diversityQuotes.quote4);
	}
});

//General youth quotes about Liberty's Promise appended to the staff, donor, and board pages
$(document).ready(function() {
	if (randomNumber <= 2) {
		$(".general-quote").append(generalQuotes.quote1);
	} else if (randomNumber > 2 && randomNumber <= 4) {
		$(".general-quote").append(generalQuotes.quote2);
	} else if (randomNumber > 4 && randomNumber <= 6) {
		$(".general-quote").append(generalQuotes.quote3);
	} else {
		$(".general-quote").append(generalQuotes.quote4);
	}
});

//Quotes about Civics and Citizenship to be appended to the bottom of the civics page

//Quotes about the CE-BELL program to be appended to the bottom of the CE-bell page

//Quotes about the internship program to be appended to the bottom of the Opportunities Plus page
