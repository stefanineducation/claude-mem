import Aurora from './components/Aurora/Aurora';
import ShinyText from './components/ShinyText/ShinyText';
import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import CountUp from './components/CountUp/CountUp';
import { Plasma } from './components/Plasma/Plasma';
import GlitchText from './components/GlitchText/GlitchText';
import GooeyNav from './components/GooeyNav/GooeyNav';
import LogoLoop from './components/LogoLoop/LogoLoop';
import ClickSpark from './components/ClickSpark/ClickSpark';
import StarBorder from './components/StarBorder/StarBorder';

const NAV_ITEMS = [
  { label: 'Product', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Contact', href: '#' }
];

const LOGOS = ['Vercel', 'Linear', 'Stripe', 'Notion', 'Figma'].map(name => ({
  node: <span className="text-xl font-semibold text-neutral-400">{name}</span>,
  title: name
}));

const FEATURES = [
  { title: 'Ship faster', body: 'Reusable, animated building blocks so you spend time on your product, not on motion polish.' },
  { title: 'Convert more', body: 'Micro-interactions that draw the eye to your call to action without slowing the page down.' },
  { title: 'Stand out', body: 'A WebGL aurora hero and shine effects that plain CSS templates can’t match.' }
];

const STATS = [
  { to: 10000, suffix: '+', label: 'Happy customers' },
  { to: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
  { to: 4, suffix: 'x', label: 'Faster launches' }
];

function App() {
  return (
    <ClickSpark sparkColor="#fff" sparkCount={8} sparkRadius={20}>
      <div className="min-h-screen bg-neutral-950 text-white">
        <header className="flex items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">Acme</span>
          <div className="h-12">
            <GooeyNav items={NAV_ITEMS} />
          </div>
        </header>

        <section className="relative h-[520px] w-full overflow-hidden">
          <Aurora colorStops={['#5227FF', '#7cff67', '#5227FF']} amplitude={1.0} blend={0.5} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Launch your product with a{' '}
              <ShinyText text="little more shine" speed={3} className="text-4xl md:text-6xl font-semibold" />
            </h1>
            <p className="mt-4 max-w-xl text-neutral-300">
              A Vite + React starter wired up with Tailwind CSS and React Bits components, ready for a marketing site.
            </p>
            <StarBorder as="button" className="mt-8" color="#7cff67" speed="4s">
              Get started
            </StarBorder>
          </div>
        </section>

        <section className="relative h-[420px] w-full overflow-hidden bg-[#0a0a12]">
          <Plasma color="#ff2fd8" speed={0.6} direction="forward" scale={1.1} opacity={0.6} mouseInteractive={false} />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
            <GlitchText speed={0.6} enableShadows>
              NEW DROP
            </GlitchText>
            <p className="max-w-md text-neutral-300">
              Free-tier alternatives to the Pro "Neon Reveal" and "Spectral Clouds" effects — a plasma field behind a glitching headline.
            </p>
          </div>
        </section>

        <section className="border-y border-neutral-800 py-10">
          <p className="mb-6 text-center text-sm uppercase tracking-widest text-neutral-500">
            Trusted by teams at
          </p>
          <LogoLoop logos={LOGOS} speed={60} gap={64} fadeOut fadeOutColor="#0a0a0a" />
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map(feature => (
              <SpotlightCard key={feature.title} className="text-left">
                <h2 className="text-xl font-semibold">{feature.title}</h2>
                <p className="mt-2 text-neutral-400">{feature.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-800 py-16">
          <div className="mx-auto flex max-w-4xl flex-wrap justify-around gap-10 text-center">
            {STATS.map(stat => (
              <div key={stat.label}>
                <div className="text-4xl font-bold">
                  <CountUp to={stat.to} duration={2} separator="," />
                  {stat.suffix}
                </div>
                <div className="mt-2 text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ClickSpark>
  );
}

export default App;
