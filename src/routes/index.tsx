import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LogoMark } from "@/components/slife/ui";
import { COMPANY } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/onboarding" }), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="flex min-h-screen w-full justify-center bg-black">
      <div className="relative flex min-h-screen w-full max-w-[430px] flex-col items-center justify-center arena-wash px-8">
        <h1 className="sr-only">{COMPANY.name}</h1>
        <LogoMark size={160} className="bloom" />
        <p className="mt-5 font-display text-[28px] tracking-[0.12em]">THE CIRCUIT</p>
        <p className="mt-2 text-[11px] tracking-[0.2em] text-mute uppercase">{COMPANY.established}</p>
        <div className="absolute bottom-16 left-10 right-10 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 sweep" />
        </div>
      </div>
    </div>
  );
}
