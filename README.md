#aLoad

(PHP) Automatically loads classes from a given path

---
<br>

##INTRODUCTION

aLoad ('a' abbr. for **auto**) is a flexible auto loader for classes using a given path. 
<br>
<br>


##SETUP INFORMATION

This script requires no additional frameworks or libraries.
<br>
<br>
Use your CLI and enter the following to clone:<br>
<code>
git clone https://github.com/thielicious/aLoad.git
</code>
<br>
<br>


##USAGE

Create an object of it and define the folder if your PHP clases reside in a different directory. 
<pre>
<code>
$aload = new aLoad(); 	// optional
$aload->classDir("classes/"); 	// optional
aLoad::register();
</code>
</pre>
And then, include the aLoad class in your php page.
<pre>
<code>
require_once "aLoad.class.php";
</code>
</pre>
<br>
<br>


####If you encounter any bugs, feel free to open up an [issue](https://github.com/thielicious/aLoad/issues), thank you.<br>
---
[thielicious.github.io] (http://thielicious.github.io)
