import makeCarousel from '../carousel/module.js';

document.addEventListener("DOMContentLoaded", () => {
    const typingSection = document.querySelector(".typing-effect");

    const imageSliderSection = document.getElementById("image-slider");
    const videoSection = document.getElementById("video-player");
    const modelViewerSection = document.getElementById('model-viewer');
    const tiltEffectSection = document.querySelector(".tilt-effect-container");
    const tiltContents = document.querySelector(".tilt-effect");
    const progress = document.getElementById('scroll-progress');
    let zoomLevel = 1;
    let camera = null;
    init3DViewer(modelViewerSection);
    registTiltEffectHandler(tiltContents);
    initProgressAnimate(progress);
    function initProgressAnimate(target) {
        target.animate({
            width: ['0%', '100%'],
        }, {
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    {target, edge: "start", threshold: "0"},
                    {target, edge: "emd", threshold: "0"},
                ]
            })
        })

    }

    function registTiltEffectHandler(contents) {
                tiltEffectSection.addEventListener("mousemove", (event) => {
                    const { left, top, width, height } = tiltEffectSection.getBoundingClientRect();
                    const mouseX = event.clientX - left - width / 2;
                    const mouseY = event.clientY - top - height / 2;

                    const rotateX = (mouseX / height) * 30;
                    const rotateY = (mouseY / width) * -30;

                    contents.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                })
            }
    function init3DViewer(container) {
                const scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(
                    75, window.innerWidth / window.innerHeight,
                    0.1,
                    1000
                );
                const renderer = new THREE.WebGLRenderer({ alpha: true });
                renderer.setSize(container.clientWidth, container.clientHeight);
                container.appendChild(renderer.domElement);

                const geometry = new THREE.PlaneGeometry(5, 5);
                const material = new THREE.MeshBasicMaterial({
                    color: 0x00ff00,
                    side: THREE.DoubleSide,
                });

                camera.position.z = 10 / zoomLevel;
                const rectangle = new THREE.Mesh(geometry, material);
                scene.add(rectangle);

                const animate = () => {
                    requestAnimationFrame(animate);
                    rectangle.rotation.x += 0.01;
                    rectangle.rotation.y += 0.01;
                    renderer.render(scene, camera);
                }
                animate();
                renderer.render(scene, camera)
            }
    const video = document.createElement('video');
        video.pause();
        video.muted = true;
        video.src = "./videos/vid3.mp4";
        video.loop = true;
        video.onloadeddata = () => {
            video.play();
        }
        videoSection.appendChild(video);
        registVideoEventHandler(video);

        let index = 0;
        function typeText(text) {
            if (index < text.length) {
                typingSection.textContent += text.charAt(index);
                index++;
                setTimeout(() => typeText(text), 100);
            }
        }

        imageSliderSection.appendChild(makeCarousel([
            "../carousel/images/01.jpg",
            "../carousel/images/02.jpg",
            "../carousel/images/03.jpg",
            "../carousel/images/04.jpg",
            "../carousel/images/05.jpg",
        ], {
            visilbeCnt: 1,
            captionPos: "left top"
        }))

        function registVideoEventHandler(video) {
            video.addEventListener("mousedown", (event) => {
                video.pause();
            });

            function seekTo(duration) {
                return new Promise((resolve) => {
                    let seekTime = video.currentTime + duration;
                    seekTime = seekTime > video.duration ? seekTime % video.duration : seekTime;
                    video.currentTime = seekTime < 0 ? video.duration + seekTime : seekTime;
                    video.ontimeupdate = () => {
                        resolve(video.currentTime);
                    }
                })
            }

            let promise = null;
            video.addEventListener("mousemove", (event) => {
                if (video.paused) {
                    const duration = event.movementX / 10;
                    if (!promise) {
                        promise = seekTo(duration).then(time => {
                            console.log("updated: ", time);
                            promise = null;
                        })
                    }
                }
            });

            video.addEventListener("mouseup", (event) => {
                video.play();
            })
        }

        const observerOptions = { root: null, threshold: [0.5] };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    if (entry.target === typingSection) {
                        typeText('Hello, welcome to interactive web site!');
                    }
                } else {
                    entry.target.classList.remove("is-visible");
                    if (entry.target === typingSection) {
                        index = 0;
                        typingSection.textContent = "";
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll("section").forEach((section) => {
            observer.observe(section);
        })
    })