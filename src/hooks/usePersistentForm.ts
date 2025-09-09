import { useEffect } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { ZodSchema } from "zod";

type PersistentFormOptions<T extends Record<string, unknown>> = {
  key: string; // localStorage key
  schema: ZodSchema<T>; // zod schema strongly typed
  defaultValues: T; // default values
};

export function usePersistentForm<T extends Record<string, unknown>>({
  key,
  defaultValues,
}: PersistentFormOptions<T>): UseFormReturn<T> {
  // Load saved values if they exist
  const savedValues = (() => {
    if (typeof window === "undefined") return defaultValues;
    try {
      const stored = localStorage.getItem(key);
      return stored ? { ...defaultValues, ...JSON.parse(stored) } : defaultValues;
    } catch {
      return defaultValues;
    }
  })();

  const form = useForm<T>({
    defaultValues: savedValues,
  });

  // Persist values on change
  useEffect(() => {
    const subscription = form.watch((values) => {
      localStorage.setItem(key, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [form, key]);

  return form;
}
