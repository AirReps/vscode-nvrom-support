# NVROM README

NVROM language support for Visual Studio Code, made by developers in the AirReps community!

## What is NVROM?  
NVROM is a simple config language for bluetooth headphones mainly. It is currently only publically used by Mediatek and Airoha (partnered companies, might mean that it is propriatery to them).  
  
The comments are similar to javascript single line comments (//).  
You specify a key (RegExp(/&0x[A-F0-9]+/)) on the left side of a "=" operator and a value (RegExp(/[A-F0-9]+/)) on the right side.  
That's basically it, it's fairly simple, as far as we know, there's not much more in it (there is no public specification of the language).

## Features

1. Highlighting of .nvr files.  
2. Hover on a key to get the name of the hex key for Airoha/Mediatek chipsets.  
3. Hover on hex to convert to text and numeric values.  

## Requirements

You will need to have Visual Studio Code 1.31.0 or higher.