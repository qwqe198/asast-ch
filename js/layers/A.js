addLayer("A", {
    name: "A", // 可选，仅用于少数位置，若缺失则默认使用层id
    symbol: "A", // 显示在层节点上。默认为id首字母大写
    position: 0, // 在一行中的水平位置。默认使用层id并按字母顺序排序
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    passiveGeneration(){
        let pg=0
        if (upg("B",23)||mil('I',1)) pg=Decimal.add(pg,1)
        if (mil("Z", 0))  pg=Decimal.add(pg,100)
        if (mil("Z", 1))  pg=Decimal.mul(pg,100)
        if (mil("Z", 2))  pg=Decimal.mul(pg,100)
        if (mil("Z", 3))  pg=Decimal.mul(pg,100)
        if (mil("Z", 4))  pg=Decimal.mul(pg,100)
        if (mil("C", 1))  pg=Decimal.mul(pg,100)
        if (mil("C", 2))  pg=Decimal.mul(pg,100)
        if (mil("D", 1))  pg=Decimal.mul(pg,100)
        if (mil("D", 2))  pg=Decimal.mul(pg,1e4)
        return pg},
    color: "#4BDC13",
    requires(){
        if (mil("Z", 4)) return new Decimal(1);
        return new Decimal(10);
    }, // 可以是考虑需求增长的函数
    resource: "A", // 声望货币名称
    baseResource() {if(player.Z.points.gte(25))return "Zp";return "点数"}, 
    baseAmount() {if(player.Z.points.gte(25))return layers.Z.getZp();return player.points}, 
    type: "normal", // normal: 获得货币的成本取决于获得的数量。static: 成本取决于你已经拥有的数量
    exponent(){
        if(player.Z.points.gte(34))return n(1);
        if(player.Z.points.gte(24))return n(0.2);
        if(player.Z.points.gte(21))return n(0.18);
        return n(0.5).mul(Decimal.pow(0.95,player.Z.points));
    }, // 声望货币指数
    gainExp() {// 计算来自加成的主货币指数
        return new Decimal(1)
    },
    row: 0, // 层在树中的行（0是第一行）
    hotkeys: [
        {key: "a", description: "A: 重置以获得A点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    gainMult() { // 计算来自加成的主货币乘数
        mult = new Decimal(1)
        mult = mult.mul(upg(this.layer,22)?3:1)
        mult = mult.mul(hasChallenge("A", 22)?20:1)
        mult = mult.mul(hasChallenge("A", 31)?20:1)
        mult = mult.mul(hasChallenge("C", 12)?1.025:1)
        mult = mult.mul(buyableEffect("B",11))
        mult = mult.mul(buyableEffect("E",11))
        mult = mult.mul(mil("F",0)?10:1)
        mult = mult.mul(mil("I",0)?5:1)
        mult = mult.mul(hasUpgrade("D", 55)?upgradeEffect('D',55):1)
        //if (mil('G',14)&&mult.gte('10^^4'))  mult=n(10).pow(n(10).pow(n(10).pow(n(10).pow(mult.log(10).log(10).log(10).log(10).add(tmp.G.gsre)))))
        // if(mil('G',14)) mult=mult.mul(player.points)
        return mult
    },
    softcap(){return new Decimal(Infinity)},
    softcapPower(){return new Decimal(1)},
    doReset(layer){
        if (layer=="F") {        
            let keep = [];
            if(mil("F", 0)) keep.push("challenges")
            if(mil("F", 0)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = []
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',13)) keep.push("upgrades")
            layerDataReset(this.layer, keep)}
    },
    microtabs: {
        stuff: {       
            "升级": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "挑战": {
                unlocked() {return (upg("B", 25))},
                content: ["challenges"]    },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {
        11: {
            title:'A1',
            description: function() {return '2倍点数 <br> A层总计：<br>'+ format(this.effect()) +'倍'},
            effect(){
                let ef=n(1)
                if(upg("A",11)) ef=ef.mul(2)
                if(upg("A",12)) ef=ef.mul(2)
                if(upg("A",13)) ef=ef.mul(2)
                if(upg("A",14)) ef=ef.mul(2)
                if(upg("A",21)) ef=ef.mul(3)
                if(upg("A",23)) ef=ef.mul(3)
                if(upg("A",25)) ef=ef.mul(5)
                if(upg("A",41)) ef=ef.mul(300)
                if(upg("A",43)) ef=ef.mul(500)
                if(upg("A",45)) ef=ef.mul(1000)
                if(upg("A",51)) ef=ef.mul(4000)
                if(upg("A",54)) ef=ef.mul(3e4)
                ef=ef.pow(buyableEffect("B",22))
                if(mil("Z",16)) ef=ef.pow(10)
                if(mil("Z",17)) ef=ef.pow(10)
                if(mil("Z",21)) ef=ef.pow(1.3080372873291066)
                return ef
            },
            cost:new Decimal(1),
        },
        12: {
            title:'A2',
            description: "2倍点数。",
            cost: new Decimal(1),
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'A3',
            description: "2倍点数。",
            cost: new Decimal(2),
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'A4',
            description: "2倍点数。",
            cost: new Decimal(4),
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'A5',
            description(){if(player.Z.points.gte(25))return "Zp 增强点数。";return "每秒点数^1.1。";},
            cost: new Decimal(10),
            unlocked() { return (upg(this.layer, 14))},
            effect()  {let ef=n(0.1)
                if (upg('B', 32))  ef = ef.add(0.05)
                if (upg('B', 35))  ef = ef.add(0.05)                
                if (inChallenge("A", 12))  ef = ef.mul(0.25)       
                if (player.Z.points.gte(27))  ef = ef.mul(5)
                if (inChallenge("A", 22))  ef = n(0)
                if (inChallenge("A", 31))  ef = n(0)
                if(player.Z.points.gte(25))return layers.Z.getZp().pow(ef).add(1);
                return player.points.pow(ef).add(1);          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        21: {
            title:'A6',
            description: "3倍点数。",
            cost:new Decimal(20),
            unlocked() { return (upg(this.layer, 15))},
        },
        22: {
            title:'A7',
            description: "3倍 A。",
            cost: new Decimal(30),
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'A8',
            description: "3倍点数。",
            cost:new Decimal(100),
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'A9',
            description: "对数(点数) 乘以每秒点数。",
            cost: new Decimal(200),
            unlocked() { return (upg(this.layer, 23))},
            effect()  { 
                let ef = player.points.add(10).log(10)
                if (upg('A',31)) ef = ef.mul(5)
                if (upg('A',32)) ef = ef.mul(5)
                if (upg('A',33)) ef = ef.pow(1.3)
                if (upg('A',34)) ef = ef.pow(1.03)
                if (upg('B',33)) ef = ef.pow(1.5)
                if (upg('B',34)) ef = ef.pow(1.5)
                if (upg('A',44)) ef = ef.pow(1.25)
                if (upg('A',52)) ef = ef.pow(1.15)

                if(hasMilestone('Z',5))ef = ef.pow(15)

                if (inChallenge("A",12)) ef = ef.pow(0.25)
                if (inChallenge("A",22)) ef = n(1)
                if (inChallenge("A",31)) ef = n(1)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        25: {
            title:'A10',
            description: "5倍点数。",
            cost:new Decimal(400),
            unlocked() { return (upg(this.layer, 24))},
        },
        31: {
            title:'A11',
            description: "A9 x5。",
            cost:new Decimal(800),
            unlocked() { return (upg(this.layer, 25))},
        },
        32: {
            title:'A12',
            description: "A9 x5。",
            cost:new Decimal(2000),
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'A13',
            description: "A9^1.3。",
            cost:new Decimal(5000),
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'A14',
            description: "A9^1.03。",
            cost:new Decimal(1.5e4),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'A15',
            description: "A^0.2 增强点数。解锁 B。",
            cost: new Decimal(2e4),
            unlocked() { return (upg(this.layer, 34))},
            effect()  { 
                let ef=n(0.2)
                if (upg('A',42))  ef=ef.mul(1.5)              
                return player[this.layer].points.add(1).pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        41: {
            title:'A16',
            description: "300倍点数。",
            cost:new Decimal('3e30'),
            unlocked() { return (hasChallenge(this.layer, 31))},
        },
        42: {
            title:'A17',
            description: "A15 ^1.25。",
            cost:new Decimal('1e33'),
            unlocked() { return (upg(this.layer, 41))},
        },
        43: {
            title:'A18',
            description: "500倍点数。",
            cost:new Decimal('2e36'),
            unlocked() { return (upg(this.layer, 42))},
        },
        44: {
            title:'A19',
            description: "A9 ^1.25。",
            cost:new Decimal('2e38'),
            unlocked() { return (upg(this.layer, 43))},
        },
        45: {
            title:'A20',
            description: "1000倍点数，C ^1.1。",
            cost:new Decimal('1e41'),
            unlocked() { return (upg(this.layer, 44))},
        },
        51: {
            title:'A21',
            description: "4000倍点数。",
            cost:new Decimal('2e74'),
            unlocked() { return (hasChallenge('C', 11))},
        },
        52: {
            title:'A22',
            description: "D x2，A9^1.15，解锁一个挑战。",
            cost:new Decimal('1e78'),
            unlocked() { return (upg(this.layer, 51))},
        },
        53: {
            title:'A23',
            description: "B26 x10。",
            cost:new Decimal('5e224'),
            unlocked() { return (upg('B', 62))},
        },
        54: {
            title:'A24',
            description: "B26 x10，x3e4 点数。",
            cost:new Decimal('1e229'),
            unlocked() { return (upg(this.layer, 53))},
        },
        55: {
            title:'A25',
            description: "Bb3-4 更强。",
            cost:new Decimal('1e243'),
            unlocked() { return (upg(this.layer, 54))},
        },
        61: {
            title:'A26',
            description: "基于 Bb1 效果给予 C 乘数。",
            cost:new Decimal('1e440'),
            effect()  { 
                let ef = buyableEffect('B',11).pow(0.02).times(buyableEffect('B',11).add(10).log(10).pow(1.5))
                return ef},
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (mil('B', 4))},
        },
        62: {
            title:'A27',
            description: "基于 Bb1 效果给予 B26 乘数。",
            cost:new Decimal('1e450'),
            effect()  { 
                let ef = buyableEffect('B',11).add(10).log(10).pow(1.2)
                return ef;},
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (upg(this.layer, 61))},
        },
        63: {
            title:'A28',
            description: "Bb5 x2。",
            cost:new Decimal('1e475'),
            unlocked() { return (upg(this.layer, 62))},
        },
        64: {
            title:'A29',
            description: "基于 Bb1 效果给予 D 乘数。",
            cost:new Decimal('1e621'),
            effect()  { 
                let ef = buyableEffect('B',11).pow(0.006).times(buyableEffect('B',11).add(10).log(10).pow(1.25))
                return ef;},
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (upg(this.layer, 63))},
        },
        65: {
            title:'A30',
            description: "Bb1-5 更便宜。",
            cost:new Decimal('1e625'),
            unlocked() { return (upg(this.layer, 64))},
        },
    },
    challenges: {
        11: {
            name: "Ac1",
            completionLimit: 1,
            challengeDescription() {return "点数 ^0.75"},//+format(tmp.A.baseAmount)
            unlocked() { return (upg("B", 25))},
            goalDescription: '5e12 点数',
            canComplete() {return player.points.gte('5e12')},//1e12
            rewardDescription: "^1.1 B。",
        },
        12: {
            name: "Ac2",
            completionLimit: 1,
            challengeDescription() {return "A5/A9 ^0.25"},
            unlocked() {  return (hasChallenge(this.layer, 11))},
            goalDescription: '2e13 点数',
            canComplete() {return player.points.gte('2e13')},//4e12
            rewardDescription: "x10 B。",
        },
        21: {
            name: "Ac3",
            completionLimit: 1,
            challengeDescription() {return "点数 ^0.55"},
            unlocked() { return (upg("B", 33))},
            goalDescription: '5e12 点数',
            canComplete() {return player.points.gte('5e12')},//3e10
            rewardDescription: "x50 点数。",
        },
        22: {
            name: "Ac4",
            completionLimit: 1,
            challengeDescription() {return "A5/A9 被禁用"},
            unlocked() { return (upg("B", 35))},
            goalDescription: '3e18 点数',
            canComplete() {return player.points.gte('3e18')},//5e16
            rewardDescription: "x100 点数，x20 A，x10 B。<br>解锁 C。",
        },
        31: {
            name: "Ac5",
            completionLimit: 1,
            challengeDescription() {return "点数 ^0.5，A5/A9 被禁用"},
            unlocked() { return (upg("C", 15))},
            goalDescription: '2e17 点数',
            canComplete() {return player.points.gte('2e17')},
            rewardDescription: "x200 点数，x20 A，x2 C。",
        },
        32: {
            name: "Ac6",
            completionLimit: 1,
            challengeDescription() {return "Bb1-2 ^0.5"},
            unlocked() { return (mil("D", 3))},
            goalDescription: '1e302 点数',
            canComplete() {return player.points.gte('1e302')},
            rewardDescription: "^1.01 点数。",
        },
        41: {//代码在 v0.7.2 版本编辑
            name: "Ac7",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb3-5 被禁用 <br> 完成次数：" +challengeCompletions(this.layer,this.id) + "/5"},
            unlocked() { return (mil('B',4))},
            goal(){
                let a=[n('e500'),n('e540'),n('e580'),n('e700'),n('e2025'),n(0)]
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' 点数'},
            canComplete() {return player.points.gte(this.goal())},
            rewardDescription: "基于 Bb1-2 增强点数。",
            rewardEffect() {
        if(hasMilestone("Z",20)){
            let ef = Decimal.pow(10,buyableEffect('B',11).add(10).log10().add(1e6).pow(0.6).mul(50))
                    if (upg('E',52)) ef=ef.pow(upgradeEffect('E',52))
            if (n(challengeCompletions("A", 41)).gte(1))  return ef
                    else return new Decimal(1)
        }
        if(hasMilestone("Z",16)){
            let ef = Decimal.pow(10,buyableEffect('B',11).add(10).log10().add(1e6).pow(2/3).mul(10))
                    if (upg('E',52)) ef=ef.pow(upgradeEffect('E',52))
            if (n(challengeCompletions("A", 41)).gte(1))  return ef
                    else return new Decimal(1)
        }
        if(hasMilestone("Z",15)){
            let ef = Decimal.pow(10,buyableEffect('B',11).add(10).log10().add(2e5).pow(0.75).mul(4))
                    if (upg('E',52)) ef=ef.pow(upgradeEffect('E',52))
            if (n(challengeCompletions("A", 41)).gte(1))  return ef
                    else return new Decimal(1)
        }
        if(hasMilestone("Z",14)){
            let ef = Decimal.pow(10,buyableEffect('B',11).add(10).log10().add(1e5).pow(0.85).mul(2))
                    if (upg('E',52)) ef=ef.pow(upgradeEffect('E',52))
            if (n(challengeCompletions("A", 41)).gte(1))  return ef
                    else return new Decimal(1)
        }
        if(hasMilestone("Z",12)){
            let ef1 = Decimal.pow(10,buyableEffect('B',11).add(10).log10().add(1000).pow(0.9).div(1.1));
            let ef2 = Decimal.pow(10,buyableEffect('B',12).add(10).log10().add(1000).pow(0.9).div(1.1));
                    let ef = ef1.mul(ef2)
                    if (upg('E',52)) ef=ef.pow(upgradeEffect('E',52))
            if (n(challengeCompletions("A", 41)).gte(1))  return ef
                    else return new Decimal(1)
        }
                let b=n(challengeCompletions("A", 41)).pow(1.25)
                let ef1 = n(buyableEffect('B',11)).pow(n(0.12).add(b.div(40)))
                let ef2 = n(buyableEffect('B',12)).pow(n(0.12).add(b.div(40)))
                let ef = ef1.mul(ef2)
                if (upg('E',52)) ef=ef.pow(upgradeEffect('E',52))
                if (n(challengeCompletions("A", 41)).gte(1))  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"倍"},
        },
    }
})
