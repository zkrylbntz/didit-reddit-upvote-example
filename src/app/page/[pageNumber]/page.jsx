import { PostList } from "../../components/PostList";

export default async function PageNumberRoute({ params }) {
  return (
    <div>
      Page: {params.pageNumber}
      <PostList currentPage={parseInt(params.pageNumber, 10)} />
    </div>
  );
}
