# MoodIO
MoodIO is a (set of) application(s) to get an insight in the mental and
possibly phisical state of people. Primarily aimed at children to assist their
doctor in evaluating their well being.  

## Installation
TODO: Describe the installation process  

## Usage
TODO: Write usage instructions  

## Contributing
1. Fork it!  
2. Create your feature branch: `git checkout -b my-new-feature`  
3. Commit your changes: `git commit -am 'Add some feature'`  
4. Push to the branch: `git push origin my-new-feature`  
5. Submit a pull request :D  

## Coding Guidelines  
### Indentation  
Use tabs (and configure your IDE to show a size of 8 spaces for them) for writing your code (hopefully we can keep this consistent). If you are modifying someone else’s code, try to keep the coding style similar.  

    for (i = 0; i < 10; i++) {  
        if (something (i)) {  
            do_more ();  
        }
    }  

### Performance and Readability  
- It is more important to be correct than to be fast.  
- It is more important to be maintainable than to be fast.  
- Fast code that is difficult to maintain is likely going to be looked down upon.  

### Where to put spaces  
Use a space before an opening parenthesis when calling functions, or indexing, like this:  

    method(a);  
    b[10];

Do not put a space after the opening parenthesis and the closing one, ie:  
good:  

    method(a);  
    array[10];

bad:  

    method ( a );  
    array[ 10 ];

Do not put a space between the generic types, ie:  
good:  

    var list = new List<int>();
bad:

    var list = new List <int> ();

### Where to put braces  
Inside a code block, put the opening brace on the same line as the statement:  
good:  

    if (a) {  
        code();  
        code();  
    }  
bad:

    if (a)  
    {  
        code();  
        code();  
    }

When defining a method, use the K&R style for brace placement, that means, use a new line for the brace, like this:  
good:  

    void method() {  
    }
bad:

    void method()  
    {  
    }

If statements with else clauses are formatted like this:  

good:  

    if (dingus) {  
            ...  
    } else {  
            ...  
    }

bad:  

    if (dingus)  
    {  
            ...  
    }  
    else  
    {  
            ...  
    }
bad:  

    if (dingus) {  
            ...  
    }  
    else {  
            ...  
    }

To summarize:  

Statement | Brace position
--- | ---
Namespace | same line
Type | same line
Method (including constructor) | same line
Properties | same line
Control blocks (if, for…) | same line
Anonymous types and methods | same line

### File headers  
For any new files, please use a descriptive introduction, like this:  

    /*  
     * System.Comment.cs: Handles comments in System files.  
     *  
     * Author:  
     *   Juan Perez (juan@address.com)  
     *  
     * Copyright (C) 2002 Address, Inc (http://www.address.com)  
     */

If you are modyfing someone else’s code, and your contribution is significant, please add yourself to the Authors list.  

### Singleline comments
For short comments use:

    // Blah blah blah

### Multiline comments  
For long, multiline comments use:  

    /*  
     * Blah  
     * Blah again  
     * and another Blah  
     */

### Casing  
Argument names should use the camel casing for identifiers, like this:  

good:  

    void myMethod (string myArgument)
bad:  

    void MyMethod (string lpstrArgument)  
    void MyMethod (string my_string)

Although some changes were made, this is the main source for the coding guidelines: http://www.mono-project.com/community/contributing/coding-guidelines/

## History  
TODO: Write history  

## Credits  
### Contributers:
- Patrick Duffy  
- Remco van den Boogaert
- Jeroen Vijgen
- Patrick Spek
- Sander Grandia

## License  
TODO: Write license  
