(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{9525:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/popover",function(){return r(6205)}])},1320:function(e,t,r){"use strict";r.d(t,{k:function(){return i}});var n=r(2784);let i=()=>{let[e,t]=(0,n.useState)({x:0,y:0}),r=e=>{t({x:e.clientX,y:e.clientY})};return(0,n.useEffect)(()=>(window.addEventListener("mousemove",r),()=>window.removeEventListener("mousemove",r)),[]),e}},6205:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(2322),i=r(2784),s=r(3952),o=r(5239),u=r(9561),l=r(9886),a=r(7846),c=r(1320);function d(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(p,{}),(0,n.jsx)("hr",{}),(0,n.jsx)(h,{}),(0,n.jsx)("hr",{}),(0,n.jsx)(f,{}),(0,n.jsx)("hr",{}),(0,n.jsx)(x,{}),(0,n.jsx)("hr",{}),(0,n.jsx)(v,{}),(0,n.jsx)("hr",{}),(0,n.jsx)(j,{}),(0,n.jsx)("hr",{}),(0,n.jsx)(w,{})]})}let m={width:100,height:100,top:100,left:0,right:0,bottom:0,x:0,y:0};function p(){let[e,t]=(0,i.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{onClick:()=>t(e=>!e),children:[e?"Hide":"Show"," Popover"]}),e?(0,n.jsxs)(u.J,{sizes:m,children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris euismod imperdiet."}),(0,n.jsx)("button",{onClick:()=>t(!1),children:"Hide me"})]}):null]})}function h(){let[e,t]=(0,i.useState)(!1),r={...m,width:0,height:0};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{onClick:()=>t(e=>!e),children:[e?"Hide":"Show"," Popover"]}),e?(0,n.jsxs)(u.J,{sizes:r,position:"center",children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris euismod imperdiet."}),(0,n.jsx)("button",{onClick:()=>t(!1),children:"Hide me"})]}):null]})}function f(){let[e,t]=(0,i.useState)(!1),{x:r,y:s}=(0,c.k)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{onClick:()=>t(e=>!e),children:[e?"Hide":"Show"," Popover"]}),e?(0,n.jsx)(u.J,{sizes:{...m,top:s,bottom:s,left:r,right:r},position:"right",children:(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris euismod imperdiet."})}):null]})}function x(){let[e,t]=(0,i.useState)(!1),[r,o]=(0,i.useState)([]),l=(0,i.useRef)(null),c=(0,a.EL)(l,r);return(0,i.useEffect)(()=>{let e=()=>o([]);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris ante. Fusce at ante nunc. Maecenas ut leo eu erat porta fermentum."}),(0,n.jsxs)(s.E.div,{ref:l,drag:!0,onDragEnd:(e,t)=>o([t.point.x,t.point.y]),style:{width:230,height:230,border:"2px solid #5ae",background:"white",padding:10,borderRadius:10,textAlign:"center",fontSize:".7em"},children:["Element followed by a Popover. Drag me!",(0,n.jsx)("hr",{style:{border:0,borderBottom:"1px solid rgba(0,0,0,.3)"}}),(0,n.jsxs)("button",{onClick:()=>t(e=>!e),children:[e?"Hide":"Show"," Popover"]})]}),e?(0,n.jsx)(u.J,{sizes:c,position:"right",children:(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris euismod imperdiet."})}):null]})}function v(){let[e,t]=(0,i.useState)(!1),[r,s]=(0,i.useState)([]),o=(0,i.useRef)(null),l=(0,a.EL)(o,r);return(0,i.useEffect)(()=>{let e=()=>s([]);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{onClick:()=>t(e=>!e),style:{marginBottom:"1em"},children:[e?"Hide":"Show"," Popovers"]})," ",(0,n.jsx)("br",{}),(0,n.jsx)("div",{style:{margin:"0 auto",width:100},ref:o,children:"Lorem ipsum dolor sit amet."}),e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.J,{sizes:l,position:"top",children:"Lorem"}),(0,n.jsx)(u.J,{sizes:l,position:"left",children:"ipsum"}),(0,n.jsx)(u.J,{sizes:l,position:"bottom",children:"dolor"}),(0,n.jsx)(u.J,{sizes:l,position:"right",children:(0,n.jsx)("button",{onClick:()=>t(!1),children:"Hide Popovers"})})]}):null]})}let g={top:"bottom",bottom:"top",right:"left",left:"right"};function j(){let[e,t]=(0,i.useState)(!1),[r,o]=(0,i.useState)([]),l=(0,i.useRef)(null),c=(0,a.EL)(l,r);return(0,i.useEffect)(()=>{let e=()=>o([]);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris ante. Fusce at ante nunc. Maecenas ut leo eu erat porta fermentum."}),(0,n.jsxs)(s.E.div,{ref:l,drag:!0,onDragEnd:(e,t)=>o([t.point.x,t.point.y]),style:{width:250,height:"auto",border:"2px solid #5ae",background:"white",padding:10,borderRadius:10,textAlign:"center",fontSize:".7em"},children:["Element followed by a Popover. Drag me!",(0,n.jsx)("hr",{style:{border:0,borderBottom:"1px solid rgba(0,0,0,.3)"}}),(0,n.jsxs)("button",{onClick:()=>t(e=>!e),children:[e?"Hide":"Show"," Popover"]})]}),e?(0,n.jsx)(u.J,{sizes:c,styles:{popover:(e,t)=>({...e,borderRadius:10,...function(e,t,r){if(!e||"custom"===e)return{};let n="top"===e||"bottom"===e,i={["--rtp-arrow-".concat(n?g[r]:t)]:"22px",["--rtp-arrow-".concat(g[e])]:"-10px",["--rtp-arrow-border-".concat(n?"left":"top")]:"".concat(8,"px solid transparent"),["--rtp-arrow-border-".concat(n?"right":"bottom")]:"".concat(8,"px solid transparent"),["--rtp-arrow-border-".concat(e)]:"".concat(12,"px solid ").concat("white")};return i}(t.position,t.verticalAlign,t.horizontalAlign)})},children:(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris euismod imperdiet."})}):null]})}function w(){let[e,t]=(0,i.useState)(!1),[r,c]=(0,i.useState)([]),d=(0,i.useRef)(null),m=(0,a.EL)(d,r);(0,i.useEffect)(()=>{let e=()=>c([]);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let p=(0,i.useRef)(null),h=(0,a.S1)(d,{}),f=h&&!!h.isIntersecting;return(0,n.jsxs)("div",{ref:p,children:[(0,n.jsxs)("button",{onClick:()=>t(e=>!e),children:[e?"Hide":"Show"," Popover"]}),(0,n.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris euismod imperdiet. Nullam elementum fermentum neque a placerat. Vivamus sed dui nisi. Phasellus vel dolor interdum, accumsan eros ut, rutrum dolor. Etiam in leo urna. Vestibulum maximus vitae urna at congue. Vivamus lectus nisi, pellentesque at orci a, tempor lobortis orci."," ",(0,n.jsx)("span",{ref:d,style:{color:"#5ae"},children:"Praesent non lorem erat."})," ","Ut augue massa, aliquam in bibendum sed, euismod vitae magna. Nulla sit amet sodales augue. Curabitur in nulla in magna luctus porta et sit amet dolor. Pellentesque a magna enim. Pellentesque malesuada egestas urna, et pulvinar lorem viverra suscipit. Duis sit amet mauris ante. Fusce at ante nunc. Maecenas ut leo eu erat porta fermentum."]}),(0,n.jsx)(o.M,{children:e&&f?(0,n.jsxs)(s.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:"relative",zIndex:99999},children:[(0,n.jsx)(l.z,{sizes:m,styles:{maskWrapper:e=>({...e,zIndex:99999})},onClick:()=>{t(!1)}}),(0,n.jsx)(u.J,{sizes:m,children:(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam eu mauris euismod imperdiet."})})]}):null})]})}},5239:function(e,t,r){"use strict";r.d(t,{M:function(){return f}});var n=r(2784),i=r(8387),s=r(3617);function o(){let e=(0,n.useRef)(!1);return(0,s.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var u=r(7967),l=r(3105);class a extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let r=(0,n.useId)(),i=(0,n.useRef)(null),s=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:o,left:u}=s.current;if(t||!i.current||!e||!n)return;i.current.dataset.motionPopId=r;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),n.createElement(a,{isPresent:t,childRef:i,sizeRef:s},n.cloneElement(e,{ref:i}))}let d=({children:e,initial:t,isPresent:r,onExitComplete:i,custom:s,presenceAffectsLayout:o,mode:a})=>{let d=(0,l.h)(m),p=(0,n.useId)(),h=(0,n.useMemo)(()=>({id:p,initial:t,isPresent:r,custom:s,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;i&&i()},register:e=>(d.set(e,!1),()=>d.delete(e))}),o?void 0:[r]);return(0,n.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[r]),n.useEffect(()=>{r||d.size||!i||i()},[r]),"popLayout"===a&&(e=n.createElement(c,{isPresent:r},e)),n.createElement(u.O.Provider,{value:h},e)};function m(){return new Map}var p=r(3422);let h=e=>e.key||"",f=({children:e,custom:t,initial:r=!0,onExitComplete:u,exitBeforeEnter:l,presenceAffectsLayout:a=!0,mode:c="sync"})=>{var m;l&&(c="wait");let[f]=function(){let e=o(),[t,r]=(0,n.useState)(0),s=(0,n.useCallback)(()=>{e.current&&r(t+1)},[t]),u=(0,n.useCallback)(()=>i.Z_.postRender(s),[s]);return[u,t]}(),x=(0,n.useContext)(p.p).forceRender;x&&(f=x);let v=o(),g=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),j=g,w=new Set,E=(0,n.useRef)(j),b=(0,n.useRef)(new Map).current,y=(0,n.useRef)(!0);if((0,s.L)(()=>{y.current=!1,function(e,t){e.forEach(e=>{let r=h(e);t.set(r,e)})}(g,b),E.current=j}),m=()=>{y.current=!0,b.clear(),w.clear()},(0,n.useEffect)(()=>()=>m(),[]),y.current)return n.createElement(n.Fragment,null,j.map(e=>n.createElement(d,{key:h(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:a,mode:c},e)));j=[...j];let L=E.current.map(h),k=g.map(h),P=L.length;for(let e=0;e<P;e++){let t=L[e];-1===k.indexOf(t)&&w.add(t)}return"wait"===c&&w.size&&(j=[]),w.forEach(e=>{if(-1!==k.indexOf(e))return;let r=b.get(e);if(!r)return;let i=L.indexOf(e),s=()=>{b.delete(e),w.delete(e);let t=E.current.findIndex(t=>t.key===e);if(E.current.splice(t,1),!w.size){if(E.current=g,!1===v.current)return;f(),u&&u()}};j.splice(i,0,n.createElement(d,{key:h(r),isPresent:!1,onExitComplete:s,custom:t,presenceAffectsLayout:a,mode:c},r))}),j=j.map(e=>{let t=e.key;return w.has(t)?e:n.createElement(d,{key:h(e),isPresent:!0,presenceAffectsLayout:a,mode:c},e)}),n.createElement(n.Fragment,null,w.size?j:j.map(e=>(0,n.cloneElement)(e)))}}},function(e){e.O(0,[420,706,902,774,888,179],function(){return e(e.s=9525)}),_N_E=e.O()}]);