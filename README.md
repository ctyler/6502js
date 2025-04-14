# 6502js
A JavaScript 6502 assembler and simulator which runs in a web browser, forked from: https://github.com/ctyler/6502js (originally from https://github.com/skilldrick/6502js)

The ctyler enhancements include a speed control (slider), load/save buttons, an 80x25 character memory-mapped terminal screen, and some basic ROM routines.

This version also contains syntax highlighting utilizing Code Input (https://github.com/WebCoder49/code-input) and highlight.js (https://highlightjs.org/).

The highlighter uses a slightly modified atom-one-dark theme and a homegrown asm6502 language adapted from the arm plugin (I think. I can't remember.)

This fork further enhances the CSS to adjust the look and feel. This fork also makes several modifications to the assembler to add more directives and some simple expressions with working with labels.

A hosted copy is available at http://programmingby.design/trial - Click the "Notes" button and scroll through the popup box for basic documentation, including links to some sample code. Some sample code to run within the emulator is available at https://github.com/ctyler/6502js-code

The 6502js assembler and simulator is distributed under the terms of the GPL version 3; see the LICENSE file.
The code-input (https://github.com/WebCoder49/code-input) code is licensed under MIT (see the LICENSE.code-input file).
The highlight.js library is distributed under the BSD 3-Clause license (see the LICENSE.highlightjs file).

