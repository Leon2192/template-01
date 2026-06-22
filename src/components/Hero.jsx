import { ChevronDown } from 'lucide-react';

function Hero({ data, targetId }) {
  const handleScroll = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="hero"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(237,240,247,0.72) 72%, rgba(232,238,247,0.96) 100%), url(${data.coverImage})`,
      }}
    >
      <button
        type="button"
        className="hero__scroll"
        onClick={handleScroll}
        aria-label="Ir a la siguiente seccion"
      >
        <ChevronDown aria-hidden="true" />
      </button>
    </header>
  );
}

export default Hero;
