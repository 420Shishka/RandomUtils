class ArrayUtils {
  /**
   * Creates an array of elements split into groups
   * the length of size. If array can't be split evenly,
   * the final chunk will be the remaining elements.
   */
  public static chunk<T>(arr: T[], size: number = 1): T[][] {
    const result: any[][] = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  }

  /**
   * Creates an array with all falsey values removed.
   * The values false, null, 0, "", undefined
   * and NaN are falsey.
  */
  public static compact<T>(arr: T[]): T[] {
    return arr.filter(Boolean);
  }

  public static difference<T>(firstArr: T[], secondArr: T[]): T[] {
    return [
      ...firstArr.filter(item => !secondArr.includes(item)),
      ...secondArr.filter(item => !firstArr.includes(item))
    ];
  }

  public static intersection<T>(firstArr: T[], secondArr: T[]): T[] {
    return firstArr.filter(item => secondArr.includes(item));
  }

  public static zip<T>(...items: T[][]): T[][] {
    if (!items.length) {
      return [];
    }

    const isValid = items.every((item, _, arr) => {
      return item.length === arr.at(0)?.length;
    });

    if (!isValid) {
      throw new Error('Arrays must be the same length');
    }

    return items.at(0)!.map((_, index) => {
      return items.map(item => item.at(index)!);
    });
  }
}

export { ArrayUtils };