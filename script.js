let title =
  document.querySelector('.title')

let storyOpening =
  document.querySelector('.story-opening')

let firstChoice =
  document.querySelector('#first_choice')

let no =
  document.querySelector('#no')

let yes =
  document.querySelector('#yes')

let choseNo =
  document.querySelector('#chose_no')

let choseYes =
  document.querySelector('#chose_yes')

let secondChoice =
  document.querySelector('#second_choice')

let nope =
  document.querySelector('#nope')

let sure =
  document.querySelector('#sure')

let choseSure =
  document.querySelector('#chose_sure')

let continuation =
  document.querySelector('#continue')

let ending =
  document.querySelector('#end')

no.onclick = function() {
  title.style.display = 'none';
  storyOpening.style.display = 'none';
  firstChoice.style.display = 'none';
  choseNo.style.display = 'block';
}

yes.onclick = function() {
  title.style.display = 'none';
  storyOpening.style.display = 'none';
  firstChoice.style.display = 'none';
  choseNo.style.display = 'none';
  choseYes.style.display = 'block';
  secondChoice.style.display = 'block';
}

nope.onclick = function() {
  choseYes.style.display = 'none';
  secondChoice.style.display = 'none';
  choseNo.style.display = 'block';
}

sure.onclick = function() {
  secondChoice.style.display = 'none';
  choseYes.style.display = 'none';
  choseNo.style.display = 'none';
  choseSure.style.display = 'block';
  continuation.style.display = 'block';
}

continuation.onclick = function() {
  secondChoice.style.display = 'none';
  choseSure.style.display = 'none';
  continuation.style.display = 'none';
  ending.style.display = 'block';
}