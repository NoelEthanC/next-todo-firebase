import { getServerSession } from "next-auth";
import AuthSection from "./nav-auth-section";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="max-w-xl bg-gray-950 p-4 mt-4 shadow-md items-center text-blue-50 rounded-full mx-auto flex justify-between   ">
      <h1 className="text-2xl font-bold  ">
        <Link href="/">todoApp</Link>
      </h1>
      <ul className="flex space-x-4 items-center ">
        <Link href="/" className="">
          Home
        </Link>
        <AuthSection session={session} />
      </ul>
    </nav>
  );
};

export default Navbar;
