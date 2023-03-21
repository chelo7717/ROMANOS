import convertirRomanos from "./romanos.js";

describe("ROMANOS", () => {
  it("deberia devolver I para el numero 1", () => {
    expect(convertirRomanos(1)).toEqual("I");
  });
  it("deberia devolver II para el numero 2", () => {
    expect(convertirRomanos(2)).toEqual("II");
  });
});
