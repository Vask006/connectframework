import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <div>
          <p className="footerBrand">CONNECT Framework</p>
          <p className="footerTagline">
            AI-Augmented Enterprise Governance and Platform Alignment
          </p>
        </div>
        <nav className="footerLinks" aria-label="Footer navigation">
          <Link href="/architecture">Architecture</Link>
          <Link href="/modules">Modules</Link>
          <Link href="/demo">Demo</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/docs">Docs</Link>
        </nav>
        <p className="footerCopyright">© 2026 CONNECT Framework · Portfolio evidence repository</p>
      </div>
    </footer>
  );
}
