import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const axes = ["Web", "Marca", "Visibilidad", "Software"];

function Radar() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" role="img" aria-label="Radar digital">
      <defs>
        <radialGradient id="radar-fill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC72C" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#FFC72C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* rings */}
      {[36, 72, 108].map((r) => (
        <circle key={r} cx="120" cy="120" r={r} fill="none" stroke="rgba(255,255,255,0.10)" />
      ))}
      {/* axes */}
      <line x1="120" y1="12" x2="120" y2="228" stroke="rgba(255,255,255,0.08)" />
      <line x1="12" y1="120" x2="228" y2="120" stroke="rgba(255,255,255,0.08)" />

      {/* score polygon */}
      <polygon
        points="120,40 196,120 120,176 60,120"
        fill="url(#radar-fill)"
        stroke="#FFC72C"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />

      {/* vertices */}
      {[
        [120, 40],
        [196, 120],
        [120, 176],
        [60, 120],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#FFC72C" />
      ))}

      {/* center pulse */}
      <circle cx="120" cy="120" r="4.5" fill="#FFC72C" className="dot-live" />
    </svg>
  );
}

export function Diagnostic() {
  return (
    <Section divider>
      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="glow-accent pointer-events-none absolute -right-20 -top-20 h-80 w-80 opacity-80"
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="eyebrow flex items-center gap-2">
                <span aria-hidden className="dot-live h-1.5 w-1.5 rounded-full bg-accent" />
                Radar Digital · Gratis
              </span>
              <h2 className="text-display-sm text-wash mt-5 max-w-xl">
                Descubre qué le falta a tu presencia digital.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Analizamos tu web, tu marca, tu visibilidad online y tu operativa, y
                te decimos exactamente dónde estás perdiendo oportunidades. Sin
                compromiso, con recomendaciones accionables.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {axes.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-muted"
                  >
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contacto?motivo=radar" size="lg" icon="arrow-right">
                  Solicitar diagnóstico
                </Button>
                <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                  Gratis · Sin compromiso · Respuesta en 48h
                </span>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xs">
              <Radar />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
