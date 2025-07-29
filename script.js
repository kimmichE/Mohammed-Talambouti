const scrollButton = document.getElementById("scrollButton");

// Affiche ou cache le bouton selon la position scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollButton.classList.add("visible");
  } else {
    scrollButton.classList.remove("visible");
  }
});

function toggleScroll() {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight >= pageHeight - 5) {
    // Si on est en bas, remonter en haut
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollButton.textContent = "⬇️";
  } else {
    // Sinon, descendre en bas
    window.scrollTo({ top: pageHeight, behavior: "smooth" });
    scrollButton.textContent = "⬆️";
  }
}

// Met à jour l'icône du bouton en fonction de la position scroll (en cours de scroll)
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight >= pageHeight - 5) {
    scrollButton.textContent = "⬆️";
  } else {
    scrollButton.textContent = "⬇️";
  }
});








 // Animate horizontal bars
  window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      setTimeout(() => {
        bar.style.width = percent + '%';
      }, 200);
    });

    // Create circular progress bars dynamically
    const circleSkills = document.querySelectorAll('.circle-skill');
    circleSkills.forEach(skill => {
      const percent = skill.getAttribute('data-percent');
      const label = skill.getAttribute('data-label');

      // SVG circle properties
      const radius = 50;
      const circumference = 2 * Math.PI * radius;

      // Create SVG elements
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "120");
      svg.setAttribute("height", "120");

      const circleBg = document.createElementNS(svgNS, "circle");
      circleBg.classList.add('circle-bg');
      circleBg.setAttribute("r", radius);
      circleBg.setAttribute("cx", "60");
      circleBg.setAttribute("cy", "60");

      const circleProgress = document.createElementNS(svgNS, "circle");
      circleProgress.classList.add('circle-progress');
      circleProgress.setAttribute("r", radius);
      circleProgress.setAttribute("cx", "60");
      circleProgress.setAttribute("cy", "60");
      circleProgress.style.strokeDasharray = circumference;
      circleProgress.style.strokeDashoffset = circumference;

      // Append circles to SVG
      svg.appendChild(circleBg);
      svg.appendChild(circleProgress);
      skill.appendChild(svg);

      // Add percent text
      const percentText = document.createElement('div');
      percentText.classList.add('circle-text');
      percentText.textContent = percent + '%';
      skill.appendChild(percentText);

      // Add label text
      const labelText = document.createElement('div');
      labelText.classList.add('circle-label');
      labelText.textContent = label;
      skill.appendChild(labelText);

      // Animate the strokeDashoffset
      setTimeout(() => {
        const offset = circumference - (percent / 100) * circumference;
        circleProgress.style.strokeDashoffset = offset;
      }, 300);
    });
  });






 const navLinks = document.querySelectorAll('.nav-link');
    const checkBox = document.getElementById('check');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        checkBox.checked = false;
      });
    });