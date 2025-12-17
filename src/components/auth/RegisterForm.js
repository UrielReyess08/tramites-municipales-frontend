"use client";

import { useState } from "react";
import { Eye, EyeOff, CheckCircle } from "lucide-react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    tipoPersona: "",
    tipoDocumento: "",
    nDocumento: "",
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    departamento: "",
    provincia: "",
    distrito: "",
    telefono: "",
    direccion: "",
    correo: "",
    password: "",
    confirmPassword: "",
    aceptaTerminos: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  const labelClass = "text-[12px] text-[#0b3a77] mb-2";
  const fieldClass =
    "w-full h-[42px] rounded-[4px] " +
    "border border-black/25 bg-[#f3f3f3] " +
    "px-4 text-sm text-black placeholder:text-black/35 " +
    "focus:outline-none focus:border-black/45";

  const selectClass =
    fieldClass +
    " appearance-none pr-10 " + 
    "bg-[linear-gradient(45deg,transparent_50%,#000_50%),linear-gradient(135deg,#000_50%,transparent_50%),linear-gradient(to_right,transparent,transparent)] " +
    "bg-[length:8px_8px,8px_8px,2.5rem_100%] " +
    "bg-[position:calc(100%-18px)_50%,calc(100%-12px)_50%,100%_0] bg-no-repeat";

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className={labelClass}>Seleccione tipo de persona</p>
          <select
            name="tipoPersona"
            value={formData.tipoPersona}
            onChange={handleChange}
            className={selectClass}
            placeholder="Tipo de Persona*"
          >
            <option value="">Tipo de Persona*</option>
            <option value="natural">Persona Natural</option>
            <option value="juridica">Persona Jurídica</option>
          </select>
        </div>

        <div>
          <p className={labelClass}>Tipo de Documento</p>
          <select
            name="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">DNI</option>
            <option value="dni">DNI</option>
            <option value="ruc">RUC</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>

        <div>
          <p className={labelClass}>&nbsp;</p>
          <input
            type="text"
            name="nDocumento"
            placeholder="N° Documento*"
            value={formData.nDocumento}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className={labelClass}>&nbsp;</p>
          <input
            type="text"
            name="nombres"
            placeholder="Nombres*"
            value={formData.nombres}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <p className={labelClass}>&nbsp;</p>
          <input
            type="text"
            name="apellidoPaterno"
            placeholder="Apellido Paterno*"
            value={formData.apellidoPaterno}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <p className={labelClass}>&nbsp;</p>
          <input
            type="text"
            name="apellidoMaterno"
            placeholder="Apellido Materno*"
            value={formData.apellidoMaterno}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className={labelClass}>&nbsp;</p>
          <select
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Departamento*</option>
            <option value="lima">Lima</option>
          </select>
        </div>

        <div>
          <p className={labelClass}>&nbsp;</p>
          <select
            name="provincia"
            value={formData.provincia}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Provincia*</option>
            <option value="lima">Lima</option>
          </select>
        </div>

        <div>
          <p className={labelClass}>&nbsp;</p>
          <select
            name="distrito"
            value={formData.distrito}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Distrito*</option>
            <option value="ate">Ate</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className={labelClass}>&nbsp;</p>
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono*"
            value={formData.telefono}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <p className={labelClass}>&nbsp;</p>
          <input
            type="text"
            name="direccion"
            placeholder="Dirección*"
            value={formData.direccion}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 pt-4">
        <div>
          <p className="text-[13px] text-[#0b3a77] font-semibold mb-3">
            Configurar su acceso
          </p>

          <input
            type="email"
            name="correo"
            placeholder="Correo Electronico*"
            value={formData.correo}
            onChange={handleChange}
            className={fieldClass + " mb-6"}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña*"
                value={formData.password}
                onChange={handleChange}
                className={fieldClass + " pr-12"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-black/80 hover:text-black"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmar Contraseña*"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={fieldClass + " pr-12"}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-black/80 hover:text-black"
                aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showConfirmPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-end gap-6">
          <label className="flex items-start text-sm text-black/90 text-center">
            <input
              type="checkbox"
              name="aceptaTerminos"
              checked={formData.aceptaTerminos}
              onChange={handleChange}
              className="mt-1"
            />
            <span>
              He leído y aceptado <br />
              los <u>términos</u> y condiciones de <br />
              uso.
            </span>
          </label>

          <button
            type="submit"
            disabled={!formData.aceptaTerminos}
            className="
              w-full h-[34px]
              rounded-[4px]
              bg-[#2bbd17] text-white font-semibold text-sm
              flex items-center justify-center gap-2
              hover:brightness-95
              disabled:opacity-50 disabled:cursor-not-allowed
              transition
            "
          >
            Registrarse
            <CheckCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}
