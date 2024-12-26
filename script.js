let currentID = 1

const imageSet = [
    {
    id: 1,
    heading: 'Discover innovative ways to decorate',
    backgroundUrl: './images/desktop-image-hero-1.jpg',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        id: 2,
        heading: 'We are available all across the globe',
        backgroundUrl: './images/desktop-image-hero-2.jpg',
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        id: 3,
        heading: 'Manufactured with the best materials',
        backgroundUrl: './images/desktop-image-hero-3.jpg',
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

const heroBackground = document.querySelector('header')
const heroHeading = document.querySelector('.description h2')
const heroDescription = document.querySelector('.description p')

const previousButton = document.querySelector('.left')
const nextButton = document.querySelector('.right')

const updateHero = () => {
    const currentItem = imageSet.find(item => item.id === currentID);
    if (currentItem) {
        heroHeading.classList.add('fade-out');
        heroDescription.classList.add('fade-out');
        heroBackground.style.opacity = 0;

        setTimeout(() => {
            heroBackground.style.backgroundImage = `url(${currentItem.backgroundUrl})`;
            heroHeading.textContent = currentItem.heading;
            heroDescription.textContent = currentItem.description;
            heroHeading.classList.remove('fade-out');
            heroDescription.classList.remove('fade-out');
            heroBackground.classList.remove('active')
            heroBackground.style.opacity = 1;

        }, 150);
    }
};

previousButton.addEventListener('click', () => {
    if(currentID === 1){
        currentID = 3;
        updateHero()
    } else{
        currentID--
        updateHero()
    }
})

nextButton.addEventListener('click', () => {
    if(currentID === 3){
        currentID = 1;
        updateHero()
    } else{
        currentID++
        updateHero()
    }
})


const sidebar = document.getElementById('sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const closeSidebar = document.querySelector('.close-sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    menuToggle.style.display = 'none'
    closeSidebar.style.display = 'block'
    document.body.classList.add('no-scroll');
    document.body.classList.add('active');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
        menuToggle.style.display = 'block'; 
        closeSidebar.style.display = 'none'
        document.body.classList.remove('active');
    },300)
  });

  window.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('active');
      setTimeout(() => {
        menuToggle.style.display = 'block'; 
        closeSidebar.style.display = 'none'
    },300)
    }
  });