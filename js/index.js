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


const headerImage = document.querySelector("h1");
headerImage.textContent = "DOM Is Awesome"


// ------------ Navigation -----------------
// let nav1 = document.getElementsByTagName()
// let myH1 = document.getElementsByTagName("h1");
// myH1.innerHTML = "This is an H1 tag";

// This works //
let navBar = document.querySelector("nav");
// navBar.setAttribute("style", "color: green;");
// let joe = document.getElementsByClassName("nav").style.color = "hotpink";
// navBar.style.color = "hotpink";
// let newTextNode = document.createTextNode("One");
// navBar.appendChild("newTextNode");
// newTextNode = document.createTextNode("One");



// let navAnchors = navBar.getElementsByTagName("a");
// console.log(navAnchors);

let navItem = document.querySelectorAll("a");

var node1 = document.createElement("a");
var textnode1 = document.createTextNode(siteContent["nav"]["nav-item-7"]);
node1.appendChild(textnode1);
navBar.appendChild(node1);

var node2 = document.createElement("a");
var textnode2 = document.createTextNode(siteContent["nav"]["nav-item-8"]);
node2.appendChild(textnode2);
navBar.appendChild(node2);

navItem = document.querySelectorAll("a"); // Make the list longer now

for (let i=0; i < navItem.length; i++) {
  navItem[i].style.color = "green";
}

console.log(navItem);




navItem[5].style.color = "green"; // FG color doesn't work
navItem[0].textContent = siteContent["nav"]["nav-item-1"]; // Put on each element
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];
// navItem[6].textContent = siteContent["nav"]["nav-item-7"];
// navItem[7].textContent = siteContent["nav"]["nav-item-8"];

// navItem.forEach((item, index)) => (item.textContent = Object.values[siteContent.nav[index]];
console.log(navItem);
 






// mySelection.appendChild("newTextNode");



// document.getElementById("title").innerHTML = "W3Schools";
// document.getElementById("title").href = "https://www.w3schools.com";
// document.getElementById("m").target = "_blank";


// let myContactInfo = document.getElementById("contact");
// let myh4 = myContactInfo.getElementByTagName(h4).innerHTML = "I can't believe this isn't working";