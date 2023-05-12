export function getScrollAnimationPlay(camera, model) {
    let scrollPercent = 0;
    document.body.onscroll = () => {
        scrollPercent =
            ((document.documentElement.scrollTop || document.body.scrollTop) /
                ((document.documentElement.scrollHeight || document.body.scrollHeight) -
                    document.documentElement.clientHeight)) *
            100;
    };

    function lerp(x, y, a) {
        return (1 - a) * x + a * y;
    }

    function scalePercent(start, end) {
        return (scrollPercent - start) / (end - start);
    }

    const animationScripts = [];

    animationScripts.push({
        start: 0,
        end: 20,
        func: () => {
            camera.lookAt(0, 0, 0);
            camera.position.x = lerp(7.5, -3, scalePercent(0, 20));
            camera.position.y = lerp(3.2, 3.5, scalePercent(0, 20));
            camera.position.z = lerp(20, 5.5, scalePercent(0, 20));
        },
    });

    animationScripts.push({
        start: 20,
        end: 30,
        func: () => {
            // -3 3.5 5.5 - from
            // 3.5 3 -7.5
            camera.lookAt(0, 0, 0);
            camera.position.x = lerp(-3, -3, scalePercent(20, 30));
            camera.position.y = lerp(3.5, 1.5, scalePercent(20, 30));
            camera.position.z = lerp(5.5, -6.6, scalePercent(20, 30));
            // console.log(camera.position.z)
            // cube.position.z = lerp(-10, 0, scalePercent(0, 40))
            //console.log(cube.position.z)
        },
    });

    animationScripts.push({
        start: 30,
        end: 40,
        func: () => {
            // -3 3.5 5.5 - from
            // 3.5 3 -7.5
            camera.lookAt(0, 0, 0);
            camera.position.x = lerp(-3, 3.5, scalePercent(30, 40));
            camera.position.y = lerp(1.5, 3, scalePercent(30, 40));
            camera.position.z = lerp(-6.6, -7.5, scalePercent(30, 40));
            // console.log(camera.position.z)
            // cube.position.z = lerp(-10, 0, scalePercent(0, 40))
            //console.log(cube.position.z)
        },
    });

    animationScripts.push({
        start: 40,
        end: 60,
        func: () => {
            // -3.5 6.2 -5.5 - last
            // 3.5 3 -7.5
            camera.lookAt(0, 0, 0);
            camera.position.x = lerp(3.5, 6.5, scalePercent(40, 60));
            camera.position.y = lerp(3, 5.5, scalePercent(40, 60));
            camera.position.z = lerp(-7.5, 7.5, scalePercent(40, 60));
            // console.log(camera.position.z)
        },
    });

    animationScripts.push({
        start: 60,
        end: 80,
        func: () => {
            // -3.5 6.2 -5.5
            // -12 2 -0.5
            camera.lookAt(0, 0, 0);
            camera.position.x = lerp(6.5, -12, scalePercent(60, 80));
            camera.position.y = lerp(5.5, 2, scalePercent(60, 80));
            camera.position.z = lerp(7.5, -0.5, scalePercent(60, 80));
            // console.log(camera.position.z)
        },
    });

    animationScripts.push({
        start: 80,
        end: 100,
        func: () => {
            // 0 3.6 7.5
            // -12 2 -0.5
            camera.lookAt(0, 0, 0);
            camera.position.x = lerp(-12, 0, scalePercent(80, 100));
            camera.position.y = lerp(2, 3.5, scalePercent(80, 100));
            camera.position.z = lerp(-0.5, 8.2, scalePercent(80, 100));
            // console.log(camera.position.z)
        },
    });

    animationScripts.push({
        start: 90,
        end: 101,
        func: () => {
            model.rotation.y += 0.001;
        },
    });

    return function playScrollAnimations() {
        animationScripts.forEach((a) => {
            if (scrollPercent >= a.start && scrollPercent < a.end) {
                a.func();
            }
        });
    };
}
