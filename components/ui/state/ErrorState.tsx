interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = "Terjadi kesalahan.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
          !
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-800">
            Terjadi Kesalahan
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {message}
          </p>
        </div>

        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Coba Lagi
          </button>
        )}
      </div>
    </div>
  );
}