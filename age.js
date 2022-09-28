<script>
var form = document.getElementById("form"),
	bdate = document.getElementById("date"),
	bmonth = document.getElementById("month"),
	byear = document.getElementById("year"),
	date = document.getElementById("date2"),
	month = document.getElementById("month2"),
	year = document.getElementById("year2"),
	age = document.getElementById("age"),
	days = document.getElementById("days"),
	mons = document.getElementById("months"),
	today = new Date();

year.value = today.getFullYear();
month.value = today.getMonth() + 1;
date.value = today.getDate();

form.addEventListener('submit', function(event) {
	event.preventDefault();

	var by = Number.parseFloat(byear.value),
		bm = Number.parseFloat(bmonth.value),
		bd = Number.parseFloat(bdate.value),
		ty = Number.parseFloat(year.value),
		tm = Number.parseFloat(month.value),
		td = Number.parseFloat(date.value);

	if (td < bd) {
		days.innerHTML = (td - bd + 30) + ' Day';
		tm = tm - 1;
	} else {
		days.innerHTML = (td - bd) + ' Day '
	}

	if (tm < bm) {
		months.innerHTML = (tm - bm + 12) + ' Month';
		ty = ty - 1;
	} else {
		months.innerHTML = (tm - bm) + ' Month '
	}

	age.innerHTML = " " + (ty - by) + ' Year ';

});
</script>
<script>
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
</script>
<script>
function openNav() {
  document.getElementById("mySidenav").style.width = "195px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
</script>
