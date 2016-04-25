<div id='top'/>
#Notes
This is where I'm putting all the expotable code I find with some notes. Feel free to add anything you find, or just some helpful notes. 
##Table of Contents
Page # | call | use
-------|------|----
0 | [Table of Contents](#Table of Contents) | N/A
1 | [gsc](#gsc) | Zoom Control
2 | [setAcceleration()](#setAcceleration) | Dash Control
<div id='gsc'/>
##gsc
###Documention
call: gsc

Type: Variable

Returns: number

###Description
gsc is a varible thats controles the zoom level, among other things. The starting .9 and will get closer to 0 in a Logarithmic fashion as you get bigger. 
###Example
```javascript
gsc *= .5;
```
[Top](#Top)
<div id='setAcceleration'/>
##setAcceleration()
###Documention
Call: setAcceleration(_bool_)

Type: Function

Returns: ?

**Arguments**

Argument | Type | Description
---|---| ---
1 | boolean | State to set dash to

###Description
Sets the dash state
###Example
```javascript
setAcceleration(true);
```
[Top](#Top)
