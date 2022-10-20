/**
 * @jest-environment jsdom
 */

import TestPage from "../pages/form/[woof]";
import { render } from "@testing-library/react";
import React from "react";

describe("form/[PageRef] Test", () => {
  it("dis", () => {
    render(<TestPage />);
  });
});
