
var images =
[
	"images/Slideshow/Ducati 2.jpg",
	"images/Slideshow/Ducati 3.jpg",
	"images/Slideshow/Ducati 4.jpg",
	"images/Slideshow/Ducati 5.jpg",
	"images/Slideshow/Ducati 6.jpg",
	"images/Slideshow/Ducati 7.jpg",
	"images/Slideshow/Ducati 8.jpg",
	"images/Slideshow/Ducati 9.jpg",
	"images/Slideshow/Ducati 10.jpg",
	"images/Slideshow/Ducati 11.jpg",
	"images/Slideshow/Ducati 12.jpg"
	
];

var slideIndex = 0;


function plusDivs(n) 
{
    showDivs(n);
}

function showDivs(n)
{
	//Offset from slideIndex
	var offset = n + slideIndex;
	
	//If its a positive number, mod it by the amount of images.. 
	//wrap it back to 0 if it exceeds
	if(offset >= 0)
		offset %= images.length;
	
	//the same, but if it's negative (go to the end)
	else
		offset = images.length - 1;
	
	//Change the slide index
	slideIndex = offset;
	
	//And finally change the image
	document.getElementById("mySlides").src = images[slideIndex];
	
}

//different coloured ducatti images counting as the body of the motorcycle
var headImages = 
[
	"images/ducati a.png", 
	"images/ducati b.png",
	"images/ducati c.png",
	"images/ducati d.png",
	"images/ducati e.png"
];

//All the images are the tyres/colours
var torsoImages = 
[
	"images/ducati tyre a.png",
	"images/ducati tyre b.png",
	"images/ducati tyre c.png",
	"images/ducati tyre d.png",
	"images/ducati tyre e.png"
];



//Index for each ducatti 
var headIndex, torsoIndex;

//All set 0 as the initial state
headIndex = torsoIndex = 0;

//ducatti elements such as the head and torso. 
var headImage, torsoImage;

/**
 * once the page loads this is initiated
*/
window.onload = function()
{
	//Get each element for the body colour and tyre colour
	headImage  = document.getElementById("head-image");
	torsoImage = document.getElementById("torso-image");
	
	
	//Set images initially
	onBodyChanged();
}


/**
 * Randomize button. 
*/
function randomizeBody()
{
	
	var headMax = headImages.length;
	var torsoMax = torsoImages.length;
	
	
	headIndex = getRandomInt(headMax);
	torsoIndex = getRandomInt(torsoMax);
	
	
	onBodyChanged();
}

function getRandomInt(max)
{
return Math.floor(Math.random() * max);
}

function updateSelectorBox()
{
	//Get the element we're going to change
	var selectorBox = document.getElementById("selector-box");
	
	//Set it's value to nothing, reset it.
	selectorBox.value = "";
	
	//Finally, just append each index to the string
	selectorBox.value += ("head: " + headIndex  + " | ");
	selectorBox.value += ("torso: " + torsoIndex + " | ");
	
	
}


/**
 * once arrow is clicked on HTML page this code is intiated thus letting you change the image/colour
*/
function onHeadChange(offset)
{
	//Find the index which is offset from the current head index by the given offset.
	var offsetIndex = (headIndex + offset);
	
	//If it's negative, set the index to the last image:
	if(offsetIndex < 0)
		headIndex = headImages.length + offset;
	
	//Otherwise just add the offset and modulo by the length to "wrap around" the values
	else
		headIndex = (headIndex + offset) % headImages.length;
	
	// callback for when the image has changed
	onBodyChanged();
}


/**
 * once arrow is clicked on HTML page this code is intiated thus letting you change the image/colour
*/
function onTorsoChange(offset)
{
	//Find the index which is offset from the current torso index by the given offset.
	var offsetIndex = (torsoIndex + offset);
	
	//If it's negative, set the index to the last image:
	if(offsetIndex < 0)
		torsoIndex = torsoImages.length + offset;
	
	//Otherwise just add the offset and modulo by the length to "wrap around" the values
	else
		torsoIndex = (torsoIndex + offset) % torsoImages.length;
	
	// callback for when the image has changed
	onBodyChanged();
}




/**
 * Called when the user has changed the body in some way by choosing a different body colour or tyre colour
*/
function onBodyChanged()
{
	//Update the display showing which indices these are.
	updateSelectorBox();
	
	//Set head, torso and legs images
	headImage.src = headImages[headIndex];
	torsoImage.src = torsoImages[torsoIndex];
	legsImage.src = legsImages[legsIndex];
}


/**
 * saves the curtrently selected colours that the user has placed
*/
function saveSelection()
{
	localStorage.setItem("chosenHead" , headIndex);
	localStorage.setItem("chosenTorso", torsoIndex);
	
	
	onBodyChanged();
}


/**
 * Loads the previously saved colours and displays it to the user
*/
function loadSelection()
{
	headIndex  = localStorage.getItem("chosenHead");
	torsoIndex = localStorage.getItem("chosenTorso");
	
	

	onBodyChanged();
}








