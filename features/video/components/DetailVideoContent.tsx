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
      <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6">
        <div className="flex items-center border-b border-border pb-4">
          <Link
            href="/video"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-black transition-all hover:border-primary hover:text-primary hover:shadow-sm"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Kembali ke Video</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="w-full">
          <VideoDetailContentItem video={video} />
        </div>
      </div>
    </section>
  );
}