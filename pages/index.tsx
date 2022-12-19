import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="underline">Hello World !</h1>

      <section>
        <ul>
          <li>
            <Link href="/portfolio"> portfolio </Link>
          </li>
          <li>
            <Link href="/products">products</Link>
          </li>
          <li>
            <Link href="/blog/blog">blog</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

// file based routing , static and dynamic routing , navigaion between pages
