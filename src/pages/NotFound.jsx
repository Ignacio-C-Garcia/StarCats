import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.notFoundText}>Error 404</h3>
          <button className={styles.btnHome}>Volver al inicio</button>
        </div>
        <img
          src="spilledCoffee.png"
          alt="Not Found"
          className={styles.spilledCoffee}
        />
      </div>
    </>
  );
}

export default NotFound;
