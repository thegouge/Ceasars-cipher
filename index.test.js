import {
  rot13
} from "./index.js";

let output;

beforeEach(() => {
  output = null;
});

describe("Caesar's Cipher", () => {
  it("Should return a String", () => {
    output = rot13("A");
    expect(typeof output).toBe("String");
  });

  it("Should shift letters 13 places", () => {
    output = rot13("SERR PBQR PNZC");
    expect(output).toBe("FREE CODE CAMP");
  });

  it("Should ignore non-word characters", () => {
    output = rot13("SERR CVMMN!");
    expect(output).toBe("FREE PIZZA!");
  });

  it("Should work with every capital letter", () => {
    output = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
    expect(output).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  });
});