import Gallery from "../../components/Gallery";
import Section from "../../components/Section";

export default function HomePage() {
  const images = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
  ];

  return (
    <>
      <Gallery images={images} width="1440px" height="681px" radius="0px" />

      <Section title="Coleções em destaque" titleAlign="center">
        <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
          <img src="/collection-1.png" alt="Coleção 1" />
          <img src="/collection-2.png" alt="Coleção 2" />
          <img src="/collection-3.png" alt="Coleção 3" />
        </div>
      </Section>
    </>
  );
}
