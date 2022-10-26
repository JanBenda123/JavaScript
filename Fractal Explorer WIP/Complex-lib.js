function complex(r,i){
  this.r = r;
  this.i = i;
  this.abs = function(){
    return Math.sqrt(this.r**2+this.i**2);
  };
  this.arg = function(){
    var a = 0;
    if(this.r ==0){
      if(this.i>0){
        return Math.PI/2;
      }
      else if (this.i<0) {
        return -Math.PI/2;
      }
      else{
        return undefined;
      }
    }
    else if (this.r < 0) {
      if(this.i>=0){
        return Math.atan(this.i/this.r)+Math.PI;
      }
      else if (this.i<0) {
        return Math.atan(this.i/this.r)-Math.PI;
      }
    }
    else{
      return Math.atan(this.i/this.r);
    }
  };
}
function add(a,b){
  var tr = a.r + b.r;
  var ti = a.i + b.i;
  return new complex(tr,ti);
}
function subtract(a,b){
  var tr = a.r - b.r;
  var ti = a.i - b.i;
  return new complex(tr,ti);
}
function multiply(a,b){
  var tr = a.r*b.r - a.i*b.i;
  var ti = a.i*b.r + a.r*b.i;
  return new complex(tr,ti);
}
function divide(a,b){
  var tr = (a.r*b.r+a.i*b.i)/(b.abs()**2);
  var ti = (a.i*b.r-a.r*b.i)/(b.abs()**2);
  return new complex(tr,ti);
}
function powerReal(z,a){
  var tr = (z.abs()**a)*Math.cos(z.arg()*a);
  var ti = (z.abs()**a)*Math.sin(z.arg()*a);
  return new complex(tr,ti);
}
function powerNatural(z,a){
    function P(z,a,c){
        if(a==0){
            return c
        }
        return P(z,a-1,multiply(z,c))
    }
    return P(z,a,new complex(1,0))
}

function exp(z,a){
  var tr = (Math.E**z.r)*Math.cos(z.i);
  var ti = (Math.E**z.r)*Math.sin(z.i);
  return new complex(tr,ti);
}
function power(a,b){
  var tr = a.abs()**b.r*(Math.E**(-b.i*a.arg()))*Math.cos(b.i*Math.log(a.abs())+b.r*a.arg());
  var ti = a.abs()**b.r*(Math.E**(-b.i*a.arg()))*Math.sin(b.i*Math.log(a.abs())+b.r*a.arg());
  return new complex(tr,ti);
}
function log(z){
  var tr = Math.log(z.abs());
  var ti = z.arg();
  return new complex(tr,ti);
}
function sin(z){
  var tr = Math.sin(z.r)*Math.cosh(z.i);
  var ti = Math.cos(z.r)*Math.sinh(z.i);
  return new complex(tr,ti);
}
function cos(z){
  var tr = Math.cos(z.r)*Math.cosh(z.i);
  var ti = -Math.sin(z.r)*Math.sinh(z.i);
  return new complex(tr,ti);
}
function arctan(z){
  var tr = ((new complex(1-z.i,z.r)).arg()-(new complex(1+z.i,-z.r)).arg())/2;
  var ti = Math.log(((1+z.i)**2+z.r**2)/((1-z.i)**2+z.r**2))/4;
  return new complex(tr,ti);
}
