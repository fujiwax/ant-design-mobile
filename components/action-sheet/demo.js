webpackJsonp([46,157],{471:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/action-sheet/demo/basic.md",id:"components-action-sheet-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ActionSheet<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Toast<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// fix touch to scroll background page on iOS</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/307</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/163</span>\n<span class="token keyword">const</span> isIPhone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">\'\\\\biPhone\\\\b|\\\\biPod\\\\b\'</span><span class="token punctuation">,</span> <span class="token string">\'i\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> wrapProps<span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>isIPhone<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  wrapProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    onTouchStart<span class="token punctuation">:</span> e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> iconList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u53d1\u9001\u7ed9\u670b\u53cb\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u65b0\u6d6a\u5fae\u535a\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u751f\u6d3b\u5708\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u5fae\u4fe1\u597d\u53cb\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'QQ\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./refresh.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u5237\u65b0\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./link.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u94fe\u63a5\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./complaints.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string">\'\u6295\u8bc9\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      clicked<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n      clicked1<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n      clicked2<span class="token punctuation">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showActionSheet <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> BUTTONS <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'\u64cd\u4f5c\u4e00\'</span><span class="token punctuation">,</span> <span class="token string">\'\u64cd\u4f5c\u4e8c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u64cd\u4f5c\u4e09\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5220\u9664\'</span><span class="token punctuation">,</span> <span class="token string">\'\u53d6\u6d88\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">,</span>\n      cancelButtonIndex<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      destructiveButtonIndex<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'\u6807\u9898\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\'</span><span class="token punctuation">,</span>\n      maskClosable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token string">\'data-seed\'</span><span class="token punctuation">:</span> <span class="token string">\'logId\'</span><span class="token punctuation">,</span>\n      wrapProps<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked<span class="token punctuation">:</span> BUTTONS<span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showShareActionSheet <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> icons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>iconList<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    icons<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showShareActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> icons<span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'\u6807\u9898\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\'</span><span class="token punctuation">,</span>\n      className<span class="token punctuation">:</span> <span class="token string">\'my-action-sheet\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked1<span class="token punctuation">:</span> buttonIndex <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> icons<span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token punctuation">:</span> <span class="token string">\'cancel\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment" spellcheck="true">// also support Promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'1000ms \u540e\u5173\u95ed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showShareActionSheetMulpitleLine <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> icons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">...</span>iconList<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>iconList<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> iconList<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> iconList<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    ActionSheet<span class="token punctuation">.</span><span class="token function">showShareActionSheetWithOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> icons<span class="token punctuation">,</span>\n      <span class="token comment" spellcheck="true">// title: \'\u6807\u9898\',</span>\n      message<span class="token punctuation">:</span> <span class="token string">\'\u6211\u662f\u63cf\u8ff0\u6211\u662f\u63cf\u8ff0\'</span><span class="token punctuation">,</span>\n      className<span class="token punctuation">:</span> <span class="token string">\'my-action-sheet\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>buttonIndex<span class="token punctuation">,</span> rowIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> clicked2<span class="token punctuation">:</span> buttonIndex <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> icons<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span><span class="token punctuation">[</span>buttonIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token punctuation">:</span> <span class="token string">\'cancel\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>actionSheetContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0.15rem 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showActionSheet<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u9ed8\u8ba4\u72b6\u6001<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0.15rem 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showShareActionSheet<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5206\u4eab\u529f\u80fd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'0.15rem 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showShareActionSheetMulpitleLine<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5e26\u591a\u884c\u6309\u94ae\u7684\u5206\u4eab\u529f\u80fd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".actionSheetContainer {\n  margin: 0 0.3rem;\n}\n\n.my-action-sheet .am-action-sheet-share-list-item-icon img {\n  width: 0.72rem;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.actionSheetContainer</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0.3</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.my-action-sheet</span> <span class="token class">.am-action-sheet-share-list-item-icon</span> img </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">0.72</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},646:function(n,s,a){n.exports={basic:a(471)}}});