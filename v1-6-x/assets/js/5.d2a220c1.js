(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{244:function(t,e,i){},249:function(t,e,i){},250:function(t,e,i){},254:function(t,e,i){},258:function(t,e,i){"use strict";i(24),i(100),i(97),i(147),i(98),i(259);var a=i(62),s={props:{item:{required:!0}},computed:{link:function(){return this.item.link&&Object(a.a)(this.item.link)||""},isVersionLink:function(){return this.item.tags&&this.item.tags.indexOf("versions")>-1},imageUrl:function(){return this.item.image?this.item.image.match(/^https?/)?this.item.image:this.item.image.match(/^\//)?this.item.image:this.$site.base+this.item.image:""},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:a.c,isMailto:a.d,isTel:a.e}},n=i(15),r=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isExternal(t.link)||t.isVersionLink?t.isVersionLink?i("a",{staticClass:"nav-link",attrs:{href:t.link}},[t._v("\n  "+t._s(t.item.text)+"\n")]):i("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t.item.image?i("img",{staticStyle:{"vertical-align":"top"},attrs:{src:t.imageUrl,title:t.item.text,width:t.item.imageWidth,height:t.item.imageHeight}}):t._e(),t._v(" "),i("span",{class:{"not-in-navbar":t.item.image}},[t._v(t._s(t.item.text))])]):i("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact,replace:""}},[t.item.image?i("img",{attrs:{src:t.imageUrl,title:t.item.text,width:t.item.imageWidth,height:t.item.imageHeight}}):t._e(),t._v(" "),i("span",{class:{"not-in-navbar":t.item.image}},[t._v(t._s(t.item.text))])])},[],!1,null,null,null);e.a=r.exports},267:function(t,e,i){"use strict";var a=i(244);i.n(a).a},275:function(t,e,i){"use strict";var a=i(249);i.n(a).a},276:function(t,e,i){"use strict";var a=i(250);i.n(a).a},281:function(t,e,i){"use strict";var a=i(254);i.n(a).a},371:function(t,e,i){"use strict";i.r(e);var a=i(366),s=i(367),n=(i(24),i(104),{props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){var a=this;Promise.all([Promise.all([i.e(0),i.e(2)]).then(i.t.bind(null,369,7)),Promise.all([i.e(0),i.e(2)]).then(i.t.bind(null,370,7))]).then(function(i){var n=Object(s.a)(i,1)[0];n=n.default;var r=t.algoliaOptions,o=void 0===r?{}:r;n(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(o.facetFilters||[])},o),handleSelected:function(t,e,i){var s=new URL(i.url),n=s.pathname,r=s.hash,o=a.$site.base;o&&n.substr(0,o.length)===o&&(n=n.substr(o.length-1)),a.$router.push("".concat(n).concat(r))}}))})},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">dddd',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}}),r=(i(267),i(15)),o=Object(r.a)(n,function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null).exports,l=i(363),c=i(368),h=(i(271),i(147),i(58)),u=(i(97),i(43),i(100),i(259),i(42),i(98),i(272),i(365)),m=i(62),g={components:{NavLink:i(258).a,DropdownLink:u.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.userNav.findIndex(function(t){return t.tags&&t.tags.indexOf("versions")>-1});e>-1&&(this.userNav[e].text="Versions",this.userNav[e].items=this.$site.themeConfig.versions.map(function(t){return{text:t.text,link:"/".concat(t.link),tags:["versions"]}}),1===this.userNav[e].items.length&&this.userNav.splice(e,1));var i=this.$site.locales;if(i&&Object.keys(i).length>1){var a=this.$page.path,s=this.$router.options.routes,n=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(i).map(function(e){var r,o=i[e],l=n[e]&&n[e].label||o.lang;return o.lang===t.$lang?r=a:(r=a.replace(t.$localeConfig.path,e),s.some(function(t){return t.path===r})||(r=e)),{text:l,link:r}})};return[].concat(Object(h.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(Object(m.f)(t),{items:(t.items||[]).map(m.f)})})},githubLogo:function(){return this.$site.base+"assets/github-mark-32px.png"},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],i=0;i<e.length;i++){var a=e[i];if(new RegExp(a,"i").test(t))return a}return"Source"}}}},p=(i(275),Object(r.a)(g,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.userLinks.length||t.repoLink?i("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return i("div",{key:t.link,class:["nav-item",{"can-hide-first":t.canHideFirst}]},["links"===t.type?i("DropdownLink",{attrs:{item:t}}):i("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?i("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},["GitHub"==t.repoLabel?i("img",{staticStyle:{"vertical-align":"top"},attrs:{src:t.githubLogo,width:"20",height:"20",title:t.repoLabel}}):t._e(),t._v(" "),i("span",{class:{"not-in-navbar":"GitHub"==t.repoLabel}},[t._v(t._s(t.repoLabel))])]):t._e()],2):t._e()},[],!1,null,null,null).exports);function d(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var f={components:{SidebarButton:c.a,NavLinks:p,SearchBox:l.a,AlgoliaSearchBox:o},data:function(){return{linksWrapMaxWidth:null,siteDescription:null}},mounted:function(){var t=this,e=parseInt(d(this.$el,"paddingLeft"))+parseInt(d(this.$el,"paddingRight")),i=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1),this.siteDescription=this.$site.description},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},v=(i(276),Object(r.a)(f,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),i("div",{staticClass:"site-description"},[t._v(t._s(t.siteDescription))]),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports),b=i(364),k={name:"Sidebar",components:{SidebarLinks:i(260).default,NavLinks:p},props:["items"]},_=(i(281),Object(r.a)(k,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"sidebar"},[i("SideBarSection",{attrs:{items:t.items}}),t._v(" "),i("NavLinks"),t._v(" "),t._t("top"),t._v(" "),i("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),$={components:{Home:a.a,Page:b.a,Sidebar:_,Navbar:v},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(m.g)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,i=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(i)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},S=Object(r.a)($,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?i("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),i("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),i("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?i("Home"):i("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null);e.default=S.exports}}]);