import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Registro de Usuario | Plataforma de Trámites",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f66d0] px-6 py-10">
      <section
        className="
          w-full max-w-[1150px]
          bg-[#ffff]
          rounded-[28px]
          shadow-[0_28px_80px_rgba(0,0,0,0.25)]
          px-12 py-16
          lg:px-16 lg:py-19
        "
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-[22px] font-semibold text-[#0b3a77]">
            Registro de Usuario
          </h1>
        </div>

        <RegisterForm />
      </section>
    </main>
  );
}
