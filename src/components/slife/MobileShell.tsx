import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Icon } from "./icons";
import { LogoMark } from "./ui";

interface Props {
  children: ReactNode;
  tabBar?: boolean;
}

/** Native-feel phone shell with standard bottom tabs. */
export function MobileShell({ children, tabBar = false }: Props) {
  return (
    <div className="h-dvh w-full flex justify-center overflow-hidden bg-black">
      <div className="relative flex h-dvh max-h-dvh w-full max-w-[430px] flex-col overflow-hidden arena-wash">
        <div className="relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
        {tabBar && <TabBar />}
      </div>
    </div>
  );
}

const TABS = [
  { to: "/home", icon: Icon.Home, label: "Home" },
  { to: "/standings", icon: Icon.Trophy, label: "Standings" },
  { to: "/events", icon: Icon.Calendar, label: "Events" },
  { to: "/hub", icon: Icon.User, label: "Hub" },
  { to: "/more", icon: Icon.Menu, label: "More" },
] as const;

function TabBar() {
  const { pathname } = useLocation();
  return (
    <nav className="safe-bottom z-30 shrink-0 border-t border-white/10 bg-[#050912]/95 backdrop-blur-xl">
      <ul className="grid grid-cols-5 px-1 pt-1.5">
        {TABS.map((t) => {
          const active =
            pathname === t.to ||
            (t.to === "/more" &&
              ["/news", "/merch", "/rules", "/about", "/teams", "/owner", "/deposit", "/rankings", "/bowlers"].some(
                (p) => pathname.startsWith(p),
              )) ||
            (t.to !== "/home" && t.to !== "/more" && pathname.startsWith(t.to));
          const Ico = t.icon;
          return (
            <li key={t.to}>
              <Link
                to={t.to}
                className={`flex flex-col items-center gap-0.5 py-1.5 transition ${
                  active ? "text-primary" : "text-mute"
                }`}
              >
                <Ico className="h-[22px] w-[22px]" />
                <span className="text-[9px] font-semibold tracking-[0.06em]">{t.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function TopBar({
  title,
  back,
  right,
  kicker,
  overline,
}: {
  title?: string;
  back?: string | boolean;
  right?: ReactNode;
  kicker?: string;
  overline?: string;
}) {
  const eyebrow = kicker ?? overline;
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-1 border-b border-white/8 bg-[#02040a]/90 px-3 backdrop-blur-xl">
      {back ? (
        <Link
          to={(typeof back === "string" ? back : "/home") as any}
          className="rounded-full p-2 text-foreground active:bg-white/5"
          aria-label="Back"
        >
          <Icon.ArrowLeft className="h-5 w-5" />
        </Link>
      ) : (
        <LogoMark size={28} className="ml-1 mr-1" />
      )}
      <div className="min-w-0 flex-1">
        {eyebrow && <p className="kicker mb-0 text-[8px] text-primary">{eyebrow}</p>}
        {title && (
          <h1 className="truncate font-display text-[24px] leading-none tracking-[0.03em]">{title}</h1>
        )}
      </div>
      {right}
    </header>
  );
}
