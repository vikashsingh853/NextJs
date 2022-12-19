import { useRouter } from "next/router";

export default function PortfolioDetails() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <h2>portfolio details {router.query.portfolioid}</h2>;
}
