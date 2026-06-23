import { useEffect, useState } from 'react';
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
import Thanks from './components/Thanks';
import Loader from './components/Loader';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageSources = [
      hero.coverImage,
      '/assets/qr.jpeg',
      '/assets/gracias.webp',
      '/assets/logo.png',
    ];

    let cancelled = false;

    const preloadImage = (source) =>
      new Promise((resolve) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = resolve;
        image.src = source;
      });

    Promise.all(imageSources.map(preloadImage)).then(() => {
      window.setTimeout(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      }, 450);
    });

    return () => {
      cancelled = true;
    };
  }, [hero.coverImage]);

  if (isLoading) {
    return <Loader />;
  }

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
        <Thanks />
      </main>
    </div>
  );
}

export default App;
