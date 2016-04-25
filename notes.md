#Notes
This is where I'm putting all the expotable code I find with some notes. Feel free to add anything you find, or just some helpful notes. 
##Table of Contents
Page # | topic
-------|------
0|[Table of Contents](#Table of Contents)
1|[Zoom Controle](#Zoom Control)
2|[Dash Controle](#Dash Control)
##Zoom Controle
<div id='Zoom Control'/>
###gsc
####Documention
call: gsc

Type: Variable

Returns: number

####Description
gsc is a varible thats controles the zoom level, among other things. The starting .9 and will get closer to 0 in a Logarithmic fashion as you get bigger. 
####Example
```javascript
gsc *= .5;
```
<div id='Dash Control'/>
##Dash Controle
###setAcceleration
####Documention
Call: setAcceleration(_bool_)

Type: Function

Returns: ?

**Arguments**

Argument | Type | Description
---|---| ---
1 | boolean | State to set dash to

####Description
Sets the dash state
####Example
```javascript
setAcceleration(true);
```
