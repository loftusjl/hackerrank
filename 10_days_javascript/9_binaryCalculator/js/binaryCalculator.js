document.querySelectorAll('button').forEach(function(b) {
  b.addEventListener('click', function() {
    console.log(b.id);
    let disp = document.getElementById('res');
    let calc = disp.innerHTML.split(/([\+\-\*\/])/);
    b.id != 'btnClr' && b.id != 'btnEql'
      ? (disp.innerHTML = disp.innerHTML + b.innerHTML)
      : b.id === 'btnClr'
      ? (disp.innerHTML = '')
      : (disp.innerHTML = eval(
          parseInt(calc[0], 2) + calc[1] + parseInt(calc[2], 2)
        ).toString(2));
  });
});
