import SectionShell from './SectionShell';
import SectionIntro from './SectionIntro';

function MusicSection({ icon, music }) {
  return (
    <SectionShell className="section-shell--compact">
      <div className="panel panel--narrow">
        <SectionIntro icon={icon} title="Playlist del evento" text={music.title} />
        <a
          className="button button--secondary music-section__button"
          href={music.link}
          target="_blank"
          rel="noreferrer"
        >
          {music.buttonLabel}
        </a>
      </div>
    </SectionShell>
  );
}

export default MusicSection;
