

const Button = ({ onClick, children }) => {
  return (
    <button type="submit" className="btn-component" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
