var picker = document.getElementById('colorPicker');
var opasity = document.getElementById('opasityRange');

picker.addEventListener('change', function() {
	let box = document.getElementsByClassName('cardName');
  for (let j = 0; j < box.length; j++) {
  	box[j].style.backgroundColor = this.value; 
  }
})

opasity.addEventListener('input', function() {
	let box = document.getElementsByClassName('cardName');
  for (let h = 0; h < box.length; h++) {
  	box[h].style.opasity = this.value; 
  }
  console.log(this.value);
})

let k = 0;
let intro_text = "Choose select first"
let speed_text = Math.random()*(80-30)+30;

function typeWriter() {
	if (k < intro_text.length) {
		document.getElementById("intro").innerHTML += intro_text.charAt(k);
		k++;
		setTimeout(typeWriter, speed_text);
	}
}
typeWriter();



//выделение по одинарному клику
function toggleClass(el, class1, class2) {
  el.className = (el.className == class1) ? class2 : class1;
}

//выделение по двойному клику
function toggleClass(el, class1, class3) {
  el.className = (el.className == class1) ? class3 : class1;
}

$(document).ready(function() {
	let switch_member;
	$('#select-member').change (function() {
  	$("#select-card").css("display", "inline-block");
    	switch_member = $(this).val();
      console.log(switch_member);
  })
  
  $('#select-card').change(function() {
    if ($(this).val() === "1") {
      $("#section_kor").css("display", "flex");
      $("#section_jap").css("display", "none");
      $("#section_tour").css("display", "none");
      for (let c = 1; c < 999; c++) {
        let name = "card-1-" + c;
        let card = document.getElementById(name);
        let img = "url(img/1-"+switch_member+"-"+c+".png)";
        card.style.backgroundImage = img;
      }
    } else if ($(this).val() === "2") {
      $("#section_kor").css("display", "none");
      $("#section_jap").css("display", "flex");
      $("#section_tour").css("display", "none");
    } else if ($(this).val() === "3") {
      $("#section_kor").css("display", "none");
      $("#section_jap").css("display", "none");
      $("#section_tour").css("display", "flex");
    }
  });
})