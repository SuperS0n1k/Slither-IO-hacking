<div id='top'/>
#Notes
This is where I'm putting all the expotable code I find with some notes. Feel free to add anything you find, or just some helpful notes. 
<div id='TableofContents'/>
##Table of Contents
Page # | call | use
-------|------|----
0 | [Table of Contents](#Table of Contents) | N/A
1 | [gsc](#gsc) | Zoom Control
2 | [setAcceleration()](#setAcceleration) | Dash Control
3 | [ym and xm](#ym&xm) | mouse locashion
4 | [lsym and lsxm](#lsym&lsxm) | Nothing
5 | [Important places in code](#Importantcode) | N/A
<div id='gsc'/>
##gsc
###Documention
**Specs:**

usage: gsc

Type: number

###Description
gsc is a varible thats controls the zoom level, among other things. The starting .9 and will get closer to 0 in a logarithmic fashion as your snake gets bigger. 
###Example
```javascript
gsc *= .5;
```
[Top](#Top)
<div id='setAcceleration'/>
##setAcceleration()
###Documention
**Specs:**

Usage: setAcceleration(_bool_)

Type: Function

Returns: null

**Arguments:**

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
<div id='ym&xm'/>
##ym and xm
###Documention
**Specs:**
Usage: ym 

Type: number

Usage: xm

Type: number
###Description
xm and ym are variables that holds the mouse locashion. Thay are set at line 2182 with this code;
```javascript
window.onmousemove = function(b) {
    (b = b || window.event) && "undefined" != typeof b.clientX && (xm = b.clientX - ww / 2, ym = b.clientY - hh / 2)
};
```
###Example
TODO
<div id='lsym&lsxm'/>
##lsym and lsxm
###Documention
**Specs:**
Usage: lsym

Type: number

Usage: lsxm

Type: number
###Description
lsxm and lsym are the last value of xm and ym (I think?). Thay are set at line 1620 with this code;
```javascript
want_e && 100 < b - last_e_mtm && (want_e = !1, last_e_mtm = b, lsxm = xm, lsym = ym, d2 = xm * xm + ym * ym, 256 < d2 ? (ang = Math.atan2(ym, xm), snake.eang = ang) : ang = snake.wang, ang %= pi2, 0 > ang && (ang += pi2), 5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2), sang != lsang && (lsang = sang, u = new Uint8Array(1), u[0] = sang & 255, lpstm = b, ws.send(u.buffer))) :
            (sang = Math.floor(16777215 * ang / pi2), sang != lsang && (lsang = sang, u = new Uint8Array(4), u[0] = 101, u[1] = sang >> 16 & 255, u[2] = sang >> 8 & 255, u[3] = sang & 255, lpstm = b, ws.send(u.buffer))))
```
(lsxm = xm, lsym = ym)
###Example
TODO
<div id='Importantcode'/>
##Importint Code
####This one looks Important
Line 1618 - 1622
```javascript
    if (null != snake) {
        if (xm != lsxm || ym != lsym) want_e = !0;
        want_e && 100 < b - last_e_mtm && (want_e = !1, last_e_mtm = b, lsxm = xm, lsym = ym, d2 = xm * xm + ym * ym, 256 < d2 ? (ang = Math.atan2(ym, xm), snake.eang = ang) : ang = snake.wang, ang %= pi2, 0 > ang && (ang += pi2), 5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2), sang != lsang && (lsang = sang, u = new Uint8Array(1), u[0] = sang & 255, lpstm = b, ws.send(u.buffer))) :
            (sang = Math.floor(16777215 * ang / pi2), sang != lsang && (lsang = sang, u = new Uint8Array(4), u[0] = 101, u[1] = sang >> 16 & 255, u[2] = sang >> 8 & 255, u[3] = sang & 255, lpstm = b, ws.send(u.buffer))))
    }
```
