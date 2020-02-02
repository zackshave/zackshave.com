import React from 'react'
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

const Canvas = class extends React.Component {
  
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        var effect;
    
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
        effect.setSize( window.innerWidth, window.innerHeight );
        effect.domElement.style.color = 'white';
        effect.domElement.style.backgroundColor = 'black';
        this.mount.appendChild(effect.domElement);
        this.mount.appendChild(renderer.domElement);
    
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x6699cc });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    
        camera.position.z = 5;
    
        var animate = function() {
          requestAnimationFrame(animate);
    
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
    
          renderer.render(scene, camera);
        };
    
        animate();
      }
      render() {
        return <div ref={ref => (this.mount = ref)} />;
      }
    }
  
  export default Canvas