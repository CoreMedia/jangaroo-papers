joo.classLoader.prepare("package joo.util",/* {*/
  "public class Offset",1,function($$private){;return[ 
  "public static const",{ HOME/* :Offset*/ :function(){return( new joo.util.Offset(0, 0));}},
  "public var",{ left/* :Number*/:NaN},
  "public var",{ top/* :Number*/:NaN},

  "public  function Offset",function Offset$(left/* :Number*/, top/* :Number*/) {
    this.left = left;
    this.top = top;
  },
  "public  function clone",function clone()/* :Offset*/  {
    return new joo.util.Offset(this.left, this.top);
  },
  "public  function getDistance",function getDistance()/* :Number*/  {
    return Math.sqrt(this.left*this.left + this.top*this.top);
  },
  "public  function scale",function scale(factor/*  :Number*/)/* :Offset*/  {
    return new joo.util.Offset(this.left*factor, this.top*factor);
  },
  "public  function isHome",function isHome()/* :Boolean*/  {
    return this.left==0 && this.top==0;
  },
];},[],["Math"], "0.8.0", "0.8.4");