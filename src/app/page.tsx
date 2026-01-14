import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import StackCarousel from '@/components/StackCarousel';
import Container from '@/components/utils/Container';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Container>
        <Header />
        <StackCarousel />
      </Container>
    </div>
  );
}
