<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# num2words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a number to a word representation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-num2words
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var num2words = require( '@stdlib/string-num2words' );
```

#### num2words( value\[, options] )

Converts a number to a word representation.

```javascript
var out = num2words( 87 );
// returns 'eighty-seven'

out = num2words( 23101 );
// returns 'twenty-three thousand one hundred one'

out = num2words( 0.53 );
// returns 'zero point five three'
```

The function accepts the following `options`:

-   **lang**: `string` indicating the language. Default: `'en'`.

By default, the function returns a word representation of a number in English. To return a word representation of a number in a different language, set the `lang` option.

```javascript
var out = num2words( 22, {
    'lang': 'de'
});
// returns 'zweiundzwanzig'

out = num2words( 0.53, {
    'lang': 'de'
});
// returns 'null Komma f??nf drei'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The following languages are supported:

    -   **en**: English.
    -   **de**: German.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var num2words = require( '@stdlib/string-num2words' );

var out = num2words( 29 );
// returns 'twenty-nine'

out = num2words( 113 );
// returns 'one hundred thirteen'

out = num2words( 13.52 );
// returns 'thirteen point five two'

out = num2words( 47, {
    'lang': 'de'
});
// returns 'siebenundvierzig'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-num2words-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: num2words [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
         --lang lang           Language. Default: 'en'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'15\n23' | num2words --split /\r?\n/

    # Escaped...
    $ echo -n $'15\n23' | num2words --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ num2words '10'
ten
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '23' | num2words
twenty-three
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '10.3\t23.1' | num2words --split '\t'
ten point three
twenty-three point one
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-num2words.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-num2words

[test-image]: https://github.com/stdlib-js/string-num2words/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-num2words/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-num2words/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-num2words?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-num2words.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-num2words/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-num2words#cli
[cli-url]: https://github.com/stdlib-js/string-num2words/tree/cli
[@stdlib/string-num2words]: https://github.com/stdlib-js/string-num2words/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-num2words/tree/deno
[umd-url]: https://github.com/stdlib-js/string-num2words/tree/umd
[esm-url]: https://github.com/stdlib-js/string-num2words/tree/esm
[branches-url]: https://github.com/stdlib-js/string-num2words/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-num2words/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
