const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Catalog",
    "nav-item-8": "Sale!",
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


// ------------- Images ----------------
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


// ------------- Top Section -----------------
const headerImage = document.querySelector("h1");
headerImage.textContent = "DOM Is Awesome"

const buttonText = document.querySelector(".cta-text button");
buttonText.textContent = siteContent.cta.button;

// ------------- Main Content ----------------
// -- Upper --
let upperH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
let upperP = document.querySelectorAll(".main-content .top-content p");

upperH4[0].textContent = siteContent["main-content"]["features-h4"];
upperP[0].textContent = siteContent["main-content"]["features-content"];

upperH4[1].textContent = siteContent["main-content"]["about-h4"];
upperP[1].textContent = siteContent["main-content"]["about-content"];

// -- Lower --
let lowerH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4");
let lowerP = document.querySelectorAll(".main-content .bottom-content p");

lowerH4[0].textContent = siteContent["main-content"]["services-h4"];
lowerP[0].textContent = siteContent["main-content"]["services-content"];

lowerH4[1].textContent = siteContent["main-content"]["product-h4"];
lowerP[1].textContent = siteContent["main-content"]["product-content"];

lowerH4[2].textContent = siteContent["main-content"]["vision-h4"];
lowerP[2].textContent = siteContent["main-content"]["vision-content"];


// ------------ Navigation -----------------

let navBar = document.querySelector("nav");
let navItem = document.querySelectorAll("nav a");

var node1 = document.createElement("a");
var textnode1 = document.createTextNode(siteContent["nav"]["nav-item-7"]);
node1.setAttribute("href", "#");
navBar.appendChild(node1);

var node2 = document.createElement("a");
var textnode2 = document.createTextNode(siteContent["nav"]["nav-item-8"]);
node2.setAttribute("href", "#");
navBar.appendChild(node2);

navItem = document.querySelectorAll("nav a"); // Make the list longer now

for (let i=0; i < navItem.length; i++) {
  navItem[i].style.color = "green";
}

// Do this programmatically if possible. .foreach?
navItem[0].textContent = siteContent["nav"]["nav-item-1"]; // Put on each element
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];
navItem[6].textContent = siteContent["nav"]["nav-item-7"];
navItem[7].textContent = siteContent["nav"]["nav-item-8"];

// navItem.forEach((item, index)) => (item.textContent = siteContent.values[siteContent.nav[index]];
console.log(navItem);


// --------------- Contact ----------------
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];
let contactItems = document.querySelectorAll(".contact p");
contactItems[0].textContent = siteContent.contact.address;
contactItems[1].textContent = siteContent.contact.phone;
contactItems[2].textContent = siteContent.contact.email;

// ----------- Footer ---------------
let footerText = document.querySelector("footer p");
footerText.textContent = siteContent.footer.copyright = "Copyright Great Idea! 2018";