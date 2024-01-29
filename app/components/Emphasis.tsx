export default function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-b-4 border-dashed border-blue-600">{children}</span>
  );
}
