# This is a comment
from module.first_module import module1, some_decorator
from class_module import AClass as SomeClass

"""
Description  
"""
def some_function(arg=None):
  if not arg:
    raise Exception('Arg is {}'.format(arg))
  elif arg is 'some arbitrary value' or \
    arg is 'some other value with escaping \'':
    return False
  else:
    return True

async def calculate(a, b, c, d, e):
    return await module1.calculate(a + b - c * d / e)

SOME_CONSTANT = 'SOME_CONSTANT'
dictionary = {
  'string': 'String',
  'int': 123,
  'float': 123.123,
  'boolean': True,
  'none': None,
  'array': ['123', '456'],
  'function': some_function
}
array_numbers = [int(value) if value >= 0 and value <= 1000 else 0 for value in dictionary.array]

print('Constant: ' + SOME_CONSTANT)

try:
  some_function(0)
except Exception as excep:
  print(excep)
  pass

class MyClass(SomeClass):
  property = 'some property'

  def __init__(self, new_property):
    self.property = new_property if new_property else module1.PROPERTY_CONSTANT

  @some_decorator(arg=10)
  def some_method(self):
    values1 = (1, 2)
    values2 = {'c': 1, 'd': 2, 'e': 3}
    return calculate(*values1, **values2)
