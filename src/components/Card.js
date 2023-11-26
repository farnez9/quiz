import Image from "next/image";
import Link from "next/link";

export default function Card({ icon, name }) {
  return (
    <Link
      href={`/quiz/${name}`}
      className="rounded-lg bg-slate-200 py-6 shadow shadow-lg hover:scale-105 transition ease-in-out hover:bg-slate-100 hover:cursor-pointer"
    >
      <div className="flex justify-center">
        <Image height={120} width={120} src={icon} alt={`${name} icon`} />
      </div>
      <p className="pt-8 font-bold text-blue text-center">
        {name.toUpperCase()}
      </p>
    </Link>
  );
}
