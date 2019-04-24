#####Git使用方式：
* 本地使用
* 本地上传Github
* 下载Github仓库
### ①本地使用
思路：创建项目目录-->创建.git目录-->添加文件-->将文件添加到[暂存区]-->提交到仓库
![本地仓库.PNG](https://upload-images.jianshu.io/upload_images/16155751-2149c22663f09701.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![本地仓库.PNG](https://upload-images.jianshu.io/upload_images/16155751-0bdd9cea7e5628ac.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注：
  * git  init   创建.git目录
  * git  status  -sb  查看代码在缓存区状态（？未添加  ， A已添加）  
-sb 显示总结和分支 
  * git  add  将文件添加到暂存区
 *  git commit -m "注释"   将暂存区内容正式提交到本地仓库
* git log 查看变更历史
（文件每一次改动，都要用git add、git commit进行更新添加到git本地仓库）
### ② 本地上传Github
思路：创建git仓库-->上传本地仓库
![](https://upload-images.jianshu.io/upload_images/16155751-7cc7ca18a268295e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/16155751-925b07e5dbd3ecc4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/16155751-36e90d7a824415a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/16155751-d1200b1fbfa74116.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
注： 千万要使用ssh地址
### ③ 下载Github仓库
git clone [git@github.com](mailto:git@github.com "null"):xxxx  下载仓库
![](https://upload-images.jianshu.io/upload_images/16155751-15114707d9b54652.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
注：箭头指向即git仓库地址
![](https://upload-images.jianshu.io/upload_images/16155751-9b0f261a90fcf8d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####上传更新
- git add 文件路径
- git commit -m "信息"
- git pull 
- git push
![](https://upload-images.jianshu.io/upload_images/16155751-b4a554f9cf542c8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 注：git pull 命令不能忘记(⊙o⊙)     