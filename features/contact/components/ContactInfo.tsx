import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import { ContactInfoItem } from "../types/contact.type";

interface ContactInfoProps {
  items: ContactInfoItem[];
}

export default function ContactInfo({
  items,
}: ContactInfoProps) {
  const icons = [
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
  ];

  return (
    <section>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          Informasi Kontak
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black">
          Informasi Pemerintah Kota Batu
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = icons[index];

          return (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-background p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={16} />
              </div>

              <h3 className="text-sm font-bold text-black">
                {item.title}
              </h3>

              <div className="mt-2 space-y-1">
                {item.lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm leading-6 text-muted-light"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}