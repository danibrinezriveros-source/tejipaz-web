import Container from "@/src/components/ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white ">
      <Container>
        <div className="relative flex h-16 lg:h-24 items-center">
          <Logo />

          <div className="ml-auto">
            <Navigation />
          </div>

          <div className="ml-4 flex md:hidden">
  <MobileMenu />
</div>
        </div>
      </Container>
    </header>
  );
}