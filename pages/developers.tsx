import * as React from "react";
import fetch from "isomorphic-fetch";
import { RedocStandalone } from "redoc";
import Layout from "components/Layout";
import { colors, typography } from "../theme";
import { ApiReference as VueComponent } from "@scalar/api-reference";
import { applyVueInReact } from "veaury";

const ApiReference = applyVueInReact(VueComponent);

export default function Developers({ spec }) {
  return (
    <Layout
      title="Developers"
      background="#F4F7FA"
      hero="Outline is built on an open, best-in-class, RPC API. Easily
      integrate the creation and publishing of documents into your teams
      workflows."
    >
      <ApiReference
        configuration={{
          spec: { content: JSON.stringify(spec) },
        }}
      />
      <style jsx global>{`
        :root {
          --theme-font: "Inter", var(--system-fonts);
        }
        /* basic theme */
        .light-mode {
          --theme-color-1: #111318;
          --theme-color-2: #4e5c6e;
          --theme-color-3: #9ba6b2;
          --theme-color-accent: #3141f5;

          --theme-background-1: #fff;
          --theme-background-2: #f3f5f8;
          --theme-background-3: #e1eaf2;
          --theme-background-accent: #e5e5e5;

          --theme-border-color: rgba(0, 0, 0, 0.1);
        }
        .dark-mode {
          --theme-color-1: rgba(255, 255, 255, 0.9);
          --theme-color-2: rgba(255, 255, 255, 0.62);
          --theme-color-3: rgba(255, 255, 255, 0.44);
          --theme-color-accent: #8a92ea;

          --theme-background-1: #040506;
          --theme-background-2: #111318;
          --theme-background-3: #16181f;
          --theme-background-accent: #8ab4f81f;

          --theme-border-color: rgba(255, 255, 255, 0.1);
        }
        /* Document header */
        .light-mode .t-doc__header {
          --header-background-1: var(--theme-background-1);
          --header-border-color: var(--theme-border-color);
          --header-color-1: var(--theme-color-1);
          --header-color-2: var(--theme-color-2);
          --header-background-toggle: var(--theme-color-3);
          --header-call-to-action-color: var(--theme-color-accent);
        }

        .dark-mode .t-doc__header {
          --header-background-1: var(--theme-background-1);
          --header-border-color: var(--theme-border-color);
          --header-color-1: var(--theme-color-1);
          --header-color-2: var(--theme-color-2);
          --header-background-toggle: var(--theme-color-3);
          --header-call-to-action-color: var(--theme-color-accent);
        }
        /* Document Sidebar */
        .light-mode .t-doc__sidebar {
          --sidebar-background-1: var(--theme-background-1);
          --sidebar-item-hover-color: currentColor;
          --sidebar-item-hover-background: var(--theme-background-2);
          --sidebar-item-active-background: #f2f2f2;
          --sidebar-border-color: var(--theme-border-color);
          --sidebar-color-1: var(--theme-color-1);
          --sidebar-color-2: var(--theme-color-2);
          --sidebar-color-active: var(--theme-color-1);
          --sidebar-search-background: var(--theme-background-2);
          --sidebar-search-border-color: var(--theme-background-2);
          --sidebar-search--color: var(--theme-color-3);
        }

        .dark-mode .sidebar {
          --sidebar-background-1: var(--theme-background-1);
          --sidebar-item-hover-color: currentColor;
          --sidebar-item-hover-background: var(--theme-background-2);
          --sidebar-item-active-background: var(--theme-background-3);
          --sidebar-border-color: var(--theme-border-color);
          --sidebar-color-1: var(--theme-color-1);
          --sidebar-color-2: var(--theme-color-2);
          --sidebar-color-active: var(--theme-color-1);
          --sidebar-search-background: var(--theme-background-2);
          --sidebar-search-border-color: var(--theme-background-2);
          --sidebar-search--color: var(--theme-color-3);
        }

        /* advanced */
        .light-mode {
          --theme-button-1: rgb(49 53 56);
          --theme-button-1-color: #fff;
          --theme-button-1-hover: rgb(28 31 33);

          --theme-color-green: #3bd984;
          --theme-color-red: #d73a4a;
          --theme-color-yellow: #f5be31;
          --theme-color-blue: #3533ff;
          --theme-color-orange: #fb892c;
          --theme-color-purple: #5203d1;

          --theme-scrollbar-color: rgba(0, 0, 0, 0.18);
          --theme-scrollbar-color-active: rgba(0, 0, 0, 0.36);
        }
        .dark-mode {
          --theme-button-1: #f6f6f6;
          --theme-button-1-color: #000;
          --theme-button-1-hover: #e7e7e7;

          --theme-color-green: #00b648;
          --theme-color-red: #d73a4a;
          --theme-color-yellow: #dcdcaa;
          --theme-color-blue: #569cd6;
          --theme-color-orange: #ce9178;
          --theme-color-purple: #b191f9;

          --theme-scrollbar-color: rgba(255, 255, 255, 0.24);
          --theme-scrollbar-color-active: rgba(255, 255, 255, 0.48);
        }
        :root {
          --theme-radius: 3px;
          --theme-radius-lg: 6px;
          --theme-radius-xl: 8px;

          --theme-header-height: 50px;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/outline/openapi/develop/spec3.json"
  );
  const spec = await res.json();

  return {
    props: {
      spec,
    },
  };
}
