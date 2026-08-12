import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Button, LogoMark, Panel } from "@/components/slife/ui";
import { MERCH } from "@/lib/mock-data";

export const Route = createFileRoute("/merch")({
  component: Merch,
});

function Merch() {
  return (
    <MobileShell tabBar>
      <TopBar title="Merch" back="/more" />
      <div className="px-4 py-3 pb-8 rise">
        <div className="grid grid-cols-2 gap-2.5">
          {MERCH.map((m) => (
            <Panel key={m.id} className="overflow-hidden rounded-2xl">
              <div className="relative flex h-24 items-center justify-center border-b border-white/8 bg-primary/10">
                {m.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-semibold text-primary-foreground">
                    {m.badge}
                  </span>
                )}
                <LogoMark size={44} />
              </div>
              <div className="p-2.5">
                <p className="line-clamp-2 text-[12px] font-semibold leading-snug">{m.name}</p>
                <p className="score-num mt-1 text-[20px] text-primary">{m.price}</p>
                <Button className="mt-2 h-8 w-full px-2 text-[10px]">Add</Button>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </MobileShell>
  );
}
