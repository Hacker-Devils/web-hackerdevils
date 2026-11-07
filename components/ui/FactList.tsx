/** Label and value rows, for details like time and place. */
export function FactList({ items }: { items: readonly { label: string; value: string }[] }) {
  return (
    <dl className="fact-list">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
