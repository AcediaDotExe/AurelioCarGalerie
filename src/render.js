import * as THREE from "three";

export function setCameraPosition(camera, x, y, z, angle) {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
    camera.rotateY((angle / 180) * Math.PI);
}

export function getRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    return renderer;
}
