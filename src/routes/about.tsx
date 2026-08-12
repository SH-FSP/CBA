import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { LinkButton, LogoMark, Panel } from "@/components/slife/ui";
import { COMPANY } from "@/lib/mock-data";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <MobileShell tabBar>
      <TopBar title="About" back="/more" />
      <div className="space-y-3 px-4 py-3 pb-8 rise">
        <Panel className="rounded-2xl p-4 text-center">
          <LogoMark size={96} className="mx-auto" />
          <h1 className="mt-3 font-display text-[28px] leading-none">The Circuit</h1>
          <p className="mt-1 text-[12px] text-mute">{COMPANY.established}</p>
          <p className="mt-3 text-left text-[13px] leading-relaxed text-body normal-case tracking-normal font-sans">
            {COMPANY.about}
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {COMPANY.stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-black/25 py-2">
                <p className="score-num text-[22px] text-primary">{s.value}</p>
                <p className="text-[9px] text-mute">{s.label}</p>
              </div>
            ))}
          </div>
          <LinkButton to="/signup" full className="mt-4">
            Join
          </LinkButton>
        </Panel>
      </div>
    </MobileShell>
  );
}
