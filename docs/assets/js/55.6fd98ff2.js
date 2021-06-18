(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{583:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"systemctl配置管理文件详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl配置管理文件详解"}},[s._v("#")]),s._v(" systemctl配置管理文件详解")]),s._v(" "),a("ul",[a("li",[s._v("文件存放位置：（共三处）\n/etc/systemd/system/\n/usr/lib/systemd/system\n/lib/systemd/system")])]),s._v(" "),a("h2",{attrs:{id:"文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件内容"}},[s._v("#")]),s._v(" 文件内容")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" sshd.service\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OpenSSH server daemon\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("man:sshd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" man:sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target sshd-keygen.service\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Wants")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sshd-keygen.service\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/sshd.pid\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/sysconfig/sshd\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/sshd "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OPTIONS")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -HUP "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KillMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("process\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("42s\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n\n")])])]),a("h2",{attrs:{id:"参数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数介绍"}},[s._v("#")]),s._v(" 参数介绍")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 区块：启动顺序与依赖关系。\nDescription：当前配置文件的描述信息。\nDocumentation：帮助信息。\nAfter：表示当前服务是在那个服务后面启动，一般定义为网络服务启动后启动\nWants：表示sshd.service与sshd-keygen.service之间存在”弱依赖”关系，即如果”sshd-keygen.service”启动失败或停止运行，不影响sshd.service继续执行。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 区块：启动行为\nType：定义启动类型。\nPIDFile：服务的pid文件路径。\nEnvironmentFile：指定当前服务依赖的环境参数文件。\nExecStart：定义启动进程时执行的命令。\nExecReload：重启服务时执行的命令\nKillMode：定义 Systemd 如何停止 sshd 服务。\nRestart：定义了 sshd 退出后，Systemd 的重启方式。\nRestartSec：表示Systemd重启服务之前，需要等待的秒数。上面的例子设为等待42秒。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 区块：定义如何安装这个配置文件，即怎样做到开机启动。\nWantedBy：表示该服务所在的 Target。multi-user.target表明当系统以多用户方式（默认的运行级别）启动时，这个服务需要被自动运行。\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);