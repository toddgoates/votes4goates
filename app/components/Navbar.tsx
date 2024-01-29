import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white mb-10">
      <div className="container p-4">
        <div className="flex justify-around">
          <Navlink href="#about">About</Navlink>
          <Navlink href="#policies">Policies</Navlink>
          <Navlink href="#shop">Shop</Navlink>
          <Navlink href="#donate">Donate</Navlink>
        </div>
      </div>
    </nav>
  );
}
