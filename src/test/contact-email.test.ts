import { describe, expect, it } from "vitest";
import { contact } from "@/data/site";

describe("Contact email configuration", () => {
  it("uses the requested email throughout the site", () => {
    expect(contact.email).toBe("sulemanae17@gmail.com");
  });

  it("sends contact submissions through FormSubmit's AJAX endpoint", () => {
    expect(contact.formEndpoint).toBe(`https://formsubmit.co/ajax/${contact.formSubmitId}`);
  });
});