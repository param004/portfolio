import KagePersonalizedScene from "@/components/KagePersonalizedScene";
import "@/shaders/threeui.css";

export const metadata = {
  title: "Param Pambhar - Full-stack developer",
  description:
    "The Kage temple experience running personalised portfolio copy: navigation, scroll scenes and a local Three.js world.",
};

export default function Home() {
  return (
    <div className="kage-shell">
      <KagePersonalizedScene />
    </div>
  );
}
