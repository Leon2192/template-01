import {
  Gift,
  MapPinned,
  Music4,
  ScanHeart,
  Shirt,
  TicketCheck,
} from 'lucide-react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventInfo from './components/EventInfo';
import DressCode from './components/DressCode';
import QRSection from './components/QRSection';
import MusicSection from './components/MusicSection';
import RSVPSection from './components/RSVPSection';
import GiftSection from './components/GiftSection';
import { invitationData } from './data/invitationData';
import './styles/app.css';

function App() {
  const {
    hero,
    event,
    dressCode,
    qr,
    music,
    rsvp,
    gift,
  } = invitationData;

  return (
    <div className="page-shell">
      <Hero data={hero} targetId="countdown" />
      <main className="page-content">
        <Countdown id="countdown" eventDate={event.date} />
        <EventInfo icon={MapPinned} event={event} />
        <DressCode icon={Shirt} dressCode={dressCode} />
        <QRSection icon={ScanHeart} qr={qr} />
        <MusicSection icon={Music4} music={music} />
        <RSVPSection icon={TicketCheck} rsvp={rsvp} />
        <GiftSection icon={Gift} gift={gift} />
      </main>
    </div>
  );
}

export default App;
