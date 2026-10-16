import React from "react";

const DATA = [
  {
    id: 1,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
    title: "Google Sheets",
    description:
      "Easily sync your data with Google Sheets for seamless automation.",
  },
  {
    id: 2,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
    title: "Slack",
    description:
      "Receive updates and notifications directly in your Slack channels.",
  },
  {
    id: 3,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
    title: "Sketch",
    description:
      "Import your designs from Sketch and streamline your design process",
  },
  {
    id: 4,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
    title: "Gatsby",
    description: "Build blazing-fast websites with Gatsby integration.",
  },
  {
    id: 5,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
    title: "Shopify",
    description:
      "Sync your Shopify store data and streamline order management.",
  },
  {
    id: 6,
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
    title: "Github",
    description:
      "Automate your workflows and track changes with Github integration.",
  },
];

const Integration3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex flex-col items-center text-center">
          <div className="flex max-w-5xl flex-col items-center text-center">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Integrations
            </h1>
            <h2 className="text-muted-foreground mb-8 max-w-3xl lg:text-2xl">
              Connect your favourite apps to your workflow.
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {DATA.map(({ id, icon, title, description }) => (
              <div key={id} className="flex items-center gap-4 py-4">
                <div className="h-12 w-12 flex-shrink-0">
                  <img
                    src={icon}
                    alt={title}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold">{title}</div>
                  <div className="text-muted-foreground text-sm">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Integration3 };
