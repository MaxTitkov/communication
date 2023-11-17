
// Get all the section elements and menu items

const menuItems = document.querySelectorAll('#menuElem');
const menuItemsArray = Array.from(menuItems);
const sections = document.querySelectorAll('#scrollItem');
const sectionsArray = Array.from(sections);

const isMobile = window.matchMedia("(max-width: 600px)").matches;
const burger = document.querySelector('#burger');
const menu = document.querySelector('#sideMenu');

menuItems.forEach((menuItem) => {

    menuItem.addEventListener('click', () => {
        sections.forEach((section) => {
            if(menuItem.innerText.toLowerCase() === section.innerText.toLowerCase()){
                section.scrollIntoView({ block: "start", behavior: "smooth" });

                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
                menu.classList.toggle('is-hidden-mobile');
            }
        })
    })

})

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // if(!isMobile){
    //     if(scrollPosition > 4655){
    //         menu.scrollTo({ top: menu.scrollHeight, behavior: "smooth" });
    //     }
    //     if(scrollPosition < 2667){
    //         menu.scrollTo({ top: 0, behavior: "smooth" });
    //     }
    // }

  
    // Determine the active section
    let activeSection = sections[0];
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        activeSection = section;
        // const indexOfActiveSection = sectionsArray.indexOf(activeSection);
      }
    });
  
    // Highlight the corresponding menu item
    menuItems.forEach((menuItem) => {
      // Remove the active class from all menu items
    //   menuItem.classList.remove('is-active');
      // Add the active class to the menu item corresponding to the active section
    //   if (menuItem.getAttribute('href') === `#${activeSection.id}`) {
    //     menuItem.classList.add('active');
    //   }

    menuItemPosition = menuItem.getBoundingClientRect().top;

    if(menuItem.innerText.toLowerCase() === activeSection.innerText.toLowerCase()){
        menuItem.classList.add('is-active');
        const activeMenuItemIndex = menuItemsArray.indexOf(menuItem);

        const indexOfInactive = -(menuItemsArray.length - activeMenuItemIndex)+1

        menuItemsArray.slice(indexOfInactive).forEach((item) => {
            item.classList.remove('is-active');
        })

        if(activeMenuItemIndex === menuItemsArray.length - 3){
            menuItemsArray[activeMenuItemIndex+1].classList.add('is-active');
        }

    }
    });
  });


const preventScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function disableScroll() {
    document.body.addEventListener('wheel', preventScroll, {passive: false});
}

function enableScroll() {
    document.body.removeEventListener('wheel', preventScroll, {passive: false});
}


let userPosition = window.scrollY;

const burgerToggler = () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    menu.classList.toggle('is-hidden-mobile');

    if(menu.classList.contains('is-active') & isMobile){
        disableScroll()
    }else{
        enableScroll()
    }
}
burger.addEventListener('click', burgerToggler);


// progressBar
if(isMobile){
    const barContainer = document.querySelector("#progressBar");
    const progressBar = document.querySelector("#bar");
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / height) * 100;
    progressBar.value=scrolled;
    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / height) * 100;
        progressBar.value=scrolled;
    })
}
