import t from"lightvue/input";import e from"lightvue/button";function n(t,e,n,o,i,l,a,r,s,u){"boolean"!=typeof a&&(s=r,r=a,a=!1);const c="function"==typeof n?n.options:n;let d;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),o&&(c._scopeId=o),l?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,s(t)),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=d):e&&(d=a?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),d)if(c.functional){const t=c.render;c.render=function(e,n){return d.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,d):[d]}return n}const o=n({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("lv-input",t._b({ref:"mainInput",attrs:{type:"number",editable:!0,value:t.modelValue},on:{input:t.updateValue}},"lv-input",t.$attrs,!1),[n("template",{slot:"prepend"},[t.controls?n("LvButton",{class:t.buttonColor,attrs:{icon:t.iconLeft},on:{click:function(e){return t.LocalDecrement(e)}}}):t._e()],1),t._v(" "),n("template",{slot:"append"},[t.controls?n("LvButton",{class:t.buttonColor,attrs:{icon:t.iconRight},on:{click:function(e){return t.LocalIncrement(e)}}}):t._e()],1)],2)},staticRenderFns:[]},undefined,{name:"LvNumber",components:{LvInput:t,LvButton:e},data:()=>({localValue:""}),props:{value:{type:String,default:""},controls:{type:Boolean,default:!0},iconRight:{type:String,default:"light-icon-plus"},iconLeft:{type:String,default:"light-icon-minus"},buttonColor:{type:String,default:"lv--secondary"},max:{type:Number},step:{type:Number,default:1},min:{type:Number,default:0}},methods:{updateValue(t){let e=parseFloat(t);e>=this.min&&(!this.max||e<=this.max)&&(this.localValue=e,this.$emit("input",e),this.$emit("update:modelValue",e))},LocalIncrement(t){this.updateValue(this.modelValue+this.step)},LocalDecrement(t){this.updateValue(this.modelValue-this.step)}},computed:{modelValue(){return this.$attrs.modelValue?this.$attrs.modelValue:this.value?this.value:this.localValue}}},undefined,false,undefined,!1,void 0,void 0,void 0);export default o;
