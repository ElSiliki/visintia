import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { footerNav, siteConfig } from "@/lib/site";

const socials: { name: string; href: string; icon: IconName }[] = [
  { name: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: "linkedin" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border">
      {/* faint amber glow anchored bottom-left */}
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute -bottom-40 left-0 h-80 w-80 opacity-60"
      />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Visintia — inicio" className="text-foreground">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-col gap-1.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-fit text-sm text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.phoneHref}
                className="w-fit text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-4">
              <span className="eyebrow">{col.title}</span>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Síguenos</span>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/aviso-legal" className="text-xs text-subtle transition-colors hover:text-muted">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="text-xs text-subtle transition-colors hover:text-muted">
              Privacidad
            </Link>
            <Link href="/cookies" className="text-xs text-subtle transition-colors hover:text-muted">
              Cookies
            </Link>
            <span className="flex items-center gap-2 text-xs text-subtle">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {siteConfig.location}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
