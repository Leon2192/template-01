import SectionShell from './SectionShell';

function DressCode({ icon, dressCode }) {
  const Icon = icon;

  return (
    <SectionShell className="section-shell--compact">
      <div className="panel panel--narrow">
        <div className="section-intro">
          <div className="section-icon-wrap">
            <Icon className="section-icon" aria-hidden="true" />
          </div>
          <h2>{dressCode.title}</h2>
          <p className="dress-code__primary">{dressCode.description}</p>
          <p className="dress-code__note">{dressCode.note}</p>
        </div>
      </div>
    </SectionShell>
  );
}

export default DressCode;
