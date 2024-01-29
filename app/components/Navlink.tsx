export default function Navlink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} className="text-lg hover:text-blue-200">
      {children}
    </a>
  );
}
