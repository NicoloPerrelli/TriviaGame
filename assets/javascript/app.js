var correct = 0;
var wrong = 0;
var unanswered = 0;
var i = 0;
var timer;

var questions = [
	{question : "A Gold Dragonborn is Resistant to What Type of Damage?",
	option1 : "Cold",
	option2 : "Fire",
	option3 : "Slashing",
	option4 : "Force",
	awnswer : "fire"},

	{question : "How Many Eyes of A Beholder are Needed to Summon A Spectator?",
	option1 : "5",
	option2 : "10",
	option3 : "None",
	option4 : "4",
	awnswer : "4"},

	{question : "Out of What Creatures Death Will the Plant Monsters Known as the Blight Arise?",
	option1 : "Vampire",
	option2 : "Dragon",
	option3 : "Lich",
	option4 : "Bullywog",
	awnswer : "Vampire"},

	{question : "How Many Darts are Created From a 2nd Level Magic Missle?",
	option1 : "3",
	option2 : "6",
	option3 : "4",
	option4 : "8",
	awnswer : "4"},

	{question : "What is Not an Effect Created by the Mold Earth Spell?",
	option1 : "You Can Move Loose Earth up to 5 Feet Away",
	option2 : "You Cause Shapes and Colors to Appear",
	option3 : "You Cause the Ground to Become Difficult Terrain, or Vise Versa",
	option4 : "You Can Hurl A Small Stone up to 120 ft.",
	awnswer : "You Can Hurl A Small Stone up to 120 ft."}
]

function checkMe(){
	var thing = $(this).attr("awnsers");
	if(thing == questions[i].awnswer){
		correct++;}
	else{
		wrong++;}
	$("#awnsers").empty();
	$("#question").empty();
	i++;

	if(i >= 5){
		i = 0;
		$("#score").append("Correct: "+correct+" // Wrong: "+wrong+" // Unanswered: "+unanswered);
		correct = 0;
		wrong = 0;
		unanswered = 0;
		startScreen();}
	else{
		nextQuestion();}
}

function nextQuestion(){

	clearTimeout(timer);

	$("#score").empty();
	$("#startButton").empty();

	timer = setTimeout(function() {
		unanswered++;
		i++;
		$("#awnsers").empty();
		$("#question").empty();

		if(i >= 5){
			i = 0;
			$("#score").append("Correct: "+correct+" // Wrong: "+wrong+" // Unanswered: "+unanswered);
			correct = 0;
			wrong = 0;
			unanswered = 0;
			startScreen();}
		else{nextQuestion();}
	},10000);

	$("#question").append(questions[i].question)

	var btn1 = $("<button>");
	btn1.addClass("answer");
	btn1.text(questions[i].option1);
	btn1.attr("awnsers", questions[i].option1);
	$("#awnsers").append(btn1);

	var btn2 = $("<button>");
	btn2.addClass("answer");
	btn2.text(questions[i].option2);
	btn2.attr("awnsers", questions[i].option2);
	$("#awnsers").append(btn2);

	var btn3 = $("<button>");
	btn3.addClass("answer");
	btn3.text(questions[i].option3);
	btn3.attr("awnsers", questions[i].option3);
	$("#awnsers").append(btn3);

	var btn4 = $("<button>");
	btn4.addClass("answer");
	btn4.text(questions[i].option4);
	btn4.attr("awnsers", questions[i].option4);
	$("#awnsers").append(btn4);
}

function startScreen(){
	clearTimeout(timer);
	$("#awnsers").empty();
	$("#question").empty();
	var btn = $("<button>");
	btn.addClass("start");
	btn.text("Start");
	$("#startButton").append(btn)
}
//LISTEN TO MY BUTTONS
$(document).on("click", ".start", nextQuestion);
$(document).on("click", ".answer", checkMe);

startScreen();