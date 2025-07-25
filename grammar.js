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
    
    _field_declaration_list_item: $ => choice(
      $.uint_bpf_macro,
      $.field_declaration,
      $.preproc_def,
      $.preproc_function_def,
      $.preproc_call,
      alias($.preproc_if_in_field_declaration_list, $.preproc_if),
      alias($.preproc_ifdef_in_field_declaration_list, $.preproc_ifdef),
    ),

    uint_bpf_macro: $ => choice(
      seq(
        '__uint',
        '(',
        $.identifier,
        ',',
        $.sizeof_expression,
        ')',
        ';'
      ),
      seq(
        '__uint',
        '(',
        optional(commaSep($.identifier)),
        ')'
        )
    ),

  }
});

function commaSep(rule) {
  return optional(commaSep1(rule));
}

function commaSep1(rule) {
  return seq(rule, repeat(seq(',', rule)));
}
