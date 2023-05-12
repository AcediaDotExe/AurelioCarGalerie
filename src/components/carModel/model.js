import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export function setModel(path, scene) {
    const loader = new GLTFLoader();
    return new Promise((resolve) => {
        loader.load(
            path,
            function (gltf) {
                gltf.scene.children[0].scale.set(1, 1, 1);
                scene.add(gltf.scene);
                resolve(gltf.scene);
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );
    });
}
