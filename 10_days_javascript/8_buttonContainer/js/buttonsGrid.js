let btns = document.getElementsByTagName('button');
document.getElementById('btn5').addEventListener('click', function() {
  let bArray = Array.from(btns);
  let btnSave = bArray.map(x => x.innerHTML);
  bArray.forEach(btn => {
    switch (btn.id) {
      case 'btn1':
        btn.innerHTML = btnSave[3];
        break;
      case 'btn2':
        btn.innerHTML = btnSave[0];
        break;
      case 'btn3':
        btn.innerHTML = btnSave[1];
        break;
      case 'btn4':
        btn.innerHTML = btnSave[6];
        break;
      case 'btn6':
        btn.innerHTML = btnSave[2];
        break;
      case 'btn7':
        btn.innerHTML = btnSave[7];
        break;
      case 'btn8':
        btn.innerHTML = btnSave[8];
        break;
      case 'btn9':
        btn.innerHTML = btnSave[5];
        break;
    }
  });
});
