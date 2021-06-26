import React from "react";
import { NavButtons } from "../components/NavButton";

export function HtmlPage() {
  return (
    <div>
      <h1>React Dojo - HTML</h1>
      <p>
        This is the html page of our React Dojo.
        <br />
        You can find this page as src/pages/Htmlpage.js.
      </p>
      <h1>h1</h1>
      <p>
        Mortal the sorrow—sorrow This the radiant for I, silence gently Madam,
        And
      </p>
      <h2>h2</h2>
      <p>
        Mortal the sorrow—sorrow This the radiant for I, silence gently Madam,
        And
      </p>
      <h3>h3</h3>
      <p>
        Mortal the sorrow—sorrow This the radiant for I, silence gently Madam,
        And
      </p>
      <b>bold</b>
      <p>
        Mortal the sorrow—sorrow This the radiant for I, silence gently Madam,
        And
      </p>
      <p>a, ol, ul, img</p>
      <NavButtons previous="/" next="/" />
    </div>
  );
}
