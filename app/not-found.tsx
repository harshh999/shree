import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center py-24 px-5 sm:px-8 bg-paper text-ink">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest mb-4">
          404 · Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-6">
          This corner of our garden{" "}
          <span className="italic font-normal text-forest font-serif block sm:inline">
            doesn&apos;t exist.
          </span>
        </h1>
        <p className="text-ink-muted text-base leading-relaxed mb-8">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let&apos;s guide you back to our living nursery collection.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-paper font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow-sm hover:shadow"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/plants"
            className="inline-flex items-center gap-2 bg-paper text-forest hover:bg-pale font-semibold text-sm px-6 py-3.5 rounded-full border border-borderLight transition-all"
          >
            <span>Explore Plants</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

