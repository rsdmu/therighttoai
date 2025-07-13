"use client";
import { useState } from "react";

export default function EndorseForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("Name"),
      email: formData.get("Email"),
      joinMailingList: formData.get("Join mailing list"),
      volunteer: formData.get("Volunteer"),
      comments: formData.get("Comments"),
    };
    await fetch("/api/endorse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mx-auto mt-8 max-w-md text-center text-sm">
        Thank you for your endorsement!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-md space-y-4 text-sm"
    >
      <div>
        <label className="mb-1 block font-medium" htmlFor="name">
          Name (of individual or organization)*
        </label>
        <input
          id="name"
          name="Name"
          required
          type="text"
          className="w-full rounded border border-foreground bg-transparent px-3 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block font-medium" htmlFor="email">
          Email address*
        </label>
        <input
          id="email"
          name="Email"
          required
          type="email"
          className="w-full rounded border border-foreground bg-transparent px-3 py-2"
        />
      </div>
      <fieldset>
        <legend className="mb-1 font-medium">
          Would you like to join the Right to AI mailing list?
        </legend>
        <div className="flex gap-6">
          <label>
            <input
              type="radio"
              name="Join mailing list"
              value="Yes"
              required
              className="mr-1"
            />
            Yes
          </label>
          <label>
            <input type="radio" name="Join mailing list" value="No" className="mr-1" />
            No
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-1 font-medium">
          Would you like to volunteer or contribute to one of our ongoing projects?
        </legend>
        <div className="flex gap-6">
          <label>
            <input
              type="radio"
              name="Volunteer"
              value="Yes"
              required
              className="mr-1"
            />
            Yes
          </label>
          <label>
            <input type="radio" name="Volunteer" value="No" className="mr-1" />
            No
          </label>
        </div>
      </fieldset>
      <div>
        <label className="mb-1 block font-medium" htmlFor="comments">
          Comments (optional)
        </label>
        <textarea
          id="comments"
          name="Comments"
          className="w-full rounded border border-foreground bg-transparent px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="mt-6 rounded border border-foreground px-6 py-2 text-sm"
      >
        Submit
      </button>
    </form>
  );
}
