export default function Home() {
  return (
    <main className="container h-screen px-10 py-32 mx-auto md:py-60">
      <section className="flex flex-col h-full gap-20 md:gap-0 md:justify-between">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <h1 className="flex flex-col font-bold uppercase text-7xl md:text-8xl lg:text-9xl">
            <span>Hit Me</span>
            <span>Up</span>
          </h1>
          <h3 className="text-lg">
            Creative works made by{" "}
            <a
              href="https://instagram.com/ardhptr21"
              target="_blank"
              rel="noreferrer noopener"
              className="italic font-semibold underline"
            >
              ardhptr21
            </a>
          </h3>
        </div>
        <div className="flex justify-end">
          <p className="max-w-xl md:text-lg lg:max-w-3xl">
            Self project, yes you can `Hit Me Up` with your message. It{"'"}s
            totally anonymous, I won{"'"}t know who you are. You can send me
            message, when you have the link to the specific topic that will I
            create later. Enjoy, just `Hit Me Up`!
          </p>
        </div>
      </section>
    </main>
  );
}
