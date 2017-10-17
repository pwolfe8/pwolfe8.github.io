---
layout: page
title: Visual Studio Code Setup
permalink: /vscode setup/
---

Here's my current vscode setup:

---
keybindings:

---
vhdl snippets:
```C++

{
/*
	// Place your snippets for VHDL here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
*/


// ========================================================== //
// ======== main module and testbench shell snippets ======== //
// ========================================================== //

    // standard entity shell
    "Standard Entity/Module Shell": {
        "prefix": "module",
        "body": [
            "--Engineer     : ${2:Philip Wolfe}",
            "--Date         : ${3:MM}/${4:DD}/2017",
            "--Name of file : ${TM_FILENAME}",
            "--Description  : ${1:description}",
            "library ieee;",
            "use ieee.std_logic_1164.all;",
            "use ieee.numeric_std.all;",
            "",
            "entity ${TM_FILENAME_BASE} is",
                "\tgeneric (",
                    "\t\t${5:_name_}\t\t\t: ${6:_type_}",
                "\t);",
                "\tport (",
                    "\t\t-- inputs --",
                    "\t\t${7:_name_}\t\t: in  ${8:_type_};",
                    "\t\t-- outputs --",
                    "\t\t${9:_name_}\t\t: out ${10:_type_}",
                "\t);",
            "end ${TM_FILENAME_BASE};",
            "",
            "architecture ${TM_FILENAME_BASE}_arch of ${TM_FILENAME_BASE} is",
                "\t-- constant definitions",
                "\t${11}",
                "\t-- signal declarations",
                "\t${12}",
            "",
            "begin",
                "\t-- normal processes",
                "\t${13}",
                "\t-- component instantiations",
                "\t${0}", // final cursor position
                "\t",
            "end ${TM_FILENAME_BASE}_arch;",
            ""
        ],
        "description": "Standard vhdl snippet for:\n  header comments, includes, entity, & arch.\n"
    },

    // smaller snippets
    "Constant Declaration": {
        "prefix": "const_snippet",
        "body": "constant ${1:_name_} : ${2:_type_} := ${3:_value_};\n",
        "description": "Snippet to make a constant.\n"
    },
    "Signal Declaration": {
        "prefix": "sig_snippet",
        "body": "signal ${1:_name_} : ${2:_type_};\n",
        "description": "Snippet to make a signal.\n"
    },
    "Type Defining": {
        "prefix": "typ_snippet",
        "body": "type ${1:_name_} is ${2:_new_type_};\n",
        "description": "Snippet to define a new type.\n"
    },
    // "Sequential Statements": {
    //     "prefix": "proc_snippet", // maybe make different forms for async and sync?
    //     "body": [ 
    //         "snippet",
    //         ""
    //     ],
    //     "description": ""
    // }
    "Instantiation": {
        "prefix": "inst_snippet",
        "body": [ 
            "${1:_name_} : entity work.${2:_entity_name_} port map (",
                "\t${3:-- Paste entity's ports here. Connect signals in either form:\n\t--    \"in1,in2,out1,out2\"\n\t--    \"portname1=>signal1, portname2=>signal2\"}",
            ");\n"
        ],
        "description": "Snippet to instantiate another entity.\n"
    },

    // types
    "Array Snippet": {
        "prefix": "arr_snippet",
        "body": "array($1 downto $2) of ${3:_type_}",
        "description": "Snippet to create a basic array.\n"
    },
    "Vector Snippet": {
        "prefix": "vector",
        "body": "${1:std_logic_vector}($2 downto $3)",
        "description": "Snippet to make a vector.\nDefault: std_logic_vector.\n"
    },
    "Std Logic Snippet": { 
        "prefix": "std_logic",
        "body": "std_logic",
        // basically the header std_logic_1164 from "use" includes always gets in the way
        "description": "Snippet to show std_logic preview.\n" 
    },

    // values
    "Zero Aggregate Vector": {
        "prefix": "zero",
        "body": "(others=>'0')",
        "description": "Aggregate for setting all bits in vector to zero.\n"
    },
    "Zero Aggregate Array": {
        "prefix": "zeroarray",
        "body": "(others=>(others=>'0'))",
        "description": "Aggregate for setting all elements (and bit in element) to zero.\n"
    },


// ==================================== //
// ======== Testbench Snippets ======== //
// ==================================== //

    "Standard Testbench": {
        "prefix": "testbench",
        "body": [
            "--Engineer     : ${2:Philip Wolfe}",
            "--Date         : ${3:MM}/${4:DD}/2017",
            "--Name of file : ${TM_FILENAME}",
            "--Description  : Test bench for ${1:_entity_being_tested_}.",
            "library ieee;",
            "use ieee.std_logic_1164.all;",
            "use ieee.numeric_std.all;",
            "",
            "entity tb_${1} is",
            "end tb_${1};",
            "",
            "architecture tb_${1}_arch of ${1} is",
                "\t-- constant definitions",
                "\t${5}",
                "\t-- testbench signal declarations",
                "\t${6}",
            "",
            "begin",
                "\t-- instantiate design under test",
                "\tDUT : ${1} port map (",
                "\t\t${7:-- Paste entity's ports here. Connect signals in either form:\n\t\t--    \"in1,in2,out1,out2\"\n\t\t--    \"portname1=>signal1, portname2=>signal2\"}",,
                "\t);",
                "",
                "\t-- initialize signals to 0",
                "\t${8}",
                "\t-- implement some test cases",
                "\t${0}", // final cursor position
                "\t",
            "end tb_${1}_arch;",
            ""
        ],
        "description": "standard vhdl header comments, include, entity, and arch"
    }

    // "Insert Test Case": {
    //     "prefix": "testcase",
    //     "body": [ 
    //         "snippet",
    //         ""
    //     ],
    //     "description": "description"
    // }

}
```

---
settings:
