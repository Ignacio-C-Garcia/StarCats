

const Button = ({ onClick, children }) => {
  return (
    <button type="button" className="btn-component" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
