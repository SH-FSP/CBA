import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button, LogoMark } from "@/components/slife/ui";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
});

const SLIDES = [
  {
    title: "Compete",
    body: "Live standings, team boards, and bowler rankings across the travel season.",
  },
  {
    title: "Connect",
    body: "Join as a bowler or team owner. Get news, events, and team alerts in one place.",
  },
  {
    title: "Create Legacy",
    body: "Track averages, results, deposits, and season records from your hub.",
  },
];

function Onboarding() {
  const [i, setI] = useState(0);
  const nav = useNavigate();
  const slide = SLIDES[i];
  const last = i === SLIDES.length - 1;

  return (
    <div className="flex min-h-screen w-full justify-center bg-black">
      <div className="relative flex min-h-screen w-full max-w-[430px] flex-col arena-wash px-5 pb-8 pt-12">
        <button
          onClick={() => nav({ to: "/login" })}
          className="absolute right-4 top-4 z-20 px-3 py-2 text-[12px] font-semibold text-mute"
        >
          Skip
        </button>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <LogoMark size={140} />
          <div className="mt-8 rise" key={slide.title}>
            <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-primary">
              Step {i + 1} of {SLIDES.length}
            </p>
            <h1 className="mt-2 font-display text-[42px] leading-none">{slide.title}</h1>
            <p className="mx-auto mt-3 max-w-[300px] text-[14px] leading-relaxed text-body normal-case tracking-normal font-sans">
              {slide.body}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-1.5">
          {SLIDES.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
        <Button full className="mt-5" onClick={() => (last ? nav({ to: "/login" }) : setI((v) => v + 1))}>
          {last ? "Get Started" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
