import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Panel } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import { BOWLERS } from "@/lib/mock-data";

export const Route = createFileRoute("/bowlers")({
  component: Bowlers,
});

function Bowlers() {
  return (
    <MobileShell tabBar>
      <TopBar title="Bowler Rankings" back="/standings" />
      <div className="space-y-2 px-4 py-3 pb-8 rise">
        {BOWLERS.map((b) => (
          <Panel key={b.rank} className="flex items-center gap-2.5 rounded-2xl px-3 py-2.5">
            <span className="score-num w-5 text-[16px] text-mute">{b.rank}</span>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
              {b.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold">{b.name}</p>
              <p className="text-[11px] text-mute">{b.team}</p>
            </div>
            <div className="text-right">
              <p className="score-num text-[20px]">{b.circuitAvg}</p>
              <p
                className={`flex items-center justify-end gap-0.5 text-[11px] font-semibold ${
                  b.trend >= 0 ? "text-success" : "text-destructive"
                }`}
              >
                {b.trend >= 0 ? (
                  <Icon.TrendUp className="h-3 w-3" />
                ) : (
                  <Icon.TrendDown className="h-3 w-3" />
                )}
                {b.trend >= 0 ? `+${b.trend}` : b.trend}
              </p>
            </div>
          </Panel>
        ))}
      </div>
    </MobileShell>
  );
}
