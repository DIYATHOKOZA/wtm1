document.addEventListener("DOMContentLoaded", () => {
    const estatePlanningLink = document.getElementById("estate-planning-link");
    const generalInfoForm = document.getElementById("general-info-form");
    estatePlanningLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        
        // Toggle visibility of the General Information form
        if (generalInfoForm.style.display === "none" || generalInfoForm.style.display === "") {
            generalInfoForm.style.display = "block";
            generalInfoForm.scrollIntoView({ behavior: "smooth" }); // Scroll into view
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const marriedStatus = document.getElementById("married-status");
    const maritalTypeDiv = document.getElementById("marital-type");
    const spouseDetailsDiv = document.getElementById("spouse-name");
    const ancClientDataDiv = document.getElementById("client-data-ANC");
    const ancSpouseDataDiv = document.getElementById("spouse-data");
    const addInfoANCSection = document.getElementById("add-info-ANC");

    // Hide all dependent sections initially
    maritalTypeDiv.style.display = "none";
    spouseDetailsDiv.style.display = "none";
    ancClientDataDiv.style.display = "none";
    ancSpouseDataDiv.style.display = "none";
    addInfoANCSection.style.display = "none";

    // Listen for changes in the marital status dropdown
    marriedStatus.addEventListener("change", (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === "yes") {
            maritalTypeDiv.style.display = "block";
            spouseDetailsDiv.style.display = "none";
            ancClientDataDiv.style.display = "none";
            ancSpouseDataDiv.style.display = "none";
            addInfoANCSection.style.display = "none";
        } else {
            maritalTypeDiv.style.display = "none";
            spouseDetailsDiv.style.display = "none";
            ancClientDataDiv.style.display = "none";
            ancSpouseDataDiv.style.display = "none";
            addInfoANCSection.style.display = "none";
        }
    });

    // Listen for changes in the marital type dropdown
    document.getElementById("marital-type").addEventListener("change", (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === "married-anc") {
            spouseDetailsDiv.style.display = "block";
            ancClientDataDiv.style.display = "block";
            ancSpouseDataDiv.style.display = "block";
            addInfoANCSection.style.display = "block";
        } else {
            spouseDetailsDiv.style.display = "none";
            ancClientDataDiv.style.display = "none";
            ancSpouseDataDiv.style.display = "none";
            addInfoANCSection.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Update the year dynamically
    const currentYearElement = document.getElementById("current-year");
    currentYearElement.textContent = new Date().getFullYear();
  
    // Smooth scroll to top functionality
    const scrollToTopButton = document.getElementById("scroll-to-top");
  
    scrollToTopButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  