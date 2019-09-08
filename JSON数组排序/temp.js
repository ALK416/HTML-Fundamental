var goodLists = [
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 179,"tempPrice":"798","discount":2.2,"description":" 恒源祥 | 2019春季新款V领桑蚕丝针织衫开衫女式针织衫"},
    {"img" : "<img src=\"../Picture/secondary-goods-content5.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 29, "tempPrice" : "99.9", "discount" : 1.36, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content4.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 999, "tempPrice" : "1999", "discount" : 6.5, "description" : "奥义 【口碑爆款】瑜伽脚蹬拉力器家用运动健身减肥仰卧起坐女器材用品"},
    {"img" : "<img src=\"../Picture/secondary-goods-content3.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 100, "tempPrice" : "120.5", "discount" : 7, "description" : "李宁 仰卧起坐辅助器材家用健身瘦肚子脚蹬拉力器瑜伽女卷腹弹力绳"},
    {"img" : "<img src=\"../Picture/secondary-goods-content2.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content6.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content2.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content7.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content6.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content2.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content7.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content7.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content2.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content7.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content2.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content2.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content7.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content7.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content2.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content6.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 199, "tempPrice" : "299", "discount" : 3.1415926, "description" : "索维尔 臂力器40/30/20kg50/60公斤男胸肌健身器材锻炼握力棒家用臂力棒"},
    {"img" : "<img src=\"../Picture/secondary-goods-content1.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 19999, "tempPrice" : "2999", "discount" : 1.234, "description" : "HUOBAN 负重绑腿可调节铅块隐形跑步负重装备沙袋运动训练健身装备2KG"},
    {"img" : "<img src=\"../Picture/secondary-goods-content7.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
    {"img" : "<img src=\"../Picture/secondary-goods-content6.jpg\" style=\"width: 218px;\" alt=\"\">", "Price" : 9.9, "tempPrice" : "20", "discount" : 8, "description" : "云麦 握力圈减压硅胶握力器手指康复专业训练手力男女健身便携小巧"},
];

window.onload = function () {
    /*加载未排序的商品区域*/
    for(var good in goodLists){
        var tempGood = "<div class=\"good-content\">" + "<div class=\"good-content-part1\">" + goodLists[good].img
            + "</div>" + "<div class=\"good-content-part2\">" + "<div class=\"goods-info\">" +
            "<div class=\"fallingTips\">直降</div>" +
            "<div class=\"goods-price-wrapper\">" +
            "<em class=\"goods-sells-price \">" +
            "<span class=\"u-yen  currency-symbol\">¥</span>" +
            "<span class=\"price\">" + goodLists[good].Price + "</span>" +
            "<span class=\"price-from\"></span>" +
            "</em>" +
            "</div>" +
            "<del class=\"goods-small-price goods-market-price\">" +
            "<span class=\"u-yen  currency-symbol\">¥</span>" +
            goodLists[good].tempPrice + "</del>" +
            "<span class=\"goods-small-price vipshop-discount\">" +
            goodLists[good].discount + "折</span>" +
            "</div>" + "</div>" +
            "<div class=\"good-content-part3\">" +
            "<h4 class=\"goods-info goods-title-info\"><a target=\"_blank\" rel=\"noopener\" href=\"//detail.vip.com/detail-3683628-2158960273.html\" title=\"" +
            goodLists[good].description + "\">" + goodLists[good].description +
            "</a></h4>" +
            "</div>" +
            "<div class=\"good-content-part4\">" +
            "<p class=\"goods-tag\">" +
            "<span class=\"goods-global-tag goods_singleCoupon_tag J_singleCoupon_2158960273 hidden\"></span>" +
            "<span class=\"goods-global-tag hidden\">" +
            "<i class=\"goods-global-flag hidden\">" +
            "<img src=\"\" height=\"18\" alt=\"\">" +
            "</i>" +
            "<em class=\"goods-global-txt\">唯品国际</em>" +
            "</span>" +
            "<span class=\"goods-vendor-tag \">商家发货</span>" +
            "<span class=\"goods-vendor-tag goods-presale-tag hidden\">预售</span>" +
            "<span class=\"goods-global-tag goods_singleCoupon_tag hidden\"></span>" +
            "</p>" +
            "</div>" +
            "</div>";

        $(".goods").append(tempGood);

    }

    $(".orderByPrice").click(function () {
        alert("对商品按照价格进行排序");
        var sortIndex = "Price";
        console.log(JSON.stringify(goodLists));
        var asce = function (x,y) {
            return (x[sortIndex] > y[sortIndex])? 1:-1
        };
        console.log("商品排序启动");
        goodLists.sort(asce);

        /*首先清空所有商品*/
        $(".goods").empty();
        for(var good in goodLists){
            var tempGood = "<div class=\"good-content\">" + "<div class=\"good-content-part1\">" + goodLists[good].img
                + "</div>" + "<div class=\"good-content-part2\">" + "<div class=\"goods-info\">" +
                "<div class=\"fallingTips\">直降</div>" +
                "<div class=\"goods-price-wrapper\">" +
                "<em class=\"goods-sells-price \">" +
                "<span class=\"u-yen  currency-symbol\">¥</span>" +
                "<span class=\"price\">" + goodLists[good].Price + "</span>" +
                "<span class=\"price-from\"></span>" +
                "</em>" +
                "</div>" +
                "<del class=\"goods-small-price goods-market-price\">" +
                "<span class=\"u-yen  currency-symbol\">¥</span>" +
                goodLists[good].tempPrice + "</del>" +
                "<span class=\"goods-small-price vipshop-discount\">" +
                goodLists[good].discount + "折</span>" +
                "</div>" + "</div>" +
                "<div class=\"good-content-part3\">" +
                "<h4 class=\"goods-info goods-title-info\"><a target=\"_blank\" rel=\"noopener\" href=\"//detail.vip.com/detail-3683628-2158960273.html\" title=\"" +
                goodLists[good].description + "\">" + goodLists[good].description +
                "</a></h4>" +
                "</div>" +
                "<div class=\"good-content-part4\">" +
                "<p class=\"goods-tag\">" +
                "<span class=\"goods-global-tag goods_singleCoupon_tag J_singleCoupon_2158960273 hidden\"></span>" +
                "<span class=\"goods-global-tag hidden\">" +
                "<i class=\"goods-global-flag hidden\">" +
                "<img src=\"\" height=\"18\" alt=\"\">" +
                "</i>" +
                "<em class=\"goods-global-txt\">唯品国际</em>" +
                "</span>" +
                "<span class=\"goods-vendor-tag \">商家发货</span>" +
                "<span class=\"goods-vendor-tag goods-presale-tag hidden\">预售</span>" +
                "<span class=\"goods-global-tag goods_singleCoupon_tag hidden\"></span>" +
                "</p>" +
                "</div>" +
                "</div>";

            $(".goods").append(tempGood);

        }
    });

    $(".orderByDiscount").click(function () {
        alert("对商品按照折扣进行排序");
        var sortIndex = "discount";
        var asce = function (x,y) {
            return (x[sortIndex] > y[sortIndex])? 1:-1
        };
        console.log("商品排序启动");
        goodLists.sort(asce);

        /*首先清空所有商品*/
        $(".goods").empty();
        for(var good in goodLists){
            var tempGood = "<div class=\"good-content\">" + "<div class=\"good-content-part1\">" + goodLists[good].img
                + "</div>" + "<div class=\"good-content-part2\">" + "<div class=\"goods-info\">" +
                "<div class=\"fallingTips\">直降</div>" +
                "<div class=\"goods-price-wrapper\">" +
                "<em class=\"goods-sells-price \">" +
                "<span class=\"u-yen  currency-symbol\">¥</span>" +
                "<span class=\"price\">" + goodLists[good].Price + "</span>" +
                "<span class=\"price-from\"></span>" +
                "</em>" +
                "</div>" +
                "<del class=\"goods-small-price goods-market-price\">" +
                "<span class=\"u-yen  currency-symbol\">¥</span>" +
                goodLists[good].tempPrice + "</del>" +
                "<span class=\"goods-small-price vipshop-discount\">" +
                goodLists[good].discount + "折</span>" +
                "</div>" + "</div>" +
                "<div class=\"good-content-part3\">" +
                "<h4 class=\"goods-info goods-title-info\"><a target=\"_blank\" rel=\"noopener\" href=\"//detail.vip.com/detail-3683628-2158960273.html\" title=\"" +
                goodLists[good].description + "\">" + goodLists[good].description +
                "</a></h4>" +
                "</div>" +
                "<div class=\"good-content-part4\">" +
                "<p class=\"goods-tag\">" +
                "<span class=\"goods-global-tag goods_singleCoupon_tag J_singleCoupon_2158960273 hidden\"></span>" +
                "<span class=\"goods-global-tag hidden\">" +
                "<i class=\"goods-global-flag hidden\">" +
                "<img src=\"\" height=\"18\" alt=\"\">" +
                "</i>" +
                "<em class=\"goods-global-txt\">唯品国际</em>" +
                "</span>" +
                "<span class=\"goods-vendor-tag \">商家发货</span>" +
                "<span class=\"goods-vendor-tag goods-presale-tag hidden\">预售</span>" +
                "<span class=\"goods-global-tag goods_singleCoupon_tag hidden\"></span>" +
                "</p>" +
                "</div>" +
                "</div>";

            $(".goods").append(tempGood);

        }
    });
};