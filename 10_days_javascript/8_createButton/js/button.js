let btn = document.getElementById('btn');

let num = btn.innerHTML;
btn.addEventListener('click', function() {
  num++;
  btn.innerHTML = num;
});
