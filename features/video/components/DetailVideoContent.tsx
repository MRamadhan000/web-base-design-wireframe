"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { VideoDetail } from "../models/video.types";
import { VideoDetail as VideoDetailContentItem } from "./Detail/VideoDetail";

interface DetailVideoContentProps {
  video: VideoDetail;
}

export function DetailVideoContent({
  video,
}: DetailVideoContentProps) {
  return (
    <section className="w-full bg-background py-8 font-sans antialiased text-black md:py-12">
      <div className="mx-auto mb-6 flex max-w-7xl justify-end border-b border-border px-4 pb-4 sm:px-6">
        <Link
          href="/video"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          <span>Kembali ke Video</span>
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="w-full">
          <VideoDetailContentItem video={video} />
        </div>
      </div>
    </section>
  );
}