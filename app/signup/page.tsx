"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
};

export default function SignupPage() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(data.email)) {
      newErrors.email = "Enter a valid email";
    }

    return newErrors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    console.log({ ...formData });
    setIsSubmitted(true);
    setFormData(initialData);
  };

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 p-6">
      <section className="rounded-2xl border border-slate-200 p-8 shadow-sm">
        <header className="mb-6 space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Join the list
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Sign up for updates
          </h1>
          <p className="text-sm text-slate-600">
            Fill in your details and we&apos;ll keep you posted. Your information
            stays on this page and is logged to the console for now.
          </p>
        </header>
        <form className="space-y-5" noValidate onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-800" htmlFor="firstName">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={(event) => handleChange(event, "firstName")}
              className={`rounded-lg border px-4 py-2 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                errors.firstName ? "border-red-500" : "border-slate-200"
              }`}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-800" htmlFor="lastName">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={(event) => handleChange(event, "lastName")}
              className={`rounded-lg border px-4 py-2 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                errors.lastName ? "border-red-500" : "border-slate-200"
              }`}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-800" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(event) => handleChange(event, "email")}
              className={`rounded-lg border px-4 py-2 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 ${
                errors.email ? "border-red-500" : "border-slate-200"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Create account
          </button>
          {isSubmitted && (
            <p className="text-sm text-green-600">
              Thanks! Your details were logged to the console.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
