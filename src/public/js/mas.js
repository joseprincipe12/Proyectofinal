document.addEventListener("DOMContentLoaded", function () {
    const descriptions = document.querySelectorAll(".contendor-tarjetas--descripcion");
    
    descriptions.forEach((description) => {
      const maxHeight = 100; // Altura máxima en píxeles
      const content = description.querySelector("p");
      const contentHeight = content.clientHeight;

      if (contentHeight > maxHeight) {
        content.style.overflow = "hidden";
        content.style.position = "relative";
        content.style.height = maxHeight + "px";
        
        const showMoreBtn = document.createElement("a");
        showMoreBtn.href = "#";
        showMoreBtn.innerText = "Mostrar Más";
        showMoreBtn.classList.add("show-more-btn");
        
        showMoreBtn.onclick = function (e) {
          e.preventDefault();
          content.style.height = "auto";
          showMoreBtn.style.display = "none";
        };
        
        description.appendChild(showMoreBtn);
      }
    });
  });