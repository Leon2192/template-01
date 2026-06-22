function SectionIntro({ icon: Icon, title, text }) {
  return (
    <div className="section-intro">
      <div className="section-icon-wrap">
        <Icon className="section-icon" aria-hidden="true" />
      </div>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default SectionIntro;
