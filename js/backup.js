

      function refreshPage() {
        location.reload();
      }

    document.addEventListener("DOMContentLoaded", function () {
      const menuIcon = document.getElementById("menu-icon");
      const closeBtn = document.getElementById("close-btn"); // Added reference to close-btn
      const sidebar = document.getElementById("sidebar");
      const contentSection = document.getElementById("content-section");
      const content = document.getElementById("content");
      const responCrossBtn = document.getElementById("respon-cross-btn");

      const header = document.querySelector("header");

      const horiMenuWrapper = document.getElementById("hori-menu-wrapper");

      const horiMenuVertical = document.querySelector(
        ".hori-menu-vertical-menu"
      );
      const footer = document.querySelector(".footer");

      // Function to check if an element is in the viewport
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      }

      // Function to open content based on section ID
      function openContent(sectionId) {
        const contentData = {
          section1: `<h1>Section-1</h1><p>This is the content for Section-1.</p>`,
          section2: `<h1>Section-2</h1><p>This is the content for Section-2.</p>`,
          section3:
            "<h1>Section-3</h1><p>This is the content for Section-3.</p>",
          section4:
            "<h1>Platforms</h1><p>This is the content for Platforms.</p>",
          section5:
            "<h1>Infosys Living Labs</h1><p>This is the content for Infosys Living Labs.</p>",
          investors:
            "<h1>Investors</h1><p>This is the content for Investors.</p>",
          careers: "<h1>Careers</h1><p>This is the content for Careers.</p>",
          contact:
            "<h1>Contact Us</h1><p>This is the content for Contact Us.</p>",
        };

        // Set content based on sectionId
        content.innerHTML = contentData[sectionId] || "<h1>Content Not Found</h1>";
                  contentSection.classList.add("open");

        // Behavior for screens smaller than 656px
        if (window.innerWidth <= 656) {

          // Hide sidebar, show content section, and hide close-btn
          sidebar.style.display = "none"; // Hide sidebar
          contentSection.classList.add("open"); // Show content section
          menuIcon.style.display = "none"; // Show menu icon again
          closeBtn.style.display = "none"; // Hide close button in menu container
        } else {
          // Behavior for screens larger than 656px
          contentSection.classList.add("open"); // Keep the sidebar visible
        }
      }

      // Event listener for sidebar menu items (on click, close sidebar and open content section)
      document.querySelectorAll(".menu-item").forEach((item) => {
          item.addEventListener("click", function () {
          const sectionId = this.getAttribute("onclick").split("'")[1];
          openContent(sectionId);
          if (window.innerWidth <= 656) {
              menuIcon.style.display = "none";
              closeBtn.style.display = "none";
          }
          
        });
      });

  

      // Handle menuIcon click
      menuIcon.addEventListener("click", function () {
          sidebar.classList.toggle("open"); // Toggle sidebar visibility
        if (window.innerWidth <= 656) {
          closeBtn.style.display = "none";
        }
      //    else {
      //     closeBtn.style.display = "flex"; // Show the close button
      //   }
        
        // for normal screens
        closeBtn.style.display = "flex";
        contentSection.classList.remove("open"); // Hide content section
        header.classList.add("header-hidden"); // Hide the header
        sidebar.classList.remove("closed"); // Show the sidebar
        contentSection.classList.add("open"); // Show the content section
        horiMenuWrapper.style.opacity = "0"; // Hide the horizontal menu
        menuIcon.style.display = "none"; // Hide the menu icon
      });

      // Handle closeBtn click
      closeBtn.addEventListener("click", function () {
        header.classList.remove("header-hidden"); // Show the header
        sidebar.classList.add("closed"); // Hide the sidebar
        contentSection.classList.remove("open"); // Hide the content section
        horiMenuWrapper.style.opacity = "1"; // Show the horizontal menu
        closeBtn.style.display = "none"; // Hide the close button
        menuIcon.style.display = "flex"; // Show the menu icon
        setTimeout(refreshPage, 300);
      });

      // Ensure content slides in on hover or click
      document.querySelectorAll(".menu-item").forEach((item) => {
        item.addEventListener("mouseover", function () {
          openContent(this.getAttribute("onclick").split("'")[1]);
        });
        item.addEventListener("click", function () {
          openContent(this.getAttribute("onclick").split("'")[1]);
        });
      });

      // Close content section and show sidebar again when cross button is clicked
      responCrossBtn.addEventListener("click", function () {

        // for small screens
        if (window.innerWidth <= 656) {
          closeBtn.style.display = "flex";
          menuIcon.style.display = "none";
          contentSection.classList.remove("open"); // Hide content section
          sidebar.style.display = "block"; // Show sidebar again
        }

      });

   // Smooth scroll to section on horizontal menu item click
      document.querySelectorAll(".hori-menu-item").forEach((item) => {
        item.addEventListener("click", function () {
          console.log("Menu item clicked");
          const targetId = this.getAttribute("data-target");
          console.log(`Scrolling to section with ID: ${targetId}`);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
            });
          } else {
            console.log(`Section with ID ${targetId} not found.`);
          }
        });
      });

      // Update menu section name visibility on scroll
      document.addEventListener("scroll", function () {
        const sections = document.querySelectorAll(".expo-ui-section");
        let currentId = "";

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentId = section.id;
          }
        });

        document
          .querySelectorAll(".hori-menu-container")
          .forEach((container) => {
            const itemId = container.id;
            if (itemId === currentId) {
              container.classList.add("active");
            } else {
              container.classList.remove("active");
            }
          });

        // Close content section and show sidebar when the close button is clicked (for screens above 656px)
        closeBtn.addEventListener("click", function () {
          contentSection.classList.remove("open"); // Hide content section
          if (window.innerWidth > 656) {
            sidebar.style.display = "block"; // Ensure sidebar is visible for large screens
          }
          // Check if footer is in view
          if (isElementInViewport(footer)) {
            horiMenuVertical.style.display = "none"; // Hide the vertical menu when the footer is visible
          } else {
            horiMenuVertical.style.display = "flex"; // Show the vertical menu when the footer is not visible
          }
        });
      });
    });

    // Data for the expo-ui sections
    const sectionsData = [
      {
        id: "expo-section1",
        backgroundImage:
          "https://via.placeholder.com/1920x560/FF5733/FFFFFF?text=Slide+1",
        title: "Slide 1 Title",
        description: "This is the description for Slide 1.",
        buttonText: "Explore Slide 1",
      },
      {
        id: "expo-section2",
        backgroundImage:
          "https://via.placeholder.com/1920x560/33CFFF/FFFFFF?text=Slide+2",
        title: "Slide 2 Title",
        description: "This is the description for Slide 2.",
        buttonText: "Explore Slide 2",
      },
      {
        id: "expo-section3",
        backgroundImage:
          "https://via.placeholder.com/1920x560/33CFFF/FFFFFF?text=Slide+1",
        title: "Slide 3 Title",
        description: "This is the description for Slide 3.",
        buttonText: "Explore Slide 3",
      },
      {
        id: "expo-section4",
        backgroundImage:
          "https://via.placeholder.com/1920x560/DAF7A6/FFFFFF?text=Slide+4",
        title: "Slide 4 Title",
        description: "This is the description for Slide 4.",
        buttonText: "Explore Slide 4",
      },
      {
        id: "expo-section5",
        backgroundImage:
          "https://via.placeholder.com/1920x560/581845/FFFFFF?text=Slide+5",
        title: "Slide 5 Title",
        description: "This is the description for Slide 5.",
        buttonText: "Explore Slide 5",
      },
      {
        id: "expo-section6",
        backgroundImage:
          "https://via.placeholder.com/1920x560/C70039/FFFFFF?text=Slide+6",
        title: "Slide 6 Title",
        description: "This is the description for Slide 6.",
        buttonText: "Explore Slide 6",
      },
      {
        id: "expo-section7",
        backgroundImage:
          "https://via.placeholder.com/1920x560/900C3F/FFFFFF?text=Slide+7",
        title: "Slide 7 Title",
        description: "This is the description for Slide 7.",
        buttonText: "Explore Slide 7",
      },
      {
        id: "expo-section8",
        backgroundImage:
          "https://via.placeholder.com/1920x560/FF5733/FFFFFF?text=Slide+1",
        title: "Slide 8 Title",
        description: "This is the description for Slide 8.",
        buttonText: "Explore Slide 8",
      },
    ];
    // Function to create a section
    function createSection(data) {
      const section = document.createElement("section");
      section.className = "expo-ui-section";
      section.id = data.id;
      section.style.backgroundImage = `url('${data.backgroundImage}')`;

      section.innerHTML = `
         <div class="expo-text-content">
             <h1>${data.title}</h1>
             <p>${data.description}</p>
             <button class="expo-btn-explore">${data.buttonText}</button>
         </div>
     `;

      return section;
    }

    // Add sections to the container
    const sectionsContainer = document.getElementById(
      "expo-sections-container"
    );
    sectionsData.forEach((data) => {
      const section = createSection(data);
      sectionsContainer.appendChild(section);
    });