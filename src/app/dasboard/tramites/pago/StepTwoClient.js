"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/dashboard/Header";
import { MoveLeft, CreditCard, Wallet } from "lucide-react";

export default function StepTwoClient() {
  const router = useRouter();
  const [method, setMethod] = useState("tarjeta");

  function handleSubmit(e) {
    e.preventDefault();
     router.push("/dasboard/tramites/pagado");
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
            className="h-10 w-10 rounded-[10px] bg-transparent text-black/80 hover:bg-black/5 transition flex items-center justify-center"
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
              <span className="h-12 w-12 rounded-full bg-[#dcdcdc] text-black/70 flex items-center justify-center font-semibold border border-black/10">
                1
              </span>
            </li>

            <li className="relative z-10">
              <span className="h-12 w-12 rounded-full bg-[#0b3a77] text-white flex items-center justify-center font-semibold shadow">
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
            <div className="rounded-[10px] bg-[#dcdcdc] border border-black/10 px-6 py-5 flex items-start justify-between gap-6">
              <div>
                <p className="text-[14px] font-semibold text-black">
                  Costo del trámite:
                </p>

                <ul className="mt-4 space-y-1 text-[12px] text-black/35 list-disc pl-4">
                  <li>Incluye procesamiento y tramitación</li>
                  <li>Válido por 12 meses desde la emisión</li>
                </ul>
              </div>

              <div className="text-right">
                <span className="text-[32px] font-semibold text-[#0b3a77]">
                  S/ 250.00
                </span>
              </div>
            </div>

            <div>
              <p className="text-[14px] font-semibold text-black mb-3">
                Selecciona método de pago:
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setMethod("tarjeta")}
                  className={`
                    w-full rounded-[10px] border px-6 py-4
                    flex items-center gap-4 text-left
                    transition
                    ${
                      method === "tarjeta"
                        ? "bg-[#dcdcdc] border-black/20 shadow-[0_10px_18px_rgba(0,0,0,0.12)]"
                        : "bg-[#dcdcdc] border-black/10 hover:brightness-[0.99]"
                    }
                  `}
                >
                  <div className="h-12 w-12 rounded-[8px] bg-[#e6e6e6] border border-black/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-black/50" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[14px] font-semibold text-black leading-snug">
                      Tarjeta de Crédito/Débito
                    </h3>
                    <p className="text-[12px] text-black/35 leading-snug">
                      Visa, Mastercard, American Express
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod("billetera")}
                  className={`
                    w-full rounded-[10px] border px-6 py-4
                    flex items-center gap-4 text-left
                    transition
                    ${
                      method === "billetera"
                        ? "bg-[#dcdcdc] border-black/20 shadow-[0_10px_18px_rgba(0,0,0,0.12)]"
                        : "bg-[#dcdcdc] border-black/10 hover:brightness-[0.99]"
                    }
                  `}
                >
                  <div className="h-12 w-12 rounded-[8px] bg-[#e6e6e6] border border-black/10 flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-black/50" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[14px] font-semibold text-black leading-snug">
                      Billetera Digital
                    </h3>
                    <p className="text-[12px] text-black/35 leading-snug">Yape</p>
                  </div>
                </button>
              </div>
            </div>

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
                Confirmar Pago
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
