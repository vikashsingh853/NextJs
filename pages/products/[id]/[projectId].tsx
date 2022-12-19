import { useRouter } from "next/router";

export default function SpecialProjectDetails() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <>
      <span className="text-3xl">
        special project list for a project details for {router.query.projectId}
      </span>
    </>
  );
}
