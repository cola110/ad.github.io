## 将Spring Boot程序部署到Heroku

内容列表

+ 创建一个Spring Boot应用
+ 提交Spring Boot到Heroku
+ 访问数据库
+ 自定义引导命令
+ 下一步

&ensp;&ensp;　Heroku非常适合独立部署Spring Boot应用，在Heroku上可以使用Maven或者Gradle来部署你的Spring应用程序，但是本文档我们假定您的计算中已经安装了Maven3并使用Maven。

&ensp;&ensp;　首先，创建一个Heroku的帐号，下载并安装Heroku CLI([官网](https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku))吧！

&ensp;&ensp;　安装好Keroku以后，您就可以使用创建heroku账户的邮箱地址和密码通过您计算机的终端来进行登录操作。

	　　$ heroku login
	　　Enter your Heroku credentials.
	　　Email: java@example.com
	　　Password:
	　　Could not find an existing public key.
	　　Would you like to generate one? [Yn]
	　　Generating new SSH public key.
	　　Uploading ssh public key /Users/java/.ssh/id_rsa.pub

&ensp;&ensp;　使用`keroku keys`检查您的SSH key是否已经添加上。如果SSH key不存在，您可以运行`heroku keys:add`来手动添加。想要了解更多关于SSH keys的信息，请参考[管理您的SSH Keys](https://devcenter.heroku.com/articles/keys)。

#### 创建一个Spring Boot应用

请安装Spring Boot CLI
请按照Spring Boot文档