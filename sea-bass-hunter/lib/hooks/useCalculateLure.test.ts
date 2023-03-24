import { calculateLure } from "./useCalculateLure";

describe("calculateLure Test", () => {
  test("", () => {
    const lure = calculateLure({
      weather: 1,
      clarity: 1,
      bait: 2,
      time: 1,
      season: 1,
      location: 1,
    });
    expect(lure).toBe("ストレートミノー");
  });
  test("", () => {
    const lure = calculateLure({
      weather: 2,
      clarity: 2,
      bait: 1,
      time: 2,
      season: 2,
      location: 2,
    });
    expect(lure).toBe("シンキングペンシル");
  });
  test("", () => {
    const lure = calculateLure({
      weather: 5,
      clarity: 5,
      bait: 5,
      time: 5,
      season: 5,
      location: 5,
    });
    expect(lure).toBe("スピナーベイト");
  });
  test("", () => {
    const lure = calculateLure({
      weather: 2,
      clarity: 3,
      bait: 1,
      time: 3,
      season: 2,
      location: 2,
    });
    expect(lure).toBe("クランクベイト");
  });
});
