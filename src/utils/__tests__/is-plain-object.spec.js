import isPlainObject from '../is-plain-object';

function NotObject(foo) {
  this.foo = foo;
}

it('should return true when object is a plain object', () => {
  const obj = {
    foo: 'bar',
  };

  expect(isPlainObject(obj)).toBeTruthy();
});

it('should return false when object is not a plain object', () => {
  const arr = ['foo', 'bar'];

  expect(isPlainObject(arr)).toBeFalsy();
});

it('should return false when object has a constructor', () => {
  const obj = new NotObject('foo');

  expect(isPlainObject(obj)).toBeFalsy();
});
