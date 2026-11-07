import { CodeBlock } from "@/components/ui";

/** Load balancer in front of two API servers, each backed by a cache and a database. */
export function SystemDesignFigure() {
  return (
    <figure className="figure">
      <svg className="diagram" viewBox="0 0 440 250" role="img" aria-label="Diagram: client, load balancer, two API servers, cache and database">
        <path d="M70 125H112M188 125H228M228 125V70H250M228 125V180H250M330 70H352M330 180H352M391 90V160" />
        <rect x="10" y="105" width="60" height="40" rx="4" />
        <text x="40" y="130" textAnchor="middle">
          Client
        </text>
        <rect className="diagram-focus" x="112" y="105" width="76" height="40" rx="4" />
        <text x="150" y="130" textAnchor="middle">
          Load bal.
        </text>
        <rect x="250" y="50" width="80" height="40" rx="4" />
        <text x="290" y="75" textAnchor="middle">
          API 1
        </text>
        <rect x="250" y="160" width="80" height="40" rx="4" />
        <text x="290" y="185" textAnchor="middle">
          API 2
        </text>
        <rect x="352" y="50" width="78" height="40" rx="4" />
        <text x="391" y="75" textAnchor="middle">
          Cache
        </text>
        <rect x="352" y="160" width="78" height="40" rx="4" />
        <text x="391" y="185" textAnchor="middle">
          Database
        </text>
      </svg>
    </figure>
  );
}

const kernel = [
  "__global__ void add(float *a, float *b, float *c) {",
  "  int i = blockIdx.x * blockDim.x + threadIdx.x;",
  "  c[i] = a[i] + b[i];",
  "}",
];

/** Four blocks of sixteen threads, with one block running and one thread picked out. */
export function GpuFigure() {
  return (
    <figure className="figure">
      <div className="thread-grid" aria-hidden="true">
        {Array.from({ length: 64 }, (_, i) => (
          <i key={i} className={i === 21 ? "is-picked" : i >= 16 && i < 32 ? "is-running" : undefined} />
        ))}
      </div>
      <CodeBlock lines={kernel} label="Example CUDA kernel" />
    </figure>
  );
}
