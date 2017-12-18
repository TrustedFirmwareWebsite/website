$(document).ready(function () {

    "use strict";


    /* _____________________________________

     Device Detection
     _____________________________________ */

    // Mobile Detect
    var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
    var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));


    /* _____________________________________

     Preloader
     _____________________________________ */

    var loader = $(".loader");

    if (loader.length) {
      // show Preloader until the website ist loaded
      $(window).on("load", function () {
        loader.addClass('fade-out');
        setTimeout(function () {
          loader.hide();
        }, 1000);
      });
    }

/* _____________________________________

     Count Down
     _____________________________________ */

    var time = $('.count-down');
    if (time.length) {
      var endDate = new Date(time.data("end-date"));
      time.countdown({
        date: endDate,
        render: function (data) {
          $(this.el).html('<div class="cd-row"><div><h1>' + this.leadingZeros(data.days, 3)
            + '</h1><p>days</p></div><div><h1>'
            + this.leadingZeros(data.hours, 2)
            + '</h1><p>hrs</p></div></div><div class="cd-row"><div><h1>'
            + this.leadingZeros(data.min, 2)
            + '</h1><p>min</p></div><div><h1>'
            + this.leadingZeros(data.sec, 2)
            + '</h1><p>sec</p></div></div>');
        }
      });
    }
    /* _____________________________________

     Smooth Scroll
     _____________________________________ */


    function initScroll(anchor) {
      $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top
      }, {
        duration: 1000,
        specialEasing: {
          width: "linear",
          height: "easeInOutCubic"
        }
      });

    }

    $("a.smooth-scroll").on("click", function (event) {
      var anchor = $(this).attr("href");
      initScroll(anchor);
      event.preventDefault();
    });


    /* _____________________________________

     Scroll Reveal
     _____________________________________ */

    var reveal = $(".reveal");

    if (reveal.length) {
      window.sr = ScrollReveal();

      // Add class to <html> if ScrollReveal is supported
      if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
      }

      sr.reveal('.reveal.scale-in', {
        origin: 'bottom',
        distance: '20px',
        duration: 1500,
        delay: 400,
        opacity: 1,
        scale: 1.1,
        easing: 'linear',
        reset: false
      });


      sr.reveal('.reveal.scale-out', {
        origin: 'bottom',
        distance: '20px',
        duration: 1500,
        delay: 400,
        opacity: 1,
        scale: 0.9,
        easing: 'linear',
        reset: false
      });
    }

    /* _____________________________________

     Navbar Button
     _____________________________________ */

    var collapse = $(".collapse");

    collapse.on('show.bs.collapse', function () {
      $('.navbar-button').addClass('open');
    });
    collapse.on('hide.bs.collapse', function () {
      $('.navbar-button').removeClass('open');
    });


    /* _____________________________________

     Show Content
     _____________________________________ */

    var navLinks = $('.navbar-links li'),
      content = $("body"),
      navbar = $(".navbar"),
      col = $(".col-transform");

    $(".show-info").click(function () {
      if (window.innerWidth > 990) {
        if (content.hasClass('show-content')) {
          col.removeClass('col-md-6').addClass('col-md-12');
          content.removeClass('show-content');
          setTimeout(function () {
            navbar.removeClass('navbar-open')
          }, 900);
          initTranslateOpacity(navLinks, '100%', '0', 'hidden', 600);
        } else {
          col.removeClass('col-md-12').addClass('col-md-6');
          content.addClass('show-content');
          setTimeout(function () {
            navbar.addClass('navbar-open')
          }, 300);
          initTranslateOpacity(navLinks.get().reverse(), '0', '1', 'visible', 600);
        }
      }
      var anchor = $(this).data("href");
      initScroll(anchor);
    });


    function initTranslateOpacity(selector, translate, opacity, visibility, time) {
      $(selector).each(function () {
        var _this = this;
        window.setTimeout(function () {
          $(_this).css({
            '-webkit-transform': 'translate(' + translate + ',0)',
            'opacity': opacity,
            'visibility': visibility
          });
        }, time);
        time += 300;
      });
    }


    /* _____________________________________

     Page Image BG Slider
     _____________________________________ */

    var pageSlider = $("#page-slider");
    if (pageSlider.length) {
      pageSlider.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        slideTransition: 'linear',
        autoplaySpeed: 8000,
        mouseDrag: false
      });
    }


    /* _____________________________________

     Background Youtube
     _____________________________________ */

    // shows Video only for Desktop
    var pageYoutube = $('#page-youtube');

    if (pageYoutube.length && !isMobile && !isTouch) {
      pageYoutube.YTPlayer({
        fitToBackground: true,
        videoId: pageYoutube.data("video-id"),
        playerVars: {
          modestbranding: 0,
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          branding: 0,
          rel: 0,
          autohide: 0,
          start: 0
        }
      });
    }

    /* _____________________________________

     Background Video
     _____________________________________ */

    // shows Video only for Desktop
    var pageVideo = $('#page-video');

    if (pageVideo.length && !isMobile && !isTouch) {
      new $.backgroundVideo($("body"), {
        "align": "centerXY",
        "width": 960,
        "height": 540,
        "path": pageVideo.data("path"),
        "filename": pageVideo.data("file"),
        "types": ["mp4", "ogg", "webm"]
      });
    }

    /* _____________________________________

     Background Kenburn
     _____________________________________ */


    var selectorKenburn = $("#kenburn-slider, body");
    if ($('#kenburn-slider').length) {

      selectorKenburn.vegas({
        slides: [
          {src: "images/trusted-firmware.jpg"},
          {src: "images/trusted-firmware.jpg"},
          {src: "images/trusted-firmware.jpg"}
          // further slide definitions
        ],
        transition: 'fade',
        animation: 'random',
        transitionDuration: 4000,
        delay: 8000,
        timer: false
      });
    }


    /* _____________________________________

     Background Particle
     _____________________________________ */

    var pageParticle = $('#page-particle');
    if (pageParticle.length) {

      pageParticle.particleground({
        dotColor: pageParticle.data("dot-color"),
        lineColor: pageParticle.data("line-color")
      });
    }


    /* _____________________________________

     Background Gradient
     _____________________________________ */

    var pageGradient = $('#page-gradient');
    if (pageGradient.length) {
      pageGradient.gradientify({
        gradients: [
          {start: [35, 72, 200], stop: [192, 33, 114]},
          {start: [10, 155, 102], stop: [82, 98, 176]}
        ],
        fps: 80
      });
    }


    /* _____________________________________

     Background Rain
     _____________________________________ */

    var pageRain = $('#page-rain');
    if (pageRain.length && !isMobile && !isTouch) {
      var image = pageRain[0];
      image.onload = function () {
        var engine = new RainyDay({
          image: this,
          parentElement: $('.section-overlay')[0]
        });
        engine.rain([[1, 2, 4000]]); // add 4000 drops of size from 1 - 2
        engine.rain(
          [
            [3, 3, 1], [5, 5, 1], [6, 2, 1]
          ],
          100); // every 100ms
      };
      image.crossOrigin = 'anonymous';
      image.src = pageRain.attr('src');
    }


    /* _____________________________________

     Background Amplitude & Sound
     _____________________________________ */


    var pageAmplitude = $('#page-amplitude'),
      volume = $('#volume'),
      playback = $('#playback');


    if (pageAmplitude.length) {

      var wave = new SiriWave({
        speed: 0.05,
        amplitude: 1,
        container: pageAmplitude[0],
        autostart: true,
        frequency: 4,
        height: 300,
        style: 'ios9'
      });

      if (!isMobile && !isTouch) {
        var sound = new Howl({
          src: ['audio/egotype.webm', 'audio/egotype.mp3'],
          autoplay: true,
          loop: true
        });

        playback.on('click', function () {
          if (playback.hasClass('pause')) {
            playback.addClass('play').removeClass('pause');
            playback.find('i').removeClass('icon-music-pause-button').addClass('icon-music-play-button');
            sound.pause();
            wave.stop();
          } else {
            playback.removeClass('play').addClass('pause');
            playback.find('i').removeClass('icon-music-play-button').addClass('icon-music-pause-button');
            sound.play();
            wave.start();
          }
        });

        volume.on('click', function () {
          if (volume.hasClass('vol-1')) {
            volume.removeClass('vol-1').addClass('vol-0');
            volume.find('i').removeClass('icon-music-volume-up').addClass('icon-music-volume-down');
            sound.volume(0);
          } else {
            volume.addClass('vol-1').removeClass('vol-0');
            volume.find('i').removeClass('icon-music-volume-down').addClass('icon-music-volume-up');
            sound.volume(1);
          }
        });
      } else {
        volume.hide();
        playback.hide();
      }
    }


    /* _____________________________________

     Background Particle Waves
     _____________________________________ */


    var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

    var container;
    var camera, scene, renderer;

    var particles, particle, count = 0;

    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;


    function init(waveColor, bgColor) {

      container = $('#particle-waves')[0];

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;

      scene = new THREE.Scene();

      particles = [];

      var PI2 = Math.PI * 2;
      var material = new THREE.SpriteCanvasMaterial({

        color: waveColor,
        program: function (context) {
          context.beginPath();
          context.arc(0, 0, 0.5, 0, PI2, true);
          context.fill();
        }
      });

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
          particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
          scene.add(particle);
        }
      }

      renderer = new THREE.CanvasRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(bgColor, 1);
      container.appendChild(renderer.domElement);
      window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function animate() {
      requestAnimationFrame(animate);
      render();

    }

    function render() {
      camera.position.x += ( mouseX - camera.position.x ) * .05;
      camera.position.y += ( -mouseY - camera.position.y ) * .05;
      camera.lookAt(scene.position);

      var i = 0;

      for (var ix = 0; ix < AMOUNTX; ix++) {

        for (var iy = 0; iy < AMOUNTY; iy++) {

          particle = particles[i++];
          particle.position.y = ( Math.sin(( ix + count ) * 0.3) * 50 ) +
            ( Math.sin(( iy + count ) * 0.5) * 50 );
          particle.scale.x = particle.scale.y = ( Math.sin(( ix + count ) * 0.3) + 1 ) * 4 +
            ( Math.sin(( iy + count ) * 0.5) + 1 ) * 4;

        }
      }

      renderer.render(scene, camera);

      count += 0.1;

    }

    var particleWaves = $('#particle-waves');
    if (particleWaves.length) {
      init(particleWaves.data('wave-color'), particleWaves.data('bg-color'));
      animate();
    }


    /* _____________________________________

     Background Waterpipe
     _____________________________________ */

    var waterPipe = $('#waterpipe');

    if (waterPipe.length) {
      waterPipe.waterpipe({
        gradientStart: '#fa05fa',
        gradientEnd: '#6b71e3',
        smokeOpacity: 0.1,
        numCircles: 1,
        maxMaxRad: 'auto',
        minMaxRad: 'auto',
        minRadFactor: 0,
        iterations: 8,
        drawsPerFrame: 10,
        lineWidth: 2,
        speed: 20,
        bgColorInner: "#444444",
        bgColorOuter: "#000000"
      });
    }


    /* _____________________________________

     Background Ripple
     _____________________________________ */

    var ripple = $('#page-ripple');

    if (ripple.length  && !isMobile && !isTouch) {
      ripple.ripples({
        resolution: 512,
        dropRadius: 10, //px
        perturbance: 0.04,
        interactive: false
      });

      setInterval(function () {
        var $el = ripple;
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;

        $el.ripples('drop', x, y, dropRadius, strength);
      }, 3000);
    }


    /* _____________________________________

     Background Starfield
     _____________________________________ */

    var starfield = $('#page-starfield');

    if (starfield.length) {
      starfield.starfield({
        speed: 0,
        quantity: 500,
        ratio: 200
      });
    }

    /* _____________________________________

     Background Square
     _____________________________________ */

    var square = $('#page-square');

    if (square.length) {
      particlesJS("page-square", {
        "particles": {
          "number": {
            "value": 20,
            "density": {"enable": false, "value_area": 800}
          },
          "color": {"value": square.data('square-color')},
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
          },
          "size": {
            "value": 58,
            "random": false,
            "anim": {"enable": true, "speed": 10, "size_min": 40, "sync": false}
          },
          "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 4,
            "direction": "right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {"enable": false, "mode": "grab"},
            "onclick": {"enable": false, "mode": "push"},
            "resize": true
          },
          "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
          }
        },
        "retina_detect": true
      });
    }

    /* _____________________________________

     Background Bubbles
     _____________________________________ */

    var bubbles = $('#page-bubbles');

    if (bubbles.length) {
      particlesJS("page-bubbles", {
        "particles": {
          "number": {
            "value": 30,
            "density": {"enable": true, "value_area": 800}
          },
          "color": {"value": bubbles.data('bubble-color')},
          "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
          },
          "size": {
            "value": 58,
            "random": false,
            "anim": {"enable": true, "speed": 10, "size_min": 40, "sync": false}
          },
          "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {"enable": false, "mode": "grab"},
            "onclick": {"enable": false, "mode": "push"},
            "resize": true
          },
          "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
          }
        },
        "retina_detect": true
      });
    }


    /* _____________________________________

     Background Flat Surface Shader
     _____________________________________ */

    /* ------------------------------
     Options
     ------------------------------ */

    var flatSurface = $('#page-fss');

    if (flatSurface.length) {
      var MESH = {
        width: 1.2,
        height: 1.2,
        depth: 0,
        segments: 16,
        slices: 8,
        xRange: 0.8,
        yRange: 0.1,
        zRange: 1.0,
        ambient: '#555555',
        diffuse: '#ffffff',
        speed: 0.002
      };

      var LIGHT = {
        count: 2,
        xyScalar: 1,
        zOffset: 100,
        ambient: flatSurface.data('ambient-color'),
        diffuse: flatSurface.data('diffuse-color'),
        speed: 0.002,
        gravity: 500,
        dampening: 0.95,
        minLimit: 10,
        maxLimit: null,
        minDistance: 20,
        maxDistance: 800,
        autopilot: true,
        draw: false,
        bounds: FSS.Vector3.create(),
        step: FSS.Vector3.create(
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0)
        )
      };


      /* ------------------------------
       Render Properties
       ------------------------------ */

      var RENDER = {
        renderer: 'canvas'
      };

      var now, start = Date.now();
      var center = FSS.Vector3.create();
      var attractor = FSS.Vector3.create();
      var containerFSS = flatSurface[0];
      var output = flatSurface[0];
      var rendererFSS, sceneFSS, mesh, geometry, material;
      var canvasRenderer;

    }

    /* ------------------------------
     Methods
     ------------------------------ */

    function initialise() {
      createRenderer();
      createScene();
      createMesh();
      createLights();
      addEventListeners();
      resize(containerFSS.offsetWidth, containerFSS.offsetHeight);
      animateFSS();
    }

    function createRenderer() {
      canvasRenderer = new FSS.CanvasRenderer();
      setRenderer(RENDER.renderer);
    }

    function setRenderer() {
      if (rendererFSS) {
        output.removeChild(rendererFSS.element);
      }

      rendererFSS = canvasRenderer;

      rendererFSS.setSize(containerFSS.offsetWidth, containerFSS.offsetHeight);
      output.appendChild(rendererFSS.element);
    }

    function createScene() {
      sceneFSS = new FSS.Scene();
    }

    function createMesh() {
      sceneFSS.remove(mesh);
      rendererFSS.clear();
      geometry = new FSS.Plane(MESH.width * rendererFSS.width, MESH.height * rendererFSS.height, MESH.segments, MESH.slices);
      material = new FSS.Material(MESH.ambient, MESH.diffuse);
      mesh = new FSS.Mesh(geometry, material);
      sceneFSS.add(mesh);

      // Augment vertices for animation
      var v, vertex;
      for (v = geometry.vertices.length - 1; v >= 0; v--) {
        vertex = geometry.vertices[v];
        vertex.anchor = FSS.Vector3.clone(vertex.position);
        vertex.step = FSS.Vector3.create(
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0),
          Math.randomInRange(0.2, 1.0)
        );
        vertex.time = Math.randomInRange(0, Math.PIM2);
      }
    }

    function createLights() {
      var l, light;
      for (l = sceneFSS.lights.length - 1; l >= 0; l--) {
        light = sceneFSS.lights[l];
        sceneFSS.remove(light);
      }
      rendererFSS.clear();
      for (l = 0; l < LIGHT.count; l++) {
        light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
        light.ambientHex = light.ambient.format();
        light.diffuseHex = light.diffuse.format();
        sceneFSS.add(light);

        // Augment light for animation
        light.mass = Math.randomInRange(0.5, 1);
        light.velocity = FSS.Vector3.create();
        light.acceleration = FSS.Vector3.create();
        light.force = FSS.Vector3.create();

        // Ring SVG Circle
        light.ring = document.createElementNS(FSS.SVGNS, 'circle');
        light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
        light.ring.setAttributeNS(null, 'stroke-width', '0.5');
        light.ring.setAttributeNS(null, 'fill', 'none');
        light.ring.setAttributeNS(null, 'r', '10');

        // Core SVG Circle
        light.core = document.createElementNS(FSS.SVGNS, 'circle');
        light.core.setAttributeNS(null, 'fill', light.diffuseHex);
        light.core.setAttributeNS(null, 'r', '4');
      }
    }

    function resize(width, height) {
      rendererFSS.setSize(width, height);
      FSS.Vector3.set(center, rendererFSS.halfWidth, rendererFSS.halfHeight);
      createMesh();
    }

    function animateFSS() {
      now = Date.now() - start;
      update();
      renderFSS();
      requestAnimationFrame(animateFSS);
    }

    function update() {
      var ox, oy, oz, l, light, v, vertex, offset = MESH.depth / 2;

      // Update Bounds
      FSS.Vector3.copy(LIGHT.bounds, center);
      FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

      // Update Attractor
      FSS.Vector3.setZ(attractor, LIGHT.zOffset);

      // Overwrite the Attractor position
      if (LIGHT.autopilot) {
        ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
        oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
        FSS.Vector3.set(attractor,
          LIGHT.bounds[0] * ox,
          LIGHT.bounds[1] * oy,
          LIGHT.zOffset);
      }

      // Animate Lights
      for (l = sceneFSS.lights.length - 1; l >= 0; l--) {
        light = sceneFSS.lights[l];

        // Reset the z position of the light
        FSS.Vector3.setZ(light.position, LIGHT.zOffset);

        // Calculate the force Luke!
        var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
        var F = LIGHT.gravity * light.mass / D;
        FSS.Vector3.subtractVectors(light.force, attractor, light.position);
        FSS.Vector3.normalise(light.force);
        FSS.Vector3.multiplyScalar(light.force, F);

        // Update the light position
        FSS.Vector3.set(light.acceleration);
        FSS.Vector3.add(light.acceleration, light.force);
        FSS.Vector3.add(light.velocity, light.acceleration);
        FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
        FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
        FSS.Vector3.add(light.position, light.velocity);
      }

      // Animate Vertices
      for (v = geometry.vertices.length - 1; v >= 0; v--) {
        vertex = geometry.vertices[v];
        ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
        oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
        oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
        FSS.Vector3.set(vertex.position,
          MESH.xRange * geometry.segmentWidth * ox,
          MESH.yRange * geometry.sliceHeight * oy,
          MESH.zRange * offset * oz - offset);
        FSS.Vector3.add(vertex.position, vertex.anchor);
      }

      // Set the Geometry to dirty
      geometry.dirty = true;
    }

    function renderFSS() {
      rendererFSS.render(sceneFSS);

      // Draw Lights
      if (LIGHT.draw) {
        var l, lx, ly, light;
        for (l = sceneFSS.lights.length - 1; l >= 0; l--) {
          light = sceneFSS.lights[l];
          lx = light.position[0];
          ly = light.position[1];
          rendererFSS.context.lineWidth = 0.5;
          rendererFSS.context.beginPath();
          rendererFSS.context.arc(lx, ly, 10, 0, Math.PIM2);
          rendererFSS.context.strokeStyle = light.ambientHex;
          rendererFSS.context.stroke();
          rendererFSS.context.beginPath();
          rendererFSS.context.arc(lx, ly, 4, 0, Math.PIM2);
          rendererFSS.context.fillStyle = light.diffuseHex;
          rendererFSS.context.fill();

        }
      }
    }


    function addEventListeners() {
      window.addEventListener('resize', onWindowResizFSS);
    }

    /* ------------------------------
     Callbacks
     ------------------------------ */

    function onWindowResizFSS() {
      resize(containerFSS.offsetWidth, containerFSS.offsetHeight);
      renderFSS();
    }


    // Init
    if (flatSurface.length) {
      initialise();
    }




    /* _____________________________________

     Gallery Lightbox
     _____________________________________ */

    var initPhotoSwipeFromDOM = function (gallerySelector) {

      var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item;

        for (var i = 0; i < numNodes; i++) {

          figureEl = thumbElements[i];

          if (figureEl.nodeType !== 1) {
            continue;
          }

          linkEl = figureEl.children[0];

          size = linkEl.getAttribute('data-size').split('x');


          // create slide object
          item = {
            src: linkEl.getAttribute('href'),
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          };


          if (figureEl.children.length > 1) {
            // <figcaption> content
            item.title = '<h4>' + figureEl.children[1].innerHTML + '</h4><p>' + figureEl.children[2].innerHTML + '</p>';
          }

          if (linkEl.children.length > 0) {
            // <img> thumbnail element, retrieving thumbnail url
            item.msrc = linkEl.children[0].getAttribute('src');
          }

          item.el = figureEl; // save link to element for getThumbBoundsFn
          items.push(item);
        }

        return items;
      };

      // find nearest parent element
      var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
      };

      // triggers when user clicks on thumbnail
      var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
          return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
          return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

        for (var i = 0; i < numChildNodes; i++) {
          if (childNodes[i].nodeType !== 1) {
            continue;
          }

          if (childNodes[i] === clickedListItem) {
            index = nodeIndex;
            break;
          }
          nodeIndex++;
        }


        if (index >= 0) {
          // open PhotoSwipe if valid index found
          openPhotoSwipe(index, clickedGallery);
        }
        return false;
      };

      // parse picture index and gallery index from URL (#&pid=1&gid=2)
      var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
          params = {};

        if (hash.length < 5) {
          return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue;
          }
          var pair = vars[i].split('=');
          if (pair.length < 2) {
            continue;
          }
          params[pair[0]] = pair[1];
        }

        if (params.gid) {
          params.gid = parseInt(params.gid, 10);
        }

        return params;
      };

      var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items;

        items = parseThumbnailElements(galleryElement);

        // options
        options = {
          barsSize: {top: 64, bottom: 'auto', padding: '10px'},
          bgOpacity: 0.98,
          closeEl: true,
          captionEl: true,
          fullscreenEl: false,
          zoomEl: false,
          shareEl: false,
          counterEl: true,
          arrowEl: true,
          preloaderEl: true,
          galleryUID: galleryElement.getAttribute('data-pswp-uid'),

          getThumbBoundsFn: function (index) {
            // See Options -> getThumbBoundsFn section of documentation for more info
            var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
              pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();

            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
          }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
          if (options.galleryPIDs) {
            // parse real index when custom PIDs are used
            // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
            for (var j = 0; j < items.length; j++) {
              if (items[j].pid == index) {
                options.index = j;
                break;
              }
            }
          } else {
            // in URL indexes start from 1
            options.index = parseInt(index, 10) - 1;
          }
        } else {
          options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
          return;
        }

        if (disableAnimation) {
          options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
      };

      // loop through all gallery elements and bind events
      var galleryElements = document.querySelectorAll(gallerySelector);

      for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
      }

      // Parse URL and open gallery if it contains #&pid=3&gid=1
      var hashData = photoswipeParseHash();
      if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
      }
    };


    $("#photoswipe").load("js/plugins/photoswipe/include/photoswipe.html", function () {
      // Initialization .gallery
      initPhotoSwipeFromDOM('.gallery');
      // write your init for further galleries here
    });

    /* _____________________________________

     Textarea Auto Resize
     _____________________________________ */

    var textarea = $('textarea');

    if (textarea.length) {
      textarea[0].addEventListener('keydown', autosize);
    }

    function autosize() {
      var el = this;
      setTimeout(function () {
        el.style.cssText = 'height:50px; padding:15px';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      }, 0);
    }

    /* _____________________________________

     Form Focus
     _____________________________________ */

    var formControl = $(".form-control");

    formControl.on('focus', function () {
      $(this).parent().addClass('focus')

    });
    formControl.on('blur', function () {
      $(this).parent().removeClass('focus');
    });


    /* _____________________________________

     Mail Chimp
     _____________________________________ */

    var form = $('#mc-form');

    if (form.length) {
      form.ajaxChimp({
        callback: mailchimpCallback,
        url: 'https://linaro.us3.list-manage.com/subscribe/post?u=14baaae786342d0d405ee59c2&amp;id=6e692864ab'
        // Replace the URL above with your mailchimp URL (put your URL inside '').
      });
    }
    


    // callback function when the form submitted, show the notification box
    function mailchimpCallback(resp) {
      var messageContainer = $('#message-newsletter');
      messageContainer.removeClass('error');

      form.find('.form-group').removeClass('error');
      if (resp.result === 'error') {
        form.find('.input-group').addClass('error');
        messageContainer.addClass('error');
      } else {
        form.find('.form-control').fadeIn().val('');
      }

      messageContainer.slideDown('slow', 'swing');

      setTimeout(function () {
        messageContainer.slideUp('slow', 'swing');
      }, 10000);
    }


    /* _____________________________________

     Map
     _____________________________________ */

    function initMap(map) {

      // centered map point
      var latlng = new google.maps.LatLng(40.72020106, -73.97163391);

      // points marker info and coordinates
      var points = [
        ['<div class="wrapper"><h4>Kounter Office</h4><h5>Opening Hours</h5><p>Mo – Fr: 08:30 – 20:00</p></div>', 40.7486332, -73.9797129],
        ['<div class="wrapper"><h4>Kounter Agency</h4><h5>Opening Hours</h5><p>Mo – Fr: 08:30 – 20:00</p></div>', 40.66810, -73.94480]
      ];
      // marker
      var iconMarker = 'images/marker.png';

      // marker size
      var markerSize = new google.maps.Size(50, 49);


      // map options
      var options = {
        zoom: 11,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false,

        // styles for monchrome map
        styles: [{
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {'visibility': 'simplified'}
          ]
        }, {
          featureType: 'poi',
          elementType: 'label',
          stylers: [
            {'visibility': 'off'}
          ]
        }, {
          featureType: 'all',
          stylers: [
            {saturation: -100},
            {gamma: 0.90}
          ]
        }]

      };

      var setMap = new google.maps.Map(map[0], options);

      var info = new google.maps.InfoWindow();


      // custom infoWindow
      google.maps.event.addListener(info, 'domready', function () {

        // Reference to the DIV that wraps the bottom of infowindow
        var iwOuter = $('.gm-style-iw');

        var iwBackground = iwOuter.prev();
        // Removes background shadow DIV
        iwBackground.children(':nth-child(2)').css({
          'box-shadow': 'none',
          'background-color': 'rgba(0, 0, 0, 0.1)'
        });

        // Changes the desired tail shadow color.
        iwBackground.children(':nth-child(3)').find('div').children().css({
          'box-shadow': 'none',
          'border-top-color': 'rgba(0, 0, 0, 0.1)'
        });

      });
      var marker, i;
      var image = {
        url: iconMarker,
        scaledSize: markerSize
      };

      for (i = 0; i < points.length; i++) {
        var stations = points[i][0];
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(points[i][1], points[i][2]),
          map: setMap,
          icon: image
        });
        google.maps.event.addListener(marker, 'click', (function (stations) {
          return function () {
            info.setContent(stations);
            info.open(setMap, this);
          }
        })(stations));
      }
    }

    var map = $('#map');

    if (map.length) {
      google.maps.event.addDomListener(window, 'load', initMap(map));
      google.maps.event.addDomListener(window, 'resize', initMap(map));
    }

    /* _____________________________________

     Bootstrap Fix: IE10 in Win 8 & Win Phone 8
     _____________________________________ */


    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style");
      msViewportStyle.appendChild(
        document.createTextNode(
          "@-ms-viewport{width:auto!important}"
        )
      );
      document.querySelector("head").appendChild(msViewportStyle)
    }
  }
)
;
