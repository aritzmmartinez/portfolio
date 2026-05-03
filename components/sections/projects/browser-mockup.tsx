"use client";

interface BrowserMockupProps {
  children: React.ReactNode;
  projectName: string;
  url?: string;
}

export function BrowserMockup({
  children,
  projectName,
  url,
}: BrowserMockupProps) {
  return (
    <div className="relative rounded-lg border border-border bg-muted/30 overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="flex-1 mx-3">
          <div className="h-5 rounded bg-background/50 flex items-center px-2">
            <span className="text-[10px] text-muted-foreground truncate">
              {url ??
                `${projectName.toLowerCase().replace(/\s+/g, "-")}.vercel.app`}
            </span>
          </div>
        </div>
      </div>
      <div className="relative aspect-16/10">{children}</div>
    </div>
  );
}
