import ContactMeCard from './utils/ContactMeCard';
import { ContactMeData } from '@/data/arrayContactMe';

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="mt-4 md:mt-10 lg:mt-20 md:px-10 bg-background 
    text-foreground border-t border-border"
    >
      <h3
        className="font-bold text-2xl md:text-3xl text-foreground
       mb-4 md:mb-10 lg:mb-20 mt-4 md:mt-10 lg:mt-20"
      >
        Entre em contato comigo:
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 
          md:gap-4 mb-20"
      >
        {ContactMeData.map((data) => (
          <ContactMeCard
            key={data.id}
            id={data.id}
            name={data.name}
            link={data.link}
            description={data.description}
            icon={data.icon}
            darkmode={data.darkmode}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactMe;
