var quoteArray = [
	"Don't let mental blocks control you. Set yourself free. Confront your fear and turn the mental blocks into building blocks.",
	"Time you enjoy wasting is not wasted time.",
	"People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
	"Doubt kills more dreams than failure ever will.",
	"What you do matters, but why you do it matters much more",
	"Nothing is so fatiguing as the eternal hanging on of an uncompleted task.",
	"You can't climb the ladder of success with your hands in your pockets.",
	"Fear, uncertainty and discomfort are your compasses toward growth.",
	"Victory is sweetest when you've known defeat.",
	"A person who never made a mistake never tried anything new.",
	"No matter how hard the past, you can always begin again.",
	"If you find yourself constantly trying to prove your worth to someone, you have already forgotten your value",
	"It doesn't matter where you start. Only that you begin.",
	"Rules for happiness: something to do, someone to love, something to hope for.",
	"Overthinking ruins you. Ruins the situation, twists it around, makes you worry and just makes everything much worse than it actually is.",
	"You may not control all the events that happen to you, but you can decide not to be reduced by them.",
	"If you cannot do great things, do small things in a great way."
];

function newQuote() {
	var rand = quoteArray[Math.floor(Math.random() * quoteArray.length)]
	document.getElementById("quote").innerHTML = rand;
}