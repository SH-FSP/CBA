import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Panel } from "@/components/slife/ui";

export const Route = createFileRoute("/rules")({
  component: Rules,
});

const SECTIONS = [
  {
    title: "League Structure",
    body: "Travel league with team competition and individual bowler rankings.",
  },
  {
    title: "Eligibility",
    body: "Valid USBC credentials and completed registration/deposits required.",
  },
  {
    title: "Scoring",
    body: "Standings use points, averages, streak, and pinfall.",
  },
  {
    title: "Team Owners",
    body: "Owners manage rosters and announcements. Accounts need admin approval.",
  },
  {
    title: "Conduct",
    body: "Sportsmanship and respect are required on and off the lanes.",
  },
];

function Rules() {
  return (
    <MobileShell tabBar>
      <TopBar title="Rules" back="/more" />
      <div className="px-4 py-3 pb-8 rise">
        <Panel className="overflow-hidden rounded-2xl">
          {SECTIONS.map((s, i) => (
            <div
              key={s.title}
              className={`px-3 py-3 ${i < SECTIONS.length - 1 ? "border-b border-white/6" : ""}`}
            >
              <h2 className="text-[14px] font-semibold">{s.title}</h2>
              <p className="mt-1 text-[12px] leading-relaxed text-body normal-case tracking-normal font-sans">
                {s.body}
              </p>
            </div>
          ))}
        </Panel>
      </div>
    </MobileShell>
  );
}
