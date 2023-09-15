const Header = ({ showInput, showAdd }) => {
  return (
    <>
      <h1 className="mylist">my list</h1>
      <div className="changebtn">
        <button onClick={showInput}>
          {showAdd ? "close tab" : "add task"}
        </button>
      </div>
    </>
  );
};

export default Header;
