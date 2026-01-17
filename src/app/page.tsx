import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import StackCarousel from '@/components/StackCarousel';
import Container from '@/components/utils/Container';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Container>
        <Header />
        <StackCarousel />
        <Projects />
      </Container>
    </div>
  );
}
