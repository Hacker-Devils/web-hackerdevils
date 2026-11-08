import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui";
import { MainNav } from "./MainNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header-row">
          <Logo />
          <MainNav />
        </div>
      </Container>
    </header>
  );
}
