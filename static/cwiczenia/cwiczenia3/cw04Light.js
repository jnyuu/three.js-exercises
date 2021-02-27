class Light {

    constructor(parametrA, parametrB) {

        // przykładowe, nieobowiązkowe parametry konstruktora 
        // przekazane podczas tworzenia obiektu klasy Light
        // np scena, kolor światła, wielkość bryły

        this.parametrA = parametrA
        this.parametrB = parametrB

        //dodatkowe zmienne tworzone w konstruktorze
        //widoczne w dalszych funkcjach

        this.zmienna = 0

        //pusty kontener na inne obiekty 3D

        this.container = new THREE.Object3D();
        this.light = null;
        //wywołanie funkcji init()

        this.init()
    }

    init() {

        // utworzenie i spozycjonowanie światła

        this.light = new THREE.SpotLight(0xffffff, 2, 500, Math.PI / 8);
        this.light.position.set(0, 0, 0); // ma być w pozycji 0,0,0 kontenera - nie zmieniamy 

        // dodanie światła do kontenera

        this.container.add(this.light);

        //utworzenie widzialnego elementu reprezentującego światło (mały sześcian, kula, czworościan foremny, do wyboru)

        var geometry = new THREE.SphereGeometry(50, 32, 32);
        var material = new THREE.MeshBasicMaterial({
            color: 0x6611FF,
            side: THREE.DoubleSide,
            wireframe: true,
        });
        this.sphere = new THREE.Mesh(geometry, material);

        // var light = new THREE.SpotLight(0xffff00, 10, );
        // light.position.set(100, 100, 100);
        // light.target = any_threejs_object;
        // scene.add(light);


        // dodanie go do kontenera

        this.container.add(this.sphere);
    }


    // funkcja zwracająca obiekt kontenera
    // czyli nasze światło wraz z bryłą

    getLight() {
        return this.container;
    }

    // przykład innej funkcji, np do zmiany koloru bryły, zmiany koloru światła, etc

    changeColor(color) {
        console.log("zmiana koloru na " + color)
    }

}