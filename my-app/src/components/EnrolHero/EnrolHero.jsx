import SouthernAcademyLogo from './SouthernAcademyLogo';

const EnrolHero = ({ logoSrc, logoAlt = 'Logo', onApply }) => {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden px-6 py-16 sm:py-20"
      style={{
        background: 'linear-gradient(180deg, #FE5A1D 0%, #FE5A1D 15%, #B93A5A 45%, #4C2C7A 70%, #011F5B 100%)'
      }}
    >
      {/* Soft premium lighting: a warm glow behind the logo, a cool glow low in the frame */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #FFB088 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #4C6FE8 0%, transparent 70%)' }}
      />
      {/* Subtle vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(1,31,91,0.35)_100%)]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center">
        {/* Logo */}
        <div className="mb-10 flex h-40 w-64 items-center justify-center sm:h-48 sm:w-80">
          {logoSrc ? (
            <img src={logoSrc} alt={logoAlt} className="max-h-full max-w-full object-contain" />
          ) : (
            <SouthernAcademyLogo className="h-full w-full text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)]" />
          )}
        </div>

        <h1
          className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)] sm:text-5xl md:text-6xl"
          style={{ color: '#fff' }}
        >
          Enrol Now and Start in October
        </h1>

        <button
          onClick={onApply}
          className="mt-10 rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#011F5B] shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 active:scale-100"
        >
          Apply Today
        </button>
      </div>
    </section>
  );
};

export default EnrolHero;
