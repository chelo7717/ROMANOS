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
  it("deberia devolver XI para el numero 11", () => {
    expect(convertirRomanos(11)).toEqual("XI");
  });
  it("deberia devolver XXI para el numero 21", () => {
    expect(convertirRomanos(21)).toEqual("XXI");
  });
  it("deberia devolver XL para el numero 40", () => {
    expect(convertirRomanos(40)).toEqual("XL");
  });
  it("deberia devolver XLI para el numero 41", () => {
    expect(convertirRomanos(41)).toEqual("XLI");
  });
  it("deberia devolver L para el numero 50", () => {
    expect(convertirRomanos(50)).toEqual("L");
  });
  it("deberia devolver XC para el numero 90", () => {
    expect(convertirRomanos(90)).toEqual("XC");
  });
  it("deberia devolver C para el numero 100", () => {
    expect(convertirRomanos(100)).toEqual("C");
  });
});
