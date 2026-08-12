import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Panel, SectionHead, VerifiedChip } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import {
  CURRENT_MEMBER,
  HUB_LINKS,
  MATCH_HISTORY,
  NOTIFICATIONS,
} from "@/lib/mock-data";

export const Route = createFileRoute("/hub")({
  component: Hub,
});

function Hub() {
  return (
    <MobileShell tabBar>
      <TopBar title="My Hub" />
      <div className="space-y-4 px-4 py-3 pb-8 rise">
        <Panel className="rounded-2xl p-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-[20px] text-primary-foreground">
              MV
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold">{CURRENT_MEMBER.shortName}</p>
              <p className="text-[12px] text-mute">
                {CURRENT_MEMBER.team} · {CURRENT_MEMBER.usbc}
              </p>
              <div className="mt-1">
                <VerifiedChip verified={CURRENT_MEMBER.usbcVerified} />
              </div>
            </div>
            <span className="rounded-full bg-success/15 px-2 py-1 text-[10px] font-semibold text-success">
              Live
            </span>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {[
              { l: "Rank", v: `#${CURRENT_MEMBER.rank}` },
              { l: "Avg", v: String(CURRENT_MEMBER.circuitAvg) },
              { l: "Games", v: String(CURRENT_MEMBER.games) },
              { l: "High", v: String(CURRENT_MEMBER.highGame) },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-black/30 py-2 text-center">
                <p className="score-num text-[18px]">{s.v}</p>
                <p className="text-[9px] text-mute">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between rounded-xl bg-primary/10 px-3 py-2">
            <span className="text-[11px] text-mute">Trend</span>
            <span className="flex items-center gap-1 text-[12px] font-semibold text-success">
              <Icon.TrendUp className="h-3.5 w-3.5" /> +{CURRENT_MEMBER.trend}
            </span>
          </div>
        </Panel>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to="/deposit"
            className="frost rounded-2xl py-3 text-center text-[12px] font-semibold text-primary"
          >
            Deposit
          </Link>
          <Link
            to="/owner"
            className="frost rounded-2xl py-3 text-center text-[12px] font-semibold text-primary"
          >
            Owner Tools
          </Link>
        </div>

        <section>
          <SectionHead title="Alerts" />
          <Panel className="overflow-hidden rounded-2xl">
            {NOTIFICATIONS.map((n, i) => (
              <div
                key={n.id}
                className={`px-3 py-2.5 ${i < NOTIFICATIONS.length - 1 ? "border-b border-white/6" : ""}`}
              >
                <div className="flex justify-between gap-2">
                  <p className="text-[13px] font-semibold">{n.title}</p>
                  <span className="shrink-0 text-[10px] text-mute">{n.time}</span>
                </div>
                <p className="mt-0.5 line-clamp-1 text-[12px] text-body normal-case tracking-normal font-sans">
                  {n.body}
                </p>
              </div>
            ))}
          </Panel>
        </section>

        <section>
          <SectionHead title="Recent Results" />
          <Panel className="overflow-hidden rounded-2xl">
            {MATCH_HISTORY.map((m, i) => (
              <div
                key={m.id}
                className={`flex items-center gap-3 px-3 py-2.5 ${
                  i < MATCH_HISTORY.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${
                    m.result === "W" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
                  }`}
                >
                  {m.result}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold">vs {m.opponent}</p>
                  <p className="text-[11px] text-mute">{m.date}</p>
                </div>
                <p className="score-num text-[18px]">{m.score}</p>
              </div>
            ))}
          </Panel>
        </section>

        <section>
          <SectionHead title="Menu" />
          <Panel className="overflow-hidden rounded-2xl">
            {HUB_LINKS.map((l, i) => (
              <Link
                key={l.label}
                to={l.to}
                className={`flex h-11 items-center justify-between px-3 text-[13px] ${
                  i < HUB_LINKS.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                {l.label}
                <Icon.Chevron className="h-4 w-4 text-mute" />
              </Link>
            ))}
          </Panel>
        </section>
      </div>
    </MobileShell>
  );
}
