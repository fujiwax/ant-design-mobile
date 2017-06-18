webpackJsonp([50,157],{640:function(e,t){e.exports={content:["article",["p","Here list some of main incompatible changes and recommended changes in the upgrade. See ",["a",{title:null,href:"/changelog"},"Changelog"]," for all changes."],["h2","0.9.x => 1.0"],["p","After 1.0, ",["code","antd-mobile"]," strictly follows ",["a",{title:null,href:"http://semver.org/"},"Semantic Versioning 2.0.0"],"."],["p","Significant changes are as follows:"],["h3","The icon in the component changes from iconfont to svg"],["p","The usage of the Icon component has not changed, like: ",["code",'<Icon type="check" />'],",\nBut because it is no longer font, so css font-size settings are no longer effective,\nthe position offset settings relative to other elements are also slightly different,\nThe setup requirements on the tool are more complex than before. ",["a",{title:null,href:"https://mobile.ant.design/components/icon/"},"See Icon docs for details"],"."],["h3","Web ",["code","Slider"]," split into ",["code","Slider"],", ",["code","Range"],", ",["code","createTooltip"],", ",["a",{title:null,href:"https://mobile.ant.design/components/slider"},"See Slider docs for details"]," and ",["a",{title:null,href:"https://mobile.ant.design/components/range"},"Range docs"],"."],["h3","Other instructions"],["blockquote",["p","Introduces changes to the core of the components."]],["ul",["li",["p","The internal html element of the Button component is replaced by the ",["code","a"]," tag, and the corresponding ",["code","htmlType"]," API is invalid."]],["li",["p",'Some controls of Form component distinguish "',["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html#controlled-components"},"control state"],'" more clearly.']],["li",["p","The NoticeBar component supports the common landscape wheel function."]],["li",["p",["code","DatePicker"]," and ",["code","Pagination"]," can not set ",["code","okText"]," or ",["code","dismissText"]," prop anymore, you can use ",["a",{title:null,href:"https://mobile.ant.design/components/locale-provider/"},"LocalProvider"]," to switch langulage."]],["li",["p","The ",["code","locale"]," prop of ",["code","DatePicker"]," changes, now it's ",["code","{DatePickerLocale, okText, dismissText}"],"."]]],["h2","0.8.x => 0.9"],["p","Optimize the style and compatibility of each component, and enhance component performance such as long lists."],["p","See ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/releases/tag/0.9.0"},"tag/0.9.0"]," for details."],["h2","0.7.x => 0.8.0"],["p","Add HD program settings, see\n",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki"},"antd mobile 0.8 \u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"]," for details."],["p","Other details see ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/releases/tag/0.8.0"},"tag/0.8.0"],"."],["h2","0.5.x => 0.6.0"],["p","See ",["a",{title:null,href:"/changelog#0.6.0"},"Changelog"]," for details."]],meta:{order:4,title:"Upgrade",filename:"docs/react/upgrade-notes.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#0.9.x-=>-1.0",title:"0.9.x => 1.0"},"0.9.x => 1.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.8.x-=>-0.9",title:"0.8.x => 0.9"},"0.8.x => 0.9"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.7.x-=>-0.8.0",title:"0.7.x => 0.8.0"},"0.7.x => 0.8.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.5.x-=>-0.6.0",title:"0.5.x => 0.6.0"},"0.5.x => 0.6.0"]]]}}});