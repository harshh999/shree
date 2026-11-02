export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function buildWhatsAppLink(text: string): string {
  const base = "https://wa.me/916397390182";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function formatPhoneNumber(num: string): string {
  return `+91 ${num.slice(0, 5)} ${num.slice(5)}`;
}
