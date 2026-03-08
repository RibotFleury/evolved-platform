import type { Metadata } from "next";

type BuildMetadataParams = {
  title: string;
  description: string;
};

export function buildMetadata({
  title,
  description,
}: BuildMetadataParams): Metadata {
  return {
    title,
    description,
  };
}