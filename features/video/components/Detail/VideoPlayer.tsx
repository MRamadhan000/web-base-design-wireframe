interface VideoPlayerProps {
  title: string;
  videoUrl: string;
}

export function VideoPlayer({ title, videoUrl }: VideoPlayerProps) {
  return (
    <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl bg-slate-900 shadow-sm">
      <iframe
        className="h-full w-full border-0"
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}