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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameFeedback, setNameFeedback] = useState<string>("");
  const [emailFeedback, setEmailFeedback] = useState<string>("");
  const [messageFeedback, setMessageFeedback] = useState<string>("");
  const [formFeedback, setFormFeedback] = useState<{
    type: "success" | "error";
    message: string;
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

  async function handleFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormFeedback(null);
    setNameFeedback("");
    setEmailFeedback("");
    setMessageFeedback("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    let hasErrors = false;

    if (!trimmedName) {
      setNameFeedback("Please enter your name.");
      hasErrors = true;
    }

    if (!trimmedEmail) {
      setEmailFeedback("Please enter your email address.");
      hasErrors = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        setEmailFeedback("Please enter a valid email address.");
        hasErrors = true;
      }
    }

    if (!trimmedMessage) {
      setMessageFeedback("Please enter a message.");
      hasErrors = true;
    } else {
      const wordCount = trimmedMessage.split(/\s+/).filter(Boolean).length;
      if (wordCount < 5) {
        setMessageFeedback("Please include at least five words.");
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });
      const payload = await res.json().catch(() => null);

      if (!res.ok) {
        console.error("Failed to send", payload);
        const message = payload?.error ?? "Failed to send message.";
        setFormFeedback({ type: "error", message });
      } else {
        console.log("Message sent", payload);
        setFormFeedback({
          type: "success",
          message: "Message sent! I'll get back to you shortly.",
        });
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      const message =
        err instanceof Error
          ? err.message
          : "Unexpected error sending message.";
      setFormFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
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
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmission}>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                className="border rounded-md px-3 py-2 text-sm
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {nameFeedback && (
                <p className="text-xs text-red-600" role="alert">
                  {nameFeedback}
                </p>
              )}
            </div>

            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="border rounded-md px-3 py-2 text-sm
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {emailFeedback && (
              <p className="text-xs text-red-600" role="alert">
                {emailFeedback}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="border rounded-md px-3 py-2 text-sm resize-none
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {messageFeedback && (
              <p className="text-xs text-red-600" role="alert">
                {messageFeedback}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 bg-foreground text-background py-2 rounded-md hover:bg-foreground/90 transition-colors disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {formFeedback && (
            <p
              role="status"
              className={`text-sm ${
                formFeedback.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {formFeedback.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
