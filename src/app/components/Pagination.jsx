import { POSTS_PER_PAGE } from "@/config";
import { db } from "@/db";

export async function Pagination({ currentPage = 1 }) {
  const { rows: postCount } = await db.query(`SELECT COUNT(*) FROM posts`);
  const count = postCount[0].count;
  const numOfPages = Math.ceil(count / POSTS_PER_PAGE);

  return (
    <ul className="flex space-x-3 text-2xl">
      {currentPage > 1 && (
        <li>
          <a
            href={currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`}
            className="p-2 hover:bg-zinc-800"
          >
            Previous
          </a>
        </li>
      )}
      {Array.from({ length: numOfPages }, (_, index) => (
        <li key={index}>
          <a
            href={index > 0 ? `/page/${index + 1}` : `/`}
            className="p-2 hover:bg-zinc-800"
          >
            {index + 1}
          </a>
        </li>
      ))}
      {currentPage < numOfPages && (
        <li>
          <a
            href={`/page/${currentPage + 1}`}
            className="p-2 hover:bg-zinc-800"
          >
            Next
          </a>
        </li>
      )}
    </ul>
  );
}
