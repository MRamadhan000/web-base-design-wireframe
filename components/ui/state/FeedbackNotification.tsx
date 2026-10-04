import { AlertCircle, CheckCircle2, X } from "lucide-react";

interface FeedbackNotificationProps {
  variant: "success" | "error";
  title: string;
  message: string;
  onDismiss: () => void;
}

export function FeedbackNotification({
  variant,
  title,
  message,
  onDismiss,
}: FeedbackNotificationProps) {
  const isSuccess = variant === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <div
      role={isSuccess ? "status" : "alert"}
      className={`flex items-start gap-3 rounded-lg border p-4 ${
        isSuccess
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-red-200 bg-red-50 text-red-800"
      }`}
    >
      <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm leading-relaxed">{message}</p>
      </div>

      <button
        type="button"
        onClick={onDismiss}
        aria-label="Tutup notifikasi"
        className="shrink-0 rounded p-1 opacity-70 transition-opacity hover:opacity-100"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}