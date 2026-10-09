import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-start justify-end gap-6 px-gutter pb-[max(2rem,env(safe-area-inset-bottom))]">
      <p className="font-mono text-xs text-muted-foreground">404</p>
      <h1 className="text-[18vw] leading-[0.8] font-extrabold tracking-[-0.06em] lg:text-[12vw]">
        No signal
      </h1>
      <p className="text-sm font-medium text-muted-foreground">
        This page isn&apos;t on the chart.
      </p>
      <Button asChild>
        <Link href="/">Back to the indicators</Link>
      </Button>
    </main>
  );
}
