class NumberUtils {
  public static clamp(numToClamp: number, lowerBound: number, upperBound: number): number {
    if (numToClamp < lowerBound) return lowerBound;
    if (numToClamp > upperBound) return upperBound;

    return numToClamp;
  }

  public static inRange(num: number, start: number = 0, end: number = 0): boolean {
    if (start > end) {
      [start, end] = [end, start];
    }

    return num >= start && num <= end;
  }

  public static randomInt(lowerBound: number = 0, upperBound?: number): number {
    if (!upperBound) {
      [lowerBound, upperBound] = [0, lowerBound];
    }

    if (lowerBound > upperBound) {
      [lowerBound, upperBound] = [upperBound, lowerBound];
    }

    return Math.floor(this.getRandomNumber(lowerBound, upperBound));
  }

  public static randomFloat(lowerBound: number = 0, upperBound?: number): number {
    if (!upperBound) {
      [lowerBound, upperBound] = [0, lowerBound];
    }

    if (lowerBound > upperBound) {
      [lowerBound, upperBound] = [upperBound, lowerBound];
    }

    return this.getRandomNumber(lowerBound, upperBound);
  }

  private static getRandomNumber(lowerBound: number, upperBound: number): number {
    return Math.random() * (upperBound - lowerBound) + lowerBound;
  }
}

export { NumberUtils };