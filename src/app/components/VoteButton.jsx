"use client";

import { useFormStatus } from "react-dom";

export function VoteButton({ label }) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? `Saving ${label}` : label}</button>
  );
}
