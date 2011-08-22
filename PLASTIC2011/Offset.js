1 joo.classLoader.prepare("package joo.util",/* {*/
 2  "public class Offset",1,function($$private){;return[ 
 3    "public static const",{ HOME/* :Offset*/ :function(){return( new 
joo.util.Offset(0, 0));}},
 4    "public var",{ left/* :Number*/:NaN},
 5    "public var",{ top/* :Number*/:NaN},
 6 
 7    "public  function Offset",function Offset$(left/* :Number*/, top/* :Number*/) {
 8      this.left = left;
 9      this.top = top;
10    },
11    "public  function clone",function clone()/* :Offset*/  {
12      return new joo.util.Offset(this.left, this.top);
13    },
14    "public  function getDistance",function getDistance()/* :Number*/  {
15      return Math.sqrt(this.left*this.left + this.top*this.top);
16    },
17    "public  function scale",function scale(factor/*  :Number*/)/* :Offset*/  {
18      return new joo.util.Offset(this.left*factor, this.top*factor);
19    },
20    "public  function isHome",function isHome()/* :Boolean*/  {
21      return this.left==0 && this.top==0;
22    },
23  ];},[],["Math"], "0.8.0", "0.8.4");