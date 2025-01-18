export default function About() {
  return (
    <>
      <h1 className="my-12 text-center text-2xl font-semibold capitalize">About us</h1>

      <section className="container mb-20 grid gap-8 hyphens-auto text-pretty md:grid-cols-2">
        <img
          src="/images/about-1.jpg"
          alt="Emerald lake with snow-covered mountains in Braies, Italy"
          className="h-full rounded-md object-cover"
        />

        <div className="justify-self-end md:max-w-prose">
          <h2 className="mb-4 text-xl font-semibold capitalize">Our mission</h2>
          <p className="mb-8">
            At Holidaze, we believe every trip should be unforgettable. Whether you're planning a
            lakeside retreat, a mountain adventure, or a cozy city escape, we connect travelers with
            curated venues to suit their needs.
          </p>

          <p>
            Founded with a passion for travel, Holidaze serves both explorers and hosts. Our
            platform simplifies discovering, managing, and booking unique venues, ensuring an
            effortless experience for all.
          </p>
        </div>
      </section>

      <section className="container mb-20 grid gap-8 hyphens-auto text-pretty md:grid-cols-2">
        <img
          src="/images/about-2.jpg"
          alt="Countryside street in Selva di Val Gardena, Italy"
          className="h-full rounded-md object-cover md:order-last"
        />

        <div className="md:max-w-prose">
          <h2 className="mb-4 text-xl font-semibold capitalize">Why us</h2>
          <p className="mb-8">
            Choosing the right platform to book your next stay or list your venue is key. At
            Holidaze, we prioritize simplicity, trust, and unique experiences, guaranteeing a
            seamless process for both travelers and hosts.
          </p>

          <p>
            We offer unmatched support, tailored services, and a network of verified venues,
            connecting you with the best opportunities for unforgettable holidays, no matter where
            your adventure takes you.
          </p>
        </div>
      </section>
    </>
  );
}
