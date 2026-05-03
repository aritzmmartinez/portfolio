"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Send, Check } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS env vars not configured");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="user_name"
          className="text-sm font-medium text-foreground"
        >
          {t("contact.form.name")}
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          required
          placeholder={t("contact.form.namePlaceholder")}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-muted-foreground transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="user_email"
          className="text-sm font-medium text-foreground"
        >
          {t("contact.form.email")}
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          placeholder={t("contact.form.emailPlaceholder")}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-muted-foreground transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("contact.form.messagePlaceholder")}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-muted-foreground transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full relative px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2 focus:ring-offset-background transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span
          className={`inline-flex items-center gap-2 ${status === "sending" ? "opacity-0" : ""}`}
        >
          {status === "success" ? (
            <>
              <Check className="h-4 w-4" />
              {t("contact.form.success")}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t("contact.form.submit")}
            </>
          )}
        </span>
        {status === "sending" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
            />
          </span>
        )}
      </button>

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 text-center"
        >
          {t("contact.form.error")}
        </motion.p>
      )}
    </form>
  );
}
