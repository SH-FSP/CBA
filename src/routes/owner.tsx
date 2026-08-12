import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Button, Panel, SectionHead, TeamOrb } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import {
  CURRENT_MEMBER,
  EVENTS,
  MATCH_HISTORY,
  OWNER_STATS,
  PENDING_PLAYERS,
  TEAMS,
} from "@/lib/mock-data";

export const Route = createFileRoute("/owner")({
  component: Owner,
});

function Owner() {
  const team = TEAMS.find((t) => t.id === CURRENT_MEMBER.teamId) ?? TEAMS[0];

  return (
    <MobileShell tabBar>
      <TopBar title="Owner" back="/hub" />
      <div className="space-y-4 px-4 py-3 pb-8 rise">
        <Panel className="rounded-2xl p-3.5">
          <div className="flex items-center gap-3">
            <TeamOrb abbr={team.abbr} rank={team.rank} />
            <div className="min-w-0 flex-1">
              <p className="font-display text-[24px] leading-none">{team.name}</p>
              <p className="mt-1 text-[12px] text-mute">Owner · {CURRENT_MEMBER.shortName}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[
              { l: "Roster", v: String(OWNER_STATS.rosterCount) },
              { l: "Rank", v: `#${OWNER_STATS.teamRank}` },
              { l: "Avg", v: String(OWNER_STATS.teamAvg) },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-black/30 py-2 text-center">
                <p className="score-num text-[20px]">{s.v}</p>
                <p className="text-[9px] text-mute">{s.l}</p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid grid-cols-2 gap-2">
          <Panel className="rounded-2xl py-3 text-center">
            <p className="score-num text-[28px] text-primary">{OWNER_STATS.pendingRequests}</p>
            <p className="text-[10px] text-mute">Requests</p>
          </Panel>
          <Panel className="rounded-2xl py-3 text-center">
            <p className="score-num text-[28px] text-primary">{OWNER_STATS.upcomingMatches}</p>
            <p className="text-[10px] text-mute">Upcoming</p>
          </Panel>
        </div>

        <section>
          <SectionHead title="Pending" />
          <Panel className="overflow-hidden rounded-2xl">
            {PENDING_PLAYERS.map((p, i) => (
              <div
                key={p.name}
                className={`flex items-center gap-2 px-3 py-2.5 ${
                  i < PENDING_PLAYERS.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold">{p.name}</p>
                  <p className="text-[11px] text-mute">
                    {p.usbc} · {p.avg}
                  </p>
                </div>
                <Button className="h-8 px-3 text-[10px]">Approve</Button>
              </div>
            ))}
          </Panel>
        </section>

        <section>
          <SectionHead title="Roster" />
          <Panel className="overflow-hidden rounded-2xl">
            {team.roster.map((name, i) => (
              <div
                key={name}
                className={`flex h-11 items-center justify-between px-3 ${
                  i < team.roster.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                <p className="text-[13px] font-semibold">{name}</p>
                <span className="text-[11px] text-mute">Active</span>
              </div>
            ))}
          </Panel>
        </section>

        <section>
          <SectionHead title="Schedule" />
          <Panel className="overflow-hidden rounded-2xl">
            {EVENTS.slice(0, 3).map((e, i) => (
              <div
                key={e.id}
                className={`px-3 py-2.5 ${i < 2 ? "border-b border-white/6" : ""}`}
              >
                <p className="text-[11px] text-primary">{e.date}</p>
                <p className="text-[13px] font-semibold">{e.title}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-mute">
                  <Icon.Pin className="h-3 w-3 text-primary" /> {e.venue}
                </p>
              </div>
            ))}
          </Panel>
        </section>

        <section>
          <SectionHead title="Results" />
          <Panel className="overflow-hidden rounded-2xl">
            {MATCH_HISTORY.map((m, i) => (
              <div
                key={m.id}
                className={`flex items-center justify-between px-3 py-2.5 ${
                  i < MATCH_HISTORY.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                <div>
                  <p className="text-[13px] font-semibold">vs {m.opponent}</p>
                  <p className="text-[11px] text-mute">{m.date}</p>
                </div>
                <div className="text-right">
                  <p className="score-num text-[18px]">{m.score}</p>
                  <p className={`text-[11px] font-semibold ${m.result === "W" ? "text-success" : "text-destructive"}`}>
                    {m.result}
                  </p>
                </div>
              </div>
            ))}
          </Panel>
        </section>

        <Button full variant="ghost">
          Draft Announcement
        </Button>
      </div>
    </MobileShell>
  );
}
