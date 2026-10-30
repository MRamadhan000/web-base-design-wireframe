export function SkeletonRows() {
  return (
    <div className="animate-pulse motion-reduce:animate-none" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3">
          <div className="h-9 w-14 rounded bg-white/10" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-4/5 rounded bg-white/10" />
            <div className="h-3 w-2/5 rounded bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}