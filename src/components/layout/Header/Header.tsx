import Container from "@/src/components/ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white ">
      <Container>
        <div className="relative flex h-16 items-center lg:h-24">
          <Logo />

<div className="ml-auto hidden md:block">
  <Navigation />
</div>

<div className="ml-auto md:hidden">
  <MobileMenu />
</div>
        </div>
      </Container>
    </header>
  );
}