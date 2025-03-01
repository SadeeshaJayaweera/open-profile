import WorkingCard from "@/components/ui/WorkingCard";
import { Button } from "@/components/ui/button";

const Working = () => {
  return (
    <div className="border-2 flex justify-between items-center flex-col p-3">
      <div className="px-2">
         <div className="flex w-full justify-start my-2 text-[2rem] font-bold px-6">
        Working On
      </div>
      <section className="flex flex-wrap justify-around w-full ">
        <WorkingCard
          title={"Web Development"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
          }
        />
        <WorkingCard
          title={"Web Development"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
          }
        />
        <WorkingCard
          title={"Web Development"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
          }
        />
        <WorkingCard
          title={"Web Development"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error nisi in est corrupti nesciunt. Consequatur saepe nulla incidunt culpa. Sit saepe nemo iste maxime vero nihil quis aliquam officiis?"
          }
        />
      </section>

      <div className="my-4 flex  w-full justify-end px-6">
        <Button variant={"default"}>More</Button>
      </div>
      </div>
     
    </div>
  );
};

export default Working;
