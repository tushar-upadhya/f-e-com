import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="h-[60vh] lg:h-[80vh] bg-hero bg-cover bg-no-repeat">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[54px] lg:text-[64px] uppercase tracking-[2px] leading-tight text-white text-center max-w-[800px] mb-8 font-primary">
            Experience hospitality at its finest
          </h1>
          <Button
            className="bg-accent hover:bg-accent-hover text-white font-secondary"
            size={"lg"}
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
