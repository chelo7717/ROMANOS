import convertirRomanos from "./romanos.js";

describe("ROMANOS", () => {
  it("deberia devolver I para el numero 1", () => {
    expect(convertirRomanos(1)).toEqual("I");
  });
  it("deberia devolver II para el numero 2", () => {
    expect(convertirRomanos(2)).toEqual("II");
  });
  it("deberia devolver III para el numero 3", () => {
    expect(convertirRomanos(3)).toEqual("III");
  });
  it("deberia devolver IV para el numero 4", () => {
    expect(convertirRomanos(4)).toEqual("IV");
  });
  it("deberia devolver V para el numero 5", () => {
    expect(convertirRomanos(5)).toEqual("V");
  });
});
