import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Home";
import { jobData } from "./demoData";
import { workerData } from "./demoData";

test("renders learn react link", () => {
  render(<App jobDetails={jobData} workerDetails={workerData} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
