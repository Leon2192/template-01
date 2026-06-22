import { ChevronDown } from 'lucide-react';

function Hero({ data, targetId }) {
  const handleScroll = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="hero"
      style={{
        backgroundImage: `url(${data.coverImage})`,
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
