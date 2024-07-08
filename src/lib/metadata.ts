import { Metadata } from "next";

const defaultMetadata = {
  title: "Hit Me Up by ardhptr21",
  description:
    "Self project, yes you can `Hit Me Up` with your message. It's totally anonymous, I won't know who you are. You can send me message, when you have the link to the specific topic that will I create later. Enjoy, just `Hit Me Up`!",
};

export const buildMetadata = (metadata?: Metadata): Metadata => {
  return {
    title: metadata?.title || defaultMetadata.title,
    description: metadata?.description || defaultMetadata.description,
    openGraph: {
      title: metadata?.title || defaultMetadata.title,
      description: metadata?.description || defaultMetadata.description,
    },
    twitter: {
      title: metadata?.title || defaultMetadata.title,
      description: metadata?.description || defaultMetadata.description,
    },
    ...metadata,
    applicationName: "Hit Me Up",
    authors: [{ name: "Ardhi Putra" }],
  };
};
