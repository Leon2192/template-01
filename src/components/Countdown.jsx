import { useEffect, useState } from 'react';
import SectionShell from './SectionShell';
import AnimatedCounter from './AnimatedCounter';

function getCountdownParts(eventDate) {
  const target = new Date(eventDate);
  const difference = Math.max(target.getTime() - Date.now(), 0);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, difference };
}

function Countdown({ id, eventDate }) {
  const [parts, setParts] = useState(() => getCountdownParts(eventDate));

  useEffect(() => {
    let timeoutId;

    const updateCountdown = () => {
      setParts(getCountdownParts(eventDate));
      const millisecondsUntilNextSecond = 1000 - (Date.now() % 1000);
      timeoutId = window.setTimeout(updateCountdown, millisecondsUntilNextSecond);
    };

    updateCountdown();

    return () => window.clearTimeout(timeoutId);
  }, [eventDate]);

  return (
    <SectionShell id={id} className="section-shell--compact">
      <div className="panel countdown-panel">
        <span className="panel-tag">Falta...</span>
        <div className="countdown-grid" aria-label="Cuenta regresiva al evento">
          <AnimatedCounter value={parts.days} label="Dias" />
          <AnimatedCounter value={parts.hours} label="Horas" />
          <AnimatedCounter value={parts.minutes} label="Minutos" />
          <AnimatedCounter value={parts.seconds} label="Segundos" />
        </div>
      </div>
    </SectionShell>
  );
}

export default Countdown;
