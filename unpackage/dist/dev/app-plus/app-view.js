var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-icon']],[[2,'+'],[1,'icon-'],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[7],[3,'size']],[1,'px']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'login-contenr'])
Z([3,'login-input'])
Z([3,'账号'])
Z([3,'text'])
Z([3,''])
Z(z[1])
Z([3,'密码'])
Z([3,'password'])
Z(z[4])
Z([3,'login-button'])
Z([3,'none'])
Z([1,true])
Z([3,'primary'])
Z([3,'登录'])
Z([3,'language-select'])
Z([3,'zh/'])
Z([3,'__l'])
Z([3,'language1'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'details'])
Z([3,'details'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'receiving-content'])
Z([3,'我是收货页面'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navigationToDetails']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'详情'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/wms-icons/wms-icons.wxml','./pages/home/index.wxml','./pages/login/index.wxml','./pages/receiving/details/index.wxml','./pages/receiving/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_n('view')
_rz(z,oD,'class',0,e,s,gg)
var fE=_n('view')
_(oD,fE)
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var oH=_mz(z,'input',['class',1,'placeholder',1,'type',2,'value',3],[],e,s,gg)
_(hG,oH)
var cI=_mz(z,'input',['class',5,'placeholder',1,'type',2,'value',3],[],e,s,gg)
_(hG,cI)
var oJ=_mz(z,'button',['disabled',-1,'class',9,'hoverClass',1,'loading',2,'type',3],[],e,s,gg)
var lK=_oz(z,13,e,s,gg)
_(oJ,lK)
_(hG,oJ)
var aL=_n('view')
_rz(z,aL,'class',14,e,s,gg)
var tM=_n('text')
var eN=_oz(z,15,e,s,gg)
_(tM,eN)
_(aL,tM)
var bO=_mz(z,'wms-icon',['bind:__l',16,'type',1,'vueId',2],[],e,s,gg)
_(aL,bO)
_(hG,aL)
_(r,hG)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var xQ=_n('view')
_rz(z,xQ,'class',0,e,s,gg)
var oR=_oz(z,1,e,s,gg)
_(xQ,oR)
_(r,xQ)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var hU=_oz(z,1,e,s,gg)
_(cT,hU)
var oV=_mz(z,'button',['bindtap',2,'data-event-opts',1,'type',2],[],e,s,gg)
var cW=_oz(z,5,e,s,gg)
_(oV,cW)
_(cT,oV)
_(r,cT)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@charset \x22UTF-8\x22;\nwx-view, wx-input, wx-button { font-size: 14px; }\nwx-button { background: #3cc51f !important; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/wms-icons/wms-icons.wxss']=setCssToHead(["@font-face { font-family: wmsicons; font-weight: normal; font-style: normal; src: url(\x27https://at.alicdn.com/t/font_1436058_fqkpifs2ib.ttf?t\x3d1569566747938\x27) format(\x27truetype\x27); }\n.",[1],"uni-icon-wrapper { line-height: 1; }\n.",[1],"uni-icon { font-family: wmsicons; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"icon-language1:before { content: \x22\\E60B\x22; }\n",],undefined,{path:"./components/wms-icons/wms-icons.wxss"});    
__wxAppCode__['components/wms-icons/wms-icons.wxml']=$gwx('./components/wms-icons/wms-icons.wxml');

__wxAppCode__['pages/home/index.wxss']=setCssToHead([".",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"logo { height: ",[0,200],"; width: ",[0,200],"; margin-top: ",[0,200],"; margin-left: auto; margin-right: auto; margin-bottom: ",[0,50],"; }\n.",[1],"text-area { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"title { font-size: ",[0,36],"; color: #8f8f94; }\n",],undefined,{path:"./pages/home/index.wxss"});    
__wxAppCode__['pages/home/index.wxml']=$gwx('./pages/home/index.wxml');

__wxAppCode__['pages/login/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"login-contenr { -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; background-image: url(\x22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAGMCAYAAACFyScGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNkI1MjVBMUE2RTdFNjExODg5NUNFQUIzNEM5OTAzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NzI3Q0Q0Nzc2OTkxMUU4OEU3OUE3M0E1NjhCQTJDNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzI3Q0Q0Njc2OTkxMUU4OEU3OUE3M0E1NjhCQTJDNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozYzQ3NjlkYi1jZTdhLTk3NGEtYWZmNS0zNThmMmFkNjc3YjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzZCNTI1QTFBNkU3RTYxMTg4OTVDRUFCMzRDOTkwM0QiLz4gPC9yZGY6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\x3d\x22); background-size: 100%; background-repeat: no-repeat; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding: 200px 20px 0px 20px; }\n.",[1],"login-contenr .",[1],"login-input { border-radius: 45px; height: 45px; -webkit-box-shadow: 0 0 8px 2px #bdb1b1; box-shadow: 0 0 8px 2px #bdb1b1; margin-bottom: 16px; padding: 0px 20px; }\n.",[1],"login-contenr .",[1],"login-button { width: 100%; }\n",],undefined,{path:"./pages/login/index.wxss"});    
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/receiving/details/index.wxss']=undefined;    
__wxAppCode__['pages/receiving/details/index.wxml']=$gwx('./pages/receiving/details/index.wxml');

__wxAppCode__['pages/receiving/index.wxss']=undefined;    
__wxAppCode__['pages/receiving/index.wxml']=$gwx('./pages/receiving/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
