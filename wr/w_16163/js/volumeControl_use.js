var canvas, stage, exportRoot, captivateMovie, cpMovie, volChecker, counter = Number(0), volHolder = Number(11), incrVolume, decrVolume;
var volAlphaIncrease = new Array();
var volAlphaDecrease = new Array();
var intervalDuration;// duration between intervals, in milliseconds
var intervalId;
var counter;
var stopCount = 10;
var changAlpha = false;
var context
var evtHandle;
var movieWidth;
var movieHeight;

//:::
//:::
//VARIABLES TO HANDLE VOL CONTROLS FOR VOL SLIDER:::MARCELLUS
//::
//::
var volSlider;
var volPercent;
var minVal = 10
var maxVal = 105
var neutralVal = 45

var volumeController;
var myWidgetiFrame,volumeControlInteraction,volumeControlCanvas
var textColor, highlightColor, trackColor, baseColor
var textFontFamily,textFontSize,textFontStyle,textFontBold,textFontItalics,textFontUnderline
var showText, volumeControlVal, showHl

var myWidgetiFrame,mainCPNamespace 

function volumeControlinit() {
	canvas = document.getElementById("volumeControlCanvas");
	var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
	var myFrameName = window.name;
	myWidgetiFrame = window.parent.document.getElementById(window.name);
	if(myWidgetiFrame){
	   canvas.style.height = myWidgetiFrame.parentElement.parentElement.style.height
	   canvas.style.width = myWidgetiFrame.parentElement.parentElement.style.width
	 }
	context = canvas.getContext("2d");
	
	canvas = document.getElementById("volumeControlCanvas");
	exportRoot = new lib.volumeControl();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	
	//Needed for thr exit function to work
	
	setUpBtn();
}



function setUpBtn(){
	volumeController = exportRoot.runTime_mc;
	
	volumeController.pbcVolSlider_mc.volMask_mc.gotoAndStop(0)
	//Make PauseBtn not visible;
	
	//Disable audio controls
	volChecker =  false;
	setVoulmeOfCourse();
	
	//Hide captivate default volumeControl
	parent.cpCmndShowvolumeControl = false;
	
	//Assign names
	volumeController.pbcVolSlider_mc.volSliderBar_mc.name = "volSlider"
	volumeController.pbcVolSlider_mc.volSliderTrack_mc.name = "volTrack"
	
	//Enable Mouse Over and Mouse Out
	volumeController.pbcVolSlider_mc.volSliderBar_mc.addEventListener("mouseover", showMouse);
	volumeController.pbcVolSlider_mc.volSliderTrack_mc.addEventListener("mouseover", showMouse);
	
	volumeController.pbcVolSlider_mc.volSliderBar_mc.addEventListener("mouseout", clearMouse);
	volumeController.pbcVolSlider_mc.volSliderTrack_mc.addEventListener("mouseout", clearMouse);
	
	volumeController.pbcVolSlider_mc.volSliderBar_mc.addEventListener("mousedown", volSliderFunct);
	volumeController.pbcVolSlider_mc.volSliderTrack_mc.addEventListener("mousedown", volTrackFunct);
	//volumeController.pbcVolSlider_mc.volMask_mc.addEventListener("mousedown", volTrackFunct);
	
	//Text properties
	var volumeControlTxtElem = $("#volumeControlTxt");
	volumeControlTxtElem.css("font-family", textFontFamily)
	volumeControlTxtElem.css("font-size", textFontSize)
	volumeControlTxtElem.css("color", txtColor)
	volumeControlTxtElem.css("font-weight", textFontBold)
	volumeControlTxtElem.css("font-style", textFontItalics)
	volumeControlTxtElem.css("text-decoration", textFontUnderline)
	volumeControlTxtElem.css("text-align", "center")
	//((editTime_mc.pbcVolSlider_mc.base_mc.width - txt.width) / 2)
	//volumeControlTxtElem.css("left", 100-(volumeControlTxtElem.width()/2))
	if(showHl=="true"){
		volumeControlTxtElem.css("background-color", txtBgColor)
	}else{
		volumeControlTxtElem.css("background-color", "transparent")
	}
	
	if(showText =="true"){
		volumeControlTxtElem.text(volumeControlVal)
	}
	
	var volumeControlTxtElemLeft = (parseInt(String($(myWidgetiFrame).css("width")).replace("px",""))/2)-(parseInt(String($(volumeControlTxtElem).css("width")).replace("px",""))/2)
	$(volumeControlTxtElem).css("left",volumeControlTxtElemLeft)

}

function volSliderFunct(e){
	var getVal

	//var mask_mc = volumeController.pbcVolSlider_mc.volMask_mc;
	//var volarr = new Array(0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1);
	var volarr = new Array(0,10,20,30,40,50,60,70,80,90,100);

	e.addEventListener("mousemove" ,function(ev){
		if(e.target.parent.parent.name == "volSlider"){
			if(volumeController.pbcVolSlider_mc.volSliderBar_mc.x>= minVal && volumeController.pbcVolSlider_mc.volSliderBar_mc.x<= maxVal){
				var moveVal = ev.stageX - neutralVal
				if(moveVal<minVal){
					volumeController.pbcVolSlider_mc.volSliderBar_mc.x =  minVal
					volChecker = true;
					volPercent = parseInt((volumeController.pbcVolSlider_mc.volSliderBar_mc.x / maxVal)*100 - minVal);
				}else if(moveVal>maxVal){
					volumeController.pbcVolSlider_mc.volSliderBar_mc.x =  maxVal
					volChecker = false;
					volPercent = parseInt((volumeController.pbcVolSlider_mc.volSliderBar_mc.x / maxVal)*100 - minVal);
				}else{
					e.target.parent.parent.x =  moveVal
					volChecker = false;
					volPercent = parseInt((volumeController.pbcVolSlider_mc.volSliderBar_mc.x / maxVal)*100 - minVal);
				}
				getVal = parseInt(volPercent/10);
				counter =  getVal;
				volHolder =  getVal;
				setVolume(volPercent+getVal);
				volumeController.pbcVolSlider_mc.volMask_mc.gotoAndStop(volPercent+getVal)
			}
		}
		//ClearFadeInterval();
		stage.update(); 
	})
	e.addEventListener("mousemove" ,function(ev){
		if(e.target.parent.parent.name == "volSlider"){
			if(e.target.parent.parent.x<minVal){
				e.target.parent.parent.x=minVal
			}else if(e.target.parent.parent.x>maxVal){
				e.target.parent.parent.x=maxVal
			}
		}
	})
}
function volTrackFunct(e){
	var getVal
	//var mask_mc = volumeController.pbcVolSlider_mc.volMask_mc;
	var vloSliderMC = volumeController.pbcVolSlider_mc.volSliderBar_mc;
	var volarr = new Array(0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1);
	
	if(e.target.parent.name == "volTrack"){
		if(vloSliderMC.x>= minVal && vloSliderMC.x<= maxVal){
			var moveVal = e.stageX - neutralVal
			if(moveVal<minVal){
				volChecker = true;
				volPercent = parseInt((vloSliderMC.x / maxVal)*100 - minVal);
			}else if(moveVal>maxVal){
				vloSliderMC.x =  maxVal
				volChecker = false;
				volPercent = parseInt((vloSliderMC.x / maxVal)*100 - minVal);
			}else{
				vloSliderMC.x =  moveVal
				volChecker = false;
				volPercent = parseInt((vloSliderMC.x / maxVal)*100 - minVal);
			}
			getVal = parseInt(volPercent/10);
			counter =  getVal;
			volHolder =  getVal*2;
			setVolume(volPercent+getVal);
			volumeController.pbcVolSlider_mc.volMask_mc.gotoAndStop(volPercent+getVal)
		}
	}
}

function setVolume(num){
	var numb = Number(num);
	parent.cpCmndVolume = numb;
}

function setVoulmeOfCourse() {
	volumeController.pbcVolSlider_mc.volMask_mc.gotoAndStop(99)
	volumeController.pbcVolSlider_mc.volSliderBar_mc.x=maxVal
	setVolume(100);
}

function ClearInterval() {
	intervalDuration = 100;// duration between intervals, in milliseconds
	counter = 1;
	clearInterval(intervalId);
	intervalId = setInterval(myRepeatingFunction,intervalDuration);
}

function myRepeatingFunction() {
	counter++;
	if (changAlpha) {
		volumeController.pbcVolSlider_mc.alpha=(volAlphaIncrease[counter]);
	} else {
		volumeController.pbcVolSlider_mc.alpha=(volAlphaDecrease[counter]);
	}
	if (counter >= stopCount) {
		clearInterval(intervalId);
		if (! changAlpha) {
			disableSlider();
		} else {
			ClearFadeInterval();
		}
	}
}

function disableSlider(){
	vloSliderMC.enabled=false;
	volumeController.pbcVolSlider_mc.volSliderTrack_mc.enabled=false;
}
function enableSlider(){
	vloSliderMC.enabled=true;
	volumeController.pbcVolSlider_mc.volSliderTrack_mc.enabled=true;
}
function volumeHandler() {
	if (volumeController.pbcVolSlider_mc.alpha == 1) {
		changAlpha = false;
		disableSlider()
	} else {
		changAlpha = true;
		enableSlider();
	}
}

function showMouse(evt){
	canvas.style.cursor = "pointer"
}

function clearMouse(evt){
	canvas.style.cursor = "default"
}


volumeControlUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
		captivateMovie =  this.captivate;
		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		this.varHandle = this.movieProps.variablesHandle;
		this.eventDisp = this.movieProps.eventDispatcher;
		evtHandle = this.movieProps.eventDispatcher;
		mainCPNamespace = this.movieProps.getCpHandle();
		this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
		var size = this.OpenAjax.getSize();
		width = size.width;
		height = size.height;
		this.internalImage = '';
		this.externalImage = '';
		this.instructions = '';
		this.buttonLabel = '';
		this.buttonContent = '';
		this.soundName = '';
		this.title = '';
		this.directions = '';
		this.currentTheme
		
		movieWidth = parseInt(size.width.split("px")[0]);
		movieHeight = parseInt(size.height.split("px")[0])
			
		this.updateData();
		volumeControlinit();
		this.doUpdate();       
		cpMovie = parent.cp.movie;    
		
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
                 
		
	},

	updateData: function()
	{
		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		myWidgetiFrame = window.parent.document.getElementById(window.name);
		volumeControlInteraction =  document.getElementById("volumeControlDiv");
		volumeControlCanvas = document.getElementById("volumeControlCanvas");
		volumeControltext = document.getElementById("volumeControlTxt");
		
		if (myWidgetiFrame) {
			myWidgetiFrame.style.height = movieHeight + "px";
			myWidgetiFrame.style.width = movieWidth + "px";
		}
		
		var initresult = jQuery.parseXML( this.xmlStr );
		var initresultDoc = jQuery( initresult );
		var thexml = initresultDoc.find( 'string' ).text();  
		var tempStringStartLoc = thexml.indexOf("<");
		var tempStringEndLoc = thexml.lastIndexOf(">")+1;
		thexml = thexml.substring(tempStringStartLoc, tempStringEndLoc)
		var result = jQuery.parseXML( thexml );
		var resultDoc = jQuery( result );
		//BREAKING UP THE XML FROM CAPTIVATE
		//Game Variable
		var textProperties = resultDoc.find('textProperties');
		var userData = resultDoc.find('userdata');
		
		textColor = "#" +(textProperties.children('color').attr("textColorHex"))
		highlightColor = "#" +(textProperties.children('color').attr("highlightColorHex"))
		trackColor = "#" +(textProperties.children('color').attr("trackColorHex"))
		baseColor = "#" +(textProperties.children('color').attr("baseColorHex"))
		
		//text properties
		textFontFamily = textProperties.children('font').attr("face");
		textFontSize = textProperties.children('font').attr("size");
		textFontStyle = textProperties.children('font').attr("style");
		
		var textFontBoldVar = textProperties.children('textDecoration').attr("bold");
		if(textFontBoldVar == "true"){
			textFontBold = "bold"
		}else{
			textFontBold = "normal"
		}
		
		var textFontItalicsVar = textProperties.children('textDecoration').attr("italic");
		if(textFontItalicsVar == "true"){
			textFontItalics = "italic"
		}else{
			textFontItalics = "normal"
		}
		
		var textFontUnderlineVar = textProperties.children('textDecoration').attr("underline"); 
		if(textFontUnderlineVar == "true"){
			textFontUnderline = "underline"
		}else{
			textFontUnderline = "none"
		}
		
		showHl = textProperties.children('color').attr("showHl");
		txtColor = textProperties.children('color').attr("textColorHex");
		txtColor = "#" +txtColor;
		txtBgColor = textProperties.children('color').attr("highlightColorHex");
		txtBgColor = "#" +txtBgColor;
		
		//text properties
		showText = userData.attr('showLabel');
		volumeControlVal = userData.attr('label');
		
		console.log("asdsad")
		
	},
	
	doUpdate: function() 
	{
		//init the default html values
		//var divHtmlHeader = "<div class='header'><a>aaaa this button to see the response in the drop down box.</a></div>";
		//var divHtmlContent = "<div class='content'>aaaa job! That was easy, wasn't it?</div>";
		resizeInteraction(width, height);
	}
};

volumeControl_use = function ()
{
	return volumeControlUse1;
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width, height);
}

function resizeInteraction(thewidth, theheight) {
	console.log("resizing")
	var scale = 0;
	thewidth = String(thewidth).replace("px","");
	theheight = String(theheight).replace("px","");
	//if(thewidth<320){
		//thewidth = 320
	//}
	//if(theheight<350){
		//theheight = 350
	//}
	
	/**********************/
	//Modification made for Presenter same logic holds good for Captivate
	//iframe width and Height
	scaleW = thewidth / (200);
	scaleH = theheight/ (60);
	
	myWidgetiFrame.style.width = parseInt(parseInt(200*scaleW))+"px";
	myWidgetiFrame.style.height = parseInt(parseInt(60*scaleH))+"px";
	
	volumeControlInteraction.style.width = parseInt(parseInt(200*scaleW))+"px";
	volumeControlInteraction.style.height = parseInt(parseInt(60*scaleH))+"px";
	
	volumeControlCanvas.style.width = parseInt(parseInt(200*scaleW))+"px";
	volumeControlCanvas.style.height = parseInt(parseInt(60*scaleH))+"px";	
	
	volumeControltext.style.width = parseInt(parseInt(150*scaleW))+"px";
	volumeControltext.style.height = parseInt(parseInt(60*scaleH))+"px";	
	
	volumeControltext.style.top = parseInt(parseInt(32*scaleW))+"px";
	volumeControltext.style.left = parseInt(parseInt(25*scaleW))+"px";
	
	var fontScale = textFontSize*scaleW;
	if(fontScale<=10){
		fontScale = 10
	}
	
	volumeControltext.style.fontSize = (fontScale)+"px"
}
