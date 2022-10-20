/**
 * @jest-environment jsdom
 */

import TestPage from "../components/pages/FormPage";
import { render } from "@testing-library/react";
import React from "react";

describe("form/[PageRef] Test", () => {
  it("dis", () => {
    render(<TestPage />);
  });
});
