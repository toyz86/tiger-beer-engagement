$(document).ready(function() {
  const how_to = document.getElementById('howto');
  const greet = document.getElementById('greet');
  const macan = document.getElementById('macan');
  const lamp = document.getElementById("lampEffect");

  const animatedElements = document.querySelectorAll('.anim_kanji');
  let animationIndex = 0;

  let animationRunning = false;  

  let isHowtoVisible = false;
  let greetVisible = false;
  let macanVisible = false;

  $(document).on('keydown', function(event) {

    // SHOW HOW TO PLAY
    if (event.key === 'a' || event.key === 'A') {
      if (!isHowtoVisible) {
          // Jika elemen sudah terlihat, hilangkan elemen
          how_to.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], {
            duration: 700,
            iterations: 1,
            easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            fill: 'forwards' // Tahan elemen dalam keadaan akhir animasi
          });

      } else {
          // Jika elemen belum terlihat, munculkan elemen
          how_to.animate([
            { opacity: 1 },
            { opacity: 0 }
          ], {
              duration: 700,
              iterations: 1,
              easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
              fill: 'forwards' // Tahan elemen dalam keadaan akhir animasi
          });

      }

      // Toggle visibilitas elemen
      isHowtoVisible = !isHowtoVisible;
    };


    // SHOW TIGER ELEMENT
    if (event.key === ' ' || event.key === 'Space' || event.key === 32) {
      if (macanVisible) {
          // Jika elemen sudah terlihat, hilangkan elemen
          macan.animate([
              { transform: 'translateY(0)' },
              { transform: 'translateY(50%)' }
          ], {
              duration: 1200,
              iterations: 1,
              easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
              fill: 'forwards' // Tahan elemen dalam keadaan akhir animasi
          });

      } else {
          // Jika elemen belum terlihat, munculkan elemen
          macan.animate([
              { transform: 'translateY(50%)' },
              { transform: 'translateY(0)' }
          ], {
              duration: 700,
              iterations: 1,
              easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
              fill: 'forwards' // Tahan elemen dalam keadaan akhir animasi
          });

          lamp.animate([
            // key frames
            { opacity: 0 },
            { opacity: 1 }
          ], {
            // sync options
            duration: 80,
            // fill: 'forwards',
            iterations: 5
          });

      }

      // Toggle visibilitas elemen
      macanVisible = !macanVisible;
    };


    // SHOW THANK YOU ELEMENT
    if (event.key === 'd' || event.key === 'D') {
      if (!greetVisible) {
          // Jika elemen sudah terlihat, hilangkan elemen
          greet.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], {
            duration: 700,
            iterations: 1,
            easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            fill: 'forwards' // Tahan elemen dalam keadaan akhir animasi
          });

      } else {
          // Jika elemen belum terlihat, munculkan elemen
          greet.animate([
            { opacity: 1 },
            { opacity: 0 }
          ], {
              duration: 700,
              iterations: 1,
              easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
              fill: 'forwards' // Tahan elemen dalam keadaan akhir animasi
          });

      }

      // Toggle visibilitas elemen
      greetVisible = !greetVisible;
    }

    // RUN LOOPING KOREAN WORDS
    if (event.key === 's' && !animationRunning || event.key === 'S' && !animationRunning) {
        animationRunning = true;
        runAnimation();
    } else if (event.key === 's' && animationRunning || event.key === 'S' && animationRunning) {
        stopAnimation();
    }

  });

  function runAnimation() {
    if (animationIndex < animatedElements.length) {
        const element = animatedElements[animationIndex];
        element.style.opacity = 1;
        element.style.animation = 'show-element 500ms forwards';      
        animationIndex++;
        element.addEventListener('animationend', runAnimation);
    } else if (animationIndex = animatedElements.length) {
        stopAnimation();
        animationIndex = 0;
        setTimeout(runAnimation, 1000);
    }
  }

  function stopAnimation() {
      animatedElements.forEach((element) => {
        element.animate([
          { opacity: 1 },
          { opacity: 0 }
        ], {
          duration: 700,
          iterations: 1,
          easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
        });
        element.style.opacity = 0;
        element.style.animation = '';
      });
      animationRunning = false;
      animationIndex = 0;
  }
});
