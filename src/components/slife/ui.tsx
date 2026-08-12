import { Link } from "@tanstack/react-router";
import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import logo from "@/assets/circuit/logo.png";

export function LogoMark({
  size = 72,
  className = "",
  ring = false,
}: {
  size?: number;
  className?: string;
  ring?: boolean;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${ring ? "emblem-ring rounded-full p-1.5" : ""} ${className}`}
      style={{ width: ring ? size + 12 : size, height: ring ? size + 12 : undefined }}
      aria-label="The Circuit Bowling Association"
    >
      <img
        src={logo}
        alt="The Circuit Bowling Association"
        width={size}
        height={size}
        className="block h-auto w-full object-contain"
        style={{ maxWidth: size }}
      />
    </div>
  );
}

type ButtonVariant = "signal" | "steel" | "ghost" | "danger";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  full?: boolean;
  children: ReactNode;
}

const btnBase =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed";

const btnVariants: Record<ButtonVariant, string> = {
  signal:
    "bg-[linear-gradient(120deg,#5ef0ff_0%,#1bb0ff_55%,#0a7fd4_100%)] text-primary-foreground shadow-[0_10px_30px_rgba(27,176,255,0.35)] hover:brightness-110",
  steel:
    "bg-[linear-gradient(180deg,#eef3fb,#9eacc4)] text-[#06101f] hover:brightness-105",
  ghost:
    "bg-transparent text-foreground border border-white/15 hover:border-primary/60 hover:text-primary",
  danger: "bg-transparent text-destructive border border-destructive/40 hover:bg-destructive/10",
};

export function Button({ variant = "signal", full, className = "", children, ...rest }: BtnProps) {
  return (
    <button className={`${btnBase} ${btnVariants[variant]} ${full ? "w-full" : ""} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "signal",
  full,
  to,
  children,
  className = "",
}: {
  variant?: ButtonVariant;
  full?: boolean;
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to as any} className={`${btnBase} ${btnVariants[variant]} ${full ? "w-full" : ""} ${className}`}>
      {children}
    </Link>
  );
}

export function Segment({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="frost flex gap-1 rounded-full p-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          className={`flex-1 h-10 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase transition ${
            value === o.id
              ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(27,176,255,0.35)]"
              : "text-mute hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export function Field({ label, className = "", ...rest }: FieldProps) {
  return (
    <label className="block space-y-2">
      {label && <span className="kicker text-[10px] text-mute">{label}</span>}
      <input
        {...rest}
        className={`w-full h-12 rounded-2xl bg-black/35 border border-white/10 px-4 text-[15px] text-foreground placeholder:text-mute outline-none focus:border-primary/70 focus:shadow-[0_0_0_4px_rgba(27,176,255,0.12)] transition ${className}`}
      />
    </label>
  );
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  placeholder?: string;
}
export function SelectField({
  label,
  options,
  placeholder = "Select…",
  className = "",
  ...rest
}: SelectFieldProps) {
  return (
    <label className="block space-y-2">
      {label && <span className="kicker text-[10px] text-mute">{label}</span>}
      <select
        {...rest}
        className={`w-full h-12 rounded-2xl bg-black/35 border border-white/10 px-4 text-[15px] text-foreground outline-none focus:border-primary/70 focus:shadow-[0_0_0_4px_rgba(27,176,255,0.12)] transition ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`kicker ${className}`}>{children}</p>;
}

export function SectionHead({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-2 flex items-center justify-between gap-3">
      <h2 className="font-display text-[20px] leading-none tracking-[0.03em]">{title}</h2>
      {action}
    </div>
  );
}

export function StatusTag({ status }: { status: string }) {
  const map: Record<string, string> = {
    "Registration Open": "text-primary bg-primary/10 border-primary/30",
    "Filling Fast": "text-amber-200 bg-amber-400/10 border-amber-300/30",
    "Invite Only": "text-chrome bg-white/5 border-white/15",
    RSVP: "text-success bg-success/10 border-success/30",
  };
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase ${map[status] ?? "border-white/10 text-body"}`}
    >
      {status}
    </span>
  );
}

export function TeamOrb({ abbr, rank }: { abbr: string; rank?: number }) {
  const hot = rank != null && rank <= 3;
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[12px] font-bold tracking-wider border shrink-0 ${
        hot
          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_18px_rgba(27,176,255,0.4)]"
          : "border-white/15 bg-white/5 text-primary"
      }`}
    >
      {abbr}
    </span>
  );
}

export function VerifiedChip({ verified }: { verified: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase border ${
        verified ? "text-success border-success/35 bg-success/10" : "text-mute border-white/15"
      }`}
    >
      {verified ? "USBC Verified" : "Unverified"}
    </span>
  );
}

export function EstPlaque({ label = "EST. 2027" }: { label?: string }) {
  return (
    <div className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5">
      <span className="font-display text-[14px] tracking-[0.24em] text-cyan">{label}</span>
    </div>
  );
}

/** Soft frosted content block — interaction / content container */
export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`frost rounded-3xl ${className}`}>{children}</div>;
}

export function Divider({ label }: { label?: string }) {
  if (!label) return <div className="h-px w-full bg-white/10" />;
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <span className="kicker text-[10px] text-mute">{label}</span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}

/* Back-compat aliases so any leftover imports don't break mid-migration */
export const LogoSlot = LogoMark;
export const Overline = Kicker;
export const Card = Panel;
export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <SectionHead title={String(children)} />
);
export const StatusPill = StatusTag;
export const TeamBadge = TeamOrb;
export const Chip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`h-9 rounded-full px-4 text-[11px] font-semibold tracking-[0.14em] uppercase border transition ${
      active
        ? "bg-primary text-primary-foreground border-primary"
        : "border-white/15 text-body hover:border-primary/50"
    }`}
  >
    {label}
  </button>
);
export const VerifiedBadge = VerifiedChip;
