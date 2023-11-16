
// Get all the section elements and menu items

const menuItems = document.querySelectorAll('#menuElem');
const menuItemsArray = Array.from(menuItems);
const sections = document.querySelectorAll('#scrollItem');
const sectionsArray = Array.from(sections);

menuItems.forEach((menuItem) => {

    menuItem.addEventListener('click', () => {
        sections.forEach((section) => {
            if(menuItem.innerText.toLowerCase() === section.innerText.toLowerCase()){
                section.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        })
    })

})

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

  
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
            console.log(menuItemsArray[activeMenuItemIndex+1])
            menuItemsArray[activeMenuItemIndex+1].classList.add('is-active');
        }

    }

    });
  });


