// scene 생성
var scene = new THREE.Scene();

// camera 생성
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//배경색
scene.background = new THREE.Color(0xFFFFFF);
// renderer 생성
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// geometry 생성 (네모칸)
var geometry = new THREE.BoxGeometry(1, 1, 1);//head

var eye_r_geometry = new THREE.SphereGeometry(1, 32, 32);
var eye_l_geometry = new THREE.SphereGeometry(1, 32, 32);

var nose = new THREE.ConeGeometry(0.5, 1, 32);//nose
var eye_ball_r = new THREE.SphereGeometry(1, 32, 32);//ear
var eye_ball_l = new THREE.SphereGeometry(1, 32, 32);//ear
var ear_r = new THREE.ConeGeometry(0.5, 2, 50);//ear
var ear_l = new THREE.ConeGeometry(0.5, 2, 50);//ear
var area_geometry = new THREE.SphereGeometry(4.3, 32, 32);

//cat 생성




// material 생성 (색상)
var material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });

//눈그리기
var material2 = new THREE.MeshBasicMaterial({ color: 0xf0f0f0 });
// material.wireframe = true;
// material2.wireframe = true;

var material3 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
material3.wireframe = true;
material3.transparent = true; //투명으로 만들기위해서는 transparent를 true로 설정해야함 또한 opacity를 설정해야함
material3.opacity = 0;
//비가시화

var material4 = new THREE.MeshBasicMaterial({ color: 0x000000 });

var area= new THREE.Mesh(area_geometry, material3);
// mesh 생성 (geometry와 material 결합)
var eye_r = new THREE.Mesh(eye_r_geometry, material2);
var cube = new THREE.Mesh(geometry, material);
var eye_l = new THREE.Mesh(eye_l_geometry, material2);
var nose = new THREE.Mesh(nose, material4);
var ear_r = new THREE.Mesh(ear_r, material4);
var ear_l = new THREE.Mesh(ear_l, material4);

var eye_ball_r = new THREE.Mesh(eye_ball_r, material4);
var eye_ball_l = new THREE.Mesh(eye_ball_l, material4);

//eye의 사이즈 조정
eye_r.scale.set(0.2, 0.2, 0.2);
eye_l.scale.set(0.2, 0.2, 0.2);
eye_ball_r.scale.set(0.5, 0.5, 0.5);
eye_ball_l.scale.set(0.5, 0.5, 0.5);
//nose의 사이즈 조정
nose.scale.set(0.2, 0.2, 0.2);
//ear의 사이즈 조정
ear_r.scale.set(0.2, 0.2, 0.2);
ear_l.scale.set(0.2, 0.2, 0.2);
//eye를 cube의 자식으로
eye_l.position.set(-0.5, 0, 0.5);
eye_r.position.set(0.5, 0, 0.5);
nose.position.set(0, 0, 0.5);
ear_r.position.set(0.4, 0.6, 0.5);
ear_l.position.set(-0.4, 0.6, 0.5);
eye_ball_r.position.set(0, 0, 1);
eye_ball_l.position.set(0, 0, 1);
eye_l.add(eye_ball_l);
eye_r.add(eye_ball_r);
//cube의 자식으로
cube.add(nose);
cube.add(ear_r);
cube.add(ear_l);
cube.add(eye_r);
cube.add(eye_l);

// scene에 mesh 추가
scene.add(cube);

scene.add(area);


// 카메라의 고정된 위치 설정
camera.position.set(0, 0, 5);

// 마우스 이벤트 감지용 변수
var mouseX = 0;
var mouseY = 0;

// 마우스 이벤트 리스너 등록
document.addEventListener('mousemove', onMouseMove, false);

// raycaster와 arrowHelper 변수
var raycaster = new THREE.Raycaster();
var arrowHelper;

// 마우스 이벤트 처리 함수
function onMouseMove(event) {
  // 마우스 위치를 정규화된 장치 좌표로 변환
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycaster를 사용하여 마우스 위치에서 카메라를 향하는 광선 생성
  raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

  // arrowHelper를 업데이트하여 raycaster를 눈에 보이도록 설정
  if (!arrowHelper) {
    arrowHelper = new THREE.ArrowHelper(raycaster.ray.direction, camera.position, 10, 0xff0000);
    scene.add(arrowHelper);
  } else {
    arrowHelper.setDirection(raycaster.ray.direction);
    arrowHelper.position.copy(camera.position);
  }
}

// 애니메이션 함수
function animate() {
  requestAnimationFrame(animate);

  // 광선과의 교차(intersection)을 계산
  var intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    // 모델이 마우스를 바라보도록 회전 설정
    cube.lookAt(intersects[0].point);
  }

  // scene 렌더링
  renderer.render(scene, camera);
}

// 애니메이션 시작
animate();
