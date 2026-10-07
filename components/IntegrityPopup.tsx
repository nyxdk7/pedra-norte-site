"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./IntegrityPopup.module.css";

const STORAGE_KEY = "msm-integrity-popup-seen";

export default function IntegrityPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupSeen = sessionStorage.getItem(STORAGE_KEY);

    if (!popupSeen) {
      const timeoutId = window.setTimeout(() => setIsOpen(true), 0);

      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  function closePopup() {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      onClick={closePopup}
      role="presentation"
    >
      <section
        className={styles.popup}
        role="dialog"
        aria-modal="true"
        aria-labelledby="integrity-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={closePopup}
          aria-label="Fechar aviso"
        >
          ×
        </button>

        <span className={styles.label}>Integridade MSM</span>

        <h2 id="integrity-popup-title">
          Nosso Canal de Integridade está disponível
        </h2>

        <p>
          A MSM Industrial disponibiliza um canal seguro e confidencial para o
          envio de relatos, dúvidas e manifestações relacionadas à ética e à
          integridade.
        </p>

        <div className={styles.actions}>
          <Link
            href="/integridade"
            className={styles.primaryButton}
            onClick={closePopup}
          >
            Acessar o canal
          </Link>

          <button
            className={styles.secondaryButton}
            type="button"
            onClick={closePopup}
          >
            Continuar no site
          </button>
        </div>
      </section>
    </div>
  );
}
