<!--Слайдер 
		<div class="myClass2">

			<button id="nSlide" onclick="prev()">Назад</button>
			
			<img id="slider" src="img/8.jpg" >

			<button id="vSlide" onclick="next()">Вперед</button>

		</div>

 -->

 var images = ["img/8.jpg", "img/6.jpg","img/2.jpg"];
				
var num = 0;
function next() {
	var slider = document.getElementById('slider');
	num++;
	if (num>=images.length) {
		num = 0;
	}
	slider.src = images[num];
}

function prev() {
	var slider = document.getElementById('slider');
	num--;
	if (num<0) {
		num = images.length-1;
	}
	slider.src = images[num];
}
