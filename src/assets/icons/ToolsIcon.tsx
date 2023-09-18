// icon:tools-line | Remix Icon https://remixicon.com/ | Remix Design
import * as React from "react";

export function ToolsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5.33 3.271a3.5 3.5 0 014.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 01-4.962-4.255L5.444 7.63a1.5 1.5 0 102.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.414 1.414-5.303 5.303a1 1 0 01-1.492-1.327l.078-.087 5.303-5.303z" />
    </svg>
  );
}