import { describe, expect, it } from "vitest";
import { parseFormSubmitResponse } from "@/lib/formsubmit";

describe("FormSubmit response handling", () => {
  it("reports success only when FormSubmit confirms success", () => {
    expect(parseFormSubmitResponse(200, { success: "true", message: "The form was submitted successfully." }).ok).toBe(true);
  });

  it("shows FormSubmit's real error when the form needs activation", () => {
    const r = parseFormSubmitResponse(200, { success: "false", message: "This form needs Activation." });
    expect(r).toEqual({ ok: false, message: "This form needs Activation." });
  });

  it("treats an unreadable response as a failure", () => {
    expect(parseFormSubmitResponse(500, null).ok).toBe(false);
  });
});
