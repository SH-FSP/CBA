import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Panel, TeamOrb } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import { TEAMS } from "@/lib/mock-data";

export const Route = createFileRoute("/teams")({
  component: Teams,
});

function Teams() {
  return (
    <MobileShell tabBar>
      <TopBar title="Teams" back="/more" />
      <div className="space-y-2.5 px-4 py-3 pb-8 rise">
        {TEAMS.map((t) => (
          <Panel key={t.id} className="rounded-2xl p-3.5">
            <div className="flex items-center gap-3">
              <TeamOrb abbr={t.abbr} rank={t.rank} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-display text-[22px] leading-none">{t.name}</p>
                  <span className="score-num text-[20px] text-primary">#{t.rank}</span>
                </div>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-mute">
                  <Icon.Pin className="h-3 w-3 text-primary" /> {t.city}
                </p>
              </div>
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-1 border-t border-white/8 pt-2.5 text-center">
              <div>
                <p className="score-num text-[18px]">{t.avg}</p>
                <p className="text-[9px] text-mute">Avg</p>
              </div>
              <div>
                <p className="score-num text-[18px]">{t.points}</p>
                <p className="text-[9px] text-mute">Pts</p>
              </div>
              <div>
                <p className="score-num text-[18px]">{t.members}</p>
                <p className="text-[9px] text-mute">Roster</p>
              </div>
            </div>
            <p className="mt-2 line-clamp-2 text-[12px] text-body normal-case tracking-normal font-sans">
              {t.description}
            </p>
          </Panel>
        ))}
        <Link to="/rankings" className="block pt-1 text-center text-[12px] font-semibold text-primary">
          View rankings →
        </Link>
      </div>
    </MobileShell>
  );
}
