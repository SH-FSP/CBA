import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Panel, TeamOrb } from "@/components/slife/ui";
import { COMPANY, STANDINGS } from "@/lib/mock-data";

export const Route = createFileRoute("/standings")({
  component: Standings,
});

function Standings() {
  return (
    <MobileShell tabBar>
      <TopBar title="Standings" />
      <div className="px-4 py-3 pb-8 rise">
        <div className="mb-3 flex gap-2 overflow-x-auto">
          {[
            { to: "/standings", label: "Table", active: true },
            { to: "/rankings", label: "Teams" },
            { to: "/bowlers", label: "Bowlers" },
            { to: "/teams", label: "Directory" },
          ].map((l) => (
            <Link
              key={l.to + l.label}
              to={l.to}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${
                l.active
                  ? "bg-primary text-primary-foreground"
                  : "frost text-body"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <p className="mb-2 text-[12px] text-mute">{COMPANY.seasonLabel} · Live</p>

        <Panel className="overflow-hidden rounded-2xl">
          <div className="grid grid-cols-[28px_1fr_48px_44px] gap-2 border-b border-white/8 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-mute">
            <span>#</span>
            <span>Team</span>
            <span className="text-right">Avg</span>
            <span className="text-right">Pts</span>
          </div>
          {STANDINGS.map((t, i) => (
            <div
              key={t.rank}
              className={`grid grid-cols-[28px_1fr_48px_44px] items-center gap-2 px-3 py-2.5 ${
                i < STANDINGS.length - 1 ? "border-b border-white/6" : ""
              } ${i === 0 ? "bg-primary/8" : ""}`}
            >
              <span className="score-num text-[18px] text-mute">{t.rank}</span>
              <div className="flex min-w-0 items-center gap-2">
                <TeamOrb abbr={t.abbr} rank={t.rank} />
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold">{t.name}</p>
                  <p className="text-[10px] text-mute">{t.streak}</p>
                </div>
              </div>
              <span className="text-right text-[12px] text-body">{t.avg}</span>
              <span className="score-num text-right text-[20px] text-primary">{t.points}</span>
            </div>
          ))}
        </Panel>
      </div>
    </MobileShell>
  );
}
