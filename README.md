## 初试小程序之仿探探  
### 项目预览  
![](../assets/show/tantan.gif)    
### 项目配置  
```
    "pages": [
        "pages/load/load",
        "pages/setting/setting",
        "pages/index/index",
        "pages/help/help",
        "pages/editInfo/editInfo",
        "pages/user_info/user_info",
        "pages/user/user",
        "pages/chat/chat"
    ],
  ```
  ---  
  ### 部分功能点介绍  
  - 主页图片左滑右滑对应按钮变化  
  ![](../assets/show/huadong.gif)  
   这里写了三个大的盒子放着图片和文字信息,再将他们放到swiper-item里面，用swiper组件实现整个盒子的左右滑动  
  ```
    <swiper class='swiper-item__content' current="" bindchange="changeswiper">
        <swiper-item class="swip">
            <view class='page__bd_content'> 
                <image class="slide-image" src="http://pic.qqtn.com/up/2017-12/15126388387704237.jpg" mode="scaleToFill"/> 
                <view class="name">K</view>
                <view class="age">♂21</view>
                <view class="conste">金牛座</view>
                <view class="status">文化/教育</view> 
            </view>
        </swiper-item>
    </swiper>
  ```  
   盒子下面不是按钮,我是放了两张图片  

 ```
    <view class="page__ft">
        <image class="notlike {{left?'active':''}}" src="../../images/notlike.png" />
        <image class="like {{right?'active':''}}" src="../../images/like.png" />
    </view>
 ```  
   先给他们写个滑动的时候触发的动画效果  
 ```
    .active {
        animation: active 1s ease;//定义一个叫做active的动画
    }
    @keyframes active {//补充active动作脚本
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1.0);
        }
    }
 ```  
   在page的data里面定义三个变量，将left,right变量绑定到对应图片中  
 ```
    data: {
        left: false ,
        right: false,
        activeIndex: 0
    },
 ```  
   在swiper绑定事件中具体判断左右滑动事件  
 ```
    changeswiper: function(e) {
        var index = e.detail.current;//当前所在页面的 index
        if(index > this.data.activeIndex) {//左滑事件判断
        this.setData({
            left: true//若为左滑，left值为true,触发图片动画效果
        })
        } else if(index < this.data.activeIndex) {//右滑事件判断
        this.setData({
            right: true//若为右滑，right值为true,触发图片动画效果
        })
        }
        setTimeout(() => {//每滑动一次，数据发生变化
        this.setData({
            activeIndex: index,
            left:false,
            right:false
        })
        }, 1000);
    },
 ```  
 ---  
 - 从本地上传图片  
 ![](../assets/show/uploadImage.gif)  
   这个呀查一查小程序开发文档就好了，先在要上传图片的地方的src绑定个数据变量  
```
    <image class="addImg" src="{{imgUrl}}" bindtap="uploadImg" />
```  
   放入图片默认地址，就是上传图片之前的添加图片  
```
    data: {
        imgUrl: '../../images/addImg.png'
    },
```  
   通过绑定tap事件将上传的图片地址替换进去  
```
    uploadImg: function(e) {
        var that = this;
        wx.chooseImage({
        count: 1, //上传图片数量
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var tempFilePaths = res.tempFilePaths;
            that.setData({
                imgUrl: tempFilePaths
            })
            wx.showToast({//显示上传成功
                title: '上传成功',
                icon: 'success',
                duration: 2000
            })
        }
    }),
```  
- 配对成功列表据通过easy-mock获取后台数据  
 ![](../assets/show/match.gif)  
  block wx:for渲染一个包含多节点的结构块  
 ```
    <swiper-item>
        <view class="swiper-item__content">
            <block wx:for="{{friendsList}}" wx:key="index">
                <view class="weui-tab__content">
                    <view class="weui-media-box__hd">
                        <image src="{{item.avatar}}" mode="aspectFit"></image>
                    </view> 
                    <view class="weui-media-box__bd">
                        <view class="weui-media-box__nickname">{{item.nickname}}</view>
                        <view class="weui-media-box__message">{{item.message}}</view>
                    </view>
                </view>
            </block>
        </view>
    </swiper-item>
 ```  
   获取后台数据  
 ```
    wx.request({
        url: 'https://www.easy-mock.com/mock/5a23dbf382614c0dc1bebf04/getFriendsList/getFriendsList',
        success: (res) => {
            // console.log(response);
            this.setData({
            friendsList: res.data.data.friendsList
            })
        }
        })
 ```  
---  
### 项目开发用到的一些工具  
微信开发者工具、VScode、Github  
Iconfont阿里巴巴矢量图标库：各种图片logo应有尽有，前端开发必备  
esay-mock:模拟数据请求，实现无后端编程  
W3Cschool微信小程序开发教程手册文档：开发小程序要多看看哦  

---

### 小结  
emmmm目前项目功能还是很简单呀，还有很多功能后面慢慢实现吧~比如利用将上传的图片放到storage中，页面刷新之后图片依然在，slider滑动到某一处在页面上保存当前值，模拟配对成功后弹出提醒页面等等......

这里有更详细的项目描述哦~<https://segmentfault.com/a/1190000012422220>  
喜欢记得给个star鼓励一下哦~笔芯笔芯  
这里可以找到我哦804316947@qq.com  










  
