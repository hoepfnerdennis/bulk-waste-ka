import { de } from "./translations";

export function t(key: keyof typeof de, options?: Record<string, unknown>) {
  let translation = de[key];
  if (options) {
    Object.entries(options).forEach(
      ([option, value]) =>
        (translation = translation.replaceAll(`{{${option}}}`, `${value}`))
    );
  }
  return translation;
}
