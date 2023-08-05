export function getEnvVariable(key: string, fallback: string): string {
  return import.meta.env[key] || fallback
}
