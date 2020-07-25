/* Navbar and Navbar links */
const navbar = document.querySelector('#navbar');
const links = document.querySelectorAll('.navbar-element');
const linksActive = document.querySelectorAll('.navbar-link');
const homeButton = document.querySelector('#homeButton');
const startButton = document.querySelector('#startButton');

/* What is Brillamont On Demand section page selection buttons */
const wibHomeschool = document.querySelector('#wibHomeschool');
const wibHomegroups = document.querySelector('#wibHomegroups');
const wibClassicOnline = document.querySelector('#wibClassicOnline');
const responsiveImages = document.querySelectorAll('.what-is-bod__img--responsive');

/* What is Brillamont On Demand section content */
const hsSection = document.querySelector('#hsDescription');
const hgSection = document.querySelector('#hgDescription');
const coSection = document.querySelector('#coDescription');

/* Dues section page selection buttons */
const duesHomeschool = document.querySelector('#duesHomeschool');
const duesHomegroups = document.querySelector('#duesHomegroups');
const duesClassic = document.querySelector('#duesClassic');

/* Dues section content */
const duesPerStudent = document.querySelector('#duesPerStudent');
const duesDiscount = document.querySelector('#duesDiscount');
const homeschoolTable = document.querySelector('#homeschoolTable');
const homegroupsTable = document.querySelector('#homegroupsTable');
const classicTable = document.querySelector('#classicTable');

/* FAQs section selectors */
const cards = document.querySelectorAll('#faqs article');
const faqMoreIcons = document.querySelectorAll('.more-info');
const faqLessIcons = document.querySelectorAll('.less-info');
const faqTexts = document.querySelectorAll('.faq-box__text');

/* Colapsed menu */
const openColapsedMenu = document.querySelector('#colapsedMenu');
const closeColapsedMenu = document.querySelector('#colapsedOptions');

/* Global variables */
let descriptionPosition = 0;
let tablePosition = 0;

/* Navbar functions */
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition > 600) {
    navbar.classList.add('less-navbar');
  } else {
    navbar.classList.remove('less-navbar');
  }

  wereAmI(scrollPosition, 700, 1400, 0);
  wereAmI(scrollPosition, 1500, 2300, 1);
  wereAmI(scrollPosition, 3300, 4100, 2);
  wereAmI(scrollPosition, 4200, 5800, 3);
};

function wereAmI(scrollPosition, startPosition, endPosition, link) {
  if (scrollPosition >= startPosition && scrollPosition <= endPosition) {
    links[link].classList.add('link-selected');
    linksActive[link].classList.add('link-active');
  } else {
    links[link].classList.remove('link-selected');
    linksActive[link].classList.remove('link-active');
  }
}

/* What id BOD and dues pages methods */
wibHomeschool.addEventListener('click', pageSelected);
wibHomegroups.addEventListener('click', pageSelected);
wibClassicOnline.addEventListener('click', pageSelected);

duesHomeschool.addEventListener('click', pageSelected);
duesHomegroups.addEventListener('click', pageSelected);
duesClassic.addEventListener('click', pageSelected);

function pageSelected(event) {
  switch (event.target.id) {
    case 'wibHomeschool':
      descriptionPosition = 0;

      break;
    case 'wibHomegroups':
      descriptionPosition = 1;

      break;
    case 'wibClassicOnline':
      descriptionPosition = 2;

      break;
    case 'duesHomeschool':
      tablePosition = 0;

      break;
    case 'duesHomegroups':
      tablePosition = 1;

      break;
    case 'duesClassic':
      tablePosition = 2;

      break;

    default:
      break;
  }

  descriptionSelection(descriptionPosition, 0, wibHomeschool, hsSection);
  descriptionSelection(descriptionPosition, 1, wibHomegroups, hgSection);
  descriptionSelection(descriptionPosition, 2, wibClassicOnline, coSection);
  tableSelection(tablePosition, 0, duesHomeschool, homeschoolTable);
  tableSelection(tablePosition, 1, duesHomegroups, homegroupsTable);
  tableSelection(tablePosition, 2, duesClassic, classicTable);
}

function descriptionSelection(descriptionPosition, number, pageName, element) {
  if (descriptionPosition === number) {
    pageName.classList.add('page-selected');
    element.style.display = 'flex';
    responsiveImages[number].style.display = 'flex';
  } else {
    pageName.classList.remove('page-selected');
    element.style.display = 'none';
    responsiveImages[number].style.display = 'none';
  }
}

function tableSelection(tablePosition, number, pageName, element) {
  if (tablePosition === number) {
    pageName.classList.add('page-selected--blue');
    element.style.display = 'flex';
  } else {
    pageName.classList.remove('page-selected--blue');
    element.style.display = 'none';
  }

  if (tablePosition === 2) {
    duesPerStudent.style.display = 'none';
    duesDiscount.style.display = 'flex';
  } else {
    duesPerStudent.style.display = 'flex';
    duesDiscount.style.display = 'none';
  }
}

/* FAQs methods */
cards.forEach((card, position) => {
  card.addEventListener('click', () => {
    if (card.classList[1] !== 'box-uncollapsed') {
      cards.forEach((innerCard, index) => {
        if (index === position) {
          innerCard.classList.add('box-uncollapsed');
        } else {
          innerCard.classList.remove('box-uncollapsed');
        }
      });

      elementToHide(faqMoreIcons, position);
      elementToHide(faqLessIcons, position);
      elementToHide(faqTexts, position);

      faqMoreIcons.forEach((faqMoreIcon, index) => {
        if (index !== position) {
          faqMoreIcon.style.display = 'flex';
        } else {
          faqMoreIcon.style.display = 'none';
        }
      });
    } else {
      card.classList.remove('box-uncollapsed');
      faqLessIcons[position].style.display = 'none';
      faqMoreIcons[position].style.display = 'flex';
      faqTexts[position].style.display = 'none';
    }
  });
});

function elementToHide(array, parentIndex) {
  array.forEach((element, index) => {
    if (index !== parentIndex) {
      element.style.display = 'none';
    } else {
      element.style.display = 'flex';
    }
  });
}

/* Colapsed menu methods */
colapsedMenu.addEventListener('click', (event) => {
  colapsedOptions.style.left = '0';
});

closeColapsedMenu.addEventListener('click', () => {
  colapsedOptions.style.left = '100%';
});
