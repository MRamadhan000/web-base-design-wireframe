import { Berita } from "../models/berita.types";
import { BeritaCard } from "./BeritaCard";

interface BeritaListProps {
  beritaList: Berita[];
}

export function BeritaList({ beritaList }: BeritaListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {beritaList.map((berita) => (
        <BeritaCard key={berita.id} berita={berita} />
      ))}
    </div>
  );
}