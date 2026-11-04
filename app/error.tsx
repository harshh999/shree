"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime error caught by root boundary:", error);
  }, [error]);

  return (
    <section className="min-h-[75vh] flex items-center justify-center py-24 px-5 sm:px-8 bg-paper text-ink">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest mb-4">
          Temporary Issue
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight mb-6">
          Something went wrong{" "}
          <span className="italic font-normal text-forest font-serif block sm:inline">
            along the path.
          </span>
        </h1>
        <p className="text-ink-muted text-base leading-relaxed mb-8">
          We encountered an unexpected issue while loading this page. You can try refreshing the view or returning to the homepage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-paper font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow-sm hover:shadow"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-paper text-forest hover:bg-pale font-semibold text-sm px-6 py-3.5 rounded-full border border-borderLight transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

