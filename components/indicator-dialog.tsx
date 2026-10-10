"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { sourceUrl, type Indicator } from "@/lib/indicators";

const pad = (value: number) => String(value).padStart(2, "0");

export function IndicatorDialog({
  indicator,
  position,
  total,
  onClose,
  onStep,
}: {
  indicator: Indicator | null;
  position: number;
  total: number;
  onClose: () => void;
  onStep: (step: 1 | -1) => void;
}) {
  return (
    <Dialog
      open={indicator !== null}
      onOpenChange={(open) => !open && onClose()}
    >
      {indicator && (
        <DialogContent
          showCloseButton={false}
          aria-describedby="indicator-summary"
          className="flex w-[min(64rem,calc(100vw-2rem),calc((100dvh-2rem-var(--info))*16/9))] max-w-none flex-col gap-0 overflow-hidden p-0 [--info:30rem] sm:max-w-none lg:[--info:14.5rem]"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") onStep(1);
            if (event.key === "ArrowLeft") onStep(-1);
          }}
        >
          <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-chart">
            <Image
              key={indicator.slug}
              src={`/indicators/${indicator.slug}.webp`}
              alt={`${indicator.name} on a TradingView chart`}
              fill
              sizes="64rem"
              loading="eager"
              className="animate-in object-cover duration-300 fade-in-0"
            />
            <DialogClose asChild>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-0 right-0"
              >
                <X />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>

          <div className="grid h-(--info) shrink-0 grid-rows-[auto_auto_1fr] gap-4 p-5 text-sm leading-snug font-medium lg:grid-cols-[1fr_1fr_15rem] lg:grid-rows-1 lg:gap-8 lg:p-6">
            <div className="flex min-w-0 flex-col gap-2">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span>
                  {pad(position + 1)} / {pad(total)}
                </span>
                <Badge variant="outline" className="rounded-none font-mono">
                  {indicator.code}
                </Badge>
                <Badge variant="secondary" className="rounded-none">
                  {indicator.category}
                </Badge>
              </div>
              <DialogTitle className="text-xl leading-tight font-bold tracking-tight">
                {indicator.name}
              </DialogTitle>
              <DialogDescription
                id="indicator-summary"
                className="text-sm text-foreground"
              >
                {indicator.summary}
              </DialogDescription>
            </div>

            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="font-mono text-xs text-muted-foreground">
                How to read it
              </h3>
              <p className="text-muted-foreground">{indicator.reading}</p>
            </div>

            <div className="flex min-w-0 flex-col justify-end gap-4 lg:justify-between">
              <dl className="flex flex-col font-mono text-xs">
                <div className="flex justify-between gap-4 pb-1.5 text-muted-foreground">
                  <dt>Defaults</dt>
                  <dd>Pine v6</dd>
                </div>
                {indicator.settings.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 border-t py-1"
                  >
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="truncate text-right">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex gap-2">
                <Button asChild className="flex-1">
                  <a
                    href={sourceUrl(indicator)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source
                    <ArrowUpRight />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onStep(-1)}
                >
                  <ArrowLeft />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="icon" onClick={() => onStep(1)}>
                  <ArrowRight />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
