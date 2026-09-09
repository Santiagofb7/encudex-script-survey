CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  nombre TEXT NOT NULL,
  empresa TEXT NOT NULL,
  correo TEXT NOT NULL,
  telefono TEXT,
  tipo_organizacion TEXT,
  volumen TEXT,
  mensaje TEXT,
  origen TEXT
);
GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cualquiera puede enviar el formulario" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);