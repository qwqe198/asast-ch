addLayer("F", {
    name: "F", 
    symbol: "F", 
    position: 1, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        F1: new Decimal(10),
        fd1: new Decimal(0),
        fd2: new Decimal(0),
        fd3: new Decimal(0),
        fd4: new Decimal(0),
        fd5: new Decimal(0),
        fd6: new Decimal(0),
        fd7: new Decimal(0),
        fd8: new Decimal(0),
        F2: new Decimal(1),
        f2d1: new Decimal(0),
        f2d2: new Decimal(0),
        f2d3: new Decimal(0),
        f2d4: new Decimal(0),
    }},
    resetsNothing(){ return upg('F',65) },//||mil('I',1)
    passiveGeneration(){    
        let p = n(0)
        if(hasMilestone("Z",14)) p = p.add(1)
        if(mil("F", 9) || mil('I',1)) p = p.add(1)
        if(hasMilestone("Z",14)) p = p.mul(10)
        if(hasMilestone("Z",15)) p = p.mul(10)
        if(hasMilestone("Z",16)) p = p.mul(10)
        return p
    },
    color: "#264321",
    requires(){
        if(hasMilestone("Z",14)) return new Decimal(1);
        if(hasMilestone("Z",13)) return new Decimal('1e500');
        if(hasMilestone("Z",12)) return new Decimal('1e600');
        return new Decimal('1e700');
    }, 
    resource: "F", 
    baseResource: "E", 
    baseAmount() { return player.E.points }, 
    type: "normal", 
    exponent(){
        if(player.Z.points.gte(34)) return n(1);
        if(player.Z.points.gte(21)) return n(0.0025);
        return n(0.0075).mul(Decimal.pow(0.95, player.Z.points));
    },
    gainExp() {
        let ef = n(1)
        if(gcs('I',32)) ef = ef.add(0.2)
        return ef
    },
    row: 3, 
    hotkeys: [
        {key: "f", description: "F：重置以获得F点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    autoUpgrade() { return (gcs('I',101)) },
    layerShown(){ return (mil('E',20) || player[this.layer].unlocked) },
    gainMult() { 
        mult = n(1)
        if (mil('Z',12)) mult = Decimal.mul(mult,2)
        if (mil('Z',13)) mult = Decimal.mul(mult,3)
        if (mil('Z',14)) mult = Decimal.mul(mult,4)
        if (mil('Z',15)) mult = Decimal.mul(mult,5)
        if (mil('Z',16)) mult = Decimal.mul(mult,6)
        if (upg('F',21)) mult = Decimal.mul(mult,2)
        if (upg('F',23)) mult = Decimal.mul(mult, upgradeEffect('F',23))
        if (upg('F',32)) mult = Decimal.mul(mult, upgradeEffect('F',32))
        if (player.Z.points.gte(14) && player.Z.points.lte(28)) mult = Decimal.mul(mult, tmp.F.F1f)
        if (upg('G',14)) mult = Decimal.mul(mult, upgradeEffect('G',14))
        return mult
    },
    branches: ['E'],
    milestones: {
        0: {
            requirementDescription: "F总量 1 (1)",
            done() { return player[this.layer].total.gte('1') }, 
            effectDescription: "保留 A/B 升级、A/C 挑战、B/C/D 里程碑，<br>x1 E 被动获取，x10 A/B/E。<br>Z 重置时保留已获得的 E 挑战。"
        },
        1: {
            requirementDescription: "F总量 2 (2)",
            done() { return player[this.layer].total.gte('2') }, 
            effectDescription: "保留 C/D 升级，E 里程碑。"
        },
        2: {
            requirementDescription: "F总量 4 (3)",
            done() { return player[this.layer].total.gte('4') }, 
            effectDescription: "B26 ^1.1。"
        },
        3: {
            requirementDescription: "F总量 6 (4)",
            done() { return player[this.layer].total.gte('6') }, 
            effectDescription: "自动购买 E 升级。"
        },
        4: {
            requirementDescription: "F总量 15 (5)",
            done() { return player[this.layer].total.gte('15') }, 
            effectDescription: "保留 E 升级。"
        },
        5: {
            requirementDescription: "F总量 50 (6)",
            done() { return player[this.layer].total.gte('50') }, 
            effectDescription: "保留 E 挑战。"
        },
        6: {
            requirementDescription: "F总量 160 (7)",
            done() { return player[this.layer].total.gte('160') }, 
            effectDescription: "x5 批量购买 Eb1-3。"
        },
        7: {
            requirementDescription: "F总量 1.5e7 (8)",
            done() { return player[this.layer].total.gte('1.5e7') }, 
            effectDescription: "Bb5 ×1.025。"
        },
        8: {
            requirementDescription: "F总量 1e9 (9)",
            done() { return player[this.layer].total.gte('1e9') }, 
            effectDescription: "1e100 倍点数，解锁一个挑战。"
        },
        9: {
            requirementDescription: "F总量 1e12 (10)",
            done() { return player[this.layer].total.gte('1e12') }, 
            effectDescription: "每次重置获得 100% 的 F（每秒）。"
        },
        10: {
            requirementDescription: "F总量 1e15 (11)",
            done() { return player[this.layer].total.gte('1e15') && hasMilestone('Z',13) },
            unlocked() { return hasMilestone('Z',13) }, 
            effectDescription: "解锁新升级。"
        },
        11: {
            requirementDescription: "F1 总量 1e10 (12)",
            done() { return player[this.layer].F1.gte('1e10') }, 
            unlocked() { return hasMilestone('Z',13) }, 
            effectDescription: "解锁刻度加速（Tickspeed）。"
        },
        12: {
            requirementDescription: "F1 总量 1e38 (13)",
            done() { return player[this.layer].F1.gte('1e38') }, 
            unlocked() { return hasMilestone('Z',13) }, 
            effectDescription: "Fc1 ×1.2。"
        },
        13: {
            requirementDescription: "F1 总量 1e69 (14)",
            done() { return player[this.layer].F1.gte('1e69') }, 
            unlocked() { return hasMilestone('Z',13) }, 
            effectDescription: "解锁维度推进（Dimboost）。"
        },
        14: {
            requirementDescription: "1 次刻度推进 (15)",
            done() { return (gba('F',102).gte(1)) }, 
            unlocked() { return hasMilestone('Z',13) },
            effectDescription: "x10 F1，开始时拥有 1e6 F1，解锁新升级。"
        },
        15: {
            requirementDescription: "2 次刻度推进 (16)",
            done() { return (gba('F',102).gte(2)) }, 
            unlocked() { return hasMilestone('Z',13) },
            effectDescription: "开始时拥有 1e30 F1，每次购买维度乘数 +0.1，自动购买维度。",
            toggles: [["F","auto1"]]
        },
        16: {
            requirementDescription: "3 次刻度推进 (17)",
            done() { return (gba('F',102).gte(3) && hasMilestone('Z',14)) }, 
            unlocked() { return hasMilestone('Z',14) },
            effectDescription: "自动购买刻度加速。",
            toggles: [["F","auto2"]]
        },
        17: {
            requirementDescription: "6 次刻度推进 (18)",
            done() { return (gba('F',102).gte(6) && hasMilestone('Z',15)) }, 
            unlocked() { return hasMilestone('Z',15) },
            effectDescription: "G10 更强，解锁新升级，只能在 Gc 中购买。"
        },
        18: {
            requirementDescription: "18 次刻度推进 (19)",
            done() { return (gba('F',102).gte(18) && hasMilestone('Z',16)) }, 
            unlocked() { return hasMilestone('Z',16) },
            effectDescription: "Gc1p 效果 ^1.5，Em 效果更强。"
        },
    },
    doReset(layer){
        if (layer=="G") {        
            let keep = ["milestones", "upgrades", "challenges"]
            layerDataReset(this.layer, keep)
        }
        if (layer=="I") {        
            let keep = []
            if(gcs('I',13)) keep.push("challenges")
            if(gcs('I',36)) keep.push("milestones")
            layerDataReset(this.layer, keep)
            if(gcs('I',15) && !gcs('I',36)) player[this.layer].milestones = [11,12,13,14,15,16]
            if(gcs('I',36)) player[this.layer].upgrades = [71,72,73,74,75,81,82,83,84,85]
        }
    },
    microtabs: {
        stuff: {       
            "升级": {
                unlocked() { return true },
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">欢迎来到第3行。F 会重置第1-2行。</h4>`],
                    "upgrades"
                ]
            }, 
            "里程碑": {
                unlocked() { return true },
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">随着你获得更多 F，保留更多内容。</h4>`],
                    "milestones"
                ]
            },
            "挑战": {
                unlocked() { return (mil("F",8)) },
                content: ["challenges"]
            },
            "F 维度": {
                unlocked() { return (mil("Z",13)) },
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">这部分改编自反物质维度（但更简单）。<br></h4>`],
                    ["display-text", function(){
                        if(player.Z.points.gte(29))
                            return "你拥有 <h3 style='color:#128253;text-shadow:0 0 3px #c2b280'>" + format(player.F.F1) + "</h3> F1，点数 ^<h3 style='color:#128253;text-shadow:0 0 3px #c2b280'> " + format(tmp.F.F1f2) + "</h3>。<br>" + "<h4>" + format(tmp.F.F1effect.mul(player.F.fd1)) + " F1/秒<h4> <br>"
                        return "你拥有 <h3 style='color:#128253;text-shadow:0 0 3px #c2b280'>" + format(player.F.F1) + "</h3> F1，使 F 乘以 <h3 style='color:#128253;text-shadow:0 0 3px #c2b280'> " + format(tmp.F.F1f) + "x</h3>。<br>" + "<h4>" + format(tmp.F.F1effect.mul(player.F.fd1)) + " F1/秒<h4> <br>"
                    }],
                    ["display-text", () => "每次购买维度乘数：x<h3 style='color:#128253;text-shadow:0 0 3px #c2b280'>" + format(tmp.F.fdbas) + "</h3>"],
                    ["display-text", () => "每次购买刻度加速乘数：x<h3 style='color:#128253;text-shadow:0 0 3px #c2b280'>" + format(tmp.F.tick,4) + "</h3>"],
                    ["buyables",[1,2,3,10]]
                ]
            }, 
            "F2": {
                unlocked() { return player.Z.points.gte(22) },//false
                content: [
                    ["display-text", () => "你拥有 <h3 style='color:#C037A5;text-shadow:0 0 3px #c2b280'>" + format(player.F.F2) + "</h3> F2，提升 F1 效果为 ^<h3 style='color:#C037A5;text-shadow:0 0 3px #c2b280'> " + format(tmp.F.F2f,4) + "</h3>。<br>" + "<h4>" + format(tmp.F.F2effect.mul(player.F.f2d1)) + " F2/秒<h4> <br>"],
                    ["buyables",[11,12]]
                ]
            },   
        }
    },
    softcap(){ return new Decimal(Infinity) },
    softcapPower(){ return new Decimal(1) },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {
        11: {
            title:'F1',
            description: function() {
                return '1e15倍且 ^1.0016 点数<br>' +
                'F层总量：<br>' +
                format(this.effect()) + '倍'
            },            
            effect()  { 
                let ef = n('1e15')
                let exp = n(0.5)
                if (upg('F',13)) ef = Decimal.mul(ef,'1e30')
                if (upg('F',15)) ef = Decimal.mul(ef,'1e30')
                if (upg('F',21)) ef = Decimal.mul(ef,'1e30')
                if (upg('F',25)) ef = Decimal.mul(ef,'1e40')
                if (mil('F',8)) ef = Decimal.mul(ef,'1e100')
                if (upg('F',32)) ef = Decimal.mul(ef,'1e111')
                if (upg('F',34)) ef = Decimal.mul(ef,'1e120')
                if (upg('F',23)) exp = Decimal.add(exp,0.5)
                if (upg('F',15)) ef = Decimal.pow(ef, n(buyableEffect("E",21)).sub(1).mul(exp).add(1))
                if(mil("Z",16)) ef = ef.pow(10)
                if(mil("Z",17)) ef = ef.pow(10)
                return ef;          
            },
            cost: new Decimal(1),
        },
        12: {
            title:'F2',
            description: "F总量增强 E。(x^3)",
            effect()  { 
                let ef = n(3)
                return player[this.layer].total.add(1).pow(ef);          
            },
            cost: new Decimal(1),
            effectDisplay() { return format(this.effect())+"倍" }, 
            unlocked() { return (upg(this.layer, 11)) },
        },
        13: {
            title:'F3',
            description: "1e30倍点数，自动购买 B 升级。",
            cost: new Decimal(1),
            unlocked() { return (upg(this.layer, 12)) },
        },
        14: {
            title:'F4',
            description: "^1.0012 点数，Eb1-3 基础 +0.3，Eb7 基础 +1。",
            cost: new Decimal(2),
            unlocked() { return (upg(this.layer, 13)) },
        },
        15: {
            title:'F5',
            description: "1e30倍点数，Eb4 以 50% 效果应用于 F。",
            cost: new Decimal(4),
            unlocked() { return (upg(this.layer, 14)) },
        },
        21: {
            title:'F6',
            description: "1e30倍点数，Eb4 以 100% 效果应用于 C/D，2倍 F。",
            cost: new Decimal(10),
            unlocked() { return (upg(this.layer, 15)) },
        },
        22: {
            title:'F7',
            description: "Eb4 ×1.1。",
            cost: new Decimal(15),
            unlocked() { return (upg(this.layer, 21)) },
        },
        23: {
            title:'F8',
            description(){ return player.Z.points.gte(35) ? "Zp 增强 F，F5 为 100%，Eb4 ×1.1。" : "点数增强 F，F5 为 100%，Eb4 ×1.1。" },
            cost: new Decimal(40),
            effect()  { 
                let ef = player.points.add(10).log(10).div('4e4').add(1)
                if(player.Z.points.gte(35)) return layers.Z.getZp().add(10);
                return ef;
            },
            effectDisplay() { return format(this.effect())+"倍" },
            unlocked() { return (upg(this.layer, 22)) },
        },
        24: {
            title:'F9',
            description: "Ec6 效果 ×1.5，Ec8 效果 ×1.1。",
            cost: new Decimal(150),
            unlocked() { return (upg(this.layer, 23)) },
        },
        25: {
            title:'F10',
            description: "1e40倍点数，x5 批量购买 Eb5-7。",
            cost: new Decimal(1000),
            unlocked() { return (upg(this.layer, 24) && hasMilestone('Z',12)) },
        },
        31: {
            title:'F11',
            description: "解锁 2 个新的 C/D 升级。",
            cost: new Decimal(2000),
            unlocked() { return (upg(this.layer, 25)) },
        },
        32: {
            title:'F12',
            description: "1e111倍点数，F总量增强自身 (^0.1)。",
            cost: new Decimal(4000),
            effect()  { 
                let exp = n(0.1)
                if (upg('F',33)) exp = Decimal.add(exp,0.1)
                let ef = player.F.total.add(1).pow(exp)
                return ef;
            },
            effectDisplay() { return format(this.effect())+"倍" },
            unlocked() { return (upg(this.layer, 31)) },
        },
        33: {
            title:'F13',
            description: "F12 指数 +0.1，F 增强 Bb5。",
            cost: new Decimal(1e4),
            effect()  { 
                let ef = player.F.total.add(10).log(10).pow(0.25).div(1.5)
                if (upg('F',53)) ef = player.F.total.add(10).log(10).pow(0.28).div(1.35)
                return ef;
            },
            effectDisplay() { return "+" + format(this.effect()) + "%" },
            unlocked() { return (upg(this.layer, 32)) },
        },
        34: {
            title:'F14',
            description: "1e120倍点数，Em 指数 +0.014。",
            cost: new Decimal(5e4),
            unlocked() { return (upg(this.layer, 33)) },
        },
        35: {
            title:'F15',
            description: "Fc1 效果 ×1.25，Bb3-4 +5%，Eb4 +8%，Bb3-5 更便宜。",
            cost: new Decimal('1e10'),
            unlocked() { return (upg(this.layer, 34)) },
        },
        41: {
            title:'F16',
            description: "x2 F1，Bb5 +3%。",
            cost(){ return hasMilestone('Z',15) ? new Decimal(1e15) : new Decimal(2e4) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer, 10)) },
        },
        42: {
            title:'F17',
            description: "Fd 更便宜。",
            cost(){ return hasMilestone('Z',15) ? new Decimal(1e18) : new Decimal(2e7) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 41)) },
        },
        43: {
            title:'F18',
            description: "F 增强 Fd1。",
            cost(){ return hasMilestone('Z',15) ? new Decimal(1e21) : new Decimal(2e9) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.total.add(10).log(10).mul(0.2)
                if (upg('F',63)) ef = Decimal.pow(ef,1.2)
                return ef;
            },
            effectDisplay() { return format(this.effect()) + '倍' },
            unlocked() { return (upg(this.layer, 42)) },
        },
        44: {
            title:'F19',
            description: "Em 增强 Fd1。",
            cost(){ return hasMilestone('Z',15) ? new Decimal(1e24) : new Decimal(5e16) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.E.Em.add(10).log(10).div(80)
                if (upg('F',63)) ef = Decimal.pow(ef,1.2)
                return ef;
            },
            effectDisplay() { return format(this.effect()) + '倍' },
            unlocked() { return (upg(this.layer, 43)) },
        },
        45: {
            title:'F20',
            description: "x4 F1。",
            cost(){ return hasMilestone('Z',15) ? new Decimal(1e27) : hasMilestone('Z',14) ? new Decimal(1e20) : new Decimal(2e30) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 44)) },
        },
        51: {
            title:'F21',
            description: "Ek 增强 Fd1。",
            cost(){ return hasMilestone('Z',15) ? new Decimal(1e29) : hasMilestone('Z',14) ? new Decimal(1e25) : new Decimal(1e34) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.E.Ek.add(10).log(10).div(30)
                return ef;
            },
            effectDisplay() { return format(this.effect()) + '倍' },
            unlocked() { return (upg(this.layer, 45)) },
        },
        52: {
            title:'F22',
            description: "^3 F1 效果，^1.002 点数。",
            cost(){ return hasMilestone('Z',14) ? new Decimal(1e32) : new Decimal(1e40) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 51)) },
        },
        53: {
            title:'F23',
            description: "F13 更强，解锁一个挑战。",
            cost(){ return hasMilestone('Z',14) ? new Decimal(1e38) : new Decimal(1e43) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 52)) },
        },
        54: {
            title:'F24',
            description: "F1 效果指数为 1。",
            cost(){ return hasMilestone('Z',14) ? new Decimal(1e43) : new Decimal(1e46) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 45)) },
        },
        55: {
            title:'F25',
            description: "Fd 和刻度加速使用 F 而非 F1。",
            cost(){ return hasMilestone('Z',14) ? new Decimal(1e48) : new Decimal(1e50) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 54)) },
        },
        61: {
            title:'F26',
            description: "每次购买 F 维度乘数 +0.1。",
            cost(){ return hasMilestone('Z',15) ? new Decimal('1e90') : new Decimal('1e100') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer, 14)) },
        },
        62: {
            title:'F27',
            description: "Ek 更强。",
            cost(){ return hasMilestone('Z',15) ? new Decimal('1e100') : new Decimal('1e120') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer,61)) },
        },
        63: {
            title:'F28',
            description: "F1 效果指数 ×1.1，F18-19 ^1.2。",
            cost(){ return hasMilestone('Z',15) ? new Decimal('1e110') : new Decimal('1e125') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 62) && hasMilestone('Z',14)) },
        },
        64: {
            title:'F29',
            description: "F1 增强 Fd1。",
            cost: new Decimal('1e140'),
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.F1.add(10).log(10).div(1.5)
                return ef;
            },
            effectDisplay() { return format(this.effect()) + '倍' },
            unlocked() { return (upg(this.layer, 62) && hasMilestone('Z',14)) },
        },
        65: {
            title:'F30',
            description: "F1 增强 Bb1-2、Eb1-3 基础，^1.006 点数，F1 效果指数 ×1.14，F 重置时不重置任何东西。",
            cost(){ return hasMilestone('Z',15) ? new Decimal('1e160') : new Decimal('1e180') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.F1.add(10).log(10).div(50).add(1)
                if (mil('Z',15)) ef = player.F.F1.add(10).log(10).add(10).pow(0.25).mul(3).add(1)
                if (mil('Z',23)) ef = player.F.F1.add(10).log(10).add(10).pow(0.25).div(10).add(1)
                if (upg('G',15)) ef = Decimal.pow(ef,1.1)
                if (upg('G',23)) ef = Decimal.pow(ef, upgradeEffect('G',23))
                return ef;
            },
            effectDisplay() { return '+' + format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 64)) },
        },
        71: {
            title:'F31',
            description: "F 升级增强 F 维度。<br>（需要 Gc1）",
            cost: n('1e970'),
            canAfford() { return inChallenge('G',11) && player.F.F1.gte('1e970') }, //
            effect()  { 
                let a = player[this.layer].upgrades.length
                let ef = n(1.075).pow(a)
                if (upg('F',75)) ef = ef.pow(2)
                return ef;          
            },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer, 17)) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "倍" },
        },
        72: {
            title:'F32',
            description: "刻度加速乘数 ×1.01，对数 G 增强自身。（需要 Gc1）",
            cost: n('1e1000'),
            canAfford() { return inChallenge('G',11) && player.F.F1.gte('1e1000') }, // 
            effect()  { 
                let ef = player.G.total.add(10).log(10)
                return ef;          
            },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 71)) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "倍" },
        },
        73: {
            title:'F33',
            description: "F1 效果更强，Gb1 乘数增强 Fd。（需要 Gc1）",
            cost: n('1e1234'),
            canAfford() { return inChallenge('G',11) && player.F.F1.gte('1e1234') }, //  
            effect()  { 
                let t = n(gba('G',11))
                let ef = n(1.5).pow(t)
                return ef;          
            },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 72)) },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id)) + "倍" },
        },
        74: {
            title:'F34',
            description: "Gb2 数量增强其基础，Gc1p 增强 G。（需要 Gc1）",
            cost: n('1e1342'),
            canAfford() { return inChallenge('G',11) && player.F.F1.gte('1e1342') }, //  
            effect()  { 
                let t = n(gba('G',12))
                let ef1 = t.mul(0.06)
                let ef2 = player.G.Gc1p.add(10).log(10).div(1.5)
                return [ef1, ef2];          
            },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 73)) },
            effectDisplay() { return 'Gb2：+' + format(this.effect()[0]) + '<br> G：x' + format(this.effect()[1]) },
        },
        75: {
            title:'F35',
            description: "Gb3 数量增强其基础，F31 ^2，解锁下一个 G 挑战。（需要 Gc1）",
            cost(){
                if(player.Z.points.gte(20)) return n('1e2200');
                if(player.Z.points.gte(19)) return n('1e2400');
                if(player.Z.points.gte(18)) return n('1e2500');
                return n('1e2666')
            },
            canAfford() { return inChallenge('G',11) && player.F.F1.gte(player.Z.points.gte(20)?'1e2200':player.Z.points.gte(19)?'1e2400':player.Z.points.gte(18)?'1e2500':'1e2666') }, //   
            effect()  { 
                let t = n(gba('G',13))
                let ef = t.mul(0.001)
                if(player.Z.points.gte(20)) ef = ef.mul(10)
                return ef;          
            },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 74) && player.Z.points.gte(17)) },
            effectDisplay() { return '+' + format(this.effect()) },
        },
        81: {
            title:'F36',
            description(){ return "F 维度乘数 +0.1，E25 在 ^0.01 效果下为乘法且应用于 Eb3"+(player.Z.points.eq(18)?" 以降低的比率":"")+"。（需要 Gc2）" },         
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost(){ return player.Z.points.gte(20) ? n('1e1230') : player.Z.points.gte(19) ? n('1e1540') : n('1e1800') },
            canAfford() { return inChallenge('G',12) && player.F.F1.gte(player.Z.points.gte(20)?'1e1230':player.Z.points.gte(19)?'1e1540':'1e1800') },
            effect()  { 
                let exp = n(0.01)
                let ef = Decimal.pow(upgradeEffect('E',55), exp)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (upg(this.layer, 75)) },
        },
        82: {
            title:'F37',
            description: "Gc1p 增强 Gb3 基础。（需要 Gc2）",         
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost: n('e5600'),
            canAfford() { return inChallenge('G',12) && player.F.F1.gte('1e5600') },
            effect()  { 
                let ef = player.G.Gc1p.add(10).log(10).add(10).log(10).pow(0.1)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (upg(this.layer, 81)) },
        },
        83: {
            title:'F38',
            description: "Gc2p 效果 ^1.5。（需要 Gc2）",         
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost: n('e6900'),
            canAfford() { return inChallenge('G',12) && player.F.F1.gte('1e6900') },
            unlocked() { return (upg(this.layer, 82)) },
        },
        84: {
            title:'F39',
            description: "Gc2p 增强 Gb3 基础。（需要 Gc3）",         
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost: n('e317000'),
            canAfford() { return inChallenge('G',21) && player.F.F1.gte('e317000') },
            effect()  { 
                let ef = player.G.Gc2p.add(10).log(10).add(10).log(10).pow(upg('G',44)?0.03:0.02)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (upg(this.layer, 83) && hasMilestone('Z',18)) },
        },
        85: {
            title:'F40',
            description: "提高 Gc3p 获取。购买最大刻度推进。（需要 Gc3）",         
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost: n('e73e6'),
            canAfford() { return inChallenge('G',21) && player.F.F1.gte('e73e6') },
            unlocked() { return (upg(this.layer, 83) && hasMilestone('Z',19)) },
        },
    },
    challenges:{
        11: {
            name: "Fc1",
            completionLimit: 3,
            challengeDescription: function() {
                return "B/E 产出 ^0.25。<br>完成次数：" + challengeCompletions(this.layer,this.id) + "/3"
            },
            unlocked() { return (mil("F", 8)) },
            goal(){
                let a = [n(mil('Z',13)?'e12800':'e14200'), n(mil('Z',13)?'e13700':'e14300'), n(mil('Z',13)?'e14000':'e15500'), n(0)]
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription: function() { return format(this.goal()) + ' 点数' },
            canComplete(){ return player.points.gte(this.goal()) },
            rewardDescription: "Bb3-5 更强。",
            rewardEffect() {
                let ef = Decimal.mul(challengeCompletions("F", 11), 0.8)
                if (upg('F',35)) ef = Decimal.mul(ef,1.25)
                if (mil('F',12)) ef = Decimal.mul(ef,1.2)
                if (challengeCompletions("F", 11) >= 1) return ef
                else return new Decimal(0)
            },
            rewardDisplay() { return '+' + format(this.rewardEffect()) + "%" },
        },
        12: {//
            name: "Fc2",
            completionLimit: 3,
            challengeDescription: function() {
                return "点数指数 ^0.8。<br>完成次数：" + challengeCompletions("F", 12) + "/3"
            },
            unlocked() { return (upg("F", 53)) },
            goal(){
                let a = [n('ee3'), n('e2e5'), n('e5e5'), n(0)]//edit at v0.6.4
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription: function() { return format(this.goal()) + ' 点数' },
            canComplete(){ return player.points.gte(this.goal()) },
            rewardDescription: "B 增强 Fd1。",
            rewardEffect() {
                let exp = Decimal.mul(challengeCompletions("F", 12), 0.06).add(0.08)
                let ef = player.B.points.add(10).log(10).add(1).pow(exp)
                if (challengeCompletions("F", 12) >= 1) return ef
                else return new Decimal(1)
            },
            rewardDisplay() { return 'x' + format(this.rewardEffect()) },
        },
    },
    automate(){
        if (player.F.auto1) {
            buyBuyable("F",11); buyBuyable("F",12); buyBuyable("F",13); buyBuyable("F",21);
            buyBuyable("F",22); buyBuyable("F",23); buyBuyable("F",31); buyBuyable("F",32);
        }
        if (player.F.auto2) buyBuyable("F",101)
        if (player.G.auto1) buyBuyable("F",102)
        if (player.G.auto3) {
            buyBuyable("F",111); buyBuyable("F",112); buyBuyable("F",113); buyBuyable("F",121);
        }
    },
    buyables:{
        11: {
            title: "Fd1", 
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling).mul(player.Z.points.gte(19)?1:10))
            },
            canAfford() { 
                let cost = this.cost()
                return player[this.layer][upg('F',55)?"points":"F1"].gte(cost) 
            },
            buy() {
                player.F.fd1 = player.F.fd1.add(1)
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
            },
            base(){ return tmp.F.fdbas },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                if (upg('F',43)) ef = Decimal.mul(ef, upgradeEffect('F',43))
                if (upg('F',44)) ef = Decimal.mul(ef, upgradeEffect('F',44))
                if (upg('F',51)) ef = Decimal.mul(ef, upgradeEffect('F',51))
                if (hasChallenge('F',12)) ef = Decimal.mul(ef, challengeEffect('F',12))
                if (upg('F',64)) ef = Decimal.mul(ef, upgradeEffect('F',64))
                return ef
            },
            display() { 
                return "生产 F1 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd1) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return mil('Z',13) 
            },
            style: {'height':'150px'},
        },
        12: {
            title: "Fd2", 
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(2)).mul(player.Z.points.gte(19)?1:100))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd2 = player.F.fd2.add(1)
            },
            base(){ return tmp.F.fdbas },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                return ef
            },
            display() { 
                return "生产 Fd1 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd2) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return (tmp.F.buyables[11].effect.gte(2)) 
            },
            style: {'height':'150px'},
        },
        13: {
            title: "Fd3",  
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(3)).mul(player.Z.points.gte(19)?1:1e4))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd3 = player.F.fd3.add(1)
            },
            base(){ return tmp.F.fdbas },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                return ef
            },
            display() { 
                return "生产 Fd2 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd3) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return (tmp.F.buyables[12].effect.gte(2)) 
            },
            style: {'height':'150px'},
        },
        21: {
            title: "Fd4",  
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(4)).mul(player.Z.points.gte(19)?1:1e7))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd4 = player.F.fd4.add(1)
            },
            base(){ return tmp.F.fdbas },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                return ef
            },
            display() { 
                return "生产 Fd3 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd4) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return (player.F.F1.gte(1e7)) 
            },
            style: {'height':'150px'},
        },
        22: {
            title: "Fd5",  
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(5)).mul(player.Z.points.gte(19)?1:1e11))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd5 = player.F.fd5.add(1)
            },
            base(){ return tmp.F.fdbas },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                return ef
            },
            display() { 
                return "生产 Fd4 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd5) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return (player.F.F1.gte(1e11)) 
            },
            style: {'height':'150px'},
        },
        23: {
            title: "Fd6",   
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(6)).mul(player.Z.points.gte(19)?1:1e16))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd6 = player.F.fd6.add(1)
            },
            base(){ return tmp.F.fdbas },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                return ef
            },
            display() { 
                return "生产 Fd5 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd6) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return (player.F.F1.gte(1e16)) 
            },
            style: {'height':'150px'},
        },
        31: {
            title: "Fd7",
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(7)).mul(player.Z.points.gte(19)?1:1e22))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd7 = player.F.fd7.add(1)
            },
            base(){ return tmp.F.fdbas },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                return ef
            },
            display() { 
                return "生产 Fd6 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd7) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return (player.F.F1.gte(1e22)) 
            },
            style: {'height':'150px'},
        },
        32: {
            title: "Fd8", 
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(8)).mul(player.Z.points.gte(19)?1:1e29))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd8 = player.F.fd8.add(1)
            },
            base(){   
                let bas = tmp.F.fdbas
                if (player.Z.points.lt(23) && challengeCompletions("G", 21)>=3) bas = Decimal.mul(bas, tmp.G.gc3ef)
                return bas
            },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.fdm)
                return ef
            },
            display() { 
                return "生产 Fd7 \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player.F.fd8) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1) || mil('Z',14)) return true
                else return (player.F.F1.gte(1e29)) 
            },
            style: {'height':'150px'},
        },
        101: {
            title: "刻度加速（Tickspeed）",
            cost(x) {
                if(player.Z.points.gte(30)) return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(player.Z.points.gte(19)?1:1e10))
            },
            canAfford() { 
                return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
            },
            base(){ return tmp.F.tick },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                return ef
            },
            display() { 
                return "增强所有 Fd \n" +
                "需要：" + format(this.cost()) + " " + (upg('F',55)?"F":"F1") + " \n" +
                "数量：" + format(player[this.layer].buyables[this.id]) + " \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { 
                if (gba('F',102).gte(1)) return true
                else return mil('F',11) 
            },
            style: {'height':'150px'},
        },
        102: {
            title: "刻度推进（Tickboost）", 
            cost(x) { 
                if(player.Z.points.gte(30)) return x.add(1)
                if(player.Z.points.gte(21)) return x.add(1).pow(2)
                return x.pow(2).mul(mil('Z',15)?5:8).add(mil('Z',15)?10:12)
            },
            canAfford() { return player[this.layer].buyables[32].gte(this.cost()) },
            buy(){
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                if (!mil('G',1)) {
                    let st = new Decimal(10)
                    if (mil('F',14)) st = new Decimal('1e6')
                    if (mil('F',15)) st = new Decimal('1e30')
                    player.F.F1 = st
                    player.F.fd1 = player.F.fd2 = player.F.fd3 = player.F.fd4 = player.F.fd5 = player.F.fd6 = player.F.fd7 = n(0)
                }
            },
            display() { 
                return "重置以获得一次刻度推进 <br>增强刻度加速乘数 \n" +
                "需要：" + format(this.cost()) + " 已购买的 Fd8 \n" +
                "数量：" + format(player[this.layer].buyables[this.id])
            },
            unlocked() { return mil('F',13) },
            style: {'height':'150px'},
        },
   111: {
            title: "F2d1", 
            cost(x) { 
                let cost = Decimal.pow(10, n(1.01).pow(x).mul(player.Z.points.gte(23) ? 1 : 43300000))
                return cost
            },
            canAfford() { 
                let cost = this.cost()
                return player.G.points.gte(cost) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d1 = player.F.f2d1.add(1)
            },            
            base(){   
                let bas = n(player.Z.points.gte(23) ? 1.1 : 1.8)
                return bas
            },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x).max(1)
                ef = Decimal.mul(ef, tmp.F.f2dm)
                return ef
            },
            display() { 
                return "生产 F2 \n" +
                "需要：" + format(this.cost()) + " G \n" +
                "数量：" + format(player.F.f2d1) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { return player.Z.points.gte(22) },
            style() {
                if (this.canAfford()) 
                    return {'height':'150px','background-color':'#C037A5'}
                else 
                    return {'height':'150px'}
            },
        },

        112: {
            title: "F2d2", 
            cost(x) { 
                let cost = Decimal.pow(
                    10,
                    n(player.Z.points.gte(23) ? 1.01 : 1.05).pow(x)
                        .mul(player.Z.points.gte(24) ? 1e4 : 4e8)
                        .add(player.Z.points.gte(23) ? 0 : '1.6e9')
                )
                return cost
            },
            canAfford() { 
                let cost = this.cost()
                return player.G.points.gte(cost) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d2 = player.F.f2d2.add(1)
            },
            base(){   
                let bas = n(player.Z.points.gte(24) ? 1.2 : player.Z.points.gte(23) ? 2 : 25)
                return bas
            },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.f2dm)
                return ef
            },
            display() { 
                return "生产 F2d1 \n" +
                "需要：" + format(this.cost()) + " G \n" +
                "数量：" + format(player.F.f2d2) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { return player.Z.points.gte(22) },
            style() {
                if (this.canAfford()) 
                    return {'height':'150px','background-color':'#C037A5'}
                else 
                    return {'height':'150px'}
            },
        },

        113: {
            title: "F2d3", 
            cost(x) { 
                let cost = Decimal.pow(
                    10,
                    n(player.Z.points.gte(24) ? 1.01 : 1.05).pow(x)
                        .mul(player.Z.points.gte(24) ? 1e8 : 6e8)
                        .add(player.Z.points.gte(24) ? 0 : '3.94e10')
                )
                return cost
            },
            canAfford() { 
                let cost = this.cost()
                return player.G.points.gte(cost) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d3 = player.F.f2d3.add(1)
            },
            base(){   
                let bas = n(player.Z.points.gte(24) ? 1.3 : 20)
                return bas
            },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.f2dm)
                return ef
            },
            display() { 
                return "生产 F2d2 \n" +
                "需要：" + format(this.cost()) + " G \n" +
                "数量：" + format(player.F.f2d3) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { return upg('G',52) },
            style() {
                if (this.canAfford()) 
                    return {'height':'150px','background-color':'#C037A5'}
                else 
                    return {'height':'150px'}
            },
        },

        121: {
            title: "F2d4", 
            cost(x) { 
                let cost = Decimal.pow(
                    10,
                    n(player.Z.points.gte(24) ? 1.01 : 1.05).pow(x)
                        .mul(player.Z.points.gte(24) ? 1e12 : 1e9)
                        .add(player.Z.points.gte(24) ? 0 : '9.99e11')
                )
                return cost
            },
            canAfford() { 
                let cost = this.cost()
                return player.G.points.gte(cost) 
            },
            buy() {
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d4 = player.F.f2d4.add(1)
            },
            base(){   
                let bas = n(player.Z.points.gte(24) ? 1.4 : 40)
                return bas
            },
            effect(x) { 
                let ef = Decimal.pow(this.base(), x)
                ef = Decimal.mul(ef, tmp.F.f2dm)
                return ef
            },
            display() { 
                return "生产 F2d3 \n" +
                "需要：" + format(this.cost()) + " G \n" +
                "数量：" + format(player.F.f2d4) + " (" + format(player[this.layer].buyables[this.id]) + ") \n" +
                "效果：x" + format(this.effect())
            },
            unlocked() { return upg('G',52) },
            style() {
                if (this.canAfford()) 
                    return {'height':'150px','background-color':'#C037A5'}
                else 
                    return {'height':'150px'}
            },
        },
    },

    tick(){
        let bas = n(1.05)
        let e = n(1.08)

        if(player.Z.points.gte(18)){
            bas = n(1.05).add(gba('F',102).div(player.Z.points.gte(21) ? 110 : 50))
            if(upg('G',33)) bas = bas.add(0.005)
            if(upg('F',72)) bas = bas.mul(1.01)
            if(hasChallenge('G',12)) bas = bas.mul(challengeEffect('G',12))
        } else {
            let ef = [
                n(1.065),
                n(1.08),
                e.pow(gba('F',102)).mul(0.3).add(0.73)
            ]
            if(gba('F',102).gte(1)) bas = ef[n(gba('F',102)).sub(1).min(2)]
            if(gba('F',102).gte(10) && player.Z.points.gte(17))
                bas = e.pow(gba('F',102).sqrt()).mul(0.1).add(1.25)
            if(upg('G',33)) bas = bas.add(0.005)
            if(upg('F',72)) bas = Decimal.mul(bas.sub(1),1.01).add(1)
            if(hasChallenge('G',12))
                bas = Decimal.mul(bas.sub(1),challengeEffect('G',12)).add(1)
        }

        if(upg('G',54))
            bas = Decimal.mul(bas.sub(1),upgradeEffect('G',54)).add(1)

        let expc4 = n(1.5)
        if(upg('G',52)) expc4 = expc4.add(0.5)
        if(inChallenge('G',22)) bas = n(1)

        return bas
    },

    F1effect() {
        let ef = n(1)
        if(mil('Z',13)) ef = ef.mul(buyableEffect("F",11))
        if(upg('F',41)) ef = ef.mul(2)
        if(mil('Z',14)) ef = ef.mul(4)
        if(mil('Z',15)) ef = ef.mul(5)
        if(mil('Z',16)) ef = ef.mul(6)
        if(upg('F',45)) ef = ef.mul(4)
        if(mil('F',14)) ef = ef.mul(10)
        if(mil('I',0)) ef = ef.pow(1.05).mul(1e10)
        if(mil('I',1)) ef = ef.pow(1.05).mul(1e10)
        if(gcs('I',31)) ef = ef.pow(1.12)
        if(mil('I',3)) ef = ef.pow(buyableEffect('I',11))
        return ef
    },

    F2effect() {
        let ef = buyableEffect("F",111)
        return ef
    },

    fdm(){
        let ef = n(1)
        ef = Decimal.mul(ef, buyableEffect('F',101))
        if(upg('G',11)) ef = Decimal.mul(ef,2)
        if(upg('G',21)) ef = Decimal.mul(ef, upgradeEffect('G',21))
        ef = Decimal.mul(ef, buyableEffect('G',12))
        if(hasChallenge("G",11)) ef = Decimal.mul(ef, challengeEffect('G',11))
        if(upg('F',71)) ef = Decimal.mul(ef, upgradeEffect('F',71))
        if(upg('F',73)) ef = Decimal.mul(ef, upgradeEffect('F',73))
        if(challengeCompletions("G",11) >= 3) ef = Decimal.mul(ef, tmp.G.gc1ef)
        return ef
    },

    f2dm(){
        let ef = new Decimal(1)
        if(upg('G',51)) ef = Decimal.mul(ef, upgradeEffect('G',51))
        if(upg('G',53)) ef = Decimal.mul(ef, upgradeEffect('G',53))
        return ef
    },

    fdbas(){
        let ef = n(2)
        if(upg('F',61)) ef = Decimal.add(ef,0.1)
        if(mil('F',15)) ef = Decimal.add(ef,0.1)
        if(upg('G',12)) ef = Decimal.add(ef,0.1)
        if(upg('G',24)) ef = Decimal.add(ef,0.1)
        if(upg('F',81)) ef = Decimal.add(ef,0.1)
        if(hasChallenge('G',21)) ef = Decimal.add(ef, challengeEffect('G',21))
        ef = ef.add(tmp.G.gc4ef)
        if(player.Z.points.gte(23)) ef = Decimal.mul(ef, tmp.G.gc3ef)
        if(gcs('I',33)) ef = ef.mul(1.1)
        if(hasChallenge('G',22)) ef = ef.mul(challengeEffect('G',22))
        if(inChallenge('G',12)) ef = ef.pow(0.5)
        return ef
    },

    scaling(){
        if(player.Z.points.gte(33)) return n(1.06)
        if(player.Z.points.gte(30)) return Decimal.pow(1.01, player.Z.points.sub(28).min(3))
        if(player.Z.points.gte(29)) return n(10)

        let ef = n(1.25)
        if(upg('F',42)) ef = ef.sub(0.01)
        if(upg('G',13)) ef = ef.sub(0.01)
        if(upg('G',22)) ef = ef.sub(0.005)
        if(upg('G',35)) ef = ef.sub(0.005)
        if(player.Z.points.gte(20)) ef = ef.sub(0.02).mul(Decimal.pow(1.05, player.Z.points.sub(19)))
        if(inChallenge('G',21)) ef = ef.pow(1.02).mul(1.02)
        return ef
    },

    F1f() {
        let exp = n(hasMilestone('Z',15) ? 0.25 : 0.15)
        if(upg('F',52)) exp = Decimal.mul(exp,3)
        if(upg('F',54)) exp = new Decimal(1)
        if(upg('F',63)) exp = Decimal.mul(exp,1.1)
        if(upg('F',65)) exp = Decimal.mul(exp,1.25/1.1)
        if(upg('F',73)) exp = Decimal.mul(exp,1.3/1.25)

        let ef = player.F.F1.max(1).pow(exp)
        if(upg('G',31) && player.Z.points.lt(21) && player.F.F1.gte('1e1200'))
            ef = ef.mul(player.F.F1.div('1e1200').pow(player.F.F1.log10().log10().div(50)))
        if(upg('G',31) && player.Z.points.gte(21))
            ef = ef.pow(player.F.F1.max('1e1200').log10().div(12).log10().mul(5).log10())
        if(player.Z.points.gte(22)) ef = ef.pow(tmp.F.F2f)
        if(player.Z.points.gte(20))
            ef = Decimal.pow(10, ef.max(1).log10().pow(Decimal.pow(1.05, player.Z.points.sub(19))))
        return ef
    },

    F1f2() {
        let exp = n(hasMilestone('Z',15) ? 0.25 : 0.15)
        if(upg('F',52)) exp = Decimal.mul(exp,3)
        if(upg('F',54)) exp = new Decimal(1)
        if(upg('F',63)) exp = Decimal.mul(exp,1.1)
        if(upg('F',65)) exp = Decimal.mul(exp,1.25/1.1)
        if(upg('F',73)) exp = Decimal.mul(exp,1.3/1.25)

        let ef = player.F.F1.add(10).log10()
        if(upg('G',31) && ef.gte(1200))
            ef = ef.pow(1.5).div(1200**0.5)
        if((!upg('G',64) || player.Z.points.lt(30)) && player.Z.points.lt(31))
            ef = Decimal.pow(10, ef.log10().div(5).pow(0.99)).max(ef.pow(0.05))

        ef = ef.pow(exp)
        if(player.Z.points.gte(22)) ef = ef.pow(tmp.F.F2f)
        return ef
    },

    F2f() {
        let ef = player.F.F2.max(1).log(10).add(1).log(10).add(1).pow(0.1).sub(1).div(10).add(1)
        if(player.Z.points.gte(24))
            ef = player.F.F2.max(1).log(10).add(1).log(10).div(10).add(1)
        if(player.Z.points.gte(28))
            ef = player.F.F2.max(1).log(10).add(1).log(10).div(10).add(1).pow(2)
        if(player.Z.points.gte(30))
            ef = player.F.F2.max(1).log(10).add(1).log(10).add(1).pow(2)
        if(upg('G',64) && player.Z.points.gte(31))
            ef = ef.mul(player.F.F2.add(1).log(10).add(1).pow(player.Z.points.gte(32)?0.06:0.04))
        if(player.Z.points.gte(33))
            ef = player.F.F2.add(10).log(10).pow(0.1)
        return ef
    },

    update(diff) {
        if(mil('Z',13))
            player.F.F1 = player.F.F1.add(
                tmp.F.F1effect.mul(player.F.fd1).pow(inChallenge('G',11)?0.9:1).mul(diff)
            )

        if(tmp.F.buyables[11].effect.gte(1))
            player.F.fd1 = player.F.fd1.add(tmp.F.buyables[12].effect.mul(player.F.fd2).mul(diff))
        if(tmp.F.buyables[12].effect.gte(1))
            player.F.fd2 = player.F.fd2.add(tmp.F.buyables[13].effect.mul(player.F.fd3).mul(diff))
        if(tmp.F.buyables[13].effect.gte(1))
            player.F.fd3 = player.F.fd3.add(tmp.F.buyables[21].effect.mul(player.F.fd4).mul(diff))
        if(tmp.F.buyables[21].effect.gte(1))
            player.F.fd4 = player.F.fd4.add(tmp.F.buyables[22].effect.mul(player.F.fd5).mul(diff))
        if(tmp.F.buyables[22].effect.gte(1))
            player.F.fd5 = player.F.fd5.add(tmp.F.buyables[23].effect.mul(player.F.fd6).mul(diff))
        if(tmp.F.buyables[23].effect.gte(1))
            player.F.fd6 = player.F.fd6.add(tmp.F.buyables[31].effect.mul(player.F.fd7).mul(diff))
        if(tmp.F.buyables[31].effect.gte(1))
            player.F.fd7 = player.F.fd7.add(tmp.F.buyables[32].effect.mul(player.F.fd8).mul(diff))

        if(hasUpgrade("G",51))
            player.F.fd8 = player.F.fd8.add(player.G.Gc1p.mul(diff).mul(hasUpgrade("G",52)?buyableEffect('F',101):1))

        if(player.Z.points.gte(22))
            player.F.F2 = player.F.F2.add(tmp.F.F2effect.mul(player.F.f2d1).mul(diff))

        if(tmp.F.buyables[111].effect.gte(1))
            player.F.f2d1 = player.F.f2d1.add(tmp.F.buyables[112].effect.mul(player.F.f2d2).mul(diff))
        if(tmp.F.buyables[112].effect.gte(1))
            player.F.f2d2 = player.F.f2d2.add(tmp.F.buyables[113].effect.mul(player.F.f2d3).mul(diff))
        if(tmp.F.buyables[113].effect.gte(1))
            player.F.f2d3 = player.F.f2d3.add(tmp.F.buyables[121].effect.mul(player.F.f2d4).mul(diff))
    },
})