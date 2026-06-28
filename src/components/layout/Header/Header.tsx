import Container from "@/src/components/ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="relative flex h-24 items-center justify-between">
          <Logo />

          <Navigation />

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}