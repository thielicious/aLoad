# aLoad

Automatically loads classes from a given path separated in modules

---
<br>

## INTRODUCTION

aLoad ('a' abbr. for **auto**) is a flexible auto class loader using a module-based separator. 
<br>
<br>


## SETUP INFORMATION

This script requires no additional frameworks or libraries.
<br>
<br>
Use your CLI and enter the following to clone:<br>
<code>
git clone https://github.com/thielicious/aLoad.git
</code>
<br>
<br>


## USAGE

<code>aload::register(<em>array</em> module | <em>string</em> "all", [<em>string</em> folderpath]);</code>

Simply register modules and define the foldername if your PHP classes reside in a different directory. 
- **modules** are separated file contents. Usually classes are named "**class**" e.g. email.class.php and additional code that is included are called "**inc**" e.g. utilities.inc.php. Feel free to name them however you want. 
- You may use "**all**" as the first parameter to register all PHP scripts in the specified folder if you don't use modules.
- Leave the parameter for the foldername blank if your scripts are in your root directory.

## EXAMPLE
<pre>
<code>
require_once "scripts/aload.class.php";
aload::register(["class", "inc"], "scripts/");
</code>
</pre>
This example above will register all PHP files containing the module name "class" and "inc" in the folder "scripts".<br>
<pre>
<code>
require_once "aload.class.php";
aload::register("all");
</code>
</pre>
This above will register all PHP files without modules in your root directory.
<br>
<br>


#### If you encounter any bugs, feel free to open up an [issue](https://github.com/thielicious/aLoad/issues), thank you.<br>
---
[thielicious.github.io](http://thielicious.github.io)
