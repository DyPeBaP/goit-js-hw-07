const text = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
  };
  
  text.input.min = 14;
  
  text.input.addEventListener('input', onChangeFont);
  
  function onChangeFont(event) {
    text.span.style.fontSize = event.currentTarget.value + 'px';
  }
  