import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink, cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "inline";
  showIcon?: boolean;
}

export function WhatsAppButton({
  message = "Hello Shree Ganesh Nursery & Farm, I would like to enquire about your plants and services.",
  label = "WhatsApp Us",
  className,
  variant = "primary",
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(message);

  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest/30";

  const variants = {
    primary:
      "bg-forest hover:bg-forest-dark text-paper px-6 py-3.5 text-sm md:text-base shadow-sm hover:shadow active:scale-[0.98]",
    secondary:
      "bg-paper text-forest hover:bg-pale px-6 py-3.5 text-sm md:text-base font-semibold shadow-sm hover:shadow active:scale-[0.98]",
    outline:
      "border border-forest/30 hover:border-forest text-forest hover:bg-pale/40 px-6 py-3.5 text-sm md:text-base",
    inline:
      "text-forest hover:text-forest-dark font-semibold text-sm underline-offset-4 hover:underline p-0",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, variants[variant], className)}
      aria-label={`${label} on WhatsApp`}
    >
      {showIcon && <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />}
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  );
}
