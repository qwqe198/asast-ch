addLayer("D", {
    name: "D", 
    symbol: "D", 
    position: 1, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},
    passiveGeneration(){    
        let d_pg = 100
        if (mil("Z", 3))  d_pg = Decimal.mul(d_pg,100)
        if (mil("Z", 4))  d_pg = Decimal.mul(d_pg,100)
        if(mil("B", 5) || mil('I',1)) return n(d_pg);
        if (mil("Z", 4))  return n(10000);
        if (mil("Z", 3))  return n(100);
        if (mil("Z", 2))  return n(1);
        return (mil("B", 5) || mil('I',1)) ? d_pg : 0
    },
    color: "#720202",
    requires(){
        if (mil("Z", 4)) return new Decimal(1);
        return new Decimal(1e11);
    },
    resource: "D", 
    baseResource: "C", 
    baseAmount() {return player.C.points}, 
    type: "normal", 
    exponent(){
        if(player.Z.points.gte(34)) return n(1);
        if(player.Z.points.gte(25)) return n(0.1);
        if(player.Z.points.gte(21)) return n(0.08);
        return n(0.22).mul(Decimal.pow(0.95, player.Z.points));
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1, 
    hotkeys: [
        {key: "d", description: "D：重置以获得D点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return (player.Z.points.gte(1) || player[this.layer].unlocked)},
    gainMult() { 
        mult = new Decimal(1)
        mult = mult.mul(hasUpgrade(this.layer,12) ? 2 : 1)
        mult = mult.mul(hasUpgrade(this.layer,13) ? 2 : 1)
        mult = mult.pow(hasUpgrade(this.layer,22) ? 1.2 : 1)
        mult = mult.mul(hasUpgrade('A',52) ? 2 : 1)
        mult = mult.mul(hasUpgrade('A',64) ? upgradeEffect('A',64) : 1)
        mult = mult.mul(hasUpgrade('C',44) ? upgradeEffect('C',44) : 1)
        mult = mult.mul(buyableEffect("E",13))
        mult = mult.mul(mil("I", 0) ? 5 : 1)
        return mult
    },
    branches: ['C'],
    milestones: {
        0: {
            requirementDescription: "D总量 100",
            done() {return player[this.layer].total.gte(100)}, 
            effectDescription: "保留 B。"
        },
        1: {
            requirementDescription: "D总量 2500",
            done() {return player[this.layer].total.gte(2500)}, 
            effectDescription: "100倍 A/B 被动，1倍 C 被动。"
        },
        2: {
            requirementDescription: "D总量 1.5e6",
            done() {return player[this.layer].total.gte('1.5e6')}, 
            effectDescription: "1e4倍 A 和 100倍 B/C 被动，解锁 B 购买项。"
        },
        3: {
            requirementDescription: "D总量 1e9",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "1e5倍 A，解锁一个挑战。"
        },
        4: {
            requirementDescription: "D总量 6e666",
            done() {return player[this.layer].total.gte('6e666')}, 
            effectDescription: "D17 基础 +0.05。"
        },
    },
    softcap(){return new Decimal(Infinity)},
    softcapPower(){return new Decimal(1)},
    microtabs: {
        stuff: {       
            "upg": {
                unlocked() {return true},
                content: ["upgrades"]
            }, 
            "mil": {
                unlocked() {return true},
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
    doReset(layer){
        if (layer=="F") {        
            let keep = [];
            if (hasMilestone("F", 1)) keep.push("upgrades")
            if (hasMilestone("F", 0)) keep.push("milestones")
            layerDataReset(this.layer, keep)
        }
        if (layer=="I") {        
            let keep = []
            if(gcs('I',11)) keep.push("milestones")
            if(gcs('I',14)) keep.push("upgrades")
            layerDataReset(this.layer, keep)
        }
    },
    upgrades: {
        11: {
            title:'D1',
            description: function() {
                return '1000倍点数 \n' +
                'D层总量：\n' +
                format(this.effect()) + '倍'
            },            
            effect()  { 
                let ef = n(1000)
                let exp = n(0.4)
                if (hasUpgrade('D',14)) ef = ef.mul(1000)
                if (hasUpgrade('D',25)) ef = ef.mul(10000)
                if (hasUpgrade('D',33)) ef = ef.mul(10000)
                if (hasUpgrade('D',41)) ef = ef.mul(1e7)
                if (hasUpgrade('D',51)) ef = ef.mul('1e79')
                if (hasUpgrade('D',52)) ef = ef.mul('1e200')
                if (hasUpgrade('D',22)) ef = ef.pow(1.2)
                if (inChallenge('C',12)) ef = n(1)
                if (hasUpgrade('E',64)) exp = exp.add(0.1)
                if (hasUpgrade('E',72)) exp = exp.add(0.1)
                if (hasUpgrade('F',21)) exp = exp.add(0.4)
                if (hasUpgrade('E',61)) ef = ef.pow(n(buyableEffect("E",21)).sub(1).mul(exp).add(1))
                if(mil("Z",16)) ef = ef.pow(10)
                if(mil("Z",17)) ef = ef.pow(10)
                return ef;          
            },
            cost: new Decimal(1),
        },
        12: {
            title:'D2',
            description: "2倍 D。",
            cost: new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'D3',
            description: "2倍 D。",
            cost: new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'D4',
            description: "1000倍点数。",
            cost: new Decimal(100),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'D5',
            description: "D^0.8 增强点数。<br>解锁一个挑战。",
            cost: new Decimal(150),
            unlocked() { return (hasUpgrade(this.layer, 14))},
            effect()  { 
                let ef = 0.8
                if (hasUpgrade('D',54) && player.Z.points.gte(25)) ef = 1
                if (inChallenge('E',11)) ef = 0
                return player[this.layer].points.add(1).pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        21: {
            title:'D6',
            description: "D 升级增强点数。<br>(e^x)。",
            cost: new Decimal(5000),
            effect()  { 
                let a = player.D.upgrades.length
                let ef = Decimal.pow(2.718, a)
                if (hasUpgrade('D',23)) ef = Decimal.pow(ef,2)
                return ef;          
            },
            unlocked() { return (hasUpgrade('A',52))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        22: {
            title:'D7',
            description: "D1-D5 ^1.2。",
            cost: new Decimal(8000),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'D8',
            description: "D6 ^2。",
            cost: new Decimal(10000),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'D9',
            description: "logC 增强点数。",
            cost: new Decimal(15000),
            effect()  { 
                let ef = player.C.points.add(1).log(10)
                if (hasUpgrade('D',34)) ef = Decimal.pow(ef,2)
                return ef.add(1);          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'D10',
            description: "10000倍点数。",
            cost: new Decimal(25000),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'D11',
            description: "5倍 C。",
            cost: new Decimal(50000),
            unlocked() { return (hasUpgrade(this.layer, 25))},
        },
        32: {
            title:'D12',
            description: "logB 增强点数。",
            cost: new Decimal('8e4'),
            effect()  { 
                let ef = player.B.points.add(1).log(10)
                if (hasUpgrade('D',35)) ef = Decimal.pow(ef,2)
                return 1 + ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'D13',
            description: "10000倍点数。",
            cost: new Decimal('2.5e5'),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'D14',
            description: "D9 ^2。",
            cost: new Decimal('4e5'),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'D15',
            description: "D12 ^2。",
            cost: new Decimal('6e5'),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'D16',
            description: "1e7倍点数。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e158' : player.Z.points.gte(10) ? '1e185' : '1e350');
            },
            unlocked() { return (hasUpgrade('C',31))},
        },
        42: {
            title:'D17',
            description: "D 升级增强 E。<br>(1.25^x)。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e185' : player.Z.points.gte(10) ? '1e225' : '1e628');
            },
            effect()  { 
                let a = player.D.upgrades.length
                let bas = 1.25
                if (hasMilestone('D',4)) bas += 0.05
                if (hasUpgrade('E',75)) bas += 0.1
                let ef = Decimal.pow(bas, a)
                return ef;          
            },
            unlocked() { return (hasUpgrade('C',32))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        43: {
            title:'D18',
            description: "Eb2 amt 增强点数。<br>(1.75^x)。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e195' : player.Z.points.gte(10) ? '1e265' : '1e648');
            },
            effect()  { 
                let a = getBuyableAmount('E',12)
                let ef = Decimal.pow(1.75, a)
                return ef;          
            },
            unlocked() { return (hasUpgrade('D',42))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        44: {
            title:'D19',
            description: "Bb5 更便宜。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e200' : '1e750');
            },
            unlocked() { return (hasUpgrade('D',43))},
        },
        45: {
            title:'D20',
            description: "E12/E15 ^1.2",
            cost(){
                return n(player.Z.points.gte(11) ? '1e222' : '1e999');
            },
            unlocked() { return (hasUpgrade('D',44))},
        },
        51: {
            title:'D21',
            description: "1e79倍点数",
            cost: new Decimal('1e2500'),
            unlocked() { return (hasUpgrade('F',31))},
        },
        52: {
            title:'D22',
            description: "1e200倍点数",
            cost: new Decimal('1e4000'),
            unlocked() { return (hasUpgrade(this.layer,51))},
        },
        53: {
            title:'D23',
            description: "D 增强 C",
            cost: new Decimal('e34e5'),
            unlocked() { return player.Z.points.gte(21)},
            effect()  { 
                return player.D.points.add(1);     
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        54: {
            title:'D24',
            description(){return player.Z.points.gte(25) ? "B6、C3 和 D5 更强" : "B6 更强"},
            cost(){return new Decimal(player.Z.points.gte(24) ? "e435e17" : 'e846e15')},
            unlocked() { return player.Z.points.gte(23)},
        },
        55: {
            title:'D25',
            description: "B 增强 A",
            cost: new Decimal('e2e20'),
            unlocked() { return player.Z.points.gte(23)},
            effect()  { 
                return player.B.points.add(1);     
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
    }
})