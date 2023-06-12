# Get Started

Follow the instructions below to start contribution to OpenQuickJS.

## Develop

### Clone

```bash
git clone --recurse-submodules https://github.com/openquickjs/quickjs.git
```

### Install Build Tools

```bash
brew install cmake ninja # macOS
sudo apt install cmake ninja-build # Ubuntu
```

The Windows build environment is not yet officially supported.

### Build

```shell
bash scripts/build.sh # build quickjs qjs
bash scripts/test.sh # run test262 tests
```

You can find `libquickjs.a` in `lib` folder and `qjs` / `run-test262` in `bin` folder.

1. If you're using Visual Studio Code, you can use the `CMake Tools` extension to build the program.
2. If you're using CLion, you can open the project directly to build the program.

Using VSCode or CLion for regular development is recommended.

### Debug

Install Debug Tools if you need.

```bash
brew install lldb # macOS
sudo apt install lldb # Ubuntu
```

If you're using VSCode, you can use the `C/C++` and `Code LLDB` extension to debug.

Pass this argument to cmake enable debug log on release build.

```
-DCONFIG_DEBUG_ON_RELEASE=1
```
