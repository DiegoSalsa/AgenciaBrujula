"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/actions";

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: initialService,
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    const result = await submitContactForm(formDataObj);

    setLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 md:py-16">
        <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-accent/30">
          <svg className="w-10 h-10 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-title text-3xl md:text-4xl text-brand-primary mb-4">¡Mensaje enviado!</h3>
        <p className="text-lg md:text-xl text-foreground/70 font-medium mb-8">
          Nos pondremos en contacto contigo lo antes posible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" });
          }}
          className="text-brand-primary font-bold hover:text-brand-accent transition-colors underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" id="contact-form">
      {/* Header inside form */}
      <div className="mb-2">
        <h3 className="font-title text-2xl md:text-3xl text-brand-primary mb-1">Completa tus datos</h3>
        <p className="text-foreground/50 text-sm font-medium">Los campos con * son obligatorios</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        <div className="group">
          <label htmlFor="nombre" className="block text-brand-primary font-bold text-sm mb-2 tracking-wide uppercase">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full px-5 py-3.5 rounded-xl border-2 border-brand-light bg-brand-light/20 text-foreground text-base font-medium focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-foreground/30"
          />
        </div>
        <div className="group">
          <label htmlFor="email" className="block text-brand-primary font-bold text-sm mb-2 tracking-wide uppercase">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className="w-full px-5 py-3.5 rounded-xl border-2 border-brand-light bg-brand-light/20 text-foreground text-base font-medium focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-foreground/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        <div className="group">
          <label htmlFor="telefono" className="block text-brand-primary font-bold text-sm mb-2 tracking-wide uppercase">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+56 9 XXXX XXXX"
            className="w-full px-5 py-3.5 rounded-xl border-2 border-brand-light bg-brand-light/20 text-foreground text-base font-medium focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all placeholder:text-foreground/30"
          />
        </div>
        <div className="group">
          <label htmlFor="servicio" className="block text-brand-primary font-bold text-sm mb-2 tracking-wide uppercase">
            Servicio de interés
          </label>
          <select
            id="servicio"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-xl border-2 border-brand-light bg-brand-light/20 text-foreground text-base font-medium focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%23551273'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.25rem center",
            }}
          >
            <option value="">Selecciona un servicio</option>
            <option value="plan-norte">Plan Norte</option>
            <option value="plan-sur">Plan Sur</option>
            <option value="plan-este">Plan Este</option>
            <option value="plan-oeste">Plan Oeste (Personalizado)</option>
            <option value="redes-sociales">Redes Sociales</option>
            <option value="diseno-grafico">Diseño Gráfico</option>
            <option value="branding">Branding e Identidad</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div className="group">
        <label htmlFor="mensaje" className="block text-brand-primary font-bold text-sm mb-2 tracking-wide uppercase">
          Cuéntanos sobre tu proyecto *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Describe tu proyecto, marca o idea..."
          className="w-full px-5 py-3.5 rounded-xl border-2 border-brand-light bg-brand-light/20 text-foreground text-base font-medium focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all resize-none placeholder:text-foreground/30"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          id="contact-submit-btn"
          className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-accent hover:text-brand-primary transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-accent/30 hover:shadow-xl hover:scale-[1.03] active:scale-100 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
          {!loading && (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>
        <p className="text-foreground/40 text-sm font-medium text-center sm:text-left">
          Te responderemos lo antes posible.
        </p>
      </div>
    </form>
  );
}
