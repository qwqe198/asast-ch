addLayer("E", {
    name: "E", 
    symbol: "E", 
    position: 2, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        Em: new Decimal(0),
        Ek: new Decimal(0),
    }},
    passiveGeneration(){    
        let pg = 0
        if (mil('E',9) || mil('I',1)) pg = Decimal.add(pg,1)
        if (hasMilestone('F',0)) pg = Decimal.add(pg,1)
        if (hasMilestone('Z',9)) pg = Decimal.add(pg,10)
        if (hasMilestone('Z',11)) pg = Decimal.mul(pg,10)
        if (hasMilestone('Z',12)) pg = Decimal.mul(pg,10)
        if (hasMilestone('E',10)) pg = Decimal.mul(pg,10)
        if (hasMilestone('E',11)) pg = Decimal.mul(pg,10)
        if (hasMilestone('E',15)) pg = Decimal.mul(pg,10)
        return pg
    },
    color: "#789A89",
    requires(){
        if (player.Z.points.gte(12)) return new Decimal(1);
        if (mil("Z", 4)) return new Decimal('1e390');
        return new Decimal('1e426');
    },
    resource: "E", 
    baseResource: "B", 
    baseAmount() {return player.B.points}, 
    type: "normal", 
    exponent(){
        if(player.Z.points.gte(34)) return n(1);
        if(player.Z.points.gte(21)) return n(0.005);
        return n(0.015).mul(Decimal.pow(0.95, player.Z.points));
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1, 
    hotkeys: [
        {key: "e", description: "E：重置以获得E点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return (mil('B',7) || player[this.layer].unlocked)},
    gainMult() {
        mult = new Decimal(1)
        mult = mult.mul(hasMilestone("Z",8) ? 10 : 1)
        mult = mult.mul(hasUpgrade("E",13) ? upgradeEffect("E",13) : 1)
        mult = mult.mul(hasUpgrade("E",14) ? upgradeEffect("E",14) : 1)
        mult = mult.mul(hasUpgrade("E",15) ? 4 : 1)
        mult = mult.mul(hasUpgrade("E",21) ? 2 : 1)
        mult = mult.mul(hasUpgrade("E",35) ? upgradeEffect("E",35) : 1)
        mult = mult.mul(hasUpgrade("E",41) ? 5 : 1)
        mult = mult.mul(hasUpgrade("E",42) ? 2 : 1)
        mult = mult.mul(hasUpgrade("E",23) ? upgradeEffect("E",23) : 1)
        mult = mult.mul(hasUpgrade("E",32) ? upgradeEffect("E",32) : 1)
        mult = mult.mul(hasUpgrade("C",32) ? upgradeEffect("C",32) : 1)
        mult = mult.mul(hasUpgrade("D",42) ? upgradeEffect("D",42) : 1)
        mult = mult.mul(hasMilestone("Z",9) ? tmp.E.emf : 1)
        mult = mult.mul(hasMilestone("E",20) ? 2025 : 1)
        mult = mult.mul(hasMilestone("F",0) ? 10 : 1)
        mult = mult.mul(mil("I",0) ? 5 : 1)
        mult = mult.mul(hasUpgrade("E",71) ? upgradeEffect("E",71) : 1)
        mult = mult.mul(hasUpgrade("E",102) ? upgradeEffect("E",102) : 1)
        mult = mult.mul(hasUpgrade("F",12) ? upgradeEffect("F",12) : 1)
        if (hasChallenge("E",11)) mult = mult.mul(challengeEffect('E',11))
        if (hasChallenge("E",12)) mult = mult.mul(challengeEffect('E',12))
        if (inChallenge('F',11)) mult = Decimal.pow(mult, 0.25)
        return mult
    },
    softcap(){return new Decimal(Infinity)},
    softcapPower(){return new Decimal(1)},
    branches: ['A','B','D'],
    milestones: {
        0: {
            requirementDescription: "E总量 1000 (1)",
            done() {return player[this.layer].total.gte('1000')}, 
            effectDescription: "解锁 E 购买项。"
        },
        1: {
            requirementDescription: "E总量 40000 (2)",
            done() {return player[this.layer].total.gte('40000')}, 
            effectDescription: "解锁 Eb3，E2 指数 +0.5。"
        },
        2: {
            requirementDescription: "E总量 1e5 (3)",
            done() {return player[this.layer].total.gte('1e5')}, 
            effectDescription: "解锁 E 挑战。"
        },
        3: {
            requirementDescription: "E总量 1e12 (4)",
            done() {return player[this.layer].total.gte('1e12')}, 
            effectDescription: "E12 ^1.5，解锁另一个挑战。"
        },
        4: {
            requirementDescription: "E总量 1e25 (5)",
            done() {return player[this.layer].total.gte('1e25')}, 
            effectDescription: "自动购买 Eb1-3。",
            toggles: [ ["E","auto1"] ]
        },
        5: {
            requirementDescription: "E总量 1e31 (6)",
            done() {return player[this.layer].total.gte('1e31')}, 
            effectDescription: "Eb3 基础 +1，解锁另一个购买项。"
        },
        6: {
            requirementDescription: "E总量 1e40 (7)",
            done() {return player[this.layer].total.gte('1e40')}, 
            effectDescription: "自动购买 Eb4。",
            toggles: [ ["E","auto2"] ]
        },
        7: {
            requirementDescription: "E总量 1e42 (8)",
            done() {return player[this.layer].total.gte('1e42')}, 
            effectDescription: "解锁 2 个新挑战。"
        },
        8: {
            requirementDescription: "E总量 1e48 (9)",
            done() {return player[this.layer].total.gte('1e48')}, 
            effectDescription: "解锁新升级，B26 ^1.05。"
        },
        9: {
            requirementDescription: "E总量 1e50 (10)",
            done() {return player[this.layer].total.gte('1e50')}, 
            effectDescription: "1倍 E 被动。终于来了！"
        },
        10: {
            requirementDescription: "E总量 2e68 (11)",
            done() {return player[this.layer].total.gte('2e68')}, 
            effectDescription: "10倍 E 被动，B26 ^1.05。"
        },
        11: {
            requirementDescription: "E总量 1e80 (12)",
            done() {return player[this.layer].total.gte('1e80')}, 
            effectDescription: "10倍 E 被动。"
        },
        12: {
            requirementDescription: "E总量 1e90 (13)",
            done() {return player[this.layer].total.gte('1e90')}, 
            effectDescription: "Em 效果指数 +0.02。"
        },
        13: {
            requirementDescription: "E总量 1e111 (14)",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "自动购买 Eb5-7。",
            toggles: [ ["E","auto3"] ]
        },
        14: {
            requirementDescription: "E总量 1e132 (15)",
            done() {return player[this.layer].total.gte('1e132')}, 
            effectDescription: "解锁 2 个新挑战。"
        },
        15: {
            requirementDescription: "E总量 1e166 (16)",
            done() {return player[this.layer].total.gte('1e166')}, 
            effectDescription: "10倍 E 被动。"
        },
        16: {
            requirementDescription: "E总量 1e209 (17)",
            unlocked(){ return player.Z.points.gte(11)},
            done() {return player[this.layer].total.gte('1e209') && player.Z.points.gte(11)}, 
            effectDescription: "解锁最后 2 个挑战。"
        },
        17: {
            requirementDescription: "E总量 1e233 (18)",
            unlocked(){ return player.Z.points.gte(11)},
            done() {return player[this.layer].total.gte('1e233') && player.Z.points.gte(11)}, 
            effectDescription: "自动购买 Eb8-9。",
            toggles: [ ["E","auto4"] ]
        },
        18: {
            requirementDescription: "E总量 1e330 (19)",
            unlocked(){ return player.Z.points.gte(12)},
            done() {return player[this.layer].total.gte('1e330') && player.Z.points.gte(12)}, 
            effectDescription: "解锁最后一个购买项。"
        },
        19: {
            requirementDescription: "E总量 1e400 (20)",
            unlocked(){ return player.Z.points.gte(12)},
            done() {return player[this.layer].total.gte('1e400') && player.Z.points.gte(12)}, 
            effectDescription: "自动购买 Eb10，E47 ^1.6。",
            toggles: [ ["E","auto5"] ]
        },
        20: {
            requirementDescription: "E总量 1e650 (21)",
            unlocked(){ return player.Z.points.gte(12)},
            done() {return player[this.layer].total.gte('1e650') && player.Z.points.gte(12)}, 
            effectDescription: "2025倍 E，解锁下一层。"
        },
    },
    microtabs: {
        stuff: {       
            "upg": {
                unlocked() {return true},
                content: ["upgrades"]
            }, 
            "buy": {
                unlocked() {return (hasMilestone("E",0))},
                content: [["buyables",[1,2]]]
            },
            "mil": {
                unlocked() {return (hasUpgrade("E",14))},
                content: ["milestones"]
            },
            "chal": {
                unlocked() {return (hasMilestone("E",2))},
                content: ["challenges"]
            },
            "Em": {
                unlocked() {return (hasMilestone("Z",9))},
                content: [
                    ["display-text", () => "你拥有 <h3 style='color:#789A89;text-shadow:0 0 3px #c2b280'>" + format(player.E.Em) + "</h3> Em，使 E 乘以 <h3 style='color:#789A89;text-shadow:0 0 3px #c2b280'> " + format(tmp.E.emf) + "x</h3>。<br>" + "<h4>" + format(tmp.E.Emeffect) + " Em/s<h4> <br>"],
                    ["raw-html", () => `<h4 style="opacity:.5">欢迎来到第一个子货币。Em^0.25 增强 E。</h4>`],
                    ["buyables",[3]]
                ]
            },
            "Ek": {
                unlocked() {return (hasMilestone("Z",10))},
                content: [
                    ["display-text", () => "你拥有 <h3 style='color:#177261;text-shadow:0 0 3px #c2b280'>" + format(player.E.Ek) + "</h3> Ek，使 Bb 花费除以 <h3 style='color:#177261;text-shadow:0 0 3px #c2b280'> " + format(tmp.E.ekf) + " </h3>。<br>" + "<h4>" + format(tmp.E.Ekeffect) + " Ek/s<h4> <br>"],
                    ["buyables",[4]]
                ]
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
            let keep = []
            if (mil("F",1)) keep.push("milestones")
            if (mil("F",4)) keep.push("upgrades")
            if (mil("F",5)) keep.push("challenges")
            layerDataReset(this.layer, keep)
            if(player.Z.points.gte(11)){
                player.E.challenges[11] = 3;
                player.E.challenges[12] = 3;
            }
            if(player.Z.points.gte(12)){
                player.E.challenges[21] = 3;
                player.E.challenges[22] = 3;
            }
            if(player.Z.points.gte(13)){
                player.E.challenges[31] = 5;
                player.E.challenges[32] = 5;
            }
            if(player.Z.points.gte(14)){
                player.E.challenges[41] = 5;
                player.E.challenges[42] = 5;
            }
        }
        if (layer=="I") {        
            let keep = []
            if(gcs('I',12)) keep.push("challenges")
            if(gcs('I',14)) keep.push("upgrades")
            if(gcs('I',15)) keep.push("milestones")
            layerDataReset(this.layer, keep)
        }
    },
    autoUpgrade() {return (mil("F",3))},
    upgrades: {
        11: {
            title:'E1',
            description: function() {
                return '1e5倍点数 \n' +
                '<br>E层总量：' + format(this.effect()) + '倍'
            },
            effect()  { 
                let ef = 1e5
                if (hasUpgrade('E',15)) ef *= 1e5
                if (hasUpgrade('E',33)) ef *= 3e5
                if (hasUpgrade('E',51)) ef *= 1e6
                if (hasUpgrade('E',53)) ef *= 1e6
                if (hasUpgrade('E',55)) ef *= 1e7
                if (hasUpgrade('E',65)) ef *= 1e8
                ef = Decimal.pow(ef, buyableEffect("E",21))
                if(mil("Z",16)) ef = ef.pow(100)
                if(mil("Z",17)) ef = ef.pow(10)
                return ef;          
            },
            cost: new Decimal(1),
        },
        12: {
            title:'E2',
            description: "E 增强点数。",
            effect()  { 
                let ef = 1
                if (hasUpgrade('E',15)) ef += 0.5
                if (hasMilestone('E',1)) ef += 0.5
                if (hasUpgrade('E',44)) ef *= 1.5
                if (inChallenge('E',11)) ef = 0
                return player[this.layer].points.add(1).pow(ef);          
            },
            cost: new Decimal(10),
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,11))},
        },
        13: {
            title:'E3',
            description: "基于 D 增强 E 基础。",
            effect()  { 
                let ef = player.D.points.add(10).log(10).div(50).add(1)
                if (hasUpgrade('E',24)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.2)
                return ef;
            },
            cost: new Decimal(30),
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,12))},
        },
        14: {
            title:'E4',
            description: "基于 C 增强 E 基础。",
            effect()  { 
                let ef = player.C.points.add(10).log(10).div(200).add(1)
                if (hasUpgrade('E',25)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            cost: new Decimal(80),
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,13))},
        },
        15: {
            title:'E5',
            description: "E2 ^1.5，1e5倍点数，4倍 E。",
            cost: new Decimal(500),
            unlocked() { return (hasUpgrade(this.layer,14))},
        },
        21: {
            title:'E6',
            description: "Eb1-2 基础 +1，2倍 E。",
            cost: new Decimal(2000),
            unlocked() { return (hasUpgrade(this.layer,15))},
        },
        22: {
            title:'E7',
            description: "E 升级增强点数。<br>(e^3x)。",
            cost: new Decimal(5000),
            effect()  { 
                let a = player.E.upgrades.length
                let ef = Decimal.pow(20.09, a)
                if (hasUpgrade('E',25)) ef = Decimal.pow(54.6, a)
                if (hasUpgrade('E',33)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',84)) ef = Decimal.pow(ef,1.5)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer,21))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        23: {
            title:'E8',
            description: "E 升级增强 E。<br>(1.2^x)。",
            cost: new Decimal(10000),
            effect()  { 
                let bas = 1.2
                let a = player.E.upgrades.length
                if (hasUpgrade('E',83)) bas += 0.15
                if (hasUpgrade('E',91)) bas += 0.15
                if (hasUpgrade('E',94)) bas += 0.1
                let efe8 = Decimal.pow(bas, a)
                return efe8;          
            },
            unlocked() { return (hasUpgrade(this.layer,22))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        24: {
            title:'E9',
            description: "E3 ^1.5。",
            cost: new Decimal(3e4),
            unlocked() { return (hasUpgrade(this.layer,23))},
        },
        25: {
            title:'E10',
            description: "E4 ^1.5，E7 变为 e^4x。",
            cost: new Decimal(8e4),
            unlocked() { return (hasUpgrade(this.layer,24))},
        },
        31: {
            title:'E11',
            description: "B26 ^1.1。",
            cost: new Decimal(1e6),
            unlocked() { return (challengeCompletions("E",11) >= 1)},
        },
        32: {
            title:'E12',
            description: "基于 B 增强 E 基础。",
            cost: new Decimal(2e6),
            effect()  { 
                let ef = player.B.points.add(10).log(10).div(300).add(1)
                if (hasMilestone('E',3)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,31))},
        },
        33: {
            title:'E13',
            description: "3e5倍点数，<br>E7 变为 e^6x。",
            cost: new Decimal(5e6),
            unlocked() { return (hasUpgrade(this.layer,32))},
        },
        34: {
            title:'E14',
            description: "Bb5 更强。<br>(+20%)",
            cost: new Decimal(1e7),
            unlocked() { return (hasUpgrade(this.layer,33))},
        },
        35: {
            title:'E15',
            description: "基于 A 增强 E 基础。",
            cost: new Decimal(1e9),
            effect()  { 
                let ef = player.A.points.add(10).log(10).div(500).add(1)
                if (hasUpgrade('E',41)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,34))},
        },
        41: {
            title:'E16',
            description: "E15 ^1.5，5倍 E。",
            cost(){ return n(player.Z.points.gte(8) ? 1e13 : 5e14); },
            unlocked() { return (challengeCompletions("E",12) >= 1)},
        },
        42: {
            title:'E17',
            description: "Eb1-2 基础 +1，2倍 E。",
            cost(){ return n(player.Z.points.gte(8) ? 5e14 : 1e16); },
            unlocked() { return (hasUpgrade(this.layer,41))},
        },
        43: {
            title:'E18',
            description: "Bb1-2 更便宜。",
            cost(){ return n(player.Z.points.gte(8) ? 5e16 : 2e17); },
            unlocked() { return (hasUpgrade(this.layer,42))},
        },
        44: {
            title:'E19',
            description: "E2 ^1.5",
            cost(){ return n(player.Z.points.gte(8) ? 1e19 : 3e26); },
            unlocked() { return (hasUpgrade(this.layer,43))},
        },
        45: {
            title:'E20',
            description: "Bb5 更强。<br>(+10%)",
            cost(){ return n(1e20); },
            unlocked() { return (hasUpgrade(this.layer,44) && player.Z.points.gte(9))},
        },
        51: {
            title:'E21',
            description: "1e6倍点数。",
            cost(){ return n(1e23); },
            unlocked() { return (hasUpgrade(this.layer,45))},
        },
        52: {
            title:'E22',
            description: "基于 E 增强 Ac7。",
            cost(){ return n(5e24); },
            effect()  { 
                let ef = player.E.points.add(10).log(10).pow(0.75).div(150).add(1)
                if (hasMilestone('Z',12)) ef = player.E.points.add(10).log(10).pow(0.5).div(25).add(1)
                if (hasUpgrade('E',74)) ef = ef.sub(1).mul(1.1).add(1)
                if (hasMilestone('Z',21)) ef = player.E.points.add(10).log(10).pow(0.45).div(5).add(1)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer,51))},
            effectDisplay() { return '^' + format(this.effect()) }, 
        },
        53: {
            title:'E23',
            description: "Bb5 更强 (+10%)<br>且 1e6倍点数。",
            cost(){ return n(1e25); },
            unlocked() { return (hasUpgrade(this.layer,52))},
        },
        54: {
            title:'E24',
            description: "Eb1-3 更便宜。",
            cost(){ return n(player.Z.points.gte(10) ? 1e31 : 1e35); },
            unlocked() { return (hasUpgrade(this.layer,53))},
        },
        55: {
            title:'E25',
            description: "1e7倍点数，增加 Eb1-2 基础。",
            cost(){ return n(player.Z.points.gte(10) ? 1e36 : 2e40); },
            effect()  { 
                let ef = Decimal.add(player.E.points,10).log(10).pow(0.8).div(50)
                if(player.Z.points.gte(9)) ef = Decimal.add(player.E.points,10).log(10).div(40)
                return ef;          
            },
            effectDisplay() { return '+' + format(this.effect()) }, 
            unlocked() { return (hasUpgrade(this.layer,54))},
        },
        61: {
            title:'E26',
            description: "Eb4 应用于 C/D（削弱，40%）。",
            cost(){ return n(player.Z.points.gte(10) ? 1e48 : 2e50); },
            unlocked() { return (hasMilestone(this.layer,8))},
        },
        62: {
            title:'E27',
            description: "Bb5 更便宜。",
            cost(){ return n(player.Z.points.gte(10) ? 2e48 : 3e51); },
            unlocked() { return (hasUpgrade(this.layer,61))},
        },
        63: {
            title:'E28',
            description: "E3/4/12/15 ^1.2。",
            cost(){ return n(player.Z.points.gte(10) ? 1e49 : 5e52); },
            unlocked() { return (hasUpgrade(this.layer,62))},
        },
        64: {
            title:'E29',
            description: "E26 +10%。<br>解锁新 C/D 升级。",
            cost(){ return n(player.Z.points.gte(11) ? 1e52 : player.Z.points.gte(10) ? 1e53 : 2e55); },
            unlocked() { return (hasUpgrade(this.layer,63))},
        },
        65: {
            title:'E30',
            description: "^1.004 B，1e8倍点数。",
            cost: new Decimal('1e71'),
            unlocked() { return (hasMilestone(this.layer,10))},
        },
        71: {
            title:'E31',
            description: "对数 Em 增强 E。",
            cost: new Decimal('1e79'),
            unlocked() { return (hasMilestone(this.layer,11))},
            effect()  { 
                let ef = player.E.Em.add(10).log(10)
                if (hasUpgrade('E',81)) ef = Decimal.pow(ef,1.5)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"倍" },
        },
        72: {
            title:'E32',
            description: "E26 +10%。",
            cost: new Decimal('1e85'),
            unlocked() { return (hasUpgrade(this.layer,71) && player.Z.points.gte(10))},
        },
        73: {
            title:'E33',
            description: "Bb1-2 更便宜。",
            cost(){ return n(player.Z.points.gte(11) ? 1e97 : 1e100); },
            unlocked() { return (hasUpgrade(this.layer,72))},
        },
        74: {
            title:'E34',
            description: "E22 ×1.1。",
            cost(){ return n(player.Z.points.gte(12) ? 1e110 : 1e125); },
            unlocked() { return (hasUpgrade(this.layer,73) && player.Z.points.gte(11))},
        },
        75: {
            title:'E35',
            description: "C12/D17 基础 +0.1。",
            cost(){ return n(player.Z.points.gte(12) ? 1e113 : 1e130); },
            unlocked() { return (hasUpgrade(this.layer,74))},
        },
        81: {
            title:'E36',
            description: "E31 ^1.5。",
            cost(){ return n(player.Z.points.gte(12) ? 1e116 : 1e135); },
            unlocked() { return (hasUpgrade(this.layer,75))},
        },
        82: {
            title:'E37',
            description: "Em 增强 B。",
            effect()  { 
                let ef = 0.1
                if(player.Z.points.gte(12)) ef = 0.2
                return player.E.Em.add(1).pow(ef);          
            },
            cost(){ return n(player.Z.points.gte(12) ? 1e120 : 1e140); },
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,81))},
        },
        83: {
            title:'E38',
            description: "E8 基础 +0.15。",
            cost(){ return n(player.Z.points.gte(12) ? 1e126 : 1e145); },
            unlocked() { return (hasUpgrade(this.layer,82))},
        },
        84: {
            title:'E39',
            description: "E7 ^1.5。",
            cost(){ return n(player.Z.points.gte(12) ? 1e132 : 1e155); },
            unlocked() { return (hasUpgrade(this.layer,83))},
        },
        85: {
            title:'E40',
            cost(){ return n(player.Z.points.gte(12) ? 1e134 : 1e160); },
            description: "Eb5-7 amt 增强点数。<br>(1.7^x)。",
            unlocked() { return (hasUpgrade(this.layer,84))},
            effect()  { 
                let b = 1.7
                let a = getBuyableAmount('E',31).add(getBuyableAmount('E',32)).add(getBuyableAmount('E',33))
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        91: {
            title:'E41',
            description: "E8 基础 +0.15。",
            cost(){ return n(player.Z.points.gte(12) ? 1e136 : 1e162); },
            unlocked() { return (hasUpgrade(this.layer,85))},
        },
        92: {
            title:'E42',
            cost(){ return n(player.Z.points.gte(12) ? 1e144 : 1e177); },     
            description: "Eb5-7 amt 增强 B。<br>(1.3^x)。",
            unlocked() { return (hasUpgrade(this.layer,91))},
            effect()  { 
                let b = 1.3
                let a = getBuyableAmount('E',31).add(getBuyableAmount('E',32)).add(getBuyableAmount('E',33))
                if (hasUpgrade('E',93)) b += 0.1
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        93: {
            title:'E43',
            description: "Eb7 更便宜，<br>E42 基础 +0.1。",
            cost(){ return n(player.Z.points.gte(12) ? 1e157 : 1e265); },     
            unlocked() { return (hasUpgrade(this.layer,92))},
        },
        94: {
            title:'E44',
            description: "Eb4 更便宜，<br>E8 基础 +0.1。",
            cost(){ return n(player.Z.points.gte(12) ? 1e164 : 1e290); },     
            unlocked() { return (hasUpgrade(this.layer,93))},
        },
        95: {
            title:'E45',
            cost(){ return n(player.Z.points.gte(12) ? 1e178 : '1e315'); },     
            description: "Eb5-7 amt 增强 C。(1.15^x)",
            unlocked() { return (hasUpgrade(this.layer,94))},
            effect()  { 
                let b = 1.15
                let a = getBuyableAmount('E',31).add(getBuyableAmount('E',32)).add(getBuyableAmount('E',33))
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"倍" }, 
        },
        101: {
            title:'E46',
            description: "Em 效果指数 +0.02。",
            cost(){ return n(player.Z.points.gte(12) ? 1e183 : '1e325'); },     
            unlocked() { return (challengeCompletions('E',31)>=3 && player.Z.points.gte(11))},
        },
        102: {
            title:'E47',
            description: "Ek 增强 E。",
            effect()  { 
                let ef = player.E.Ek.add(10).log(10).pow(2)
                if (hasMilestone('E',19)) ef = Decimal.pow(ef,1.6)
                return ef;          
            },
            cost: new Decimal('1e198'),
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,101) && player.Z.points.gte(12))},
        },
        103: {
            title:'E48',
            description: "Em 效果指数 +0.03。",
            cost: new Decimal('2e222'),
            unlocked() { return (hasUpgrade(this.layer,102))},
        },
        104: {
            title:'E49',
            description: "Ek^1.5 增强点数，Eb6/9 基础 +0.25，Eb7 基础 +1，Ec8 效果 ×1.2",
            effect()  { 
                let ef = player.E.Ek.max(1).pow(1.5)
                return ef;          
            },
            cost: new Decimal('1e293'),
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (hasUpgrade(this.layer,103))},
        },
        105: {
            title:'E50',
            description: "Em^1.01，Eb7 基础 +1，B26 ^1.05。",
            cost: new Decimal('1e440'),
            unlocked() { return (hasUpgrade(this.layer,104))},
        },
    },
    automate(){
        if (player.E.auto1) {
            buyBuyable("E",11)
            buyBuyable("E",12)
            buyBuyable("E",13)
        }
        if (player.E.auto1 && mil('F',6)) {
            buyBuyable("E",11)
            buyBuyable("E",12)
            buyBuyable("E",13)
        }
        if (player.E.auto2) buyBuyable("E",21)
        if (player.E.auto3) {
            buyBuyable("E",31)
            buyBuyable("E",32)
            buyBuyable("E",33)
        }
        if (player.E.auto3 && upg('F',25)) {
            buyBuyable("E",31)
            buyBuyable("E",32)
            buyBuyable("E",33)
        }
        if (player.E.auto4) {
            buyBuyable("E",41)
            buyBuyable("E",42)
        }
        if (player.E.auto5) buyBuyable("E",22)
    },
    buyables:{
        11: {
            title: "Eb1", 
            cost(x) {
                let cost = Decimal.pow(2, x.pow(1.1)).times(1000)
                if (hasUpgrade('E',54)) cost = Decimal.pow(2, x.pow(1.1))
                if (hasChallenge('E',41)) cost = Decimal.div(cost, challengeEffect('E',41))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){   
                let bas = 5
                if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
                if (hasUpgrade('F',14)) bas = Decimal.add(bas,0.3)
                if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (hasUpgrade('F',65)) bas = Decimal.add(bas,upgradeEffect('F',65))
                if (hasUpgrade('F',81)) bas = Decimal.mul(bas,upgradeEffect('F',81))
                if (inChallenge('E',21)) bas = 2
                return bas
            },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef
            },
            display() {
                return "给予 A ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect()) + " A"
            },
            unlocked() { return hasMilestone('E',0) }
        },
        12: {
            title: "Eb2", 
            cost(x) {
                let cost = Decimal.pow(3, x.pow(1.1)).times(1000)
                if (hasUpgrade('E',54)) cost = Decimal.pow(3, x.pow(1.1))
                if (hasChallenge('E',41)) cost = Decimal.div(cost, challengeEffect('E',41))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){   
                let bas = 5
                if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
                if (hasUpgrade('F',14)) bas = Decimal.add(bas,0.3)
                if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (hasUpgrade('F',65)) bas = Decimal.add(bas,upgradeEffect('F',65))
                if (hasUpgrade('F',81)) bas = Decimal.mul(bas,upgradeEffect('F',81))
                if (inChallenge('E',21)) bas = 2
                return bas
            },
            effect(x) {
                let efeb2 = Decimal.pow(this.base(),x)
                return efeb2
            },
            display() {
                return "给予 B ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect()) + " B"
            },
            unlocked() { return player[this.layer].total.gte('4000') }
        },
        13: {
            title: "Eb3", 
            cost(x) {
                let cost = Decimal.pow(5, x.pow(1.1)).times(40000)
                if (hasUpgrade('E',54)) cost = Decimal.pow(5, x.pow(1.1))
                if (hasChallenge('E',41)) cost = Decimal.div(cost, challengeEffect('E',41))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){   
                let bas = 5
                if (hasMilestone('E',5)) bas = Decimal.add(bas,1)
                if (hasUpgrade('F',14)) bas = Decimal.add(bas,0.3)
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (hasUpgrade('F',81)) bas = Decimal.add(bas,upgradeEffect('E',55).div(player.Z.points.eq(18)?100:1))
                if (hasUpgrade('F',65)) bas = Decimal.add(bas,upgradeEffect('F',65))
                if (hasUpgrade('F',81)) bas = Decimal.mul(bas,upgradeEffect('F',81))
                return bas
            },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef
            },
            display() {
                return "给予 C/D ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect()) + " C/D"
            },
            unlocked() { return hasMilestone('E',1) }
        },
        21: {
            title: "Eb4", 
            cost(x) {
                let cost = Decimal.pow(25, x.pow(1.1)).times(1e33)
                if(hasMilestone('Z',9)) cost = cost.div(100)
                if(hasMilestone('Z',13)) cost = cost.div(1e10)
                if(hasUpgrade('C',34)) cost = cost.div(1e11)
                if(hasUpgrade('E',94)) cost = cost.div(1e10)
                if (hasChallenge('E',41)) cost = Decimal.div(cost, challengeEffect('E',41))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            effect(x) {
                let ef = Decimal.pow(x.div(1.6).add(1),0.6).div(5).add(0.8)
                if (hasUpgrade('F',22)) ef = Decimal.mul(ef.sub(1),1.1).add(1)
                if (hasUpgrade('F',23)) ef = Decimal.mul(ef.sub(1),1.1).add(1)
                if (hasUpgrade('F',35)) ef = Decimal.mul(ef.sub(1),1.08).add(1)
                if (inChallenge('E',31)) ef = n(1)
                if (inChallenge('E',41)) ef = Decimal.mul(ef.sub(1),0.4).add(1)
                if (inChallenge('E',42)) ef = n(1)
                return ef
            },
            display() {
                return "增强 E 的点数乘数（指数） \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ^" + format(this.effect())
            },
            unlocked() { return hasMilestone('E',5) }
        },
        31: {
            title: "Eb5", 
            cost(x) {
                let cost = Decimal.pow(2, x.pow(1.2)).times(player.Z.points.gte(14)?1:player.Z.points.gte(11)?1e20:1e30)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){ return 2 },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef
            },
            display() {
                return "给予 Em ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect())
            },
            unlocked() { return hasMilestone('Z',9) }
        },
        32: {
            title: "Eb6", 
            cost(x) {
                let cost = Decimal.pow(5, x.pow(1.2)).times(player.Z.points.gte(14)?1:player.Z.points.gte(11)?1e21:1e34)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){   
                let base = 2
                if (hasChallenge("E",32)) base = Decimal.add(base,challengeEffect('E',32))
                if (hasUpgrade("E",104)) base = Decimal.add(base,0.25)
                return base
            },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef
            },
            display() {
                return "给予 Em ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect())
            },
            unlocked() { return hasMilestone('Z',9) }
        },
        33: {
            title: "Eb7", 
            cost(x) {
                let cost = Decimal.pow(10, x.pow(1.2)).times(player.Z.points.gte(14)?1:player.Z.points.gte(11)?1e22:1e38)
                if(hasUpgrade("E",93)) cost = Decimal.pow(9, x.pow(1.2)).times(player.Z.points.gte(14)?1:player.Z.points.gte(11)?1e22:1e38)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){   
                let base = 10
                if (hasChallenge("E",32)) base = Decimal.add(base,challengeEffect('E',32))
                if (hasUpgrade("E",104)) base = Decimal.add(base,1)
                if (hasUpgrade("E",105)) base = Decimal.add(base,1)
                if (hasUpgrade("F",14)) base = Decimal.add(base,1)
                return base
            },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef
            },
            display() {
                return "给予 Em ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect())
            },
            unlocked() { return hasMilestone('Z',9) }
        },
        41: {
            title: "Eb8", 
            cost(x) {
                let cost = Decimal.pow(10, x.pow(1.2)).times(1e24)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){ return 2 },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef
            },
            display() {
                return "给予 Ek ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect())
            },
            unlocked() { return hasMilestone('Z',10) }
        },
        42: {
            title: "Eb9", 
            cost(x) {
                let cost = Decimal.pow(10, x.pow(1.2)).times(1e40)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            base(){   
                let base = 2
                if (hasUpgrade("E",104)) base = Decimal.add(base,0.25)
                return base
            },
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef
            },
            display() {
                return "给予 Ek ×" + format(this.base()) + " 乘数 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: ×" + format(this.effect())
            },
            unlocked() { return hasMilestone('Z',10) }
        },
        22: {
            title: "Eb10", 
            cost(x) {
                let cost = Decimal.pow(1e6, x.pow(1.5)).times('1e330')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1)) },
            effect(x) {
                let ef = Decimal.pow(x.div(6).add(1),0.7).sub(1)
                if (hasUpgrade('G',22)) ef = Decimal.pow(ef,upgradeEffect('G',22))
                ef = Decimal.mul(ef,buyableEffect('G',13))
                return ef
            },
            display() {
                return "增强 Eb1-3 的基础值 \n" +
                "花费: " + format(this.cost()) + " E \n" +
                "数量: " + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果: +" + format(this.effect())
            },
            unlocked() { return hasMilestone('E',18) }
        },
    },
challenges: {
    11: { // E10 后解锁，E13/E15 影响上限
        name: "Ec1",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 3; },
        challengeDescription: function () {
            return "C3 / D5 / E2 被禁用。<br>完成次数：" +
                challengeCompletions("E", 11) +
                (player.Z.points.gte(18) ? "/6" : "/3");
        },
        unlocked() { return (hasMilestone("E", 2)); },
        goal() {
            if (challengeCompletions('E', 11) == 0)
                return Decimal.pow(10, player.Z.points.gte(9) ? 2500 : 2610);
            if (challengeCompletions('E', 11) == 1)
                return Decimal.pow(10, player.Z.points.gte(9) ? 3000 : player.Z.points.gte(8) ? 3380 : 3560);
            if (challengeCompletions('E', 11) == 2)
                return Decimal.pow(10, player.Z.points.gte(9) ? 3080 : player.Z.points.gte(8) ? 3540 : 7150);
            if (challengeCompletions('E', 11) == 3) return new Decimal("e358e6");
            if (challengeCompletions('E', 11) == 4) return new Decimal("e12e8");
            if (challengeCompletions('E', 11) == 5) return new Decimal("e195e7");
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "基于 Eb1-2 增强 E 基础。",
        rewardEffect() {
            if (challengeCompletions("E", 11) >= 9)
                return Decimal.pow(
                    buyableEffect('E', 11).mul(buyableEffect('E', 12)),
                    0.2
                );
            let bas = Decimal.pow(challengeCompletions("E", 11), 1.3);
            if (challengeCompletions("E", 11) >= 4)
                bas = 4 + challengeCompletions("E", 11) / 10;
            let ef1 = Decimal.pow(buyableEffect('E', 11), 0.04 + bas / 100);
            let ef2 = Decimal.pow(buyableEffect('E', 12), 0.04 + bas / 75);
            let ef = Decimal.mul(ef1, ef2);
            return challengeCompletions("E", 11) >= 1 ? ef : new Decimal(1);
        },
        rewardDisplay() { return format(this.rewardEffect()) + "倍"; }
    },

    12: { // E15 后解锁，E17/E19 影响上限
        name: "Ec2",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 3; },
        challengeDescription: function () {
            return "Bb1-2 的基础值锁定为 2。<br>完成次数：" +
                challengeCompletions("E", 12) +
                (player.Z.points.gte(18) ? "/6" : "/3");
        },
        unlocked() { return (hasMilestone("E", 3)); },
        goal() {
            if (challengeCompletions('E', 12) == 0)
                return Decimal.pow(10, player.Z.points.gte(9) ? 3150 : player.Z.points.gte(8) ? 3590 : 4320);
            if (challengeCompletions('E', 12) == 1)
                return Decimal.pow(10, player.Z.points.gte(9) ? 3300 : player.Z.points.gte(8) ? 4300 : 8850);
            if (challengeCompletions('E', 12) == 2)
                return Decimal.pow(10, player.Z.points.gte(9) ? 3600 : player.Z.points.gte(8) ? 4420 : 9860);
            if (challengeCompletions('E', 12) == 3) return new Decimal("e16e7");
            if (challengeCompletions('E', 12) == 4) return new Decimal("e14e8");
            if (challengeCompletions('E', 12) == 5) return new Decimal("e16e8");
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "基于 Eb3 增强 E 基础。",
        rewardEffect() {
            if (challengeCompletions("E", 12) >= 9)
                return Decimal.pow(buyableEffect('E', 13), 0.2);
            let bas = Decimal.pow(challengeCompletions("E", 12), 1.35);
            if (challengeCompletions("E", 11) >= 5)
                bas = 6 + challengeCompletions("E", 12) / 9;
            let ef = Decimal.pow(buyableEffect('E', 13), 0.05 + bas / 100);
            return challengeCompletions("E", 12) >= 1 ? ef : new Decimal(1);
        },
        rewardDisplay() { return format(this.rewardEffect()) + "倍"; }
    },

    21: { // 1e45 后解锁
        name: "Ec3",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 3; },
        challengeDescription: function () {
            return "Bb1-2 的基础值锁定为 2。<br>完成次数：" +
                challengeCompletions("E", 21) +
                (player.Z.points.gte(18) ? "/6" : "/3");
        },
        unlocked() { return (hasMilestone("E", 7)); },
        goal() {
            if (challengeCompletions('E', 21) == 0)
                return Decimal.pow(10, player.Z.points.gte(11) ? 7777 : player.Z.points.gte(10) ? 9100 : 11400);
            if (challengeCompletions('E', 21) == 1)
                return Decimal.pow(10, player.Z.points.gte(11) ? 8000 : player.Z.points.gte(10) ? 9500 : 12345);
            if (challengeCompletions('E', 21) == 2)
                return Decimal.pow(10, player.Z.points.gte(11) ? 8333 : player.Z.points.gte(10) ? 9800 : 12870);
            if (challengeCompletions('E', 21) == 3) return new Decimal("e2125e5");
            if (challengeCompletions('E', 21) == 4) return new Decimal("e15e8");
            if (challengeCompletions('E', 21) == 5) return new Decimal("e25e8");
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "基于 A-B 点数升级增强点数基础。",
        rewardEffect() {
            if (challengeCompletions("E", 21) >= 10)
                return Decimal.pow(
                    upgradeEffect('A', 11).mul(upgradeEffect('B', 11)),
                    1000
                );
            if (challengeCompletions("E", 21) >= 9)
                return Decimal.pow(
                    upgradeEffect('A', 11).mul(upgradeEffect('B', 11)),
                    100
                );
            let b = Decimal.pow(challengeCompletions("E", 21), 1.35);
            let ef1 = Decimal.pow(upgradeEffect('A', 11), 0.06 + b / 60);
            let ef2 = Decimal.pow(upgradeEffect('B', 11), 0.06 + b / 60);
            let ef = Decimal.mul(ef1, ef2);
            return challengeCompletions("E", 21) >= 1 ? ef : new Decimal(1);
        },
        rewardDisplay() { return format(this.rewardEffect()) + "倍"; }
    },

    22: { // 1e47 后解锁
        name: "Ec4",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 3; },
        challengeDescription: function () {
            return "基于点数削弱点数。<br>完成次数：" +
                challengeCompletions("E", 22) +
                (player.Z.points.gte(18) ? "/6" : "/3") +
                "<br>当前：^" + format(this.nerf(), 6);
        },
        unlocked() { return (hasMilestone("E", 7)); },
        goal() {
            if (challengeCompletions('E', 22) == 0)
                return Decimal.pow(10, player.Z.points.gte(11) ? 6000 : player.Z.points.gte(10) ? 7000 : 9000);
            if (challengeCompletions('E', 22) == 1)
                return Decimal.pow(10, player.Z.points.gte(11) ? 6100 : player.Z.points.gte(10) ? 7200 : 9500);
            if (challengeCompletions('E', 22) == 2)
                return Decimal.pow(10, player.Z.points.gte(11) ? 6200 : player.Z.points.gte(10) ? 7400 : 10000);
            if (challengeCompletions('E', 22) == 3) return new Decimal("e1666e5");
            if (challengeCompletions('E', 22) == 4) return new Decimal("ee9");
            if (challengeCompletions('E', 22) == 5) return new Decimal("e18e8");
        },
        nerf() {
            return player.points.add(10).log(10).pow(-0.06).max('1e-100');
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "基于 C-D 点数升级增强点数基础。",
        rewardEffect() {
            if (challengeCompletions("E", 22) >= 10)
                return Decimal.pow(
                    upgradeEffect('C', 11).mul(upgradeEffect('D', 11)),
                    1000
                );
            if (challengeCompletions("E", 22) >= 9)
                return Decimal.pow(
                    upgradeEffect('C', 11).mul(upgradeEffect('D', 11)),
                    100
                );
            let b = Decimal.pow(challengeCompletions("E", 22), 1.35);
            let ef1 = Decimal.pow(upgradeEffect('C', 11), 0.08 + b / 40);
            let ef2 = Decimal.pow(upgradeEffect('D', 11), 0.08 + b / 40);
            let ef = Decimal.mul(ef1, ef2);
            return challengeCompletions("E", 22) >= 1 ? ef : new Decimal(1);
        },
        rewardDisplay() { return format(this.rewardEffect()) + "倍"; }
    },

    31: { // 1e45 后解锁
        name: "Ec5",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 5; },
        challengeDescription: function () {
            return "Bb1-2 的基础值锁定为 1.2，Bb3-4 与 Eb4 被禁用。<br>完成次数：" +
                challengeCompletions("E", 31) +
                (player.Z.points.gte(18) ? "/6" : "/5");
        },
        unlocked() { return (hasMilestone("E", 14)); },
        goal() {
            if (challengeCompletions('E', 31) == 0)
                return Decimal.pow(10, player.Z.points.gte(12) ? 17600 : 22500);
            if (challengeCompletions('E', 31) == 1)
                return Decimal.pow(10, player.Z.points.gte(12) ? 19000 : 24000);
            if (challengeCompletions('E', 31) == 2)
                return Decimal.pow(10, player.Z.points.gte(12) ? 21111 : 27300);
            if (challengeCompletions('E', 31) == 3)
                return Decimal.pow(10, player.Z.points.gte(12) ? 29000 : 48800);
            if (challengeCompletions('E', 31) == 4)
                return Decimal.pow(10, player.Z.points.gte(12) ? 30000 : 50600);
            if (challengeCompletions('E', 31) == 5) return new Decimal("e15e8");
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "Bb1-5 更便宜。",
        rewardEffect() {
            if (challengeCompletions("E", 31) >= 10)
                return Decimal.pow(layers.E.ekf(), 5).mul("ee20");
            if (challengeCompletions("E", 31) >= 9)
                return Decimal.pow(layers.E.ekf(), 2).mul("ee10");
            return Decimal.pow(1e10, challengeCompletions("E", 31));
        },
        rewardDisplay() {
            return "/" + format(this.rewardEffect(), 4) +
                (player.Z.points.gte(11) ? "<br>3 次完成时解锁新升级" : "");
        }
    },

    32: { // 1e45 后解锁
        name: "Ec6",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 5; },
        challengeDescription: function () {
            return "基于 Em 削弱点数。<br>完成次数：" +
                challengeCompletions("E", 32) +
                (player.Z.points.gte(18) ? "/6" : "/5") +
                "<br>当前：^" + format(this.nerf(), 6);
        },
        unlocked() { return (hasMilestone("E", 14)); },
        goal() {
            if (challengeCompletions('E', 32) == 0)
                return Decimal.pow(10, player.Z.points.gte(12) ? 10000 : 13200);
            if (challengeCompletions('E', 32) == 1)
                return Decimal.pow(10, player.Z.points.gte(12) ? 11000 : 13700);
            if (challengeCompletions('E', 32) == 2)
                return Decimal.pow(10, player.Z.points.gte(12) ? 12850 : 14850);
            if (challengeCompletions('E', 32) == 3)
                return Decimal.pow(10, player.Z.points.gte(12) ? 19000 : 20000);
            if (challengeCompletions('E', 32) == 4)
                return Decimal.pow(10, player.Z.points.gte(12) ? 22222 : 25850);
            if (challengeCompletions('E', 32) == 5) return new Decimal("e2e9/3");
        },
        nerf() {
            return player.E.Em.add(10).log(10).pow(-0.2).max('1e-100');
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "Ec6 完成次数增加 Eb6-7 的基础值。",
        rewardEffect() {
            if (challengeCompletions("E", 32) >= 10)
                return Decimal.add(
                    1e20,
                    player.E.buyables[31]
                        .mul(player.E.buyables[32])
                        .mul(player.E.buyables[33])
                );
            if (challengeCompletions("E", 32) >= 9)
                return Decimal.add(
                    1e10,
                    player.E.buyables[32].add(player.E.buyables[33])
                );
            let ef = challengeCompletions("E", 32) * 0.2;
            if (hasUpgrade('F', 24)) ef = Decimal.mul(ef, 1.5);
            return challengeCompletions("E", 32) >= 1 ? ef : new Decimal(0);
        },
        rewardDisplay() { return "+" + format(this.rewardEffect()); }
    },

    41: { // 1e47 后解锁
        name: "Ec7",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 5; },
        challengeDescription: function () {
            return "Bb5 / Eb4 ×0.4。<br>完成次数：" +
                challengeCompletions("E", 41) +
                (player.Z.points.gte(18) ? "/6" : "/5");
        },
        unlocked() { return (hasMilestone("E", 16)); },
        goal() {
            if (challengeCompletions('E', 41) == 0)
                return Decimal.pow(10, player.Z.points.gte(12) ? 31000 : 36300);
            if (challengeCompletions('E', 41) == 1)
                return Decimal.pow(10, player.Z.points.gte(12) ? 37000 : 60250);
            if (challengeCompletions('E', 41) == 2)
                return Decimal.pow(10, player.Z.points.gte(12) ? 38000 : 66600);
            if (challengeCompletions('E', 41) == 3)
                return Decimal.pow(10, player.Z.points.gte(12) ? 60000 : 84800);
            if (challengeCompletions('E', 41) == 4)
                return Decimal.pow(10, player.Z.points.gte(12) ? 75000 : 106500);
            if (challengeCompletions('E', 41) == 5) return new Decimal("e2e9");
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "Eb1-4 更便宜。",
        rewardEffect() {
            if (challengeCompletions("E", 41) >= 9)
                return Decimal.pow(layers.E.ekf(), 0.02).mul("ee10");
            return Decimal.pow(10, challengeCompletions("E", 41));
        },
        rewardDisplay() { return "/" + format(this.rewardEffect(), 3); }
    },

    42: { // 多个升级后解锁
        name: "Ec8",
        completionLimit() { return player.Z.points.gte(18) ? 6 : 5; },
        challengeDescription: function () {
            return "点数被更强地削弱，Bb3-5 / Eb4 / Em / Ek 被禁用。<br>完成次数：" +
                challengeCompletions("E", 42) +
                (player.Z.points.gte(18) ? "/6" : "/5") +
                "<br>当前：^" + format(this.nerf(), 6);
        },
        unlocked() { return (hasMilestone("E", 16)); },
        goal() {
            if (challengeCompletions('E', 42) == 0)
                return Decimal.pow(10, player.Z.points.gte(12) ? 27000 : 29800);
            if (challengeCompletions('E', 42) == 1)
                return Decimal.pow(10, player.Z.points.gte(12) ? 30000 : 50200);
            if (challengeCompletions('E', 42) == 2)
                return Decimal.pow(10, player.Z.points.gte(12) ? 37500 : 60100);
            if (challengeCompletions('E', 42) == 3)
                return Decimal.pow(10, player.Z.points.gte(12) ? 51400 : 69870);
            if (challengeCompletions('E', 42) == 4)
                return Decimal.pow(10, player.Z.points.gte(12) ? 60606 : 88000);
            if (challengeCompletions('E', 42) == 5) return n("ee9");
        },
        nerf() {
            return player.points.add(10).log(10).pow(-0.12).max('1e-100');
        },
        goalDescription: function () { return format(this.goal()) + ' 点数'; },
        canComplete() { return player.points.gte(this.goal()); },
        rewardDescription: "增强 Em / Ek 效果。",
        rewardEffect() {
            if (challengeCompletions("E", 42) >= 10) return 60;
            if (challengeCompletions("E", 42) >= 9) return 10;
            let ef = challengeCompletions("E", 42);
            if (hasUpgrade('E', 104)) ef = Decimal.mul(ef, 1.2);
            if (hasUpgrade('F', 24)) ef = Decimal.mul(ef, 1.1);
            return challengeCompletions("E", 42) >= 1 ? ef : new Decimal(0);
        },
        rewardDisplay() {
            return "Em：+" + format(this.rewardEffect()) / 100 +
                (challengeCompletions("E", 42) >= 9 ? 0.056 : 0) + " 指数，<br>" +
                "Ek：+" + format(this.rewardEffect() )/ 5 +
                (challengeCompletions("E", 42) >= 9 ? 4.32 : 0) + " 指数";
        }
    }
},

Emeffect() {
    let ef = new Decimal(1);
    ef = Decimal.mul(ef, buyableEffect("E", 31));
    ef = Decimal.mul(ef, buyableEffect("E", 32));
    ef = Decimal.mul(ef, buyableEffect("E", 33));
    if (hasUpgrade('C', 55)) ef = Decimal.mul(ef, upgradeEffect("C", 55));
    if (hasUpgrade('E', 105)) ef = Decimal.pow(ef, 1.01);
    return ef;
},

emf() {
    let exp = 0.25;
    if (hasMilestone('E', 12)) exp = Decimal.add(exp, 0.02);
    if (hasUpgrade('E', 103)) exp = Decimal.add(exp, 0.03);
    if (hasUpgrade('E', 101)) exp = Decimal.add(exp, 0.02);
    if (hasUpgrade('F', 34)) exp = Decimal.add(exp, 0.014);
    if (challengeCompletions("E", 42) >= 9) exp = Decimal.add(exp, 0.056);
    if (hasChallenge('E', 42)) exp = Decimal.add(exp, challengeEffect('E', 42) / 100);
    if (hasMilestone('F', 18)) exp = Decimal.add(exp, 0.01);
    if (inChallenge('E', 42)) exp = 0;
    let ef = player.E.Em.max(1).pow(exp);
    return ef;
},

Ekeffect() {
    let ef = new Decimal(1);
    ef = Decimal.mul(ef, buyableEffect("E", 41));
    ef = Decimal.mul(ef, buyableEffect("E", 42));
    if (hasUpgrade('C', 55)) ef = Decimal.mul(ef, upgradeEffect("C", 55));
    return ef;
},

ekf() {
    if (inChallenge('E', 42)) return new Decimal(1);
    let eff = player.E.Ek.add(1);
    let pow = 1;
    if (hasChallenge('E', 42)) pow += challengeEffect('E', 42) / 5;
    if (challengeCompletions("E", 42) >= 9) pow += 4.32;
    if (hasUpgrade('F', 62)) pow += 0.68;
    if (hasUpgrade('G', 21)) pow += 1;
    if (hasUpgrade('G', 22)) pow += 1;
    eff = eff.pow(pow);
    return eff;
},

ekf2() {
    let ef = player.E.Ek.add(1).log(10).pow(0.12);
    return ef;
},

update(diff) {
    if (hasMilestone("Z", 9))
        player.E.Em = player.E.Em.add(tmp.E.Emeffect.mul(diff));
    if (hasMilestone("Z", 10))
        player.E.Ek = player.E.Ek.add(tmp.E.Ekeffect.mul(diff));
    if (hasUpgrade("B", 83)) {
        for (let i in layers.E.challenges) {
            if (i == "rows" || i == "cols") continue;
            player.E.challenges[i] =
                hasUpgrade("B", 85) ? 10 :
                hasUpgrade("B", 84) ? 9 : 8;
        }
    }
}})