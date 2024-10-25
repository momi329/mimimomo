import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl p-20">
      Link to{" "}
      <Link className="cursor-pointer underline text-pink-400" href="/editor">
        Editor
      </Link>
    </div>
  );
}
