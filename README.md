# aLoad

Automatically loads PHP classes from a given path based on a modular separator.

---
<br>

## INTRODUCTION

aLoad ('a' abbr. for **auto**) is a flexible auto class loader primarily based on a modular separator. 
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

<code>aLoad::register(<em>array</em> module || aLoad::ALL, [<em>string</em> folderpath]);</code>

Simply register modules and define the foldername if your PHP classes reside in a different directory. 
- **modules** are separated file contents. Usually classes are named "**class**" e.g. email.class.php and additional code that is included are called "**inc**" e.g. utilities.inc.php. Feel free to name them however you want. 
- If you don't want to use modules, you may use the constant "**aLoad::ALL**" as the first parameter to register all PHP scripts which have no modules.
- Leave the parameter for the foldername blank if your scripts are in your root directory.
- Feel free to remove or change the namespace.

## EXAMPLE
<pre>
<code>
require_once "scripts/aLoad.class.php";
aLoad::register(["class", "inc"], "scripts/");
</code>
</pre>
This example above will register all PHP files containing the module name "class" and "inc" in the folder "scripts".<br>
<pre>
<code>
require_once "aLoad.class.php";
aLoad::register(aLoad::ALL);
</code>
</pre>
This above will register all PHP files without modules in your root directory.

<br>
<br>


###### If you encounter any bugs, feel free to open up an [issue](https://github.com/thielicious/aLoad/issues), thank you.<br>
---
[thielicious.github.io](http://thielicious.github.io)
