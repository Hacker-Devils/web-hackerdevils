import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid">
      <div className="t ph s12">
        <div>
          <h1>Wrong answer.</h1>
          <p>That page doesn’t exist. Try the home page or this week’s problems on Discord.</p>
        </div>
        <Link className="btn p" href="/">
          Back home
        </Link>
      </div>
    </div>
  );
}
