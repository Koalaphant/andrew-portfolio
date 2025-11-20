"use client";

import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

type ContactFormProps = {
  onClose: () => void;
};

export default function ContactForm({ onClose }: ContactFormProps) {
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevOverflowRef = useRef<{
    body: string;
    html: string;
  } | null>(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsVisible(true));

    if (typeof document !== "undefined") {
      const { body } = document;
      const html = document.documentElement;
      prevOverflowRef.current = {
        body: body.style.overflow,
        html: html.style.overflow,
      };
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    }

    return () => {
      cancelAnimationFrame(frameId);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      if (typeof document !== "undefined" && prevOverflowRef.current) {
        const { body } = document;
        const html = document.documentElement;
        body.style.overflow = prevOverflowRef.current.body;
        html.style.overflow = prevOverflowRef.current.html;
      }
    };
  }, []);

  function handleClose() {
    if (closeTimeoutRef.current) return;

    setIsVisible(false);
    closeTimeoutRef.current = setTimeout(() => {
      closeTimeoutRef.current = null;
      onClose();
    }, 250);
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white dark:bg-popover dark:text-popover-foreground p-5 rounded-md w-[90vw] max-w-sm relative flex flex-col gap-4 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <button
          type="button"
          aria-label="Close contact form"
          onClick={handleClose}
          className="absolute top-3 right-3 cursor-pointer text-lg"
        >
          <RxCross2 />
        </button>

        <h2 className="font-bold text-xl text-center">Get in touch!</h2>
      </div>
    </div>
  );
}
