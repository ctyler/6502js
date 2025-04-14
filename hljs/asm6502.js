/*! `asm6502` grammar compiled for Highlight.js 11.9.0 */
(function(){
    var hljsGrammar = (function () {
        'use strict';

        /*
        Language: 6502 Assembly
        Author: Bill Jojo <jojowil@gmail.com>
        Description: 6502/6510 Assembly including illegal instructions
        Category: assembler
        */

        /** @type LanguageFn */
        function asm6502(hljs) {
            // local labels: %?[FB]?[AT]?\d{1,2}\w+

            const COMMENT = { variants: [
                    hljs.COMMENT('^[ \\t]*(?=#)', '$', {
                        relevance: 0,
                        excludeBegin: true
                    }),
                    hljs.COMMENT('[;@]', '$', { relevance: 0 }),
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ] };

            return {
                name: '6502/6510 Assembly',
                case_insensitive: true,
                aliases: [ '6502' ],
                keywords: {
                    $pattern: '\\.?' + hljs.IDENT_RE,
                    meta:
                    // cc65
                        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ',
                    built_in:
                        'a x y' // standard registers
                },
                contains: [
                    {
                        className: 'keyword',
                        begin: '\\b(' // standard mnemonics
                            + 'ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|'
                            + 'BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|'
                            + 'CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|'
                            + 'INC|INX|INY|JMP|JSR|LDA|LDX|LDY|'
                            + 'LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|'
                            + 'ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|'
                            + 'STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|'
                            // illegals
                            + 'ahx|sha|alr|asr|anc|anc2|arr|axs|'
                            + 'sbx|dcp|dcm|isc|ins|isb|las|lae|'
                            + 'lds|lax|lxa|nop|rla|rra|sax|sbc2|'
                            + 'shx|shy|slo|sre|tas|shs|xaa|ane|'
                            + 'a|x|y'
                            + ')'
                            //+ '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?' // condition codes
                            //+ '[sptrx]?' // legal postfixes
                            + '(?=\\s)' // followed by space
                    },
                    {
                        className: 'meta',
                        begin: '\\b('
                            + 'define|dcb|dcw|dcq|txt|dsb|dsw|dsq'
                            + ')'
                            + '(?=\\s)' // followed by space
                    },
                    COMMENT,
                    hljs.QUOTE_STRING_MODE,
                    {
                        className: 'string',
                        begin: '\'',
                        end: '[^\\\\]\'',
                        relevance: 0
                    },
                    {
                        className: 'title',
                        begin: '\\|',
                        end: '\\|',
                        illegal: '\\n',
                        relevance: 0
                    },
                    // moved number before symbol
                    {
                        className: 'number',
                        variants: [
                            { // decimal
                                begin: '#?[0-9]+' },
                            { // hex
                                begin: '#?\\$[0-9a-fA-F]+' }
                        ],
                        relevance: 0
                    },
                    {
                        className: 'symbol',
                        variants: [
                            //{ // GNU ARM syntax
                            //  begin: '^[ \\t]*[a-z_\\.\\$][a-z0-9_\\.\\$]+:' },
                            { // Label
                                begin: '^\\w+:' },
                            { // label reference
                                begin: '[<>]?#?\\w+' }
                        ],
                        relevance: 0
                    }
                ]
            };
        }

        return asm6502;

    })();

    hljs.registerLanguage('asm6502', hljsGrammar);
})();