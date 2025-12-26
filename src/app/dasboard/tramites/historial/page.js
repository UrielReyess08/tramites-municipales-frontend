'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/dashboard/Header';

export default function HistorialPage() {
  const router = useRouter();

  // Opcional: datos mock para ver el maquetado
  const items = [
    { numero: 'TRMN3Y904TGK', tipo: 'Licencia de Construcción', fecha: '28/11/2025', estado: 'Registrado' },
    { numero: 'ABCD12345678', tipo: 'Certificado Domiciliario', fecha: '15/12/2025', estado: 'En revisión' },
  ];

  function irDetalle(numero) {
    router.push('/dasboard/tramites/id'); // si luego pasas el número, puedes usar params o query
  }

  return (
    <main>
      <Header />

      <section>
        <h1>Mis Trámites</h1>

        {/* Filtros básicos */}
        <form>
          <label>
            Buscar por número:
            <input type="text" name="q" />
          </label>
          <button type="submit">Buscar</button>
        </form>

        {/* Tabla simple */}
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((t) => (
              <tr key={t.numero}>
                <td>{t.numero}</td>
                <td>{t.tipo}</td>
                <td>{t.fecha}</td>
                <td>{t.estado}</td>
                <td>
                  <button type="button" onClick={() => irDetalle(t.numero)}>Ver detalle</button>
                  <button type="button">Descargar comprobante</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}