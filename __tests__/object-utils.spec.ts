import { ObjectUtils } from '../src/utils/object-utils';

describe('ObjectUtils.omit', () => {
  test('Creates an object without specified paths', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const paths = ['a', 'c'];

    expect(ObjectUtils.omit(object, paths))
      .toStrictEqual({ 'b': '2' });
  });
});

describe('ObjectUtils.pick', () => {
  test('Creates an object with specified paths', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const paths = ['a', 'c'];

    expect(ObjectUtils.pick(object, paths))
      .toStrictEqual({ 'a': 1, 'c': 3 });
  });
});

describe('ObjectUtils.deepClone', () => {
  test('Creates a new deepClone', () => {
    const user = {
      id: 'e5b87df2-1190-11ee-be56-0242ac120002',
      username: 'Some Username',
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      permissions: {
        dashboard: {
          read: true,
          write: false,
        },
        article: {
          read: true,
          write: true,
        },
        nodes: ['permission.node.others', 'permission.node.access']
      },
    }

    const clone = ObjectUtils.deepClone(user);

    expect(clone).not.toBe(user);
    expect(clone.name).not.toBe(user.name);
    expect(clone).toEqual(user);
  });
});

describe('ObjectUtils.flat', () => {
  test('Makes a flatten object', () => {
    const user = {
      id: 'e5b87df2-1190-11ee-be56-0242ac120002',
      username: 'Some Username',
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      permissions: {
        dashboard: {
          read: true,
          write: false,
        },
        article: {
          read: true,
          write: true,
        },
        nodes: ['permission.node.others', 'permission.node.access']
      },
    }

    const flattenObject = ObjectUtils.flat(user);

    expect(flattenObject).not.toBe(user);
    expect(flattenObject['permissions.nodes']).not.toBe(user.permissions.nodes);
    expect(flattenObject).toStrictEqual({
      'id': 'e5b87df2-1190-11ee-be56-0242ac120002',
      'username': 'Some Username',
      'name.firstName': 'John',
      'name.lastName': 'Doe',
      'permissions.dashboard.read': true,
      'permissions.dashboard.write': false,
      'permissions.article.read': true,
      'permissions.article.write': true,
      'permissions.nodes': ['permission.node.others', 'permission.node.access'],
    });
  });
});