// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__22472){
var vec__22474 = p__22472;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474,(1),null);
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$union_DASH_entry,cljs.core.cst$kw$union_DASH_key,k,cljs.core.cst$kw$query,v,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$union,cljs.core.cst$kw$query,m,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__22475){
var vec__22478 = p__22475;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22478,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22478,(1),null);
var call = vec__22478;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__6142__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__6142__auto__ = args;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__22479 = ast;
var G__22479__$1 = (((cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22479,cljs.core.cst$kw$type,cljs.core.cst$kw$call):G__22479);
return G__22479__$1;
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),query)], null);
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__22481 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22481,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ast,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$join,cljs.core.cst$kw$query,v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,v))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid join, "),cljs.core.str(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_join], null))})()
)))], 0));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__22482){
var vec__22484 = p__22482;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22484,(1),null);
var ref = vec__22484;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__22486 = expr;
var G__22486__$1 = (((expr instanceof cljs.core.Keyword))?cljs.core._conj(cljs.core.List.EMPTY,G__22486):G__22486);
return G__22486__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args22490 = [];
var len__7200__auto___22505 = arguments.length;
var i__7201__auto___22506 = (0);
while(true){
if((i__7201__auto___22506 < len__7200__auto___22505)){
args22490.push((arguments[i__7201__auto___22506]));

var G__22507 = (i__7201__auto___22506 + (1));
i__7201__auto___22506 = G__22507;
continue;
} else {
}
break;
}

var G__22492 = args22490.length;
switch (G__22492) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22490.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__22493,unparse_QMARK_){
var map__22494 = p__22493;
var map__22494__$1 = ((((!((map__22494 == null)))?((((map__22494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22494):map__22494);
var ast = map__22494__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22494__$1,cljs.core.cst$kw$type);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__22494,map__22494__$1,ast,type){
return (function (p1__22487_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__22487_SHARP_,unparse_QMARK_);
});})(map__22494,map__22494__$1,ast,type))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
} else {
var map__22496 = ast;
var map__22496__$1 = ((((!((map__22496 == null)))?((((map__22496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22496):map__22496);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22496__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22496__$1,cljs.core.cst$kw$query);
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22496__$1,cljs.core.cst$kw$query_DASH_root);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22496__$1,cljs.core.cst$kw$params);
return om.next.impl.parser.wrap_expr(query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_(params))){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),expr);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,expr);
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$join,type))?((unparse_QMARK_ === true)?(function (){var map__22498 = ast;
var map__22498__$1 = ((((!((map__22498 == null)))?((((map__22498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22498):map__22498);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,cljs.core.cst$kw$children);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,cljs.core.cst$kw$component);
if((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))){
return cljs.core.PersistentArrayMap.fromArray([key,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__22498,map__22498__$1,children,component,map__22496,map__22496__$1,key,query,query_root,params,map__22494,map__22494__$1,ast,type){
return (function (p__22500){
var map__22501 = p__22500;
var map__22501__$1 = ((((!((map__22501 == null)))?((((map__22501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22501):map__22501);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22501__$1,cljs.core.cst$kw$union_DASH_key);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22501__$1,cljs.core.cst$kw$children);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22501__$1,cljs.core.cst$kw$component);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__22503 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__22501,map__22501__$1,union_key,children__$1,component__$1,map__22498,map__22498__$1,children,component,map__22496,map__22496__$1,key,query,query_root,params,map__22494,map__22494__$1,ast,type){
return (function (p1__22488_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__22488_SHARP_,unparse_QMARK_);
});})(map__22501,map__22501__$1,union_key,children__$1,component__$1,map__22498,map__22498__$1,children,component,map__22496,map__22496__$1,key,query,query_root,params,map__22494,map__22494__$1,ast,type))
),children__$1);
var G__22503__$1 = ((!((component__$1 == null)))?cljs.core.with_meta(G__22503,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component__$1], null)):G__22503);
return G__22503__$1;
})()], null);
});})(map__22498,map__22498__$1,children,component,map__22496,map__22496__$1,key,query,query_root,params,map__22494,map__22494__$1,ast,type))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([key,(function (){var G__22504 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__22498,map__22498__$1,children,component,map__22496,map__22496__$1,key,query,query_root,params,map__22494,map__22494__$1,ast,type){
return (function (p1__22489_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__22489_SHARP_,unparse_QMARK_);
});})(map__22498,map__22498__$1,children,component,map__22496,map__22496__$1,key,query,query_root,params,map__22494,map__22494__$1,ast,type))
),children);
var G__22504__$1 = ((!((component == null)))?cljs.core.with_meta(G__22504,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)):G__22504);
return G__22504__$1;
})()], true, false);
}
})():cljs.core.PersistentArrayMap.fromArray([key,query], true, false)):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(x,path){
var x_SINGLEQUOTE_ = (function (){var G__22520 = x;
var G__22520__$1 = ((cljs.core.map_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__22520){
return (function (p__22521){
var vec__22522 = p__22521;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22522,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om$next$impl$parser$path_meta(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k))], null);
});})(G__22520))
),G__22520):G__22520);
var G__22520__$2 = ((cljs.core.vector_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (G__22520,G__22520__$1){
return (function (p1__22510_SHARP_,p2__22509_SHARP_){
return om$next$impl$parser$path_meta(p2__22509_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__22510_SHARP_));
});})(G__22520,G__22520__$1))
),G__22520__$1):G__22520__$1);
return G__22520__$2;
})();
var G__22523 = x_SINGLEQUOTE_;
var G__22523__$1 = ((((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__22523,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path):G__22523);
return G__22523__$1;
});
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$om$next_SLASH_abort,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__22525){
var map__22608 = p__22525;
var map__22608__$1 = ((((!((map__22608 == null)))?((((map__22608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22608):map__22608);
var config = map__22608__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$mutate);
return ((function (map__22608,map__22608__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$(cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config));
var map__22650 = (function (){var G__22651 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,om$next$impl$parser$parser_$_self,cljs.core.array_seq([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_DASH_root,cljs.core.cst$kw$om$next_SLASH_root], 0));
var G__22651__$1 = ((!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22651,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY):G__22651);
return G__22651__$1;
})();
var map__22650__$1 = ((((!((map__22650 == null)))?((((map__22650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22650):map__22650);
var env__$1 = map__22650__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22650__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__22650,map__22650__$1,env__$1,path,map__22608,map__22608__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__22680 = om.next.impl.parser.expr__GT_ast(expr);
var map__22680__$1 = ((((!((map__22680 == null)))?((((map__22680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22680):map__22680);
var ast = map__22680__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.cst$kw$query);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.cst$kw$key);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.cst$kw$dispatch_DASH_key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.cst$kw$params);
var env__$2 = (function (){var G__22682 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ast,ast,cljs.core.cst$kw$query,query_SINGLEQUOTE_], null)], 0));
var G__22682__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22682,cljs.core.cst$kw$query):G__22682);
var G__22682__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22682__$1,cljs.core.cst$kw$query,query):G__22682__$1);
var G__22682__$3 = ((cljs.core.vector_QMARK_(key))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22682__$2,cljs.core.cst$kw$query_DASH_root,key):G__22682__$2);
return G__22682__$3;
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (function (){var G__22683 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22683) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$mutate], 0)))].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : mutate.call(null,env__$2,dispatch_key,params));

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__22684 = ret;
var G__22684__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22684,expr):G__22684);
var G__22684__$2 = ((cljs.core.map_QMARK_(ast_SINGLEQUOTE_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22684__$1,om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)):G__22684__$1);
return G__22684__$2;
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var mut_ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{var G__22686_22691 = mut_ret;
var G__22687_22692 = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res).call(null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22686_22691,G__22687_22692) : cljs.core.reset_BANG_.call(null,G__22686_22691,G__22687_22692));
}catch (e22685){var e_22693 = e22685;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_(e_22693))){
throw e_22693;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(error,e_22693) : cljs.core.reset_BANG_.call(null,error,e_22693));
}
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_(value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(dispatch_key),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$value),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$value))], 0)))].join('')));
}
} else {
}

var G__22688 = ret;
var G__22688__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22688,key,value):G__22688);
var G__22688__$2 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret)))?cljs.core.assoc_in(G__22688__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$result], null),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret))):G__22688__$1);
var G__22688__$3 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22688__$2,key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$om$next_SLASH_error,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error))], null)):G__22688__$2);
return G__22688__$3;
}
}
});})(elide_paths_QMARK_,map__22650,map__22650__$1,env__$1,path,map__22608,map__22608__$1,config,read,mutate))
;
var G__22689 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
var G__22689__$1 = ((!((!((target == null))) || (elide_paths_QMARK_)))?om.next.impl.parser.path_meta(G__22689,path):G__22689);
return G__22689__$1;
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__22608,map__22608__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});
