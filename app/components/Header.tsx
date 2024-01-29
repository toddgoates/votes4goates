export default function Header() {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center gap-4">
            <img
              src="/goat-logo.svg"
              alt="Goat Logo"
              className="bg-white p-4 rounded-full size-32 m-auto"
            />
            <h1 className="text-white text-2xl">Todd Goates for President</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
