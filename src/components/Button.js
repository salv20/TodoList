const Button = ({ onclick }) => {
  return (
    <div className="changebtn">
      <button onClick={onclick}>add</button>
    </div>
  );
};

export default Button;
