import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  const products = [
    { id: "elec_prod", name: "Electronics" },
    { id: "mob_prod", name: "Mobiles" },
  ];

  return (
    <>
      <span className="text-3xl">Product page </span>

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* another way to build link */}
      <span className="text-3xl">Product page another way link generate</span>

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: "/products/[id]",
                query: { id: item.id },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
