import { StringUtils } from '../src/utils/string-utils';

describe('StringUtils.camelCase', () => {
  test('Handles spaces properly', () => {
    expect(StringUtils.camelCase('Foo Bar'))
      .toBe('fooBar');
  });

  test('Handles dashes properly', () => {
    expect(StringUtils.camelCase('--foo-bar--'))
      .toBe('fooBar');
  });

  test('Handles underlines properly', () => {
    expect(StringUtils.camelCase('__FOO_BAR__'))
      .toBe('fooBar');
  });

  test('Handles uppercase words properly', () => {
    expect(StringUtils.camelCase('FOO BAR'))
      .toBe('fooBar');
  });
});

describe('StringUtils.capitalize', () => {
  test('Handles lowercase words', () => {
    expect(StringUtils.capitalize('fred'))
      .toBe('Fred');
  });

  test('Handles uppercase words', () => {
    expect(StringUtils.capitalize('FRED'))
      .toBe('Fred');
  });
});

describe('StringUtils.deburr', () => {
  test('Replaces symbols like `é` and `à`', () => {
    expect(StringUtils.deburr('déjà vu'))
      .toBe('deja vu');
  });

  test('Replaces symbols like `ê`', () => {
    expect(StringUtils.deburr('être'))
      .toBe('etre');
  });

  test('Replaces symbols like `ç`', () => {
    expect(StringUtils.deburr('Français'))
      .toBe('Francais');
  });
});

describe('StringUtils.escapeChars', () => {
  test('& is being replaced with &amp;', () => {
    expect(StringUtils.escapeChars('fred, barney, & pebbles'))
      .toBe('fred, barney, &amp; pebbles');
  });

  test('> is being replaced with &gt;', () => {
    expect(StringUtils.escapeChars('fred and barney > pebbles'))
      .toBe('fred and barney &gt; pebbles');
  });

  test('< is being replaced with &lt;', () => {
    expect(StringUtils.escapeChars('fred and barney < pebbles'))
      .toBe('fred and barney &lt; pebbles');
  });

  test('" is being replaced with &quot;', () => {
    expect(StringUtils.escapeChars('fred and barney " pebbles'))
      .toBe('fred and barney &quot; pebbles');
  });
});

describe('StringUtils.truncate', () => {
  test('Don`t add specific omission', () => {
    expect(StringUtils.truncate('hi-diddly-ho there, neighborino', 14))
      .toBe('hi-diddly-ho');
  });

  test('Adds specific omission', () => {
    expect(StringUtils.truncate('hi-diddly-ho there, neighborino', 14, '...'))
      .toBe('hi-diddly-ho...');
  });

  test('Don`t truncate circumcised words', () => {
    expect(StringUtils.truncate('hi-diddly-ho there, neighborino', 14))
      .toBe('hi-diddly-ho');
  });

  test('Don`t truncate specific symbols after words', () => {
    expect(StringUtils.truncate('hi-diddly-ho there, neighborino', 20, '...'))
      .toBe('hi-diddly-ho there,...');
  });
});