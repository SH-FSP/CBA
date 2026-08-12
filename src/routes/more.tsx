import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Button, LogoMark, Panel } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import { COMPANY, CURRENT_MEMBER } from "@/lib/mock-data";

export const Route = createFileRoute("/more")({
  component: More,
});

const LINKS = [
  { to: "/teams", label: "Teams", icon: Icon.Users },
  { to: "/rankings", label: "Team Rankings", icon: Icon.Trophy },
  { to: "/bowlers", label: "Bowler Rankings", icon: Icon.Star },
  { to: "/owner", label: "Owner Portal", icon: Icon.User },
  { to: "/news", label: "News", icon: Icon.News },
  { to: "/deposit", label: "Deposits", icon: Icon.CreditCard },
  { to: "/merch", label: "Merch", icon: Icon.Cart },
  { to: "/rules", label: "Rules", icon: Icon.Doc },
  { to: "/about", label: "About", icon: Icon.Star },
] as const;

function More() {
  const nav = useNavigate();
  return (
    <MobileShell tabBar>
      <TopBar title="More" />
      <div className="space-y-3 px-4 py-3 pb-8 rise">
        <Panel className="flex items-center gap-3 rounded-2xl p-3">
          <LogoMark size={48} />
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold">{CURRENT_MEMBER.shortName}</p>
            <p className="text-[12px] text-mute">{CURRENT_MEMBER.team}</p>
          </div>
          <Link to="/hub" className="text-[12px] font-semibold text-primary">
            Profile
          </Link>
        </Panel>

        <Panel className="overflow-hidden rounded-2xl">
          {LINKS.map((l, i) => {
            const Ico = l.icon;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex h-11 items-center gap-3 px-3 text-[14px] ${
                  i < LINKS.length - 1 ? "border-b border-white/6" : ""
                }`}
              >
                <Ico className="h-4 w-4 text-primary" />
                <span className="flex-1">{l.label}</span>
                <Icon.Chevron className="h-4 w-4 text-mute" />
              </Link>
            );
          })}
        </Panel>

        <Panel className="rounded-2xl px-3 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-mute">Support</p>
          <p className="mt-1 text-[13px] text-body">{COMPANY.contactEmail}</p>
          <p className="text-[13px] text-body">{COMPANY.contactPhone}</p>
        </Panel>

        <Button full variant="ghost" onClick={() => nav({ to: "/login" })}>
          Sign Out
        </Button>
      </div>
    </MobileShell>
  );
}
