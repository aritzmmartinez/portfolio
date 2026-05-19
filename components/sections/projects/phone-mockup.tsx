"use client";

interface PhoneMockupProps {
  children: React.ReactNode;
}

export function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-50">
      <div className="absolute -left-0.75 top-12.5 w-0.75 h-4 bg-foreground/20 rounded-l-sm" />
      <div className="absolute -left-0.75 top-19 w-0.75 h-6 bg-foreground/20 rounded-l-sm" />
      <div className="absolute -left-0.75 top-27.5 w-0.75 h-6 bg-foreground/20 rounded-l-sm" />
      <div className="absolute -right-0.75 top-22.5 w-0.75 h-10 bg-foreground/20 rounded-r-sm" />

      <div className="p-0.5 rounded-[2.6rem] bg-linear-to-b from-foreground/25 to-foreground/10 shadow-[0_24px_64px_-8px_rgba(0,0,0,0.4),0_4px_16px_rgba(0,0,0,0.15)]">
        <div className="rounded-[2.5rem] bg-card p-1.5">
          <div className="relative rounded-4xl overflow-hidden bg-black aspect-9/19.5">
            <div className="absolute inset-0">{children}</div>

            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black/80 dark:bg-black/90 rounded-full z-20" />

            <div className="absolute top-0 left-0 right-0 h-11 flex items-start justify-between px-5 pt-3 z-10 pointer-events-none">
              <span className="text-[9px] font-semibold text-white/90 leading-none">
                9:41
              </span>
              <div className="flex items-center gap-px">
                <div className="w-4.5 h-2.25 rounded-[2px] border border-white/60 p-[1.5px]">
                  <div className="h-full w-[70%] bg-white/90 rounded-[1px]" />
                </div>
                <div className="w-0.5 h-1.25 bg-white/50 rounded-r-[1px]" />
              </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-br from-white/4 via-transparent to-transparent pointer-events-none z-10" />

            <div className="absolute bottom-1.5 left-0 right-0 flex justify-center z-20">
              <div className="w-20 h-1 bg-white/25 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
