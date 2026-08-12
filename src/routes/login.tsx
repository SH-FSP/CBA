import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button, Field, LogoMark } from "@/components/slife/ui";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const nav = useNavigate();
  return (
    <div className="flex min-h-screen w-full justify-center bg-black">
      <div className="flex min-h-screen w-full max-w-[430px] flex-col arena-wash px-5 pb-8 pt-14">
        <div className="flex flex-col items-center">
          <LogoMark size={88} />
          <h1 className="mt-3 font-display text-[32px] leading-none tracking-[0.08em]">THE CIRCUIT</h1>
          <p className="mt-1 text-[12px] text-mute">Member sign in</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            nav({ to: "/home" });
          }}
          className="mt-8 space-y-3"
        >
          <Field label="Email" type="email" placeholder="you@email.com" required />
          <Field label="Password" type="password" placeholder="••••••••" required />
          <div className="flex justify-end">
            <button type="button" className="text-[12px] font-semibold text-primary">
              Forgot password?
            </button>
          </div>
          <Button full type="submit" className="mt-2">
            Sign In
          </Button>
        </form>

        <p className="mt-auto pt-8 text-center text-[13px] text-body">
          New here?{" "}
          <Link to="/signup" className="font-semibold text-primary">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
