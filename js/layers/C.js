addLayer("C", {
    name: "C", 
    symbol: "C", 
    position: 0, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},
    passiveGeneration(){    
        let pg = 1
        if (hasMilestone("D", 2))  pg = pg * 100
        if (hasMilestone("B", 5))  pg = pg * 100
        if (mil("Z", 2))  pg = Decimal.mul(pg,100)
        if (mil("Z", 3))  pg = Decimal.mul(pg,100)
        if (mil("Z", 4))  pg = Decimal.mul(pg,100)
        if (mil("Z", 1))  return n(pg).mul(100);
        return (mil("D", 1) || mil('I',1)) ? pg : 0
    },
    color: "#A73E16",
    requires(){
        if (mil("Z", 4)) return new Decimal(1);
        return new Decimal(2e36);
    },
    resource: "C", 
    baseResource() {return player.Z.points.gte(25) ? "B" : "点数"}, 
    baseAmount() {return player.Z.points.gte(25) ? player.B.points : player.points}, 
    type: "normal", 
    exponent(){
        if(player.Z.points.gte(34)) return n(1);
        if(player.Z.points.gte(31)) return n(0.2);
        if(player.Z.points.gte(25)) return Decimal.pow(0.95, player.Z.points.mul(5).sub(100)).mul(3);
        if(player.Z.points.gte(21)) return n(0.05);
        return n(0.15).mul(Decimal.pow(0.95, player.Z.points));
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1, 
    hotkeys: [
        {key: "c", description: "C：重置以获得C点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return (ch('A',22) || player[this.layer].unlocked)},
    gainMult() { 
        mult = new Decimal(1)
        mult = mult.pow(hasUpgrade('A',45) ? 1.1 : 1)
        mult = mult.mul(hasUpgrade('C',21) ? 10 : 1)
        mult = mult.mul(hasUpgrade('C',25) ? 5 : 1)
        mult = mult.mul(hasUpgrade('D',31) ? 5 : 1)
        mult = mult.mul(mil("I", 0) ? 5 : 1)
        mult = mult.mul(hasUpgrade('A',61) ? upgradeEffect('A',61) : 1)
        mult = mult.mul(buyableEffect("E",13))
        mult = mult.mul(hasUpgrade("E",95) ? upgradeEffect("E",95) : 1)
        mult = mult.mul(hasUpgrade("D",53) ? upgradeEffect("D",53) : 1)
        return mult
    },
    softcap(){return new Decimal(Infinity)},
    softcapPower(){return new Decimal(1)},
    branches: ['A','B'],
    milestones: {
        0: {
            requirementDescription: "C总量 3",
            done() {return player[this.layer].total.gte(3)}, 
            effectDescription: "保留第1行。"
        },
        1: {
            requirementDescription: "C总量 30",
            done() {return player[this.layer].total.gte(30)}, 
            effectDescription: "100倍 A 被动。"
        },
        2: {
            requirementDescription: "C总量 5e7",
            done() {return player[this.layer].total.gte('5e7')}, 
            effectDescription: "100倍 A 被动，1倍 B 被动。"
        },
        3: {
            requirementDescription: "C总量 5e11",
            done() {return player[this.layer].total.gte('5e11')}, 
            effectDescription: "1000倍点数，100倍 B 被动。"
        },
    },
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
            "chal": {
                unlocked() {return (hasUpgrade("D",15))},
                content: ["challenges"]
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
            if (mil("F", 1)) keep.push("upgrades")
            if (mil("F", 0)) keep.push("milestones")
            if (mil("F", 0)) keep.push("challenges")
            layerDataReset(this.layer, keep)
        }
        if (layer=="I") {        
            let keep = []
            if(gcs('I',11)) keep.push("milestones")
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',14)) keep.push("upgrades")
            layerDataReset(this.layer, keep)
        }
    },
    upgrades: {
        11: {
            title:'C1',
            description: function() {
                return '20倍点数 <br>C层总量：<br>' + format(this.effect()) + '倍'
            },
            effect()  { 
                let ef = n(20)
                let exp = n(0.4)
                if (hasUpgrade('C',12)) ef = ef.mul(20)
                if (hasUpgrade('C',15)) ef = ef.mul(200)
                if (hasUpgrade('C',25)) ef = ef.mul(1500)
                if (hasMilestone('C',3)) ef = ef.mul(1000)
                if (hasUpgrade('C',31)) ef = ef.mul(1e7)
                if (hasUpgrade('C',41)) ef = ef.mul(1e100 / 1.2e18)
                if (hasUpgrade('C',42)) ef = ef.mul('1e200')
                if (inChallenge('C',11)) ef = n(1)
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
            title:'C2',
            description: "20倍点数。",
            cost: new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'C3',
            description: "C^0.5 增强点数。",
            cost: new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 12))},
            effect()  { 
                let ef = 0.5
                if (hasUpgrade('C',23)) ef *= 1.3
                if (hasUpgrade('C',24)) ef *= 1.2
                if (hasUpgrade('D',54) && player.Z.points.gte(25)) ef = 1
                if (inChallenge('C',11)) ef = 0
                if (inChallenge('E',11)) ef = 0
                return player[this.layer].points.add(1).pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
        },
        14: {
            title:'C4',
            description: "B6^1.5。",
            cost: new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'C5',
            description: "200倍点数。<br>解锁一个新挑战。",
            cost: new Decimal(60),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'C6',
            description: "10倍 C。",
            cost: new Decimal(5e6),
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'C7',
            description: "B6 ^1.3。",
            cost: new Decimal(2e8),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'C8',
            description: "C3 ^1.3。",
            cost: new Decimal(5e8),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'C9',
            description: "C3 ^1.15。",
            cost: new Decimal(2e9),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'C10',
            description: "1500倍点数，50倍 B，5倍 C。",
            cost: new Decimal(5e9),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'C11',
            description: "1e7倍点数。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e789' : player.Z.points.gte(10) ? '1e950' : '1e1800');
            },
            unlocked() { return (challengeCompletions("E", 21) >= 2)},
        },
        32: {
            title:'C12',
            description: "C 升级增强 E。<br>(1.3^x)。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e876' : player.Z.points.gte(10) ? '1e1100' : '1e2760');
            },
            effect()  { 
                let bas = 1.3
                let a = player.C.upgrades.length
                if (hasUpgrade('E',75)) bas += 0.1
                let ef = Decimal.pow(bas, a)
                return ef;          
            },
            unlocked() { return (hasUpgrade('E', 64))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        33: {
            title:'C13',
            description: "Eb1 amt 增强点数。<br>(1.5^x)。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e900' : player.Z.points.gte(10) ? '1e1200' : '1e2835');
            },
            effect()  { 
                let a = getBuyableAmount('E', 11)
                let ef = Decimal.pow(1.5, a)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 32))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        34: {
            title:'C14',
            description: "Eb4 更便宜。",
            cost(){
                return n(player.Z.points.gte(11) ? '1e975' : '1e2906');
            },
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'C15',
            description: "E3/E4 ^1.2",
            cost(){
                return n(player.Z.points.gte(11) ? '1e1000' : '1e2996');
            },
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'C16',
            description: "8.3e81倍点数",
            cost: new Decimal('1e14000'),
            unlocked() { return (hasUpgrade('F', 31))},
        },
        42: {
            title:'C17',
            description: "1e200倍点数",
            cost: new Decimal('1e21600'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'C18',
            description: "C 增强 B",
            cost: new Decimal('e88e5'),
            unlocked() { return player.Z.points.gte(21)},
            effect()  {
                if(player.Z.points.gte(26)) return player.C.points.pow(upg('C',54) ? 1 : upg('C',53) ? 0.7 : upg('C',52) ? 0.5 : upg('C',51) ? 0.3 : upg('C',45) ? 0.2 : 0.1).add(1);
                if(player.Z.points.gte(25) && upg('C',54)){
                    return Decimal.pow(10, player.C.points.add(10).log10().div(player.C.points.add(10).log10().div(1e100).pow(0.5).add(1)));
                }
                if(player.Z.points.gte(25)) return player.C.points.pow(upg('C',53) ? 0.6 : upg('C',52) ? 0.4 : upg('C',51) ? 0.2 : upg('C',45) ? 0.125 : 0.1).add(1).min("ee100");
                if(player.Z.points.gte(24)) return player.C.points.pow(upg('C',54) ? 1/3 : upg('C',53) ? 0.3 : upg('C',52) ? 0.25 : upg('C',51) ? 0.15 : upg('C',45) ? 0.125 : 0.1).add(1);  
                return player.C.points.pow(upg('C',54) ? 0.4001 : upg('C',53) ? 1/3 : upg('C',52) ? 0.2 : upg('C',51) ? 0.15 : upg('C',45) ? 0.125 : 0.1).add(1);  
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        44: {
            title:'C19',
            description: "C 增强 D",
            cost: new Decimal('e205e5'),
            unlocked() { return player.Z.points.gte(21)},
            effect()  { 
                return player.E.points.add(1);     
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        45: {
            title:'C20',
            description: "C18 更强",
            cost(){return new Decimal(player.Z.points.gte(23) ? "e183e6" : 'e55e13')},
            unlocked() { return player.Z.points.gte(21)},
        },
        51: {
            title:'C21',
            description: "C18 更强",
            cost(){return new Decimal(player.Z.points.gte(26) ? "e3e9" : player.Z.points.gte(25) ? "e967e17" : player.Z.points.gte(24) ? "e156e18" : player.Z.points.gte(23) ? "e4e15" : 'e191e13')},
            unlocked() { return player.Z.points.gte(22)},
        },
        52: {
            title:'C22',
            description: "C18 更强",
            cost(){return new Decimal(player.Z.points.gte(27) ? "e3e11" : player.Z.points.gte(25) ? Decimal.pow(10,4e21/9) : player.Z.points.gte(24) ? "e305e20" : player.Z.points.gte(23) ? "e325e15" : 'e12e16')},
            unlocked() { return player.Z.points.gte(22)},
        },
        53: {
            title:'C23',
            description: "C18 更强",
            cost(){return new Decimal(player.Z.points.gte(27) ? "e3e14" : player.Z.points.gte(25) ? "e8e24" : player.Z.points.gte(24) ? "e369e22" : player.Z.points.gte(23) ? "e585e15" : 'e342e15')},
            unlocked() { return player.Z.points.gte(22)},
        },
        54: {
            title:'C24',
            description: "C18 更强",
            cost(){return new Decimal(player.Z.points.gte(27) ? "e3e17" : player.Z.points.gte(24) ? "e91e27" : player.Z.points.gte(23) ? "e204e17" : 'e112e18')},
            unlocked() { return player.Z.points.gte(22)},
        },
        55: {
            title:'C25',
            description: "F 增强 Em 和 Ek",
            cost(){return new Decimal("e3e20")},
            unlocked() { return player.Z.points.gte(25)},
            effect()  { 
                return player.F.points.add(1);     
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
    },
    challenges: {
        11: {
            name: "Cc1",
            completionLimit: 1,
            challengeDescription() {return "点数 ^0.45，C1-C10 被禁用。"},
            unlocked() { return (hasUpgrade("D",15))},
            goalDescription: '1e39 点数',
            canComplete() {return player.points.gte('1e39')},
            rewardDescription: "×2000 且 ^1.01 点数，解锁新 A 升级。",
        },
        12: {
            name: "Cc2",
            completionLimit: 1,
            challengeDescription() {return "D1-D5 被禁用。"},
            unlocked() { return (hasUpgrade("A",52))},
            goalDescription: '1e139 点数',
            canComplete() {return player.points.gte('1e139')},
            rewardDescription: "×8000 点数，A ^1.025。",
        },
    }
})