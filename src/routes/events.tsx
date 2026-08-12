import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Button, Panel, StatusTag } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import { EVENTS } from "@/lib/mock-data";

export const Route = createFileRoute("/events")({
  component: Events,
});

function Events() {
  const nav = useNavigate();
  return (
    <MobileShell tabBar>
      <TopBar title="Events" />
      <div className="space-y-2.5 px-4 py-3 pb-8 rise">
        {EVENTS.map((e) => (
          <Panel key={e.id} className="rounded-2xl p-3.5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-primary">{e.date}</p>
                <h2 className="mt-0.5 font-display text-[24px] leading-none">{e.title}</h2>
                <p className="mt-1.5 flex items-center gap-1 text-[12px] text-mute normal-case tracking-normal font-sans">
                  <Icon.Pin className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="truncate">{e.venue}</span>
                </p>
              </div>
              <StatusTag status={e.status} />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-2.5">
              <span className="text-[12px] text-body">{e.deposit}</span>
              <Button className="h-9 px-4 text-[10px]" onClick={() => nav({ to: "/deposit" })}>
                Register
              </Button>
            </div>
          </Panel>
        ))}
      </div>
    </MobileShell>
  );
}
