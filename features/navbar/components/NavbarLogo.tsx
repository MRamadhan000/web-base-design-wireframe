export default function NavbarLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-dashed border-border bg-accent-soft font-mono text-xs text-muted">
        LOGO
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-base font-bold uppercase tracking-wide text-black sm:text-lg">
          Kota Batu
        </span>

        <span className="font-mono text-[10px] text-muted sm:text-xs">
          [Sub-heading / Instansi]
        </span>
      </div>
    </div>
  );
}