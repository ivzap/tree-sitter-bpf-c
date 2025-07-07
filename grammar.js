/**
 * @file tree-sitter grammar for BPF C
 * @author Daniel Müller <deso@posteo.net>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const C = require('tree-sitter-c/grammar');

module.exports = grammar(C, {
  name: "bpf_c",

  rules: {}
});
