//  This script is for the scroll transition of elements.
//  It adds the 'hidden' class to all elements with the 'data-animation' attribute,
//  and uses IntersectionObserver to detect when they enter the viewport and apply the appropriate animation class.
//  hidden class is automatically added in an element where 'data-animation' attribute is present
//  hidden class properties are predefined in css

//  A CSS alternative to do this is using scroll-time where we have
//  scroll() and view() functions. Unfortunately, this is not  yet supported by all browsers

//  I deferred this script to achieve faster load times for better core metrics.
function handleAnimation(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const animationType = target.dataset.animation;
      const delay = target.dataset.delay || "0s"; // Default to 0s if no delay specified
      const duration = target.dataset.duration || "1s"; // Default to 1s if no duration specified

      // Remove the hidden class to make the element visible
      target.classList.remove("hidden");

      // Set the animation delay and duration styles
      target.style.animationDelay = delay;
      target.style.animationDuratibrowserson = duration;

      // Add the appropriate animation class
      target.classList.add("animate-" + animationType);
    }
  });
}

const observer = new IntersectionObserver(handleAnimation, {
  root: null, // Use the viewport as the root
  rootMargin: "0px 0px -10% 0px",
  threshold: 0,
});

// Observe all elements with 'data-animation' attribute
document.querySelectorAll("[data-animation]").forEach((element) => {
  // Initially apply the hidden class
  element.classList.add("hidden");
  observer.observe(element);
});

// Transition script written by Benzzzz

// Redirecting nav search form to Abenson search url
const form = document.getElementById("search-form"); // get form id

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior (like page reload)
  const query = document.getElementById("nav-search-input").value;

  // add input value to url
  const abensonSearch = `https://www.abenson.com/search.html/?q=${encodeURIComponent(
    query
  )}`;
  window.open(abensonSearch); // open in new tab :)
});
