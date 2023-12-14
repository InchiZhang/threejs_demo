import * as THREE from "three";

export default class Sector {
  geometry = new THREE.CircleGeometry( 1, 22, 2, 3 );

  material = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 0x00ff00,
  });

  mesh = null;

  constructor(geometry, material) {
    this.init(geometry, material);
  }

  init = (geometry, material) => {
    if (geometry) this.geometry = geometry;
    if (material) this.material = material;
    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );
  };

  animate = () => {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.mesh.rotation.z += 0.01;
  };
}
