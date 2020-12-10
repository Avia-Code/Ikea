'use strict';
const btnOpenCatalog = document.querySelector('.btn-burger');
const btnCloseCatalog = document.querySelector('.btn-close')
const catalog = document.querySelector('.catalog');
const subcatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btncloseSubCatalog = document.querySelector('.btn-return');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

function toogleCatalog() {
    closeSubCatalog();
    catalog.classList.toggle('open');
    overlay.classList.toggle('active');
    if (catalog.classList.contains('open')) {
        disabledScroll();
    }
    else {
        enableScroll();
    }
}

function openSubCatalog(event) {
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest('.catalog-list__item');
    if (itemList) {
        subcatalogHeader.innerHTML = itemList.innerHTML;
        subcatalog.classList.add('subopen');
    }
}

function closeSubCatalog() {
    subcatalog.classList.remove('subopen');
}

btnOpenCatalog.addEventListener('click', toogleCatalog);
btnCloseCatalog.addEventListener('click', toogleCatalog);
overlay.addEventListener('click', toogleCatalog);
catalog.addEventListener('click', openSubCatalog);
btncloseSubCatalog.addEventListener('click', closeSubCatalog);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && catalog.classList.contains('open')) {
        toogleCatalog();
    }
});