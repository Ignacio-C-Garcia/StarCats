import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <>
      <div className={`container-fluid   ${styles.container}`}>
        <div className="row">
          <div className={`col-lg-6 col-md-12  ${styles.content}`}>
            <h3 className={` animate__animated animate__backInUp ${styles.notFoundText}`}>Error 404</h3>

            <Link to="/" className={styles.btnHome}>
              Volver al inicio
            </Link>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src="spilledCoffee.png"
              alt="Not Found"
              className={` animate__animated animate__backInUp ${styles.spilledCoffee}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
