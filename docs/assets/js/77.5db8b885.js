(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{604:function(t,n,s){"use strict";s.r(n);var a=s(4),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"/blog/img/nginx.jpg",alt:"nginx"}})]),t._v(" "),s("p",[t._v("NGINX联合创始人安德鲁·阿列克谢夫（Andrew Alexeev）曾说：NGINX是为对Apache性能不满意的人而构建的。随着Internet需求的变化，Web服务器的工作也在变化。NGINX的构建比以往任何时候都更有效率，更可扩展，更安全，更强大。")]),t._v(" "),s("p",[t._v("本文提供了Nginx的基本概念及知识。以开发者必备的Nginx基础知识为主，罗列了一些Nginx教程，希望对大家有所帮助。")]),t._v(" "),s("p",[s("strong",[t._v("一.环境")])]),t._v(" "),s("p",[t._v("服务器版本：CentOS 7.2")]),t._v(" "),s("p",[t._v("为了保证学习阶段不遇到奇怪的事情，请保证以下四点：")]),t._v(" "),s("ol",[s("li",[t._v("确认系统网络")]),t._v(" "),s("li",[t._v("确认yum可用")]),t._v(" "),s("li",[t._v("确认关闭iptables")]),t._v(" "),s("li",[t._v("确认停用selinux")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看iptables状态")]),t._v("\nsystemctl status firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭防火墙（临时关闭）")]),t._v("\nsystemctl stop firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看SELinux状态 ")]),t._v("\ngetenforce"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#临时关闭SELinux ")]),t._v("\nsetenforce "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("p",[t._v("安装一些系统基本工具，正常情况系统都会自带")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake\nyum -y install wget httpd-tools vim\n")])])]),s("p",[s("strong",[t._v("二.基本概念")])]),t._v(" "),s("p",[s("strong",[t._v("2.1Nginx是什么？")])]),t._v(" "),s("p",[s("code",[t._v("Nginx")]),t._v("是一个高性能的"),s("code",[t._v("http")]),t._v("和反向代理服务器，其特点是占用内存小，并发能力强。"),s("code",[t._v("Nginx")]),t._v("专为性能优化而开发，性能是其最重要的考量，能经受高负载的考验，有报告表明能支持高达50000个并发连接数。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/img/nginx-1.jpg",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("2.2正向代理与反向代")])]),t._v(" "),s("p",[t._v("为了便于理解，首先先来了解一下一些基础知识，nginx是一个高性能的反向代理服务器那么什么是反向代理呢？")]),t._v(" "),s("p",[t._v("代理是在服务器和客户端之间假设的一层服务器，代理将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。")]),t._v(" "),s("p",[t._v("不管是正向代理还是反向代理，实现的都是上面的功能。如果你对OSI 七层模型与 TCP/IP 四层模型不是很熟悉可以再回顾下。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/img/nginx-2.jpg",alt:""}})]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("正向代理")])])]),t._v(" "),s("p",[t._v("正向代理（forward）意思是一个位于客户端和原始服务器 (origin server) 之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标 (原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。")]),t._v(" "),s("p",[t._v("正向代理是为我们服务的，即为客户端服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源。")]),t._v(" "),s("p",[t._v("正向代理对我们是透明的，对服务端是非透明的，即服务端并不知道自己收到的是来自代理的访问还是来自真实客户端的访问。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("反向代理")])])]),t._v(" "),s("p",[t._v("反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。")]),t._v(" "),s("p",[t._v("反向代理是为服务端服务的，反向代理可以帮助服务器接收来自客户端的请求，帮助服务器做请求转发，负载均衡等。")]),t._v(" "),s("p",[t._v("反向代理对服务端是透明的，对我们是非透明的，即我们并不知道自己访问的是代理服务器，而服务器知道反向代理在为他服务。")]),t._v(" "),s("p",[s("strong",[t._v("2.3负载均衡")])]),t._v(" "),s("p",[t._v("如果请求数过大，单个服务器解决不了，我们增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器的情况改为请求分发到多个服务器上，就是负载均衡。")]),t._v(" "),s("p",[t._v("Upstream 指定后端服务器地址列表，在 server 中拦截响应请求，并将请求转发到 Upstream 中配置的服务器列表。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("upstream balanceServer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n server 10.1.22.33"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12345;\n  server 10.1.22.34"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12345;\nserver 10.1.22.35"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("12345;\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  server_name fe.server.com;\n  listen 80;\n  location /api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//balanceServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("(http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//balanceserver/);\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面的配置只是指定了 nginx 需要转发的服务端列表，并没有指定分配策略。")]),t._v(" "),s("p",[t._v("默认情况下采用的是轮询策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。")]),t._v(" "),s("p",[s("strong",[t._v("Nginx支持的负载均衡调度算法方式如下：")])]),t._v(" "),s("p",[t._v("weight轮询(默认，常用)：接收到的请求按照权重分配到不同的后端服务器，即使在使用过程中，某一台后端服务器宕机，Nginx会自动将该服务器剔除出队列，请求受理情况不会受到任何影响。这种方式下，可以给不同的后端服务器设置一个权重值(weight)，用于调整不同的服务器上请求的分配率；权重数据越大，被分配到请求的几率越大；该权重值，主要是针对实际工作环境中不同的后端服务器硬件配置进行调整的。ip_hash（常用）：每个请求按照发起客户端的ip的hash结果进行匹配，这样的算法下一个固定ip地址的客户端总会访问到同一个后端服务器，这也在一定程度上解决了集群部署环境下session共享的问题。")]),t._v(" "),s("p",[t._v("fair：智能调整调度算法，动态的根据后端服务器的请求处理到响应的时间进行均衡分配，响应时间短处理效率高的服务器分配到请求的概率高，响应时间长处理效率低的服务器分配到的请求少；结合了前两者的优点的一种调度算法。但是需要注意的是Nginx默认不支持fair算法，如果要使用这种调度算法，请安装upstream_fair模块。url_hash：按照访问的url的hash结果分配请求，每个请求的url会指向后端固定的某个服务器，可以在Nginx作为静态服务器的情况下提高缓存效率。同样要注意Nginx默认不支持这种调度算法，要使用的话需要安装Nginx的hash软件包。")]),t._v(" "),s("p",[s("strong",[t._v("2.4动静分离")])]),t._v(" "),s("p",[t._v("为了加快服务器的解析速度，可以把动态页面和静态页面交给不同的服务器来解析，加快解析速度，降低原来单个服务器的压力。")]),t._v(" "),s("p",[s("strong",[t._v("2.5Nginx常用命令")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务")]),t._v("\nnginx -s stop\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 平稳关闭Nginx，保存相关信息，有安排的结束web服务")]),t._v("\nnginx -s quit\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因改变了Nginx相关配置，需要重新加载配置而重载")]),t._v("\nnginx -s reload\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新打开日志文件")]),t._v("\nnginx -s reopen\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为 Nginx 指定一个配置文件，来代替缺省的")]),t._v("\nnginx -c filename\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件")]),t._v("\nnginx -t\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  显示 nginx 的版本")]),t._v("\nnginx -v\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示 nginx 的版本，编译器版本和配置参数")]),t._v("\nnginx -V\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 格式换显示 nginx 配置参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" nginx -V "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" -n1\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" nginx -V "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" -n1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" lua\n")])])]),s("p",[s("strong",[t._v("三.为什么选择****Nginx？")])]),t._v(" "),s("p",[t._v("Nginx是一款自由的、开源的、高性能的HTTP服务器和反向代理服务器；同时也是一个IMAP、POP3、SMTP代理服务器；Nginx可以作为一个HTTP服务器进行网站的发布处理，另外Nginx可以作为反向代理进行负载均衡的实现。在Nginx网站上，其功能包括：")]),t._v(" "),s("ul",[s("li",[t._v("HTTP和HTTPS（TLS / SSL / SNI）")]),t._v(" "),s("li",[t._v("超快速的Web服务器用于静态内容")]),t._v(" "),s("li",[t._v("FastCGI，WSGI，SCGI用于动态内容")]),t._v(" "),s("li",[t._v("具有负载平衡和缓存功能的加速Web代理")]),t._v(" "),s("li",[t._v("不间断实时二进制升级和配置")]),t._v(" "),s("li",[t._v("压缩和内容过滤器")]),t._v(" "),s("li",[t._v("虚拟主机")]),t._v(" "),s("li",[t._v("FLV和MP4的媒体流")]),t._v(" "),s("li",[t._v("带宽和连接策略")]),t._v(" "),s("li",[t._v("全面的访问控制")]),t._v(" "),s("li",[t._v("自定义日志")]),t._v(" "),s("li",[t._v("嵌入式脚本")]),t._v(" "),s("li",[t._v("带有TLS的SMTP / IMAP / POP3的邮件代理")]),t._v(" "),s("li",[t._v("逻辑，灵活，可扩展的配置")]),t._v(" "),s("li",[t._v("在Linux，FreeBSD，Mac OS X，Solaris和Windows上运行")])]),t._v(" "),s("p",[s("strong",[t._v("nginx有如下优势：")])]),t._v(" "),s("p",[s("strong",[t._v("1. IO多路复用epoll（IO复用）")])]),t._v(" "),s("p",[t._v("如何理解呢？举个例子吧！\n有A、B、C三个老师，他们都遇到一个难题，要帮助一个班级的学生解决课堂作业。\n老师A采用从第一排开始一个学生一个学生轮流解答的方式去回答问题，老师A浪费了很多时间，并且有的学生作业还没有完成呢，老师就来了，反反复复效率极慢。\n老师B是一个忍者，他发现老师A的方法行不通，于是他使用了影分身术，分身出好几个自己同一时间去帮好几个同学回答问题，最后还没回答完，老师B消耗光了能量累倒了。\n老师C比较精明，他告诉学生，谁完成了作业举手，有举手的同学他才去指导问题，他让学生主动发声，分开了“并发”。\n这个老师C就是Nginx。")]),t._v(" "),s("p",[s("strong",[t._v("2.")]),t._v(" "),s("strong",[t._v("轻量级")])]),t._v(" "),s("ul",[s("li",[t._v("功能模块少 - Nginx仅保留了HTTP需要的模块，其他都用插件的方式，后天添加")]),t._v(" "),s("li",[t._v("代码模块化 - 更适合二次开发，如阿里巴巴Tengine")])]),t._v(" "),s("p",[s("strong",[t._v("3. CPU亲和")])]),t._v(" "),s("p",[t._v("把CPU核心和Nginx工作进程绑定，把每个worker进程固定在一个CPU上执行，减少切换CPU的cache miss，从而提高性能。")]),t._v(" "),s("p",[s("strong",[t._v("四.Nginx的安装")])]),t._v(" "),s("h4",{attrs:{id:"_1-本地安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地安装"}},[t._v("#")]),t._v(" "),s("strong",[t._v("1.本地安装")])]),t._v(" "),s("ul",[s("li",[t._v("windows系统：")])]),t._v(" "),s("blockquote",[s("p",[t._v("直接去官网：https://nginx.org/en/download... 下载相应版本即可。")])]),t._v(" "),s("ul",[s("li",[t._v("mac系统：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])]),s("h4",{attrs:{id:"_2-linux安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux安装"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2.Linux安装：")])]),t._v(" "),s("blockquote",[s("p",[t._v("以centOS系统为例，有下面两种安装方式(推荐1)")])]),t._v(" "),s("p",[t._v("1.) 通过rpm镜像源安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nginx\n")])])]),s("p",[t._v("2.) 通过依赖包详细安装")]),t._v(" "),s("blockquote",[s("p",[t._v("安装nginx依赖库pcre、zlib")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pcre pcre-devel\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" zlib zlib-devel\n")])])]),s("blockquote",[s("p",[t._v("如有必要，可以安装c++编译环境和openssl")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc-c++\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openssl openssl-devel\n")])])]),s("blockquote",[s("p",[t._v("下载/编译nginx")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("$ wget "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//nginx.org/download/nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.16.0.tar.gz\n$ tar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zxvf nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.16.0.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译安装")]),t._v("\n$ cd nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.16.0\n$ ./configure  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认安装在/usr/local/nginx")]),t._v("\n$ make "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" make install\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建软链")]),t._v("\n$ ln "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("s /usr/local/nginx/sbin/nginx /usr/local/sbin/nginx\n$ nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v\n")])])]),s("p",[s("strong",[t._v("五.Nginx配置")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打开主配置文件，若你是用lnmp环境安装")]),t._v("\nvim /usr/local/nginx/conf/nginx.conf\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\nuser                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置nginx服务的系统使用用户")]),t._v("\nworker_processes        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#工作进程数 一般情况与CPU核数保持一致")]),t._v("\nerror_log               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nginx的错误日志")]),t._v("\npid                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nginx启动时的pid")]),t._v("\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#每个进程允许最大连接数")]),t._v("\n    use                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nginx使用的内核模型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("我们使用 nginx 的 http 服务，在配置文件 nginx.conf 中的 http 区域内，配置无数个 server ，每一个 server 对应这一个虚拟主机或者域名。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("http "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#后面再详细介绍 http 配置项目")]),t._v("\n    \n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen 80                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#监听端口;")]),t._v("\n        server_name localhost              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#地址")]),t._v("\n        \n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#访问首页路径")]),t._v("\n            root /xxx/xxx/index.html       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认目录")]),t._v("\n            index index.html index.htm     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认文件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        \n        \n        error_page  500 504   /50x.html    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#当出现以上状态码时从新定义到50x.html")]),t._v("\n        location = /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#当访问50x.html时")]),t._v("\n            root /xxx/xxx/html             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#50x.html 页面所在位置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("一个 server 可以出现多个 location ，我们对不同的访问路径进行不同情况的配置\n我们再来看看 http 的配置详情。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("http "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sendfile  on                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#高效传输文件的模式 一定要开启")]),t._v("\n    keepalive_timeout   65        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#客户端服务端请求超时时间")]),t._v("\n    log_format  main   XXX        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义日志格式 代号为main")]),t._v("\n    access_log  /usr/local/access.log  main     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#日志保存地址 格式代码 main")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("下面是 nginx 一些配置中常用的内置全局变量，你可以在配置的任何位置使用它们。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/img/nginx-3.jpg",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("六.Nginx实战")])]),t._v(" "),s("p",[t._v("各种开发工具的配置结合实战来讲述，会让人更易理解。")]),t._v(" "),s("p",[t._v("我们先实现一个小目标：不考虑复杂的配置，仅仅是完成一个 http 反向代理。")]),t._v(" "),s("p",[t._v("nginx.conf 配置文件如下：")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("注：_")]),s("code",[t._v("conf/nginx.conf")]),t._v(" 是 nginx 的默认配置文件。你也可以使用 nginx -c 指定你的配置文件_")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#运行用户")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#user somebody;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动进程,通常设置成和cpu的数量相等")]),t._v("\nworker_processes  1;\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#全局错误日志")]),t._v("\nerror_log  D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/Tools/nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.10.1/logs/error.log;\nerror_log  D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/Tools/nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.10.1/logs/notice.log  notice;\nerror_log  D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/Tools/nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.10.1/logs/info.log  info;\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#PID文件，记录当前启动的nginx的进程ID")]),t._v("\npid        D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/Tools/nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.10.1/logs/nginx.pid;\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#工作模式及连接数上限")]),t._v("\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections 1024;    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#单个后台worker process进程的最大并发链接数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设定http服务器，利用它的反向代理功能提供负载均衡支持")]),t._v("\nhttp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设定mime类型(邮件支持类型),类型由mime.types文件定义")]),t._v("\n    include       D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/Tools/nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.10.1/conf/mime.types;\n    default_type  application/octet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stream;\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设定日志")]),t._v("\n    log_format  main  '"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("$remote_addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("$remote_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("$time_local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(' "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n    access_log    D'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/Tools/nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1.10.1/logs/access.log main;\n    rewrite_log     on;\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.")]),t._v("\n    sendfile        on;\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#连接超时时间")]),t._v("\n    keepalive_timeout  120;\n    tcp_nodelay        on;\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip压缩开关")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设定实际的服务器列表")]),t._v("\n    upstream zp_server1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        server 127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8089;\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#HTTP服务器")]),t._v("\n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#监听80端口，80端口是知名端口号，用于HTTP协议")]),t._v("\n        listen       80;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义使用www.xx.com访问")]),t._v("\n        server_name  www.helloworld.com;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#首页")]),t._v("\n        index index.html\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指向webapp的目录")]),t._v("\n        root D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("01_WorkspaceProjectgithubzpSpringNotesspring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("securityspring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("shirosrcmainwebapp;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#编码格式")]),t._v("\n        charset utf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#代理配置参数")]),t._v("\n        proxy_connect_timeout 180;\n        proxy_send_timeout 180;\n        proxy_read_timeout 180;\n        proxy_set_header Host $host;\n        proxy_set_header X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Forwarder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("For $remote_addr;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#反向代理的路径（和upstream绑定），location 后面设置映射的路径")]),t._v("\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//zp_server1;\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#静态文件，nginx自己处理")]),t._v("\n        location ~ ^/(images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("flash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("media"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("static)/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("01_WorkspaceProjectgithubzpSpringNotesspring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("securityspring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("shirosrcmainwebappviews;\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#过期30天，静态文件不怎么更新，过期可以设大一点，如果频繁更新，则可以设置得小一点。")]),t._v("\n            expires 30d;\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设定查看Nginx状态的地址")]),t._v("\n        location /NginxStatus "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n            stub_status           on;\n            access_log            on;\n            auth_basic            "NginxStatus";\n            auth_basic_user_file  conf/htpasswd;\n        '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#禁止访问 .htxxx 文件")]),t._v("\n        location ~ /.ht "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            deny all;\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#错误处理页面（可选择性配置）")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page   404              /404.html;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page   500 502 503 504  /50x.html;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location = /50x.html {")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    root   html;")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("好了，让我们来试试吧：")]),t._v(" "),s("ol",[s("li",[t._v("启动 webapp，注意启动绑定的端口要和 nginx 中的 upstream 设置的端口保持一致。")]),t._v(" "),s("li",[t._v("更改 host：在 C:WindowsSystem32driversetc 目录下的 host 文件中添加一条 DNS 记录")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("127.0.0.1 www.helloworld.com\n")])])]),s("ol",[s("li",[t._v("启动前文中 startup.bat 的命令")]),t._v(" "),s("li",[t._v("在浏览器中访问 www.helloworld.com，不出意外，已经可以访问了。")])]),t._v(" "),s("h3",{attrs:{id:"搭建文件服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建文件服务器"}},[t._v("#")]),t._v(" "),s("strong",[t._v("搭建文件服务器")])]),t._v(" "),s("p",[t._v("有时候，团队需要归档一些数据或资料，那么文件服务器必不可少。使用 Nginx 可以非常快速便捷的搭建一个简易的文件服务。")]),t._v(" "),s("p",[t._v("Nginx 中的配置要点：")]),t._v(" "),s("ul",[s("li",[t._v("将 autoindex 开启可以显示目录，默认不开启。")]),t._v(" "),s("li",[t._v("将 autoindex_exact_size 开启可以显示文件的大小。")]),t._v(" "),s("li",[t._v("将 autoindex_localtime 开启可以显示文件的修改时间。")]),t._v(" "),s("li",[t._v("root 用来设置开放为文件服务的根路径。")]),t._v(" "),s("li",[t._v("charset 设置为 charset utf-8,gbk;，可以避免中文乱码问题")])]),t._v(" "),s("p",[t._v("一个最简化的配置如下：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("autoindex on;"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示目录")]),t._v("\nautoindex_exact_size on;"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示文件大小")]),t._v("\nautoindex_localtime on;"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示文件时间")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    charset      utf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("gbk; "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows 服务器下设置后，依然乱码，暂时无解")]),t._v("\n    listen       9050 default_server;\n    listen       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9050 default_server;\n    server_name  _;\n    root         /share/fs;\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);