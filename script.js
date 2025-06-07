        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "out_mode": "bounce"
                }
            },
            "interactivity": {
                "detect_on": "window",  // <- alterado aqui
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 1,  // <- mais distância
                        "line_linked": {
                            "opacity": 99  // <- mais visível
                        }
                    }
                }
            },
            "retina_detect": true
        });
   
        var typed = new Typed("#typed", {
            strings: ["Eu sou Luiz Richard"],
            typeSpeed: 100,
            backSpeed: 50,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            onComplete: function () {
                // Após terminar a digitação, exibe o restante com fade-in
                const after = document.getElementById("afterTyping");
                after.style.opacity = 0;
                after.style.display = "block";

                let opacity = 0;
                const fade = setInterval(() => {
                    if (opacity >= 1) clearInterval(fade);
                    opacity += 0.05;
                    after.style.opacity = opacity;
                }, 50);
            }
        });
    
       window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  
        particlesJS("particles-about", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": {
            "value": 2,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "out_mode": "bounce"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 0.3
                }
            }
        }
    },
    "retina_detect": true
});

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");
  
    document.querySelectorAll(".project-tile img").forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });
  
    lightboxClose.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
