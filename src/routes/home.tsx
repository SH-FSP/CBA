import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell } from "@/components/slife/MobileShell";
import { LogoMark, Panel, SectionHead, StatusTag, TeamOrb } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import {
  COMPANY,
  CURRENT_MEMBER,
  EVENTS,
  NEWS,
  NOTIFICATIONS,
  STANDINGS,
} from "@/lib/mock-data";

export const Route = createFileRoute("/home")({
  component: Home,
});

const ACTIONS = [
  { to: "/standings", label: "Board", icon: Icon.Trophy },
  { to: "/events", label: "Events", icon: Icon.Calendar },
  { to: "/teams", label: "Teams", icon: Icon.Users },
  { to: "/hub", label: "Hub", icon: Icon.User },
  { to: "/bowlers", label: "Ranks", icon: Icon.Star },
  { to: "/deposit", label: "Pay", icon: Icon.CreditCard },
  { to: "/news", label: "News", icon: Icon.News },
  { to: "/owner", label: "Owner", icon: Icon.Doc },
] as const;

function Home() {
  const nextEvent = EVENTS[0];

  return (
    <MobileShell tabBar>
      <header className="sticky top-0 z-20 flex h-14 items-center gap-2.5 border-b border-white/8 bg-[#02040a]/90 px-3 backdrop-blur-xl">
        <LogoMark size={32} />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] text-mute normal-case tracking-normal font-sans">Hi,</p>
          <p className="truncate font-display text-[22px] leading-none">
            {CURRENT_MEMBER.shortName.split(" ")[0]}
          </p>
        </div>
        <Link
          to="/hub"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 font-display text-[14px] text-primary"
        >
          MV
        </Link>
      </header>

      <div className="space-y-4 px-3 py-3 pb-8 rise">
        <Panel className="flex items-center gap-2.5 rounded-2xl p-3">
          <LogoMark size={44} />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              {COMPANY.seasonLabel}
            </p>
            <p className="font-display text-[20px] leading-none">The Circuit</p>
          </div>
          <Link
            to="/signup"
            className="rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground"
          >
            Join
          </Link>
        </Panel>

        <div className="grid grid-cols-4 gap-1.5">
          {ACTIONS.map((a) => {
            const Ico = a.icon;
            return (
              <Link
                key={a.to}
                to={a.to}
                className="frost flex flex-col items-center gap-1.5 rounded-2xl py-2.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Ico className="h-4 w-4" />
                </span>
                <span className="text-[10px] font-medium text-body">{a.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {COMPANY.stats.map((s) => (
            <div key={s.label} className="frost rounded-2xl py-2.5 text-center">
              <p className="score-num text-[22px] text-primary">{s.value}</p>
              <p className="text-[9px] text-mute">{s.label}</p>
            </div>
          ))}
        </div>

        <section>
          <SectionHead
            title="Next Up"
            action={
              <Link to="/events" className="text-[12px] font-semibold text-primary">
                See all
              </Link>
            }
          />
          <Panel className="rounded-2xl p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-primary">{nextEvent.date}</p>
                <h3 className="mt-0.5 font-display text-[22px] leading-none">{nextEvent.title}</h3>
                <p className="mt-1.5 flex items-center gap-1 text-[11px] text-mute">
                  <Icon.Pin className="h-3 w-3 shrink-0 text-primary" />
                  <span className="truncate">{nextEvent.venue}</span>
                </p>
              </div>
              <StatusTag status={nextEvent.status} />
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-white/8 pt-2.5">
              <span className="text-[12px] text-body">{nextEvent.deposit}</span>
              <Link
                to="/deposit"
                className="rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground"
              >
                Register
              </Link>
            </div>
          </Panel>
        </section>

        <section>
          <SectionHead title="Alerts" />
          <Panel className="overflow-hidden rounded-2xl">
            {NOTIFICATIONS.slice(0, 2).map((n, i) => (
              <div
                key={n.id}
                className={`px-3 py-2.5 ${i === 0 ? "border-b border-white/6" : ""}`}
              >
                <div className="flex justify-between gap-2">
                  <p className="text-[13px] font-semibold">{n.title}</p>
                  <span className="text-[10px] text-mute">{n.time}</span>
                </div>
                <p className="mt-0.5 line-clamp-1 text-[12px] text-body normal-case tracking-normal font-sans">
                  {n.body}
                </p>
              </div>
            ))}
          </Panel>
        </section>

        <section>
          <SectionHead
            title="Standings"
            action={
              <Link to="/standings" className="text-[12px] font-semibold text-primary">
                Full
              </Link>
            }
          />
          <Panel className="overflow-hidden rounded-2xl">
            {STANDINGS.slice(0, 3).map((t, i) => (
              <div
                key={t.rank}
                className={`flex items-center gap-2.5 px-3 py-2.5 ${
                  i < 2 ? "border-b border-white/6" : ""
                } ${i === 0 ? "bg-primary/8" : ""}`}
              >
                <span className="score-num w-4 text-[16px] text-mute">{t.rank}</span>
                <TeamOrb abbr={t.abbr} rank={t.rank} />
                <p className="min-w-0 flex-1 truncate text-[13px] font-semibold">{t.name}</p>
                <span className="score-num text-[20px] text-primary">{t.points}</span>
              </div>
            ))}
          </Panel>
        </section>

        <section>
          <SectionHead
            title="News"
            action={
              <Link to="/news" className="text-[12px] font-semibold text-primary">
                All
              </Link>
            }
          />
          <Panel className="overflow-hidden rounded-2xl">
            {NEWS.slice(0, 3).map((n, i) => (
              <Link
                key={n.id}
                to="/news"
                className={`block px-3 py-2.5 ${i < 2 ? "border-b border-white/6" : ""}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {n.category}
                </p>
                <p className="mt-0.5 line-clamp-1 text-[13px] font-semibold">{n.title}</p>
              </Link>
            ))}
          </Panel>
        </section>
      </div>
    </MobileShell>
  );
}
