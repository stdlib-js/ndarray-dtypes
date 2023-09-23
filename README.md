<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Data Types

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> List of ndarray data types.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.1.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { enum } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.1.0-deno/mod.js';
```

#### dtypes( \[kind] )

Returns a list of ndarray data types.

```javascript
var out = dtypes();
// e.g., returns [ 'binary', 'complex64', 'complex128', ... ]
```

When not provided a data type "kind", the function returns an array containing the following data types:

-   `binary`: binary.
-   `complex64`: single-precision complex floating-point numbers.
-   `complex128`: double-precision complex floating-point numbers.
-   `float32`: single-precision floating-point numbers.
-   `float64`: double-precision floating-point numbers.
-   `generic`: values of any type.
-   `int16`: signed 16-bit integers.
-   `int32`: signed 32-bit integers.
-   `int8`: signed 8-bit integers.
-   `uint16`: unsigned 16-bit integers.
-   `uint32`: unsigned 32-bit integers.
-   `uint8`: unsigned 8-bit integers.
-   `uint8c`: unsigned clamped 8-bit integers.

To return the subset of data types belonging to a specified data type kind, provide a `kind` argument.

```javascript
var out = dtypes( 'floating_point' );
// returns [...]
```

The function supports the following data type kinds:

-   `floating_point`: floating-point data types.
-   `real_floating_point`: real-valued floating-point data types.
-   `complex_floating_point`: complex-valued floating-point data types.
-   `integer`: integer data types.
-   `signed_integer`: signed integer data types.
-   `unsigned_integer`: unsigned integer data types.
-   `real`: real-valued data types.
-   `numeric`: numeric data types.
-   `all`: all data types.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import indexOf from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@deno/mod.js';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@v0.1.0-deno/mod.js';

var DTYPES = dtypes();
var bool;

function isdtype( str ) {
    if ( indexOf( DTYPES, str ) === -1 ) {
        return false;
    }
    return true;
}

bool = isdtype( 'float64' );
// returns true

bool = isdtype( 'int16' );
// returns true

bool = isdtype( 'uint8' );
// returns true

bool = isdtype( 'beep' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-dtypes`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>
-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/array-typed-dtypes`][@stdlib/array/typed-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array data types.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-dtypes.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-dtypes

[test-image]: https://github.com/stdlib-js/ndarray-dtypes/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-dtypes/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-dtypes/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-dtypes?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-dtypes.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-dtypes/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-dtypes/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-dtypes/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-dtypes/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-dtypes/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-dtypes/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/deno

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/deno

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array-typed-dtypes/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
