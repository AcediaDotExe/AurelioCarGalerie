import {getScene} from "./src/scene.js";
import {getRenderer, setCameraPosition} from "./src/render.js";
import {setModel} from "./src/components/carModel/model.js";
import * as THREE from "three";
import {resizeFix} from "./src/components/utils/resizeFix.js";
import {getScrollAnimationPlay} from "./src/components/scrollingAnimation/animations.js";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const renderer = getRenderer();
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
setCameraPosition(camera, 7.5, 3.2, 20, 180);

const scene = getScene();

async function setBehavior() {
    const model = await setModel("carModel/scene.gltf", scene);
    const playScrollAnimations = getScrollAnimationPlay(camera, model);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        playScrollAnimations();
    }

    animate();
}

setBehavior().catch((err) => log.error(err));

resizeFix(camera, renderer);
