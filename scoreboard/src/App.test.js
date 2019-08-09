import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {strike} from "./App"

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  );
});

describe("App.js",() => {
  describe("strike()",() => {
    it("should return 0 if strikes is already 2 or add 1 to strikes if strikes is less than 2", () => {
      //expect
      expect(strike(0).toBe(1));
      expect(strike(1).toBe(2));
      expect(strike(2).toBe(0));
    })
  })
})