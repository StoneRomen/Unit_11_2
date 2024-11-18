
// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір


document.getElementById('button').addEventListener('click', function () {
   const text = document.getElementById('textColor');
   if (text.style.color === 'red') {
      text.style.color = 'green';
   }
   else {
      text.style.color = 'red';
   }
});

