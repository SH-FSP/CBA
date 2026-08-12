import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Field, Segment, SelectField } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";
import { TEAM_OPTIONS, type AccountRole } from "@/lib/mock-data";

export const Route = createFileRoute("/signup")({
  component: SignUp,
});

function SignUp() {
  const [agreed, setAgreed] = useState(false);
  const [role, setRole] = useState<AccountRole>("bowler");
  const nav = useNavigate();

  return (
    <div className="flex min-h-screen w-full justify-center bg-black">
      <div className="flex min-h-screen w-full max-w-[430px] flex-col arena-wash">
        <header className="flex h-14 items-center gap-1 border-b border-white/8 px-2">
          <button
            type="button"
            onClick={() => nav({ to: "/login" })}
            className="rounded-full p-2"
            aria-label="Back"
          >
            <Icon.ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="font-display text-[24px] leading-none">Create Account</h1>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 pb-8">
          <Segment
            value={role}
            onChange={(id) => setRole(id as AccountRole)}
            options={[
              { id: "bowler", label: "Bowler" },
              { id: "owner", label: "Owner" },
            ]}
          />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              nav({ to: role === "owner" ? "/owner" : "/hub" });
            }}
            className="mt-4 space-y-3"
          >
            <Field
              label={role === "owner" ? "Owner name" : "Full name"}
              placeholder="Marcus Vega"
              required
            />
            <Field label="Email" type="email" placeholder="you@email.com" required />
            <Field label="Phone" type="tel" placeholder="(555) 000-0000" required />

            {role === "bowler" ? (
              <>
                <Field label="USBC #" placeholder="USBC-00000" />
                <SelectField label="Team" options={TEAM_OPTIONS} placeholder="Select team" />
              </>
            ) : (
              <>
                <Field label="Team name" placeholder="Strike Kings" required />
                <Field label="Team description" placeholder="Short bio" />
                <p className="text-[12px] text-mute normal-case tracking-normal font-sans">
                  Owner accounts need admin approval.
                </p>
              </>
            )}

            <Field label="Password" type="password" placeholder="Min. 8 characters" required />

            <label className="flex items-start gap-3 pt-1">
              <button
                type="button"
                onClick={() => setAgreed((v) => !v)}
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                  agreed ? "border-primary bg-primary" : "border-white/25"
                }`}
              >
                {agreed && <Icon.Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />}
              </button>
              <span className="text-[12px] leading-snug text-body normal-case tracking-normal font-sans">
                I agree to league terms and privacy policy.
              </span>
            </label>

            <Button full type="submit" disabled={!agreed} className="mt-2">
              {role === "owner" ? "Submit Application" : "Create Account"}
            </Button>
          </form>

          <p className="mt-5 text-center text-[13px] text-body">
            Have an account?{" "}
            <Link to="/login" className="font-semibold text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
