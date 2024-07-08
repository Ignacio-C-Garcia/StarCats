import styles from "../styles/Contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import styles from "../styles/AboutUs.module.css";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h2>Contact Us</h2>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className={styles.mapId}>
        <img src="mapa.png" alt="" />
      </div>

      <div className={styles.contact}>
        <div className="container py-5">
          <div className="row py-5">
            <form className="col-8" method="post" role="form">
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
                <label for="inputmessage">Mensaje</label>
                <textarea
                  className="form-control mt-1 rounded-4"
                  id="message"
                  name="message"
                  rows="8"
                ></textarea>
              </div>
              <div className="row">
                <div className="col text-end mt-2">
                  <button type="submit" className="btn btn-success btn-lg px-3">
                    Let’s Talk
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
