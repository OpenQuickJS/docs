# Get Started

## Installation

### Clone

```bash copy
git clone --recurse-submodules https://github.com/openquickjs/quickjs.git
```

### Install Build Tools

```bash copy
brew install cmake ninja # macOS
sudo apt install cmake ninja-build # Ubuntu
```

The Windows build environment is not yet officially supported.

### Build

```shell copy
bash scripts/build.sh # build quickjs qjs qjsc etc.
```

You can find `libquickjs.a` in `lib` folder and `qjs` / `qjsc` / `run-test262` in `bin` folder.

## Quick start

### `qjs`

`qjs` is the command line interpreter (Read-Eval-Print Loop). You can pass Javascript files and/or expressions as arguments to execute them:

```shell copy
./bin/qjs examples/hello.js
```

Outputs:

```shell
Hello World
```

### `qjsc`

`qjsc` is the command line compiler:

```shell bash
./qjsc -o hello examples/hello.js
./hello
```

This generates a `hello` executable with no external dependency.


## Command line options

### `qjs` interpreter

usage: `qjs [options] [file [args]]`

Options are:

`-h`, `--help`: List options.

`-e EXPR`, `--eval EXPR`: Evaluate EXPR.

`-i`, `--interactive`: Go to interactive mode (it is not the default when files are provided on the command line).

`-m`, `--module`: Load as ES6 module (default=autodetect). A module is autodetected if the filename extension is .mjs or if the first keyword of the source is import.

`--script`: Load as ES6 script (default=autodetect).

`--bignum`: Enable the bignum extensions: BigDecimal object, BigFloat object and the "use math" directive.

`-I file`, `--include file`: Include an additional file.

Advanced options are:

`--std`: Make the std and os modules available to the loaded script even if it is not a module.

`-d`, `--dump`: Dump the memory usage stats.

`-q`, `--quit`: Just instantiate the interpreter and quit.


### `qjsc` compiler

usage: `qjsc [options] [files]`
Options are:

`-c`: Only output bytecode in a C file. The default is to output an executable file.

`-e`: Output main() and bytecode in a C file. The default is to output an executable file.

`-o output`: Set the output filename (default = out.c or a.out).

`-N cname`: Set the C name of the generated data.

`-m`: Compile as Javascript module (default=autodetect).

`-D module_name`: Compile a dynamically loaded module and its dependencies. This option is needed when your code uses the import keyword or the os.Worker constructor because the compiler cannot statically find the name of the dynamically loaded modules.

`-M module_name[,cname]`: Add initialization code for an external C module. See the c_module example.

`-x`: Byte swapped output (only used for cross compilation).

`-flto`: Use link time optimization. The compilation is slower but the executable is smaller and faster. This option is automatically set when the `-fno-x` options are used.

`-fno-[eval|string-normalize|regexp|json|proxy|map|typedarray|promise|bigint]`: Disable selected language features to produce a smaller executable file.

`-fbignum`: Enable the bignum extensions: BigDecimal object, BigFloat object and the "use math" directive

## `qjscalc` application

The `qjscalc` application is a superset of the `qjs` command line interpreter implementing a Javascript calculator with arbitrarily large integer and floating point numbers, fractions, complex numbers, polynomials and matrices. The source code is in `qjscalc.js`. More documentation and a web version are available at http://numcalc.com.

## Tests

A test262 (ECMAScript Test Suite) runner is included in the QuickJS archive. The test262 tests can be installed in the QuickJS source directory with:

```shell copy
bash scripts/test.sh # run ecma262 tests
```

Outputs:

```bash
Average memory statistics for 75250 tests:

NAME                    COUNT     SIZE
memory allocated         1011   124975  (123.6 per block)
memory used               967   117030  (0 overhead, 8.2 average slack)
atoms                     532    26858  (50.5 per atom)
objects                   172    12425  (72.2 per object)
properties              876    15798  (5.1 per object)
shapes                   60    13809  (230.2 per shape)
bytecode functions         13     1685
bytecode                 13      931  (71.6 per function)
C functions               100
arrays                      1
fast arrays               1
elements                  1       16  (1.0 per fast array)

Result: 515/75250 errors, 1392 excluded, 7972 skipped, 515 new
```

This test script applies a pacth that adds the implementation specific harness functions and optimizes the inefficient RegExp character classes and Unicode property escapes tests (the tests themselves are not modified, only a slow string initialization function is optimized).


The configuration files `test262.conf` (resp. `test262o.conf` for the old ES5.1 tests4)) contain the options to run the various tests. Tests can be excluded based on features or filename.

The file `test262_errors.txt` contains the current list of errors. The runner displays a message when a new error appears or when an existing error is corrected or modified. Use the `-u` option to update the current list of errors (or `make test2-update`).

The file `test262_report.txt` contains the logs of all the tests. It is useful to have a clearer analysis of a particular error. In case of crash, the last line corresponds to the failing test.

Use the syntax `./run-test262 -c test262.conf -f filename.js` to run a single test. Use the syntax `./run-test262 -c test262.conf N` to start testing at test number N.

For more information, run `./run-test262` to see the command line options of the test262 runner.

`run-test262` accepts the `-N` option to be invoked from `test262-harness5` thru `eshost`. Unless you want to compare QuickJS with other engines under the same conditions, we do not recommend to run the tests this way as it is much slower (typically half an hour instead of about 100 seconds).
