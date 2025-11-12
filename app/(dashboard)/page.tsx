import { ThemeSelector, ThemeToggle } from "@/components/layouts/theme-switcher";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <ThemeToggle />
      <ThemeSelector />
    </div>
  );
}
