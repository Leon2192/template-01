import SectionShell from './SectionShell';

function Thanks() {
  return (
    <SectionShell className="section-shell--compact">
      <div className="panel panel--narrow thanks-panel">
        <img
          className="thanks-image"
          src="/assets/gracias.webp"
          alt="Gracias"
          loading="lazy"
        />
      </div>
    </SectionShell>
  );
}

export default Thanks;
