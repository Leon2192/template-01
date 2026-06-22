import { CalendarDays, MapPin } from 'lucide-react';
import SectionShell from './SectionShell';
import SectionIntro from './SectionIntro';

function EventInfo({ icon, event }) {
  return (
    <SectionShell>
      <div className="panel panel--wide">
        <SectionIntro
          icon={icon}
          title="Informacion del evento"
          text={event.details}
        />

        <div className="event-info-grid">
          <article className="info-card">
            <div className="info-card__row">
              <CalendarDays aria-hidden="true" />
              <div>
                <h3>{event.venue}</h3>
                <p>{new Date(event.date).toLocaleString('es-AR', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                  timeZone: 'America/Argentina/Buenos_Aires',
                })}</p>
              </div>
            </div>
            <div className="info-card__row">
              <MapPin aria-hidden="true" />
              <div>
                <h3>{event.address}</h3>
                <p>{event.city}</p>
              </div>
            </div>
            <a
              className="button button--primary"
              href={event.mapLink}
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>
          </article>

          <div className="map-frame-wrap">
            <iframe
              title="Mapa del evento"
              src={event.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default EventInfo;
