const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Images

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Nav
const nav1 = document.querySelectorAll("nav a");
nav1.forEach((value, index) => {
value.innerHTML  = siteContent.nav[`nav-item-${index + 1}`]
});

// CTA

let h1Message = document.querySelector('.cta-text h1');
h1Message.innerHTML = siteContent['cta']['h1']; 

let ctaButton =  document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

//Main content 
let textContent = document.querySelectorAll('.text-content h4');
let textContentP = document.querySelectorAll('.text-content p');

textContent[0].innerHTML = siteContent['main-content']["features-h4"]
textContentP[0].innerHTML = siteContent['main-content']["features-content"]

textContent[1].innerHTML = siteContent['main-content']["about-h4"]
textContentP[1].innerHTML = siteContent['main-content']["about-content"]

textContent[2].innerHTML = siteContent['main-content']["services-h4"]
textContentP[2].innerHTML = siteContent['main-content']["services-content"]

textContent[3].innerHTML = siteContent['main-content']["product-h4"]
textContentP[3].innerHTML = siteContent['main-content']["product-content"]

textContent[4].innerHTML = siteContent['main-content']["vision-h4"]
textContentP[4].innerHTML = siteContent['main-content']["vision-content"]


//Contact info
let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent['contact']['contact-h4']; 

let contactAddress = document.querySelector('.contact p');
contactAddress.innerHTML = siteContent['contact']['address'];

let contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.innerHTML = siteContent['contact']['phone'];

let contactEmail = document.querySelector('.contact p:nth-child(4)');
contactEmail.innerHTML = siteContent['contact']['email'];





//footer

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];





//green nav links
let navigation = document.querySelectorAll("a");
let i;
for (i = 0; i < navigation.length; i++) {
  navigation[i].style.color = "green";
}
