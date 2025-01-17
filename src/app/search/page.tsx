import PostList from "@/components/posts/post-list";
import { redirect } from "next/navigation";
import { fetchPostsBySearchTerm } from "@/db/quaries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
