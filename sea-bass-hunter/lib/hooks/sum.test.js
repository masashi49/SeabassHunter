describe("Sample unit test.", () => {
  test("fizbuzz", () => {
    const toFizzBuzz = (num) => {
      if (!(typeof num === "number")) return "数字にしてください";
      if (isFizz(num) && isBuzz(num)) return "FizzBuzz";
      if (isFizz(num)) return "Fizz";
      if (isBuzz(num)) return "Buzz";
      return num;
    };

    const isFizz = (num) => {
      return num % 3 == 0;
    };

    const isBuzz = (num) => {
      return num % 5 == 0;
    };

    expect(toFizzBuzz("あいうえお")).toBe("数字にしてください");
    expect(toFizzBuzz(true)).toBe("数字にしてください");
    expect(toFizzBuzz(2)).toBe(2);
    expect(toFizzBuzz(6)).toBe("Fizz");
    expect(toFizzBuzz(30)).toBe("FizzBuzz");
    expect(toFizzBuzz(10)).toBe("Buzz");

    const spy = 30;
    expect(toFizzBuzz(spy)).toBe("FizzBuzz");
  });
});

export {};
