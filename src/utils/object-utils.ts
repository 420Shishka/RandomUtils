class ObjectUtils {
  public static omit(object: AnyObject, paths: string[]): AnyObject {
    const result = { ...object };
    paths.forEach(element => delete result[element]);

    return result;
  }

  public static pick(object: AnyObject, paths: string[]): AnyObject {
    const result: AnyObject = {};
    paths.forEach(element => result[element] = object[element]);

    return result;
  }

  public static deepClone(object: AnyObject): AnyObject {
    return structuredClone(object);
  }

  public static flat(object: AnyObject): AnyObject {
    const result = <AnyObject>{};

    for (const key in object) {
      const value = object[key];

      const isObject = (
        typeof value === 'object' &&
        !Array.isArray(value)
      );

      if (!isObject) {
        result[key] = Array.isArray(value)
          ? [...value]
          : value;

        continue;
      }

      const subObject = ObjectUtils.flat(value);

      for (const entryKey in subObject) {
        result[`${key}.${entryKey}`] = subObject[entryKey];
      }
    }

    return result;
  }
}

export { ObjectUtils };