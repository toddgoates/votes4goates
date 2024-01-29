export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-50 text-gray-900 p-4 rounded shadow-lg">
      {children}
    </section>
  );
}
