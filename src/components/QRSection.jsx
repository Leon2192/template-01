import SectionShell from './SectionShell';
import SectionIntro from './SectionIntro';

function QRSection({ icon, qr }) {
  return (
    <SectionShell className="section-shell--compact">
      <div className="panel panel--narrow qr-panel">
        <SectionIntro icon={icon} title={qr.title} />
        <img className="qr-image" src={qr.image} alt="Codigo QR del evento" />
        <p className="section-helper">{qr.helperText}</p>
        <a
          className="button button--primary"
          href={qr.actionLink}
          target="_blank"
          rel="noreferrer"
        >
          {qr.buttonLabel}
        </a>
      </div>
    </SectionShell>
  );
}

export default QRSection;
