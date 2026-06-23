function Loader() {
  return (
    <div className="loader-screen" role="status" aria-live="polite">
      <div className="loader-content">
        <div className="loader-mark">
          <img className="loader-logo" src="/assets/logo.png" alt="Logo" />
        </div>
        <p className="loader-text">Cargando...</p>
      </div>
    </div>
  );
}

export default Loader;
