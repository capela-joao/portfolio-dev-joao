'use client';
import Image from 'next/image';
import AnimatedText from './utils/AnimatedText';
import SocialLink from './utils/SocialLink';
import { useTheme } from 'next-themes';

const Header = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      id="header"
      className="
      flex flex-col items-center gap-6
      md:px-6 md:gap-10
      lg:flex-row lg:justify-between
      lg:px-8 lg:gap-0
      py-12
      bg-background text-foreground
      "
    >
      <div className="space-y-4 max-w-xl">
        <h1 className="font-extrabold text-3xl md:text-4xl tracking-tight">
          <AnimatedText text="Olá, eu sou o João Paulo!" />
        </h1>

        <h2 className="font-bold text-xl text-gray-400">
          <AnimatedText text="Desenvolvedor Front-End" />
        </h2>

        <div className="space-y-1 text-foreground">
          <p>Desenvolvedor Front-End focado em interfaces web modernas.</p>
          <p>Trabalho com React, TypeScript, Next.js e TailwindCSS.</p>
          <p>
            Em constante evolução, buscando performance e boa experiência do
            usuário.
          </p>
        </div>

        <div className="flex gap-4 pt-2">
          {resolvedTheme === 'dark' ? (
            <SocialLink
              href="https://github.com/capela_joao"
              icon="/assets/socials/github-white-icon.png"
            />
          ) : (
            <SocialLink
              href="https://github.com/capela-joao"
              icon="/assets/socials/github-logo.png"
            />
          )}
          <SocialLink
            href="https://www.linkedin.com/in/joaopaulogoulart/"
            icon="/assets/socials/linkedin.png"
          />
        </div>
      </div>

      <Image
        priority
        src="/assets/perfil.jpeg"
        alt="Foto de João Paulo, desenvolvedor front-end."
        width={400}
        height={400}
        className="rounded-xl shadow-xl"
      />
    </section>
  );
};

export default Header;
