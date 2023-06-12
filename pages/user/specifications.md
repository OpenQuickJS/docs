# Specifications

## Language support

### ES2020 support

The ES2020 specification is almost fully supported including the Annex B (legacy web compatibility) and the Unicode related features.

The following features are not supported yet:

- **[Tail calls](https://github.com/tc39/proposal-ptc-syntax)** (We believe the current specification of tails calls is too complicated and presents limited practical interests. See: [Proper tail calls - v8.dev Blog](https://v8.dev/blog/modern-javascript#proper-tail-calls) for the details.)

### ECMA402

ECMA402 (Internationalization API) is **not supported**.

### Extensions

The directive "use strip" indicates that the debug information (including the source code of the functions) should not be retained to save memory. As "use strict", the directive can be global to a script or local to a function.

The first line of a script beginning with `#!` is ignored.

### Mathematical extensions

The mathematical extensions are fully backward compatible with standard Javascript. See [here](https://bellard.org/quickjs/jsbignum.html) for more information.

- BigDecimal support: arbitrary large floating point numbers in base 10.
- BigFloat support: arbitrary large floating point numbers in base 2.
- Operator overloading.
- The directive "use bigint" enables the bigint mode where integers are BigInt by default.
- The directive "use math" enables the math mode where the division and power operators on integers produce fractions. Floating point literals are BigFloat by default and integers are BigInt by default.

## Modules

ES6 modules are fully supported. The default name resolution is the following:

- Module names with a leading `.` or `..` are relative to the current module path.
- Module names without a leading `.` or `..` are system modules, such as `std` or `os`.
- Module names ending with `.so` are native modules using the QuickJS C API.