import Image from "next/image";
import Link from "next/link";

export default function Card({ icon, title }) {
  return (
    <Link
      href={{
        pathname: "/quiz",
      }}
      className="rounded-lg bg-white py-6 shadow shadow-lg hover:scale-105 transition ease-in-out hover:cursor-pointer"
    >
      <div className="flex justify-center">
        <Image height={120} width={120} src={icon} alt="subject icon" />
      </div>
      <p className="pt-8 font-bold text-blue text-center">
        {title.toUpperCase()}
      </p>
    </Link>
  );
}
