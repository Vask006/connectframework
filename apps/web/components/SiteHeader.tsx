import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="brand">CONNECT Framework</div>
        <nav className="navLinks" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/roadmap">Roadmap</Link>
          <a href="https://github.com/Vask006/connectframework" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
