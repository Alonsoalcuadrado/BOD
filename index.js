/* Navbar and Navbar links */
const navbar = document.querySelector('#navbar');
const links = document.querySelectorAll('.navbar-element');

/* What is Brillamont On Demand section page selection buttons */
const wibHomeschool = document.querySelector('#wibHomeschool');
const wibHomegroups = document.querySelector('#wibHomegroups');
const wibClassicOnline = document.querySelector('#wibClassicOnline');

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
const faqMore = document.querySelectorAll('.more-info');
const faqLess = document.querySelectorAll('.less-info');
const faqText = document.querySelectorAll('.faq-box__text');

/* Global variables */
let descriptionPosition = 0;
let tablePosition = 0;
let linkPosition = 0;

/* Navbar functions */
// for (let index = 0; index < links.length; index++) {
//   const link = links[index];

//   link.addEventListener('click', function (event) {
//     switch (index) {
//       case 0:
//         linkPosition = 0;
//         break;

//       case 1:
//         linkPosition = 1;
//         break;

//       case 2:
//         linkPosition = 2;
//         break;

//       case 3:
//         linkPosition = 3;
//         break;

//       default:
//         break;
//     }

//     if (index === 1 && linkPosition === 1) {
//       links[1].classList.add('link-active');
//       links[1].parentElement.classList.add('link-selected');
//     } else {
//       links[1].classList.remove('link-active');
//       links[1].parentElement.classList.remove('link-selected');
//     }
//     console.log(linkPosition);
//   });
// }

// if (linkPosition === position) {
//   element.target.classList.add('link-active');
//   element.target.parentElement.classList.add('link-selected');
// } else {
//   element.target.classList.remove('link-active');
//   element.target.parentElement.classList.remove('link-selected');
// }

window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition > 600) {
    navbar.classList.add('less-navbar');
  } else {
    navbar.classList.remove('less-navbar');
  }
};

wibHomeschool.addEventListener('click', pageSelected);
wibHomegroups.addEventListener('click', pageSelected);
wibClassicOnline.addEventListener('click', pageSelected);

duesHomeschool.addEventListener('click', pageSelected);
duesHomegroups.addEventListener('click', pageSelected);
duesClassic.addEventListener('click', pageSelected);

for (let element = 0; element < faqMore.length; element++) {
  const moreInfo = faqMore[element];
  const lessInfo = faqLess[element];
  const text = faqText[element];

  moreInfo.addEventListener('click', (event) => {
    moreInfo.style.display = 'none';
    lessInfo.style.display = 'flex';
    text.style.display = 'flex';
    event.path[2].classList.add('box-uncollapsed');
  });

  lessInfo.addEventListener('click', (event) => {
    moreInfo.style.display = 'flex';
    lessInfo.style.display = 'none';
    text.style.display = 'none';
    event.path[2].classList.remove('box-uncollapsed');
  });
}

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
  } else {
    pageName.classList.remove('page-selected');
    element.style.display = 'none';
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
