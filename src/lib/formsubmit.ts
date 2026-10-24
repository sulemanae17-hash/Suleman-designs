export type SubmitResult = { ok: true; message: string } | { ok: false; message: string };

/** Interpret a FormSubmit AJAX response. Success only when FormSubmit says so. */
export function parseFormSubmitResponse(status: number, body: unknown): SubmitResult {
  const data = (body ?? {}) as { success?: unknown; message?: unknown };
  const message = typeof data.message === "string" && data.message ? data.message : "";
  const success = data.success === true || data.success === "true";
  if (status >= 200 && status < 300 && success) {
    return { ok: true, message: message || "Message sent." };
  }
  return { ok: false, message: message || `FormSubmit returned an error (HTTP ${status}).` };
}

export async function submitToFormSubmit(endpoint: string, payload: Record<string, string>): Promise<SubmitResult> {
  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    return { ok: false, message: `Network error: ${e instanceof Error ? e.message : String(e)}` };
  }
  let body: unknown = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }
  return parseFormSubmitResponse(res.status, body);
}
