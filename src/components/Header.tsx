'use client';
import Image from 'next/image';
import AnimatedText from './utils/AnimatedText';
import SocialLink from './utils/SocialLink';

const Header = () => {
  return (
    <section className="mt-20 flex items-start justify-between gap-10 px-10">
      <div className="space-y-4 max-w-xl">
        <h1 className="font-extrabold text-5xl">
          <AnimatedText text="Olá, eu sou o João Paulo!" />
        </h1>

        <h2 className="font-bold text-2xl text-gray-400">
          <AnimatedText text="Desenvolvedor Front-End" />
        </h2>

        <div className="space-y-1 text-muted-foreground">
          <p>Desenvolvedor Front-End focado em interfaces web modernas.</p>
          <p>Trabalho com React, TypeScript, Next.js e TailwindCSS.</p>
          <p>
            Em constante evolução, buscando performance e boa experiência do
            usuário.
          </p>
        </div>

        <div className="flex gap-4 pt-2">
          <SocialLink
            href="https://github.com/capela-joao"
            icon="/assets/github-logo.png"
          />
          <SocialLink
            href="https://www.linkedin.com/in/joaopaulogoulart/"
            icon="/assets/linkedin.png"
          />
        </div>
      </div>

      <Image
        src="/assets/perfil.jpeg"
        alt="foto-de-perfil"
        width={400}
        height={400}
        className="rounded-xl shadow-xl"
      />
    </section>
  );
};

export default Header;
