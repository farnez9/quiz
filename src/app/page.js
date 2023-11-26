import Image from "next/image";
import Link from "next/link";
import logoImage from "../../assets/imgs/logo.svg";

export default function Home() {
  return (
    <div className="h-100">
      <h2 className="text-white font-bold text-center my-8 lg:mt-12">
        Ready for the quiz?
      </h2>

      <Image
        src={logoImage}
        width={250}
        height={250}
        alt="exclamation mark logo"
        className="rounded-full mt-32 mx-auto"
      />

      <div className="flex justify-center mt-20">
        <Link
          href="/home"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Let&#39;s quiz
        </Link>
      </div>
    </div>
  );
}
