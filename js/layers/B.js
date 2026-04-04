addLayer("B", {
    name: "B", 
    symbol: "B", 
    position: 1, // 在一行中的水平位置。默认使用层id并按字母顺序排序
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},
    passiveGeneration(){    
        let pg=n(0)
        if (mil("C", 2)||mil('I',1)) pg=n(1)
        if (mil("Z", 0))  pg=Decimal.add(pg,100)
        if (mil("Z", 1))  pg=Decimal.mul(pg,100)
        if (mil("Z", 2))  pg=Decimal.mul(pg,100)
        if (mil("Z", 3))  pg=Decimal.mul(pg,100)
        if (mil("Z", 4))  pg=Decimal.mul(pg,100)
        if (hasMilestone("C", 3))  pg=pg.mul(100)
        if (hasMilestone("D", 1))  pg=pg.mul(100)
        if (hasMilestone("D", 2))  pg=pg.mul(100)
        return pg
    },
    color: "#7AAA2C",
    requires(){
        if (mil("Z", 4)) return new Decimal(1);
        return new Decimal(3e4);
    },
    resource: "B", 
    baseResource: "A", 
    baseAmount() {return player.A.points}, 
    type: "normal", 
    exponent(){
        if(player.Z.points.gte(34))return n(1);
        if(player.Z.points.gte(25))return n(0.1);
        if(player.Z.points.gte(21))return n(0.07);
        return n(0.2).mul(Decimal.pow(0.95,player.Z.points));
    },
    gainExp() {return n(1)},
    row: 0, 
    hotkeys: [
        {key: "b", description: "B：重置以获得B点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return (upg('A',35)||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        mult = mult.mul(hasUpgrade(this.layer,14)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,15)?1.5:1)
        mult = mult.mul(hasUpgrade(this.layer,22)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,24)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,25)?2:1)
        mult = mult.mul(hasUpgrade('C',25)?50:1)
        mult = mult.mul(hasChallenge("A", 11)?1.1:1)
        mult = mult.mul(hasChallenge("A", 12)?10:1)
        mult = mult.mul(hasChallenge("A", 22)?10:1)
        mult = mult.mul(buyableEffect("B",12))
        mult = mult.mul(hasUpgrade("B", 41)?15:1)
        mult = mult.mul(hasUpgrade("B", 51)?20:1)
        mult = mult.mul(hasUpgrade("B", 53)?30:1)
        mult = mult.mul(hasUpgrade("B", 61)?upgradeEffect('B',61):1)
        mult = mult.mul(hasMilestone("B", 6)?100:1)
        mult = mult.mul(hasMilestone("B", 7)?1e5:1)
        mult = mult.mul(buyableEffect("E",12))
        mult = mult.mul(hasUpgrade("E", 82)?upgradeEffect('E',82):1)        
        mult = mult.mul(hasUpgrade("E",92)?upgradeEffect("E",92):1)
        mult = mult.mul(mil("F", 0)?10:1)
        mult = mult.mul(mil("I", 0)?5:1)
        mult = mult.mul(hasUpgrade("C", 43)?upgradeEffect('C',43):1)
        mult = mult.pow(hasUpgrade("E", 65)?1.004:1)
        if (inChallenge('F',11)) mult=mult.pow(0.25)
        return mult
    },
    softcap(){return new Decimal(Infinity)},
    softcapPower(){return new Decimal(1)},
    microtabs: {
        stuff: {       
            "升级": {
                unlocked() {return true},
                content: [ "upgrades"]
            }, 
            "购买项": {
                unlocked() {return (hasMilestone("D", 2))},
                content: [
                    "buyables"
                ]
            },  
            "里程碑": {
                unlocked() {return (hasUpgrade("B", 53))},
                content: ["milestones"]
            },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    branches: ["A"],
    doReset(layer){
        if (layer=="F") {        
            let keep = []
            if (mil("F",0)) keep.push("milestones")
            if (mil("F",0)) keep.push("upgrades")
            layerDataReset(this.layer, keep)
        }
        if (layer=="I") {        
            let keep = []
            if(gcs('I',11)) keep.push("milestones")
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',13)) keep.push("upgrades")
            layerDataReset(this.layer, keep)
        }
    },
    autoUpgrade() {return (hasUpgrade("F",13))},
    milestones: {
        0: {
            requirementDescription: "B总量 1e65 (1)",
            done() {return player[this.layer].total.gte('1e65')}, 
            effectDescription: "购买项花费为0。"
        },
        1: {
            requirementDescription: "B总量 1e69 (2)",
            done() {return player[this.layer].total.gte('1e69')}, 
            effectDescription: "B26效果除以Bb花费。"
        },
        2: {
            requirementDescription: "B总量 1e85 (3)",
            done() {return player[this.layer].total.gte('1e85')}, 
            effectDescription: "自动购买B购买项。",
            toggles: [ ["B","auto"] ]
        },
        3: {
            requirementDescription: "B总量 1e100 (4)",
            done() {return player[this.layer].total.gte('1e100')}, 
            effectDescription: "解锁第5个购买项。"
        },
        4: {
            requirementDescription: "B总量 1e111 (5)",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "解锁一个挑战。"
        },
        5: {
            requirementDescription: "B总量 1.79e308 (6)",
            done() {return player[this.layer].total.gte('1.79e308')}, 
            effectDescription: "100倍 C/D 被动。"
        },
        6: {
            requirementDescription: "B总量 1e350 (7)",
            done() {return player[this.layer].total.gte('1e350')}, 
            effectDescription: "100倍 B。"
        },
        7: {
            requirementDescription: "B总量 1e400 (8)",
            done() {return player[this.layer].total.gte('1e400')}, 
            effectDescription: "1e5倍 B，解锁一个新层。"
        },
    },
    upgrades: {
        11: {
            title:'B1',
            description: function () {
                return '5倍点数 \n' +
                '<br>当前B层总量: ' + format(this.effect()) + '倍'
            },            
            effect()  { 
                let ef = 5
                if (hasUpgrade('B',12)) ef *= 5
                if (hasUpgrade('B',13)) ef *= 5
                if (hasUpgrade('B',15)) ef *= 5
                if (hasUpgrade('B',24)) ef *= 10
                if (hasUpgrade('B',25)) ef *= 10
                if (hasUpgrade('B',31)) ef *= 20
                if (hasUpgrade('B',42)) ef *= 2e4
                if (hasUpgrade('B',64)) ef *= 5e4
                if (hasUpgrade('B',72)) ef *= 5e4
                if (hasUpgrade('B',81)) ef *= 1e5

                ef = Decimal.pow(ef, buyableEffect("B",21))

                if(mil("Z",16)) ef = ef.pow(10)
                if(mil("Z",17)) ef = ef.pow(10)
                if(mil("Z",21)) ef = ef.pow(1.0082320120323678024317209691057)
                return ef;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'B2',
            description: "5倍点数。",
            cost:new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'B3',
            description: "5倍点数。",
            cost:new Decimal(20),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'B4',
            description: "2倍 B。",
            cost:new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'B5',
            description: "1.5倍 B，5倍点数。",
            cost:new Decimal(80),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'B6',
            description: "B^0.3 增强点数。",
            cost: new Decimal(160),
            unlocked() { return (hasUpgrade(this.layer, 15))},
            effect()  { 
                let ef = 0.3
                if (hasUpgrade('B', 32)) ef *= 1.5
                if (hasUpgrade('C', 22)) ef *= 1.3
                if (hasUpgrade('D', 54)) ef = 1
                return player[this.layer].points.pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        22: {
            title:'B7',
            description: "2倍 B。",
            cost:new Decimal(200),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'B8',
            description: "被动获得 A。",
            cost:new Decimal(500),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'B9',
            description: "2倍 B，10倍点数。",
            cost:new Decimal(600),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'B10',
            description: "2倍 B，10倍点数。<br>解锁 A 挑战。",
            cost:new Decimal(1.5e3),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'B11',
            description: "20倍点数。",
            cost:new Decimal(8e4),
            unlocked() { return (hasUpgrade(this.layer, 25))},
        },
        32: {
            title:'B12',
            description: "A5 指数 +0.05。",
            cost:new Decimal(1.2e5),
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'B13',
            description: "A9^1.5，解锁下一个挑战。",
            cost:new Decimal(3e5),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'B14',
            description: "A9^1.5。",
            cost:new Decimal(8e5),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'B15',
            description: "A5 指数 +0.05，解锁下一个挑战。",
            cost:new Decimal(1.5e6),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'B16',
            description: "15倍 B，解锁第2个购买项。",
            cost:new Decimal('3e39'),
            unlocked() { return player.B.total.gte('1e39')},
        },
        42: {
            title:'B17',
            description: "2e4 倍点数<br>，解锁第3个购买项。",
            cost:new Decimal('1e41'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'B18',
            description: "Bb1-2 更便宜。",
            cost:new Decimal('1e43'),
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'B19',
            description: "基于 Bb1 效果给予点数乘数。",
            cost:new Decimal('3e46'),
            effect()  { 
                let b=n(buyableEffect('B',11))
                let ef = b.pow(0.2).times(b.add(1).log(10).pow(2))
                if (hasUpgrade('B',55)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 43))},
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        45: {
            title:'B20',
            description: "2e4 倍点数，解锁第4个购买项。",
            cost:new Decimal('4e48'),
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
        51: {
            title:'B21',
            description: "20倍 B。<br>Bb3 更强。",
            cost:new Decimal('3e50'),
            unlocked() { return (hasUpgrade(this.layer, 45))},
        },
        52: {
            title:'B22',
            description: "基于 Bb2 效果给予点数乘数。",
            cost:new Decimal('5e55'),
            effect()  { 
                let ef = buyableEffect('B',12).pow(0.25).times(buyableEffect('B',11).add(1).log(10).pow(2))
                if (hasUpgrade('B',55)) ef=ef.pow(1.25)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 51))},
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        53: {
            title:'B23',
            description: "30倍 B，Bb1 更便宜。",
            cost:new Decimal('1e57'),
            unlocked() { return (hasUpgrade(this.layer, 52))},
        },
        54: {
            title:'B24',
            description: "Bb1 基础 +0.05。",
            cost(){
                if(player.Z.points.gte(3))return new Decimal('1e62');
                return new Decimal('3e63');
            },
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'B25',
            description: "B19/B22 ^1.3。",
            cost(){
                if(player.Z.points.gte(3))return new Decimal('5e62');
                return new Decimal('1e64');
            },
            unlocked() { return (hasUpgrade(this.layer, 54))},
        },
        61: {
            title:'B26',
            description(){return player.Z.points.gte(35)?"Zp 乘以 B":"对数点数乘以 B"},
            cost(){
                if(player.Z.points.gte(3))return new Decimal('1e63');
                return new Decimal('1e65');
            },
            effect()  { 
                let ef=player.points.add(10).log(10)
                if(player.Z.points.gte(35)) ef = layers.Z.getZp().add(10);
                if (hasUpgrade('A',53)&&hasMilestone('Z',4)) ef=ef.mul(10)
                if (hasUpgrade('A',62)&&hasMilestone('Z',4)) ef=ef.mul(upgradeEffect('A',62))
                if (hasMilestone('Z',2)) ef = ef.pow(2);
                if (hasUpgrade('A',53)&&!hasMilestone('Z',4)) ef=ef.mul(10)
                if (hasUpgrade('B',63)) ef=ef.pow(1.15)
                if (hasUpgrade('B',64)) ef=ef.pow(1.15)
                if (hasUpgrade('B',74)) ef=ef.pow(1.3)
                if (hasUpgrade('A',62)&&!hasMilestone('Z',4)) ef=ef.mul(upgradeEffect('A',62))
                if (hasUpgrade('E',31)) ef=ef.pow(1.1)
                if (hasMilestone('E',8)) ef=ef.pow(1.05)
                if (hasMilestone('E',10)) ef=ef.pow(1.05)
                if (hasUpgrade('E',105)) ef=ef.pow(1.05)
                if (hasMilestone('F',2)) ef=ef.pow(1.1)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 55))},
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        62: {
            title:'B27',
            description: "解锁新的 A 升级。",
            cost:new Decimal('1e71'),
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'B28',
            description: "B26 ^1.15。",
            cost:new Decimal('1e86'),
            unlocked() { return (hasMilestone(this.layer, 2))},
        },
        64: {
            title:'B29',
            description: "B26 ^1.15，5e4 倍点数。",
            cost:new Decimal('1e88'),
            unlocked() { return (hasUpgrade(this.layer, 63))},
        },
        65: {
            title:'B30',
            description: "Bb1-4 更便宜。",
            cost:new Decimal('1e94'),
            unlocked() { return (hasUpgrade(this.layer, 64))},
        },
        71: {
            title:'B31',
            description: "Bb1-2 基础 +0.05。",
            cost:new Decimal('1e106'),
            unlocked() { return (hasMilestone(this.layer, 3))},
        },
        72: {
            title:'B32',
            description: "5e4 倍点数。",
            cost:new Decimal('1e107'),
            unlocked() { return (hasUpgrade(this.layer, 71))},
        },
        73: {
            title:'B33',
            description: "Bb1 基础 ×1.025。",
            cost:new Decimal('1e115'),
            unlocked() { return (hasUpgrade(this.layer, 72))},
        },
        74: {
            title:'B34',
            description: "B26 ^1.3。",
            cost:new Decimal('1e120'),
            unlocked() { return (hasUpgrade(this.layer, 73))},
        },
        75: {
            title:'B35',
            description: "Bb5 更便宜。",
            cost:new Decimal('1e127'),
            unlocked() { return (hasUpgrade(this.layer, 74))},
        },
        81: {
            title:'B36',
            description: "1e5 倍点数。",
            cost:new Decimal('1e315'),
            unlocked() { return (hasUpgrade('A', 65))},
        },
        82: {
            title:'B37',
            description: "Bb1-2 更便宜。",
            cost:new Decimal('1e325'),
            unlocked() { return (hasUpgrade(this.layer, 81))},
        },
        83: {
            title:'B38',
            description: "将你的 E 挑战完成次数设为 8。",
            cost:new Decimal('e1234567890'),
            unlocked() { return player.Z.points.gte(25)},
        },
        84: {
            title:'B39',
            description: "将你的 E 挑战完成次数设为 9，这将大幅增加 E 挑战的奖励。",
            cost:new Decimal('e467e17'),
            unlocked() { return player.Z.points.gte(25)},
        },
        85: {
            title:'B40',
            description: "将你的 E 挑战完成次数设为 10，这将大幅增加 E 挑战的奖励。同时 Gs 获取基础 ×2 且 ^2。",
            cost:new Decimal('ee1000'),
            unlocked() { return player.Z.points.gte(26)},
        },
    },
    automate(){
        if (player.B.auto) {
            buyBuyable("B",11)
            buyBuyable("B",12)
            buyBuyable("B",21)
            buyBuyable("B",22)
            buyBuyable("B",23)
        }
    },
    buyables:{
        11: {
            title: "Bb1", 
            cost(x) {
                let cost = Decimal.pow(4, x.pow(1.1)).times('1e38')
                if (hasUpgrade('B',43)) cost = Decimal.pow(4, x.pow(1.1)).times('1e30')
                if (hasUpgrade('B',53)) cost = Decimal.pow(4, x.pow(1.1)).times('1e20')
                if (hasUpgrade('B',65)) cost = Decimal.pow(4, x.pow(1.1)).times('1e10')
                if (hasUpgrade('A',65)) cost = Decimal.pow(3.5, x.pow(1.1)).times('1e5')
                if (hasUpgrade('B',82)) cost = Decimal.pow(3, x.pow(1.1))
                if (hasMilestone('Z',6)) cost = Decimal.pow(2.8, x.pow(1.1))
                if (hasUpgrade('E',43)) cost = Decimal.pow(2.7, x.pow(1.1))
                if (hasUpgrade('E',73)) cost = Decimal.pow(2.6, x.pow(1.1))
                if (hasMilestone('Z',23)) cost = Decimal.pow(2.5, x.pow(1.1))
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (hasMilestone('Z',2)) cost = cost.div(10)
                if (hasChallenge('E',31)) cost = cost.div(challengeEffect('E',31))
                if(player.Z.points.gte(11)) cost = cost.div(tmp.E.ekf);
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (!mil('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            base(){   
                let b = n(3)
                if (hasMilestone('Z',7)) b = Decimal.add(b,1)
                if (hasUpgrade('B',54)) b = b.add(0.05)
                if (hasUpgrade('B',71)) b = b.add(0.05)
                if (hasUpgrade('B',73)) b = b.mul(1.02)
                if (hasMilestone('Z',23)) b = new Decimal(5)
                if (hasUpgrade('F',65)) b = b.add(upgradeEffect('F',65))
                if (hasMilestone('B',3) && !hasMilestone('Z',23)) b = b.add(buyableEffect('B',23))
                if (hasUpgrade('G',25) && !hasMilestone('Z',23)) b = b.mul(upgradeEffect('G',25))
                if (hasMilestone('B',3) && hasMilestone('Z',23)) b = b.mul(buyableEffect('B',23))
                if (inChallenge('E',12)) b = n(2)
                if (inChallenge('E',31)) b = n(1.2)
                return b
            },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                if (inChallenge('A',32)) ef=ef.pow(0.5)
                return ef
            },
            display() {
                return "给予 A ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " B \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect()) + " A"
            },
            unlocked() { return hasMilestone('D',2) }
        },
        12: {
            title: "Bb2", 
            cost(x) {
                let cost = Decimal.pow(10, x.pow(1.1)).times('1e40')
                if (hasUpgrade('B',43)) cost = Decimal.pow(10, x.pow(1.1)).times('1e30')
                if (hasUpgrade('B',65)) cost = Decimal.pow(10, x.pow(1.1)).times('1e20')
                if (hasUpgrade('A',65)) cost = Decimal.pow(10, x.pow(1.1)).times('1e10')
                if (hasUpgrade('B',82)) cost = Decimal.pow(9, x.pow(1.1))
                if (hasMilestone('Z',6)) cost = Decimal.pow(8, x.pow(1.1))
                if (hasUpgrade('E',43)) cost = Decimal.pow(7.5, x.pow(1.1))
                if (hasUpgrade('E',73)) cost = Decimal.pow(7, x.pow(1.1))
                if (hasMilestone('Z',23)) cost = Decimal.pow(2.5, x.pow(1.1))
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (hasMilestone('Z',2)) cost = cost.div(10)
                if (hasChallenge('E',31)) cost = cost.div(challengeEffect('E',31))
                if(player.Z.points.gte(11)) cost = cost.div(tmp.E.ekf);
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            base(){   
                let bas = n(2)
                if (hasMilestone('Z',7)) bas = Decimal.add(bas,1)
                if (hasUpgrade('B',71)) bas = Decimal.add(bas,0.05)
                if (hasMilestone('Z',23)) bas = new Decimal(5)
                if (hasUpgrade('F',65)) bas = Decimal.add(bas,upgradeEffect('F',65))
                if (hasMilestone('B',3) && !hasMilestone('Z',23)) bas = Decimal.add(bas,buyableEffect('B',23))
                if (hasUpgrade('G',25) && !hasMilestone('Z',23)) bas = Decimal.mul(bas,upgradeEffect('G',25))
                if (hasMilestone('B',3) && hasMilestone('Z',23)) bas = bas.mul(buyableEffect('B',23))
                if (inChallenge('E',12)) bas = n(2)
                if (inChallenge('E',31)) bas = n(1.2)
                return bas
            },
            effect(x) {
                let efbb2 = Decimal.pow(this.base(), x)
                if (inChallenge('A',32)) efbb2=Decimal.pow(efbb2,0.5)
                return efbb2
            },
            display() {
                return "给予 B ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " B \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect()) + " B"
            },
            unlocked() { return hasUpgrade('B',41) }
        },
        21: {
            title: "Bb3", 
            cost(x) {
                let cost = Decimal.pow(10, x.pow(1.1)).times('1e41')
                if (hasUpgrade('B',65)) cost = Decimal.pow(10, x.pow(1.1)).times('1e30')
                if (hasUpgrade('A',65)) cost = Decimal.pow(10, x.pow(1.1)).times('1e20')
                if (hasMilestone('Z',6)) cost = Decimal.pow(10, x.pow(1.1))
                if (hasMilestone('Z',8)) cost = Decimal.pow(9, x.pow(1.1))
                if (hasUpgrade('F',35)) cost = Decimal.pow(3.6, x.pow(1.1))
                if (hasMilestone('Z',21)) cost = Decimal.pow(2.6, x.pow(1.1))
                if (hasMilestone('Z',23)) cost = Decimal.pow(2.5, x.pow(1.1))
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (hasMilestone('Z',2)) cost = cost.div(10)
                if (hasChallenge('E',31)) cost = cost.div(challengeEffect('E',31))
                if(player.Z.points.gte(11)) cost = cost.div(tmp.E.ekf);
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let ef = Decimal.pow(x.div(1.3).add(1),0.6).add(5).div(6)
                if (hasUpgrade('B',51)) ef = Decimal.pow(x.div(1.25).add(1),0.6).add(3.5).div(4.5)
                if (hasUpgrade('A',55)) ef = Decimal.pow(x.div(1.23).add(1),0.6).div(4).add(0.75)
                if (hasMilestone('Z',21)) ef = Decimal.pow(x.add(1),0.7).div(5).add(0.8)
                if (hasMilestone('Z',23)) ef = Decimal.pow(x.add(1),0.7)
                if (hasChallenge('F',11)) ef = Decimal.mul(ef,Decimal.add(1,challengeEffect('F',11)/100))
                if (hasUpgrade('F',35)) ef = Decimal.mul(ef.sub(1),1.05).add(1)
                if (inChallenge('A',41)) ef=n(1)
                if (inChallenge('E',31)) ef=n(1)
                if (inChallenge('E',42)) ef=n(1)
                return ef
            },
            display() {
                return "增强 B 的点数乘数（指数） \n" +
                "花费: " + format(this.cost()) + " B \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ^" + format(this.effect())
            },
            unlocked() { return hasUpgrade('B',42) }
        },
        22: {
            title: "Bb4", 
            cost(x) {
                let cost = Decimal.pow(20, x.pow(1.1)).times('1e49')
                if (hasUpgrade('B',65)) cost = Decimal.pow(10, x.pow(1.1)).times('1e40')
                if (hasUpgrade('A',65)) cost = Decimal.pow(10, x.pow(1.1)).times('1e30')
                if (hasMilestone('Z',6)) cost = Decimal.pow(10, x.pow(1.1))
                if (hasUpgrade('F',35)) cost = Decimal.pow(4.9, x.pow(1.1))
                if (hasMilestone('Z',21)) cost = Decimal.pow(2.6, x.pow(1.1))
                if (hasMilestone('Z',23)) cost = Decimal.pow(2.5, x.pow(1.1))
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (hasMilestone('Z',2)) cost = cost.div(10)
                if (hasChallenge('E',31)) cost = cost.div(challengeEffect('E',31))
                if(player.Z.points.gte(11)) cost = cost.div(tmp.E.ekf);
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let ef = Decimal.pow(x.div(1.3).add(1),0.7).add(5).div(6)
                if (hasUpgrade('A',55)) ef= Decimal.pow(x.div(1.26).add(1),0.7).div(5).add(0.8)
                if (hasMilestone('Z',21)) ef = Decimal.pow(x.add(1),0.7).div(5).add(0.8)
                if (hasMilestone('Z',23)) ef = Decimal.pow(x.add(1),0.7)
                if (hasChallenge('F',11)) ef = Decimal.mul(ef,Decimal.add(1,challengeEffect('F',11)/100))
                if (hasUpgrade('F',35)) ef = Decimal.mul(ef.sub(1),1.05).add(1)
                if(inChallenge('A',41)) ef=n(1)
                if (inChallenge('E',31)) ef=n(1)
                if (inChallenge('E',42)) ef=n(1)
                return ef
            },
            display() {
                return "增强 A 的点数乘数（指数） \n" +
                "花费: " + format(this.cost()) + " B \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ^" + format(this.effect())
            },
            unlocked() { return hasUpgrade('B',45) }
        },
        23: {
            title: "Bb5", 
            cost(x) {
                let cost = Decimal.pow(1234, x.pow(1.2)).times('1e115')
                if (hasUpgrade('B',75)) cost = Decimal.pow(hasMilestone("Z",3)?1000:1111, x.pow(1.2)).times(hasMilestone("Z",3)?1e50:1e100)
                if (hasUpgrade('A',65)) cost = Decimal.pow(hasMilestone("Z",3)?1000:1111, x.pow(1.2)).times(hasMilestone("Z",3)?1e25:1e50)
                if (hasMilestone('Z',6)) cost = Decimal.pow(1000, x.pow(1.2))
                if (hasUpgrade('E',62)) cost = Decimal.pow(900, x.pow(1.2))
                if (hasUpgrade('D',44)) cost = Decimal.pow(800, x.pow(1.2))
                if (hasUpgrade('F',35)) cost = Decimal.pow(700, x.pow(1.2))
                if (hasMilestone('Z',23)) cost = Decimal.pow(2.5, x.pow(1.1))
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (hasMilestone('Z',2)) cost = cost.div(10)
                if (hasChallenge('E',31)) cost = cost.div(challengeEffect('E',31))
                if(player.Z.points.gte(11)) cost = cost.div(tmp.E.ekf);
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let ef = Decimal.pow(x.div(40).add(1),0.7).sub(1)
                if (player.Z.points.gte(9)) ef = Decimal.pow(x.div(20).add(1),0.5).sub(1)
                if (player.Z.points.gte(10)) ef = Decimal.pow(x.div(5).add(1),1/3).sub(1)
                if (player.Z.points.gte(12)) ef = Decimal.pow(x.div(2).add(1),0.25).sub(1)
                if (player.Z.points.gte(24)) ef = x.pow(0.2).div(1000)
                if (hasUpgrade('A',63)) ef = Decimal.mul(ef,2)
                if (hasUpgrade('E',34)) ef = Decimal.mul(ef,1.2)
                if (hasUpgrade('E',45)) ef = Decimal.mul(ef,1.1)
                if (hasUpgrade('E',53)) ef = Decimal.mul(ef,1.1)
                if (hasMilestone('F',7)) ef = Decimal.mul(ef,1.025)
                if (hasChallenge('F',11)) ef = Decimal.mul(ef,Decimal.add(1,challengeEffect('F',11).div(100)))
                if (hasUpgrade('F',33)) ef = Decimal.mul(ef,Decimal.add(1,upgradeEffect('F',33).div(100)))
                if (hasUpgrade('F',41)) ef = Decimal.mul(ef,1.03)
                ef=Decimal.mul(ef,buyableEffect('G',13))
                if (inChallenge('E',41)) ef = Decimal.mul(ef,0.4)
                if (inChallenge('A',41)) ef = n(0)
                if (inChallenge('E',42)) ef = n(0)
                if(player.Z.points.gte(24)) ef = ef.add(1)
                if (hasUpgrade('G',25) && player.Z.points.gte(24)) ef = ef.pow(upgradeEffect('G',25))
                return ef
            },
            display() {
                if(player.Z.points.gte(24))
                    return "增强 Bb1-2 的基础值 \n" +
                    "花费: " + format(this.cost()) + " B \n" +
                    "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                    "效果: ×" + format(this.effect())
                return "增强 Bb1-2 的基础值 \n" +
                "花费: " + format(this.cost()) + " B \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: +" + format(this.effect())
            },
            unlocked() { return hasMilestone('B',3) }
        }
    },
    scad(){
        let t=n(800)
        if (upg('A',65)) t=Decimal.add(t,150)
        if (upg('E',103)) t=Decimal.add(t,50)
        return t
    }
})
