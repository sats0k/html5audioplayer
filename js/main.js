var audio;

//Hide Pause Initially
$('#pause').hide();
	
//Initializer - Play First Song
initAudio($('#playlist li:first-child'));
	
function initAudio(element){
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

	//Create a New Audio Object
	audio = new Audio('media/' + song);
	
	if(!audio.currentTime){
		$('#duration').html('0.00');
	}

	$('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);
	
	//Insert Cover Image
	$('img.cover').attr('src','images/covers/' + cover);
	
	$('#playlist li').removeClass('active');
    element.addClass('active');
}


//Play Button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//Pause Button
$('#pause').click(function(){
	audio.pause();
	$('#pause').hide();
	$('#play').show();
});
	
//Stop Button
$('#stop').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
	$('#duration').fadeOut(400);
});

//Next Button
$('#next').click(function(){
    audio.pause();
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
	audio.play();
	showDuration();
});

//Prev Button
$('#prev').click(function(){
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
	audio.play();
	showDuration();
});

//Playlist Song Click
$('#playlist li').click(function () {
    audio.pause();
    initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//Volume Control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});
	
//Time Duration
function showDuration(){
	$(audio).bind('timeupdate', function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime / 60) % 60);
		//Add 0 if seconds less than 10
		if (s < 10) {
			s = '0' + s;
		}
		$('#duration').html(m + '.' + s);	
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}

//Dropdown Menu
function function1() {
   var x = document.getElementById("drop-content1") ;
   if(x.style.display === "none") {
       x.style.display = "block";
   }else{
       x.style.display = "none";
   }
}

function function2() {
   var x = document.getElementById("drop-content2") ;
   if(x.style.display === "none") {
       x.style.display = "block";
   }else{
       x.style.display = "none";
   }
}

function function3() {
   var x = document.getElementById("drop-content3") ;
   if(x.style.display === "none") {
       x.style.display = "block";
   }else{
       x.style.display = "none";
   }
}

//Play At Specific Time
//First Album
$('#a01').click(function () {
    audio.pause();
    initAudio($(this));
	audio.currentTime = 0;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#a02').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 319;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#a03').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 680;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#a04').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 931;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#a05').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 1293;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//Second Album
$('#b01').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 0;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#b02').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 515;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#b03').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 743;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#b04').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 1060;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#b05').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 1450;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//Third Album
$('#c01').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 0;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#c02').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 769;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#c03').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 1104;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#c04').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 1388;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#c05').click(function(){
    audio.pause();
    initAudio($(this));
	audio.currentTime = 1765;
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

