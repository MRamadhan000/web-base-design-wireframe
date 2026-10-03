"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { VideoDetail, VideoRelated } from "../models/video.types";
import { VideoDetail as VideoDetailContentItem } from "./Detail/VideoDetail";
import { VideoRelated as VideoRelatedList } from "./Detail/VideoRelated";
import { VideoSearch } from "./Detail/VideoSearch";

interface DetailVideoContentProps {
  video: VideoDetail;
  relatedVideos: VideoRelated[];
}

export function DetailVideoContent({
  video,
  relatedVideos,
}: DetailVideoContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredVideos = relatedVideos.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="w-full bg-slate-50 py-8 font-sans antialiased text-slate-800 md:py-12">
      <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <Link
            href="/video"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-emerald-600 hover:text-emerald-600 hover:shadow-sm"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Kembali ke Video</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <VideoDetailContentItem video={video} />

          <aside className="space-y-6">
            <VideoSearch value={searchQuery} onChange={setSearchQuery} />
            <VideoRelatedList videoList={filteredVideos} />
          </aside>
        </div>
      </div>
    </section>
  );
}