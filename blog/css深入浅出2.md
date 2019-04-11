- ### 文字垂直居中
>少用height(会将高度写死，一旦文字变动会出现bug)
使用 line-height + padding 实现给定行高！！！！！

######实现行高为130px
![line-height + padding](https://upload-images.jianshu.io/upload_images/16155751-7a5e647bf9741c3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Tips: 四行每行行高为30px， 30\*4 = 120 + 5*2 = 130
![height](https://upload-images.jianshu.io/upload_images/16155751-6d9ec2b0b7865761.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![溢出](https://upload-images.jianshu.io/upload_images/16155751-35d8a4fe91d2f915.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![line-height + padding](https://upload-images.jianshu.io/upload_images/16155751-a94e5c69a7737044.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>通过新增文字，对比发现，若高度固定，新增文字会溢出；使用padding会自适应，不会出现溢出现象
- ### 文字溢出
######1. 单行文字溢出
![初始状态](https://upload-images.jianshu.io/upload_images/16155751-a470407b6c3f0ed0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![文字不换行](https://upload-images.jianshu.io/upload_images/16155751-e1aee9e8de852a72.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

     white-space:nowrap;    

![超出部分隐藏](https://upload-images.jianshu.io/upload_images/16155751-86d12be865f2e202.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  
     overflow:hidden;    

![...显示](https://upload-images.jianshu.io/upload_images/16155751-7657f0fac7f1f3ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    text-overflow:ellipsis;

```
 //完整css代码
  <style>
  div{
    border:1px solid red;
    white-space:nowrap;      
    overflow:hidden;        
    text-overflow:ellipsis;
  }
  </style>
```
######2. 多行溢出
![google](https://upload-images.jianshu.io/upload_images/16155751-111b88efcb15f2e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/16155751-b6bc0082381b91ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![效果](https://upload-images.jianshu.io/upload_images/16155751-493c4749c479e9b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
 //完整代码
 <style>
    div{
      border:1px solid red;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
    
    }
  </style>
```
>` -webkit-line-clamp: 3`可控制显示行数
超出部分若不想显示，使用 `overflow:hidden`隐藏即可