# Standard library

The standard library is included by default in the command line interpreter. It contains the two modules `std` and `os` and a few global objects.

## Global objects

### `scriptArgs`

Provides the command line arguments. The first argument is the script name.

### `print(...args)`

Print the arguments separated by spaces and a trailing newline.

### `console.log(...args)`

Same as `print()`.

## [std module](./standard-library/std-module.mdx)

The std module provides wrappers to the libc stdlib.h and stdio.h and a few other utilities.

## [os module](./standard-library/os-module.mdx)

The os module provides Operating System specific functions:

- Low level file access
- Signals
- Timers
- Asynchronous I/O
- Workers (threads)

The OS functions usually return 0 if OK or an OS specific negative error code.