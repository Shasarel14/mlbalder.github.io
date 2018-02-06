var kick = false;
var civ = [];
function dateToDeg(){
	var ctime = new Date();
	return({h:unitToDeg(ctime.getHours(), 24),m:unitToDeg(min=ctime.getMinutes(), 60),s:unitToDeg(sec=ctime.getSeconds(), 60)});
}
function unitToDeg(current, max){
	return 360*current/max;
}

function tick(){
	var tt = dateToDeg();
	$("#img1")[0].style.transform="rotate("+tt.s+"deg)";
	$("#img2")[0].style.transform="rotate("+tt.m+"deg)";
	$("#img3")[0].style.transform="rotate("+tt.h+"deg)";
}
function getRandDeg(){
	return parseInt(360 * Math.random());
}
function getRandTime(){
	return parseInt(500 + 1000* Math.random());
}

function switchClock(){
	console.log("click");
	for (var i=0; i < civ.length; i++) {
        clearInterval(civ[i]);
    }
	kick = !kick;
	kick?startkick():startclock();
}
function startclock(){
	civ.push(setInterval(tick,1000));
	updateBg("./resources/clock1.png");
}

function doTheKick(sel){
	$(sel)[0].style.transform="rotate("+getRandDeg()+"deg)";
	console.log('kick!')
}
function startkick(){
	updateBg("./resources/clock2.png");
	var t1 = getRandTime(),t2 = getRandTime(),t3 = getRandTime();
	civ.push(setInterval(function(){doTheKick("#img1")},t1));
	civ.push(setInterval(function(){doTheKick("#img2")},t2));
	civ.push(setInterval(function(){doTheKick("#img3")},t3));
}
function updateBg(bg){
	$('#clock').animate({opacity: 0}, 50, function() {
		$(this).css({'background-image': 'url('+bg+')'}).animate({opacity: 1});
	});
}
startclock();