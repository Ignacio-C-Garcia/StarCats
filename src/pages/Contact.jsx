import styles from "../styles/Contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ButtonComponent from "../components/ButtonComponent";

function Contact() {
  return (
    <div className={styles.contact}>
      <NavBar />
      <div className={styles.contact}>
        <div className="container py-5">
          <div className="row py-5">
            <form className="col-sm-12 col-md-6" method="post" role="form">
              <h2 className="mb-3 text-center">Déjanos un mensaje</h2>
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control mt-1 rounded-pill"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control mt-1 rounded-pill"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control mt-1 rounded-pill"
                  id="subject"
                  name="subject"
                  placeholder="Asunto"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control mt-1 rounded-4"
                  id="message"
                  name="message"
                  rows="8"
                  placeholder="Escribí tu mensaje"
                ></textarea>
              </div>
              <div className="row">
                <div className="col text-end mt-2">
                  <ButtonComponent
                    type="submit"
                    className={`${styles.loginButton} rounded-pill`}
                  >
                    Enviar
                  </ButtonComponent>
                </div>
              </div>
            </form>
            <div className="col-sm-12 col-md-6 flex-column flex-md-row">
              <div className="d-flex justify-content-center align-items-center ">
                <img
                  src="logostarcats.svg"
                  className={`img-fluid ${styles.loginPic}`}
                  alt="StarCats Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
