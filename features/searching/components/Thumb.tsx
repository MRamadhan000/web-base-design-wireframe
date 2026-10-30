import { FaPlay } from "react-icons/fa";
import { ResultItem, SectionConfig } from "./SearchDropdown";

export function Thumb({
  item,
  config,
}: {
  item: ResultItem;
  config: SectionConfig;
}) {
  const base = `${config.thumbClass} flex-shrink-0 rounded`;

  if (!item.image) {
    return (
      <div className={`${base} flex items-center justify-center bg-white/10`}>
        <config.Icon className="h-3.5 w-3.5 text-white/40" />
      </div>
    );
  }

  return (
    <div className={`${base} relative overflow-hidden`}>
      <img
        src={item.image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      {config.key === "video" && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/30">
          <FaPlay className="h-3 w-3 text-white/90" />
        </span>
      )}
    </div>
  );
}