class StringUtils {
  public static camelCase(str: string): string {
    // Getting array of words, without _, - and ' ' 
    const wordsArr: string[] = str.replaceAll(/[_-]/g, ' ').trim().split(' ');

    // Setting each word to Pascal Case
    const result = wordsArr.map(word => {
      return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    });

    // Setting first word to Lower Case 
    result[0] = result[0].toLowerCase();

    // Getting string in camelCase
    return result.join('');
  }

  public static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  public static deburr(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  public static escapeChars(str: string): string {
    const mnemonics = new Map<string, string>([
      ['&', '&amp;'],
      ['>', '&gt;'],
      ['<', '&lt;'],
      ['"', '&quot;'],
    ]);

    return [...mnemonics.entries()].reduce((result, [key, value]) => {
      return result.replaceAll(key, value);
    }, str);
  }

  public static truncate(str: string, length: number, omission: string = ''): string {
    const trimPoint = str.charAt(length) !== ' '
      ? str.slice(0, length).lastIndexOf(' ')
      : length;

    return str.slice(0, trimPoint).concat(omission);
  }
}

export { StringUtils };