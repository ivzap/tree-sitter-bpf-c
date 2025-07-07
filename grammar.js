/**
 * @file tree-sitter grammar for BPF C
 * @author Daniel Müller <deso@posteo.net>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "bpf_c",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
