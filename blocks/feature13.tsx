interface Feature {
  id: string;
  heading: string;
  label: string;
  description: string;
  image: string;
  url: string;
}

interface Feature13Props {
  title?: string;
  features: Feature[];
}

const Feature13 = ({
  title = "A collection of extra blocks for Shadcn UI & Tailwind",
  features = [
    {
      id: "feature-1",
      heading: "Design System Approved",
      label: "FOR DESIGNERS",
      description:
        "Hundreds of finely crafted components for shadcn/ui available in Figma. Easily modify the design system to your brand.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-2",
      heading: "Copy-Paste Code Blocks",
      label: "FOR DEVELOPERS",
      description:
        "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-3",
      heading: "Product-First Approach",
      label: "FOR PRODUCT TEAMS",
      description:
        "Components designed with user experience in mind. Every block is tested for usability and optimized for conversion rates.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-4",
      heading: "Marketing-Ready Templates",
      label: "FOR MARKETING",
      description:
        "High-converting landing pages, email templates, and marketing components that drive engagement and boost your campaigns.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg",
      url: "https://shadcnblocks.com",
    },
  ],
}: Feature13Props) => {
  return (
    <section className="py-32">
      <div className="container">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-medium lg:text-5xl">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-muted flex flex-col justify-between rounded-lg"
            >
              <div className="flex justify-between gap-10 border-b">
                <div className="flex flex-col justify-start justify-between gap-8 py-6 pl-4 md:gap-14 md:py-10 md:pl-8 lg:justify-normal">
                  <span className="text-muted-foreground font-mono text-xs">
                    {feature.label}
                  </span>
                  <a href={feature.url}>
                    <h3 className="hover:text-primary text-2xl transition-all hover:opacity-80 sm:text-3xl lg:text-4xl">
                      {feature.heading}
                    </h3>
                  </a>
                </div>
                <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                  <a href={feature.url}>
                    <img
                      src={feature.image}
                      alt={feature.heading}
                      className="h-full w-full rounded-t-lg object-cover transition-opacity hover:opacity-80"
                    />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground p-4 md:p-8">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature13 };
