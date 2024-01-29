export default function Button({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  props: any;
}) {
  if (href) {
    return (
      <a
        href={href}
        className="bg-blue-500 px-3 py-2 text-white font-semibold rounded hover:bg-blue-700"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="bg-blue-500 px-3 py-2 text-white font-semibold rounded hover:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
}
