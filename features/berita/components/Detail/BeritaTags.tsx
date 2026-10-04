import { FaTag } from "react-icons/fa";

interface BeritaTagsProps {
  tags: string[];
}

export function BeritaTags({ tags }: BeritaTagsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-border pt-6">
      <span className="mr-2 flex items-center gap-1.5 text-xs font-semibold text-black">
        <FaTag className="text-primary" />
        Tag:
      </span>

      {tags.map((tag) => (
        <span
          key={tag}
          className="cursor-pointer rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-muted transition-colors hover:bg-accent hover:text-primary"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
