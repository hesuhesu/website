import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/DRACOLoader.js";

// scene
const scene = new THREE.Scene();

// 카메라 설정
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x003300, 1);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 0.1;
controls.maxDistance = 500;

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// 축 선 그리기
const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

// 그리드 그리기
const gridHelper = new THREE.GridHelper(100, 100);
scene.add(gridHelper);

// 모델 이름을 표시할 div 생성
const modelListDiv = document.createElement('div');
modelListDiv.style.position = 'absolute';
modelListDiv.style.bottom = '10px'; // 화면 아래쪽에 배치
modelListDiv.style.left = '10px';
modelListDiv.style.color = 'white';
modelListDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 배경색 추가
modelListDiv.style.padding = '10px'; // 패딩 추가
document.body.appendChild(modelListDiv);

// GLTFLoader와 DRACOLoader 인스턴스 생성
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://unpkg.com/three@0.126.1/examples/js/libs/draco/"); // DRACO 디코더 경로 설정

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader); // GLTFLoader에 DRACOLoader 설정

// 모델을 저장할 배열과 애니메이션 믹서
const models = [];
const mixers = [];

// 파일 업로드 이벤트 처리
inputElement.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const arrayBuffer = e.target.result;
      loader.parse(arrayBuffer, '', (gltf) => {
        scene.add(gltf.scene);
        models.push(gltf.scene); // 모델 배열에 추가

        // 애니메이션 믹서 생성
        const mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play(); // 모든 애니메이션 재생
        });
        mixers.push(mixer); // 믹서를 배열에 추가

        // 모델 이름과 삭제 버튼 추가
        const modelName = file.name;
        addModelToList(modelName, gltf.scene);
        
        // 모델의 중심 조정
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center); // 모델을 중앙으로 이동
      });
    };
    reader.readAsArrayBuffer(file);
  }
});

// 모델 목록에 이름과 삭제 버튼 추가하는 함수
function addModelToList(name, model) {
  const modelEntry = document.createElement('div');
  modelEntry.textContent = name;
  modelEntry.style.margin = '5px';
  
  const removeButton = document.createElement('span');
  removeButton.textContent = ' ❌'; // X 모양
  removeButton.style.cursor = 'pointer';
  removeButton.style.color = 'red';
  
  removeButton.addEventListener('click', () => {
    scene.remove(model); // 씬에서 모델 제거
    modelListDiv.removeChild(modelEntry); // 목록에서 모델 제거
    const index = models.indexOf(model);
    if (index > -1) {
      models.splice(index, 1); // 배열에서 모델 제거
    }
  });
  
  modelEntry.appendChild(removeButton);
  modelListDiv.appendChild(modelEntry);
}

let autoRotate = false; // 자동 회전 상태 변수
renderer.domElement.addEventListener('dblclick', () => {
  autoRotate = !autoRotate; // 자동 회전 상태 전환
});

const clock = new THREE.Clock();
const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  
  // 애니메이션 업데이트
  const delta = clock.getDelta();
  mixers.forEach((mixer) => mixer.update(delta)); // 모든 믹서 업데이트
  
  // 자동 회전 기능
  if (autoRotate) {
    scene.rotation.y += 0.01; // Y축을 기준으로 회전
  }
  renderer.render(scene, camera);
};
animate();

// 윈도우 크기 변경 시 렌더러와 카메라 비율 업데이트
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});