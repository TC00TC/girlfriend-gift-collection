// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最心爱的孙蔚蔚❥(^_-)",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第一个生日！",
        "这10个月以来，我们去过很多地方",
        "沈阳周边",
        "珠海",
        "江苏",
        "还有很多地方~",
        "今年的礼物也许有点特别~",
        "我希望你能喜欢",
        "等我回去",
        "然后还有其他礼物~",
        "以及爱你的我！",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "最心爱的孙蔚蔚❥(^_-)": "./imgs/qipao.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "这是我们在一起的": "./imgs/chi.jpg",
        "第一个生日！": "./imgs/kaka.jpg",
        "这10个月以来，我们去过很多地方": "./imgs/yiqi.jpeg",
        "沈阳周边": "./imgs/liaoning1.jpg",
        "珠海": "./imgs/zhuhai.jpg",
        "江苏": "./imgs/suzhou.jpg",
        "还有很多地方": "./imgs/xian2.jpg",
        //"今年的礼物也许有点特别~": "./imgs/chuo.gif",
        "我希望你能喜欢": "./imgs/xian1.jpeg",
        "等我回去": "./imgs/yu.jpg",
        "然后还有其他礼物~": "./imgs/zhuhai2.jpg",
        "以及爱你的我！": "./imgs/biaobai.jpg",
        "生日快乐~~": "./imgs/biaobai.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的田先生~'
};
