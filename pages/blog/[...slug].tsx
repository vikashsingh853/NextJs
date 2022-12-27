import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  return (
    <>
      <h1 className="underline">
        blog posts {router.query.slug} today changed
      </h1>
    </>
  );
}
