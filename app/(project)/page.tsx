import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center ">
     <h1>Landing Page</h1>
       <Link href="/login">
       <button>Login</button>
       </Link>
    </div>
  );
}
