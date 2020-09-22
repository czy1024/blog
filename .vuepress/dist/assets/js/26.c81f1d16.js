(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{372:function(v,_,i){"use strict";i.r(_);var t=i(42),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"第一章-安装和启动kali"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#第一章-安装和启动kali"}},[v._v("#")]),v._v(" 第一章 安装和启动Kali")]),v._v(" "),i("h2",{attrs:{id:"简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),i("p",[v._v("Kali Linux，简称Kali，是用于安全攻击的最新Linux发行版。它是BackTrack Linux的后继者。不像多数Linux发行版那样，Kali Linux用于渗透测试。渗透测试是一种通过模拟攻击评估计算机系统或网络安全性的方法。在整本书中，我们将会探索一些Kali Linux所提供的工具。")]),v._v(" "),i("p",[v._v("这一章涉及到Kali Linux在不同场景下的的安装和启动，从插入Kali Linux DVD到配置网络。")]),v._v(" "),i("p",[v._v("对于本书中所有秘籍，我们都要使用以64位GNOME作为窗口管理器（WM）和架构的Kali Linux（http://www.Kali.org/downloads/）。然而，使用KDE作为WM的用法并不在这本书里涉及，你应该能够遵循这些秘籍，并没有多少问题。")]),v._v(" "),i("h2",{attrs:{id:"_1-1-安装到硬盘"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装到硬盘"}},[v._v("#")]),v._v(" 1.1 安装到硬盘")]),v._v(" "),i("p",[v._v("硬盘的安装是最基本的操作之一。这个任务需要我们不带DVD运行Kali来完成。")]),v._v(" "),i("blockquote",[i("p",[v._v("执行这个秘籍中的步骤会抹掉你的硬盘，并把Kali标记为你电脑上的主操作系统。")])]),v._v(" "),i("h3",{attrs:{id:"准备"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[v._v("#")]),v._v(" 准备")]),v._v(" "),i("p",[v._v("在解释整个过程之前，需要满足以下要求：")]),v._v(" "),i("ul",[i("li",[v._v("为KaliLinux的安装准备最小8GB的空闲磁盘空间（然而我们推荐至少25GB来存放这本书中额外的程序和生成的词汇表）。")]),v._v(" "),i("li",[v._v("最小512MB的内存。")]),v._v(" "),i("li",[v._v("在"),i("a",{attrs:{href:"http://www.kali.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[v._v("KaliLinux的下载页面"),i("OutboundLink")],1),v._v("下载Kali Linux。")])]),v._v(" "),i("p",[v._v("让我们开始安装吧。")]),v._v(" "),i("h3",{attrs:{id:"操作步骤"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("在光驱中插入Kali Linux Live DVD来开始。你会看到它的启动菜单。选择"),i("code",[v._v("Graphical install")]),v._v("（图形化安装）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-1.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("选择语言。这里我们选择"),i("code",[v._v("English")]),v._v("（英语）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-2.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("选择你的位置。这里我们选择"),i("code",[v._v("United States")]),v._v("（美国）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-3.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("选择你的键盘配置。这里我们选择"),i("code",[v._v("American English")]),v._v("（美国英语）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-4.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("下面要完成网络服务配置。输入主机名称，这里我们输入"),i("code",[v._v("Kali")]),v._v("。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-5.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("下面，我们需要输入域名。这里我们输入"),i("code",[v._v("kali.secureworks. com")]),v._v("。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-6.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("现在你会看到输入root密码的地方，需要输入两次。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-7.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("选择你的时区，这里我们选择"),i("code",[v._v("Eastern")]),v._v("（东方）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-8.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("我们现在可以选择磁盘分区方式。你会看到四个选项。选择"),i("code",[v._v("Guided - use entire disk")]),v._v("，这会便于你分区。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-9.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("在这一步，你需要知道你的磁盘会被抹掉，点击"),i("code",[v._v("Continue")]),v._v("（继续）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-10.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("下面，你有机会选择三个分区方式之一：所有文件放在一个分区、分离"),i("code",[v._v("/home")]),v._v("、以及分离"),i("code",[v._v("/home/user/var")]),v._v("和"),i("code",[v._v("/tmp")]),v._v("。考虑到Kali用于渗透测试，分区不需要也不必要（即使这对于你的桌面主操作系统是个好主意）。这里我们选择"),i("code",[v._v("All files in one partition")]),v._v("（所有文件放在一个分区）并点击"),i("code",[v._v("Continue")]),v._v("（继续）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-11.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("一旦你看到了一个界面，让你知道将要对你磁盘执行的改动，选择"),i("code",[v._v("Yes")]),v._v("之后点击"),i("code",[v._v("Continue")]),v._v("（继续）。要注意这是撤销抹掉你磁盘所有数据的最后机会。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-12.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("下面，你会被询问是否希望链接到网络镜像。网络镜像允许你接收到Kali的更新。这里我们选择"),i("code",[v._v("Yes")]),v._v("之后点击"),i("code",[v._v("Continue")]),v._v("（继续）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-13.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("你可以通过点击"),i("code",[v._v("Continue")]),v._v("（继续）跳过HTTP代理界面。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-14.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("最后，你会被询问来安装GRUB启动器到主引导记录（MBR）中。选择"),i("code",[v._v("Yes")]),v._v("之后点击"),i("code",[v._v("Continue")]),v._v("（继续）。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-15.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("祝贺你现在完成了Kali Linux的安装！点击"),i("code",[v._v("Continue")]),v._v("，系统会重启并展示登录界面。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-1-16.jpg",alt:"/img/img"}})])])]),v._v(" "),i("h2",{attrs:{id:"_1-2-安装到u盘或持久存储器中"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-安装到u盘或持久存储器中"}},[v._v("#")]),v._v(" 1.2 安装到U盘或持久存储器中")]),v._v(" "),i("p",[v._v("Kali Linux U盘能够持久化储存系统设置，以及在U盘中永久升级和安装新的软件包，并让我们将个人定制的Kali Linux随时带在身上。")]),v._v(" "),i("p",[v._v("多亏了Win32 Disk Imager，我们可以为大多数Linux发行版创建可启动的U盘，包括持久化存储的Kali Linux。")]),v._v(" "),i("h3",{attrs:{id:"准备-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#准备-2"}},[v._v("#")]),v._v(" 准备")]),v._v(" "),i("p",[v._v("需要下列工具和准备工作以继续：")]),v._v(" "),i("ul",[i("li",[v._v("FAT32格式的U盘，最小8GB。")]),v._v(" "),i("li",[v._v("Kali Linux ISO镜像。")]),v._v(" "),i("li",[i("a",{attrs:{href:"http://sourceforge.net/projects/win32diskimager/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Win32 Disk Imager"),i("OutboundLink")],1),v._v("。")]),v._v(" "),i("li",[v._v("你可以从"),i("a",{attrs:{href:"http://www.kali.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),i("OutboundLink")],1),v._v("下载Kali。")])]),v._v(" "),i("h3",{attrs:{id:"操作步骤-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-2"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),i("p",[v._v("让我们开始讲Kali Linux安装到U盘：")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("插入格式化且可写入的U盘：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-2-1.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("启动 Win32 Disk Imager。")])]),v._v(" "),i("li",[i("p",[v._v("点击目录图表，选择Kali Linux DVD ISO镜像的位置：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-2-2.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("确保"),i("code",[v._v("Space used to preserve files across reboots")]),v._v("（用于在启动中保存文件的空间）设置为4096。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-2-3.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("选择我们的U盘，并点击OK按钮来开始创建可启动的U盘：")])]),v._v(" "),i("li",[i("p",[v._v("当它解压并复制DVD的文件到U盘，以及安装bootloader时，这个过程会花一些时间来完成。")])]),v._v(" "),i("li",[i("p",[v._v("安装完成之后，我们就可以重启电脑，从新创建的Kali Linux U盘以持久存储器来启动了。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-2-4.jpg",alt:"/img/img"}})])])]),v._v(" "),i("h2",{attrs:{id:"_1-3-在-virtualbox-中安装"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-在-virtualbox-中安装"}},[v._v("#")]),v._v(" 1.3 在 VirtualBox 中安装")]),v._v(" "),i("p",[v._v("这个秘籍会引导你使用知名的开源虚拟机软件VirtualBox，将Kali Linux安装在一个完全分离的访客操作系统中，它在你的宿主操作系统中。")]),v._v(" "),i("h3",{attrs:{id:"准备-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#准备-3"}},[v._v("#")]),v._v(" 准备")]),v._v(" "),i("p",[v._v("需要满足下列要求：")]),v._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[v._v("VirtualBox"),i("OutboundLink")],1),v._v(" 的最新版本（本书编写时为4.2.16）。")]),v._v(" "),i("li",[v._v("Kali Linux ISO 镜像的副本。你可以在[这里](http://www. Kali.org/downloads/)下载。")])]),v._v(" "),i("h3",{attrs:{id:"操作步骤-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-3"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),i("p",[v._v("让我们在VirtualBox中安装Kali Linux：")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("运行VirtualBox，点击"),i("code",[v._v("New")]),v._v("（新建）来启动虚拟机向导：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-1.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("点击"),i("code",[v._v("Next")]),v._v("（下一步）按钮，键入虚拟机的名称，并选择OS类型和版本。这里我们选择Linux类型和Ubuntu（64位）作为版本。点击"),i("code",[v._v("Next")]),v._v("按钮来继续：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-2.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("选择分配给虚拟机的基本内存（RAM）的总数。我们打算使用默认值，点击"),i("code",[v._v("Next")]),v._v("。")])]),v._v(" "),i("li",[i("p",[v._v("为新的虚拟机创建新的虚拟硬盘，点击"),i("code",[v._v("Next")]),v._v("按钮。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-3.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("一个新的向导窗口将会打开，保留默认的VDI文件类型，因为我们并不需要使用其它的虚拟机软件。")])]),v._v(" "),i("li",[i("p",[v._v("我们会保留默认选项作为虚拟机磁盘存储的详情。点击"),i("code",[v._v("Next")]),v._v("来继续：")])]),v._v(" "),i("li",[i("p",[v._v("设置虚拟机磁盘文件类型和大小：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-4.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("检查设置是否正确，之后点击"),i("code",[v._v("Create")]),v._v("（创建）按钮来开始虚拟磁盘文件的创建。")])]),v._v(" "),i("li",[i("p",[v._v("我们将会返回前面的向导，带有虚拟机参数的概览。点击"),i("code",[v._v("Create")]),v._v("以结束：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-5.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("新的虚拟机创建之后，我们将要安装Kali Linux。")])]),v._v(" "),i("li",[i("p",[v._v("在VirtualBox的主窗口，高亮Kali Linux，之后点击"),i("code",[v._v("Settings")]),v._v("（设置）按钮：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-6.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("现在基本的安装步骤就完成了，我们需要让你将下载的ISO文件用于虚拟光盘。这会为你节省烧录物理DVD的时间来完成这个安装。在"),i("code",[v._v("Settings")]),v._v("界面中，点击"),i("code",[v._v("Storage")]),v._v("（存储器）菜单选项：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-7.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("下一步，在"),i("code",[v._v("Storage Tree")]),v._v("（存储器树形图）下面，高亮"),i("code",[v._v("Empty")]),v._v("（空）磁盘图标，它在"),i("code",[v._v("IDE Controller")]),v._v("（IDE控制器）的下面。这户选择我们的虚拟CD/DVD ROM驱动器。在屏幕的最右边，在 "),i("code",[v._v("Attributes")]),v._v("底下，点击光盘图表。在上面弹出的菜单上选择你的"),i("code",[v._v("Choose a virtual CD/DVD disc file...")]),v._v("（Kali Linux ISO CD/DVD光盘文件）选项，并找到你的ISO。一旦你完成了这些步骤，点击OK按钮。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-3-8.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("点击Start（开始）按钮，之后点击里面的新窗口来进行安装。安装步骤在1.1节中已经包括了。")]),v._v(" "),i("blockquote",[i("p",[v._v("安装VirtualBox 扩展包也允许我们通过添加USB2.0（EHCI）、VirtualBox RDP和 Intel PXE boot ROM的支持，来扩展虚拟机的功能。")])])])]),v._v(" "),i("h2",{attrs:{id:"_1-4-安装-vmware-tools"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-安装-vmware-tools"}},[v._v("#")]),v._v(" 1.4 安装 VMware Tools")]),v._v(" "),i("p",[v._v("这个秘籍中，我们会展示如何使用 VMware Tools将Kali Linux安装在虚拟机中。")]),v._v(" "),i("h3",{attrs:{id:"准备-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#准备-4"}},[v._v("#")]),v._v(" 准备")]),v._v(" "),i("p",[v._v("需要满足下列要求：")]),v._v(" "),i("ul",[i("li",[v._v("已经安装好的Kali Linux VMware 虚拟机。")]),v._v(" "),i("li",[v._v("网络连接。")])]),v._v(" "),i("h3",{attrs:{id:"操作步骤-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-4"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),i("p",[v._v("让我们开始将Kali Linux 安装到 VMware上：")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("打开你的虚拟机的访客操作系统并连接到互联网，之后打开"),i("code",[v._v("Terminal")]),v._v("（终端）窗口，并键入下列命令来准备核心资源：")]),v._v(" "),i("p",[i("code",[v._v("prepare-kernel-sources")])]),v._v(" "),i("blockquote",[i("p",[v._v("这些命令假设你使用Linux或者Mac OS。你不需要在Windows下执行它们。")])])]),v._v(" "),i("li",[i("p",[v._v("在VMware Workstaion的菜单栏上，访问"),i("code",[v._v("VM | Install VMware Tools…")]),v._v("：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-4-1.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("将VMware Tools安装工具复制到临时目录下，之后将当前位置改为目标目录：")]),v._v(" "),i("p",[i("code",[v._v("cp /media/VMware\\ Tools/VMwareTools-8.8.2-590212.tar.gz /tmp/; cd /tmp")])]),v._v(" "),i("blockquote",[i("p",[v._v("根据你的VMware Tools来替换文件名："),i("code",[v._v("VMwareTools--.tar.gz")]),v._v("。")])])]),v._v(" "),i("li",[i("p",[v._v("使用以下命令解压并安装：")]),v._v(" "),i("p",[i("code",[v._v("tar zxpf VMwareTools-8.8.2-590212.tar.gz")])])]),v._v(" "),i("li",[i("p",[v._v("进入VMware Tools的目录中，之后运行安装工具：")]),v._v(" "),i("p",[i("code",[v._v("cd vmware-tools-distrib/ ./vmware-install.pl")])])]),v._v(" "),i("li",[i("p",[v._v("按下回车键来接受每个配置询问的默认值；"),i("code",[v._v("vmware-config-tools.pl")]),v._v("脚本同上。")])]),v._v(" "),i("li",[i("p",[v._v("最后重启系统，工作就完成了。")])])]),v._v(" "),i("h3",{attrs:{id:"工作原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[v._v("#")]),v._v(" 工作原理")]),v._v(" "),i("p",[v._v("在第一步中，我们准备好了核心资源。之后，我们向访客操作系统插入了虚拟的 VMware Tools CD 。接着，我们创建了挂载点，并挂载虚拟CD。我们在临时目录中复制并解压了安装工具。最后我们保留默认配置来运行安装工具。")]),v._v(" "),i("h2",{attrs:{id:"_1-5-修复启动画面"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-修复启动画面"}},[v._v("#")]),v._v(" 1.5 修复启动画面")]),v._v(" "),i("p",[v._v("我们首次启动新安装的Kali Linux系统时，会注意到启动画面消失了。为了手动修复它，我们需要解压"),i("code",[v._v("Initrd")]),v._v("，修改它，之后将它再次压缩。幸运的是，有一个由 Mati Aharoni（也称为“muts”，Kali Linux的创造者）编写的自动化bash脚本使这件事变得容易。")]),v._v(" "),i("h3",{attrs:{id:"操作步骤-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-5"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),i("p",[v._v("键入下列命令并且按下回车键来修复消失的启动画面：")]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("fix-splash\n")])])]),i("h2",{attrs:{id:"_1-6-启动网络服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-启动网络服务"}},[v._v("#")]),v._v(" 1.6 启动网络服务")]),v._v(" "),i("p",[v._v("Kali Linux 自带了多种网络服务，它们在多种情况下可能很实用，并且默认是禁用的。这个秘籍中，我们会涉及到通过多种方法设置和启动每个服务的步骤。")]),v._v(" "),i("h3",{attrs:{id:"准备-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#准备-5"}},[v._v("#")]),v._v(" 准备")]),v._v(" "),i("p",[v._v("需要满足下列要求以继续：")]),v._v(" "),i("ul",[i("li",[v._v("带有有效IP地址的网络连接。")])]),v._v(" "),i("h3",{attrs:{id:"操作步骤-6"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-6"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),i("p",[v._v("让我们开始启动默认服务：")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("启动Apache服务器：")]),v._v(" "),i("p",[i("code",[v._v("service apache2 start")])]),v._v(" "),i("p",[v._v("我们可以通过浏览本地地址来验证服务器是否打开。")])]),v._v(" "),i("li",[i("p",[v._v("为了启动SSH服务，首次需要生成SSH密钥：")]),v._v(" "),i("p",[i("code",[v._v("sshd-generate")])])]),v._v(" "),i("li",[i("p",[v._v("启动SSH服务器：")]),v._v(" "),i("p",[i("code",[v._v("service ssh start")])])]),v._v(" "),i("li",[i("p",[v._v("使用"),i("code",[v._v("netstat")]),v._v("命令来验证服务器是否开启并正在监听：")]),v._v(" "),i("p",[i("code",[v._v("netstat -tpan | grep 22")])])]),v._v(" "),i("li",[i("p",[v._v("启动FTP服务器：")]),v._v(" "),i("p",[i("code",[v._v("service pure-ftpd start")])])]),v._v(" "),i("li",[i("p",[v._v("使用下列命令来验证FTP服务器：")]),v._v(" "),i("p",[i("code",[v._v("netstat -ant | grep 21")])]),v._v(" "),i("blockquote",[i("p",[v._v("你也可以使用"),i("code",[v._v("ps-ef | grep 21")]),v._v("命令。")])])]),v._v(" "),i("li",[i("p",[v._v("使用下列命令来停止服务：")]),v._v(" "),i("p",[i("code",[v._v("service stop")])]),v._v(" "),i("p",[v._v("其中``代表我们希望停止的网络服务，例如：")]),v._v(" "),i("p",[i("code",[v._v("service apache2 stop")])])]),v._v(" "),i("li",[i("p",[v._v("使用下列命令来在开机时启用服务：")]),v._v(" "),i("p",[i("code",[v._v("update-rc.d –f defaults")])]),v._v(" "),i("p",[v._v("其中``代表打算启动的网络服务，例如：")]),v._v(" "),i("p",[i("code",[v._v("update-rc.d –f ssh defaults")])]),v._v(" "),i("blockquote",[i("p",[v._v("你也可以在Kali Linux中通过"),i("code",[v._v("Services")]),v._v("（服务）菜单来完成它。从"),i("code",[v._v("Start")]),v._v("（开始）菜单开始，访问"),i("code",[v._v("Kali Linux | Services")]),v._v("。")])])])]),v._v(" "),i("h2",{attrs:{id:"_1-7-设置无线网络"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-设置无线网络"}},[v._v("#")]),v._v(" 1.7 设置无线网络")]),v._v(" "),i("p",[v._v("最后，我们来到了这一章的最后一个秘籍。这个秘籍中，我们会了解在安全状态下的无线网络连接步骤，通过Wicd Network Manager和提供加密的细节。无线网络的设置允许我们以无线方式使用Kali Linux。在真实的、合乎道德的渗透测试中，我们可以不依赖于网线而自由地使用所有常规桌面。")]),v._v(" "),i("h3",{attrs:{id:"操作步骤-7"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-7"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),i("p",[v._v("让我们开始设置无线网络：")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("从桌面启动网络管理器，通过点击"),i("code",[v._v("Applications")]),v._v("（应用）菜单并且访问"),i("code",[v._v("Internet | Wicd Network Manager")]),v._v("，或者在终端窗口中键入下列命令：")]),v._v(" "),i("p",[i("code",[v._v("wicd-gtk --no-tray")])])]),v._v(" "),i("li",[i("p",[v._v("Wicd Network Manager会打开，并带有可用网络的列表：")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-7-1.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("点击"),i("code",[v._v("Properties")]),v._v("（属性）按钮来设定网络细节。完成之后点击OK。")]),v._v(" "),i("p",[i("img",{attrs:{src:"/img/img/1-7-2.jpg",alt:"/img/img"}})])]),v._v(" "),i("li",[i("p",[v._v("最后，点击"),i("code",[v._v("Connect")]),v._v("（连接）按钮，就完成了。")])])]),v._v(" "),i("h3",{attrs:{id:"工作原理-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#工作原理-2"}},[v._v("#")]),v._v(" 工作原理")]),v._v(" "),i("p",[v._v("这个秘籍中，我们总结了无线网络的设置方式。这个秘籍以启动网络管理器，和连接到我们的路由器作为开始。")])])}),[],!1,null,null,null);_.default=a.exports}}]);