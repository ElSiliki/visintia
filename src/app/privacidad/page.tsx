import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { LegalBody, Pending } from "@/components/layout/LegalBody";
import { legal } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo trata Visintia tus datos personales conforme al RGPD.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Política de privacidad" />
      <Section className="pt-8 sm:pt-12">
        <LegalBody>
          <p className="text-subtle">Última actualización: {legal.lastUpdated}.</p>
          <p>
            Esta política explica cómo se tratan los datos personales que nos facilitas
            a través de este sitio web, conforme al Reglamento (UE) 2016/679 (RGPD) y la
            Ley Orgánica 3/2018 (LOPDGDD).
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li>
              <strong>Responsable:</strong> {legal.responsibleName}
            </li>
            <li>
              <strong>Contacto:</strong>{" "}
              <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </li>
            <li>
              <strong>NIF/DNI:</strong> {legal.taxId || <Pending>NIF al alta</Pending>}
            </li>
            <li>
              <strong>Domicilio:</strong> {legal.address || <Pending>domicilio al alta</Pending>}
            </li>
          </ul>

          <h2>2. Qué datos tratamos</h2>
          <p>
            Únicamente los que nos proporcionas voluntariamente a través del formulario
            de contacto o por email: nombre, correo electrónico y, opcionalmente,
            empresa y el contenido de tu mensaje. No recogemos categorías especiales de
            datos.
          </p>

          <h2>3. Finalidad</h2>
          <p>
            Tratamos tus datos para atender tu consulta o solicitud y, en su caso,
            gestionar una posible relación profesional. No se utilizan para decisiones
            automatizadas ni elaboración de perfiles.
          </p>

          <h2>4. Base jurídica</h2>
          <p>
            El consentimiento que prestas al enviarnos tus datos (art. 6.1.a RGPD) y, en
            su caso, la aplicación de medidas precontractuales a petición tuya
            (art. 6.1.b RGPD).
          </p>

          <h2>5. Conservación</h2>
          <p>
            Conservamos tus datos durante el tiempo necesario para atender tu solicitud
            y, si procede, mientras dure la relación profesional. Después se conservarán
            bloqueados durante los plazos legales aplicables y se suprimirán.
          </p>

          <h2>6. Destinatarios y encargados</h2>
          <p>
            No cedemos tus datos a terceros, salvo obligación legal. Empleamos
            proveedores que actúan como encargados del tratamiento para prestar el
            servicio:
          </p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong> — alojamiento del sitio web.
            </li>
            <li>
              <strong>Resend</strong> — envío de los emails generados por el formulario
              de contacto.
            </li>
          </ul>
          <p>
            Estos proveedores pueden tratar datos en servidores situados fuera del
            Espacio Económico Europeo; en tal caso, las transferencias se realizan con
            las garantías adecuadas previstas en el RGPD (cláusulas contractuales tipo).
          </p>

          <h2>7. Tus derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
            limitación del tratamiento y portabilidad escribiendo a{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a>. También puedes presentar
            una reclamación ante la Agencia Española de Protección de Datos
            (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
          </p>

          <h2>8. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger tus
            datos, incluyendo conexión cifrada (HTTPS) y validación de los formularios.
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
