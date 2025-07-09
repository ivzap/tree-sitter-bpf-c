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

  rules: {
    sec_specifier: $ => seq(
      'SEC',
      '(',
      field('value', $.string_literal),
      ')'
    ),

    function_definition: $ => seq(
      optional($.sec_specifier),
      optional($.ms_call_modifier),
      $._declaration_specifiers,
      optional($.ms_call_modifier),
      field('declarator', $._declarator),
      field('body', $.compound_statement),
    ),
  }
});
