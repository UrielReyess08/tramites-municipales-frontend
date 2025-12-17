"use client";

import { Settings } from "lucide-react";

export default function TramiteTypeSelector({ onSelect }) {
  const tramites = [
    {
      id: "licencia-construccion",
      nombre: "Licencia de Construcción",
      descripcion: "Para obras nuevas y ampliaciones",
      precio: 250.0,
    },
    {
      id: "certificado-domiciliario",
      nombre: "Certificado Domiciliario",
      descripcion: "Comprueba tu residencia",
      precio: 200.0,
    },
    {
      id: "tramite-catastral",
      nombre: "Trámite Catastral",
      descripcion: "Consultas y modificaciones catastrales",
      precio: 150.0,
    },
  ];

  return (
    
    <div className="space-y-4">
        
      <p className="text-[13px] text-black/40">
        Selecciona el tipo de trámite que deseas realizar:
      </p>

      <div className="space-y-3">
        {tramites.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect?.(t)}
            className="
              w-full
              rounded-[10px]
              bg-[#ffff]
              border border-black/10
              px-5 py-6
              flex items-center justify-between gap-4
              hover:brightness-[0.98]
              transition
              shadow-[0_18px_40px_rgba(0,0,0,0.2)]
            "
          >

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-[8px] bg-[#dcdcdc] border border-black/10 flex items-center justify-center">
                <Settings className="h-6 w-6 text-[#0b3a77]" />
              </div>

              <div className="text-left">
                <h3 className="text-[14px] font-semibold text-black leading-snug">
                  {t.nombre}
                </h3>
                <p className="text-[12px] text-black/35 leading-snug">
                  {t.descripcion}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[30px] font-semibold text-[#0b3a77]">
                S/ {t.precio.toFixed(2)}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
