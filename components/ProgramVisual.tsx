import type { ProgramId } from "@/lib/content";

function Practice() {
  const easy = ["Valid Anagram", "Best Time to Buy Stock", "Merge Two Lists"];
  const medium = ["Course Schedule", "Top K Frequent", "Coin Change"];
  return (
    <div className="vis-split">
      {[
        ["Easy group", easy],
        ["Medium group", medium],
      ].map(([label, list]) => (
        <div key={label as string} className="vis-card">
          <div className="vis-head mono">
            <span>{label as string}</span>
            <span>3 / 3</span>
          </div>
          {(list as string[]).map((p) => (
            <div key={p} className="vis-row">
              {p}
              <span className="ok">✓</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Codeathon() {
  const board = [
    ["01", "segfault_sun", "5 / 5"],
    ["02", "two_pointers", "5 / 5"],
    ["03", "devils_dp", "4 / 5"],
    ["04", "you", "4 / 5"],
    ["05", "off_by_one", "3 / 5"],
  ];
  return (
    <div>
      <div className="vis-timer">
        01:12:40
        <small>TIME REMAINING · 3 HR CONTEST</small>
      </div>
      <div className="vis-card">
        <div className="vis-head mono">
          <span>Live leaderboard</span>
          <span>Solved</span>
        </div>
        {board.map(([rank, name, solved]) => (
          <div key={rank} className={`vis-row${name === "you" ? " me" : ""}`}>
            <span>
              <span className="mono">{rank}</span>&nbsp;&nbsp;{name}
            </span>
            <span className="mono">{solved}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Interviews() {
  return (
    <div className="thread">
      <div className="bubble">
        <span className="mono">Interviewer</span>
        Before you code: what is the time complexity of your approach?
      </div>
      <div className="bubble you">
        <span className="mono">You</span>
        O(n log n) for the sort, then one linear pass. I can get it to O(n) with a hash set.
      </div>
      <div className="bubble">
        <span className="mono">Interviewer</span>
        Good. Walk me through the edge cases.
      </div>
      <div className="score">
        <span>
          Communication <b>4/5</b>
        </span>
        <span>
          Correctness <b>5/5</b>
        </span>
        <span>
          Edge cases <b>3/5</b>
        </span>
      </div>
    </div>
  );
}

function SystemDesign() {
  return (
    <svg className="diagram" viewBox="0 0 440 250" role="img" aria-label="Diagram: client, load balancer, two API servers, cache and database">
      <path d="M70 125H112M188 125H228M228 125V70H250M228 125V180H250M330 70H352M330 180H352M370 88V162" />
      <rect x="10" y="105" width="60" height="40" rx="4" />
      <text x="40" y="130" textAnchor="middle">
        CLIENT
      </text>
      <rect x="112" y="105" width="76" height="40" rx="4" className="hot" />
      <text x="150" y="124" textAnchor="middle">
        LB
      </text>
      <text x="150" y="137" textAnchor="middle" className="sub">
        round robin
      </text>
      <rect x="250" y="50" width="80" height="40" rx="4" />
      <text x="290" y="75" textAnchor="middle">
        API · 1
      </text>
      <rect x="250" y="160" width="80" height="40" rx="4" />
      <text x="290" y="185" textAnchor="middle">
        API · 2
      </text>
      <rect x="352" y="50" width="78" height="40" rx="4" />
      <text x="391" y="69" textAnchor="middle">
        CACHE
      </text>
      <text x="391" y="82" textAnchor="middle" className="sub">
        redis · ttl
      </text>
      <rect x="352" y="160" width="78" height="40" rx="4" />
      <text x="391" y="179" textAnchor="middle">
        DB
      </text>
      <text x="391" y="192" textAnchor="middle" className="sub">
        primary
      </text>
    </svg>
  );
}

function Gpu() {
  // 4 blocks × 16 threads; one block is "running", one thread is highlighted.
  return (
    <div>
      <div className="threads" aria-hidden="true">
        {Array.from({ length: 64 }, (_, i) => (
          <i key={i} className={i === 21 ? "lit" : i >= 16 && i < 32 ? "on" : ""} />
        ))}
      </div>
      <pre className="vis-card kernel">
        <span className="tok-k">__global__</span> void <span className="tok-f">add</span>(float *a, float *b, float *c) {"{\n"}
        {"  "}int i = blockIdx.x * blockDim.x + threadIdx.x;{"\n"}
        {"  "}c[i] = a[i] + b[i];{"\n"}
        {"}"}
      </pre>
    </div>
  );
}

function Soon() {
  return (
    <div>
      {[
        ["Inference", "Batching, quantization, KV caches"],
        ["Backend", "APIs, databases, auth, queues"],
      ].map(([name, body]) => (
        <div key={name} className="soon-box">
          <div>
            <strong>{name}</strong>
            <small>{body}</small>
          </div>
          <span className="mono">Soon</span>
        </div>
      ))}
    </div>
  );
}

const VISUALS: Record<ProgramId, () => React.JSX.Element> = {
  practice: Practice,
  codeathon: Codeathon,
  interviews: Interviews,
  "system-design": SystemDesign,
  gpu: Gpu,
  "inference-backend": Soon,
};

/** Drawing-board frame with a small illustration of each program. */
export default function ProgramVisual({ id }: { id: ProgramId }) {
  const El = VISUALS[id];
  return (
    <div className="visual">
      <El />
    </div>
  );
}
