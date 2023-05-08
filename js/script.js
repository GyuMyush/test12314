window.addEventListener('DOMContentLoaded', () => {

    const tabsBtn = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsBtnParent = document.querySelector('.tabheader__items');

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabsBtn.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabsBtn[i].classList.add('tabheader__item_active');
    };

    hideTabContent();
    showTabContent();

    tabsBtnParent.addEventListener('click', (event) => {
        const target = event.target;
        // console.dir(target)
        if (target && target.classList.contains('tabheader__item')) {
            tabsBtn.forEach((item, i) =>{
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                } 
            });
        }
    });
});