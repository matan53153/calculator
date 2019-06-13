window.onload = function() {
  let buttons = document.getElementById('buttons');
  let clear = document.getElementById('clear');
  let answer = document.getElementById('answer');

  buttons.addEventListener('click', function(e) {
    if (e.target.nodeName === 'LI') {

      let v = e.target.innerHTML;

      if (v === '=') {

        try {
          answer.innerHTML = eval(answer.innerHTML);
        } catch(e) {
          answer.innerHTML = 'Unable to evaluate';
        }
      } else {
        answer.innerHTML += v
      }
    }
  })

  clear.addEventListener('click', function(e) {
    answer.innerHTML = '';

  })


}
