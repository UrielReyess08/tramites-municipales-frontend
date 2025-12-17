import Image from 'next/image';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Iniciar Sesión | Plataforma de Trámites',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center
        bg-gradient-to-b from-[#0f66d0] to-[#0f66d0]
        px-6 py-10">
      <section className="w-full max-w-[1150px]
          bg-[#FFFFFF]
          rounded-[28px]
          shadow-[0_28px_80px_rgba(0,0,0,0.25)]
          px-12 py-16
          lg:px-40 lg:py-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          {/* IZQUIERDA */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-10 flex justify-center">
              <Image
                src="/logo-muni.webp"
                alt="Municipalidad Distrital de Ate"
                width={300}
                height={120}
                priority
                className='-mt-7 w-[250px] h-auto'
              />
            </div>

            <h1 className="-mt-5 text-center lg:text-left font-semibold tracking-[0.5px]">
              <span className="block text-[#0b3a77] text-[30px] sm:text-[34px]">
                PLATAFORMA DE
              </span>
              <span className="text-center block text-[#6aa9ff] text-[30px] sm:text-[34px]">
                TRÁMITES
              </span>
            </h1>
          </div>

          {/* DERECHA */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-full max-w-[420px]">
              <h2 className="text-[#0b3a77] font-semibold text-lg text-center mb-6">
                Iniciar Sesión
              </h2>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}