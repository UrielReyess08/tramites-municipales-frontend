'use client';
import { useState } from 'react';
import { FolderDown, FolderUp } from "lucide-react";


export default function FileUploadModal({ tramite, onBack, onContinue }) {
  const [files, setFiles] = useState({});

  const requisitos = [
    {
      id: 'formato-solicitud',
      nombre: 'Formato de Solicitud Sencilla',
      formatoUrl: '/formatos/solicitud-sencilla.pdf',
    },
    {
      id: 'copia-dni',
      nombre: 'Copia de DNI',
      formatoUrl: null,
    },
    {
      id: 'anexo-1',
      nombre: 'Anexo 1',
      formatoUrl: '/formatos/anexo-1.pdf',
    },
  ];

  function handleFileChange(requisitoId, file) {
    setFiles((prev) => ({ ...prev, [requisitoId]: file }));
  }

  function handleContinue() {
    console.log('Archivos subidos:', files);
    onContinue(files);
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] text-[14px] font-semibold text-black">
        <span>Requisitos</span>
        <span className="text-center">Formato</span>
        <span className="text-center">Cargar PDF</span>
      </div>

      <div className="space-y-4">
        {requisitos.map((req) => (
          <div
            key={req.id}
            className="grid grid-cols-[1.4fr_0.8fr_0.8fr] gap-x-6 text-[14px] pb-5 font-semibold text-black"
          >
            <span className="text-[13px] text-black/40">{req.nombre}</span>

            <div className="flex justify-center">
              <button
                type="button"
                disabled={!req.formatoUrl}
                className="
                h-[30px] w-[120px]
                rounded-[4px]
                border border-black/10
                bg-[#e6e6e6]
                text-[12px] font-semibold text-black/60
                flex items-center justify-center gap-2
                disabled:opacity-40
                "
                >
                <FolderDown className="h-4 w-4" />
                    Descargar
            </button>
            </div>

            <div className="flex justify-center">
              <label className="
                h-[30px] w-[120px]
                rounded-[4px]
                border border-black/10
                bg-[#e6e6e6]
                text-[12px] font-semibold text-black/60
                flex items-center justify-center gap-2
                cursor-pointer
                ">
            <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => handleFileChange(req.id, e.target.files?.[0])}
                />
                <FolderUp className="h-4 w-4" />
                    Subir Archivo
            </label>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-20">
        <button
          type="button"
          onClick={onBack}
          className="h-[30px] w-[90px] rounded-[4px] border border-black/10 bg-[#e6e6e6] text-[12px] font-semibold text-black/60"
        >
          Atrás
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="h-[30px] flex-1 rounded-[4px] bg-[#0b3a77] text-white text-[12px] font-semibold shadow-[0_3px_0_rgba(0,0,0,0.18)]"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}