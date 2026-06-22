import SectionShell from './SectionShell';
import SectionIntro from './SectionIntro';
import GiftModal from './GiftModal';

function GiftSection({ icon, gift }) {
  return (
    <SectionShell className="section-shell--compact">
      <div className="panel panel--narrow">
        <SectionIntro icon={icon} title="Regalo" text={gift.title} />
        <GiftModal bank={gift.bank} buttonLabel={gift.buttonLabel} />
      </div>
    </SectionShell>
  );
}

export default GiftSection;
