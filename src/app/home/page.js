import Card from "@/components/Card";
/* const */
import { subjects } from "../../../assets/const/subjects";

export default function Subject() {
  return (
    <main>
      <h2 className="text-white font-bold text-center my-8 lg:mt-12">
        Choose a subject...
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 lg:px-24">
        {subjects.map((subjects, index) => {
          return <Card icon={subjects.image} name={subjects.id} key={index} />;
        })}
      </div>
    </main>
  );
}
