import * as THREE from "three";

export function getScene() {
    const scene = setScene();
    const lights = getLights();
    for (const light of lights) {
        scene.add(light);
    }
    return scene;
}

function setScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfcbc3c);
    return scene;
}

function getLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;

    return [ambientLight, directionalLight];
}
