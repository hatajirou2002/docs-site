(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{324:function(t,e,o){t.exports=o.p+"assets/img/zowe-install-location.39ddccaa.png"},377:function(t,e,o){"use strict";o.r(e);var n=o(15),a=Object(n.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"planning-the-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#planning-the-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Planning the installation")]),t._v(" "),n("p",[t._v("The installation of Zowe™ consists of two independent processes: installing Zowe runtime on z/OS and installing Zowe CLI on your computer.")]),t._v(" "),n("p",[t._v("When you install Zowe runtime on z/OS, there are two parts:")]),t._v(" "),n("ul",[n("li",[t._v("The first part is to install the Zowe Application Framework, the API Mediation Layer, and a number of micro services that provide capability to both.")]),t._v(" "),n("li",[t._v("The second part is to install the Zowe Cross Memory Server. This is an authorized server application that provides privileged services to Zowe in a secure manner.")])]),t._v(" "),n("p",[t._v("The Zowe CLI is not installed on z/OS and runs on a personal computer. The following diagram shows the installation location of Zowe components.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(324),alt:"Zowe installation overview"}})]),t._v(" "),n("h2",{attrs:{id:"installation-roadmap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-roadmap","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation roadmap")]),t._v(" "),n("p",[t._v("Installing Zowe involves several steps that you must complete in the order listed. Review the following table that presents the task-flow for preparing your environment and installing and configuring Zowe before you begin the installation process.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Tasks")]),t._v(" "),n("th",[t._v("Details")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("1. Review the pre-installation planning information and prepare your environment to meet the installation prerequisites.")]),t._v(" "),n("td",[t._v("See "),n("a",{attrs:{href:"#planning-the-installation-of-zowe-z-os-components"}},[t._v("Planning the installation of Zowe z/OS components")]),t._v(" and "),n("router-link",{attrs:{to:"/user-guide/systemrequirements.html"}},[t._v("System requirements")]),t._v(".")],1)]),t._v(" "),n("tr",[n("td",[t._v("2. Allocate enough space for the installation.")]),t._v(" "),n("td",[t._v("The installation process requires approximately 1 GB of available space. After you install Zowe on z/OS, API Mediation Layer requires approximately 150MB of space, and the Zowe Application Framework requires approximately 50 MB of space before configuration. Zowe CLI requires approximately 200 MB of space on your computer.")])]),t._v(" "),n("tr",[n("td",[t._v("3. Install components of Zowe.")]),t._v(" "),n("td",[t._v("To install Zowe on z/OS, see "),n("router-link",{attrs:{to:"/user-guide/install-zos.html"}},[t._v("Installing Zowe on z/OS")]),t._v("."),n("br"),t._v(" To install Zowe CLI on a computer, see "),n("router-link",{attrs:{to:"/user-guide/cli-installcli.html"}},[t._v("Installing Zowe CLI")]),t._v(".")],1)]),t._v(" "),n("tr",[n("td",[t._v("4. (Optional) Troubleshoot problems that occur during installation.")]),t._v(" "),n("td",[t._v("See "),n("router-link",{attrs:{to:"/troubleshoot/troubleshooting.html"}},[t._v("Troubleshooting")]),t._v(".")],1)])])]),t._v(" "),n("p",[t._v("To uninstall Zowe, see "),n("router-link",{attrs:{to:"/user-guide/uninstall.html"}},[t._v("Uninstalling Zowe")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"planning-the-installation-of-zowe-z-os-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#planning-the-installation-of-zowe-z-os-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Planning the installation of Zowe z/OS components")]),t._v(" "),n("p",[t._v("The following information is required during the installation process of API Mediation Layer and Zowe Application Framework. Make the decisions before the installation.")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("The HFS directory where you install Zowe.")])]),t._v(" "),n("li",[n("p",[t._v("The HFS directory that contains a 64-bit Java™ 8 JRE.")])]),t._v(" "),n("li",[n("p",[t._v("The z/OSMF installation directory, for example, "),n("code",[t._v("/usr/lpp/zosmf/lib")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("The API Mediation Layer HTTP and HTTPS port numbers. You will be asked for 3 unique port numbers.")])]),t._v(" "),n("li",[n("p",[t._v("The user ID that runs the Zowe started task.")]),t._v(" "),n("p",[n("strong",[t._v("Tip:")]),t._v(" Use the same user ID that runs the z/OSMF "),n("code",[t._v("IZUSVR1")]),t._v(" task, or a user ID with equivalent authorizations.")])]),t._v(" "),n("li",[n("p",[t._v("The mainframe account under which the ZSS server runs must have UPDATE permission on the "),n("code",[t._v("BPX.DAEMON")]),t._v(" and "),n("code",[t._v("BPX.SERVER")]),t._v(" facility class profiles.")])])])])},[],!1,null,null,null);e.default=a.exports}}]);