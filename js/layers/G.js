addLayer("G", {
    name: "G", 
    symbol: "G", 
    position: 2, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        Gc1p: new Decimal(0),
        Gc2p: new Decimal(0),
        Gc3p: new Decimal(0),
        Gc4p: new Decimal(0),
        Gs: new Decimal(0),
        Gsi: new Decimal(0),
        Gse: new Decimal(0),
        Gsetot: new Decimal(0),
        Gsq: new Decimal(0),
        Gsg: new Decimal(0),
        Gsr: new Decimal(0),
        GG: new Decimal(0),
        Gtc: new Decimal(0),
        GGtot: new Decimal(0),
    }},
    
    passiveGeneration(){    
        let pg = n(0)
        if (mil("G",6) || mil('I',0)) pg = Decimal.add(pg,1)
        return pg
    },
    
    color: "#695735",
    requires(){
        if(hasMilestone("Z",18)) return new Decimal(1);
        return Decimal.pow(2,1024)
    }, 
    resource: "G", 
    baseResource: "F1", 
    baseAmount() { return player.F.F1 }, 
    type: "normal",
    exponent(){
        if(player.Z.points.gte(34)) return n(1);
        return n(0.02).mul(Decimal.pow(0.95, player.Z.points));
    }, 
    gainExp() {
        let e = n(1)
        if(mil('I',0)) e = e.mul(1.03)
        return e
    },
    row: 3, 
    hotkeys: [
        {key: "g", description: "G：重置以获得G点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return ((upg('F',65)) || player[this.layer].unlocked) },
    gainMult() { 
        let mult = n(1)
        mult = mult.mul(buyableEffect('G',11))
        if (hasUpgrade('F',72)) mult = mult.mul(upgradeEffect('F',72))
        if (hasUpgrade('F',74)) mult = mult.mul(upgradeEffect('F',74)[1])
        mult = mult.mul(tmp.G.gc2ef)
        if(mil('I',0)) mult = mult.mul(5)
        let br = n('eee10')
        if(mil('I',10)) br = n('eee7')
        if(gcs('I',44) && player.G.points.gte(br)) mult = mult.mul('eee500')
        return mult
    },
    autoUpgrade() { return (gcs('I',102)) },
    branches: ['F'],
    
    milestones: {
        0: {
            requirementDescription: "G总量 30 (1)",
            done() { return player[this.layer].total.gte('30') }, 
            effectDescription: "自动购买刻度推进。",
            toggles: [ ['G',"auto1"] ]
        },
        1: {
            requirementDescription: "G总量 300 (2)",
            done() { return player[this.layer].total.gte('300') }, 
            effectDescription: "刻度推进不重置任何东西。"
        },
        2: {
            requirementDescription: "G总量 2e4 (3)",
            done() { return player[this.layer].total.gte('2e4') && hasMilestone('Z',15) },
            unlocked() { return hasMilestone('Z',15) }, 
            effectDescription: "解锁一个挑战，G4 更强。"
        },
        3: {
            requirementDescription: "G总量 1e9 (4)",
            done() { return player[this.layer].total.gte('1e9') && hasMilestone('Z',15) },
            unlocked() { return hasMilestone('Z',15) },  
            effectDescription: "最大购买维度。"
        },
        4: {
            requirementDescription: "G总量 1e100 (5)",
            done() { return player[this.layer].total.gte('1e100') && hasMilestone('Z',16) }, 
            unlocked() { return hasMilestone('Z',16) },
            effectDescription: "自动购买 Gb1-3。",
            toggles: [ ['G',"auto2"] ]
        },
        5: {
            requirementDescription: "G总量 1e800 (6)",
            done() { return player[this.layer].total.gte('1e800') && hasMilestone('Z',17) }, 
            unlocked() { return hasMilestone('Z',17) },
            effectDescription: "解锁另一个挑战。"
        },
        6: {
            requirementDescription: "G总量 1e40000 (7)",
            done() { return player[this.layer].total.gte('1e40000') && hasMilestone('Z',18) }, 
            unlocked() { return hasMilestone('Z',18) },
            effectDescription: "获得被动 G。"
        },
        7: {
            requirementDescription: "G总量 e9.25e6 (8)",
            done() { return player[this.layer].total.gte('e9.25e6') && hasMilestone('Z',19) }, 
            unlocked() { return hasMilestone('Z',19) },
            effectDescription: "Gc3p 更强，解锁另一个挑战。"
        },
        8: {
            requirementDescription(){ if(hasMilestone('Z',21)) return "G总量 e7e7 (9)"; return "G总量 e2.02e8 (9)" },
            done() { return player[this.layer].total.gte(hasMilestone('Z',21)?'e7e7':'e2.02e8') && hasMilestone('Z',19) }, 
            unlocked() { return hasMilestone('Z',19) },
            effectDescription: "Gc1p/Gc2p 指数分别为 0.87/0.75，Gb1 基础值 +0.5。"
        },
        9: {
            requirementDescription: "G总量 e2.5e8 (10)",
            done() { return player[this.layer].total.gte('e2.5e8') && hasMilestone('Z',21) }, 
            unlocked() { return hasMilestone('Z',21) },
            effectDescription: "自动购买 F2 维度，Gc1p/Gc2p 指数分别为 0.9/0.8。",
            toggles: [ ['G',"auto3"] ]
        },
        10: {
            requirementDescription: "G总量 e1e9 (11)",
            done() { return player[this.layer].total.gte('e1e9') && hasMilestone('Z',21) }, 
            unlocked() { return hasMilestone('Z',21) },
            effectDescription: "最大购买 F2d1，G21 ^2，被动获得 Gc1p (^0.95)。"
        },
        11: {
            requirementDescription: "G总量 e1e11 (12)",
            done() { return player[this.layer].total.gte('e1e11') && hasMilestone('Z',21) }, 
            unlocked() { return hasMilestone('Z',21) },
            effectDescription: "被动获得 Gc2p (^0.9)。Gc2p 乘算 Gc1p。Gc2p 指数为 0.85。"
        },
        12: {
            requirementDescription: "G总量 e8e11 (13)",
            done() { return player[this.layer].total.gte('e8e11') && hasMilestone('Z',21) }, 
            unlocked() { return hasMilestone('Z',21) },
            effectDescription: "被动获得 Gc3p (^0.2)。Gc3p 乘算 Gc2p。Gc3p 指数为 0.25。"
        },
        13: {
            requirementDescription: "G总量 e8.6e12 (14)",
            unlocked() { return hasMilestone('Z',22) },
            done() { return player[this.layer].total.gte('e8.6e12') && hasMilestone('Z',22) }, 
            effectDescription: "被动获得 Gc4p (^0.2)。Gc4p 乘算 Gc3p。Gc3p 指数为 0.75，Gc4p 指数为 0.25。"
        },
        14: {
            requirementDescription: "G总量 e9e15 (15)",
            done() { return player[this.layer].total.gte('e9e15') && hasMilestone('Z',23) }, 
            unlocked() { return hasMilestone('Z',23) },
            effectDescription(){ if(hasMilestone('Z',27)) return "Gs 获取量 x10。"; return "解锁 Gs。" }
        },
        15: {
            requirementDescription: "G总量 ee15000 (16)",
            done() { return player[this.layer].total.gte('ee15000') && hasMilestone('Z',25) }, 
            unlocked() { return hasMilestone('Z',25) },
            effectDescription: "G28 效果为 1.3，Gs 效果 ^1.5。"
        },
        16: {
            requirementDescription: "G总量 eee10 (17)",
            done() { return player[this.layer].total.gte('eee10') && hasMilestone('Z',25) }, 
            unlocked() { return hasMilestone('Z',25) },
            effectDescription: "自动购买 Gsb1-3。",
            toggles: [ ['G',"auto4"] ]
        },
        17: {
            requirementDescription: "G总量 eee50 (18)",
            done() { return player[this.layer].total.gte('eee50') && hasMilestone('Z',27) }, 
            unlocked() { return hasMilestone('Z',27) },
            effectDescription: "调整 Gsb1/Gsb3 消耗并支持最大购买。调整 Gsb4/Gsb6/Gsb7/Gsb8 消耗。"
        },
        18: {
            requirementDescription: "G总量 1F5 (eeee10) (19)",
            done() { return player[this.layer].total.gte('eeee10') && hasMilestone('Z',30) },
            unlocked() { return hasMilestone('Z',30) },
            effectDescription(){ 
                if(player.Z.points.gte(33)) return "自动购买 Gsb4-5。";
                if(player.Z.points.gte(32)) return "自动购买 Gsb4-5。Gsb5 更便宜。";
                return "自动购买 Gsb4-5。改变 Gs 效果公式。"
            },
            toggles: [ ['G',"auto5"] ]        
        },
        19: {
            requirementDescription: "G总量 2.41F5 (eee1.095e257) (20)",
            done() { return player[this.layer].total.gte('eee1.095e257') && hasMilestone('Z',31) },
            unlocked() { return hasMilestone('Z',31) },
            effectDescription: "Gsb1-5 和 Gsb7 基础值 x1.1。Gsb7 和 Gsb8 更便宜。在 1e4555 Gse 时提升 Gsb6 效果，在 1e6415 Gse 时提升 Gsb9/10 效果。"
        },
        20: {
            requirementDescription: "G总量 2.9135F5 (eee5e819) (21)",
            done() { return player[this.layer].total.gte('eee5e819') && hasMilestone('Z',31) }, 
            unlocked() { return hasMilestone('Z',31) },
            effectDescription(){ return "自动购买 Gsb7-8，解锁新的 Gt，Gsb7 更便宜，在 1e13144 Gse 时提升 Gsb7 软上限 / 保留 Gt1-2 并在 1e42090 Gse 时强化 Gt1。" + (player.Z.points.gte(34) ? "/ 在 1e24000 Gse 时 Gsb13-15 更便宜" : "") + "/ t1 ^3 并在 1e42090 Gse 时保留 t3-4。" }
        },
        21: {
            requirementDescription: "G总量 5.39445F5 (eeee2.48e5) (22)",
            done() { return player[this.layer].total.gte('eeee2.48e5') && hasMilestone('Z',31) }, 
            unlocked() { return hasMilestone('Z',31) },
            effectDescription: "从第 5 行解锁一条新路径，Gsb6 和 Gsb9 软上限 +0.005。"
        },
        22: {
            requirementDescription: "GG 总量 465 (23)",
            done() { return player.G.GGtot.gte('465') && hasMilestone('Z',31) }, 
            unlocked() { return hasMilestone('Z',31) },
            effectDescription: "为第 5-7 行升级树解锁一个 QoL。"
        },
        23: {
            requirementDescription: "GG 总量 489 (24)",
            done() { return player.G.GGtot.gte('489') && hasMilestone('Z',31) }, 
            unlocked() { return hasMilestone('Z',31) },
            effectDescription: "解锁更多 r8-9 升级。"
        },
        24: {
            requirementDescription: "GG 总量 708 (25)",
            done() { return player.G.GGtot.gte('708') && hasMilestone('Z',31) }, 
            unlocked() { return hasMilestone('Z',31) },
            effectDescription: "Gsb9 更便宜。"
        },
        25: {
            requirementDescription: "Gse 总量 e2.5e7 (26)",
            done() { return player.G.Gsetot.gte('e2.5e7') && hasMilestone('Z',31) },
            unlocked() { return hasMilestone('Z',31) },
            effectDescription: "自动购买 GG 获取，保留 Gt5/8，强化 Gt r9-10。",
            toggles: [ ['G',"auto7"] ] 
        },
        26: {
            requirementDescription: "GG 总量 1503 (27)",
            done() { return player.G.GGtot.gte('1503') && hasMilestone('Z',34) }, 
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "Gsb9 更便宜。"
        },
        27: {
            requirementDescription: "GG 总量 1950 (28)",
            done() { return player.G.GGtot.gte('1950') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "保留 t6,7,13，babs 无消耗。"
        },
        28: {
            requirementDescription: "GG 总量 2789 (29)",
            done() { return player.G.GGtot.gte('2789') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "保留 t19。"
        },
        29: {
            requirementDescription: "GG 总量 3200 (30)",
            done() { return player.G.GGtot.gte('3200') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "自动购买 Gsb13。",
            toggles: [ ['G',"auto9"] ] 
        },
        30: {
            requirementDescription: "Gse 总量 e1.34e26 (31)",
            done() { return player.G.Gsetot.gte('e1.34e26') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "sb10 上限 +5，i 效果指数 +0.0025，解锁 GsR。"
        },
        31: {
            requirementDescription: "GsR 总量 1e301 (32)",
            done() { return player.G.Gsr.gte('1e301') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "sb6 指数 +0.03，超对数增量 +0.001，解锁 dH。"
        },
        32: {
            requirementDescription: "GsR 总量 5e927 (33)",
            done() { return player.G.Gsr.gte('5e927') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "e 削弱 +0.005（在 3e1071 改进），移除 dH1 缩放，dHp3-4 缩放 -0.05，在 1e1164/1e1284/5e1432 削弱 rs。"
        },
        33: {
            requirementDescription: "Gse 总量 e9.918e118 (34)",
            done() { return player.G.Gsetot.gte('e9.918e118') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "削弱 r1/dhp2，移除 sb6 限制，在 4 dH5 强化 dH5，在 2e6935/5e7628 GsR 强化 dHs。"
        },
        34: {
            requirementDescription: "Gse 总量 e1.7e199 (35)",
            done() { return player.G.Gsetot.gte('e1.7e199') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "自动购买 sb6，hb1/y1 缩放 -0.01，在 e1.48e480 削弱 dH5（再次在 e2.93e495/e2.86e603）。<br>提示：sb6 消耗在 2000 (10^10^x^2.25) 处跳跃。",
            toggles: [ ['G',"auto8"] ] 
        },
        35: {
            requirementDescription: "Gse 总量 e1e652 (36)",
            done() { return player.G.Gsetot.gte('e1e652') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "最大购买 sb6，将 ha/hy 膨胀至 1.01，e 第一次削弱 +0.03（在 ee767 时为 0.04）。"
        },
        36: {
            requirementDescription: "Gse 总量 e1e1580 (37)",
            done() { return player.G.Gsetot.gte('e1e1580') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "最大购买 r2/4，e 削弱在 e7.5e1581/ee1658/ee2010 分别为 0.87/0.9/0.94，并最终用 G75 移除它。"
        },
        37: {
            requirementDescription: "Gse 总量 e1e2125 (38)",
            done() { return player.G.Gsetot.gte('e1e2125') },
            unlocked() { return hasMilestone('Z',34) },
            effectDescription: "i 效果 +0.005，H36 大幅改动，最大购买 sb11-12。"
        },
    },
    
    m13r(){
        let r = n('ee1000')
        if(n(challengeCompletions('I',22)).gte(1)) r = n('ee250')
        if(n(challengeCompletions('I',22)).gte(3)) r = n('ee100')
        if(n(challengeCompletions('I',22)).gte(5)) r = n('ee40')
        if(mil('J',1)) r = n('ee20')
        return r
    },
    
    doReset(layer){
        if (layer=="H") {        
            let keep = ["milestones","upgrades","challenges"]
            layerDataReset(this.layer, keep)
        }
        if (layer=="I") {        
            let keep = []
            if(gcs('I',46)) keep.push("challenges")
            layerDataReset(this.layer, keep)
            if(gcs('I',15)) player[this.layer].milestones=[0,1]
            if(gcs('I',23)) player[this.layer].milestones.push(17)
            if(gcs('I',21)) {
                player[this.layer].milestones.push(25)
                player[this.layer].upgrades.push(115)
            }
            if(gcs('I',16)) player[this.layer].milestones.push(27,28,37)
            if(gcs('I',24)) player[this.layer].milestones.push(2,3,4,5,6,7,8,9,10,11,12,33,36)
            if(gcs('I',46)) player[this.layer].milestones.push(18,19,20,21,22,23,24,26)
            if(gcs('I',66)) player[this.layer].milestones.push(29,35)
            if(mil('I',21)) player[this.layer].milestones.push(15,16,30,31,32,34,37)
            if(n(challengeCompletions('I',22)).gte(1)) player[this.layer].upgrades.push(152)
            if(n(challengeCompletions('I',22)).gte(2)) player[this.layer].upgrades.push(141,142,143,144,145)
            if(gcs('I',86)) player[this.layer].upgrades.push(61,62,63,64,65,134,135)
            if(mil('J',1)) {
                scs("G",21,1), scs("G",31,1), scs("G",32,1), scs("G",33,1), scs("G",41,1), scs("G",42,1), scs("G",43,1), scs("G",44,1), scs("G",51,1)
                , scs("G",61,1), scs("G",62,1), scs("G",63,1), scs("G",71,1), scs("G",72,1), scs("G",73,1), scs("G",81,1), scs("G",82,1), scs("G",83,1), scs("G",91,1)
                , scs("G",101,1), scs("G",102,1), scs("G",103,1), scs("G",104,1)
                , scs("G",111,1), scs("G",112,1), scs("G",121,1), scs("G",122,1), scs("G",131,1)
            }
        }
    },
    
    microtabs: {
        stuff: {       
            "main": {
                unlocked() { return true },
                content: [ ["raw-html", () => `<h4 style="opacity:.5">当达到无限 F1 时获得 G<br>（类似反物质维度）。</h4>`], ["upgrades",[1, 2, 3, 4, 5]] ]}, 
            "mil": {
                unlocked() { return true },
                content: ["milestones"]
            },
            "buy": {
                unlocked() { return (upg("G", 25)) },
                content: [["raw-html", () => `<h4 style="opacity:.5">类似于 Eb，Gb 不消耗 G。</h4>`], ["buyables",[1]]]
            },
            "chal": {
                unlocked() {return (mil("G",2))},
 content: [["raw-html", () => `<h4 style="opacity:.5">G chal is about F dim,dont decrease main game production.</h4>`]

                ,["display-text",  function() {if(n(challengeCompletions("G", 11)).gte(3)) return "你拥有 <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'>" 
            + format(player.G.Gc1p) 
            + "</h3> 使 F 维度乘以 <h3 style='color: #694444; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gc1ef) + "x</h3>。<br>" + "<h4>" + format(tmp.G.gc1g) + " Gc1p/秒 (在 Gc1 中需要 1e1080 F1)<h4> " 
            }],
["display-text", function() {
    if(n(challengeCompletions("G", 12)).gte(3))
        return "你拥有 <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'>" 
            + format(player.G.Gc2p) 
            + "</h3> Gc2p，使 G 乘以 <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'> " 
            + format(tmp.G.gc2ef) 
            + "x</h3>。<br>" 
            + "<h4>" 
            + format(tmp.G.gc2g) 
            + " Gc2p/秒 (在 Gc2 中需要 1e3050 F1)<h4>"
}],

["display-text", function() {
    if(n(challengeCompletions("G", 21)).gte(3))
        return "你拥有 <h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" 
            + format(player.G.Gc3p) 
            + "</h3> Gc3p，" 
            + (player.Z.points.gte(23) ? "维度" : "Fd8") 
            + "每次购买乘数 x<h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" 
            + format(tmp.G.gc3ef) 
            + " </h3>更大。<br>" 
            + "<h4>" 
            + format(tmp.G.gc3g) 
            + " Gc3p/秒 (在 Gc3 中需要 1e168000 F1)<h4>"
}],

["display-text", function() {
    if(n(challengeCompletions("G", 22)).gte(3))
        return "你拥有 <h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" 
            + format(player.G.Gc4p) 
            + "</h3> Gc4p，维度每次购买加成 +<h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" 
            + format(tmp.G.gc4ef,3) 
            + "</h3>。<br>" 
            + "<h4>" 
            + format(tmp.G.gc4g) 
            + " Gc4p/秒 (在 Gc4 中需要 e2.35e9 F1)<h4>"
}],
                "challenges"]},
            "Gs": {
                unlocked() { return (mil("G", 14) || player.Z.points.gte(26)) },
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">灵感来自 '瘟疫树' ---时间墙警告！</h4>`],
                    ["raw-html", () => `<h4 style='color: #C52C14'>提示：当你获得第一个 Gs 时可能需要刷新页面！</h4>`],
                    ["display-text", () => "你拥有 <h3 style='color: #988462; text-shadow: 0 0 2px #c2b280'>" + formatSmall(player.G.Gs, 5) + "</h3> Gs，点数获取 " + (player.Z.points.gte(30)?"指数":"") + "^ <h3 style='color: #988462; text-shadow: 0 0 2px #c2b280'> " + format(player.Z.points.gte(30)?tmp.G.gsef2:tmp.G.gsef1, 5) + "</h3>。<br>" + "<h4>" + formatSmall(tmp.G.gsb) + " Gs/秒 " + (player.Z.points.gte(30)?"":("(需要 "+(player.Z.points.gte(26)?"1e10":"ee17")+" G)")) + "</h4>"],
                    ["display-text", function() { if(upg("G", 83) || player.Z.points.gte(30)) return "你拥有 <h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsi) + "</h3> Gsi，通过 lg(Gs)^<h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsief) + "</h3> 增强 Gs (x<h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsir) +"</h3> Gs)<br>" + "<h4>" + format(tmp.G.gsib) + " Gsi/秒 " + (player.Z.points.gte(30)?"":("(需要 1e780 Gs)")) + "</h4>" }],
                    ["display-text", function() { if(upg("G", 101) || player.Z.points.gte(34)) return "你拥有 <h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gse) + "</h3> Gse，通过 lg(Gsi)^<h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gseef) + "</h3> 增强 Gsi (x<h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gser) +"</h3> Gsi)<br>" + (player.Z.points.gte(36)?"Gsi 效果 ^":"并增强 Gsi 效果指数 +") + "<h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gser2) +"</h3> (最多 "+format(tmp.G.ehp)+")<br>\n" + format(tmp.G.gseb) + " Gse/秒 " + (player.Z.points.gte(34)?"":("(需要 1e345 Gsi)")) + "</h4>" }],
                    ["display-text", function() { if(upg("G", 115) && player.Z.points.gte(34)) return "你拥有 <h3 style='color: #00FF00; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsq) + "</h3> Gsq，通过 lg(Gse)^<h3 style='color: #00FF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsqef) + "</h3> 增强 Gse (x<h3 style='color: #00FF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsqr) +"</h3> Gse)<br>" + format(tmp.G.gsqb) + " Gsq/秒 " }],
                    ["display-text", function() { if(upg("G", 175) && player.Z.points.gte(36)) return "你拥有 <h3 style='color: #FFFF00; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsg) + "</h3> Gsg，通过 lg(Gsq)^<h3 style='color: #FFFF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsgef) + "</h3> 增强 Gsq (x<h3 style='color: #FFFF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsgr) +"</h3> Gsq)<br>" + format(tmp.G.gsgb) + " Gsg/秒 " }],
                    ["row",[["buyable",21],["buyable",22],["buyable",23]]],
                    ["row",[["buyable",31],["buyable",32],["buyable",33]]],
                    ["row",[["buyable",41],["buyable",42],["buyable",43]]],
                    ["row",[["buyable",44],["buyable",51],["buyable",52]]],
                    ["row",[["buyable",81],["buyable",82],["buyable",83]]],
                    ["row",[["buyable",91],["buyable",92],["buyable",93]]],
                    ["upgrades",[6,7,8,9,10,11,12,16,13,17,18]]
                ]
            },
            "GG": {
                unlocked() { return (upg("G", player.Z.points.gte(35)?82:115)) },
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">欢迎来到第一个升级树 ---策略现在变得重要了！</h4>`],
                    ["display-text", () => "你拥有 <h3 style='color: #375DB4; text-shadow: 0 0 2px #c2b280'>" + format(player.G.GG) + "</h3> GG ("+"<h3 style='color: #375DB4; text-shadow: 0 0 2px #c2b280'>" + format(player.G.GGtot)+'</h3> 总计)'],
                    ["buyables",[6]],
                    "clickables"
                ]
            }, 
            "GsR": {
                unlocked() { return (mil("G",30)) },
                content: [
                    ["raw-html", () => `<h4 style="opacity:.5">Gs 的最后一部分。</h4>`],
                    ["display-text", () => "你拥有 <h3 style='color: #6DA462; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsr) + "</h3> GsR，将 Gse 提升至 ^<h3 style='color: #6DA462; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsref,4) + "</h3> 并且极其苛刻，超对数提升至 ^<h3 style='color: #6DA462; text-shadow: 0 0 2px #c2b280'>"+ format(tmp.G.gsref2,4) +"。<h3><br>" + "<h4>" + format(tmp.G.gsrb) + " GsR/秒 (需要 e2.5e26 Gse)<h4>"],
                    ["buyables",[7]],
                    ["upgrades",[14,15]]
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
            title:'G1',
            description: "所有 F 维度 x2。",         
            cost: new Decimal(1),
        },
        12: {
            title:'G2',
            description: "F 维度每次购买乘数 +0.1。",         
            cost: new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 11)) },
        },
        13: {
            title:'G3',
            description: "F 维度更便宜。",
            cost(){ if(hasMilestone('Z',15)) return new Decimal(1); return new Decimal(2) },
            unlocked() { return (hasUpgrade(this.layer, 12)) },
        },
        14: {
            title:'G4',
            description: "G 总量乘以 F。",         
            cost: new Decimal(100),
            effect() { 
                let ef = player.G.total.add(1);
                if (hasMilestone('G',2)) ef = player.G.total.add(1).pow(3)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 13) && hasMilestone('Z',15)) },
        },
        15: {
            title:'G5',
            description: "F30 ^1.1。",         
            cost: new Decimal(100),
            unlocked() { return (hasUpgrade(this.layer, 14)) },
        },
        21: {
            title:'G6',
            description: "Ek 更强，G 总量增强所有维度。",         
            cost: new Decimal(200),
            effect() { 
                return Decimal.pow(10, player.G.total.add(10).log10().pow(hasUpgrade("G",45)?0.95:hasUpgrade("G",43)?0.9:0.5));
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 15)) },
        },
        22: {
            title:'G7',
            description: "Ek 更强，G 总量提升 Eb10，F 维度更便宜。",         
            cost: new Decimal(1000),
            effect() { 
                let ef = player.G.total.add(10).log(10).pow(0.2).div(100).add(1)
                if(player.Z.points.gte(19)) ef = player.G.total.add(10).log(10).add(10).log(10).div(100).add(1)
                return ef;
            },
            effectDisplay() { return '^' + format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 21)) },
        },
        23: {
            title:'G8',
            description: "G 总量提升 F30。",         
            cost: new Decimal(1e5),
            effect() { 
                let ef = player.G.total.add(10).log(10).pow(0.2).div(100).add(1)
                if(player.Z.points.gte(19)) ef = player.G.total.add(10).log(10).add(10).log(10).div(100).add(1)
                return ef;
            },
            effectDisplay() { return '^' + format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 22)) },
        },
        24: {
            title:'G9',
            description: "维度每次购买乘数 +0.1。",         
            cost: new Decimal(5e5),
            unlocked() { return (hasUpgrade(this.layer, 23)) },
        },
        25: {
            title:'G10',
            description(){ if(hasMilestone("Z",23)) return "增强 Bb5 并解锁 G 可购买项。"; return "Bb5 在 ^0.01 效果下也是乘算的，并解锁可购买项。" },         
            cost: new Decimal(2e7),
            effect() { 
                let exp = 0.01
                if(hasMilestone('F',17)) exp = Decimal.add(exp,0.01)
                if(hasUpgrade('G',32)) exp = Decimal.add(exp,0.01)
                if(hasMilestone("Z",23)) return Decimal.add(exp, 1)
                let ef = Decimal.pow(buyableEffect('B',23), exp)
                return ef;
            },
            effectDisplay() { if(hasMilestone("Z",23)) return '^' + format(this.effect()); return 'x' + format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 24)) },
        },
        31: {
            title:'G11',
            description: "在 1e1200 以上增强 F1 效果。",         
            cost: new Decimal('1e14'),
            unlocked() { return (challengeCompletions("G", 11)>=3 && player.Z.points.gte(17)) },
        },
        32: {
            title:'G12',
            description: "G10 更强。",         
            cost: new Decimal('1e42'),
            unlocked() { return (hasUpgrade(this.layer, 31)) },
        },
        33: {
            title:'G13',
            description: "Gb2 ^2，刻度加速效果乘数 +0.005。",         
            cost: new Decimal('1e43'),
            unlocked() { return (hasUpgrade(this.layer, 32)) },
        },
        34: {
            title:'G14',
            description: "GC1p 获取 ^10。",         
            cost: new Decimal('1e135'),
            unlocked() { return (hasUpgrade(this.layer, 33)) },
        },
        35: {
            title:'G15',
            description: "F 维度更便宜。",     
            cost: new Decimal('1e157'),
            unlocked() { return (hasUpgrade(this.layer, 34)) },
        },
        41: {
            title:'G16',
            description: "G 提升 Gcps。",         
            cost: new Decimal('e33333333'),
            effect() { 
                let exp = n(0.015)
                if(hasUpgrade('G',44)) exp = Decimal.add(exp,0.005)
                if(hasUpgrade('G',45)) exp = Decimal.add(exp,0.025)
                if(hasUpgrade('G',54)) exp = Decimal.add(exp,0.015)
                let ef = player.G.points.add(1e10).log(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return '^' + format(this.effect(),3) },
            unlocked() { return (challengeCompletions("G", 21)>=5) },
        },
        42: {
            title:'G17',
            description: "Gc1p-Gc2p 指数 +0.02，提升 Gb 基础值。",         
            cost: new Decimal('e39e6'),
            unlocked() { return (hasUpgrade(this.layer, 41)) },
        },
        43: {
            title:'G18',
            description: "Gc1p/Gc2p 指数分别为 0.57/0.7，G6 指数为 0.9。",         
            cost: new Decimal('e435e5'),
            unlocked() { return (hasUpgrade(this.layer, 42)) },
        },
        44: {
            title:'G19',
            description: "G16 指数为 0.02，F39 更强。",         
            cost(){ if(hasMilestone("Z",21)) return new Decimal("e55e6"); return new Decimal('e84848484') },
            unlocked() { return (hasUpgrade(this.layer, 43)) },
        },
        45: {
            title:'G20',
            description: "G16 指数为 0.04，Gc3 效果基础值为 0.1，G6 指数为 0.95，Gc2 效果 ^2。",
            cost(){ if(hasMilestone("Z",22)) return new Decimal("e62e6"); return new Decimal('ee8') },
            unlocked() { return (hasUpgrade(this.layer, 44)) },
        },
        51: {
            title:'G21',
            description: "Gc4p 增强 F2 维度，将其指数提升 0.01。Gc1p 生成 Fd8。",         
            cost: new Decimal('e1.6e10'),
            effect() { 
                let exp = n(1.25)
                if(hasMilestone('G',10)) exp = Decimal.mul(exp,2)
                let ef = player.G.Gc4p.add(10).log(10).pow(exp).div(50).add(0.98)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (hasMilestone(this.layer,9)) },
        },
        52: {
            title:'G22',
            description: "Gb1 ^1.3，解锁另外 2 个 F2 维度。刻度加速影响 Fd8 生成。",         
            cost: new Decimal('e2.8e10'),
            unlocked() { return (hasUpgrade(this.layer, 51)) },
        },
        53: {
            title:'G23',
            description: "Gcps 效果更好，F1 增强 F2。",         
            cost: new Decimal('e5.1e10'),
            effect() { 
                let exp = n(0.4)
                let ef = player.F.F1.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 52)) },
        },
        54: {
            title:'G24',
            description: "G16 指数为 0.055，G21 增强刻度加速。",  
            cost(){ return new Decimal(player.Z.points.gte(23)?"e2.34e11":'e2.25e12') },
            effect() { 
                let exp = n(0.25)
                if(hasUpgrade('G',55)) exp = Decimal.add(exp,0.05)
                let o = upgradeEffect('G',51)
                let ef = Decimal.pow(o.add(10).log(10), exp).div(4).add(0.75)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect(),3) },
            unlocked() { return (hasUpgrade(this.layer, 53)) },
        },
        55: {
            title:'G25',
            description: "Gc1p/Gc2p/Gc3p/Gc4p 指数分别为 0.95/0.9/0.85/0.8，G24 指数为 0.3，在满 F1 时获取 Gc 能量。",     
            cost(){ return new Decimal(player.Z.points.gte(25)?Decimal.pow(10,1e16/3):player.Z.points.gte(24)?"e1.65e14":'e3.8e13') },
            unlocked() { return (hasMilestone(this.layer, 13)) },
        },
        //Gs 升级
        61: {
            title:'G26',
            description(){ 
                if(hasMilestone('Z',34)) return "Gs 基础和 Gsi x50，Gse x10";
                if(hasMilestone('Z',31)) return "Gs 基础和 Gsi x50";
                if(hasMilestone('Z',29)) return "Gs 基础 x50";
                if(hasMilestone('Z',28)) return "Gs 基础 x2";
                return "Gsb1 消耗基础为 5。Gs 基础 x50。";
            },
            cost(){ return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',34)?200:hasMilestone('Z',33)?'1e10':hasMilestone('Z',32)?'1e250':hasMilestone('Z',30)?'1e120':hasMilestone('Z',29)?'1e80':hasMilestone('Z',28)?10:1) },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            unlocked() { return (hasMilestone(this.layer, 14) && hasMilestone('Z', 24)) || hasMilestone('Z',25) },
        },
        62: {
            title:'G27',
            description: "Gs 效果 ^1.5，基础 x2 且 ^2。",         
            cost(){ return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',33)?'1e18':hasMilestone('Z',32)?'1e360':hasMilestone('Z',31)?'1e270':hasMilestone('Z',30)?'1e210':hasMilestone('Z',29)?'1e170':hasMilestone('Z',28)?'1e90':hasMilestone('Z',27)?'1e50':hasMilestone('Z',25)?'1e33':'1e34') },
            currencyLocation() { return player[this.layer] },
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            unlocked() { return (hasUpgrade(this.layer, 61)) },
        },
        63: {
            title:'G28',
            description(){ 
                if(hasMilestone('Z',34)) return "Gsb1、Gsb4 和 Gsb7 效果基础值 x1.2。";
                if(hasMilestone('Z',33)) return "Gsb1 和 Gsb4 效果基础值 x1.2。";
                if(hasMilestone('Z',29)) return "Gsb1 效果基础值 x1.2。";
                return "解锁另一个可购买项，Gsb1 效果基础值 x1.2。";
            },
            cost(){ return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',33)?'1e21':hasMilestone('Z',32)?'1e550':hasMilestone('Z',31)?'1e345':hasMilestone('Z',30)?Number.MAX_VALUE:hasMilestone('Z',29)?'1e270':hasMilestone('Z',28)?'1e110':hasMilestone('Z',27)?'1e80':hasMilestone('Z',26)?'6.666e66':hasMilestone('Z',25)?'5.555e55':'4.444e44') },
            currencyLocation() { return player[this.layer] },
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            unlocked() { return (hasUpgrade(this.layer, 62)) },
        },
        64: {
            title:'G29',
            description(){ 
                if(hasMilestone('Z',32)) return "Gsb2 基础 x1.15，Gs 效果 ^2";
                if(hasMilestone('Z',30)) return "Gsb2 基础 x1.15，Gs 效果 ^2，F2 效果更佳";
                if(hasMilestone('Z',29)) return "Gsb2 基础 x1.15，Gs 效果 ^2，F1 效果更佳";
                if(hasMilestone('Z',28)) return "Gsb2 基础 x1.15，Gs 效果 ^2";
                return "Gsb2 基础 x1.15，Gs 效果指数 +0.4。";
            },
            cost(){ return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',33)?'1e25':hasMilestone('Z',32)?'1e640':hasMilestone('Z',31)?'1e420':hasMilestone('Z',30)?'1e380':hasMilestone('Z',29)?'1e350':hasMilestone('Z',28)?'1e180':hasMilestone('Z',27)?'1e120':hasMilestone('Z',26)?'1e106':'8.888e88') },
            currencyLocation() { return player[this.layer] },
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            unlocked() { return (hasUpgrade(this.layer, 63) && hasMilestone('Z', 25)) },
        },
        65: {
            title:'G30',
            description(){ 
                if(hasMilestone('Z',35)) return "Gsb1-7 根据 G 升级数量变得更便宜。每个 G 升级额外将 Gsb6 基础提升 +0.01";
                if(hasMilestone('Z',34)) return "Gsb1-7 根据 Gs 升级数量变得更便宜。每个 Gs 升级额外将 Gsb6 基础提升 +0.01";
                if(hasMilestone('Z',32)) return "Gsb1-6 根据 Gs 升级数量变得更便宜。每个 Gs 升级额外将 Gsb6 基础提升 +0.01";
                return "Gs 可购买项根据 Gs 升级数量变得更便宜。";
            },
            cost(){ return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',34)?'1e35':hasMilestone('Z',33)?'1e26':hasMilestone('Z',32)?'1e700':hasMilestone('Z',30)?'1e450':hasMilestone('Z',29)?'1e390':hasMilestone('Z',28)?'1e182':hasMilestone('Z',27)?'1e128':hasMilestone('Z',26)?'1e110':'1e100') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            effect() { 
                let b = n(player[this.layer].upgrades.length)
                let c = n(0.995)
                if(hasUpgrade('G',95) || player.Z.points.gte(33)) c = n(0.994)
                if(hasUpgrade('G',95) && player.Z.points.gte(32)) c = n(0.99)
                if(hasUpgrade('G',111) && player.Z.points.lt(30)) c = n(0.99)
                if(hasMilestone('Z',35)) return c.pow(b)
                let ef = n(c).pow(b.sub(player.Z.points.gte(35) && hasUpgrade('G',85)?Math.max(50-player[this.layer].upgrades.length,0):25).max(0))
                return ef;
            },
            effectDisplay() { return '^' + format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 64)) },
        },
        71: {
            title:'G31',
            description(){ 
                if(hasMilestone('Z',34)) return "Gsb1、Gsb4 和 Gsb7 基础 x1.1，Gs 效果 ^2";
                if(hasMilestone('Z',33)) return "Gsb1 和 Gsb4 基础 x1.1，Gs 效果 ^2";
                if(hasMilestone('Z',28)) return "Gsb1 基础 x1.1，Gs 效果 ^2";
                return "Gsb1 基础 x1.1，Gs 效果指数 +0.4。";
            },
            cost(){ return new Decimal(hasMilestone('Z',35)?'1e150':hasMilestone('Z',34)?'1e45':hasMilestone('Z',33)?'1e28':hasMilestone('Z',32)?'1e860':hasMilestone('Z',31)?'1e530':hasMilestone('Z',30)?'1e540':hasMilestone('Z',29)?'1e460':hasMilestone('Z',28)?'1e225':hasMilestone('Z',27)?'1e144':'2e125') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            unlocked() { return (hasUpgrade(this.layer, 65)) },
        },
        72: {
            title:'G32',
            description(){ 
                if(hasMilestone('Z',33)) return "对数 Gs 增强 Gs 和 Gsi。";
                if(hasMilestone('Z',29)) return "对数 Gs 增强 Gs。";
                return "对数 Gs 增强 Gs，解锁另一个可购买项。";
            },
            cost(){ return new Decimal(hasMilestone('Z',35)?'1e180':hasMilestone('Z',34)?'1e67':hasMilestone('Z',33)?'1e29':hasMilestone('Z',32)?'1e980':hasMilestone('Z',31)?'1e590':hasMilestone('Z',30)?'1e610':hasMilestone('Z',29)?'1e530':hasMilestone('Z',28)?'1e270':hasMilestone('Z',27)?'1e170':'1e150') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            effect() { 
                let ef = player[this.layer].Gs.add(10).log(10).pow(hasMilestone('Z',33)?1:6)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 71)) },
        },
        73: {
            title:'G33',
            description(){ 
                if(hasMilestone('Z',32)) return "Gsb6 加成到 Gsb5 和 Gsb3。";
                if(hasMilestone('Z',31)) return "G30 应用于 Gsb6。";
                if(hasMilestone('Z',30)) return "G30 应用于 Gsb5。";
                return "G30 应用于 Gsb4。";
            },       
            cost(){ return new Decimal(hasMilestone('Z',35)?'1e190':hasMilestone('Z',34)?'1e70':hasMilestone('Z',33)?'1e40':hasMilestone('Z',32)?'1e1140':hasMilestone('Z',31)?'1e720':hasMilestone('Z',30)?'1e750':hasMilestone('Z',29)?'1e660':hasMilestone('Z',28)?'1e435':hasMilestone('Z',27)?'1e300':hasMilestone('Z',26)?'5e278':'1e270') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            unlocked() { return (hasUpgrade(this.layer, 72)) },
        },
        74: {
            title:'G34',
            description: "Gsb2 增强 Gsb1 基础。",       
            cost(){ return new Decimal(hasMilestone('Z',35)?'1e200':hasMilestone('Z',34)?'1e73':hasMilestone('Z',33)?'1e44':hasMilestone('Z',32)?'1e1200':hasMilestone('Z',31)?'1e740':hasMilestone('Z',30)?'1e770':hasMilestone('Z',29)?'1e686':hasMilestone('Z',28)?'1e446':hasMilestone('Z',27)?'1e310':hasMilestone('Z',26)?'1e286':'1e280') },
            currencyLocation() { return player[this.layer] },
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            effect() { 
                let b = n(getBuyableAmount('G',22))
                let ef = b.pow(0.75).div(80).add(1)
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 73)) },
        },
        75: {
            title:'G35',
            description(){ 
                if(hasMilestone('Z',34)) return "根据 Gs 升级数量增强 Gsb1/Gsb4/Gsb7 基础，Gs 效果双倍指数。";
                if(hasMilestone('Z',32)) return "根据 Gs 升级数量增强 Gsb1 和 Gsb4 基础。";
                if(player.Z.points.eq(29)) return "根据 Gs 升级数量增强 Gsb1 基础，Gs 效果双倍指数。";
                return "根据 Gs 升级数量增强 Gsb1 基础。";
            },
            cost(){ return new Decimal(hasMilestone('Z',35)?'1e205':hasMilestone('Z',34)?'1e76':hasMilestone('Z',33)?'1e46':hasMilestone('Z',32)?'1e1370':hasMilestone('Z',31)?'1e800':hasMilestone('Z',30)?'1e850':hasMilestone('Z',29)?'1e765':hasMilestone('Z',28)?'1e500':hasMilestone('Z',27)?'1e342':'1e300') },
            currencyLocation() { return player[this.layer] }, 
            currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
            effect() { 
                let b = n(player[this.layer].upgrades.length)
                let ba = n(1.008)
                if(hasUpgrade('G',82)) ba = ba.add(hasMilestone('Z',31)?0.092:0.002)
                let ef = n(ba).pow(b.sub(player.Z.points.gte(35) && hasUpgrade('G',85)?Math.max(50-player[this.layer].upgrades.length,0):25).max(0))
                return ef;
            },
            effectDisplay() { return 'x' + format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 74)) },
        },
81: {
    title: 'G36',
    description: "F2 降低 Gsb1-3 的消耗。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e230':hasMilestone('Z',34)?'1e90':hasMilestone('Z',33)?'1e47':hasMilestone('Z',32)?'1e1520':hasMilestone('Z',31)?'1e870':hasMilestone('Z',30)?'1e920':hasMilestone('Z',29)?'1e820':hasMilestone('Z',28)?'1e560':hasMilestone('Z',27)?'1e382':hasMilestone('Z',26)?'1e345':'1e336') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
    currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
    effect() {
        let exp = n(3)
        if(hasUpgrade('G',91)) exp = player.G.Gsi.add(1e100).log(10).sqrt()
        if(hasUpgrade('G',82)) exp = exp.mul(hasMilestone('Z',28)?2:1.6)
        if(hasMilestone('Z',28)) exp = exp.div(3.2)
        let ef = player.F.F2.add(10).log(10).pow(exp).min("ee24")
        if(hasMilestone('Z',31)){
            exp = exp.mul(3.2)
            ef = player.F.F2.add(10).log(10).add(10).log(10).pow(exp);
        }
        return ef;
    },
    effectDisplay() { return '/' + format(this.effect()) },
    unlocked() { return (hasUpgrade(this.layer, 75)) },
},

82: {
    title: 'G37',
    description(){ 
        if(hasMilestone('Z',34)) return "G35 基础为 1.1，G36 ^2。解锁 GG。";
        if(hasMilestone('Z',31)) return "G35 基础为 1.1，G36 ^2。";
        if(hasMilestone('Z',28)) return "G35 基础为 1.01，G36 ^2。";
        return "Gsb1 消耗基础 -0.2，G35 基础为 1.01，G36 ^1.6。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e240':hasMilestone('Z',34)?'1e95':hasMilestone('Z',33)?'1e48':hasMilestone('Z',32)?'1e1800':hasMilestone('Z',31)?'1e940':hasMilestone('Z',30)?'1e1740':hasMilestone('Z',29)?'1e1290':hasMilestone('Z',28)?'1e780':hasMilestone('Z',27)?'1e720':hasMilestone('Z',26)?'1e548':'1e493') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
    currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
    unlocked() { return (hasUpgrade(this.layer, 81)) },
},

83: {
    title: 'G38',
    description(){ 
        if(hasMilestone('Z',34)) return "Gs 效果指数 ^2";
        if(hasMilestone('Z',32)) return "Gs 效果 ^2";
        if(player.Z.points.gte(30)) return "Gs 效果指数 x(10/7)";
        return "Gs 效果指数 x(10/7)，解锁 Gsi。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e847':hasMilestone('Z',34)?'1e393':hasMilestone('Z',33)?'1e75':hasMilestone('Z',32)?'1e3000':hasMilestone('Z',31)?'1e1800':hasMilestone('Z',30)?'1e2400':hasMilestone('Z',29)?'1e1700':hasMilestone('Z',27)?'1e1000':hasMilestone('Z',26)?'1e747':'1e660') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
    currencyInternalName() { return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs" },
    unlocked() { return (hasUpgrade(this.layer, 82)) },
},

84: {
    title: 'G39',
    description: "F2 增强 Gsi（此升级效果受 Gsi 强化）。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e20350':hasMilestone('Z',34)?'1e372':hasMilestone('Z',33)?'1e80':hasMilestone('Z',32)?'1e47':hasMilestone('Z',30)?'1e16':hasMilestone('Z',29)?'1e12':hasMilestone('Z',27)?'1e3':'1e5') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    effect() {
        let exp = player.G.Gsi.add(1e10).log(10).div(100)
        if(player.Z.points.eq(28)){
            exp = player.G.Gsi.add(10).log(10).sqrt().div(50)
            if(player.G.Gsi.gte(1e100)) exp = player.G.Gsi.add(10).log(10).pow(1.5).div(100).div(player.G.Gsi.add(10).log(10).sqrt().add(40))
            if(player.G.Gsi.gte(1e225)) exp = player.G.Gsi.add(10).log(10).mul(3).div(1100)
        } else if(player.Z.points.eq(29)) exp = player.G.Gsi.add(10).log(10).sqrt().div(100)
        else if(player.Z.points.eq(30)) exp = player.G.Gsi.add(10).log(10).sqrt().div(100).min(0.7)
        else if(player.Z.points.eq(31)) exp = player.G.Gsi.add(10).log(10).sqrt().div(1000)
        let ef = player.F.F2.add(10).log(10).pow(exp)
        if(hasMilestone('Z',31)){
            exp = player.G.Gsi.add(10).log(10).sqrt().div(hasMilestone('Z',33)?100:10)
            ef = player.F.F2.add(10).log(10).add(10).log(10).pow(exp);
        }
        if(player.Z.points.gte(30) && player.Z.points.lte(31)) return ef.min("1e3000")
        return ef;
    },
    effectDisplay() { return 'x' + format(this.effect()) },
    unlocked() { return (hasUpgrade(this.layer, 83) && hasMilestone('Z',26)) },
},

85: {
    title: 'G40',
    description(){ 
        if(hasMilestone('Z',34)) return "对于 G35，每个 Gs 升级将被视为一个 G 升级。";
        if(hasMilestone('Z',32)) return "基于 Gs 升级数量增强 Gsb7 基础。";
        if(hasMilestone('Z',30)) return "基于 Gs 升级数量增强 Gsb4 基础。";
        return "基于 Gs 升级数量增强 Gsb4 基础，Gsb4 消耗基础为 7，Gsb2 消耗基础 /2.5。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e24520':hasMilestone('Z',34)?'1e715':hasMilestone('Z',33)?'1e93':hasMilestone('Z',32)?'1e70':hasMilestone('Z',31)?'1e28':hasMilestone('Z',30)?'1e20':hasMilestone('Z',29)?'1e48':hasMilestone('Z',27)?'1e13':'1e25') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    effect() {
        if(player.Z.points.gte(35)) return n(1);
        let b = n(player[this.layer].upgrades.length)
        let ba = n(hasMilestone('Z',31)?1.1:hasMilestone('Z',30)?1.01:1.006)
        let ef = n(ba).pow(b.sub(25).max(0))
        return ef;
    },
    effectDisplay() { return hasMilestone('Z',34)?'+'+(Math.max(Math.min(player[this.layer].upgrades.length-25,25),0))+' 个升级':'x'+format(this.effect(),4) },
    unlocked() { return (hasUpgrade(this.layer, 84)) },
},
91: {
    title: 'G41',
    description(){ 
        if(hasMilestone('Z',34)) return "Gsi 增强 G36。解锁 Gt4。";
        if(hasMilestone('Z',29)) return "Gsi 增强 G36。";
        return "移除 Gsb2-3 线性消耗，Gsi 增强 G36。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e76420':hasMilestone('Z',34)?'1e6147':hasMilestone('Z',33)?'1e100':hasMilestone('Z',32)?'1e75':hasMilestone('Z',31)?'1e57':hasMilestone('Z',30)?'1e24':hasMilestone('Z',29)?'1e80':hasMilestone('Z',27)?'1e30':'1e100') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    unlocked() { return (hasUpgrade(this.layer, 85)) },
},

92: {
    title: 'G42',
    description: "Gsb2 消耗基础 /2。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e113000':hasMilestone('Z',34)?'1e8830':hasMilestone('Z',33)?'1e106':hasMilestone('Z',32)?'1e80':hasMilestone('Z',31)?'1e60':hasMilestone('Z',30)?'1e27':hasMilestone('Z',29)?'1e90':hasMilestone('Z',27)?'1e40':'1e133') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    unlocked() { return (hasUpgrade(this.layer, 91)) },
},

93: {
    title: 'G43',
    description(){ 
        if(player.Z.points.gte(31)) return "Gsb4 消耗基础为 4，Gsb4 提供免费 Gsb1。";
        if(player.Z.points.gte(30)) return "Gsb4 消耗基础为 5，Gsb4 提供免费 Gsb1。";
        if(player.Z.points.eq(29)) return "Gs 效果指数 ^1.28（G46 和 G47 各 x1.25），Gsb4 消耗基础为 5，Gsb4 提供免费 Gsb1。";
        return "Gsb1 消耗基础为 4.5，Gsb4 消耗基础为 5，Gsb4 提供免费 Gsb1。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e136900':hasMilestone('Z',34)?'1e13356':hasMilestone('Z',33)?'1e117':hasMilestone('Z',32)?'1e85':hasMilestone('Z',31)?'1e65':hasMilestone('Z',30)?'1e28':hasMilestone('Z',29)?'1e95':hasMilestone('Z',27)?'1e42':'1e138') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    unlocked() { return (hasUpgrade(this.layer, 92)) },
},

94: {
    title: 'G44',
    description(){ 
        if(player.Z.points.gte(31)) return "Gsi 获取指数 x2，效果 x1.2。";
        if(player.Z.points.gte(30)) return "Gsi 获取指数 +0.4，效果 x1.2。";
        return "Gsb5 消耗基础 /4，Gsb3 消耗基础 /10，Gsi 获取指数 +0.4，效果 x1.2。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e165200':hasMilestone('Z',34)?'1e19970':hasMilestone('Z',33)?'1e150':hasMilestone('Z',32)?'1e112':hasMilestone('Z',31)?'1e85':hasMilestone('Z',30)?'1e35':hasMilestone('Z',29)?'1e270':hasMilestone('Z',28)?'1e120':hasMilestone('Z',27)?'1e130':'1e540') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    unlocked() { return (hasUpgrade(this.layer, 93)) },
},

95: {
    title: 'G45',
    description(){ 
        if(hasMilestone('Z',31)) return "G30 基础为 0.99，Gsi 获取 x(Gsb1 数量 x Gsb1 额外)^10，Gsi 效果 x1.1。";
        if(hasMilestone('Z',30)) return "G30 基础为 0.995，Gsi 获取 x(Gsb1 数量 x Gsb1 额外)^10，Gsi 效果 x1.1。";
        if(hasMilestone('Z',28)) return "G30 基础为 0.995，Gsi 获取 x1.05^(Gsb1 数量^0.9)，Gsi 效果 x1.1。";
        if(hasMilestone('Z',27)) return "G30 基础为 0.995，Gsi 获取 x1.05^(Gsb1 数量)，Gsi 效果 x1.1。";
        return "G30 基础为 0.995，Gsi 获取 x1.05^(Gsb1 数量)，Gsi 效果 x1.2。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e216000':hasMilestone('Z',34)?'1e32031':hasMilestone('Z',33)?'1e190':hasMilestone('Z',32)?'1e153':hasMilestone('Z',31)?'1e105':hasMilestone('Z',30)?'1e65':hasMilestone('Z',29)?'1e299':hasMilestone('Z',28)?'1e136':hasMilestone('Z',27)?'1e180':'1e685') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    effect() {
        let b = getBuyableAmount('G',21)
        if(hasMilestone('Z',30)) return b.add(1).mul(layers.G.buyables[21].extra().add(1)).pow(hasUpgrade('G',105)?20:10);
        let ba = n(1.05)
        if(hasUpgrade('G',105)) ba = ba.add(0.02)
        let ef = n(ba).pow(b.pow(hasMilestone('Z',28)?0.9:1))
        return ef;
    },
    effectDisplay() { return 'x' + format(this.effect()) },
    unlocked() { return (hasUpgrade(this.layer, 94)) },
},

101: {
    title: 'G46',
    description: "Gs 获取基础 ^1.05，解锁 Gse。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e463400':hasMilestone('Z',34)?'1e49168':hasMilestone('Z',32)?'1e375':hasMilestone('Z',31)?'1e264':hasMilestone('Z',28)?'1e220':'1e420') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    unlocked() { return (hasUpgrade(this.layer, 95) && hasMilestone('Z',27)) },
},

102: {
    title: 'G47',
    description(){ 
        if(player.Z.points.eq(32)) return "G45 以 ^0.1 效果倍增 Gse，Gsb6 加成到 Gsb5 和 Gsb3。";
        if(player.Z.points.gte(30)) return "G45 以 ^0.1 效果倍增 Gse。";
        return "G45 以 ^0.15 效果倍增 Gse，Gsb1 消耗基础 -0.4。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e7330':hasMilestone('Z',34)?'1e3428':hasMilestone('Z',32)?'1e24':hasMilestone('Z',28)?'1e6':'2.5e6') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    effect() {
        let ba = upgradeEffect('G',95)
        let exp = n(0.15)
        if(player.Z.points.gte(30)) exp = n(0.1)
        if(hasUpgrade('G',103)) exp = exp.add(0.05)
        if(hasUpgrade('G',104)) exp = exp.add(0.05)
        let ef = n(ba).pow(exp)
        return ef;
    },
    effectDisplay() { return 'x' + format(this.effect()) },
    unlocked() { return (hasUpgrade(this.layer, 101)) },
},

103: {
    title: 'G48',
    description: "移除 Gsb5 线性消耗，G47 指数 +0.05，增强 Gsb1/6 基础。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e759700':hasMilestone('Z',34)?'1e3800':hasMilestone('Z',32)?'1e545':hasMilestone('Z',31)?'1e320':hasMilestone('Z',30)?'1e275':hasMilestone('Z',29)?'1e540':hasMilestone('Z',28)?'1e368':'1e590') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    unlocked() { return (hasUpgrade(this.layer, 102)) },
},

104: {
    title: 'G49',
    description(){ 
        if(player.Z.points.gte(36)) return "每个 G 升级使 Gsb9 基础 +0.001。";
        if(player.Z.points.gte(35)) return "对于 G30 的第一个效果，每个 Gs 升级视为一个 G 升级。Gsb3 加成 Gsb2。";
        if(player.Z.points.gte(33)) return "G30 应用于 Gsb7。Gsb3 加成 Gsb2。";
        if(player.Z.points.gte(31)) return "G30 以 ^0.3 效果应用于 Gsb7。Gsb3 加成 Gsb2。";
        if(player.Z.points.gte(30)) return "G30 以 ^0.3 效果应用于 Gsb5。Gsb3 加成 Gsb2。";
        return "G30 以 ^0.3 效果应用于 Gsb4-5 并降低 Gsb2-3 消耗。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e9020':hasMilestone('Z',34)?'1e4222':hasMilestone('Z',33)?'1e84':hasMilestone('Z',32)?'1e85':hasMilestone('Z',30)?'1e30':hasMilestone('Z',28)?'1e21':'1e38') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    effect() {
        let ba = upgradeEffect('G',65)
        let exp = n(player.Z.points.gte(33)?1:0.3)
        let ef = n(ba).pow(exp)
        return ef;
    },
    effectDisplay() { return hasMilestone('Z',35)?'+'+format(player.G.upgrades.length*0.001):hasMilestone('Z',34)?'+'+(Math.max(Math.min(player[this.layer].upgrades.length-25,25),0))+' 个升级':'^'+format(this.effect(),4) },
    unlocked() { return (hasUpgrade(this.layer, 103)) },
},

105: {
    title: 'G50',
    description(){ 
        if(player.Z.points.gte(32)) return "Gse 获取 x(Gsb4 数量 x Gsb4 额外)^10，G45 效果为 20，Gsb1 基础 ^1.05，增强 Gsi/指数。";
        if(player.Z.points.gte(31)) return "Gse 获取 x(Gsb4 数量 x Gsb4 额外)，G45 效果为 20，Gsb1 基础 ^1.05，增强 Gsi/指数。";
        if(player.Z.points.gte(30)) return "Gse 获取 x1.05^(Gsb4 数量^0.9)，G45 效果为 1.07，Gsb1 基础 ^1.05，增强 Gsi/指数。";
        return "Gse 获取 x1.05^(Gsb4 数量)，G45 效果为 1.07，Gsb1 基础 ^1.05，增强 Gsi/指数。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e10270':hasMilestone('Z',34)?'1e9405':hasMilestone('Z',32)?'1e170':hasMilestone('Z',30)?'1e43':hasMilestone('Z',28)?'1e28':'1e120') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    effect() {
        let b = getBuyableAmount('G',31)
        if(hasMilestone('Z',30)) return b.add(1).mul(layers.G.buyables[31].extra().add(1)).pow(player.Z.points.gte(32)?10:1);
        let ba = n(1.05)
        let ef = n(ba).pow(b.pow(hasMilestone('Z',29)?0.9:1))
        return ef;
    },
    effectDisplay() { return 'x' + format(this.effect()) },
    unlocked() { return (hasUpgrade(this.layer, 104)) },
},
111: {
    title: 'G51',
    description: "Gsb2 加成 Gsb1，Gsb5 加成 Gsb4，解锁另一个可购买项。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e11815':hasMilestone('Z',34)?'1e10941':hasMilestone('Z',32)?'1e340':hasMilestone('Z',31)?'1e129':hasMilestone('Z',30)?'1e82':'1e49') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasMilestone(this.layer, 17) && hasMilestone('Z',28)) },
},

112: {
    title: 'G52',
    description(){ 
        if(player.Z.points.gte(30)) return "Gsb5 更强，Gsb5/8 更便宜，Gsb5 加成 Gsb2。";
        return "Gsb5 更强，Gsb5/8 更便宜。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e14380':hasMilestone('Z',34)?'1e12410':hasMilestone('Z',32)?'1e500':hasMilestone('Z',31)?'1e166':hasMilestone('Z',30)?'1e92':hasMilestone('Z',29)?'1e65':'1e113') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasUpgrade(this.layer, 111)) },
},

113: {
    title: 'G53',
    description(){ 
        if(player.Z.points.gte(30)) return "Gsb2 更便宜，Gsb7 加成 Gsb4。";
        return "Gsb2 更便宜，Gse 第二个效果指数 +0.03。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e15360':hasMilestone('Z',34)?'1e13264':hasMilestone('Z',32)?'1e540':hasMilestone('Z',31)?'1e171':hasMilestone('Z',30)?'1e98':hasMilestone('Z',29)?'1e120':'1e200') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasUpgrade(this.layer, 112)) },
},

114: {
    title: 'G54',
    description(){ 
        if(player.Z.points.gte(32)) return "额外加成：b8→b5 和 b7，b10→b7，b8 基础 x1.05。";
        if(player.Z.points.gte(31)) return "额外加成：b8→b7，b10→b7，b8 基础 x1.05。";
        return "额外加成：b9-10→b7，b6(x0.2)→b4，b8 基础 x1.05。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e16210':hasMilestone('Z',34)?'1e14143':hasMilestone('Z',32)?'1e597':hasMilestone('Z',31)?'1e191':hasMilestone('Z',30)?'1e103':hasMilestone('Z',29)?'1e345':'1e461') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasUpgrade(this.layer, 113)) },
},

115: {
    title: 'G55',
    description(){ 
        if(player.Z.points.gte(35)) return "提高一些硬上限。解锁 Gsq。Gsb9 加成 Gsb8。";
        if(player.Z.points.gte(34)) return "提高一些硬上限。解锁 GG、Gsq 和一个升级树。Gsb9 加成 Gsb8。";
        if(player.Z.points.gte(31)) return "提高一些硬上限。解锁 GG 和一个升级树。";
        return "额外加成：b6(x0.6，总计 0.8)→b4，解锁 GG 和一个升级树。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'ee8':player.Z.points.eq(32)?'1e2692':'ee4') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsi",
    currencyInternalName: "Gsi",
    unlocked() { return (hasUpgrade(this.layer, 114) && hasMilestone('Z',29)) },
},

121: {
    title: 'G56',
    description: "GG 更便宜。解锁 Gsb11 和 Gsb12，G55 b5 倍率改为 1，解锁新 Gt。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e19560':hasMilestone('Z',34)?'1e18920':hasMilestone('Z',33)?'1e1605':hasMilestone('Z',32)?'1e1494':'1e592') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasUpgrade(this.layer, 115) && hasMilestone('Z',31)) },
},

122: {
    title: 'G57',
    description: "Gsb1、4、7、10 更便宜。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e25000':hasMilestone('Z',34)?'1e23874':hasMilestone('Z',33)?'1e1644':hasMilestone('Z',32)?'1e1536':'1e668') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasUpgrade(this.layer, 121)) },
},

123: {
    title: 'G58',
    description: "Gsb6/Gsb9 硬上限 +0.02。提高 Gsb8/Gsb9 上限。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e26400':hasMilestone('Z',34)?'1e26190':hasMilestone('Z',33)?'1e3506':hasMilestone('Z',32)?'1e3120':'1e1203') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasUpgrade(this.layer, 122)) },
},

124: {
    title: 'G59',
    description(){ 
        if(player.Z.points.gte(34)) return "Gsb9 硬上限 +0.03，Gsb11-12 更便宜，增强 Gse 第二个效果。";
        return "Gsb9 硬上限 +0.03，Gsb11-12 更便宜，增强 Gse 第二个效果。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e36500':hasMilestone('Z',34)?'1e33600':hasMilestone('Z',33)?'1e6178':'1e5922') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    unlocked() { return (hasUpgrade(this.layer, 123) && hasMilestone('Z',32)) },
},

125: {
    title: 'G60',
    description: "基于 Gse 增加 Gsb6 硬上限基础，Gsb3 x1.1，解锁更多 Gt。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e41300':hasMilestone('Z',34)?'1e38500':hasMilestone('Z',33)?'1e8940':'1e10449') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gse",
    currencyInternalName: "Gse",
    effect() {
        let ef = player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2).div(1000)
        return ef;
    },
    effectDisplay() { return '+' + format(this.effect(),3) },
    unlocked() { return (hasUpgrade(this.layer, 124)) },
},
131: {
    title: 'G61',
    description: "Gsb11-12 更便宜，t4 被增强，移除 Gsb9 削弱。",
    cost: new Decimal('1e677'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (hasMilestone(this.layer, 21)) },
},

132: {
    title: 'G62',
    description: "Gsb11-12 更便宜，解锁 GG2。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e1161':hasMilestone('Z',34)?'1e688':'1e685') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (hasMilestone(this.layer, 21)) },
},

133: {
    title: 'G63',
    description: "b6/9 基础 +0.02，GG2 每次购买提供 10 GG，解锁 GG3。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e1250':hasMilestone('Z',34)?'1e720':'1e695') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (hasMilestone(this.layer, 21)) },
},

134: {
    title: 'G64',
    description: "Gs 效果双倍指数 ^1.01。",
    cost: new Decimal('1e2314'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (hasMilestone('H',1)) },
},

135: {
    title: 'G65',
    description: "解锁最终 Gt。",
    cost: new Decimal('1e2370'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (hasMilestone('H',1)) },
},

141: {
    title: 'G66',
    description: "移除 t22 硬上限。",
    cost: new Decimal('1e18'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (mil('G',30)) },
},

142: {
    title: 'G67',
    description: "削弱 b2/y2 缩放，自动购买 Hb4/9。",
    cost: new Decimal('1e29'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (upg('G',141)) },
},

143: {
    title: 'G68',
    description: "sb6 上限 +2，y5 上限 +3，修改 R 效果公式，增强 H36。",
    cost: new Decimal('1e288'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (upg('G',142)) },
},

144: {
    title: 'G69',
    description: "sb6 上限 +2，i 效果指数 +0.0025，解锁下一个 dH。",
    cost: new Decimal('1e353'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (upg('G',143)) },
},

145: {
    title: 'G70',
    description: "sb6 上限 +10，i 效果指数 +0.0025，解锁 2 个 dH。（增强 H31）",
    cost: new Decimal('5e560'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (upg('G',144)) },
},

151: {
    title: 'G71',
    description: "Hb8/y5 上限 +15，解锁一个 dH，i 第二次削弱 +0.005。",
    cost: new Decimal('1e1705'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (upg('H',44)) },
},

152: {
    title: 'G72',
    description: "sb10 指数 +0.02，增强 dHs 效果，最大购买某些 bab。",
    cost: new Decimal('5e2836'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (upg('G',151)) },
},

153: {
    title: 'G73',
    description: "r2 指数 +0.025，降低 e1e100 的 e 削弱。",
    cost: new Decimal('5e5002'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (upg('G',152)) },
},

154: {
    title: 'G74',
    description: "sb6 指数 +0.02，总 dH 在 216 时增强 dHp 指数（最多 0.08），增强 y6 指数，解锁一个 dH。",
    cost: new Decimal('1e8719'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    effect() {
        let ef = tmp.H.totdh.sub(216).max(0).pow(0.6).div(200).min(0.08)
        return ef;
    },
    effectDisplay() { return '+' + format(this.effect(),4) },
    unlocked() { return (upg('G',153)) },
},

155: {
    title: 'G75',
    description: "移除所有软上限并解锁新行！",
    cost: new Decimal('e1.961e6'),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "GsR",
    currencyInternalName: "Gsr",
    unlocked() { return (mil('G',37)) },
},
161: {
    title: 'Gsq1',
    description: "Gsb14 加成 Gsb13。Gsq 升级计为 Gs 升级。",
    cost: new Decimal(1e27),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return player.G.Gsetot.gte('1e24000') && hasMilestone('Z',33) },
},

162: {
    title: 'Gsq2',
    description(){ 
        if(hasMilestone('Z',34)) return "移除 Gsb8 硬上限，修改 Gsb8 消耗并自动最大购买 Gsb8。";
        return "移除 Gsb7 硬上限，修改 Gsb7 消耗并自动最大购买 Gsb7。";
    },
    cost(){ return new Decimal(hasMilestone('Z',34)?1e134:1e130) },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (upg('G',161)) },
},

163: {
    title: 'Gsq3',
    description: "G30 影响 Gsb13。",
    cost: new Decimal(1e135),
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (upg('G',162)) },
},

164: {
    title: 'Gsq4',
    description(){ 
        if(hasMilestone('Z',34)) return "提高 Gsb10 硬上限。";
        return "提高 Gsb8 硬上限。";
    },
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e1322':hasMilestone('Z',34)?'1e652':'1e342') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (upg('G',163)) },
},

165: {
    title: 'Gsq5',
    description: "Gsb15 加成 Gsb14。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e1382':hasMilestone('Z',34)?'1e734':'1e374') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (upg('G',164)) },
},

171: {
    title: 'Gsq6',
    description: "提高 Gse 第二个效果的硬上限。",
    cost(){ return new Decimal(hasMilestone('Z',35)?'1e2462':'1e1880') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    effect() {
        let ef = new Decimal(111)
        if(upg('G',172)) ef = ef.add(player.G.Gsq.add(10).log10());
        if(upg('G',181)) ef = ef.mul(player.G.Gsg.add(10).log10().sqrt());
        return ef;
    },
    effectDisplay() { return '+' + format(this.effect()) },
    unlocked() { return (mil('H',0)) },
},

172: {
    title: 'Gsq7',
    description: "基于 Gsq 增强上一个升级。",
    cost(){ return new Decimal('1e2584') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (upg('G',171) && mil('Z',35)) },
},

173: {
    title: 'Gsq8',
    description: "苛刻度（Harsh）增强 Gsq。",
    cost(){ return new Decimal('1e2621') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    effect() {
        return player.H.harsh.add(1);
    },
    effectDisplay() { return 'x' + format(this.effect()) },
    unlocked() { return (upg('G',172) && mil('H',2)) },
},

174: {
    title: 'Gsq9',
    description: "Gsq 增强 Gsb10 硬上限。",
    cost(){ return new Decimal('1e3275') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    effect() {
        let ef = player.G.Gsq.add(10).log10().sqrt().div(20);
        return ef;
    },
    effectDisplay() { return '+' + format(this.effect()) },
    unlocked() { return (upg('G',173)) },
},

175: {
    title: 'Gsq10',
    description: "解锁 Gsg。",
    cost(){ return new Decimal('1e24407') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsq",
    currencyInternalName: "Gsq",
    unlocked() { return (upg('G',174)) },
},

181: {
    title: 'Gsg1',
    description: "基于 Gsg 提高 Gsq6 效果。",
    cost(){ return new Decimal('1e40') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsg",
    currencyInternalName: "Gsg",
    unlocked() { return (upg('G',175)) },
},

182: {
    title: 'Gsg2',
    description: "超对数获取受 Gsg 增强。",
    cost(){ return new Decimal('1e76') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsg",
    currencyInternalName: "Gsg",
    effect() {
        let ef = player.G.Gsg.add(10).log10();
        return ef;
    },
    effectDisplay() { return 'x' + format(this.effect()) },
    unlocked() { return (upg('G',181)) },
},

183: {
    title: 'Gsg3',
    description: "G30 影响 Gsb16。",
    cost(){ return new Decimal('1e83') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsg",
    currencyInternalName: "Gsg",
    unlocked() { return (upg('G',182)) },
},

184: {
    title: 'Gsg4',
    description: "Gsg 增强 Gsb10 硬上限。",
    cost(){ return new Decimal('1e315') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsg",
    currencyInternalName: "Gsg",
    effect() {
        let ef = player.G.Gsg.add(10).log10();
        return ef;
    },
    effectDisplay() { return '+' + format(this.effect()) },
    unlocked() { return (upg('G',183)) },
},

185: {
    title: 'Gsg5',
    description: "Gsg 增强 Gs 效果指数。",
    cost(){ return new Decimal('1e318') },
    currencyLocation() { return player[this.layer] },
    currencyDisplayName: "Gsg",
    currencyInternalName: "Gsg",
    effect() {
        let ef = player.G.Gsg.add(10).log10().pow(0.985);
        return ef;
    },
    effectDisplay() { return '^' + format(this.effect()) },
    unlocked() { return (upg('G',184)) },
},
},
   clickables: {    
    11: {
        title(){ return "Gt0" },
        display: "重置（重置 Gt 升级，返还 GG。）",
        canClick() { return !gcs(this.layer,this.id) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        onClick() {
            for (let i in player.G.clickables) 
                if (!["11"].includes(i)) 
                    setClickableState("G", i, 0)
            player.G.Gtc = n(0)
            if (player.G.Gsetot.gte('1e13144')) 
                scs("G",21,1), scs("G",31,1)
            if (player.G.Gsetot.gte('1e42090')) 
                scs("G",32,1), scs("G",33,1)
            if (mil('G',25)) 
                scs("G",41,1), scs("G",51,1)
            if (mil('G',27)) 
                scs("G",42,1), scs("G",43,1), scs("G",44,1)
            if (mil('G',28)) 
                scs("G",91,1)
            if (upg('H',15)) 
                scs("G",101,1)
            if(n(challengeCompletions('I',22)).gte(3)) 
                scs("G",21,1), scs("G",31,1), scs("G",32,1), scs("G",33,1), scs("G",41,1), scs("G",51,1), scs("G",42,1), scs("G",43,1), scs("G",44,1), scs("G",91,1)
                , scs("G",101,1), scs("G",102,1), scs("G",103,1), scs("G",104,1)
            if(n(challengeCompletions('I',22)).gte(4)) 
                scs("G",111,1), scs("G",112,1), scs("G",121,1), scs("G",122,1)
            if(gcs('I',76)) 
                scs("G",61,1), scs("G",62,1), scs("G",63,1), scs("G",71,1), scs("G",72,1), scs("G",73,1), scs("G",81,1), scs("G",82,1), scs("G",83,1), scs("G",131,1)
        },
        unlocked() { return hasUpgrade('G', player.Z.points.gte(35)?82:115) },
    },

    12: {
        title(){ return "e" },
        display: "选择 t9、11、14（e 路径），需要 91 GG",
        canClick() { return player.G.GG.gte(91) && !gcs(this.layer,this.id) && !gcs(this.layer,61) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(91)
            setClickableState(this.layer,this.id,1)
            setClickableState(this.layer,61,1)
            setClickableState(this.layer,71,1)
            setClickableState(this.layer,81,1)
        },
        unlocked() { return (mil('G',22) || (mil('I',0))) },
    },

    13: {
        title(){ return "i" },
        display: "选择 t10、12、15（i 路径），需要 94 GG",
        canClick() { return player.G.GG.gte(94) && !gcs(this.layer,this.id) && !gcs(this.layer,62) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(94)
            setClickableState(this.layer,this.id,1)
            setClickableState(this.layer,62,1)
            setClickableState(this.layer,72,1)
            setClickableState(this.layer,82,1)
        },
        unlocked() { return (mil('G',22) || (mil('I',0))) },
    },

    14: {
        title(){ return "s" },
        display: "选择 t61、17、18（s 路径），需要 85 GG",
        canClick() { return player.G.GG.gte(85) && !gcs(this.layer,this.id) && !gcs(this.layer,63) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(85)
            setClickableState(this.layer,this.id,1)
            setClickableState(this.layer,63,1)
            setClickableState(this.layer,73,1)
            setClickableState(this.layer,83,1)
        },
        unlocked() { return (mil('G',22) || (mil('I',0))) },
    },

    21: {
        title(){ return "Gt1" },
        display(){ 
            return "Gs 增强 Gse <br> 消耗：" + format(this.cost()) + " GG <br> 效果：x" + format(this.effect())
        },
        cost(){ return n(player.Z.points.gte(31)?1:2) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(player.Z.points.gte(31)?1:2) && !gcs(this.layer,this.id) },
        onClick() { 
            if (!player.G.Gsetot.gte('1e13144')) {
                player.G.Gtc = player.G.Gtc.add(player.Z.points.gte(31)?1:2)
            }
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let exp = n(2)
            if(gcs('G',32)) exp = exp.mul(1.15)
            if (player.G.Gsetot.gte('1e13144')) exp = exp.mul(1.2)
            if (player.G.Gsetot.gte('1e42090')) exp = exp.mul(3)
            let ef = player.G.Gs.add(10).log(10).pow(exp)
            return ef
        },
        unlocked() { return hasUpgrade('G', player.Z.points.gte(35)?82:115) },
    },

    31: {
        title(){ return "Gt2" },
        display(){ return "Gsb9 基础 x1.02 <br> 消耗：" + format(this.cost()) + " GG " },
        cost(){ return n(2) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(this.cost()) && !gcs(this.layer,this.id) && gcs(this.layer,21) },
        onClick() { 
            if (!player.G.Gsetot.gte('1e13144')) {
                player.G.Gtc = player.G.Gtc.add(this.cost())
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G', player.Z.points.gte(35)?82:115) },
        branches(){ return ["21"] },
    },

    32: {
        title(){ return "Gt3" },
        display(){ return "Gsb11-12 基础 +0.002，t1 ^1.15 <br> 消耗：" + format(this.cost()) + " GG " },
        cost(){ return n(6) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(this.cost()) && !gcs(this.layer,this.id) && gcs(this.layer,21) },
        onClick() { 
            if (!player.G.Gsetot.gte('1e42090')) {
                player.G.Gtc = player.G.Gtc.add(this.cost())
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G',121) },
        branches(){ return ["21"] },
    },

    33: {
        title(){ return "Gt4" },
        display(){ return "GG 总量乘以 Gse <br> 消耗：" + format(this.cost()) + " GG <br> 效果：x" + format(this.effect(),4) },
        cost(){ return n(3) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(this.cost()) && !gcs(this.layer,this.id) && gcs(this.layer,21) },
        onClick() { 
            if (!player.G.Gsetot.gte('1e42090')) {
                player.G.Gtc = player.G.Gtc.add(this.cost())
            }
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            return Decimal.pow(1e8, player.G.GGtot.pow(gcs('G',43)?1.5:1)).pow(hasUpgrade('G',131)?10:1)
        },
        unlocked() { return hasUpgrade('G', player.Z.points.gte(35)?91:115) },
        branches(){ return ["21"] },
    },

    41: {
        title(){ return "Gt5" },
        cost(){ return n(5) },
        display(){ return "Gse 获取指数 +0.05，效果指数 +0.03 <br> 消耗：" + format(this.cost()) + " GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(this.cost()) && !gcs(this.layer,this.id) && (gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33)) },
        onClick() { 
            if (!hasMilestone('G',25)) {
                player.G.Gtc = player.G.Gtc.add(this.cost())
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G', player.Z.points.gte(35)?82:115) },
        branches(){ return ["31","33"] },
    },

    42: {
        title(){ return "Gt6" },
        display(){ return "Gsb9 加成到 Gsb6 <br> 消耗：20 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(20) && !gcs(this.layer,this.id) && (gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33)) },
        onClick() { 
            if (!mil('G',27)) {
                player.G.Gtc = player.G.Gtc.add(20)
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["31","33"] },
    },

    43: {
        title(){ return "Gt7" },
        display(){ return "Gt4 指数 ^1.5<br> 消耗：18 GG <br>" },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(18) && !gcs(this.layer,this.id) && (gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33)) },
        onClick() { 
            if (!hasMilestone('G',27)) {
                player.G.Gtc = player.G.Gtc.add(18)
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G',121) },
        branches(){ return ["31","33"] },
    },

    44: {
        title(){ return "Gt13" },
        display(){ return "Gse 提升 Gs <br> 消耗：26 GG <br> 效果：^" + format(this.effect(),4) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(26) && !gcs(this.layer,this.id) && gcs(this.layer,21) },
        onClick() { 
            if (!hasMilestone('G',27)) {
                player.G.Gtc = player.G.Gtc.add(26)
            }
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef = player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2.5).div(90).add(89/90)
            if(hasUpgrade('H',12)) 
                ef = player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2.6).div(80).add(79/80)
            if (gcs('G',82)) ef = ef.pow(1.2)
            return ef
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["21"] },
    },

    51: {
        title(){ return "Gt8" },
        display(){ return "Gsb7-8 更便宜 <br> 消耗：18 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(18) && !gcs(this.layer,this.id) && (gcs(this.layer,41)|| gcs(this.layer,42)|| gcs(this.layer,43)) },
        onClick() { 
            if (!hasMilestone('G',25)) {
                player.G.Gtc = player.G.Gtc.add(18)
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasMilestone('G',20) },
        branches(){ return ["41","42","43"] },
    },

    61: {
        title(){ return "Gt9" },
        display(){ return "Gse 提升自身（基于最大值）<br> 消耗：36 GG <br> 效果：^" + format(this.effect(),4) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(36) && !gcs(this.layer,this.id) && gcs(this.layer,51) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(36)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef = player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(150).add(149/150)
            if(gcs('G',122)) 
                ef = player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(120).add(119/120)
            return ef
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["51"] },
    },

    62: {
        title(){ return "Gt10" },
        display(){ return "Gsi 提升自身（基于最大值）<br> 消耗：39 GG <br> 效果：^" + format(this.effect(),4) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(39) && !gcs(this.layer,this.id) && gcs(this.layer,51) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(39)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef = player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.5).div(250).add(249/250)
            if(gcs('G',122)) 
                ef = player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.6).div(180).add(179/180)
            return ef
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["51"] },
    },

    63: {
        title(){ return "Gt16" },
        display(){ return "Gs 提升自身（基于最大值）<br> 消耗：32 GG <br> 效果：^" + format(this.effect(),4) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(32) && !gcs(this.layer,this.id) && gcs(this.layer,51) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(32)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let exp = n(1.2)
            if(gcs('G',91)) exp = exp.add(0.04)
            let ef = player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(200).add(199/200)
            if(gcs('G',122)) 
                ef = player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(150).add(149/150)
            return ef
        },
        unlocked() { return hasMilestone('G',21) },
        branches(){ return ["51"] },
    },

    71: {
        title(){ return "Gt11" },
        display(){ return "b4 效果增强 Gse（硬上限 ee5）<br> 消耗：15 GG <br> 效果：x" + format(this.effect()) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(15) && !gcs(this.layer,this.id) && gcs(this.layer,61) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(15)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef = n(10).pow(n(buyableEffect('G',31)).add(10).log(10).pow(1/3)).pow(0.005)
            if(gcs('G',81)) ef = ef.pow(1.2)
            if(gcs('G',91)) ef = ef.pow(1.2)
            ef = ef.min('ee5')
            return ef
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["61"] },
    },

    72: {
        title(){ return "Gt12" },
        display(){ return "b7 效果提升 Gsi <br> 消耗：15 GG <br> 效果：^" + format(this.effect(),3) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(15) && !gcs(this.layer,this.id) && gcs(this.layer,62) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(15)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef2 = n(1)
            let exp = n(0.125)
            if(gcs('G',91)) exp = exp.add(0.005)
            ef2 = n(buyableEffect('G',41)).add(10).log(10).pow(exp).div(16).add(1)
            return ef2
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["62"] },
    },

    73: {
        title(){ return "Gt17" },
        display(){ return "b1 效果提升 Gs <br> 消耗：13 GG <br> 效果：^" + format(this.effect(),3) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(13) && !gcs(this.layer,this.id) && gcs(this.layer,63) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(13)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let exp = n(1.1)
            if(gcs('G',91)) exp = exp.add(0.04)
            if(hasUpgrade('H',12)) exp = exp.add(0.011)
            let t = n(25)
            if(hasUpgrade('H',12)) t = t.sub(10)
            let ef = n(buyableEffect('G',21)).add(10).log(10).add(10).log(10).pow(exp).add(t.sub(1)).div(t)
            return ef
        },
        unlocked() { return hasMilestone('G',21) },
        branches(){ return ["63"] },
    },

    81: {
        title(){ return "Gt14" },
        display(){ return "Gt11 ^1.2 <br> 消耗：40 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(40) && !gcs(this.layer,this.id) && gcs(this.layer,71) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(40)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["71"] },
    },

    82: {
        title(){ return "Gt15" },
        display(){ return "Gt13 ^1.2 <br> 消耗：40 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(40) && !gcs(this.layer,this.id) && gcs(this.layer,72) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(40)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G',125) },
        branches(){ return ["72"] },
    },

    83: {
        title(){ return "Gt18" },
        display(){ return "b11 基础 +0.0025，b12 基础 +0.0015 <br> 消耗：40 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(40) && !gcs(this.layer,this.id) && gcs(this.layer,73) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(40)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasMilestone('G',21) },
        branches(){ return ["73"] },
    },

    91: {
        title(){ return "Gt19" },
        display(){ return "Gse 获取指数 x1.2，增强 t11、12、16、17 <br> 消耗：160 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(160) && !gcs(this.layer,this.id) && (gcs(this.layer,81)|| gcs(this.layer,82)|| gcs(this.layer,83)) },
        onClick() { 
            if(!mil('G',28)) {
                player.G.Gtc = player.G.Gtc.add(160)
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G',131) },
        branches(){ return ["81","82","83"] },
    },

    101: {
        title(){ return "Gt20" },
        display(){ return "b11-12 更强 <br> 消耗：80 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(80) && !gcs(this.layer,this.id) && gcs(this.layer,91) },
        onClick() { 
            if(!mil('H',15)) {
                player.G.Gtc = player.G.Gtc.add(80)
            }
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasMilestone('G',23) },
        branches(){ return ["91"] },
    },

    102: {
        title(){ return "Gt21" },
        display(){ 
            if(hasMilestone('G',25)) 
                return "GG 总量增加 b6/9 硬上限，里程碑 25 后 ^1.005 Gse <br> 消耗：120 GG <br> 效果：+" + format(this.effect(),4)
            else 
                return "GG 总量增加 b6/9 硬上限 <br> 消耗：120 GG <br> 效果：+" + format(this.effect(),4)
        },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(120) && !gcs(this.layer,this.id) && gcs(this.layer,91) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(120)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef = player.G.GGtot.pow(0.4).div(666)
            if(hasMilestone('G',25)) ef = player.G.GGtot.pow(0.42).div(600)        
            if(ef.gte(0.04)) ef = ef.div(0.04).pow(0.6).mul(0.04)  
            return ef
        },
        unlocked() { return hasMilestone('G',23) },
        branches(){ return ["91"] },
    },

    111: {
        title(){ return "Gt22" },
        display(){ 
            if(hasMilestone('G',25)) 
                return "Gsi 增加 b6/9 硬上限（最大 0.6），里程碑 25 后 ^1.004 Gse <br> 消耗：110 GG <br> 效果：+" + format(this.effect(),4)
            else 
                return "Gsi 增加 b6/9 硬上限（最大 0.6）<br> 消耗：110 GG <br> 效果：+" + format(this.effect(),4)
        },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(110) && !gcs(this.layer,this.id) && gcs(this.layer,91) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(110)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef = player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.33).div(1e4)   
            if(hasMilestone('G',25)) ef = player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.33).div(8000) 
            if(ef.gte(0.11)) ef = ef.div(0.11).pow(0.4).mul(0.11)   
            ef = ef.min(0.6)           
            return ef
        },
        unlocked() { return hasMilestone('G',25) },
        branches(){ return ["91"] },
    },

    112: {
        title(){ return "Gt23" },
        display(){ return "Gsq 提升其基础获取 <br> 消耗：110 GG <br> 效果：^" + format(this.effect()) },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(110) && !gcs(this.layer,this.id) && gcs(this.layer,91) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(110)
            setClickableState(this.layer,this.id,1)
        },
        effect(){
            let ef = player.G.Gsq.add(1).log(10).add(1).log(10).pow(1.25).div(10).add(1)
            return ef
        },
        unlocked() { return hasMilestone('G',25) },
        branches(){ return ["91"] },
    },

    121: {
        title(){ return "Gt24" },
        display(){ return "Gsb6/9 硬上限 x1.06 <br> 消耗：200 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(200) && !gcs(this.layer,this.id) && gcs(this.layer,111) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(200)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('H',11) },
        branches(){ return ["111"] },
    },

    122: {
        title(){ return "Gt25" },
        display(){ return "增强 r5，s^1.8，i^1.5，e^1.01 <br> 消耗：200 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(200) && !gcs(this.layer,this.id) && gcs(this.layer,112) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(200)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('H',12) },
        branches(){ return ["112"] },
    },

    103: {
        title(){ return "Gt26" },
        display(){ return "t22 x2 应用于 b10，Gsb15 硬上限 +0.01。<br> 消耗：800 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(800) && !gcs(this.layer,this.id) && gcs(this.layer,91) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(800)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('H',13) },
        branches(){ return ["91"] },
    },

    104: {
        title(){ return "Gt27" },
        display(){ return "Gsb10 硬上限 +10 <br> 消耗：600 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(600) && !gcs(this.layer,this.id) && gcs(this.layer,91) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(600)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('H',14) },
        branches(){ return ["91"] },
    },

    131: {
        title(){ return "Gt28" },
        display(){ return "提高 Gsb15 硬上限 <br> 消耗：900 GG " },
        style() { 
            return { 
                'background-color': gcs(this.layer,this.id) ? "#77BF5F" : layers.G.clickables[this.id].canClick() ? "#695735" : "#BF8F8F"
            }
        },
        canClick() { return player.G.GG.gte(900) && !gcs(this.layer,this.id) && (gcs(this.layer,121)||gcs(this.layer,122)) },
        onClick() { 
            player.G.Gtc = player.G.Gtc.add(900)
            setClickableState(this.layer,this.id,1)
        },
        unlocked() { return hasUpgrade('G',135) },
        branches(){ return ["121","122"] },
    },
},
    automate(){
        if (player.G.auto2)  buyBuyable("G",11),buyBuyable("G",12),buyBuyable("G",13)
        if (player.G.auto4)  buyBuyable("G",21),buyBuyable("G",22),buyBuyable("G",23)
        if (player.G.auto5)  buyBuyable("G",31),buyBuyable("G",32)
        if (player.G.auto6)  buyBuyable("G",41),buyBuyable("G",42)
        if (player.G.auto7)  buyBuyable("G",61),buyBuyable("G",62),buyBuyable("G",63)
        if (player.H.auto1)  buyBuyable("G",51),buyBuyable("G",52),buyBuyable("G",43)
        if(player.H.auto5)  buyBuyable("G",71)
        if(player.G.auto8)  buyBuyable("G",33)
        if(player.G.auto9)  buyBuyable("G",81)
        if(player.G.auto7)  buyBuyable("G",73)
        if(player.H.auto9)  buyBuyable("G",72),buyBuyable("G",74)
        if(gcs('I',104))  buyBuyable("G",44)
    },
buyables: {

    11: {
        title: "Gb1",
        cost(x) {
            let cost = Decimal.pow(10, x.pow(1.1)).mul(
                player.Z.points.gte(19) ? 1 :
                player.Z.points.gte(17) ? 1e7 : 1e10
            )
            return cost
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() { 
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        base() {
            let base = n(2)
            if (hasUpgrade('G',42)) base = Decimal.add(base, 0.5)
            if (mil('G',8)) base = Decimal.add(base, 0.5)
            if (upg('G',52)) base = Decimal.pow(base, 1.3)
            return base
        },
        effect(x) {
            let exp = n(1)
            let ef = Decimal.pow(this.base(), x.pow(exp))
            return ef
        },
        display() {
            return "给予 G 一个 x" + format(this.base()) + " 的乘数 \n\
            消耗：" + format(this.cost()) + " G \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " \n\
            效果：x" + format(this.effect())
        },
        unlocked() { return hasUpgrade('G',25) }
    },

    12: {
        title: "Gb2",
        cost(x) {
            let cost = Decimal.pow(100, x.pow(1.2)).mul(
                player.Z.points.gte(19) ? 1 :
                player.Z.points.gte(17) ? 1e8 : 1e11
            )
            return cost
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() { 
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        base() {
            let base = n(2)
            if (hasUpgrade('F',74)) base = Decimal.add(base, upgradeEffect('F',74)[0])
            if (hasUpgrade('G',42)) base = Decimal.mul(base, 2)
            if (hasUpgrade('G',33)) base = Decimal.pow(base, 2)
            return base
        },
        effect(x) {
            let exp = n(1)
            let ef = Decimal.pow(this.base(), x.pow(exp))
            return ef
        },
        display() {
            return "给予 F 维度一个 x" + format(this.base()) + " 的乘数 \n\
            消耗：" + format(this.cost()) + " G \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " \n\
            效果：x" + format(this.effect())
        },
        unlocked() { return hasUpgrade('G',25) }
    },

    13: {
        title: "Gb3",
        cost(x) {
            if(player.Z.points.gte(23)){
                return Decimal.pow(10, Decimal.pow(2, x))
            }
            if(player.Z.points.gte(20)){
                return Decimal.pow(100, Decimal.pow(2, x))
            }
            let cost = Decimal.pow(1000, x.pow(
                player.Z.points.gte(17) ? 3 : 1.5
            )).mul(
                player.Z.points.gte(19) ? 1 :
                player.Z.points.gte(17) ? 1e9 : 1e12
            )
            if(x.gte(10) && player.Z.points.gte(19))
                cost = Decimal.pow(1000, x.pow(6).div(1000))
            return cost
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() { 
            if(!player.Z.points.gte(23))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        base() {
            let base = n(1.1)
            if (hasUpgrade('G',42)) base = n(1.11)
            if (hasUpgrade('F',75)) base = Decimal.add(base, upgradeEffect('F',75))
            if (hasUpgrade('F',82)) base = Decimal.mul(base, upgradeEffect('F',82))
            if (hasUpgrade('F',84)) base = Decimal.mul(base, upgradeEffect('F',84))
            return base
        },
        effect(x) {
            let exp = n(1)
            let ef = Decimal.pow(this.base(), x.pow(exp))
            return ef
        },
        display() {
            return "给予 Bb5 / Eb10 一个 x" + format(this.base()) + " 的乘数 \n\
            消耗：" + format(this.cost()) + " G \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " \n\
            效果：x" + format(this.effect())
        },
        unlocked() { return hasUpgrade('G',25) }
    },
    21: {
        title: "Gsb1",
        cost(x) {
            if (mil('G',17) || player.Z.points.gte(29)) {
                let cost = Decimal.pow(
                    hasUpgrade("G",122) ? 4 : 4.1,
                    x.pow(hasUpgrade("G",122) ? 1.25 : 1.35)
                )
                if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
                if (hasUpgrade('G',81)) cost = cost.div(upgradeEffect('G',81))
                return cost
            }

            let bas = n(10)
            if (hasUpgrade('G',61)) bas = n(5)
            if (hasUpgrade('G',82)) bas = bas.sub(0.2)
            if (hasUpgrade('G',93)) bas = bas.sub(0.2)
            if (hasUpgrade('G',102)) bas = bas.sub(0.4)

            let e = n(1.35)
            if (x.gte(500) && !hasMilestone('Z',27)) e = e.add(0.03)

            let cost = Decimal.pow(bas, x.pow(e)).div(hasMilestone('Z',25) ? 10 : 1000)
            if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
            if (hasUpgrade('G',81)) cost = cost.div(upgradeEffect('G',81))
            return cost
        },
        canAfford() { return player[this.layer].Gs.gte(this.cost()) },
        buy() { 
            if(!mil('G',27) && player.Z.points.lt(29)) {
                player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())
            }
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        extra(){
            let e = n(0)
            if (hasUpgrade('G',111)) e = e.add(getBuyableAmount('G',22))
            if (hasUpgrade('G',111)) e = e.add(layers.G.buyables[22].extra())
            if (hasUpgrade('G',93)) e = e.add(getBuyableAmount('G',31))
            if (hasUpgrade('G',93)) e = e.add(layers.G.buyables[31].extra())
            return e
        },
        base(){
            let t = n(1.1)
            if (hasUpgrade('G',103)) t = t.add(0.1)
            if(hasUpgrade('G',105)) t = t.mul(1.05)

            let base = player.G.Gs.add(10).log(10).pow(t)
            if (hasUpgrade('G',63)) base = Decimal.mul(base, 1.2)
            if (hasMilestone('G',15)) base = Decimal.mul(base, 13/12)
            if (hasUpgrade('G',71)) base = Decimal.mul(base, 1.1)
            if (hasUpgrade('G',74)) base = Decimal.mul(base, upgradeEffect('G',74))
            if (hasUpgrade('G',75)) base = Decimal.mul(base, upgradeEffect('G',75))
            if (hasMilestone('G',19)) base = Decimal.mul(base, 1.1)
            return base
        },
        effect(x) {
            let ef = Decimal.pow(this.base(), x.add(this.extra()))
            return ef
        },
        display() {
            return "Gs 获取量 x" + format(this.base()) + " \n\
            消耗：" + format(this.cost()) + " Gs \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
            效果：x" + format(this.effect())
        },
        unlocked() { return (hasMilestone('G',14) && hasMilestone('Z',24)) || hasMilestone('Z',25) }
    },

    22: {
        title: "Gsb2",
        cost(x) {
            if (player.Z.points.gte(30)) {
                let cost = Decimal.pow(
                    hasUpgrade("G",92) ? 5 : 10,
                    x.pow(player.Z.points.gte(33) ? 2 : 2.5)
                )
                if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
                if (hasUpgrade('G',81)) cost = cost.div(upgradeEffect('G',81))
                return cost
            }

            let bas = n(1e5)
            if (hasUpgrade('G',85)) bas = Decimal.mul(bas, 0.4)
            if (hasUpgrade('G',92)) bas = Decimal.mul(bas, 0.5)

            let e = n(1.8)
            if (x.gte(50)) e = e.add(0.1)
            if (hasUpgrade('G',104)) e = e.sub(0.05)
            if (hasUpgrade('G',113)) e = e.sub(0.05)

            let cost = Decimal.pow(bas, x.pow(e)).times(hasUpgrade('G',91) ? 1 : 1e60)
            if (hasUpgrade('G',65)) cost = Decimal.pow(cost, upgradeEffect('G',65))
            if (hasUpgrade('G',81)) cost = cost.div(upgradeEffect('G',81))
            return cost
        },
        canAfford() { return player[this.layer].Gs.gte(this.cost()) },
        buy() {
            if(!mil('G',27) && player.Z.points.lt(30)) {
                player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())
            }
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        extra(){
            let e = n(0)
            if (hasUpgrade('G',104) && player.Z.points.gte(30)) e = e.add(getBuyableAmount('G',23))
            if (hasUpgrade('G',104) && player.Z.points.gte(30)) e = e.add(layers.G.buyables[23].extra())
            if (hasUpgrade('G',112) && player.Z.points.gte(30)) e = e.add(getBuyableAmount('G',32))
            if (hasUpgrade('G',112) && player.Z.points.gte(30)) e = e.add(layers.G.buyables[32].extra())
            return e
        },
        base(){
            let base = player.G.Gs.add(10).log(10).pow(0.6).div(200)
            if(player.Z.points.gte(32))
                base = player.G.Gs.add(1).log(10).cbrt().div(115)
            if (hasUpgrade('G',64)) base = base.mul(1.15)
            if (hasMilestone('G',19)) base = base.mul(1.1)
            if(player.Z.points.gte(32)) return base
            return base.min(1111)
        },
        purchaseLimit() {
            if(hasMilestone('Z',29)) return Decimal.dInf
            let lim = n(4000)
            return lim
        },
        effect(x) {
            let exp = n(1)
            let ef = Decimal.mul(this.base(), x.add(this.extra()).pow(exp)).add(1)
            return ef
        },
        display() {
            if(hasMilestone('Z',29))
                return "Gs 获取基础 +^" + format(this.base()) + " \n\
                消耗：" + format(this.cost()) + " Gs \n\
                数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
                效果：^" + format(this.effect())

            return "Gs 获取基础 +^" + format(this.base()) + "（上限 " + format(this.purchaseLimit()) + " 次购买） \n\
            消耗：" + format(this.cost()) + " Gs \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " \n\
            效果：^" + format(this.effect())
        },
        unlocked() { return (hasUpgrade('G',63)) || hasMilestone('Z',29) }
    },

    23: {
        title: "Gsb3",
        cost(x) {
            if (player.Z.points.gte(30)) {
                let cost = Decimal.pow(1000, x.pow(3))
                if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
                if (hasUpgrade('G',81)) cost = cost.div(upgradeEffect('G',81))
                return cost
            }
            if (mil('G',17)) {
                let cost = Decimal.pow(100, x)
                if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
                if (hasUpgrade('G',81)) cost = cost.div(upgradeEffect('G',81))
                return cost
            }

            let bas = n(1000)
            let e = n(1.2)
            if (hasUpgrade('G',94)) bas = bas.div(10)
            if (hasUpgrade('G',104)) e = e.sub(0.1)

            let cost = Decimal.pow(bas, x.pow(e)).times(hasUpgrade('G',91) ? 1 : 1e260)
            if (hasUpgrade('G',73)) cost = cost.pow(upgradeEffect('G',65))
            if (hasUpgrade('G',81)) cost = cost.div(upgradeEffect('G',81))
            return cost
        },
        canAfford() { return player[this.layer].Gs.gte(this.cost()) },
        buy() {
            if(!mil('G',27) && player.Z.points.lt(30)) {
                player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())
            }
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        extra(){
            let e = n(0)
            if (hasUpgrade('G', player.Z.points.gte(33) ? 73 : 102) && player.Z.points.gte(32)) 
                e = e.add(getBuyableAmount('G',33))
            if (hasUpgrade('G', player.Z.points.gte(33) ? 73 : 102) && player.Z.points.gte(32)) 
                e = e.add(layers.G.buyables[33].ex())
            return e
        },
        base(){
            if(player.Z.points.gte(30))
                return player.G.Gs.add(1).log(10).cbrt().div(hasUpgrade('G',125) ? 100 : 110).mul(hasMilestone('G',19) ? 1.1 : 1)

            let base = player.G.Gs.add(10).log(10).div(1000).mul(player.G.buyables[23].add(1))
            if (hasUpgrade('G',125)) base = base.mul(1.1)
            return base
        },
        effect(x) {
            let ef = Decimal.mul(this.base(), x.add(this.extra()))
            if (player.Z.points.gte(30)) ef = ef.add(1)
            return ef
        },
        display() {
            if(hasMilestone('Z',29))
                return "Gs 效果 +^" + format(this.base()) + " \n\
                消耗：" + format(this.cost()) + " Gs \n\
                数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
                效果：^" + format(this.effect())

            return "Gs 效果指数 +" + format(this.base()) + " \n\
            消耗：" + format(this.cost()) + " Gs \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " \n\
            效果：+" + format(this.effect())
        },
        unlocked() { return (hasUpgrade('G',72)) || hasMilestone('Z',29) }
    },
    31: {
    title: "Gsb4",
    cost(x) {
        if (player.Z.points.gte(31)) {
            let cost = Decimal.pow(
                hasUpgrade("G",93) ? 4 : 4.8,
                x.pow(hasUpgrade("G",122) ? 1.5 : 1.6)
            )
            if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
            return cost
        }

        let bas = n(10)
        let e = n(1.4)

        if (hasUpgrade('G',85)) bas = n(7)
        if (hasUpgrade('G',93)) bas = n(5)
        if (hasUpgrade('G',112)) bas = n(4.9)

        if (x.gte(200) && player.Z.points.gte(30)) e = e.add(0.03)
        if (x.gte(286) && player.Z.points.gte(30)) e = x.div(200)

        let cost = Decimal.pow(bas, x.pow(e)).times(10)
        if (hasUpgrade('G',104) && player.Z.points.lt(30)) cost = cost.pow(upgradeEffect('G',104))
        if (hasUpgrade('G',73) && player.Z.points.gte(30)) cost = cost.pow(upgradeEffect('G',65))
        return cost
    },

    canAfford() { return player[this.layer].Gsi.gte(this.cost()) },

    buy() {
        if(!mil('G',27) && player.Z.points.lt(31)) {
            player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },

    extra(){
        let e = n(0)
        if (hasUpgrade('G',111)) e = e.add(getBuyableAmount('G',32))
        if (hasUpgrade('G',111)) e = e.add(layers.G.buyables[32].extra())
        if (hasUpgrade('G',113) && player.Z.points.gte(30)) e = e.add(getBuyableAmount('G',41))
        if (hasUpgrade('G',113) && player.Z.points.gte(30)) e = e.add(layers.G.buyables[41].extra())

        let b5 = n(0)
        if (hasUpgrade('G',114)) b5 = b5.add(0.2)
        if (hasUpgrade('G',115)) b5 = b5.add(0.6)
        if (hasUpgrade('G',121)) b5 = b5.add(0.2)

        if(player.Z.points.lt(31)) e = e.add(n(getBuyableAmount('G',33)).mul(b5))
        return e
    },

    purchaseLimit() {
        let lim = n(1000)
        if(player.Z.points.gte(31)) return Decimal.dInf
        return lim
    },

    base() {
        let base = player.G.Gsi.add(10).log(10).pow(1.1).mul(2)
        if (hasUpgrade('G', player.Z.points.gte(33)?75:85)) base = Decimal.mul(base, upgradeEffect('G', player.Z.points.gte(33)?75:85))
        if (hasMilestone('G',19)) base = base.mul(1.1)
        if (hasUpgrade('G',63) && player.Z.points.gte(34)) base = Decimal.mul(base, 1.2)
        if (hasUpgrade('G',71) && player.Z.points.gte(34)) base = Decimal.mul(base, 1.1)
        return base
    },

    effect(x) {
        let ef = Decimal.pow(this.base(), x.add(this.extra())).max(1)
        return ef
    },

    display() {
        if(hasMilestone('Z',30))
            return "Gsi 获取量 x" + format(this.base()) + " \n\
            消耗：" + format(this.cost()) + " Gsi \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
            效果：x" + format(this.effect())

        return "Gsi 获取量 x" + format(this.base()) + "（上限 " + format(this.purchaseLimit()) + " 次购买） \n\
        消耗：" + format(this.cost()) + " Gsi \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：x" + format(this.effect())
    },

    style() {
        if (this.canAfford() && !getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))
            return {'background-color': '#FF00F1'}
    },

    unlocked() { return (hasUpgrade('G',83) && hasMilestone('Z',26)) || hasMilestone('Z',29) }
},
32: {
    title: "Gsb5",
    cost(x) {
        if (player.Z.points.gte(32)) {
            let cost = Decimal.pow(
                player.Z.points.gte(33) ? 5 : 100,
                x.pow(player.Z.points.gte(33) ? 2 : (hasMilestone("G",18) ? 2 : 3))
            )
            if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
            return cost
        }

        let bas = n(1e4)
        let e = n(1.85)

        if (hasUpgrade('G',94) && player.Z.points.lt(30)) bas = bas.mul(0.25)
        if (hasMilestone('G',17)) bas = n(1000)
        if (hasUpgrade('G',112)) bas = n(500)

        if (x.gte(62)) e = x.mul(0.03)

        let cost = Decimal.pow(bas, x.pow(e)).times(
            player.Z.points.gte(31) ? 1 :
            player.Z.points.gte(29) ? '1e100' : '1e64'
        )

        if (hasUpgrade('G',103) && player.Z.points.lt(31))
            cost = cost.div(player.Z.points.gte(29) ? '1e100' : '1e64')
        if (hasUpgrade('G',104) && player.Z.points.lt(31))
            cost = cost.pow(upgradeEffect('G',104))
        if (hasUpgrade('G',73) && player.Z.points.gte(31))
            cost = cost.pow(upgradeEffect('G',65))

        return cost
    },

    purchaseLimit() {
        let lim = n(40)
        if(player.Z.points.gte(32)) return Decimal.dInf
        if(mil('Z',28)) lim = lim.add(20)
        if(hasUpgrade("G",115) && player.Z.points.gte(31)) lim = lim.add(40)
        return lim
    },

    canAfford() { return player[this.layer].Gsi.gte(this.cost()) },

    buy() {
        if(!mil('G',27) && player.Z.points.lt(32)) {
            player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },

    extra(){
        let e = n(0)
        if (hasUpgrade('G', player.Z.points.gte(33)?73:102) && player.Z.points.gte(32))
            e = e.add(getBuyableAmount('G',33))
        if (hasUpgrade('G', player.Z.points.gte(33)?73:102) && player.Z.points.gte(32))
            e = e.add(layers.G.buyables[33].ex())
        if (hasUpgrade('G',114) && player.Z.points.gte(32))
            e = e.add(getBuyableAmount('G',42))
        if (hasUpgrade('G',114) && player.Z.points.gte(34))
            e = e.add(layers.G.buyables[42].extra())
        return e
    },

    base() {
        let base = player.G.Gsi.add(10).log(10).pow(0.65).div(100)
        if(player.Z.points.gte(32))
            base = player.G.Gsi.add(1).log(10).cbrt().div(100)
        if (hasMilestone('G',19)) base = base.mul(1.1)
        return base
    },

    effect(x) {
        let ef = Decimal.mul(this.base(), x.add(this.extra()))
        if (player.Z.points.gte(32)) ef = ef.add(1)
        return ef
    },

    display() {
        if(hasMilestone('Z',31))
            return "Gsi 获取基础 +^" + format(this.base()) + " \n\
            消耗：" + format(this.cost()) + " Gsi \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
            效果：^" + format(this.effect())

        return "Gsi 获取指数 +" + format(this.base()) + "（上限 " + format(this.purchaseLimit()) + " 次购买） \n\
        消耗：" + format(this.cost()) + " Gsi \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },

    style() {
        if (this.canAfford() && !getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))
            return {'background-color': '#FF00F1'}
    },

    unlocked() { return (hasUpgrade('G',83) && hasMilestone('Z',26)) || hasMilestone('Z',30) }
},33: {
    title: "Gsb6",
    cost(x) {
        if (player.Z.points.gte(36)) {
            let cost = Decimal.pow(10, Decimal.pow(2.5, x).mul(upgradeEffect('G',65)))
            return cost
        }

        let bas = n('1e20')
        let e = n(2.1)

        if (x.gte(21)) e = x.mul(0.1)
        if(player.Z.points.gte(33)) {
            bas = n(10)
            e = x.mul(0.2).add(1)
        }

        let cost = Decimal.pow(bas, x.pow(e)).times(
            player.Z.points.gte(32) ? 1 :
            hasMilestone('Z',28) ? '1e500' :
            hasMilestone('Z',27) ? '1e700' : '1e600'
        )

        if(hasUpgrade('G',111) && player.Z.points.lt(32))
            cost = cost.div(hasMilestone('Z',28) ? '1e500' : hasMilestone('Z',27) ? '1e700' : '1e600')

        if ((hasUpgrade('G',73) && player.Z.points.gte(32)) ||
            (hasUpgrade('G',65) && player.Z.points.gte(33)))
            cost = cost.pow(upgradeEffect('G',65))

        return cost
    },

    purchaseLimit() {
        if(player.Z.points.gte(36)) return Decimal.dInf

        let lim = n(7)
        if(mil('Z',28)) lim = lim.add(3)
        if(mil('Z',30)) lim = lim.add(5)
        if(hasUpgrade("G",115) && player.Z.points.gte(31)) lim = lim.add(85)
        if(mil('H',0)) lim = lim.add(100)
        return lim
    },

    canAfford() { return player[this.layer].Gsi.gte(this.cost()) },

    buy() {
        if(!mil('G',27) && player.Z.points.lt(36)) {
            player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },

    base() {
        if(player.Z.points.gte(33)) return this.hardcap()

        let base = player.G.Gsi.add(10).log(10).pow(0.4).div(600)
        if (hasUpgrade('G',103)) base = base.mul(1.25)

        let sc = n(0.7)
        if (base.gte(0.03)) base = base.div(0.03).pow(sc).mul(0.03)

        base = base.min(this.hardcap())
        return base
    },

    hardcap(){
        let hp = n(0.05)
        if(player.Z.points.gte(36)){
            hp = Decimal.mul(0.01, player.G.upgrades.length)
        } else if(player.Z.points.gte(33) && hasUpgrade("G",65)){
            hp = n(player.G.upgrades.length - 20).mul(0.01).max(0.05)
        } else if(hasUpgrade("G",115) && player.Z.points.gte(31)) {
            hp = hp.add(0.25)
        }

        if(hasUpgrade("G",123)) hp = hp.add(0.02)
        if(upg('G',125)) hp = hp.add(upgradeEffect('G',125))
        if(mil('G',21)) hp = hp.add(0.005)
        if(upg('G',133)) hp = hp.add(0.02)
        if(gcs('G',102)) hp = hp.add(clickableEffect('G',102))
        if(gcs('G',111)) hp = hp.add(clickableEffect('G',111))

        hp = hp.add(tmp.H.effect)

        if(gcs('G',121)) hp = hp.mul(1.06)
        if(hasUpgrade('G',103) && player.Z.points.gte(33)) hp = hp.mul(1.25)

        return hp
    },

    ex(){
        let e = n(0)
        if(gcs('G',42)) e = e.add(getBuyableAmount('G',43))
        return e
    },

    effect(x) {
        let ef = this.base().mul(x.add(this.ex()))
        if(player.Z.points.gte(33)) return ef.add(1)

        let sc = n(0.5)
        if(player.G.Gsetot.gte("1e4555")) sc = sc.add(0.25)
        if(mil('G',21)) sc = sc.add(0.03)
        if(gcs('G',121)) sc = sc.add(0.07)
        if(gcs('G',104)) sc = sc.add(0.02)
        if(upg('H',35)) sc = sc.add(0.05)
        if(mil('G',31)) sc = sc.add(0.03)
        if(mil('H',10)) sc = sc.add(0.01)
        if(upg('G',154)) sc = sc.add(0.02)

        if(ef.gte(4.2)) ef = ef.div(4.2).pow(sc).mul(4.2)
        return ef
    },

    display() {
        if(player.Z.points.gte(36))
            return "Gsi 效果 +^" + format(this.base(),3) + " \n\
            消耗：" + format(this.cost()) + " Gsi \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.ex()) + " \n\
            效果：^" + format(this.effect())

        if(player.Z.points.gte(33))
            return "Gsi 效果 +^" + format(this.base(),3) + " \n\
            消耗：" + format(this.cost()) + " Gsi \n\
            数量：" + format(player[this.layer].buyables[this.id]) + "/" + format(this.purchaseLimit()) + " + " + format(this.ex()) + " \n\
            效果：^" + format(this.effect())

        return "Gsi 效果指数 +" + format(this.base(),3) +
            "（硬上限 " + format(this.hardcap(),3) +
            "，效果上限及 " + format(this.purchaseLimit()) + " 次购买） \n\
        消耗：" + format(this.cost()) + " Gsi \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },

    style() {
        if (this.canAfford() && !getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))
            return {'background-color': '#FF00F1'}
    },

    unlocked() { return (hasUpgrade('G',83) && hasMilestone('Z',26)) || hasMilestone('Z',31) }
},
41: {
    title: "Gsb7",
    cost(x) {
        if (hasUpgrade('G',162) || player.Z.points.gte(35)) {
            let cost = Decimal.pow(4, x.pow(1.4))
            if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
            return cost
        }

        let bas = n(10)
        if (hasMilestone('G',17)) bas = bas.sub(1)
        if (hasUpgrade('G',122)) bas = n(4)

        let e = n(1.45)
        if (x.gte(500) && player.Z.points.lt(29)) e = e.add(0.1)
        if (hasMilestone('G',20)) e = n(1.44)
        if (gcs('G',51)) e = e.sub(0.04)

        let cost = Decimal.pow(bas, x.pow(e)).times(200)
        if (hasUpgrade('G',104) && player.Z.points.gte(31)) cost = cost.pow(upgradeEffect('G',104))
        return cost
    },

    purchaseLimit() {
        let lim = n(100)
        if (hasUpgrade('G',162) || player.Z.points.gte(35)) return Decimal.dInf
        if (player.Z.points.gte(30)) lim = lim.add(100)
        if (hasUpgrade('G',122)) lim = lim.add(800)
        if (hasMilestone('G',20)) lim = lim.add(1000)
        if (hasUpgrade('G',125)) lim = lim.add(1000)
        return lim
    },

    canAfford() { return player[this.layer].Gse.gte(this.cost()) },

    buy() {
        if(!mil('G',27) && player.Z.points.lt(35)) {
            player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },

    extra(){
        let e = n(0)
        if (hasUpgrade('G',114)) e = e.add(getBuyableAmount('G', player.Z.points.gte(31)?42:43)).add(getBuyableAmount('G',44))
        if (hasUpgrade('G',114) && player.Z.points.gte(34)) e = e.add(layers.G.buyables[42].extra())
        return e
    },

    base() {
        let base = player.G.Gse.add(10).log(10).pow(1.1).mul(player.Z.points.gte(33)?1:2)
        if (hasUpgrade('G',75) && player.Z.points.gte(35)) base = Decimal.mul(base, upgradeEffect('G',75))
        if (hasUpgrade('G',85) && player.Z.points.gte(33) && player.Z.points.lt(35)) base = Decimal.mul(base, upgradeEffect('G',85))
        if (hasMilestone('G',19)) base = base.mul(1.1)
        if (hasUpgrade('G',63) && player.Z.points.gte(35)) base = Decimal.mul(base, 1.2)
        if (hasUpgrade('G',71) && player.Z.points.gte(35)) base = Decimal.mul(base, 1.1)
        return base
    },

    effect(x) {
        let ef = Decimal.pow(this.base(), x.add(this.extra())).max(1)
        return ef
    },

    display() {
        if (hasUpgrade('G',162) || hasMilestone('Z',34))
            return "Gse 获取量 x" + format(this.base()) + " \n\
            消耗：" + format(this.cost()) + " Gse \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
            效果：x" + format(this.effect())

        return "Gse 获取基础 x" + format(this.base()) + "（上限 " + format(this.purchaseLimit()) + " 次购买） \n\
        消耗：" + format(this.cost()) + " Gse \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：x" + format(this.effect())
    },

    style() {
        if (this.canAfford() && !getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))
            return {'background-color': '#14FFF3'}
    },

    unlocked() { return (hasUpgrade('G',101)) || hasMilestone('Z',33) }
},
42: {
    title: "Gsb8",
    cost(x) {
        if (hasUpgrade('G',162) && player.Z.points.gte(35)) {
            let cost = Decimal.pow(100, x.pow(2))
            if (hasUpgrade('G',65)) cost = cost.pow(upgradeEffect('G',65))
            return cost
        }

        let bas = n(4000)
        let e = n(player.Z.points.gte(35) ? 2.08 : 1.95)

        if (x.gte(20) && player.Z.points.lt(29)) e = e.add(0.15)
        if (gcs('G',51)) e = e.sub(0.08)

        if (hasMilestone('G',17)) bas = n(1000)
        if (hasUpgrade('G',112)) bas = n(200)
        if (hasMilestone('G',19)) bas = n(100)

        let cost = Decimal.pow(bas, x.pow(e)).times(player.Z.points.gte(35)?1:'1e26')
        return cost
    },

    purchaseLimit() {
        let lim = n(20)
        if (hasMilestone('Z',34) && upg('G',162)) return Decimal.dInf
        if (upg('G',123)) lim = lim.add(80)
        if (upg('G',164)) lim = lim.add(1900)
        return lim
    },

    extra(){
        let e = n(0)
        if (hasUpgrade('G',115) && player.Z.points.gte(34)) e = e.add(getBuyableAmount('G',43))
        return e
    },

    canAfford() { return player[this.layer].Gse.gte(this.cost()) },

    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },

    base(){
        let exp = n(0.5)
        if (player.Z.points.gte(35)) exp = n(1/3 - 0.05)
        if (hasUpgrade('G',112)) exp = exp.add(0.05)
        let b = player.G.Gse.add(10).log(10).pow(exp).div(100).add(0.05)
        return b
    },

    effect(x) {
        let exp = n(1)
        let ef = Decimal.mul(this.base(), x.add(this.extra()).pow(exp)).add(player.Z.points.gte(35)?1:0)
        return ef
    },

    display() {
        if (hasMilestone('Z',34) && upg('G',162))
            return "Gse 获取基础 +^" + format(this.base()) + " \n\
            消耗：" + format(this.cost()) + " Gse \n\
            数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
            效果：^" + format(this.effect())

        if (hasMilestone('Z',34))
            return "Gse 获取基础 +^" + format(this.base()) + " \n\
            消耗：" + format(this.cost()) + " Gse \n\
            数量：" + format(player[this.layer].buyables[this.id]) + "/" + format(this.purchaseLimit()) + " + " + format(this.extra()) + " \n\
            效果：^" + format(this.effect())

        return "Gse 获取指数 +" + format(this.base()) + "（上限 " + format(this.purchaseLimit()) + " 次购买） \n\
        消耗：" + format(this.cost()) + " Gse \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：+" + format(this.effect())
    },

    style() {
        if (this.canAfford() && !getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))
            return {'background-color': '#14FFF3'}
    },

    unlocked() { return (hasUpgrade('G',101)) || player.Z.points.gte(35) }
},43: {
    title: "Gsb9",
    cost(x) {
        let bas = n('1e4')
        let e = n(2.4)

        if (x.gte(8) && player.Z.points.lt(29)) e = e.add(0.6)
        if (x.gte(12) && player.Z.points.gte(34)) e = x.mul(0.2)

        let cost = Decimal.pow(bas, x.pow(e)).times(player.Z.points.gte(36)?1:player.Z.points.gte(29)?'1e48':'2e52')
        if (mil('G',24)) cost = cost.pow(0.8)
        if (mil('G',26)) cost = cost.pow(0.8)
        if (upg('G',111)) cost = cost.div('2e5')
        return cost
    },

    purchaseLimit() {
        let lim = n(10)
        if (upg('G',123)) lim = lim.add(90)
        return lim
    },

    canAfford() { return player[this.layer].Gse.gte(this.cost()) },

    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },

    base(){
        if (player.Z.points.gte(33)) return this.hardcap()
        let base = player.G.Gsi.add(10).log(10).pow(0.38).div(750)
        let sc = n(0.7)
        if (base.gte(0.02)) base = base.div(0.02).pow(sc).mul(0.02)
        base = base.min(this.hardcap())
        return base
    },

    hardcap(){
        let hp = n(0.3)
        if (player.Z.points.gte(33)) hp = n(0.05)
        if (hasUpgrade('G',104) && player.Z.points.gte(36)) hp = hp.add(player.G.upgrades.length * 0.001)
        if (hasUpgrade('G',123)) hp = hp.add(0.02)
        if (hasUpgrade('G',124)) hp = hp.add(0.03)
        if (hasMilestone('G',21)) hp = hp.add(0.005)
        if (gcs('G',102)) hp = hp.add(clickableEffect('G',102))
        if (gcs('G',111)) hp = hp.add(clickableEffect('G',111))
        hp = hp.add(tmp.H.effect)
        if (gcs('G',121)) hp = hp.mul(1.06)
        if (getClickableState('G',31) && player.Z.points.gte(33)) hp = hp.mul(1.02)
        return hp
    },

    effect(x) {
        let ef = Decimal.mul(this.base(), x)
        if (hasUpgrade('G',131)) return ef
        let sc = n(0.5)
        if (player.G.Gsetot.gte('1e6415')) sc = sc.add(0.1)
        if (hasMilestone('G',21)) sc = sc.add(0.03)
        if (gcs('G',121)) sc = sc.add(0.07)
        if (hasUpgrade('G',133)) sc = sc.add(0.02)
        if (gcs('G',104)) sc = sc.add(0.02)
        if (ef.gte(1.1)) ef = ef.div(1.1).pow(sc).mul(1.1)
        return ef
    },

    display() {
        if (player.Z.points.gte(33))
            return "Gse 第一效果指数 +" + format(this.base(),3) + " \n\
            消耗：" + format(this.cost()) + " Gse \n\
            数量：" + format(player[this.layer].buyables[this.id]) + "/" + format(this.purchaseLimit()) + " \n\
            效果：+" + format(this.effect())

        return "Gse 第一效果指数 +" + format(this.base(),3) +
            "（硬上限 " + format(this.hardcap(),3) +
            "，上限 " + format(this.purchaseLimit()) + " 次购买） \n\
        消耗：" + format(this.cost()) + " Gse \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },

    style() {
        if (this.canAfford() && !getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))
            return {'background-color': '#14FFF3'}
    },

    unlocked() { return (hasUpgrade('G',101)) || player.Z.points.gte(36) }
},
44: {
    title: "Gsb10",
    cost(x) {
        let e = n(0.75)
        if(player.Z.points.gte(36)) e = n(1)
        let cost = n(10).pow(n(2).pow(x.pow(e))).mul(
            player.Z.points.gte(36) ? 1 :
            upg('G',122) ? 1 :
            player.Z.points.gte(30) ? '1e60' : '1e100'
        )
        return cost
    },
    purchaseLimit() {
        let lim = n(20)
        if(upg('G',164) && mil('Z',34)) lim = lim.add(10)
        if(upg('G',122)) lim = lim.add(10)
        if(player.G.Gsetot.gte('1e6415')) lim = lim.add(10)
        if(mil('G',30)) lim = lim.add(5)
        if(mil('H',8)) lim = lim.add(10)
        return lim
    },
    canAfford() { return player[this.layer].Gse.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    base() {
        let b = player.G.Gse.add(10).log(10).pow(0.5).div(300)
        if(player.G.Gsetot.gte('1e6415')) b = b.mul(1.1)
        b = b.min(this.hardcap())
        return b
    },
    hardcap(){
        let h = n(52)
        if(upg('G',164) && mil('Z',35)) h = h.add(10)
        if(gcs('G',104)) h = h.add(10)
        if(gcs('G',103)) h = h.add(n(clickableEffect('G',111)).mul(2))
        if(upg('G',174)) h = h.add(upgradeEffect('G',174))
        if(upg('G',184)) h = h.add(upgradeEffect('G',184))
        if(upg('H',41)) h = h.add(upgradeEffect('H',41)[0])
        return h
    },
    effect(x) {
        let exp = n(1)
        let ef = Decimal.mul(this.base(), x.pow(exp))
        return ef
    },
    display() {
        return "Gse 第二效果乘数 +" + format(this.base(),3) +
            "（硬上限 " + format(this.hardcap(),3) +
            " 效果及 " + format(this.purchaseLimit()) + " 次购买） \n\
        消耗：" + format(this.cost()) + " Gse \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },
    style() {
        if (this.canAfford() && !getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))
            return {'background-color': '#14FFF3'}
    },
    unlocked() { return (hasUpgrade('G',111)) }
},

51: {
    title: "Gsb11",
    cost(x) {
        let cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(20)).mul('1e647')
        if(upg('G',124)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(16))
        if(upg('G',131)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(10))
        if(upg('G',132)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(6))
        if(mil('G',37)) cost = n(10).pow(n(2).pow(x.pow(this.sc())))
        return cost
    },
    sc(){
        let e = n(0.95)
        if(upg('G',121)) e = e.sub(0.03)
        return e
    },
    canAfford() { return player[this.layer].Gse.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    base() {
        let base = n(1.01)
        if(gcs('G',32)) base = base.add(0.002)
        if(gcs('G',83)) base = base.add(0.0025)
        if(gcs('G',101)) base = base.add(0.0035)
        if(upg('H',15)) base = base.add(0.004)
        return base
    },
    effect(x) {
        let ef = Decimal.pow(this.base(), x)
        return ef
    },
    display() {
        return "提升 Gs 获取量至 ^" + format(this.base(),4) + " \n\
        消耗：" + format(this.cost()) + " Gse \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：^" + format(this.effect(),3)
    },
    style() {
        if (this.canAfford()) return {'background-color': '#14FFF3'}
    },
    unlocked() { return upg('G',121) }
},

52: {
    title: "Gsb12",
    cost(x) {
        let cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(25)).mul('1e1175')
        if(upg('G',124)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(20))
        if(upg('G',131)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(12))
        if(upg('G',132)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(8))
        if(mil('G',37)) cost = n(10).pow(n(2).pow(x.pow(this.sc())))
        return cost
    },
    sc(){
        let e = n(1.05)
        if(upg('G',121)) e = e.sub(0.04)
        return e
    },
    canAfford() { return player[this.layer].Gse.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    base() {
        let base = n(1.0085)
        if(getClickableState('G',32)) base = base.add(0.002)
        if(gcs('G',83)) base = base.add(0.0015)
        if(gcs('G',101)) base = base.add(0.004)
        if(upg('H',15)) base = base.add(0.004)
        return base
    },
    effect(x) {
        let ef = Decimal.pow(this.base(), x)
        return ef
    },
    display() {
        return "提升 Gsi 获取量至 ^" + format(this.base(),4) + " \n\
        消耗：" + format(this.cost()) + " Gse \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：^" + format(this.effect(),3)
    },
    style() {
        if (this.canAfford()) return {'background-color': '#14FFF3'}
    },
    unlocked() { return upg('G',121) }
},

61: {
    title: "GG1",
    cost(x) {
        let cost = n(10).pow(x.pow(this.scaling())).mul(
            player.Z.points.gte(35) ? 1 :
            player.Z.points.gte(31) ? '1e400' : '1e700'
        )
        if (hasUpgrade('G',121)) cost = n(10).pow(x.pow(this.scaling()))
        return cost
    },
    scaling(){
        let e = n(3)
        return e
    },
    canAfford() { return player[this.layer].Gse.gte(this.cost()) },
    am(){
        let a = n(1)
        a = a.mul(tmp.G.ggmt)
        return a
    },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    effect(x) {
        let ef = n(x)
        return ef
    },
    display() {
        return "获得 " + format(this.am()) + " GG \n\
        消耗：" + format(this.cost()) + " Gse \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },
    unlocked() { return (hasUpgrade('G', player.Z.points.gte(35)?82:115)) }
},

62: {
    title: "GG2",
    cost(x) {
        let cost = n(10).tetrate(n(5).add(x.pow(0.15).div(2)))
        return cost
    },
    canAfford() { return player.points.gte(this.cost()) },
    buy() {
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    effect(x) {
        let ef = n(x).mul(this.am())
        return ef
    },
    am(){
        let a = n(5)
        if(upg('G',133)) a = a.add(5)
        a = a.mul(tmp.G.ggmt)
        return a
    },
    display() {
        return "获得 " + format(this.am()) + " GG \n\
        消耗：" + format(this.cost()) + " points \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },
    unlocked() { return hasUpgrade('G',132) }
},

63: {
    title: "GG3",
    cost(x) {
        let cost = n(10).pow(x.pow(this.scaling()))
        return cost
    },
    scaling(){
        let e = n(3)
        return e
    },
    canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
    buy() {
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    effect(x) {
        let ef = n(x).mul(this.am())
        return ef
    },
    am(){
        let a = n(10)
        a = a.mul(tmp.G.ggmt)
        return a
    },
    display() {
        return "获得 " + format(this.am()) + " GG \n\
        消耗：" + format(this.cost()) + " Gsq \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },
    unlocked() { return hasUpgrade('G',133) }
},

71: {
    title: "Gr1",
    cost(x) {
        let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(2).pow(x.sub(1).max(0))).mul(10)
        if(x.gte(6)) c = c.mul(n(4).pow(x.sub(6).pow(1.25)))
        if(x.gte(100)) c = n(10).pow(n(4).pow(x.sub(10).pow(this.sc())))
        if(player[this.layer].Gsr.gte('1e1284') || n(challengeCompletions('I',22)).gte(1))
            c = n(10).pow(n(4).pow(x.pow(this.sc())))
        return c
    },
    sc(){
        let e = n(0.25)
        if(mil('G',33)) e = e.sub(0.01)
        if(mil('G',37)) e = e.sub(0.04)
        if(gba(this.layer, this.id).gte(100)) e = e.add(0.05)
        if(player[this.layer].Gsr.gte('1e1164')) e = e.mul(0.99)
        if(player[this.layer].Gsr.gte('1e1284')) e = e.mul(0.98)
        return e
    },
    bulk(){
        let tar = n(0)
        if(upg('G',152) && player.H.auto7)
            tar = player[this.layer].Gsr.add(10).log(10).max(1).log(4).pow(this.sc().pow(-1))
                .sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
        let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
        if (player[this.layer].Gsr.gte(c))
            player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
    },
    canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
    buy() {
        if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    extra(){
        let e = n(0)
        e = e.add(getBuyableAmount('G',73).div(5))
        if(upg('H',42)) e = e.add(getBuyableAmount('G',33).sub(155).max(0).mul(1.2))
        e = e.add(getBuyableAmount('G',74).div(5))
        return e
    },
    base() {
        let base = player.G.Gsr.add(10).log(10).pow(0.45).mul(3)
        return base
    },
    effect(x) {
        let exp = n(1)
        let ef = this.base().pow(x.add(this.extra()).pow(exp)).max(1)
        if(upg('G',143)) ef = ef.mul(2)
        return ef
    },
    display() {
        return "GsR 获取基础 x" + format(this.base()) + " \n\
        消耗：" + format(this.cost()) + " GsR \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：x" + format(this.effect())
    },
    style() {
        if (this.canAfford()) return {'background-color': '#6DA462'}
    },
    unlocked() { return (mil('G',30)) }
},

72: {
    title: "Gr2",
    cost(x) {
        let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(100).pow(x)).mul(2e15)
        if(mil('G',36)) c = n(10).pow(n(2).pow(x.pow(this.sc())))
        return c
    },
    sc(){
        let e = n(0.5)
        if(player[this.layer].Gsr.gte('1e1164')) e = e.mul(0.99)
        if(upg('H',44)) e = e.sub(0.02)
        return e
    },
    bulk(){
        let t = n(0)
        if(mil('G',36) && player.H.auto9)
            t = t.max(player[this.layer].Gsr.max(1).log(10).max(1).log(2)
                .pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil())
        let c = this.cost(gba(this.layer, this.id).add(t))
        if (player[this.layer].Gsr.gte(c))
            player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
    },
    canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
    buy() {
        if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    base() {
        let b = n(1.01)
        b = b.add(buyableEffect('H',83)[0])
        return b
    },
    efxp(){
        let e = n(0.5)
        if(upg('G',144)) e = e.add(0.02)
        if(mil('H',8)) e = e.add(0.03)
        if(upg('G',153)) e = e.add(0.025)
        return e
    },
    effect(x) {
        let ef = this.base().pow(x.pow(this.efxp()))
        return ef
    },
    display() {
        return "h1/y1 指数除以 " + format(this.base(),4) + " ^x^" + format(this.efxp()) + " \n\
        消耗：" + format(this.cost()) + " GsR \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：/" + format(this.effect(),4)
    },
    style() {
        if (this.canAfford()) return {'background-color': '#6DA462'}
    },
    unlocked() { return (mil('G',30)) }
},

73: {
    title: "Gr3",
    cost(x) {
        let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(10).pow(x)).mul(1e22)
        if(x.gte(100) || n(challengeCompletions('I',22)).gte(1))
            c = n(10).pow(n(2).pow(x.sub(5).pow(this.sc())))
        return c
    },
    sc(){
        let e = n(0.4)
        if(getBuyableAmount(this.layer, this.id).gte(100)) e = e.add(0.05)
        if(upg('H',43)) e = e.sub(0.01)
        if(player[this.layer].Gsr.gte('1e1164')) e = e.mul(0.99)
        if(player[this.layer].Gsr.gte('1e1284')) e = e.mul(0.98)
        return e
    },
    bulk(){
        let tar = n(0)
        if(upg('G',152) && player.H.auto7)
            tar = player[this.layer].Gsr.add(10).log(10).max(1).log(2)
                .pow(this.sc().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).add(4).ceil().max(1)
        let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
        if (player[this.layer].Gsr.gte(c))
            player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
    },
    canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
    buy() {
        if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    base() {
        let e = n(1.5)
        if(player[this.layer].Gsr.gte('5e1432')) e = e.add(0.25)
        let b = player.G.Gsr.add(10).log(10).add(10).log(10).pow(e).div(10).add(0.1)
        b = b.add(buyableEffect('G',74)[1])
        return b
    },
    effect(x) {
        let exp = n(0.9)
        let ef = this.base().mul(x.pow(exp))
        return ef
    },
    display() {
        return "GsR 获取指数 +" + format(this.base()) + " \n\
        消耗：" + format(this.cost()) + " GsR \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：+" + format(this.effect())
    },
    style() {
        if (this.canAfford()) return {'background-color': '#6DA462'}
    },
    unlocked() { return (mil('G',30)) }
},

74: {
    title: "Gr4",
    cost(x) {
        let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(1000).pow(x)).mul('1e412')
        if(mil('G',36)) c = n(10).pow(n(2).pow(x.pow(this.sc())))
        return c
    },
    sc(){
        let e = n(0.4)
        if(getBuyableAmount(this.layer, this.id).gte(25)) e = e.add(0.05)
        if(player[this.layer].Gsr.gte('1e1164')) e = e.mul(0.99)
        return e
    },
    bulk(){
        let t = n(0)
        if(mil('G',36) && player.H.auto9)
            t = t.max(player[this.layer].Gsr.max(1).log(10).max(1).log(2)
                .pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil())
        let c = this.cost(gba(this.layer, this.id).add(t))
        if (player[this.layer].Gsr.gte(c))
            player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
    },
    canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
    buy() {
        if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    base() { return n(0.02) },
    base2() { return n(0.01) },
    effect(x) {
        let exp = [n(0.85), n(0.9)]
        let ef = this.base().mul(x.pow(exp[0]))
        let ef2 = this.base2().mul(x.pow(exp[1]))
        return [ef, ef2]
    },
    display() {
        return "GsR 效果指数 +" + format(this.base()) + " 且 r3 基础 +" + format(this.base2()) + " \n\
        消耗：" + format(this.cost()) + " GsR \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " \n\
        效果：效果 +" + format(this.effect()[0],3) + "，r3 +" + format(this.effect()[1],3)
    },
    style() {
        if (this.canAfford()) return {'background-color': '#6DA462'}
    },
    unlocked() { return player.H.dhmax[1].gte(1) }
},

81: {
    title: "Gsb13",
    cost(x) {
        let bas = n(10)
        if(hasUpgrade("G",124)) bas = n(4)
        let e = n(1.5)
        let cost = Decimal.pow(bas, x.pow(e)).times(
            player.G.Gsetot.gte('1e24000') ? 1 : 100
        )
        if (hasUpgrade('G',163)) cost = cost.pow(upgradeEffect('G',65))
        return cost
    },
    canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gsq = player[this.layer].Gsq.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    extra(){
        let e = n(0)
        if (hasUpgrade('G',161)) e = e.add(getBuyableAmount('G',82))
        if (hasUpgrade('G',161)) e = e.add(layers.G.buyables[82].extra())
        e = e.add(getBuyableAmount('G',91))
        e = e.add(layers.G.buyables[91].extra())
        return e
    },
    base() {
        let base = player.G.Gsq.add(10).log(10)
        return base
    },
    effect(x) {
        let ef = Decimal.pow(this.base(), x.add(this.extra())).max(1)
        return ef
    },
    display() {
        return "Gsq 获取量 x" + format(this.base()) + " \n\
        消耗：" + format(this.cost()) + " Gsq \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：x" + format(this.effect())
    },
    style() {
        if (this.canAfford()) return {'background-color': '#00FF00'}
    },
    unlocked() { return (hasUpgrade('G',115)) && hasMilestone('Z',33) }
},

82: {
    title: "Gsb14",
    cost(x) {
        let bas = n(4)
        let e = n(2)
        let cost = Decimal.pow(bas, x.pow(e)).times(
            player.G.Gsetot.gte('1e24000') ? 1 : '1e10'
        )
        return cost
    },
    canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gsq = player[this.layer].Gsq.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    extra(){
        let e = n(0)
        if (hasUpgrade('G',165)) e = e.add(getBuyableAmount('G',83))
        if (hasUpgrade('G',165)) e = e.add(layers.G.buyables[83].extra())
        e = e.add(getBuyableAmount('G',92))
        e = e.add(layers.G.buyables[92].extra())
        return e
    },
    base() {
        let base = player.G.Gsq.add(10).log(10).cbrt().div(20)
        return base
    },
    effect(x) {
        let ef = Decimal.mul(this.base(), x.add(this.extra())).add(1)
        return ef
    },
    display() {
        return "Gsq 获取基础 +^" + format(this.base()) + " \n\
        消耗：" + format(this.cost()) + " Gsq \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：^" + format(this.effect())
    },
    style() {
        if (this.canAfford()) return {'background-color': '#00FF00'}
    },
    unlocked() { return (hasUpgrade('G',115)) && hasMilestone('Z',33) }
},

83: {
    title: "Gsb15",
    cost(x) {
        let bas = n(4)
        let e = n(3)
        let cost = Decimal.pow(bas, x.pow(e)).times(
            player.G.Gsetot.gte('1e24000') ? 1 : '1e14'
        )
        return cost
    },
    canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gsq = player[this.layer].Gsq.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    extra(){
        let e = n(0)
        e = e.add(getBuyableAmount('G',93))
        e = e.add(layers.G.buyables[93].extra())
        return e
    },
    base() {
        let base = n(0.1)
        return base
    },
    effect(x) {
        let ef = Decimal.mul(this.base(), x.add(this.extra())).add(1).min(this.hardcap())
        return ef
    },
    hardcap(){
        let h = n(2.226)
        if(gcs('G',103)) h = h.add(0.01)
        if(gcs('G',131)) h = h.add(0.178)
        return h
    },
    display() {
        return "Gsq 效果 +^" + format(this.base()) + " \n\
        消耗：" + format(this.cost()) + " Gsq \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：^" + format(this.effect(),3) + "（硬上限：" + format(this.hardcap(),3) + "）"
    },
    style() {
        if (this.canAfford()) return {'background-color': '#00FF00'}
    },
    unlocked() { return (hasUpgrade('G',115)) && hasMilestone('Z',33) }
},

91: {
    title: "Gsb16",
    cost(x) {
        let bas = n(10)
        let e = n(1.5)
        let cost = Decimal.pow(bas, x.pow(e)).times(100)
        if (hasUpgrade('G',183)) cost = cost.pow(upgradeEffect('G',65))
        return cost
    },
    canAfford() { return player[this.layer].Gsg.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gsg = player[this.layer].Gsg.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    extra(){
        let e = n(0)
        e = e.add(getBuyableAmount('G',92))
        e = e.add(layers.G.buyables[92].extra())
        return e
    },
    base() {
        let base = player.G.Gsg.add(10).log(10)
        return base
    },
    effect(x) {
        let ef = Decimal.pow(this.base(), x.add(this.extra())).max(1)
        return ef
    },
    display() {
        return "Gsg 获取量 x" + format(this.base()) + " 并为 Gsb13 等级 +1 \n\
        消耗：" + format(this.cost()) + " Gsg \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：x" + format(this.effect())
    },
    style() {
        if (this.canAfford()) return {'background-color': '#FFFF00'}
    },
    unlocked() { return (hasUpgrade('G',175)) && hasMilestone('Z',35) }
},

92: {
    title: "Gsb17",
    cost(x) {
        let bas = n(4)
        let e = n(2)
        let cost = Decimal.pow(bas, x.pow(e)).times(1e4)
        return cost
    },
    canAfford() { return player[this.layer].Gsg.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gsg = player[this.layer].Gsg.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    extra(){
        let e = n(0)
        e = e.add(getBuyableAmount('G',93))
        e = e.add(layers.G.buyables[93].extra())
        return e
    },
    base() {
        let base = player.G.Gsg.add(10).log(10).cbrt().div(20)
        return base
    },
    effect(x) {
        let ef = Decimal.mul(this.base(), x.add(this.extra())).add(1)
        return ef
    },
    display() {
        return "Gsg 获取基础 +^" + format(this.base()) + " 并为 Gsb14 和 Gsb16 等级 +1 \n\
        消耗：" + format(this.cost()) + " Gsg \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：^" + format(this.effect())
    },
    style() {
        if (this.canAfford()) return {'background-color': '#FFFF00'}
    },
    unlocked() { return (hasUpgrade('G',175)) && hasMilestone('Z',35) }
},

93: {
    title: "Gsb18",
    cost(x) {
        let bas = n(1e5)
        let e = n(3)
        let cost = Decimal.pow(bas, x.pow(e)).times(1e48)
        return cost
    },
    canAfford() { return player[this.layer].Gsg.gte(this.cost()) },
    buy() {
        if(!mil('G',27)) {
            player[this.layer].Gsg = player[this.layer].Gsg.sub(this.cost())
        }
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
    },
    extra(){
        let e = n(0)
        return e
    },
    base() {
        let base = n(0.1)
        return base
    },
    effect(x) {
        let ef = Decimal.mul(this.base(), x.add(this.extra())).add(1).min(this.hardcap())
        return ef
    },
    hardcap(){
        let h = n(3)
        return h
    },
    display() {
        return "Gsg 效果 +^" + format(this.base()) + " 并为 Gsb15 和 Gsb17 等级 +1 \n\
        消耗：" + format(this.cost()) + " Gsg \n\
        数量：" + format(player[this.layer].buyables[this.id]) + " + " + format(this.extra()) + " \n\
        效果：^" + format(this.effect(),3) + "（硬上限：" + format(this.hardcap(),3) + "）"
    },
    style() {
        if (this.canAfford()) return {'background-color': '#FFFF00'}
    },
    unlocked() { return (hasUpgrade('G',175)) && hasMilestone('Z',35) }
},

    },
   challenges: {

    11: {
        name: "Gc1",
        completionLimit: 5,
        challengeDescription: function() {
            return "F1 产量 ^0.9。<br> 完成次数：" + challengeCompletions("G", 11) + "/5"
        },
        unlocked() { return (hasMilestone("G", 2)) },
        goal(){
            let a = [
                n(player.Z.points.gte(21) ? 'e720' : 'e780'),
                n('e880'),
                n('e1080'),
                n('e1220'),
                n('e1670'),
                n('e1670')
            ]
            return a[n(challengeCompletions(this.layer,this.id))]
        },
        goalDescription: function() { return format(this.goal()) + ' F1' },
        canComplete(){ return player.F.F1.gte(this.goal()) },
        rewardDescription: "所有维度乘以 Fd8。<br> 3 次完成时解锁 Gc1p。",
        rewardEffect() {
            if(player.Z.points.gte(19))
                return getBuyableAmount('F',32).add(1).pow(challengeCompletions("G", 11))
            let exp = Decimal.mul(challengeCompletions("G", 11), 0.3).add(0.7)
            let ef = Decimal.pow(getBuyableAmount('F',32), exp).max(1)
            if (challengeCompletions("G", 11) >= 1) return ef
            else return new Decimal(1)
        },
        rewardDisplay() { return 'x' + format(this.rewardEffect()) },
    },

    12: {
        name: "Gc2",
        completionLimit: 5,
        challengeDescription: function() {
            return "维度每次购买乘数 ^0.5。<br> 完成次数：" + challengeCompletions("G", 12) + "/5"
        },
        unlocked() { return (hasUpgrade("F", 75)) },
        goal(){
            let a = [
                n(player.Z.points.gte(19) ? 'e1340' : 'e1740'),
                n('e2250'),
                n('e3050'),
                n('e5888'),
                n('e8300'),
                n('e8300')
            ]
            return a[n(challengeCompletions(this.layer,this.id))]
        },
        goalDescription: function() { return format(this.goal()) + ' F1' },
        canComplete(){ return player.F.F1.gte(this.goal()) },
        rewardDescription: "刻度加速更强。<br> 3 次完成时解锁 Gc2p。",
        rewardEffect() {
            let ef = Decimal.mul(challengeCompletions("G", 12), 0.025).add(1)
            if(player.Z.points.gte(25))
                ef = Decimal.mul(challengeCompletions("G", 12), 0.04).add(1)
            if(hasUpgrade('G',45))
                ef = Decimal.pow(ef, 2)
            if (challengeCompletions("G", 12) >= 1) return ef
            else return new Decimal(1)
        },
        rewardDisplay() { return 'x' + format(this.rewardEffect(), 3) },
    },

    21: {
        name: "Gc3",
        completionLimit: 5,
        challengeDescription: function() {
            return "Fd 维度非常昂贵。<br> 完成次数：" + challengeCompletions("G", 21) + "/5"
        },
        unlocked() { return (hasMilestone("G", 5)) },
        goal(){
            let a = [
                n('e3.5e4'),
                n('e4.46e4'),
                n('e1.83e5'),
                n('e1.2e8'),
                n('e2.4e8'),
                n('e2.4e8')
            ]
            return a[n(challengeCompletions(this.layer,this.id))]
        },
        goalDescription: function() { return format(this.goal()) + ' F1' },
        canComplete(){ return player.F.F1.gte(this.goal()) },
        rewardDescription: "Gc3 完成次数增加维度每次购买乘数。<br> 3 次完成时解锁 Gc3p。",
        rewardEffect() {
            let b = n(0.06)
            if(hasUpgrade('G',45)) b = Decimal.add(b, 0.04)
            let ef = Decimal.mul(challengeCompletions("G", 21), b)
            if (challengeCompletions("G", 21) >= 1) return ef
            else return new Decimal(0)
        },
        rewardDisplay() { return '+' + format(this.rewardEffect(), 3) },
    },

    22: {
        name: "Gc4",
        completionLimit: 5,
        challengeDescription: function() {
            return "刻度加速被禁用。<br> 完成次数：" + challengeCompletions("G", 22) + "/5"
        },
        unlocked() { return (hasMilestone("G", 7)) },
        goal(){
            let a = [
                n(player.Z.points.gte(22) ? 'e7.75e7' : 'e3.73e8'),
                n('e9.72e8'),
                n('e2.35e9'),
                n('e3.02e9'),
                n('e1.93e10'),
                n('e1.93e10')
            ]
            return a[n(challengeCompletions(this.layer,this.id))]
        },
        goalDescription: function() { return format(this.goal()) + ' F1' },
        canComplete(){ return player.F.F1.gte(this.goal()) },
        rewardDescription: "Gc4 完成次数基于刻度加速增强 F 维度购买乘数。<br> 3 次完成时解锁 Gc4p；4 与 5 次时修改 Gc3p 与 Gc4p 公式。",
        rewardEffect() {
            let ef = player.F.buyables[102]
                .mul(challengeCompletions("G", 22))
                .div(player.Z.points.gte(22) ? 5000 : 50000)
                .add(1)
            if (challengeCompletions("G", 22) >= 1) return ef
            else return new Decimal(1)
        },
        rewardDisplay() { return 'x' + format(this.rewardEffect(), 3) },
    },

},
    gc1g(){
    if(player.Z.points.gte(32))return player.F.F1;
        let ef=n(0)
        let exp=n(0.5)
        let exp2=n(0.95)
        if (hasUpgrade('G',55)) exp2=exp2.add(0.05)
        if (hasUpgrade('F',83)) exp=exp.add(0.02)
        if (hasUpgrade('G',42)) exp=exp.add(0.02)
        if (hasUpgrade('G',43)) exp=exp.add(0.03)
        if(hasMilestone('G',8)) exp=exp.add(0.3)
        if(hasMilestone('G',9)) exp=exp.add(0.03)//0.9
        if (hasUpgrade('G',55)) exp=exp.add(0.05)
        if (inChallenge('G',11)){if (player.F.F1.gte('1e1080')) ef=Decimal.pow(10,player.F.F1.div('1e1080').log(10).pow(exp).div(hasUpgrade('G',34)?1:10))}
        if(mil('G',10)) ef=n(10).pow(player.F.F1.pow(exp2).add(10).log(10).pow(exp))
    if(mil('G',11)) ef = ef.mul(player.G.Gc2p.add(1));
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc2g(){
    if(player.Z.points.gte(32))return player.F.F1;
        let ef=n(0)
        let exp=n(0.6)
        let exp2=n(0.9)
        if (hasUpgrade('G',55)) exp2=Decimal.add(exp2,0.1)
        if (hasUpgrade('F',83)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',42)) exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',43)) exp=Decimal.add(exp,0.06)//0.7
        if(hasMilestone('G',8)) exp=Decimal.add(exp,0.05)
        if(hasMilestone('G',9)) exp=Decimal.add(exp,0.05)
        if(hasMilestone('G',11)) exp=Decimal.add(exp,0.05)
        if (hasUpgrade('G',55)) exp=exp.add(0.05)
        //if(gcs('I',42)) exp=exp.add(0.01)
        if (inChallenge('G',12)){if (player.F.F1.gte('1e3050')) ef=Decimal.pow(10,player.F.F1.div('1e3050').log(10).pow(exp))}
        if(mil('G',11)) ef=n(10).pow(player.F.F1.pow(exp2).add(10).log(10).pow(exp))
    if(mil('G',12)) ef = ef.mul(player.G.Gc3p.add(1));
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc3g(){
    if(player.Z.points.gte(32))return player.F.F1;
        let ef=n(0)
        let exp=n(3)
        let exp2=n(0.2)
        if (hasUpgrade('F',85)) exp=exp.mul(2)
        if(hasMilestone('G',12)) exp2=Decimal.add(exp2,0.05)
        if(hasMilestone('G',13)) exp2=Decimal.add(exp2,0.5)
        if (hasUpgrade('G',55)) exp2=exp2.add(0.1)
        if (inChallenge('G',21)){
            if (player.F.F1.gte('1e168000')){
                if (challengeCompletions("G", 22)>=4) ef=Decimal.pow(10,player.F.F1.div('1e168000').log(10).pow(exp2))
                else ef=player.F.F1.div('1e168000').log(10).pow(exp)} }
        if(hasMilestone('G',12)) ef=Decimal.pow(10,player.F.F1.pow(hasUpgrade('G',55)?1:0.2).add(10).log(10).pow(exp2))
    if(mil('G',13)) ef = ef.mul(player.G.Gc4p.add(1));
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc4g(){
    if(player.Z.points.gte(32))return player.F.F1;
        let ef=n(0)
        let exp=n(2)
        let exp2=n(0.14)
        if (hasUpgrade('G',51)) exp2=exp2.add(0.01)
        if(hasMilestone('G',13)) exp2=Decimal.add(exp2,0.1)
        if (hasUpgrade('G',55)) exp2=exp2.add(0.55)
        if (inChallenge('G',22)){
            if (player.F.F1.gte('e2.35e9')){
                if (challengeCompletions("G", 22)>=5) ef=Decimal.pow(10,player.F.F1.div('e2.35e9').log(10).pow(exp2))
                else ef=player.F.F1.div('e2.35e9').log(10).pow(exp)} }
        if(hasMilestone('G',13)) ef=Decimal.pow(10,player.F.F1.pow(hasUpgrade('G',55)?1:0.2).add(10).log(10).pow(exp2))
        if (hasUpgrade('G',41)) ef=Decimal.pow(ef,upgradeEffect('G',41))
        return ef
    },
    gc1ef(){
        let exp=n(0.1)
        if (hasMilestone('F',18)) exp=exp.mul(1.5)
        if (hasUpgrade('G',53))  exp=exp.add(0.1)
        let ef=Decimal.pow(player.G.Gc1p,exp).add(1)
        return ef},
    gc2ef(){
        let exp=n(0.04)
        if (hasUpgrade('F',83)) exp=Decimal.mul(exp,1.5)
        if (hasUpgrade('G',53))  exp=Decimal.add(exp,0.04)
        let ef=Decimal.pow(player.G.Gc2p,exp).add(1)
        return ef},
    gc3ef(){
        let exp=n(0.04)
        if(hasMilestone('G',7)) exp=Decimal.mul(exp,1.5)
        if (hasUpgrade('G',53))  exp=Decimal.add(exp,0.02)
        if (hasUpgrade('G',55))  exp=new Decimal(1)
        let ef=Decimal.pow(player.G.Gc3p,exp).add(1).min("1e1300")
    if(player.Z.points.gte(23))ef = Decimal.pow(player.G.Gc3p,exp).add(10).log(10)
        return ef},
    gc4ef(){
        let exp=n(1.5)
        if (hasUpgrade('G',53))  exp=Decimal.add(exp,0.3)
        if (hasUpgrade('G',55))  exp=new Decimal(2)
        let ef=player.G.Gc4p.add(1).log(10).pow(exp).div(400)
        if (hasUpgrade('G',55))  ef=player.G.Gc4p.add(1).log(10).pow(exp)
        return ef
    },   
    ggmt(){
        let ef=n(1)
        if(mil('I',0)) ef=ef.add(0.1)
        if(gcs('I',63)) ef=ef.add(0.1)
        if(gcs('I',61)) ef=ef.add(0.1)
        if(gcs('I',54)) ef=ef.add(0.1)
        return ef
    }, 
    gsb(){
        let ef=n(0)
        if (player.G.points.gte('ee17')) ef=player.G.points.log(10).log(10).log(10).sub(1.23).div(50)
    if(player.Z.points.gte(26) && player.G.points.gte(1e10)) ef = player.G.points.log(10).log(10).log(10).div(50)
    if(player.Z.points.gte(30)) ef = player.G.points.add(1e10).log(10).log(10).log(10).div(200)
        if (hasUpgrade('G',61))ef = ef.mul(player.Z.points.eq(29)?2:50)
        if (hasUpgrade('B',85))ef = ef.mul(2)
    if (hasUpgrade('G',62))ef = ef.mul(2)
        let exp=n(1)
        if (hasUpgrade('G',62))  exp=Decimal.mul(exp,2)
        if (hasUpgrade('B',85))  exp=Decimal.mul(exp,2)
        exp=Decimal.mul(exp,buyableEffect('G',22))
    if (hasUpgrade('G',101))exp = exp.mul(1.05)
        ef = ef.pow(exp)
        ef=ef.mul(buyableEffect('G',21))
        if (hasUpgrade('G',72)) ef=ef.mul(upgradeEffect('G',72))
        if (hasUpgrade('G',83) || player.Z.points.gte(30))ef=ef.mul(tmp.G.gsir)
        if(hasMilestone('Z',27) && hasMilestone('G',14))ef = ef.mul(10);
        ef=Decimal.pow(ef,buyableEffect('G',51))
        if(gcs('G',44))  ef=ef.pow(clickableEffect('G',44))
        if(gcs('G',63))  ef=ef.pow(clickableEffect('G',63))
        if(gcs('G',73))  ef=ef.pow(clickableEffect('G',73))
        if(gcs('G',122))  ef=ef.pow(1.8)
        if(upg('H',13)) ef=ef.pow(upgradeEffect('H',13))
        ef=ef.pow(buyableEffect('H',33))
        return ef
        /*
        if(mil('I',0)) ef=ef.mul(100)
        if(gcs('I',64)) ef=ef.mul(1e4)
        if(n(challengeCompletions('I',22)).gte(5))  ef=ef.mul('1e1000')
        if(!upg('H',35)) {if (ef.gte('ee19')) ef=n('ee19').mul(n(10).pow(ef.div('ee19').log(10).mul(0.8)))}
        if(mil('J',4)) ef=ef.pow(buyableEffect('I',13))
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[1]).max(0))
        ef=ef.mul(buyableEffect('J',35))
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef*/},
    gsef(){
        let exp=n(2)
        if (hasUpgrade('G',64) && player.Z.points.lt(29))  exp=exp.add(0.4)
        if (hasUpgrade('G',71) && player.Z.points.lt(29))  exp=exp.add(0.4)
        exp=exp.add(buyableEffect('G',23))
        if (hasUpgrade('G',64) && player.Z.points.gte(29))  exp=exp.mul(2)
        if (hasUpgrade('G',71) && player.Z.points.gte(29))  exp=exp.mul(2)
        if (hasUpgrade('G',62))  exp=exp.mul(1.5)
        if (hasMilestone('G',15))  exp=exp.mul(1.5)
        if (hasUpgrade('G',83))  exp=exp.add(0.3)
        let ef=player.G.Gs.add(10).log(10).pow(exp)
        ef=ef.pow(buyableEffect('H',33))
        if(upg('H',21)) ef=ef.pow(upgradeEffect('H',21))
        if(mil('I',0)&&player.G.points.gte('ee1e500')) ef=ef.mul(10)//ef.pow(1.05)
        if(gcs('I',54)&&player.G.points.gte('ee1e500')) ef=ef.mul(10)//ef.pow(1.05)
        if(n(challengeCompletions('I',22)).gte(2)&&player.G.points.gte('ee1e500'))  ef=ef.mul(100)
        if(mil('I',2)) ef=ef.pow(1.005)
        if(gcs('I',51)) ef=ef.pow(1.005)  
        if(ch('I',11)) ef=ef.pow(challengeEffect('I',11))      
        return ef
    }, 
    gsef1(){
        let exp=n(1)
        if (hasUpgrade('G',64) && player.Z.points.lt(29))  exp=exp.add(0.4)
        if (hasUpgrade('G',71) && player.Z.points.lt(29))  exp=exp.add(0.4)
        exp=exp.add(buyableEffect('G',23))
        if (hasUpgrade('G',64) && player.Z.points.gte(29))  exp=exp.mul(2)
        if (hasUpgrade('G',71) && player.Z.points.gte(29))  exp=exp.mul(2)
        if (hasUpgrade('G',62))  exp=exp.mul(1.5)
        if (hasMilestone('G',15))  exp=exp.mul(1.5)
        if (hasUpgrade('G',83))  exp=exp.mul(10/7)
        let ret=player.G.Gs.add(1).pow(exp)
        if(player.Z.points.gte(29))return Decimal.pow(10,ret.log10().mul(5).pow(hasUpgrade('G',75)?upgradeEffect('G',75).mul(hasUpgrade('G',102)?10:hasUpgrade('G',101)?8:hasUpgrade('G',93)?6.4:5):(hasUpgrade('G',102)?10:hasUpgrade('G',101)?8:hasUpgrade('G',93)?6.4:5)));
        if(player.Z.points.gte(28))return Decimal.pow(10,ret.log10().pow(3.6));
        if(player.Z.points.gte(27))return Decimal.pow(10,ret.log10().pow(1.8));
        if(player.Z.points.gte(26))return Decimal.pow(10,ret.log10().pow(1.2));
        return ret;
    }, 
    gsef2(){
        let exp=n(0.01)
        exp=exp.mul(buyableEffect('G',23))
        if(player.Z.points.gte(32))exp = buyableEffect('G',23)
        if (hasUpgrade('G',64) && player.Z.points.gte(29))  exp=exp.mul(2)
        if (hasUpgrade('G',71) && player.Z.points.gte(29))  exp=exp.mul(2)
        if (hasUpgrade('G',62))  exp=exp.mul(1.5)
        if (hasMilestone('G',15))  exp=exp.mul(1.5)
        if (hasUpgrade('G',83))  exp=exp.mul(player.Z.points.gte(35)?1:player.Z.points.gte(33)?2:(10/7))
         exp=exp.mul(buyableEffect('H',33))
        let ret=player.G.Gs.add(10).log10().pow(exp).min("ee10");
    if(hasMilestone('G',18))ret = Decimal.pow(10,player.G.Gs.add(10).log10().sqrt().mul(exp).div(10000));
        if(player.Z.points.gte(32))ret = player.G.Gs.add(1).pow(exp);
        if(player.Z.points.gte(35)){
            ret=ret.log10().pow(6).pow(hasUpgrade('G',75)?upgradeEffect('G',75):1).pow(hasUpgrade('G',83)?2:1);
            if(upg('H',21)) ret=ret.pow(upgradeEffect('H',21))
            if(upg('G',185)) ret=ret.pow(upgradeEffect('G',185))
            if(upg('G',134))ret=Decimal.pow(10,ret.add(1).log10().pow(1.01));
            return Decimal.pow(10,ret);
        }
        if(player.Z.points.gte(34))return Decimal.pow(10,ret.log10().pow(6));
        if(player.Z.points.gte(31))return Decimal.pow(10,ret.log10().pow(1.2));
        return ret;
    }, 
    gsre(){
        let ef=tmp.G.gsef
        ef=ef.pow(buyableEffect('H',63)[0])        
        return ef
    },
    gsib(){
    if(!hasUpgrade('G',83) && player.Z.points.lt(30))return n(0);
        let ef=n(0)
        let exp=n(player.Z.points.gte(32)?1:1.1)
        if(player.Z.points.lte(31))exp=exp.mul(n(buyableEffect('G',32)).add(1))
    else exp=exp.mul(buyableEffect('G',32))
        if (hasUpgrade('G',94) && player.Z.points.lt(31)) exp=exp.add(0.4)
        if (hasUpgrade('G',105) && player.Z.points.lt(32)) exp=exp.add(0.3)
        if (hasUpgrade('G',94) && player.Z.points.gte(31)) exp=exp.mul(2)
        if (hasUpgrade('G',105) && player.Z.points.gte(32)) exp=exp.mul(2)
        if (player.G.Gs.gte(hasMilestone('Z',27)?'1e1000':'1e780')) ef=player.G.Gs.add(10).log(10).sub(hasMilestone('Z',27)?1000:780).max(0).pow(exp).div(hasMilestone('Z',27)?100:10)
    if(player.Z.points.gte(30)) ef = player.G.Gs.add(1).log(10).max(0).pow(exp).div(player.Z.points.gte(32)?50:200);
        if (hasUpgrade('G',61) && player.Z.points.gte(32))ef = ef.mul(50)
        if (hasUpgrade('G',72) && player.Z.points.gte(34)) ef=ef.mul(upgradeEffect('G',72))
        ef=ef.mul(buyableEffect('G',31))
        if(hasUpgrade('G',101) || player.Z.points.gte(34))ef=ef.mul(tmp.G.gser)
        if(hasUpgrade('G',84))  ef=ef.mul(upgradeEffect('G',84))
        if(hasUpgrade('G',95))  ef=ef.mul(upgradeEffect('G',95))
        ef=ef.pow(buyableEffect('G',52))
        if(gcs('G',62))  ef=ef.pow(clickableEffect('G',62))
        if(gcs('G',72))  ef=ef.pow(clickableEffect('G',72))
        if(gcs('G',122))  ef=ef.pow(1.5)
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[2]).max(0))
        ef=ef.mul(buyableEffect('J',35))
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef},
    gsief(){
        let exp=n(0.7)
        exp=exp.add(buyableEffect('G',33))
        if(hasUpgrade('G',101) || player.Z.points.gte(34))exp=exp.add(tmp.G.gser2)
        if(player.Z.points.gte(33))exp = buyableEffect('G',33).mul(tmp.G.gser2.add(1)).div(2);
        if(player.Z.points.gte(36))exp = buyableEffect('G',33).mul(tmp.G.gser2).div(2);
        let m=n(1.25)
        if (hasUpgrade('G',94))  m=m.mul(1.2)
        if (hasUpgrade('G',95))  m=m.mul(hasMilestone('Z',27)?1.1:1.2)
        if(player.Z.points.gte(33))return player.G.Gsi.add(10).log(10).pow(exp).sub(1).mul(m);
        let ef=player.G.Gsi.add(10).log(10).pow(exp).sub(1).mul(m).min((hasUpgrade("G",115) && player.Z.points.gte(31))?Decimal.dInf:1e6)
        return ef
    }, 
    gsir(){//real eff on Gs gain
        let ef=player.G.Gs.add(10).log(10).pow(tmp.G.gsief).max(1)
        return ef}, 
    gseb(){
    if(!hasUpgrade('G',101) && player.Z.points.lt(34))return n(0);
        let ef=n(0)
        let exp=n(player.Z.points.gte(35)?1:0.9)
        if (upg('G',105)) exp=exp.add(0.05)
        exp=exp.mul(buyableEffect('G',42).add(player.Z.points.gte(35)?0:1))
        if(gcs('G',91)) exp=exp.mul(1.2)
        if(player.G.Gsi.gte('1e345')) ef=player.G.Gsi.add(10).log(10).sub(345).max(0).pow(exp).div(2)
        if(hasMilestone('Z',28)&&player.G.Gsi.gte('1e200')) ef=player.G.Gsi.add(10).log(10).sub(200).max(0).pow(exp).div(2)
    if(player.Z.points.gte(34)) ef = player.G.Gsi.add(1).log(10).max(0).pow(exp).div(10);
if (hasUpgrade('G',61) && player.Z.points.gte(35))ef = ef.mul(10)
        ef=ef.mul(buyableEffect('G',41))
    if(upg("G", 115) && player.Z.points.gte(34))ef=ef.mul(tmp.G.gsqr)
        if(upg('G',102))  ef=ef.mul(upgradeEffect('G',102))
        if(upg('G',105))  ef=ef.mul(upgradeEffect('G',105))
        if(gcs('G',21))  ef=ef.mul(clickableEffect('G',21))
        if(gcs('G',33))  ef=ef.mul(clickableEffect('G',33))
        if(gcs('G',71))  ef=ef.mul(clickableEffect('G',71))
        if(gcs('G',61))  ef=ef.pow(clickableEffect('G',61))
        if(gcs('G',122))  ef=ef.pow(1.01)
        if(mil('G',25))    {if(gcs('G',102))  ef=ef.pow(1.005)
        if(gcs('G',111))  ef=ef.pow(1.004)}
        if(mil('H',2)) ef=ef.pow(n(1).add(buyableEffect('H',21)))
        if(upg('H',71)) ef=ef.pow(upgradeEffect('H',71))
        if(upg('H',72)) ef=ef.pow(upgradeEffect('H',72))
    return ef
        if(gcs('I',53)) ef=ef.pow(1.05)
        if(mil('I',6))  ef=ef.pow(buyableEffect('I',22))
        if(n(challengeCompletions('I',22)).gte(2))  ef=ef.pow(1.25)
       
        if(gcs('I',64)) ef=n(10).pow(ef.max(1).log(10).pow(1.025))
        if(mil("G",30)) ef=ef.pow(tmp.G.gsref)
        let scx=[n(0.75),n(0.66),n(0.5),n(0.66),n(0.5)]   //exp's nerf,much stronger
        if(mil('I',5)) scx[0]=scx[0].add(0.03)         //the SHIT-like softcaps
        if(gcs('I',83)) scx[0]=scx[0].add(0.02)
        if(mil('G',32)) scx[2]=scx[2].add(0.005)
        if(upg('H',44)) scx[2]=scx[2].add(0.005)
        if(upg('G',151)) scx[2]=scx[2].add(tmp.H.dhef[4])
        if(player.G.Gsr.gte('3e1071')) {scx[0]=scx[0].add(0.01)
            scx[1]=scx[1].add(0.01)}
        if(upg('G',153)) {scx[0]=scx[0].add(0.02)//0.78
            scx[1]=scx[1].add(0.01)}
        if(player.H.max.gte('1470')) scx[1]=scx[1].add(0.02)//1550
        if(upg('H',45)) scx[0]=scx[0].add(0.03)
        if(mil('G',35)) {scx[0]=scx[0].add(0.03)
            if(player.G.Gsetot.gte('ee767')) scx[0]=scx[0].add(0.01)
            if(player.H.max.gte('7e6')) scx[0]=scx[0].add(0.01)}//0.86
        if(player.G.Gsetot.gte('e7.5e1581')) scx[0]=scx[0].add(0.01)
        if(player.G.Gsetot.gte('ee1658')) scx[0]=scx[0].add(0.03)
        if(player.G.Gsetot.gte('ee2010')) scx[0]=scx[0].add(0.04)//0.95
        if(upg('G',155)) scx[0]=scx[0].add(0.06)//1!!!
        if(ef.gte('ee12')) ef=n('ee12').mul(n(10).pow(ef.log(10).sub('1e12').pow(scx[0])))//rem
        if(ef.gte('ee14')) ef=n(10).pow(n('1e14').mul(ef.log(10).div('1e14').pow(scx[1])))
        if(ef.gte('ee20')) ef=n(10).pow(n('1e20').mul(ef.log(10).div('1e20').pow(scx[2])))
        if(ef.gte('ee32')) ef=n(10).pow(n('1e32').mul(ef.log(10).div('1e32').pow(scx[2])))
        if(ef.gte('ee50')) ef=n(10).pow(n('1e50').mul(ef.log(10).div('1e50').pow(scx[2])))
        if(ef.gte('ee80')) ef=n(10).pow(n('1e80').mul(ef.log(10).div('1e80').pow(scx[3])))
        if(ef.gte('ee100')) ef=n(10).pow(n('1e100').mul(ef.log(10).div('1e100').pow(scx[3])))
        if(ef.gte('ee140')) ef=n(10).pow(n('1e140').mul(ef.log(10).div('1e140').pow(scx[3])))
        if(ef.gte('ee180')) ef=n(10).pow(n('1e180').mul(ef.log(10).div('1e180').pow(scx[3])))
        let scx2=ef.max(1).log(10).max(1).log(10).div(216).max(1).pow(-0.25).max('1e-100')
        if(ef.gte('ee216')) ef=n(10).pow(n('1e216').mul(ef.log(10).div('1e216').pow(scx2.mul(0.85))))
        if(ef.gte('e1.8e308')) ef=n(10).pow(n('1.8e308').mul(ef.log(10).div('1.8e308').pow(scx[0].pow(1.5))))//rem
        if(ef.gte('ee450')) ef=n(10).pow(n('1e450').mul(ef.log(10).div('1e450').pow(scx[2])))
        if(ef.gte('ee600')) ef=n(10).pow(n('1e600').mul(ef.log(10).div('1e600').pow(scx[2].pow(0.5))))
        if(ef.gte('ee1000')) ef=n(10).pow(n('1e1000').mul(ef.log(10).div('1e1000').pow(scx[2])))
        if(ef.gte('ee1500')&&!n(challengeCompletions('I',22)).gte(4)) ef=n(10).pow(n('1e1500').mul(ef.log(10).div('1e1500').pow(scx[3])))//rem
        if(ef.gte('ee2000')&&!(mil('I',0))) ef=n(10).pow(n('1e2000').mul(ef.log(10).div('1e2000').pow(scx[4])))//rem
        //if(ef.gte('ee2200')) ef=n(10).pow(n(10).pow(n('2200').mul(ef.log(10).log(10).div('2200').pow(0.5))))
        //ef=ef.min('ee10000')
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[2]).max(0))
        ef=ef.mul(buyableEffect('J',35))
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef},
    gseef(){
        let exp=n(0.6)
        exp=exp.add(buyableEffect('G',43))
        if(gcs('G',41)) exp=exp.add(0.03)
        let ef=player.G.Gse.add(10).log(10).pow(exp).sub(1)
        return ef}, 
    gser(){//real eff on Gsi gain
        let ef=player.G.Gsi.add(10).log(10).pow(tmp.G.gseef).max(1)
        return ef
    }, 
    gser2(){//boost Gsi eff
        if(player.Z.points.gte(36)){
            let ef=player.G.Gse.add(1).log(10).pow(0.3).div(200).mul(buyableEffect('G',44).add(1)).add(1);
            ef=ef.min(tmp.G.ehp)
            return ef
        }
        let m=n(1)
        let k=n(0.55)
        if(upg('G',113)) k=k.add(0.03)
        if(gcs('G',41)) k=k.add(0.02)
        if(upg('G',124)) k=k.add(0.03)
        if(gcs('G',103)) k=k.add(0.01)
        if(upg('G',111)) m=m.add(buyableEffect('G',44)).pow(k)
        let ef=player.G.Gse.add(10).log(10).pow(0.4).div(200).sub(0.005).max(0).mul(m)
        ef=ef.min(tmp.G.ehp)
        return ef
    },
    gsqb(){
    if(!hasUpgrade('G',115) || player.Z.points.lt(34))return n(0);
    let exp = buyableEffect('G',82)
        if(gcs('G',112)) exp = exp.mul(clickableEffect('G',112))
    let ef=player.G.Gse.add(10).log(10).sub(1000).max(0).pow(exp).div(100);
        ef=ef.mul(buyableEffect('G',81))
        if(upg('G',173)) ef = ef.mul(upgradeEffect('G',173))
    if(upg("G", 175) && player.Z.points.gte(36))ef=ef.mul(tmp.G.gsgr)
    return ef;
    },
    gsqef(){
        let exp = buyableEffect('G',83)
        let ef=player.G.Gsq.add(1).log(10).pow(exp)
        return ef}, 
    gsqr(){
        let ef=player.G.Gse.add(10).log(10).pow(tmp.G.gsqef).max(1)
        return ef}, 
    gsgb(){
    	if(!hasUpgrade('G',175) || player.Z.points.lt(36))return n(0);
    	let exp = buyableEffect('G',92)
    	let ef=player.G.Gsq.add(10).log(10).sub(10000).max(0).pow(exp).div(1000);
        ef=ef.mul(buyableEffect('G',91))
    	return ef;
    },
    gsgef(){
        let exp = buyableEffect('G',93)
        let ef=player.G.Gsg.add(1).log(10).pow(exp)
        return ef
	}, 
    gsgr(){
        let ef=player.G.Gsq.add(10).log(10).pow(tmp.G.gsgef).max(1)
        return ef
	},
    ehp(){
        let ef=n(42)
        if(player.Z.points.gte(36))ef = n(12345);
        if(upg('G',171)) ef=ef.add(upgradeEffect('G',171))
        if(upg('H',35)) ef=ef.add(upgradeEffect('H',35))
        if(upg('H',41)) ef=ef.add(upgradeEffect('H',41)[0])    
        return ef},
    gsrb(){
        let ef=n(0)
        let exp=n(1.5)
        if(upg('G',141)) exp=exp.add(0.5)
        if(upg('G',145)) exp=exp.add(0.25)
        exp=exp.add(buyableEffect('G',73))
        if(player.G.Gsetot.gte('e2.5e26')) ef=player.G.Gsetot.log(10).log(10).sub(25).pow(exp)
        if(player.G.Gsr.gte('2e3536')&&mil('H',11)) ef=n(10).pow(ef.add(10).log(10).pow(1.05))
        if(upg('H',45)) ef=n(10).pow(ef.add(10).log(10).pow(1.15))
        if(mil('G',31)) ef=ef.pow(1.05)
        ef=ef.mul(buyableEffect('G',71))
        ef=ef.mul(tmp.H.dhef[0])
        ef=ef.mul(tmp.H.dhpef)
        if(mil('I',0)) ef=ef.mul(10)
        if(player.H.dhmax[1].gte(1)) ef=ef.mul(100)
        if(ch('I',12)) ef=ef.pow(challengeEffect('I',12))   
        if(mil('I',9)) ef=ef.pow(buyableEffect('I',32))   
        if(gcs('I',311)) ef=n(10).tetrate(ef.max(10).slog().sub(tmp.I.resv[2]).max(0))
        ef=ef.mul(buyableEffect('J',35))
        ef=ef.pow(buyableEffect('J',85))
        ef=ef.min(tmp.H.php)
        return ef
    },
    gsref(){
        let ef=n(0)
        let exp=n(0.3)
        if(upg('G',143)) exp=exp.add(0.1)
        exp=exp.add(buyableEffect('G',74)[0])
        ef=player.G.Gsr.add(10).log(10).pow(exp).div(20).add(0.95)
        return ef
    },
    gsref2(){
        let ef=n(0)
        let exp=n(0.5)
        if(upg('G',143)) exp=exp.add(0.1)
        exp=exp.add(buyableEffect('G',74)[0])
        if(upg('H',45)) exp=exp.pow(1.2)
        ef=player.G.Gsr.add(10).log(10).pow(exp).div(10).add(0.9)
        return ef
    },
    update(diff) {
        if (n(challengeCompletions("G", 11)).gte(3))  player.G.Gc1p = player.G.Gc1p.add(tmp.G.gc1g.mul(diff))
        if (n(challengeCompletions("G", 12)).gte(3))  player.G.Gc2p = player.G.Gc2p.add(tmp.G.gc2g.mul(diff))
        if (n(challengeCompletions("G", 21)).gte(3))  player.G.Gc3p = player.G.Gc3p.add(tmp.G.gc3g.mul(diff))
        if (n(challengeCompletions("G", 22)).gte(3))  player.G.Gc4p = player.G.Gc4p.add(tmp.G.gc4g.mul(diff))
        // if(gcs('I',36)){
        //     if(mil('G',2)) player.G.challenges[11]=n(player.G.challenges[11]).max(3)
        //     if(upg('F',75)) player.G.challenges[12]=n(player.G.challenges[12]).max(3)
        //     if(mil('G',5)) player.G.challenges[21]=n(player.G.challenges[21]).max(3)
        //     if(mil('G',7)) player.G.challenges[22]=n(player.G.challenges[22]).max(3)
        // }
        if (mil("G", 14) || player.Z.points.gte(26))  player.G.Gs = player.G.Gs.add(tmp.G.gsb.mul(diff))
        if (upg("G", 83) || player.Z.points.gte(30))  player.G.Gsi = player.G.Gsi.add(tmp.G.gsib.mul(diff))
        if (upg("G", 91) || player.Z.points.gte(34))  player.G.Gse = player.G.Gse.add(tmp.G.gseb.mul(diff))
    if(upg("G", 115) && player.Z.points.gte(34)) player.G.Gsq = player.G.Gsq.add(tmp.G.gsqb.mul(diff))
    if(upg("G", 175) && player.Z.points.gte(36)) player.G.Gsg = player.G.Gsg.add(tmp.G.gsgb.mul(diff))
        if (mil("G", 30))  player.G.Gsr = player.G.Gsr.add(tmp.G.gsrb.mul(diff))
    player.G.GGtot = player.G.buyables[61].add(player.G.buyables[62].mul(hasUpgrade('G',133)?10:5)).add(player.G.buyables[63].mul(10)).mul(tmp.G.ggmt)
        if (upg("G", player.Z.points.gte(35)?82:115))  player.G.GG = player.G.GGtot.sub(player.G.Gtc)
        player.G.Gsetot = player.G.Gsetot.max(player.G.Gse)
    },
})