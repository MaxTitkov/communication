
// Get all the section elements and menu items

const menuItems = document.querySelectorAll('#menuElem');
const sections = document.querySelectorAll('#scrollItem');


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
      }
    });
  
    // Highlight the corresponding menu item
    menuItems.forEach((menuItem) => {
      // Remove the active class from all menu items
      menuItem.classList.remove('active');
      // Add the active class to the menu item corresponding to the active section
    //   if (menuItem.getAttribute('href') === `#${activeSection.id}`) {
    //     menuItem.classList.add('active');
    //   }
    if(menuItem.innerText.toLowerCase() === activeSection.innerText.toLowerCase()){
        menuItem.classList.add('is-active');
    }else{
        menuItem.classList.remove('is-active');
    }
    });
  });


