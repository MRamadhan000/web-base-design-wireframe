import { FaTag } from "react-icons/fa";

interface BeritaTagsProps {
  tags: string[];
}

export function BeritaTags({ tags }: BeritaTagsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-6">
      <span className="mr-2 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
        <FaTag className="text-emerald-600" />
        Tag:
      </span>

      {tags.map((tag) => (
        <span
          key={tag}
          className="cursor-pointer rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-emerald-100 hover:text-emerald-800"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
