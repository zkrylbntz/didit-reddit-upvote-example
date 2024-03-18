"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";

export function VoteButton({ label, isActive }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx(
        `border rounded border-zinc-600 px-3 py-2 hover:bg-pink-400 hover:text-black`,
        {
          "text-red-500": isActive,
        }
      )}
      disabled={pending}
    >
      {pending ? `Saving ${label}` : label}
    </button>
  );
}
