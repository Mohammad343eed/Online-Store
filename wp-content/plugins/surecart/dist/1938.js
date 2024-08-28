"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1938],{1938:function(e,i,n){n.r(i),n.d(i,{sc_choices:function(){return d}});var t=n(9062),s=n(5861),c=n(5671),r=n(3144),a=n(1284),h=n.n(a),o=n(8860),l=0,d=function(){function e(i){(0,c.Z)(this,e),(0,o.r)(this,i),this.inputId="choices-".concat(++l),this.helpId="choices-help-text-".concat(l),this.labelId="choices-label-".concat(l),this.label="",this.size="medium",this.autoWidth=void 0,this.required=!1,this.showLabel=!0,this.help="",this.hideLabel=!1,this.columns=1,this.errorMessage="",this.width=void 0}var i;return(0,r.Z)(e,[{key:"triggerFocus",value:(i=(0,s.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.el.focus();case 1:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"componentDidLoad",value:function(){this.handleRequiredChange(),this.handleResize()}},{key:"handleRequiredChange",value:function(){var e=this,i=(0,t.Z)(this.el.querySelectorAll("sc-choice, sc-choice-container"));i.length&&i.forEach((function(i){i.required=e.required}))}},{key:"handleResize",value:function(){var e=this;"ResizeObserver"in window&&new window.ResizeObserver((function(i){i.forEach((function(i){e.width=i.contentRect.width}))})).observe(this.el)}},{key:"render",value:function(){return(0,o.h)("fieldset",{part:"base",class:{choices:!0,"choices--hide-label":this.hideLabel,"choices--auto-width":this.autoWidth,"breakpoint-sm":this.width<384,"breakpoint-md":this.width>=384&&this.width<576,"breakpoint-lg":this.width>=576&&this.width<768,"breakpoint-xl":this.width>=768},role:"radiogroup"},(0,o.h)("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId},(0,o.h)("div",{part:"choices",class:"choices__items"},(0,o.h)("slot",null))))}},{key:"el",get:function(){return(0,o.a)(this)}}],[{key:"watchers",get:function(){return{required:["handleRequiredChange"]}}}]),e}();d.style=":host {\n  display: block;\n}\n\n.choices {\n  container-type: inline-size;\n}\n.choices ::slotted(div) {\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.choices:not(.choices--auto-width) ::slotted(div) {\n  margin: 0;\n  display: grid;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.breakpoint-lg ::slotted(div),\n.breakpoint-xl ::slotted(div) {\n  grid-template-columns: repeat(var(--columns, 1), 1fr);\n}\n\n.choices .choices__items {\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.choices:not(.choices--auto-width) .choices__items {\n  display: grid;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.choices {\n  border: none;\n  padding: 0;\n  margin: 0;\n  min-width: 0;\n  margin: 0;\n}\n.choices .choices__label {\n  font-family: var(--sc-input-font-family);\n  font-size: var(--sc-input-font-size-medium);\n  font-weight: var(--sc-input-font-weight);\n  color: var(--sc-input-color);\n  padding: 0 var(--sc-spacing-xx-small);\n}\n\n.choices__items {\n  display: grid;\n  gap: var(--sc-choices-gap, 10px);\n  grid-auto-rows: 1fr;\n}\n\n.choices__items {\n  grid-template-columns: repeat(var(--columns, 1), 1fr);\n}\n\n@container (max-width: 419px) {\n  .choices__items {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}"}}]);