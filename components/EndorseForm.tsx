"use client";

export default function EndorseForm() {
  return (
    <form
      action="mailto:contact@therighttoai.org?subject=Right%20to%20AI%20Support"
      method="POST"
      encType="text/plain"
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
