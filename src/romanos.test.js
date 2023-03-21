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
  it("deberia devolver VI para el numero 6", () => {
    expect(convertirRomanos(6)).toEqual("VI");
  });
  it("deberia devolver VII para el numero 7", () => {
    expect(convertirRomanos(7)).toEqual("VII");
  });
  it("deberia devolver VIII para el numero 8", () => {
    expect(convertirRomanos(8)).toEqual("VIII");
  });
  it("deberia devolver IX para el numero 9", () => {
    expect(convertirRomanos(9)).toEqual("IX");
  });
  it("deberia devolver X para el numero 10", () => {
    expect(convertirRomanos(10)).toEqual("X");
  });
});
