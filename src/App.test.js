import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// The starfield needs a real canvas, which jsdom doesn't provide.
jest.mock("./components/Particle", () => () => null);

test("home page tells visitors who this is and links to the work", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /Amardeep\s+Chouhan/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /view projects/i })).toHaveAttribute(
    "href",
    "/project"
  );
  expect(screen.getByRole("link", { name: /download resume/i })).toHaveAttribute(
    "download"
  );
});
