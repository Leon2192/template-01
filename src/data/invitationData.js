const qrAlbumLink =
  'https://photos.google.com/u/0/album/AF1QipP9oi4d2EzRIqF3EkvdEGZnWahBuDrZt4-R96Vy';

export const invitationData = {
  hero: {
    eyebrow: 'Invitacion demo',
    title: 'Valentina & Mateo',
    subtitle: 'Nos encantaria compartir una noche inolvidable con vos.',
    dateLabel: 'Viernes 17 de julio de 2026',
    coverImage: '/assets/portada.webp',
  },
  event: {
    date: '2026-07-17T21:00:00-03:00',
    venue: 'Taos Eventos',
    address: 'km105, RN7',
    city: 'Buenos Aires',
    details: 'Te espero en Taos Eventos para celebrar una noche muy especial.',
    mapEmbed:
      'https://www.google.com/maps?q=-34.4572658,-59.4727502&z=17&output=embed',
    mapLink:
      'https://www.google.com/maps/place/Taos+Eventos/@-34.4572613,-59.4753305,17z/data=!3m1!4b1!4m6!3m5!1s0x95bbf333306ce9b7:0xeb6f02ce2a0ca505!8m2!3d-34.4572658!4d-59.4727502!16s%2Fg%2F11g6jvv1ml?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  dressCode: {
    title: 'Dress Code',
    description: 'Elegante',
    note: 'Evitar rojo, azul y celeste',
  },
  qr: {
    title: 'Escaneá este QR',
    subtitle: 'Y comparti conmigo las fotos de mi fiesta',
    helperText: 'O presioná este botón',
    buttonLabel: 'Ir al album',
    actionLink: qrAlbumLink,
  },
  music: {
    title: 'Que canciones no pueden faltar?',
    subtitle: 'Ayudame a armar la playlist de la fiesta!',
    buttonLabel: 'Sugerir canción',
    link: 'https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F0xAwRRDCYaup6vHk4b4fq7%3Fsi%3DrSshb1IhRH-fqj16YohTAw%26pi%3DAH6zN5J3SuiLb%26pt%3Dc3bd44d5ec28854878df611a68938e67',
  },
  rsvp: {
    title:
      'Me gustaría que confirmes tu asistencia. Podés hacerlo haciendo clic en este boton.',
    buttonLabel: 'Confirmar asistencia',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfSZksyxu3m_kYGh5OA9Th8-laeahiue6UKM73lFjZVjdHqwQ/viewform?pli=1',
  },
  gift: {
    title: 'Tu presencia es mi mejor regalo. Pero si quewres hacerme un obsequio...',
    buttonLabel: 'Ver datos bancarios',
    bank: {
      alias: 'pablomaccor1975',
    },
  },
};
