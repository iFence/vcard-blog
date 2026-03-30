import type { MDXComponents } from "mdx/types";
import {
  TechBadge,
  TechBadgeGroup,
} from "@/components/mdx/tech-badge";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="text-3xl font-bold mb-4" {...props} />,
    TechBadge,
    TechBadgeGroup,
  };
}