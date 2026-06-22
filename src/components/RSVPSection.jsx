import SectionShell from './SectionShell';
import SectionIntro from './SectionIntro';

function RSVPSection({ icon, rsvp }) {
  return (
    <SectionShell className="section-shell--compact">
      <div className="panel panel--narrow">
        <SectionIntro icon={icon} title="Confirmacion de asistencia" text={rsvp.title} />
        <a
          className="button button--primary rsvp-section__button"
          href={rsvp.link}
          target="_blank"
          rel="noreferrer"
        >
          {rsvp.buttonLabel}
        </a>
      </div>
    </SectionShell>
  );
}

export default RSVPSection;
