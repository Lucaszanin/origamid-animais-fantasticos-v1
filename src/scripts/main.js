function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')


    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

function activeMenu() {
    const menu = document.querySelectorAll('.js-menu a[href^="#"]')
 
    function handleMenu(event) {
        menu.forEach((item) => {
            item.classList.remove('menu-ativo')
        })
        this.classList.add('menu-ativo')
    }
    
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    menu.forEach((itemMenu) => {
        itemMenu.addEventListener('click', handleMenu)
        itemMenu.addEventListener('click', scrollToSection)
    })
}

function activeAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'active-accordion'
    if (accordionList.length) {
        function activeAcoordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAcoordion)
        })
    }
}

function initAnimationScroll() {

    const sections = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.8
    if (sections.length) {
        function animationScroll() {

            sections.forEach((section) => {

                
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible)
                    section.classList.add('active')
                else
                    section.classList.remove('active')
            })
        }

        animationScroll()
        window.addEventListener('scroll', animationScroll)
    }
}

activeAccordion()
activeMenu()
initTabNav()
initAnimationScroll()



