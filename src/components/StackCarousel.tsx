import TechCard from './utils/TechCard';
import { mainStack, techCategories } from '@/data/arrayCategories';

const StackCarousel = () => {
  return (
    <section className="mt-4 md:mt-10 md:px-10">
      <h3 className="text-3xl font-semibold mb-6 md:mt-20 text-center md:text-left">
        Main Stack
      </h3>

      <div className="flex justify-center md:justify-start gap-4 flex-wrap">
        {mainStack.map((tech) => (
          <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-10">
        {techCategories.map((category) => (
          <div key={category.title} className="mt-4 md:mt-10">
            <h4 className="font-semibold mb-3 text-xl text-center md:text-left">
              {category.title}
            </h4>
            <div className="flex justify-center md:justify-start gap-3 flex-wrap">
              {category.techs.map((tech) => (
                <TechCard key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackCarousel;
