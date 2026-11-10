"use client";

import { useEffect, useReducer } from "react";

/**
 * The clock in Rio Branco. The Acre timezone is UTC−5, an hour behind Brasília and
 * two behind most of the country's business hours — worth showing to anyone about to
 * call. Rendered on both sides and reconciled with suppressHydrationWarning: the
 * server's clock and the visitor's will never agree to the minute, and that is fine.
 */
const formatador = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Rio_Branco",
  hour: "2-digit",
  minute: "2-digit",
});

export function HoraLocal() {
  // The tick comes from the interval, never from the effect body.
  const [, redesenhar] = useReducer((n: number) => n + 1, 0);

  useEffect(() => {
    const relogio = window.setInterval(redesenhar, 30_000);
    return () => window.clearInterval(relogio);
  }, []);

  return (
    <span className="rodape-hora">
      <span aria-hidden="true" className="rodape-pulso" />
      <span suppressHydrationWarning>{formatador.format(new Date())}</span> em Rio Branco
    </span>
  );
}
