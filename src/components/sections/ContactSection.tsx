import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { contacto } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";

const esquema = z.object({
  nombre: z.string().trim().min(2, "Escriba su nombre.").max(120, "Máximo 120 caracteres."),
  empresa: z
    .string()
    .trim()
    .min(2, "Escriba el nombre de su organización.")
    .max(160, "Máximo 160 caracteres."),
  correo: z
    .string()
    .trim()
    .min(1, "Escriba su correo corporativo.")
    .email("El correo no parece válido.")
    .max(255, "Máximo 255 caracteres."),
  telefono: z
    .string()
    .trim()
    .min(8, "Escriba un teléfono de al menos 8 dígitos.")
    .max(30, "Máximo 30 caracteres."),
  tipo_organizacion: z.string().min(1, "Seleccione el tipo de organización."),
  volumen: z.string().min(1, "Seleccione un rango."),
  mensaje: z.string().trim().max(1500, "Máximo 1,500 caracteres."),
});

type Campos = z.infer<typeof esquema>;

const inicial: Campos = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  tipo_organizacion: "",
  volumen: "",
  mensaje: "",
};

const claseCampo =
  "w-full rounded-md border border-input bg-card px-3 py-2.5 text-[16px] text-navy transition-colors duration-150 focus-visible:ring-0";

export function ContactSection({ conFondoNavy = true }: { conFondoNavy?: boolean }) {
  const [valores, setValores] = useState<Campos>(inicial);
  const [errores, setErrores] = useState<Partial<Record<keyof Campos, string>>>({});
  const [estado, setEstado] = useState<"idle" | "enviando" | "listo">("idle");
  const [errorEnvio, setErrorEnvio] = useState<string | null>(null);

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const detalle = (e as CustomEvent<string>).detail;
      setValores((v) => ({ ...v, mensaje: detalle }));
    };
    window.addEventListener("encudex:prefill", onPrefill);
    return () => window.removeEventListener("encudex:prefill", onPrefill);
  }, []);

  const set = (campo: keyof Campos, valor: string) => {
    setValores((v) => ({ ...v, [campo]: valor }));
    setErrores((e) => ({ ...e, [campo]: undefined }));
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorEnvio(null);
    const resultado = esquema.safeParse(valores);
    if (!resultado.success) {
      const nuevos: Partial<Record<keyof Campos, string>> = {};
      resultado.error.issues.forEach((i) => {
        const campo = i.path[0] as keyof Campos;
        if (!nuevos[campo]) nuevos[campo] = i.message;
      });
      setErrores(nuevos);
      return;
    }

    setEstado("enviando");
    const { error } = await supabase.from("leads").insert({
      ...resultado.data,
      origen: typeof window !== "undefined" ? window.location.pathname : "/",
    });

    if (error) {
      setEstado("idle");
      setErrorEnvio(
        "No pudimos enviar su solicitud. Intente de nuevo o escríbanos a " + contacto.correo + ".",
      );
      return;
    }

    setEstado("listo");
    setValores(inicial);
  };

  const textoClaro = conFondoNavy;

  return (
    <section
      id="contacto"
      className={conFondoNavy ? "bg-navy py-20 sm:py-24" : "border-b border-hairline py-20 sm:py-24"}
    >
      <div className="container-encudex grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <h2
            className={`tracking-tightish text-[28px] font-semibold sm:text-[34px] ${textoClaro ? "text-navy-foreground" : "text-navy"}`}
          >
            {contacto.titulo}
          </h2>
          <p
            className={`measure mt-5 text-[17px] ${textoClaro ? "text-navy-muted" : "text-muted-foreground"}`}
          >
            {contacto.intro}
          </p>
          <p className={`mt-6 text-[15px] ${textoClaro ? "text-navy-muted" : "text-muted-foreground"}`}>
            {contacto.correo}
          </p>
        </Reveal>

        <Reveal delay={80}>
          {estado === "listo" ? (
            <div
              role="status"
              className="rounded-md border border-hairline bg-card p-8 text-center sm:p-10"
            >
              <CheckCircle2 className="mx-auto size-8 text-sage" strokeWidth={1.5} />
              <h3 className="mt-4 text-[20px] font-semibold text-navy">Recibimos su solicitud</h3>
              <p className="mx-auto mt-2 max-w-[42ch] text-[16px] text-muted-foreground">
                Le respondemos en menos de 24 horas hábiles al correo que nos dejó.
              </p>
            </div>
          ) : (
            <form
              onSubmit={enviar}
              noValidate
              className="rounded-md border border-hairline bg-card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Campo id="nombre" etiqueta="Nombre" error={errores.nombre}>
                  <Input
                    id="nombre"
                    value={valores.nombre}
                    onChange={(e) => set("nombre", e.target.value)}
                    autoComplete="name"
                    className={claseCampo}
                    aria-invalid={!!errores.nombre}
                  />
                </Campo>
                <Campo id="empresa" etiqueta="Empresa u organización" error={errores.empresa}>
                  <Input
                    id="empresa"
                    value={valores.empresa}
                    onChange={(e) => set("empresa", e.target.value)}
                    autoComplete="organization"
                    className={claseCampo}
                    aria-invalid={!!errores.empresa}
                  />
                </Campo>
                <Campo id="correo" etiqueta="Correo corporativo" error={errores.correo}>
                  <Input
                    id="correo"
                    type="email"
                    value={valores.correo}
                    onChange={(e) => set("correo", e.target.value)}
                    autoComplete="email"
                    className={claseCampo}
                    aria-invalid={!!errores.correo}
                  />
                </Campo>
                <Campo id="telefono" etiqueta="Teléfono" error={errores.telefono}>
                  <Input
                    id="telefono"
                    type="tel"
                    value={valores.telefono}
                    onChange={(e) => set("telefono", e.target.value)}
                    autoComplete="tel"
                    className={claseCampo}
                    aria-invalid={!!errores.telefono}
                  />
                </Campo>
                <Campo
                  id="tipo_organizacion"
                  etiqueta="Tipo de organización"
                  error={errores.tipo_organizacion}
                >
                  <select
                    id="tipo_organizacion"
                    value={valores.tipo_organizacion}
                    onChange={(e) => set("tipo_organizacion", e.target.value)}
                    className={claseCampo + " h-[46px]"}
                    aria-invalid={!!errores.tipo_organizacion}
                  >
                    <option value="">Seleccione una opción</option>
                    {contacto.tiposOrganizacion.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Campo>
                <Campo
                  id="volumen"
                  etiqueta="Volumen mensual estimado de entrevistas"
                  error={errores.volumen}
                >
                  <select
                    id="volumen"
                    value={valores.volumen}
                    onChange={(e) => set("volumen", e.target.value)}
                    className={claseCampo + " h-[46px]"}
                    aria-invalid={!!errores.volumen}
                  >
                    <option value="">Seleccione un rango</option>
                    {contacto.volumenes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Campo>
              </div>

              <div className="mt-5">
                <Campo id="mensaje" etiqueta="Mensaje" error={errores.mensaje}>
                  <Textarea
                    id="mensaje"
                    rows={5}
                    value={valores.mensaje}
                    onChange={(e) => set("mensaje", e.target.value)}
                    placeholder="Tipo de estudio, instrumento y tamaño de muestra."
                    className={claseCampo}
                    aria-invalid={!!errores.mensaje}
                  />
                </Campo>
              </div>

              {errorEnvio && (
                <p role="alert" className="mt-5 text-[15px] text-destructive">
                  {errorEnvio}
                </p>
              )}

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-navy px-6 py-3 font-medium text-navy-foreground transition-colors duration-150 hover:bg-navy/90 disabled:opacity-70"
              >
                {estado === "enviando" && <Loader2 className="size-4 animate-spin" />}
                {estado === "enviando" ? "Enviando…" : "Agendar demostración"}
              </button>
              <p className="mt-3 text-[13px] text-muted-foreground">{contacto.nota}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Campo({
  id,
  etiqueta,
  error,
  children,
}: {
  id: string;
  etiqueta: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-1.5 block text-[14px] font-medium text-navy">
        {etiqueta}
      </Label>
      {children}
      {error && (
        <p className="mt-1.5 text-[13px] text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
