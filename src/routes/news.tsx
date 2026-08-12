import { createFileRoute } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Panel } from "@/components/slife/ui";
import { NEWS } from "@/lib/mock-data";

export const Route = createFileRoute("/news")({
  component: News,
});

function News() {
  return (
    <MobileShell tabBar>
      <TopBar title="News" back="/more" />
      <div className="px-4 py-3 pb-8 rise">
        <Panel className="overflow-hidden rounded-2xl">
          {NEWS.map((n, i) => (
            <article
              key={n.id}
              className={`px-3 py-3 ${i < NEWS.length - 1 ? "border-b border-white/6" : ""}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {n.category}
                </span>
                <span className="text-[11px] text-mute">{n.date}</span>
              </div>
              <h2 className="mt-1 text-[14px] font-semibold leading-snug">{n.title}</h2>
              <p className="mt-1 line-clamp-2 text-[12px] text-body normal-case tracking-normal font-sans">
                {n.excerpt}
              </p>
            </article>
          ))}
        </Panel>
      </div>
    </MobileShell>
  );
}
