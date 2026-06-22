import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { LegalBody, Pending } from "@/components/layout/LegalBody";
import { legal, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Información legal del sitio web de Visintia.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Aviso legal" />
      <Section className="pt-8 sm:pt-12">
        <LegalBody>
          <p className="text-subtle">Última actualización: {legal.lastUpdated}.</p>

          <h2>1. Información general</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
            informa de los datos del titular de este sitio web:
          </p>
          <ul>
            <li>
              <strong>Titular / responsable:</strong> {legal.responsibleName}
            </li>
            <li>
              <strong>Marca comercial:</strong> {siteConfig.name}
            </li>
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </li>
            <li>
              <strong>NIF/DNI:</strong> {legal.taxId || <Pending>NIF al alta</Pending>}
            </li>
            <li>
              <strong>Domicilio:</strong> {legal.address || <Pending>domicilio al alta</Pending>}
            </li>
            <li>
              <strong>Forma jurídica:</strong>{" "}
              {legal.companyType || <Pending>forma jurídica al alta</Pending>}
            </li>
          </ul>
          <p>
            {siteConfig.name} se encuentra en fase inicial de puesta en marcha. Los
            datos fiscales y societarios marcados como pendientes se completarán al
            formalizar el alta como autónomo o la constitución de la sociedad.
          </p>

          <h2>2. Objeto</h2>
          <p>
            El presente aviso legal regula el acceso, navegación y uso de este sitio
            web. El acceso implica la aceptación de estas condiciones. Los contenidos
            tienen carácter informativo y pueden modificarse o actualizarse sin previo
            aviso.
          </p>

          <h2>3. Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y a no
            emplearlos para actividades ilícitas o contrarias a la buena fe. El titular
            no se responsabiliza del mal uso que se realice de los contenidos del sitio.
          </p>

          <h2>4. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos (textos, diseño, código, marca, logotipos e imágenes)
            son titularidad de {legal.responsibleName} o se utilizan con autorización, y
            están protegidos por la normativa de propiedad intelectual e industrial.
            Queda prohibida su reproducción, distribución o transformación sin
            autorización expresa.
          </p>

          <h2>5. Responsabilidad</h2>
          <p>
            El titular no garantiza la inexistencia de interrupciones o errores en el
            acceso al sitio, aunque procurará evitarlos. No se hace responsable de los
            daños derivados del uso del sitio ni de los contenidos de sitios de terceros
            enlazados.
          </p>

          <h2>6. Legislación aplicable</h2>
          <p>
            Estas condiciones se rigen por la legislación española. Para cualquier
            controversia, las partes se someterán a los juzgados y tribunales que
            correspondan conforme a derecho.
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
