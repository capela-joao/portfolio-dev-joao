import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      aria-label="Sobre Mim"
      className="mt-4 md:mt-10 md:px-10 bg-background text-foreground"
    >
      <h3 className="font-semibold text-2xl md:text-3xl">Sobre Mim</h3>
      <p className="space-y-4 mt-4 md:mt-10 text-justify">
        Sou desenvolvedor front-end com mais de 4 anos de experiência na
        construção de aplicações web em produção. Ao longo da minha trajetória,
        trabalhei com sistemas educacionais, ERPs e plataformas de varejo, o que
        me deu uma visão ampla de diferentes domínios e desafios técnicos.
      </p>
      <p className="space-y-4 mt-2 md:mt-4 text-justify">
        Atualmente, estou focado no ecossistema React, com TypeScript, Next.js e
        TailwindCSS, criando interfaces modernas, escaláveis e com atenção à
        performance e acessibilidade. Gosto de transformar designs complexos em
        componentes reutilizáveis e bem estruturados. Minha base sólida em HTML,
        CSS e JavaScript, combinada com boas práticas de Git e engenharia de
        software, me permite colaborar eficientemente em times e entregar
        soluções que realmente agregam valor ao usuário final.
      </p>
      <p className="space-y-4 mt-2 md:mt-4 text-justify">
        Quando não estou codando, estou estudando novos padrões de front-end,
        explorando formas de otimizar a experiência do usuário e me mantendo
        atualizado com as tendências da área. Vamos construir algo incrível
        juntos?
      </p>
    </section>
  );
};

export default AboutMe;
