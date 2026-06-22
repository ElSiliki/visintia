import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { LegalBody } from "@/components/layout/LegalBody";
import { legal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies en el sitio web de Visintia.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Política de cookies" />
      <Section className="pt-8 sm:pt-12">
        <LegalBody>
          <p className="text-subtle">Última actualización: {legal.lastUpdated}.</p>

          <h2>1. Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo
            para recordar información sobre tu visita.
          </p>

          <h2>2. Cookies que utiliza este sitio</h2>
          <p>
            Este sitio <strong>no utiliza cookies de seguimiento, publicidad ni perfilado</strong>.
          </p>
          <ul>
            <li>
              <strong>Cookies técnicas / necesarias:</strong> las imprescindibles para
              el funcionamiento del sitio. Están exentas de consentimiento.
            </li>
            <li>
              <strong>Analítica:</strong> usamos Vercel Web Analytics, que mide las
              visitas de forma agregada y anónima <strong>sin emplear cookies</strong> ni
              identificar personalmente a los usuarios.
            </li>
          </ul>
          <p>
            Por este motivo, el sitio no muestra un banner de consentimiento de cookies:
            no se instalan cookies que lo requieran.
          </p>

          <h2>3. Cómo gestionar las cookies</h2>
          <p>
            Puedes configurar o eliminar las cookies almacenadas desde los ajustes de tu
            navegador (Chrome, Firefox, Safari, Edge…). Deshabilitar las cookies técnicas
            podría afectar al funcionamiento del sitio.
          </p>

          <h2>4. Cambios</h2>
          <p>
            Si en el futuro incorporamos cookies que requieran consentimiento (por
            ejemplo, herramientas de marketing), actualizaremos esta política y
            habilitaremos el mecanismo de consentimiento correspondiente.
          </p>

          <p className="text-subtle">
            Documento orientativo. Se recomienda una revisión legal final antes de
            operar comercialmente.
          </p>
        </LegalBody>
      </Section>
    </>
  );
}
