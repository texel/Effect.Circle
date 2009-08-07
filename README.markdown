Effect.Circle
=============
----------------

Effect.Move is fantastic, but have you ever wished you could animate your positioned elements in a circle? A semicircle? Any other permutation thereof? Well wish no more, **Effect.Circle** is here to bring all your dreams to vivid fruition.

¿But How?
---------
So glad you asked, but the upside-down question mark was kind of unnecessary. At any rate, you create an instance of Effect.Circle much the same as you would any effect:

    new Effect.Circle($('my_awesome_div'), {x: 5, y: 0, mode: 'relative', duration: 1.0, rotations: 1.0});
    
This would cause your awesome div to rotate once about a center point 5 pixels to the right of its current location. As you may have guessed, you can also pass in the "absolute" mode, which allows your center point to be defined in absolute terms. If you want your object to keep rotating over a longer period of time, you can specify a longer duration, and multiply your rotations accordingly:

    new Effect.Circle($('my_awesome_div'), {x: 5, y: 0, mode: 'relative', duration: 300, rotations: 300});
    
Naturally, you can slow down or speed up the effect by changing the relationship between duration and number of rotations.

License
-------

(The MIT License)

Copyright (c) 2009 Onehub

http://onehub.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
