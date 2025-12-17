import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0b63c7] text-white shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
      <div className="mx-auto max-w-[1400px] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-md px-10 py-2 flex items-center">
            <Image
              src="/logo-muni.webp"
              alt="Municipalidad Distrital de Ate"
              width={600}
              height={600}
              priority
              className="h-auto w-[120px]"
            />
          </div>

          <div className="leading-tight">
            <p className="text-[26px] font-semibold">Plataforma de Trámites</p>
            <span className="text-[13px] opacity-80">Municipalidad de Ate</span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/18 border border-white/25 rounded-lg px-4 py-2 shadow-[0_6px_14px_rgba(0,0,0,0.18)]">
          <span className="h-9 w-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-semibold">
            U
          </span>
          <span className="text-sm opacity-95">usuario@gmail.com</span>
        </div>
      </div>
    </header>
  );
}
