"use client";
import { useRouter } from "next/navigation";
import { MoveLeft } from 'lucide-react';
import Header from "@/components/dashboard/Header";

export default function NuevoTramiteClient() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
     router.push("/dasboard/tramites/pago");
  }

  return (
    <main className="min-h-screen bg-[#d9d9d9]">
      <Header />

      <section className="mx-auto max-w-[1120px] px-6 py-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            type="button"
            aria-label="Atrás"
            onClick={() => router.back()}
            className="h-10 w-10 rounded-[10px] bg-transparent text-black/80 hover:bg-black/5 transition flex items-center justify-center text-[24px]"
          >
            <MoveLeft />
          </button>

          <h1 className="text-[34px] font-semibold text-black">Nuevo trámite</h1>
        </div>

        <nav aria-label="Progreso" className="mb-6">
        <ol className="relative inline-flex items-center gap-10 px-12">
          <div
            className="absolute left-[52px] right-[52px] top-1/2 -translate-y-1/2 h-[2px] bg-black/10"
            aria-hidden="true"
          />

        <li className="relative z-10">
          <span className="h-12 w-12 rounded-full bg-[#0b3a77] text-white flex items-center justify-center font-semibold shadow">
              1
          </span>
        </li>

        <li className="relative z-10">
          <span className="h-12 w-12 rounded-full bg-[#dcdcdc] text-black/70 flex items-center justify-center font-semibold border border-black/10">
              2
          </span>
        </li>

        <li className="relative z-10">
          <span className="h-12 w-12 rounded-full bg-[#dcdcdc] text-black/70 flex items-center justify-center font-semibold border border-black/10">
              3
          </span>
        </li>
      </ol>
  </nav>


        <div className="mx-auto max-w-[980px] rounded-[10px] bg-[#e1e1e1] border border-black/20 shadow-[0_10px_18px_rgba(0,0,0,0.25)] px-8 py-7">
          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset>
              <legend className="sr-only">Datos del solicitante</legend>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-medium text-black/80">
                    Nombres
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Ingrese su nombre completo"
                    className="h-[36px] w-full rounded-[4px] text-black/80 border border-black/25 bg-[#dcdcdc] px-3 text-[13px] outline-none focus:border-black/40 placeholder:text-black/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-medium text-black/80">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Ingrese sus apellidos completos"
                    className="h-[36px] w-full rounded-[4px] text-black/80 border border-black/25 bg-[#dcdcdc] px-3 text-[13px] outline-none focus:border-black/40 placeholder:text-black/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-medium text-black/80">
                    DNI
                  </label>
                  <input
                    type="text"
                    name="dni"
                    placeholder="Ingrese su número de DNI"
                    className="h-[36px] w-full rounded-[4px] text-black/80 border border-black/25 bg-[#dcdcdc] px-3 text-[13px] outline-none focus:border-black/40 placeholder:text-black/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="space-y-2 md:col-span-1">
                  <label className="text-[12px] font-medium text-black/80">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    placeholder="Ingrese la dirección del lugar"
                    className="h-[36px] w-full rounded-[4px] text-black/80 border border-black/25 bg-[#dcdcdc] px-3 text-[13px] outline-none focus:border-black/40 placeholder:text-black/40"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <label className="text-[12px] font-medium text-black/80">
                  Descripción del Trámite
                </label>
                <textarea
                  name="descripcion"
                  rows={6}
                  placeholder="Describe los detalles del trámite"
                  className="w-full rounded-[4px] border text-black/80 border-black/25 bg-[#dcdcdc] px-3 py-3 text-[13px] outline-none focus:border-black/40 resize-none min-h-[140px] placeholder:text-black/40"
                />
              </div>
            </fieldset>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => router.back()}
                className="h-[34px] w-[90px] rounded-[4px] border border-black/10 bg-[#e6e6e6] text-[12px] font-semibold text-black/90"
              >
                Atrás
              </button>

              <button
                type="submit"
                className="h-[34px] flex-1 rounded-[4px] bg-[#0b3a77] text-white text-[12px] font-semibold shadow-[0_3px_0_rgba(0,0,0,0.18)] hover:brightness-95 transition"
              >
                Continuar al Pago
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
