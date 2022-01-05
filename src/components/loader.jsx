function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="spinner-border d-flex justify-content-center"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
