import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Home";
import { data } from "./demoData";

test("renders learn react link", () => {
  render(<App {...data} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
