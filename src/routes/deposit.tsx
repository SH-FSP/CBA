import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MobileShell, TopBar } from "@/components/slife/MobileShell";
import { Button, Field, Panel } from "@/components/slife/ui";
import { Icon } from "@/components/slife/icons";

export const Route = createFileRoute("/deposit")({
  component: Deposit,
});

function Deposit() {
  const nav = useNavigate();
  const [amount, setAmount] = useState("150");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <MobileShell tabBar>
        <TopBar title="Payment" back="/hub" />
        <div className="flex flex-col items-center px-6 py-16 text-center rise">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
            <Icon.Check className="h-7 w-7 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <h1 className="mt-4 font-display text-[28px] leading-none">Payment Sent</h1>
          <p className="mt-2 text-[13px] text-body normal-case tracking-normal font-sans">
            ${amount} deposit confirmed.
          </p>
          <Button full className="mt-8" onClick={() => nav({ to: "/hub" })}>
            Done
          </Button>
        </div>
      </MobileShell>
    );
  }

  return (
    <MobileShell tabBar>
      <TopBar title="Deposit" back="/more" />
      <div className="space-y-3 px-4 py-3 pb-8 rise">
        <div className="grid grid-cols-3 gap-2">
          {["100", "150", "200"].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setAmount(v)}
              className={`rounded-2xl py-3 text-center text-[14px] font-semibold ${
                amount === v ? "bg-primary text-primary-foreground" : "frost text-body"
              }`}
            >
              ${v}
            </button>
          ))}
        </div>

        <Field
          label="Custom amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Field label="Card number" placeholder="•••• •••• •••• ••••" />
        <div className="grid grid-cols-2 gap-2">
          <Field label="Expiry" placeholder="MM/YY" />
          <Field label="CVC" placeholder="123" />
        </div>

        <Panel className="rounded-2xl px-3 py-2.5">
          <div className="flex justify-between text-[13px]">
            <span className="text-mute">Total</span>
            <span className="font-semibold">${amount}</span>
          </div>
        </Panel>

        <Button full onClick={() => setDone(true)}>
          Pay ${amount}
        </Button>
      </div>
    </MobileShell>
  );
}
