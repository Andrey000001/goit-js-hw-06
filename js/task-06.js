const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur',(e) => {
  const eCurrentTarget = e.currentTarget
  if(eCurrentTarget.value.length === Number(eCurrentTarget.dataset.length)) {
    eCurrentTarget.classList.add('valid')
    eCurrentTarget.classList.remove('invalid')
  } else {
    eCurrentTarget.classList.add('invalid')
    eCurrentTarget.classList.remove('valid')
  }
})