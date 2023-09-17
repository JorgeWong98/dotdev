// icon:server | Feathericons https://feathericons.com/ | Cole Bemis
import * as React from "react";

export function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 2 H20 A2 2 0 0 1 22 4 V8 A2 2 0 0 1 20 10 H4 A2 2 0 0 1 2 8 V4 A2 2 0 0 1 4 2 z" />
      <path d="M4 14 H20 A2 2 0 0 1 22 16 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V16 A2 2 0 0 1 4 14 z" />
      <path d="M6 6h.01M6 18h.01" />
    </svg>
  );
}
