const Button = ({ onClick, children, type = "button" }) => {
  return (
    <button type={type} className="btn-component" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
