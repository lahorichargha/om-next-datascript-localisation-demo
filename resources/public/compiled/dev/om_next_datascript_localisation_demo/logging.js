// Compiled by ClojureScript 1.7.228 {}
goog.provide('om_next_datascript_localisation_demo.logging');
goog.require('cljs.core');
om_next_datascript_localisation_demo.logging.logging_is_on = false;
om_next_datascript_localisation_demo.logging.log = (function om_next_datascript_localisation_demo$logging$log(var_args){
var args__7207__auto__ = [];
var len__7200__auto___9952 = arguments.length;
var i__7201__auto___9953 = (0);
while(true){
if((i__7201__auto___9953 < len__7200__auto___9952)){
args__7207__auto__.push((arguments[i__7201__auto___9953]));

var G__9954 = (i__7201__auto___9953 + (1));
i__7201__auto___9953 = G__9954;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((2) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((2)),(0))):null);
return om_next_datascript_localisation_demo.logging.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7208__auto__);
});

om_next_datascript_localisation_demo.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","logging-is-on","om-next-datascript-localisation-demo.logging/logging-is-on",1870486969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","interpose","cljs.core/interpose",-1277634695,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),args)))))))))))))))))));
});

om_next_datascript_localisation_demo.logging.log.cljs$lang$maxFixedArity = (2);

om_next_datascript_localisation_demo.logging.log.cljs$lang$applyTo = (function (seq9949){
var G__9950 = cljs.core.first.call(null,seq9949);
var seq9949__$1 = cljs.core.next.call(null,seq9949);
var G__9951 = cljs.core.first.call(null,seq9949__$1);
var seq9949__$2 = cljs.core.next.call(null,seq9949__$1);
return om_next_datascript_localisation_demo.logging.log.cljs$core$IFn$_invoke$arity$variadic(G__9950,G__9951,seq9949__$2);
});

om_next_datascript_localisation_demo.logging.log.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_env = (function om_next_datascript_localisation_demo$logging$log_env(_AMPERSAND_form,_AMPERSAND_env,env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","logging-is-on","om-next-datascript-localisation-demo.logging/logging-is-on",1870486969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","log","om-next-datascript-localisation-demo.logging/log",-1477206961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"- env contains:"),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__9955__auto__","k__9955__auto__",-2041417249,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ast","ast",-860334068)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"shared","shared",-384145993)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"target","target",253001721)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"query","query",-1288509510)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("query","root","query/root",-68034309)))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__9955__auto__","k__9955__auto__",-2041417249,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","log","om-next-datascript-localisation-demo.logging/log",-1477206961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"- "),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__9955__auto__","k__9955__auto__",-2041417249,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__9955__auto__","k__9955__auto__",-2041417249,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))))))))))))))))));
});

om_next_datascript_localisation_demo.logging.log_env.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_params = (function om_next_datascript_localisation_demo$logging$log_params(_AMPERSAND_form,_AMPERSAND_env,env,key,params){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","logging-is-on","om-next-datascript-localisation-demo.logging/logging-is-on",1870486969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","log","om-next-datascript-localisation-demo.logging/log",-1477206961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"- key"),cljs.core._conj.call(null,cljs.core.List.EMPTY,key))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","log","om-next-datascript-localisation-demo.logging/log",-1477206961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"- params"),cljs.core._conj.call(null,cljs.core.List.EMPTY,params))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","log-env","om-next-datascript-localisation-demo.logging/log-env",590972227,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env))))))));
});

om_next_datascript_localisation_demo.logging.log_params.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_read = (function om_next_datascript_localisation_demo$logging$log_read(_AMPERSAND_form,_AMPERSAND_env,env,key,params){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","logging-is-on","om-next-datascript-localisation-demo.logging/logging-is-on",1870486969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","log-params","om-next-datascript-localisation-demo.logging/log-params",2012576465,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env),cljs.core._conj.call(null,cljs.core.List.EMPTY,key),cljs.core._conj.call(null,cljs.core.List.EMPTY,params))))))));
});

om_next_datascript_localisation_demo.logging.log_read.cljs$lang$macro = true;
om_next_datascript_localisation_demo.logging.log_mutate = (function om_next_datascript_localisation_demo$logging$log_mutate(_AMPERSAND_form,_AMPERSAND_env,env,key,params){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","logging-is-on","om-next-datascript-localisation-demo.logging/logging-is-on",1870486969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om-next-datascript-localisation-demo.logging","log-params","om-next-datascript-localisation-demo.logging/log-params",2012576465,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,env),cljs.core._conj.call(null,cljs.core.List.EMPTY,key),cljs.core._conj.call(null,cljs.core.List.EMPTY,params))))))));
});

om_next_datascript_localisation_demo.logging.log_mutate.cljs$lang$macro = true;

//# sourceMappingURL=logging.js.map?rel=1452427520690