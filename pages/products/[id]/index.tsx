import { useRouter } from "next/router";

export default function ProjectList() {
  const router = useRouter();

  function buttonHandlerA() {
    router.push(`/products/${router.query.id}/vikash`); //if we use replace instead of push method then we can't go to back.
    //  another way
    // router.push({
    //   pathname: "/products/[id]/[projectid]",
    //   query: { id: router.query.id, projectid: "vikash" },
    // });
  }

  return (
    <>
      <span className="text-3xl ">
        Project list page for a client {router.query.id}
      </span>
      <button onClick={buttonHandlerA}>load projects</button>
    </>
  );
}
