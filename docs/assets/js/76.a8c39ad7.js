(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{534:function(n,e,t){"use strict";t.r(e);var r=t(4),s=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"序言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#序言"}},[n._v("#")]),n._v(" 序言")]),n._v(" "),t("p",[n._v("Nginx是lgor Sysoev为俄罗斯访问量第二的rambler.ru站点设计开发的。从2004年发布至今，凭借开源的力量，已经接近成熟与完善。")]),n._v(" "),t("p",[n._v("Nginx功能丰富，可作为HTTP服务器，也可作为反向代理服务器，邮件服务器。支持FastCGI、SSL、Virtual Host、URL Rewrite、Gzip等功能。并且支持很多第三方的模块扩展。")]),n._v(" "),t("p",[n._v("Nginx的稳定性、功能集、示例配置文件和低系统资源的消耗让他后来居上，在全球活跃的网站中有12.18%的使用比率，大约为2220万个网站。")]),n._v(" "),t("p",[n._v("牛逼吹的差不多啦，如果你还不过瘾，你可以百度百科或者一些书上找到这样的夸耀，比比皆是。")]),n._v(" "),t("hr"),n._v(" "),t("h2",{attrs:{id:"nginx常用功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用功能"}},[n._v("#")]),n._v(" Nginx常用功能")]),n._v(" "),t("p",[n._v("1、Http代理，反向代理：作为web服务器最常用的功能之一，尤其是反向代理。")]),n._v(" "),t("p",[n._v("这里我给来2张图，对正向代理与反响代理做个诠释，具体细节，大家可以翻阅下资料。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2018/08/1535725078-5993-20160202133724350-1807373891.jpg",alt:"img"}})]),n._v(" "),t("p",[n._v("Nginx在做反向代理时，提供性能稳定，并且能够提供配置灵活的转发功能。Nginx可以根据不同的正则匹配，采取不同的转发策略，比如图片文件结尾的走文件服务器，动态页面走web服务器，只要你正则写的没问题，又有相对应的服务器解决方案，你就可以随心所欲的玩。并且Nginx对返回结果进行错误页跳转，异常判断等。如果被分发的服务器存在异常，他可以将请求重新转发给另外一台服务器，然后自动去除异常服务器。")]),n._v(" "),t("hr"),n._v(" "),t("h2",{attrs:{id:"_2、负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、负载均衡"}},[n._v("#")]),n._v(" 2、负载均衡")]),n._v(" "),t("p",[n._v("Nginx提供的负载均衡策略有2种：内置策略和扩展策略。内置策略为轮询，加权轮询，Ip hash。扩展策略，就天马行空，只有你想不到的没有他做不到的啦，你可以参照所有的负载均衡算法，给他一一找出来做下实现。")]),n._v(" "),t("p",[n._v("上3个图，理解这三种负载均衡算法的实现")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2018/08/1535725078-8303-20160202133753382-1863657242.jpg",alt:"img"}})]),n._v(" "),t("p",[n._v("Ip hash算法，对客户端请求的ip进行hash操作，然后根据hash结果将同一个客户端ip的请求分发给同一台服务器进行处理，可以解决session不共享的问题。")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2018/08/1535725078-1224-20160201162405944-676557632.jpg",alt:"img"}})]),n._v(" "),t("hr"),n._v(" "),t("h2",{attrs:{id:"_3、web缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、web缓存"}},[n._v("#")]),n._v(" 3、web缓存")]),n._v(" "),t("p",[n._v("Nginx可以对不同的文件做不同的缓存处理，配置灵活，并且支持FastCGI_Cache，主要用于对FastCGI的动态程序进行缓存。配合着第三方的ngx_cache_purge，对制定的URL缓存内容可以的进行增删管理。")]),n._v(" "),t("hr"),n._v(" "),t("h2",{attrs:{id:"_4、nginx相关地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、nginx相关地址"}},[n._v("#")]),n._v(" 4、Nginx相关地址")]),n._v(" "),t("p",[n._v("源码：https://trac.nginx.org/nginx/browser")]),n._v(" "),t("p",[n._v("官网：http://www.nginx.org/")]),n._v(" "),t("hr"),n._v(" "),t("h2",{attrs:{id:"nginx配置文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置文件结构"}},[n._v("#")]),n._v(" Nginx配置文件结构")]),n._v(" "),t("p",[n._v("如果你下载好啦，你的安装文件，不妨打开conf文件夹的nginx.conf文件，Nginx服务器的基础配置，默认的配置也存放在此。")]),n._v(" "),t("p",[n._v("在 nginx.conf 的注释符号为： "),t("strong",[n._v("#")])]),n._v(" "),t("p",[n._v("默认的 nginx 配置文件 nginx.conf 内容如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n    #                  '$status $body_bytes_sent \"$http_referer\" '\n    #                  '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    server {\n        listen       80;\n        server_name  localhost;\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n\n        #error_page  404              /404.html;\n\n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n\n        # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n        #\n        #location ~ \\.php$ {\n        #    proxy_pass   http://127.0.0.1;\n        #}\n\n        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n        #\n        #location ~ \\.php$ {\n        #    root           html;\n        #    fastcgi_pass   127.0.0.1:9000;\n        #    fastcgi_index  index.php;\n        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n        #    include        fastcgi_params;\n        #}\n\n        # deny access to .htaccess files, if Apache's document root\n        # concurs with nginx's one\n        #\n        #location ~ /\\.ht {\n        #    deny  all;\n        #}\n    }\n\n\n    # another virtual host using mix of IP-, name-, and port-based configuration\n    #\n    #server {\n    #    listen       8000;\n    #    listen       somename:8080;\n    #    server_name  somename  alias  another.alias;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n\n    # HTTPS server\n    #\n    #server {\n    #    listen       443 ssl;\n    #    server_name  localhost;\n\n    #    ssl_certificate      cert.pem;\n    #    ssl_certificate_key  cert.key;\n\n    #    ssl_session_cache    shared:SSL:1m;\n    #    ssl_session_timeout  5m;\n\n    #    ssl_ciphers  HIGH:!aNULL:!MD5;\n    #    ssl_prefer_server_ciphers  on;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n}\n")])])]),t("p",[t("strong",[n._v("nginx 文件结构")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("...              #全局块\n\nevents {         #events块\n   ...\n}\n\nhttp      #http块\n{\n    ...   #http全局块\n    server        #server块\n    { \n        ...       #server全局块\n        location [PATTERN]   #location块\n        {\n            ...\n        }\n        location [PATTERN] \n        {\n            ...\n        }\n    }\n    server\n    {\n      ...\n    }\n    ...     #http全局块\n}\n")])])]),t("ul",[t("li",[n._v("1、"),t("strong",[n._v("全局块")]),n._v("：配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。")]),n._v(" "),t("li",[n._v("2、"),t("strong",[n._v("events块")]),n._v("：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。")]),n._v(" "),t("li",[n._v("3、"),t("strong",[n._v("http块")]),n._v("：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。")]),n._v(" "),t("li",[n._v("4、"),t("strong",[n._v("server块")]),n._v("：配置虚拟主机的相关参数，一个http中可以有多个server。")]),n._v(" "),t("li",[n._v("5、"),t("strong",[n._v("location块")]),n._v("：配置请求的路由，以及各种页面的处理情况。")])]),n._v(" "),t("p",[n._v("下面给大家上一个配置文件，作为理解。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("########### 每个指令必须有分号结束。#################\n#user administrator administrators;  #配置用户或者组，默认为nobody nobody。\n#worker_processes 2;  #允许生成的进程数，默认为1\n#pid /nginx/pid/nginx.pid;   #指定nginx进程运行文件存放地址\nerror_log log/error.log debug;  #制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg\nevents {\n    accept_mutex on;   #设置网路连接序列化，防止惊群现象发生，默认为on\n    multi_accept on;  #设置一个进程是否同时接受多个网络连接，默认为off\n    #use epoll;      #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport\n    worker_connections  1024;    #最大连接数，默认为512\n}\nhttp {\n    include       mime.types;   #文件扩展名与文件类型映射表\n    default_type  application/octet-stream; #默认文件类型，默认为text/plain\n    #access_log off; #取消服务日志    \n    log_format myFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #自定义格式\n    access_log log/access.log myFormat;  #combined为日志格式的默认值\n    sendfile on;   #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。\n    sendfile_max_chunk 100k;  #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。\n    keepalive_timeout 65;  #连接超时时间，默认为75s，可以在http，server，location块。\n\n    upstream mysvr {   \n      server 127.0.0.1:7878;\n      server 192.168.10.121:3333 backup;  #热备\n    }\n    error_page 404 https://www.baidu.com; #错误页\n    server {\n        keepalive_requests 120; #单连接请求上限次数。\n        listen       4545;   #监听端口\n        server_name  127.0.0.1;   #监听地址       \n        location  ~*^.+$ {       #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。\n           #root path;  #根目录\n           #index vv.txt;  #设置默认页\n           proxy_pass  http://mysvr;  #请求转向mysvr 定义的服务器列表\n           deny 127.0.0.1;  #拒绝的ip\n           allow 172.18.5.54; #允许的ip           \n        } \n    }\n}\n")])])]),t("p",[n._v("上面是nginx的基本配置，需要注意的有以下几点：")]),n._v(" "),t("p",[n._v("1、几个常见配置项：")]),n._v(" "),t("ul",[t("li",[n._v("1.$remote_addr 与 $http_x_forwarded_for 用以记录客户端的ip地址；")]),n._v(" "),t("li",[n._v("2.$remote_user ：用来记录客户端用户名称；")]),n._v(" "),t("li",[n._v("3.$time_local ： 用来记录访问时间与时区；")]),n._v(" "),t("li",[n._v("4.$request ： 用来记录请求的url与http协议；")]),n._v(" "),t("li",[n._v("5.$status ： 用来记录请求状态；成功是200；")]),n._v(" "),t("li",[n._v("6.$body_bytes_s ent ：记录发送给客户端文件主体内容大小；")]),n._v(" "),t("li",[n._v("7.$http_referer ：用来记录从那个页面链接访问过来的；")]),n._v(" "),t("li",[n._v("8.$http_user_agent ：记录客户端浏览器的相关信息；")])]),n._v(" "),t("p",[n._v("2、惊群现象：一个网路连接到来，多个睡眠的进程被同时叫醒，但只有一个进程能获得链接，这样会影响系统性能。")]),n._v(" "),t("p",[n._v("3、每个指令必须有分号结束。")])])}),[],!1,null,null,null);e.default=s.exports}}]);