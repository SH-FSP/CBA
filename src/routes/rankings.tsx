import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Panel, TeamOrb } from "@/components/slife/ui";
import { STANDINGS } from "@/lib/mock-data";

export const Route = createFileRoute("/rankings")({
  component: Rankings,
});

function Rankings() {
  return (
    <MobileShell tabBar>
      <TopBar title="Team Rankings" back="/standings" />
      <div className="space-y-2 px-4 py-3 pb-8 rise">
        {STANDINGS.map((t) => (
          <Panel key={t.rank} className="flex items-center gap-3 rounded-2xl px-3 py-2.5">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold ${
                t.rank <= 3 ? "bg-primary text-primary-foreground" : "bg-white/5 text-mute"
              }`}
            >
              {t.rank}
            </span>
            <TeamOrb abbr={t.abbr} rank={t.rank} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold">{t.name}</p>
              <p className="text-[11px] text-mute">Avg {t.avg}</p>
            </div>
            <span className="score-num text-[22px] text-primary">{t.points}</span>
          </Panel>
        ))}
      </div>
    </MobileShell>
  );
}
