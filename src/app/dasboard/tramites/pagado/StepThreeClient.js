"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/dashboard/Header";
import { MoveLeft, CircleCheckBig , FileText, CalendarDays, User, Mail, Download } from "lucide-react";

export default function StepThreeClient() {
  const router = useRouter();

  const numeroTramite = "TRMN3Y904TGK";
  const detalles = {
    tipo: "Licencia de Construcción",
    fecha: "28/11/2025",
    solicitante: "Marcos José Torres Ugarte",
    contacto: "marc_45@gmail.com",
  };

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
              <span className="h-12 w-12 rounded-full bg-[#dcdcdc] text-black/70 flex items-center justify-center font-semibold border border-black/10">
                2
              </span>
            </li>
            <li className="relative z-10">
              <span className="h-12 w-12 rounded-full bg-[#0b3a77] text-white flex items-center justify-center font-semibold shadow">
                3
              </span>
            </li>
          </ol>
        </nav>

        <div className="mx-auto max-w-[980px] rounded-[10px] bg-[#e1e1e1] border border-black/20 shadow-[0_10px_18px_rgba(0,0,0,0.25)] px-8 py-7">
          <div className="text-center mb-6">
            <div className="mx-auto h-12 w-12 rounded-full bg-green-200/60 flex items-center justify-center">
              <CircleCheckBig className="h-6 w-6 text-green-600" />
            </div>

            <h2 className="mt-3 text-[16px] font-semibold text-black">
              ¡Trámite Registrado Exitosamente!
            </h2>
            <p className="text-[12px] text-black/50">
              Tu solicitud ha sido recibida y está en proceso
            </p>
          </div>

          <div className="rounded-[8px] border border-[#0b3a77]/60 bg-[#d8e7ff]/25 px-6 py-5 mb-6">
            <p className="text-[12px] text-black/40">Número de Trámite</p>
            <p className="mt-2 text-[30px] font-extrabold tracking-wide text-[#0b3a77]">
              {numeroTramite}
            </p>
            <p className="mt-1 text-[11px] text-black/40">
              Guarda este número para consultar el estado
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[13px] font-semibold text-black mb-3">
              Detalles del Trámite
            </h3>

            <div className="rounded-[8px] border border-black/10 bg-[#dcdcdc] px-6 py-5 space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-[#0b3a77]" />
                <div>
                  <p className="text-[11px] text-black/40">Tipo</p>
                  <p className="text-[13px] font-semibold text-black">{detalles.tipo}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CalendarDays className="h-5 w-5 text-[#0b3a77]" />
                <div>
                  <p className="text-[11px] text-black/40">Fecha de Registro</p>
                  <p className="text-[13px] font-semibold text-black">{detalles.fecha}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-[#0b3a77]" />
                <div>
                  <p className="text-[11px] text-black/40">Solicitante</p>
                  <p className="text-[13px] font-semibold text-black">{detalles.solicitante}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#0b3a77]" />
                <div>
                  <p className="text-[11px] text-black/40">Contacto</p>
                  <p className="text-[13px] font-semibold text-black">{detalles.contacto}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#0b3a77]/60 bg-[#d8e7ff]/25 px-6 py-5 mb-7">
            <h3 className="text-[13px] font-semibold text-black mb-2">Próximos Pasos:</h3>
            <ol className="list-decimal pl-5 text-[12px] text-black/50 space-y-1">
              <li>Recibirás un correo de confirmación en los próximos 5 minutos</li>
              <li>El análisis de tu solicitud puede tomar 5 a 10 días hábiles</li>
              <li>Recibirás notificaciones del estado en tu email</li>
              <li>Consulta tu estado usando el número de trámite</li>
            </ol>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="h-[34px] flex-1 rounded-[4px] border border-black/10 bg-[#e6e6e6] text-[12px] font-semibold text-black/90 flex items-center justify-center gap-2"
              onClick={() => {
                //descargas PDF real
                console.log("Descargar comprobante");
              }}
            >
              <Download className="h-4 w-4" />
              Descargar Comprobante
            </button>

            <button
              type="button"
              onClick={() => router.push("/dasboard")}
              className="h-[34px] flex-1 rounded-[4px] bg-[#0b3a77] text-white text-[12px] font-semibold shadow-[0_3px_0_rgba(0,0,0,0.18)] hover:brightness-95 transition"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
