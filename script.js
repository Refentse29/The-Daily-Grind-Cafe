/* ==========================================
   1. GALLERY LIGHTBOX MODAL
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-img");
  
  if (galleryImages.length > 0) {
    // Create lightbox container dynamically
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.cssText = "display:none; position:fixed; z-index:1000; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;";
    
    const lightboxImg = document.createElement("img");
    lightboxImg.style.cssText = "max-width:80%; max-height:80%; border-radius:8px;";
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  /* ==========================================
     2. LIVE SEARCH & FILTER (Services/Menu)
     ========================================== */
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      const term = e.target.value.toLowerCase();
      const items = document.querySelectorAll(".service-item");
      
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? "block" : "none";
      });
    });
  }

  /* ==========================================
     3. FORM VALIDATION (Enquiries & Contact)
     ========================================== */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const feedback = document.getElementById("formFeedback");

      if (name === "" || email === "" || message === "") {
        isValid = false;
        feedback.style.color = "red";
        feedback.textContent = "Please fill in all required fields.";
      } else if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        feedback.style.color = "red";
        feedback.textContent = "Please enter a valid email address.";
      }

      if (isValid) {
        feedback.style.color = "green";
        feedback.textContent = "Thank you! Your message has been successfully sent.";
        contactForm.reset();
      }
    });
  }
});