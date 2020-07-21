const wibHomeschool = document.querySelector('#wibHomeschool');
const wibHomegroups = document.querySelector('#wibHomegroups');
const wibClassicOnline = document.querySelector('#wibClassicOnline');

const hsSection = document.querySelector('#hsDescription');
const hgSection = document.querySelector('#hgDescription');
const coSection = document.querySelector('#coDescription');

let pagePosition = 0;

wibHomeschool.addEventListener('click', pageSelected);
wibHomegroups.addEventListener('click', pageSelected);
wibClassicOnline.addEventListener('click', pageSelected);

function pageSelected(event) {
  switch (event.target.id) {
    case 'wibHomeschool':
      pagePosition = 0;

      break;
    case 'wibHomegroups':
      pagePosition = 1;

      break;
    case 'wibClassicOnline':
      pagePosition = 2;

      break;

    default:
      break;
  }
  buttonPressed(pagePosition, 0, wibHomeschool, hsSection);
  buttonPressed(pagePosition, 1, wibHomegroups, hgSection);
  buttonPressed(pagePosition, 2, wibClassicOnline, coSection);
}

function buttonPressed(pagePosition, number, pageName, element) {
  if (pagePosition === number) {
    pageName.classList.add('page-selected');
    element.style.display = 'flex';
  } else {
    pageName.classList.remove('page-selected');
    element.style.display = 'none';
  }
}
