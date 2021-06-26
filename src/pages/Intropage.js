import React from "react";
import { NavButtons } from "../components/NavButton";

export function IntroPage() {
  return (
    <div>
      <h1>React Dojo - Intro</h1>
      <p>
        This is the intro page of our React Dojo.
        <br />
        You can find this page as src/pages/Intropage.js.
        <br />
        If you open the file and change some of the text the changes will be
        shown directly in the browser.
        <br />
        <b>Try it!</b>
      </p>
      <NavButtons next="/html" />
    </div>
  );
}
