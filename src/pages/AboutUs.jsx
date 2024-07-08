import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <NavBar />

      <div class={`${styles.coffeeBackground} bg-success py-5`}>
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
              <h2 className={`${styles.headerTitle}`}>Sobre este Proyecto</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container pb-3 pt-5">
        <div class="row text-center">
          <div class="col-lg-6 m-auto">
            <p className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="row">
          <div className={`${styles.skills} col-12 col-md-6 col-lg-3`}>
            <div class="h-100 py-5 shadow">
              <div class={`${styles.icon} h1 text-center`}>
                <i class="bi bi-filetype-html"></i>
              </div>
              <h2 class="h5 mt-4 text-center">HTML</h2>
            </div>
          </div>
          <div className={`${styles.skills} col-12 col-md-6 col-lg-3`}>
            <div class="h-100 py-5 shadow">
              <div class={`${styles.icon} h1 text-center`}>
                <i class="bi bi-filetype-css"></i>
              </div>
              <h2 class="h5 mt-4 text-center">CSS</h2>
            </div>
          </div>

          <div className={`${styles.skills} col-12 col-md-6 col-lg-3`}>
            <div class="h-100 py-5 shadow">
              <div class={`${styles.icon} h1 text-center`}>
                <i class="bi bi-filetype-js"></i>
              </div>
              <h2 class="h5 mt-4 text-center">JAVASCRIPT</h2>
            </div>
          </div>

          <div className={`${styles.skills} col-12 col-md-6 col-lg-3`}>
            <div class="h-100 py-5 shadow">
              <div class={`${styles.icon} h1 text-center`}>
                <i class="bi bi-git" />
              </div>
              <h2 class="h5 mt-4 text-center">GIT</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="team" class="bg-light py-5">
        <div class="container my-4">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h2 class="text-center">Nuestro Equipo</h2>
              <p>
                Nuestro equipo está compuesto por profesionales apasionados y
                dedicados que aportan una amplia gama de habilidades y
                experiencia.
              </p>

              <div class="row">
                <div class="col-md-3">
                  <div class="text-center">
                    <img
                      src="https://i.pinimg.com/564x/54/08/39/5408399b4f0e4137961ef81ee61289c9.jpg"
                      class={styles.imgFluid}
                      alt=""
                    />
                    <p>Ignacio Castellan</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i class="bi bi-linkedin"></i>
                      <i class="bi bi-github"></i>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="text-center">
                    <img
                      src="https://i.pinimg.com/originals/80/38/ef/8038ef4599953301e18d739caf1b4d18.jpg"
                      class={styles.imgFluid}
                      alt=""
                    />
                    <p>Jean Franco Pisciottano</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i class="bi bi-linkedin"></i>
                      <i class="bi bi-github"></i>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="text-center">
                    <img
                      src="https://i.pinimg.com/originals/e4/8b/2f/e48b2f53314783acf8b12fbf8ce3fa8e.jpg"
                      class={styles.imgFluid}
                      alt=""
                    />
                    <p>Abril Pereira Diaz</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i class="bi bi-linkedin"></i>
                      <i class="bi bi-github"></i>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="text-center">
                    <img
                      src="https://i.pinimg.com/originals/ff/a1/56/ffa1564f87643dcb905707ecc3aed565.jpg"
                      class={styles.imgFluid}
                      alt=""
                    />
                    <p>Agustin Acosta</p>
                    <div className="d-flex flex-row justify-content-center gap-2">
                      <i class="bi bi-linkedin"></i>
                      <i class="bi bi-github"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AboutUs;
