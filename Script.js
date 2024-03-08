// Download resume

function downloadFile() {
    // Path to your file
    const fileUrl = 'Resume_Soumyadeep.pdf';

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'resume.pdf'; // Name of the downloaded file

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
}

// page load animation

document.addEventListener('DOMContentLoaded', function() {
    const homeElements = document.querySelectorAll('.home-content');
    homeElements.forEach(function(element) {
        element.classList.add('animate');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const homeElements = document.querySelectorAll('.profile');
    homeElements.forEach(function(element) {
        element.classList.add('animate');
    });
});




// navbar responsive toggle

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
    rotateDiv();
}


// Close menu when navbar item is clicked
const navbarItems = document.querySelectorAll('.navbar a');
navbarItems.forEach(item => {
    item.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('show');
        rotateDiv();
    });
});


// rotate on click hamburger menu

function rotateDiv() {
    var div = document.getElementById('menuicon');
    var currentRotation = div.getAttribute('data-rotation') || 0; // Get current rotation value or default to 0
    currentRotation = parseInt(currentRotation); // Convert to integer
    if(currentRotation ==90){
        currentRotation=0;
        div.style.transform = 'rotate(' + currentRotation + 'deg)'; // Apply rotation
        div.setAttribute('data-rotation', currentRotation); // Update data attribute with new rotation value
    }
    else{
        currentRotation += 90; // Increment by 90 degrees
        div.style.transform = 'rotate(' + currentRotation + 'deg)'; // Apply rotation
        div.setAttribute('data-rotation', currentRotation); // Update data attribute with new rotation value
    }

}

// typed js

const typed= new Typed('.multiple-text',{
    strings: ['.Net-Developer', 'Footballer','Learner','Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


// const typedsofar= new Typed('.so-far',{
//     strings: ['Till Now...', '.Net Core', 'Web-Api', 'MVC', 'Sql Server','Angular','Azure'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })

// scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// scroll reveal

// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.about', { origin: 'top' });


// collapsible div

document.addEventListener("DOMContentLoaded", function() {
    // Select all expand buttons
    var expandBtns = document.querySelectorAll('.expand-btn');

    // Loop through each expand button
    expandBtns.forEach(function(btn) {
        // Add click event listener
        btn.addEventListener('click', function() {
            // Toggle the visibility of the collapsible content
            var content = this.parentElement.querySelector('.collapsible-content');
            content.classList.toggle('collapsed');
            // Change the button text based on the state
            if (content.classList.contains('collapsed')) {
                this.textContent = 'See More';
            } else {
                this.textContent = 'See Less';
            }
        });
    });
});


// =========================================back end modal======================================

// Get the modal element
var modalBackEnd = document.getElementById("myBackEndModal");

// Get the button that opens the modal
var btn = document.getElementById("openBackEndModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modalBackEnd.style.display = "flex";
    modalBackEnd.style.flexDirection="column";
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  openModal();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalBackEnd.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalBackEnd) {
    modalBackEnd.style.display = "none";
  }
}


//==================================== front end modal=================================================================================================

// Get the modal element
var modalFrontEnd = document.getElementById("myFrontEndModal");

// Get the button that opens the modal
var btnFrontEnd = document.getElementById("openFrontEndModalBtn");

var spanFrontEnd = document.getElementById("closeFrontEndModal");

// Function to open the modal
function openModalFrontEnd() {
    modalFrontEnd.style.display = "flex";
    modalFrontEnd.style.flexDirection="column";
}

// When the user clicks on the button, open the modal
btnFrontEnd.onclick = function() {
  openModalFrontEnd();
}

// When the user clicks on <span> (x), close the modal
spanFrontEnd.onclick = function() {
    modalFrontEnd.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFrontEnd) {
    modalFrontEnd.style.display = "none";
  }
}

// ================================================================database modal====================================================

// Get the modal element
var modalDB = document.getElementById("dataBaseModal");

// Get the button that opens the modal
var btnDB = document.getElementById("dataBaseBtn");

var spanDB = document.getElementById("closedataBaseModal");

// Function to open the modal
function openDBModal() {
    modalDB.style.display = "flex";
    modalDB.style.flexDirection="column";
}

// When the user clicks on the button, open the modal
btnDB.onclick = function() {
    openDBModal();
}

// When the user clicks on <span> (x), close the modal
spanDB.onclick = function() {
    modalDB.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDB) {
    modalDB.style.display = "none";
  }
}


// ==========================================================cloud concepts modal============================================================

// Get the modal element
var modalCloud = document.getElementById("cloudModal");

// Get the button that opens the modal
var btnCloud = document.getElementById("cloudBtn");

var spanCloud = document.getElementById("closeCloudModal");

// Function to open the modal
function openCloudModal() {
    modalCloud.style.display = "flex";
    modalCloud.style.flexDirection="column";
}

// When the user clicks on the button, open the modal
btnCloud.onclick = function() {
    openCloudModal();
}

// When the user clicks on <span> (x), close the modal
spanCloud.onclick = function() {
    modalCloud.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalCloud) {
    modalCloud.style.display = "none";
  }
}


// ================================================Design Pattern Modal Concepts===========================================================

// Get the modal element
var modalDesignPattern= document.getElementById("designPatternModal");

// Get the button that opens the modal
var btnDesignPattern = document.getElementById("designPatternBtn");

var spanDesignPattern = document.getElementById("closedesignPatternModal");

// Function to open the modal
function openDesignPatternModal() {
    modalDesignPattern.style.display = "flex";
    modalDesignPattern.style.flexDirection="column";
}

// When the user clicks on the button, open the modal
btnDesignPattern.onclick = function() {
    openDesignPatternModal();
}

// When the user clicks on <span> (x), close the modal
spanDesignPattern.onclick = function() {
    modalDesignPattern.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDesignPattern) {
    modalDesignPattern.style.display = "none";
  }
}


// ======================================================Application maintenance and Support===============================================

// Get the modal element
var modalSupport= document.getElementById("supportModal");

// Get the button that opens the modal
var btnSupport = document.getElementById("supportBtn");

var spanSupport = document.getElementById("closeSupportModal");

// Function to open the modal
function openSupportModal() {
    modalSupport.style.display = "flex";
    modalSupport.style.flexDirection="column";
}

// When the user clicks on the button, open the modal
btnSupport.onclick = function() {
    openSupportModal();
}

// When the user clicks on <span> (x), close the modal
spanSupport.onclick = function() {
    modalSupport.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSupport) {
    modalSupport.style.display = "none";
  }
}


function weForecast() {
    // Redirect to the desired URL
    window.location.href = "https://soprso.github.io/WeatherForeCast/index.html";
}