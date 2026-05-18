import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p>The requested page is not part of the current CONNECT Framework site map.</p>
      <div className="ctaGroup">
        <Link className="btn btnPrimary" href="/">
          Return Home
        </Link>
        <Link className="btn" href="/docs">
          View Documentation
        </Link>
      </div>
    </section>
  );
}
