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
    passiveGeneration(){    let pg=n(0)
        if (mil("G",6)||mil('I',0)) pg=Decimal.add(pg,1)
        return pg},
    color: "#695735",
    requires(){if(hasMilestone("Z",18))return new Decimal(1);return  Decimal.pow(2,1024)}, 
    resource: "G", 
    baseResource: "F1", 
    baseAmount() {return player.F.F1}, 
    type: "normal",
    exponent(){
        if(player.Z.points.gte(34))return n(1);
        return n(0.02).mul(Decimal.pow(0.95,player.Z.points));
    }, 
    gainExp() {
        let e=n(1)
        if(mil('I',0)) e=e.mul(1.03)
        return e},
    row: 3, 
    hotkeys: [
        {key: "g", description: "G: Reset for G points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return ((upg('F',65))||player[this.layer].unlocked)},
    gainMult() { 
        mult=n(1)
        mult=mult.mul(buyableEffect('G',11))
        if (hasUpgrade('F',72))  mult=mult.mul(upgradeEffect('F',72))
        if (hasUpgrade('F',74))  mult=mult.mul(upgradeEffect('F',74)[1])
        mult=mult.mul(tmp.G.gc2ef)
        if(mil('I',0)) mult=mult.mul(5)
        let br=n('eee10')
        if(mil('I',10)) br=n('eee7')
        if(gcs('I',44)&&player.G.points.gte(br)) mult=mult.mul('eee500')
        return mult
    },
    autoUpgrade() {return (gcs('I',102))},
    branches: ['F'],
    milestones: {
        0: {requirementDescription: "30 total G (1",
            done() {return player[this.layer].total.gte('30')}, 
            effectDescription: "autobuy tickboost.",
            toggles: [ ['G',"auto1"] ]
        },
        1: {requirementDescription: "300 total G (2",
            done() {return player[this.layer].total.gte('300')}, 
            effectDescription: "tickboost resets nothing.",
        },
        2: {requirementDescription: "2e4 total G (3",
            done() {return player[this.layer].total.gte('2e4') && hasMilestone('Z',15)},
            unlocked() {return hasMilestone('Z',15)}, 
            effectDescription: "unlock a chal,G4 is stronger.",
        },
        3: {requirementDescription: "1e9 total G (4",
            done() {return player[this.layer].total.gte('1e9') && hasMilestone('Z',15)},
            unlocked() {return hasMilestone('Z',15)},  
            effectDescription: "buy max dims.",
        },
        4: {requirementDescription: "1e100 total G (5",
            done() {return player[this.layer].total.gte('1e100') && hasMilestone('Z',16)}, 
            unlocked() {return hasMilestone('Z',16)},
            effectDescription: "autobuy Gb1-3.",
            toggles: [ ['G',"auto2"] ]
        },
        5: {requirementDescription: "1e800 total G (6",
            done() {return player[this.layer].total.gte('1e800') && hasMilestone('Z',17)}, 
            unlocked() {return hasMilestone('Z',17)},
            effectDescription: "unlock another chal.",
        },
        6: {requirementDescription: "1e40000 total G (7",
            done() {return player[this.layer].total.gte('1e40000') && hasMilestone('Z',18)}, 
            unlocked() {return hasMilestone('Z',18)},
            effectDescription: "Gain Passive G.",
        },
        7: {requirementDescription: "e9.25e6 total G (8",
            done() {return player[this.layer].total.gte('e9.25e6') && hasMilestone('Z',19)}, 
            unlocked() {return hasMilestone('Z',19)},
            effectDescription: "Gc3p is stronger,unlock another chal.",
        },
        8: {requirementDescription(){if(hasMilestone('Z',21))return "e7e7 total G (9";return "e2.02e8 total G (9"},
            done() {return player[this.layer].total.gte(hasMilestone('Z',21)?'e7e7':'e2.02e8') && hasMilestone('Z',19)}, 
            unlocked() {return hasMilestone('Z',19)},
            effectDescription: "Gc1p/Gc2p exp is 0.87/0.75,Gb1 base +0.5.",
        },
        9: {requirementDescription: "e2.5e8 total G (10",
            done() {return player[this.layer].total.gte('e2.5e8') && hasMilestone('Z',21)}, 
            unlocked() {return hasMilestone('Z',21)},
            effectDescription: "autobuy F2 dims,Gc1p/Gc2p exp is 0.9/0.8.",
            toggles: [ ['G',"auto3"] ]
        },
        10: {requirementDescription: "e1e9 total G (11",
            done() {return player[this.layer].total.gte('e1e9') && hasMilestone('Z',21)}, 
            unlocked() {return hasMilestone('Z',21)},
            effectDescription: "buy max F2d1,G21 ^2,gain Gc1p passively(^0.95).",
        },
        11: {requirementDescription: "e1e11 total G (12",
            done() {return player[this.layer].total.gte('e1e11') && hasMilestone('Z',21)}, 
            unlocked() {return hasMilestone('Z',21)},
            effectDescription: "gain Gc2p passively(^0.9). Gc2p multiply Gc1p. Gc2p exp is 0.85",
        },
        12: {requirementDescription: "e8e11 total G (13",
            done() {return player[this.layer].total.gte('e8e11') && hasMilestone('Z',21)}, 
            unlocked() {return hasMilestone('Z',21)},
            effectDescription: "gain Gc3p passively(^0.2). Gc3p multiply Gc2p. Gc3p exp is 0.25",
        },
        13: {requirementDescription: "e8.6e12 total G (14",
            unlocked() {return hasMilestone('Z',22)},
            done() {return player[this.layer].total.gte('e8.6e12') && hasMilestone('Z',22)}, 
            effectDescription: "gain Gc4p passively(^0.2). Gc4p multiply Gc3p. Gc3p exp is 0.75, Gc4p exp is 0.25",
        },
        14: {requirementDescription: "e9e15 total G (15",
            done() {return player[this.layer].total.gte('e9e15') && hasMilestone('Z',23)}, 
            unlocked() {return hasMilestone('Z',23)},
            effectDescription() {if(hasMilestone('Z',27))return "Gs gain x10.";return "Unlock Gs."},
        },
        15: {requirementDescription: "ee15000 total G (16",
            done() {return player[this.layer].total.gte('ee15000') && hasMilestone('Z',25)}, 
            unlocked() {return hasMilestone('Z',25)},
            effectDescription: "G28 eff is 1.3,Gs eff ^1.5.",
        },
        16: {requirementDescription: "eee10 total G (17",
            done() {return player[this.layer].total.gte('eee10') && hasMilestone('Z',25)}, 
            unlocked() {return hasMilestone('Z',25)},
            effectDescription: "autobuy Gsb1-3.",
            toggles: [ ['G',"auto4"] ]
        },
        17: {requirementDescription: "eee50 total G (18",
            done() {return player[this.layer].total.gte('eee50') && hasMilestone('Z',27)}, 
            unlocked() {return hasMilestone('Z',27)},
            effectDescription: "edit Gsb1/Gsb3 cost and buy max. edit Gsb4/Gsb6/Gsb7/Gsb8 cost.",
        },
        18: {requirementDescription: "1F5 total G(eeee10) (19",//.264
            done() {return player[this.layer].total.gte('eeee10') && hasMilestone('Z',30)},
            unlocked() {return hasMilestone('Z',30)},
            effectDescription(){ if(player.Z.points.gte(33))return "autobuy Gsb4-5.";if(player.Z.points.gte(32))return "autobuy Gsb4-5. Gsb5 is cheaper.";return "autobuy Gsb4-5. Change Gs effect formula."},
            toggles: [ ['G',"auto5"] ]        
        },
        19: {requirementDescription: "2.41F5 total G(eee1.095e257) (20",
            done() {return player[this.layer].total.gte('eee1.095e257') && hasMilestone('Z',31)},
            unlocked() {return hasMilestone('Z',31)},
            effectDescription: "Gsb1-5 and Gsb7 base x1.1. Gsb7 and Gsb8 is cheaper. Increase Gsb6 eff at 1e4555 Gse, and Gsb9/10 eff at 1e6415 Gse.",
        },
        20: {requirementDescription: "2.9135F5 total G(eee5e819) (21",
            done() {return player[this.layer].total.gte('eee5e819') && hasMilestone('Z',31)}, 
            unlocked() {return hasMilestone('Z',31)},
            effectDescription(){return "autobuy Gsb7-8,unlock new Gt, Gsb7 is cheaper, increase Gsb7 hardcap / keep Gt1-2 and buff Gt1 at 1e13144 Gse "+(player.Z.points.gte(34)?"/ Gsb13-15 are cheaper at 1e24000 Gse":"")+"/ t1 ^3 and keep t3-4 at 1e42090 Gse."},
            toggles: [ ['G',"auto6"] ]        
        },
        21: {requirementDescription: "5.39445F5 total G(eeee2.48e5) (22",//1e111960
            done() {return player[this.layer].total.gte('eeee2.48e5') && hasMilestone('Z',31)}, 
            unlocked() {return hasMilestone('Z',31)},
            effectDescription: "unlock a new path from 5th row,Gsb6 and Gsb9 hardcap +0.005.",
        },
        22: {requirementDescription: "465 total GG (23",
            done() {return player.G.GGtot.gte('465') && hasMilestone('Z',31)}, 
            unlocked() {return hasMilestone('Z',31)},
            effectDescription: "unlock a qol for row 5-7 upg tree.",
        },
        23: {requirementDescription: "489 total GG (24",
            done() {return player.G.GGtot.gte('489') && hasMilestone('Z',31)}, 
            unlocked() {return hasMilestone('Z',31)},
            effectDescription: "unlock more r8-9 upg.",
        },
        24: {requirementDescription: "708 total GG (25",
            done() {return player.G.GGtot.gte('708') && hasMilestone('Z',31)}, 
            unlocked() {return hasMilestone('Z',31)},
            effectDescription: "Gsb9 is cheaper.",
        },
        25: {requirementDescription: "e2.5e7 total Gse (26",
            done() {return player.G.Gsetot.gte('e2.5e7') && hasMilestone('Z',31)},
            unlocked() {return hasMilestone('Z',31)},
            effectDescription: "autobuy GG gain,keep Gt5/8,buff Gt r9-10.",
            toggles: [ ['G',"auto7"] ] 
        },
        26: {requirementDescription: "1503 total GG (27",
            done() {return player.G.GGtot.gte('1503') && hasMilestone('Z',34)}, 
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "Gsb9 is cheaper.",
        },
        27: {requirementDescription: "1950 total GG (28",
            done() {return player.G.GGtot.gte('1950')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "keep t6,7,13,babs cost nothing.",//for inf growth
        },
        28: {requirementDescription: "2789 total GG (29",
            done() {return player.G.GGtot.gte('2789')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "keep t19.",
        },
        29: {requirementDescription: "3200 total GG (30",
            done() {return player.G.GGtot.gte('3200')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "autobuy Gsb13.",
            toggles: [ ['G',"auto9"] ] 
        },
        30: {requirementDescription: "e1.34e26 total Gse (31",
            done() {return player.G.Gsetot.gte('e1.34e26')},//
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "sb10 limit +5,i eff exp +0.0025,unlock GsR.",
        },
        31: {requirementDescription: "1e301 total GsR (32",
            done() {return player.G.Gsr.gte('1e301')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "sb6 exp +0.03,hyper slog +0.001,unlock dH.",
        },
        32: {requirementDescription: "5e927 total GsR (33",
            done() {return player.G.Gsr.gte('5e927')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "e nerfs +0.005(improved at 3e1071),remove dH1 scaling,dHp3-4 sc -0.05,nerf rs at 1e1164/1e1284/5e1432.",
        },
        33: {requirementDescription: "e9.918e118 total Gse (34",
            done() {return player.G.Gsetot.gte('e9.918e118')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "nerf r1/dhp2,remove sb6 lim,boost dH5 at 4 dH5,boost dHs at 2e6935/5e7628 GsR.",//,GG sc slower at 1e14030
        },
        34: {requirementDescription: "e1.7e199 total Gse (35",
            done() {return player.G.Gsetot.gte('e1.7e199')},//ee415
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "autobuy sb6,hb1/y1 sc -0.01,nerf dH5 threshold at e1.48e480(again at e2.93e495/e2.86e603).<br>TIPS:sb6 cost jumps at 2000(10^10^x^2.25)",
            toggles: [ ['G',"auto8"] ] 
        },
        35: {requirementDescription: "e1e652 total Gse (36",
            done() {return player.G.Gsetot.gte('e1e652')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "buy max sb6,dilate ha/hy to 1.01,e 1st nerf +0.03(0.04 at ee767).",
        },
        36: {requirementDescription: "e1e1580 total Gse (37",
            done() {return player.G.Gsetot.gte('e1e1580')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "buy max r2/4,e nerf is 0.87/0.9/0.94 at e7.5e1581/ee1658/ee2010,and FINALLY REMOVE it with G75.",//
        },
        37: {requirementDescription: "e1e2125 total Gse (38",
            done() {return player.G.Gsetot.gte('e1e2125')},
            unlocked() {return hasMilestone('Z',34)},
            effectDescription: "i eff +0.005,H36 is massively changed,buy max sb11-12.",
        },
        // 38: {requirementDescription: "e1e2125 total Gse (39",
        //     done() {return player.G.Gsetot.gte('e1e2125')},
        //     effectDescription: "i eff +0.005,H36 is massively changed.", //removed
        // },
    },
    m13r(){
        let r=n('ee1000')
        if(n(challengeCompletions('I',22)).gte(1)) r=n('ee250')
        if(n(challengeCompletions('I',22)).gte(3)) r=n('ee100')
        if(n(challengeCompletions('I',22)).gte(5)) r=n('ee40')
        if(mil('J',1)) r=n('ee20')
        return r
    },
    doReset(layer){
        if (layer=="H") {        
            let keep = ["milestones","upgrades","challenges"]//,"clickables"  //operation wall
            layerDataReset(this.layer, keep)}
        if (layer=="I") {        
            let keep = [] //{player[this.layer].challenges[11]=n(5),player[this.layer].challenges[12]=n(5)}
            //if(gcs('I',36)&&!gcs('I',46))  keep.push(["challenges",[1]])
            if(gcs('I',46))  keep.push("challenges")
            //if(gcs('I',76)) keep.push("cilckables")
            layerDataReset(this.layer, keep)
            if(gcs('I',15))  player[this.layer].milestones=[0,1]
            if(gcs('I',23))  player[this.layer].milestones.push(17)
            if(gcs('I',21))  {player[this.layer].milestones.push(25)
                player[this.layer].upgrades.push(115)}
            if(gcs('I',16))  player[this.layer].milestones.push(27,28,37)
            if(gcs('I',24))  player[this.layer].milestones.push(2,3,4,5,6,7,8,9,10,11,12,33,36)
            if(gcs('I',46))  player[this.layer].milestones.push(18,19,20,21,22,23,24,26)
            if(gcs('I',66))  player[this.layer].milestones.push(29,35)
            if(mil('I',21))  player[this.layer].milestones.push(15,16,30,31,32,34,37)//13,14,
            if(n(challengeCompletions('I',22)).gte(1)) player[this.layer].upgrades.push(152)
            if(n(challengeCompletions('I',22)).gte(2)) player[this.layer].upgrades.push(141,142,143,144,145)
            if(gcs('I',86))  player[this.layer].upgrades.push(61,62,63,64,65,134,135)
            if(mil('J',1)) {scs("G",21,1),scs("G",31,1),scs("G",32,1),scs("G",33,1),scs("G",41,1),scs("G",42,1),scs("G",43,1),scs("G",44,1),scs("G",51,1)
            ,scs("G",61,1),scs("G",62,1),scs("G",63,1),scs("G",71,1),scs("G",72,1),scs("G",73,1),scs("G",81,1),scs("G",82,1),scs("G",83,1),scs("G",91,1)
            ,scs("G",101,1),scs("G",102,1),scs("G",103,1),scs("G",104,1)
            ,scs("G",111,1),scs("G",112,1),scs("G",121,1),scs("G",122,1),scs("G",131,1)}
        }
    },
    microtabs: {
        stuff: {       
            "Main": {
                unlocked() {return true},
                content: [ ["raw-html", () => `<h4 style="opacity:.5">get G when reach infinity F1<br>(like AD).</h4>`],["upgrades",[1,2,3,4,5]]]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Buyables": {
                unlocked() {return (upg("G", 25))},
                content: [["raw-html", () => `<h4 style="opacity:.5">like Eb,Gb dont spend G.</h4>`],
                ["buyables",[1]]]},
            "Challenges": {
                unlocked() {return (mil("G",2))},
                content: [["raw-html", () => `<h4 style="opacity:.5">G chal is about F dim,dont decrease main game production.</h4>`]
                ,["display-text",  function() {if(n(challengeCompletions("G", 11)).gte(3)) return "You have <h3 style='color: #694444; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc1p) + "</h3> Gc1p, mult F dims by <h3 style='color: #694444; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gc1ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc1g) + " Gc1p/s (need 1e1080 F1 in Gc1)<h4>"}],
                ["display-text", function() {if(n(challengeCompletions("G", 12)).gte(3)) return "You have <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc2p) + "</h3> Gc2p, mult G by <h3 style='color: #913423; text-shadow: 0 0 2px #c2b280'> " + format(tmp.G.gc2ef) + "x</h3>.<br>" + "<h4>" + format(tmp.G.gc2g) + " Gc2p/s (need 1e3050 F1 in Gc2)<h4>"}],
                ["display-text", function() {if(n(challengeCompletions("G", 21)).gte(3)) return "You have <h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc3p) + "</h3> Gc3p, "+(player.Z.points.gte(23)?"dim":"Fd8")+" mult per buy is x<h3 style='color: #72FF89; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gc3ef) + " </h3>bigger.<br>" + "<h4>" + format(tmp.G.gc3g) + " Gc3p/s (need 1e168000 F1 in Gc3)<h4>"}],
                ["display-text", function() {if(n(challengeCompletions("G", 22)).gte(3)) return "You have <h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gc4p) + "</h3> Gc4p, dim mult per buy +<h3 style='color: #D78903; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gc4ef,3) + "</h3>.<br>" + "<h4>" + format(tmp.G.gc4g) + " Gc4p/s (need e2.35e9 F1 in Gc4)<h4>"}],
                "challenges"]},
            "Gs": {
                unlocked() {return (mil("G", 14) || player.Z.points.gte(26))},
                content: [["raw-html", () => `<h4 style="opacity:.5">inspired by 'Plague Tree' ---Timewall warning!</h4>`]
                ,["raw-html", () => `<h4 style='color: #C52C14'>tips:you may need to refresh when you get your first Gs!</h4>`]
                ,["display-text", () => "You have <h3 style='color: #988462; text-shadow: 0 0 2px #c2b280'>" + formatSmall(player.G.Gs, 5) + "</h3> Gs, point gain "+(player.Z.points.gte(30)?"exp":"")+" ^ <h3 style='color: #988462; text-shadow: 0 0 2px #c2b280'> " + format(player.Z.points.gte(30)?tmp.G.gsef2:tmp.G.gsef1, 5) + "</h3>.<br>" + "<h4>" + formatSmall(tmp.G.gsb) + " Gs/s "+(player.Z.points.gte(30)?"":("(need "+(player.Z.points.gte(26)?"1e10":"ee17")+" G)"))+"</h4>"]
                ,["display-text",function() {if(upg("G", 83) || player.Z.points.gte(30)) return "You have <h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsi) + "</h3> Gsi,boost Gs by lg(Gs)^<h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsief) + "</h3> (x\n\
                    <h3 style='color: #FF00F1; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsir) +"</h3> Gs)<br>" + "<h4>" + format(tmp.G.gsib) + " Gsi/s "+(player.Z.points.gte(30)?"":("(need 1e780 Gs)"))+"</h4>"}]
                ,["display-text", function() {if(upg("G", 101) || player.Z.points.gte(34)) return "You have <h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gse) + "</h3> Gse,boost Gsi by lg(Gsi)^<h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gseef) + "</h3> (x\n\
                    <h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gser) +"</h3> Gsi)<br>" + (player.Z.points.gte(36)?"Gsi eff ^":"and boost Gsi eff exp by +") + "<h3 style='color: #14FFF3; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gser2) +"</h3> (at most "+format(tmp.G.ehp)+")<br>\n\
                    " + format(tmp.G.gseb) + " Gse/s "+(player.Z.points.gte(34)?"":("(need 1e345 Gsi)"))+"</h4>"}]
                ,["display-text", function() {if(upg("G", 115) && player.Z.points.gte(34)) return "You have <h3 style='color: #00FF00; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsq) + "</h3> Gsq,boost Gse by lg(Gse)^<h3 style='color: #00FF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsqef) + "</h3> (x\n\
                    <h3 style='color: #00FF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsqr) +"</h3> Gse)<br>" + format(tmp.G.gsqb) + " Gsq/s "}]
                ,["display-text", function() {if(upg("G", 175) && player.Z.points.gte(36)) return "You have <h3 style='color: #FFFF00; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsg) + "</h3> Gsg,boost Gsq by lg(Gsq)^<h3 style='color: #FFFF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsgef) + "</h3> (x\n\
                    <h3 style='color: #FFFF00; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsgr) +"</h3> Gsq)<br>" + format(tmp.G.gsgb) + " Gsg/s "}]
                ,["row",[["buyable",21],["buyable",22],["buyable",23]]],["row",[["buyable",31],["buyable",32],["buyable",33]]],["row",[["buyable",41],["buyable",42],["buyable",43]]],["row",[["buyable",44],["buyable",51],["buyable",52]]],["row",[["buyable",81],["buyable",82],["buyable",83]]],["row",[["buyable",91],["buyable",92],["buyable",93]]],["upgrades",[6,7,8,9,10,11,12,16,13,17,18]]],},
            "GG": {
                unlocked() {return (upg("G",player.Z.points.gte(35)?82:115))},
                content: [["raw-html", () => `<h4 style="opacity:.5">welcome to the first upgrade tree --- strategy is significant now!</h4>`]
                ,["display-text", () => "You have <h3 style='color: #375DB4; text-shadow: 0 0 2px #c2b280'>" + format(player.G.GG) + "</h3> GG ("+"<h3 style='color: #375DB4; text-shadow: 0 0 2px #c2b280'>" + format(player.G.GGtot)+'</h3> total)']
                ,["buyables",[6]],"clickables"]}, 
            "GsR": {
                unlocked() {return (mil("G",30))},
                content: [["raw-html", () => `<h4 style="opacity:.5">the final part of Gs.</h4>`]
                ,["display-text", () => "You have <h3 style='color: #6DA462; text-shadow: 0 0 2px #c2b280'>" + format(player.G.Gsr) + "</h3> GsR,raise Gse by ^<h3 style='color: #6DA462; text-shadow: 0 0 2px #c2b280'>" + format(tmp.G.gsref,4) + "</h3> and harsh,hyper by ^\n\
                <h3 style='color: #6DA462; text-shadow: 0 0 2px #c2b280'>"+ format(tmp.G.gsref2,4) +".<h3><br>" + "<h4>" + format(tmp.G.gsrb) + " GsR/s (need e2.5e26 Gse)<h4>"]
                ,["buyables",[7]],["upgrades",[14,15]]]},  //6DA462                                                                                                                                                                                                                                                           
        }                                                                                                                                                                                                                                                                                                                    //for convenience             
    },                                                                                                                                                                                                                                                                                                                                                 //for convenience
    softcap(){return new Decimal(Infinity)},
    softcapPower(){return new Decimal(1)},
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {
        11: {
            title:'G1',
            description: "all F dim x2.",         
            cost:new Decimal(1),
        },
        12: {
            title:'G2',
            description: "F dim mult per buy +0.1.",         
            cost:new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'G3',
            description: "F dim is cheaper.",
            cost(){if(hasMilestone('Z',15))return new Decimal(1);return new Decimal(2)},
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'G4',
            description: "total G multiply F.",         
            cost:new Decimal(100),
            effect()  { 
                let ef = player.G.total.add(1);
                if (hasMilestone('G',2)) ef = player.G.total.add(1).pow(3)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 13) && hasMilestone('Z',15))},
        },
        15: {
            title:'G5',
            description: "F30 ^1.1.",         
            cost:new Decimal(100),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'G6',
            description: "Ek is even stronger,total G boost all dims.",         
            cost:new Decimal(200),
            effect()  { 
                return Decimal.pow(10,player.G.total.add(10).log10().pow(hasUpgrade("G",45)?0.95:hasUpgrade("G",43)?0.9:0.5));
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'G7',
            description: "Ek is even stronger,total G raise Eb10,F dim is cheaper.",         
            cost:new Decimal(1000),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.2).div(100).add(1)
                if(player.Z.points.gte(19))ef = player.G.total.add(10).log(10).add(10).log(10).div(100).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'G8',
            description: "Total G raise F30.",         
            cost:new Decimal(1e5),
            effect()  { 
                let ef = player.G.total.add(10).log(10).pow(0.2).div(100).add(1)
                if(player.Z.points.gte(19))ef = player.G.total.add(10).log(10).add(10).log(10).div(100).add(1)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'G9',
            description: "dim mult per buy +0.1.",         
            cost:new Decimal(5e5),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'G10',
            description(){if(hasMilestone("Z",23))return "Boost Bb5 and Unlock G buyables.";return "Bb5 is also multiplicative at ^0.01 effect and unlock buyables."},         
            cost:new Decimal(2e7),
            effect()  { 
                let exp=0.01
                if(hasMilestone('F',17)) exp=Decimal.add(exp,0.01)
                if(hasUpgrade('G',32)) exp=Decimal.add(exp,0.01)
                    if(hasMilestone("Z",23))return Decimal.add(exp, 1)
                let ef= Decimal.pow(buyableEffect('B',23),exp)
                return ef;
            },
            effectDisplay() { if(hasMilestone("Z",23))return '^'+format(this.effect()); return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'G11',
            description: "Boost F1 eff above 1e1200.",         
            cost:new Decimal('1e14'),
            unlocked() { return (challengeCompletions("G", 11)>=3 && player.Z.points.gte(17))},
        },
        32: {
            title:'G12',
            description: "G10 is stronger.",         
            cost:new Decimal('1e42'),
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'G13',
            description: "Gb2 ^2,tickspeed eff mult +0.005.",         
            cost:new Decimal('1e43'),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'G14',
            description: "GC1p gain ^10.",         
            cost:new Decimal('1e135'),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'G15',
            description: "F dim is cheaper.",     
            cost:new Decimal('1e157'),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'G16',
            description: "G raise Gcps.",         
            cost:new Decimal('e33333333'),
            effect()  { 
                let exp=n(0.015)
                if(hasUpgrade('G',44)) exp=Decimal.add(exp,0.005)
                if(hasUpgrade('G',45)) exp=Decimal.add(exp,0.025)
                if(hasUpgrade('G',54)) exp=Decimal.add(exp,0.015)
                //if(hasMilestone('G',14)) exp=Decimal.mul(exp,tmp.G.gsef)
                let ef = player.G.points.add(1e10).log(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),3) },
            unlocked() { return (challengeCompletions("G", 21)>=5)},
        },
        42: {
            title:'G17',
            description: "Gc1p-Gc2p exp+0.02, increase Gb bases.",         
            cost:new Decimal('e39e6'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'G18',
            description: "Gc1p/Gc2p exp are 0.57/0.7,G6 exp is 0.9.",         
            cost:new Decimal('e435e5'),
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'G19',
            description: "G16 exp is 0.02,F39 is stronger.",         
            cost(){if(hasMilestone("Z",21))return new Decimal("e55e6");return new Decimal('e84848484')},
            unlocked() { return (hasUpgrade(this.layer, 43))},
        },
        45: {
            title:'G20',
            description: "G16 exp is 0.04,Gc3 eff base is 0.1,G6 exp is 0.95,Gc2 eff ^2.",
            cost(){if(hasMilestone("Z",22))return new Decimal("e62e6");return new Decimal('ee8')},
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
        51: {
            title:'G21',
            description: "Gc4p boost F2 dims,boost its exp by 0.01. Gc1p generate Fd8.",         
            cost:new Decimal('e1.6e10'),
            effect()  { 
                let exp=n(1.25)
                if(hasMilestone('G',10)) exp=Decimal.mul(exp,2)
                let ef=player.G.Gc4p.add(10).log(10).pow(exp).div(50).add(0.98)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasMilestone(this.layer,9))},
        },
        52: {
            title:'G22',
            description: "Gb1 ^1.3,unlock another 2 F2 dim. Tickspeed affects Fd8 gen.",         
            cost:new Decimal('e2.8e10'),
            unlocked() { return (hasUpgrade(this.layer, 51))},
        },
        53: {
            title:'G23',
            description: "Gcps eff are better,F1 boost F2.",         
            cost:new Decimal('e5.1e10'),
            effect()  { 
                let exp=n(0.4)
                let ef=player.F.F1.add(10).log(10).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 52))},
        },
        54: {
            title:'G24',
            description: "G16 exp is 0.055,G21 boost tickspeed.",  
            cost(){return new Decimal(player.Z.points.gte(23)?"e2.34e11":'e2.25e12')},
            effect()  { 
                let exp=n(0.25)
                if(hasUpgrade('G',55)) exp=Decimal.add(exp,0.05)
                let o=upgradeEffect('G',51)
                let ef=Decimal.pow(o.add(10).log(10),exp).div(4).add(0.75)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),3) },
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'G25',
            description: "Gc1p/Gc2p/Gc3p/Gc4p exp are 0.95/0.9/0.85/0.8,G24 exp is 0.3,gain Gc powers at full F1.",     
            cost(){return new Decimal(player.Z.points.gte(25)?Decimal.pow(10,1e16/3):player.Z.points.gte(24)?"e1.65e14":'e3.8e13')},
            unlocked() { return (hasMilestone(this.layer, 13))},
        },
        //Gs upgs
        61: {
            title:'G26',
            description(){return hasMilestone('Z',34)?"Gs base and Gsi x50, Gse x10":hasMilestone('Z',31)?"Gs base and Gsi x50":hasMilestone('Z',29)?"Gs base x50":hasMilestone('Z',28)?"Gs base x2":"Gsb1 cost base is 5. Gs base x50"},
            cost(){return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',34)?200:hasMilestone('Z',33)?'1e10':hasMilestone('Z',32)?'1e250':hasMilestone('Z',30)?'1e120':hasMilestone('Z',29)?'1e80':hasMilestone('Z',28)?10:1)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasMilestone(this.layer, 14) && hasMilestone('Z', 24)) || hasMilestone('Z',25)},
        },
        62: {
            title:'G27',
            description: "Gs eff ^1.5,base x2 and ^2.",         
            cost(){return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',33)?'1e18':hasMilestone('Z',32)?'1e360':hasMilestone('Z',31)?'1e270':hasMilestone('Z',30)?'1e210':hasMilestone('Z',29)?'1e170':hasMilestone('Z',28)?'1e90':hasMilestone('Z',27)?'1e50':hasMilestone('Z',25)?'1e33':'1e34')},
            currencyLocation() {return player[this.layer]},
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'G28',
            description(){return hasMilestone('Z',34)?"Gsb1, Gsb4 and Gsb7 eff base x1.2.":hasMilestone('Z',33)?"Gsb1 and Gsb4 eff base x1.2.":hasMilestone('Z',29)?"Gsb1 eff base x1.2.":"unlock another buyable,Gsb1 eff base x1.2."},
            cost(){return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',33)?'1e21':hasMilestone('Z',32)?'1e550':hasMilestone('Z',31)?'1e345':hasMilestone('Z',30)?Number.MAX_VALUE:hasMilestone('Z',29)?'1e270':hasMilestone('Z',28)?'1e110':hasMilestone('Z',27)?'1e80':hasMilestone('Z',26)?'6.666e66':hasMilestone('Z',25)?'5.555e55':'4.444e44')},
            currencyLocation() {return player[this.layer]},
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasUpgrade(this.layer, 62))},
        },
        64: {
            title:'G29',
            description(){return hasMilestone('Z',32)?"Gsb2 base x1.15,Gs eff ^2":hasMilestone('Z',30)?"Gsb2 base x1.15,Gs eff ^2,F2 effect is better":hasMilestone('Z',29)?"Gsb2 base x1.15,Gs eff ^2,F1 effect is better":hasMilestone('Z',28)?"Gsb2 base x1.15,Gs eff ^2":"Gsb2 base x1.15,Gs eff exp +0.4."},
            cost(){return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',33)?'1e25':hasMilestone('Z',32)?'1e640':hasMilestone('Z',31)?'1e420':hasMilestone('Z',30)?'1e380':hasMilestone('Z',29)?'1e350':hasMilestone('Z',28)?'1e180':hasMilestone('Z',27)?'1e120':hasMilestone('Z',26)?'1e106':'8.888e88')},
            currencyLocation() {return player[this.layer]},
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasUpgrade(this.layer, 63) && hasMilestone('Z', 25))},
        },
        65: {
            title:'G30',
            description(){return hasMilestone('Z',35)?"Gsb1-7 are cheaper based on G upg amount. Each G upg also boost Gsb6 base by +0.01":hasMilestone('Z',34)?"Gsb1-7 are cheaper based on Gs upg amount. Each Gs upg also boost Gsb6 base by +0.01":hasMilestone('Z',32)?"Gsb1-6 are cheaper based on Gs upg amount. Each Gs upg also boost Gsb6 base by +0.01":"Gs buyables are cheaper based on Gs upg amount."},
            cost(){return new Decimal(hasMilestone('Z',35)?0:hasMilestone('Z',34)?'1e35':hasMilestone('Z',33)?'1e26':hasMilestone('Z',32)?'1e700':hasMilestone('Z',30)?'1e450':hasMilestone('Z',29)?'1e390':hasMilestone('Z',28)?'1e182':hasMilestone('Z',27)?'1e128':hasMilestone('Z',26)?'1e110':'1e100')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let c=n(0.995)
                if(hasUpgrade('G',95) || player.Z.points.gte(33)) c=n(0.994)
                if(hasUpgrade('G',95) && player.Z.points.gte(32)) c=n(0.99)
                if(hasUpgrade('G',111) && player.Z.points.lt(30)) c=n(0.99)
                if(hasMilestone('Z',35))return c.pow(b)
                let ef=n(c).pow(b.sub(player.Z.points.gte(35) && hasUpgrade('G',85)?Math.max(50-player[this.layer].upgrades.length,0):25).max(0))
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 64))},
        },
        71: {
            title:'G31',
            description(){return hasMilestone('Z',34)?"Gsb1, Gsb4 and Gsb7 base x1.1,Gs eff ^2":hasMilestone('Z',33)?"Gsb1 and Gsb4 base x1.1,Gs eff ^2":hasMilestone('Z',28)?"Gsb1 base x1.1,Gs eff ^2":"Gsb1 base x1.1,Gs eff exp +0.4."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e150':hasMilestone('Z',34)?'1e45':hasMilestone('Z',33)?'1e28':hasMilestone('Z',32)?'1e860':hasMilestone('Z',31)?'1e530':hasMilestone('Z',30)?'1e540':hasMilestone('Z',29)?'1e460':hasMilestone('Z',28)?'1e225':hasMilestone('Z',27)?'1e144':'2e125')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasUpgrade(this.layer, 65))},
        },
        72: {
            title:'G32',
            description(){return hasMilestone('Z',33)?"logGs boost Gs and Gsi.":hasMilestone('Z',29)?"logGs boost Gs.":"logGs boost Gs,unlock another buyable."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e180':hasMilestone('Z',34)?'1e67':hasMilestone('Z',33)?'1e29':hasMilestone('Z',32)?'1e980':hasMilestone('Z',31)?'1e590':hasMilestone('Z',30)?'1e610':hasMilestone('Z',29)?'1e530':hasMilestone('Z',28)?'1e270':hasMilestone('Z',27)?'1e170':'1e150')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            effect()  { 
                let ef = player[this.layer].Gs.add(10).log(10).pow(hasMilestone('Z',33)?1:6)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 71))},
        },
        73: {
            title:'G33',
            description(){return hasMilestone('Z',32)?"Gsb6 add to Gsb5 and Gsb3.":hasMilestone('Z',31)?"G30 applies to Gsb6.":hasMilestone('Z',30)?"G30 applies to Gsb5.":hasMilestone('Z',29)?"G30 applies to Gsb4.":"G30 applies to Gsb3."},       
            cost(){return new Decimal(hasMilestone('Z',35)?'1e190':hasMilestone('Z',34)?'1e70':hasMilestone('Z',33)?'1e40':hasMilestone('Z',32)?'1e1140':hasMilestone('Z',31)?'1e720':hasMilestone('Z',30)?'1e750':hasMilestone('Z',29)?'1e660':hasMilestone('Z',28)?'1e435':hasMilestone('Z',27)?'1e300':hasMilestone('Z',26)?'5e278':'1e270')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasUpgrade(this.layer, 72))},
        },
        74: {
            title:'G34',
            description: "Gsb2 boost Gsb1 base.",       
            cost(){return new Decimal(hasMilestone('Z',35)?'1e200':hasMilestone('Z',34)?'1e73':hasMilestone('Z',33)?'1e44':hasMilestone('Z',32)?'1e1200':hasMilestone('Z',31)?'1e740':hasMilestone('Z',30)?'1e770':hasMilestone('Z',29)?'1e686':hasMilestone('Z',28)?'1e446':hasMilestone('Z',27)?'1e310':hasMilestone('Z',26)?'1e286':'1e280')},
            currencyLocation() {return player[this.layer]},
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            effect()  { 
                let b=n(getBuyableAmount('G',22))
                let ef = b.pow(0.75).div(80).add(1)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 73))},
        },
        75: {
            title:'G35',
            description(){return hasMilestone('Z',34)?"boost Gsb1/Gsb4/Gsb7 base and Gs eff double exp based on Gs upg amount.":hasMilestone('Z',32)?"boost Gsb1 and Gsb4 base based on Gs upg amount.":player.Z.points.eq(29)?"boost Gsb1 base and Gs eff double exp based on Gs upg amount.":"boost Gsb1 base based on Gs upg amount."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e205':hasMilestone('Z',34)?'1e76':hasMilestone('Z',33)?'1e46':hasMilestone('Z',32)?'1e1370':hasMilestone('Z',31)?'1e800':hasMilestone('Z',30)?'1e850':hasMilestone('Z',29)?'1e765':hasMilestone('Z',28)?'1e500':hasMilestone('Z',27)?'1e342':'1e300')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            effect()  { 
                let b = n(player[this.layer].upgrades.length)
                let ba=n(1.008)
                if(hasUpgrade('G',82)) ba=ba.add(hasMilestone('Z',31)?0.092:0.002)
                let ef=n(ba).pow(b.sub(player.Z.points.gte(35) && hasUpgrade('G',85)?Math.max(50-player[this.layer].upgrades.length,0):25).max(0))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 74))},
        },
        81: {
            title:'G36',
            description: "F2 divide Gsb1-3 cost.", 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e230':hasMilestone('Z',34)?'1e90':hasMilestone('Z',33)?'1e47':hasMilestone('Z',32)?'1e1520':hasMilestone('Z',31)?'1e870':hasMilestone('Z',30)?'1e920':hasMilestone('Z',29)?'1e820':hasMilestone('Z',28)?'1e560':hasMilestone('Z',27)?'1e382':hasMilestone('Z',26)?'1e345':'1e336')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            effect()  { 
                let exp=n(3)
        if(hasUpgrade('G',91))exp=player.G.Gsi.add(1e100).log(10).sqrt()
                if(hasUpgrade('G',82)) exp=exp.mul(hasMilestone('Z',28)?2:1.6)
        if(hasMilestone('Z',28))exp = exp.div(3.2)
                let ef=player.F.F2.add(10).log(10).pow(exp).min("ee24")
        if(hasMilestone('Z',31)){
            exp = exp.mul(3.2)
            ef=player.F.F2.add(10).log(10).add(10).log(10).pow(exp);
        }
                return ef;
            },
            effectDisplay() { return '/'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 75))},
        },
        82: {
            title:'G37',
            description(){return hasMilestone('Z',34)?"G35 base is 1.1,G36 ^2. Unlock GG.":hasMilestone('Z',31)?"G35 base is 1.1,G36 ^2.":hasMilestone('Z',28)?"G35 base is 1.01,G36 ^2.":"Gsb1 cost base -0.2,G35 base is 1.01,G36 ^1.6."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e240':hasMilestone('Z',34)?'1e95':hasMilestone('Z',33)?'1e48':hasMilestone('Z',32)?'1e1800':hasMilestone('Z',31)?'1e940':hasMilestone('Z',30)?'1e1740':hasMilestone('Z',29)?'1e1290':hasMilestone('Z',28)?'1e780':hasMilestone('Z',27)?'1e720':hasMilestone('Z',26)?'1e548':'1e493')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasUpgrade(this.layer, 81))},
        },
        83: {
            title:'G38',
            description(){return hasMilestone('Z',34)?"Gs eff exp ^2":hasMilestone('Z',32)?"Gs eff ^2":player.Z.points.gte(30)?"Gs eff exp x(10/7)":"Gs eff exp x(10/7),unlock Gsi."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e847':hasMilestone('Z',34)?'1e393':hasMilestone('Z',33)?'1e75':hasMilestone('Z',32)?'1e3000':hasMilestone('Z',31)?'1e1800':hasMilestone('Z',30)?'1e2400':hasMilestone('Z',29)?'1e1700':hasMilestone('Z',27)?'1e1000':hasMilestone('Z',26)?'1e747':'1e660')},
            currencyLocation() {return player[this.layer]},
            currencyDisplayName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            currencyInternalName() {return hasMilestone('Z',34)?"Gse":hasMilestone('Z',33)?"Gsi":"Gs"},
            unlocked() { return (hasUpgrade(this.layer, 82))},
        },
        84: {
            title:'G39',
            description: "F2 boost Gsi (This upgrade's effect is boosted by Gsi).",   
            cost(){return new Decimal(hasMilestone('Z',35)?'1e20350':hasMilestone('Z',34)?'1e372':hasMilestone('Z',33)?'1e80':hasMilestone('Z',32)?'1e47':hasMilestone('Z',30)?'1e16':hasMilestone('Z',29)?'1e12':hasMilestone('Z',27)?'1e3':'1e5')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let exp=player.G.Gsi.add(1e10).log(10).div(100)
        if(player.Z.points.eq(28)){
            exp = player.G.Gsi.add(10).log(10).sqrt().div(50)
            if(player.G.Gsi.gte(1e100))exp = player.G.Gsi.add(10).log(10).pow(1.5).div(100).div(player.G.Gsi.add(10).log(10).sqrt().add(40))
            if(player.G.Gsi.gte(1e225))exp = player.G.Gsi.add(10).log(10).mul(3).div(1100)
        }else if(player.Z.points.eq(29))exp = player.G.Gsi.add(10).log(10).sqrt().div(100)
        else if(player.Z.points.eq(30))exp = player.G.Gsi.add(10).log(10).sqrt().div(100).min(0.7)
                else if(player.Z.points.eq(31))exp = player.G.Gsi.add(10).log(10).sqrt().div(1000)
                let ef=player.F.F2.add(10).log(10).pow(exp)
        if(hasMilestone('Z',31)){
            exp = player.G.Gsi.add(10).log(10).sqrt().div(hasMilestone('Z',33)?100:10)
            ef=player.F.F2.add(10).log(10).add(10).log(10).pow(exp);
        }
        if(player.Z.points.gte(30) && player.Z.points.lte(31))return ef.min("1e3000")
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 83) && hasMilestone('Z',26))},
        },
        85: {
            title:'G40',
            description(){return hasMilestone('Z',34)?"For G35, each Gs upgrade will count one previous G upgrade as a Gs upgrade.":hasMilestone('Z',32)?"boost Gsb7 base based on Gs upg amount.":hasMilestone('Z',30)?"boost Gsb4 base based on Gs upg amount.":hasMilestone('Z',29)?"boost Gsb4 base based on Gs upg amount, Gsb4 cost base is 7.":"boost Gsb4 base based on Gs upg amount,Gsb2 cost base /2.5,Gsb4 cost base is 7."}, 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e24520':hasMilestone('Z',34)?'1e715':hasMilestone('Z',33)?'1e93':hasMilestone('Z',32)?'1e70':hasMilestone('Z',31)?'1e28':hasMilestone('Z',30)?'1e20':hasMilestone('Z',29)?'1e48':hasMilestone('Z',27)?'1e13':'1e25')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                if(player.Z.points.gte(35))return n(1);
                let b = n(player[this.layer].upgrades.length)
                let ba=n(hasMilestone('Z',31)?1.1:hasMilestone('Z',30)?1.01:1.006)
                let ef=n(ba).pow(b.sub(25).max(0))
                return ef;
            },
            effectDisplay() { return hasMilestone('Z',34)?'+'+(Math.max(Math.min(player[this.layer].upgrades.length-25,25),0))+' upgrades':'x'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 84))},
        },
        91: {
            title:'G41',
            description(){return hasMilestone('Z',34)?"Gsi boost G36. Unlock Gt4.":hasMilestone('Z',29)?"Gsi boost G36.":"remove Gsb2-3 linear cost, Gsi boost G36."}, 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e76420':hasMilestone('Z',34)?'1e6147':hasMilestone('Z',33)?'1e100':hasMilestone('Z',32)?'1e75':hasMilestone('Z',31)?'1e57':hasMilestone('Z',30)?'1e24':hasMilestone('Z',29)?'1e80':hasMilestone('Z',27)?'1e30':'1e100')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 85))},
        },
        92: {
            title:'G42',
            description: "Gsb2 cost base /2.",         
            cost(){return new Decimal(hasMilestone('Z',35)?'1e113000':hasMilestone('Z',34)?'1e8830':hasMilestone('Z',33)?'1e106':hasMilestone('Z',32)?'1e80':hasMilestone('Z',31)?'1e60':hasMilestone('Z',30)?'1e27':hasMilestone('Z',29)?'1e90':hasMilestone('Z',27)?'1e40':'1e133')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 91))},
        },
        93: {
            title:'G43',
            description(){return player.Z.points.gte(31)?"Gsb4 cost base is 4, Gsb4 provide free Gsb1.":player.Z.points.gte(30)?"Gsb4 cost base is 5, Gsb4 provide free Gsb1.":player.Z.points.eq(29)?"Gs effect exp ^1.28(this value x1.25 for each of G46 and G47),Gsb4 cost base is 5,Gsb4 provide free Gsb1.":"Gsb1 cost base is 4.5,Gsb4 cost base is 5,Gsb4 provide free Gsb1."}, 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e136900':hasMilestone('Z',34)?'1e13356':hasMilestone('Z',33)?'1e117':hasMilestone('Z',32)?'1e85':hasMilestone('Z',31)?'1e65':hasMilestone('Z',30)?'1e28':hasMilestone('Z',29)?'1e95':hasMilestone('Z',27)?'1e42':'1e138')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 92))},
        },
        94: {
            title:'G44',
            description(){return player.Z.points.gte(31)?"Gsi gain exp x2,eff x1.2.":player.Z.points.gte(30)?"Gsi gain exp +0.4,eff x1.2.":"Gsb5 cost base /4,Gsb3 cost base /10,Gsi gain exp +0.4,eff x1.2."}, 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e165200':hasMilestone('Z',34)?'1e19970':hasMilestone('Z',33)?'1e150':hasMilestone('Z',32)?'1e112':hasMilestone('Z',31)?'1e85':hasMilestone('Z',30)?'1e35':hasMilestone('Z',29)?'1e270':hasMilestone('Z',28)?'1e120':hasMilestone('Z',27)?'1e130':'1e540')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 93))},
        },
        95: {
            title:'G45',
            description(){if(hasMilestone('Z',31))return "G30 base is 0.99,Gsi gain x(Gsb1 amt x Gsb1 extra)^10,Gsi eff x1.1.";if(hasMilestone('Z',30))return "G30 base is 0.995,Gsi gain x(Gsb1 amt x Gsb1 extra)^10,Gsi eff x1.1.";if(hasMilestone('Z',28))return "G30 base is 0.995,Gsi gain x1.05^(Gsb1 amt^0.9),Gsi eff x1.1.";if(hasMilestone('Z',27))return "G30 base is 0.995,Gsi gain x1.05^(Gsb1 amt),Gsi eff x1.1.";return "G30 base is 0.995,Gsi gain x1.05^(Gsb1 amt),Gsi eff x1.2.";},     
            cost(){return new Decimal(hasMilestone('Z',35)?'1e216000':hasMilestone('Z',34)?'1e32031':hasMilestone('Z',33)?'1e190':hasMilestone('Z',32)?'1e153':hasMilestone('Z',31)?'1e105':hasMilestone('Z',30)?'1e65':hasMilestone('Z',29)?'1e299':hasMilestone('Z',28)?'1e136':hasMilestone('Z',27)?'1e180':'1e685')},
            currencyLocation() {return player[this.layer]},  
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            effect()  { 
                let b = getBuyableAmount('G',21)
        if(hasMilestone('Z',30))return b.add(1).mul(layers.G.buyables[21].extra().add(1)).pow(hasUpgrade('G',105)?20:10);
                let ba=n(1.05)
                if(hasUpgrade('G',105)) ba=ba.add(0.02)
                let ef=n(ba).pow(b.pow(hasMilestone('Z',28)?0.9:1))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 94))},
        },
        101: {
            title:'G46',
            description: "Gs gain base ^1.05,unlock Gse.",         
            cost(){return new Decimal(hasMilestone('Z',35)?'1e463400':hasMilestone('Z',34)?'1e49168':hasMilestone('Z',32)?'1e375':hasMilestone('Z',31)?'1e264':hasMilestone('Z',28)?'1e220':'1e420')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 95) && hasMilestone('Z',27))},
        },
        102: {
            title:'G47',
            description(){return player.Z.points.eq(32)?"G45 mult Gse at ^0.1 eff, Gsb6 add to Gsb5 and Gsb3.":player.Z.points.gte(30)?"G45 mult Gse at ^0.1 eff.":"G45 mult Gse at ^0.15 eff,Gsb1 cost base -0.4."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e7330':hasMilestone('Z',34)?'1e3428':hasMilestone('Z',32)?'1e24':hasMilestone('Z',28)?'1e6':'2.5e6')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let ba = upgradeEffect('G',95)
                let exp=n(0.15)
        if(player.Z.points.gte(30))exp = n(0.1)
                if(hasUpgrade('G',103)) exp=exp.add(0.05)
                if(hasUpgrade('G',104)) exp=exp.add(0.05)
                let ef=n(ba).pow(exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 101))},
        },
        103: {
            title:'G48',
            description: "remove Gsb5 linear cost,G47 exp +0.05,boost Gsb1/6 base.", 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e759700':hasMilestone('Z',34)?'1e3800':hasMilestone('Z',32)?'1e545':hasMilestone('Z',31)?'1e320':hasMilestone('Z',30)?'1e275':hasMilestone('Z',29)?'1e540':hasMilestone('Z',28)?'1e368':'1e590')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 102))},
        },
        104: {
            title:'G49',
            description(){return player.Z.points.gte(36)?"Each G upgrade add Gsb9 base by 0.001.":player.Z.points.gte(35)?"For G30's 1st effect, each Gs upgrade will count one previous G upgrade as a Gs upgrade. Gsb3 add Gsb2.":player.Z.points.gte(33)?"G30 applies to Gsb7. Gsb3 add Gsb2.":player.Z.points.gte(31)?"G30 applies to Gsb7 at ^0.3 eff. Gsb3 add Gsb2.":player.Z.points.gte(30)?"G30 applies to Gsb5 at ^0.3 eff. Gsb3 add Gsb2.":"G30 applies to Gsb4-5 at ^0.3 eff and reduce Gsb2-3 cost."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e9020':hasMilestone('Z',34)?'1e4222':hasMilestone('Z',33)?'1e84':hasMilestone('Z',32)?'1e85':hasMilestone('Z',30)?'1e30':hasMilestone('Z',28)?'1e21':'1e38')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let ba = upgradeEffect('G',65)
                let exp=n(player.Z.points.gte(33)?1:0.3)
                let ef=n(ba).pow(exp)
                return ef;
            },
            effectDisplay() { return hasMilestone('Z',35)?'+'+format(player.G.upgrades.length*0.001):hasMilestone('Z',34)?'+'+(Math.max(Math.min(player[this.layer].upgrades.length-25,25),0))+' upgrades':'^'+format(this.effect(),4) },
            unlocked() { return (hasUpgrade(this.layer, 103))},
        },
        105: {
            title:'G50',
            description(){return player.Z.points.gte(32)?"Gse gain x(Gsb4 amt x Gsb4 extra)^10,G45 eff is 20,Gsb1 base ^1.05,boost Gsi/e exp.":player.Z.points.gte(31)?"Gse gain x(Gsb4 amt x Gsb4 extra),G45 eff is 20,Gsb1 base ^1.05,boost Gsi/e exp.":player.Z.points.gte(30)?"Gse gain x1.05^(Gsb4 amt^0.9),G45 eff is 1.07,Gsb1 base ^1.05,boost Gsi/e exp.":"Gse gain x1.05^(Gsb4 amt),G45 eff is 1.07,Gsb1 base ^1.05,boost Gsi/e exp."},    
            cost(){return new Decimal(hasMilestone('Z',35)?'1e10270':hasMilestone('Z',34)?'1e9405':hasMilestone('Z',32)?'1e170':hasMilestone('Z',30)?'1e43':hasMilestone('Z',28)?'1e28':'1e120')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let b = getBuyableAmount('G',31)
        if(hasMilestone('Z',30))return b.add(1).mul(layers.G.buyables[31].extra().add(1)).pow(player.Z.points.gte(32)?10:1);
                let ba=n(1.05)
                let ef=n(ba).pow(b.pow(hasMilestone('Z',29)?0.9:1))
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (hasUpgrade(this.layer, 104))},
        },
        111: {
            title:'G51',
            description: "Gsb2 add to Gsb1, Gsb5 add to Gsb4,unlock another buyable.", 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e11815':hasMilestone('Z',34)?'1e10941':hasMilestone('Z',32)?'1e340':hasMilestone('Z',31)?'1e129':hasMilestone('Z',30)?'1e82':'1e49')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasMilestone(this.layer, 17) && hasMilestone('Z',28))},
        },
        112: {
            title:'G52',
            description(){return player.Z.points.gte(30)?"Gsb5 is better, Gsb5/8 is cheaper, Gsb5 add to Gsb2.":"Gsb5 is better, Gsb5/8 is cheaper."},    
            cost(){return new Decimal(hasMilestone('Z',35)?'1e14380':hasMilestone('Z',34)?'1e12410':hasMilestone('Z',32)?'1e500':hasMilestone('Z',31)?'1e166':hasMilestone('Z',30)?'1e92':hasMilestone('Z',29)?'1e65':'1e113')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 111))},
        },
        113: {
            title:'G53',
            description(){return player.Z.points.gte(30)?"Gsb2 is cheaper,Gsb7 add to Gsb4.":"Gsb2 is cheaper,Gse 2nd eff exp +0.03."}, 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e15360':hasMilestone('Z',34)?'1e13264':hasMilestone('Z',32)?'1e540':hasMilestone('Z',31)?'1e171':hasMilestone('Z',30)?'1e98':hasMilestone('Z',29)?'1e120':'1e200')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 112))},
        },
        114: {
            title:'G54',
            description(){return player.Z.points.gte(32)?"extra bab:b8->b5 and b7,b10->b7,b8 bas x1.05.":player.Z.points.gte(31)?"extra bab:b8->b7,b10->b7,b8 bas x1.05.":"extra bab:b9-10->b7,b6(x0.2)->b4,b8 bas x1.05."}, 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e16210':hasMilestone('Z',34)?'1e14143':hasMilestone('Z',32)?'1e597':hasMilestone('Z',31)?'1e191':hasMilestone('Z',30)?'1e103':hasMilestone('Z',29)?'1e345':'1e461')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 113))},
        },
        115: {
            title:'G55',
            description(){return player.Z.points.gte(35)?"Increase some hardcaps. Unlock Gsq. Gsb9 add to Gsb8.":player.Z.points.gte(34)?"Increase some hardcaps. Unlock GG, Gsq and an upg tree. Gsb9 add to Gsb8.":player.Z.points.gte(31)?"Increase some hardcaps. Unlock GG and an upg tree.":"extra bab:b6(x0.6,total 0.8)->b4,unlock GG and a upg tree."},
            cost(){return new Decimal(hasMilestone('Z',35)?'ee8':player.Z.points.eq(32)?'1e2692':'ee4')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsi",
            currencyInternalName: "Gsi",
            unlocked() { return (hasUpgrade(this.layer, 114) && hasMilestone('Z',29))},
        },
        121: {
            title:'G56',
            description: "GG is cheaper. Unlock Gsb11 and Gsb12,G55 b5 mult is 1,unlock new Gt.",         
            cost(){return new Decimal(hasMilestone('Z',35)?'1e19560':hasMilestone('Z',34)?'1e18920':hasMilestone('Z',33)?'1e1605':hasMilestone('Z',32)?'1e1494':'1e592')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 115) && hasMilestone('Z',31))},
        },
        122: {
            title:'G57',
            description: "Gsb1,4,7,10 are cheaper.",                 
            cost(){return new Decimal(hasMilestone('Z',35)?'1e25000':hasMilestone('Z',34)?'1e23874':hasMilestone('Z',33)?'1e1644':hasMilestone('Z',32)?'1e1536':'1e668')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 121))},
        },
        123: {
            title:'G58',
            description: "Gsb6/Gsb9 hardcap +0.02. Increase Gsb8/Gsb9 limit.",    
            cost(){return new Decimal(hasMilestone('Z',35)?'1e26400':hasMilestone('Z',34)?'1e26190':hasMilestone('Z',33)?'1e3506':hasMilestone('Z',32)?'1e3120':'1e1203')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 122))},
        },
        124: {
            title:'G59',
            description(){return player.Z.points.gte(34)?"Gsb9 hardcap +0.03,Gsb11-13 are cheaper,buff Gse 2nd eff.":"Gsb9 hardcap +0.03,Gsb11-12 are cheaper,buff Gse 2nd eff."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e36500':hasMilestone('Z',34)?'1e33600':hasMilestone('Z',33)?'1e6178':'1e5922')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            unlocked() { return (hasUpgrade(this.layer, 123) && hasMilestone('Z',32))},
        },
        125: {
            title:'G60',
            description: "add Gsb6 hardcap base on Gse,Gsb3 x1.1,unlock more Gt.",
            cost(){return new Decimal(hasMilestone('Z',35)?'1e41300':hasMilestone('Z',34)?'1e38500':hasMilestone('Z',33)?'1e8940':'1e10449')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gse",
            currencyInternalName: "Gse",
            effect()  { 
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2).div(1000)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),3) },
            unlocked() { return (hasUpgrade(this.layer, 124))},
        },
        131: {
            title:'G61',
            description: "Gsb11-12 are cheaper,t4 is buffed,remove Gsb9 nerf.",         
            cost:new Decimal('1e677'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (hasMilestone(this.layer, 21))},
        },
        132: {
            title:'G62',
            description: "Gsb11-12 are cheaper, unlock GG2.",
            cost(){return new Decimal(hasMilestone('Z',35)?'1e1161':hasMilestone('Z',34)?'1e688':'1e685')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (hasMilestone(this.layer, 21))},
        },
        133: {
            title:'G63',
            description: "b6/9 base +0.02,GG2 provide 10 GG per buy, unlock GG3.",
            cost(){return new Decimal(hasMilestone('Z',35)?'1e1250':hasMilestone('Z',34)?'1e720':'1e695')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (hasMilestone(this.layer, 21))},
        },
        134: {
            title:'G64',
            description: "Gs effect double exp ^1.01",         
            cost(){return new Decimal('1e2314')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (hasMilestone('H',1))},
        },
        135: {
            title:'G65',
            description: "Unlock final Gt.",        
            cost(){return new Decimal('1e2370')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (hasMilestone('H',1))},
        },
        141: {
            title:'G66',
            description: "remove t22 hardcap.",         
            cost:new Decimal('1e18'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (mil('G',30))},
        },
        142: {
            title:'G67',
            description: "nerf b2/y2 scaling,autobuy Hb4/9.",         
            cost:new Decimal('1e29'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',141))},
        },
        143: {
            title:'G68',
            description: "sb6 limit +2,y5 limit +3,edit R eff formula,buff H36.",         
            cost:new Decimal('1e288'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',142))},
        },
        144: {
            title:'G69',
            description: "sb6 limit +2,i eff exp +0.0025,unlock next dH.",         
            cost:new Decimal('1e353'),//2e348
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',143))},
        },//1e424
        145: {
            title:'G70',
            description: "sb6 limit +10,i eff exp +0.0025,unlock 2 dH.", //buff H31       
            cost:new Decimal('5e560'),//1e424
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',144))},
        },//1e1163
        151: {
            title:'G71',
            description: "Hb8/y5 limit +15,unlock a dH,i 2 nerf +0.005.",       
            cost:new Decimal('1e1705'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('H',44))},
        },//remove dH2 sc,
        152: {
            title:'G72',
            description: "sb10 exp +0.02,boost dHs ef,buy max some bab.",       
            cost:new Decimal('5e2836'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',151))},
        },
        153: {
            title:'G73',
            description: "r2 exp +0.025,reduce e1e100 e nerf.",       
            cost:new Decimal('5e5002'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (upg('G',152))},
        },
        154: {
            title:'G74',
            description: "sb6 exp +0.02,tot dH boost dHp exp at 216(at most 0.08),boost y6 exp,unlock a dH.",       
            cost:new Decimal('1e8719'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            effect()  { 
                let ef=tmp.H.totdh.sub(216).max(0).pow(0.6).div(200).min(0.08)
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),4) },
            unlocked() { return (upg('G',153))},
        },
        155: {
            title:'G75',
            description: "REMOVE ALL THESE SOFTCAPS and unlock a new row!",       
            cost:new Decimal('e1.961e6'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "GsR",
            currencyInternalName: "Gsr",
            unlocked() { return (mil('G',37))},
        },
        161: {
            title:'Gsq1',
            description: "Gsb14 add to Gsb13. Gsq upgrades counted as Gs upgrades.",       
            cost:new Decimal(1e27),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return player.G.Gsetot.gte('1e24000') && hasMilestone('Z',33)},
        },
        162: {
            title:'Gsq2',
            description(){if(hasMilestone('Z',34))return "Remove Gsb8 hardcap, change Gsb8 cost and autobuy max Gsb8.";return "Remove Gsb7 hardcap, change Gsb7 cost and autobuy max Gsb7."},       
            cost(){return new Decimal(hasMilestone('Z',34)?1e134:1e130)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (upg('G',161))},
        },
        163: {
            title:'Gsq3',
            description: "G30 affects Gsb13.",       
            cost:new Decimal(1e135),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (upg('G',162))},
        },
        164: {
            title:'Gsq4',
            description(){if(hasMilestone('Z',34))return "Increase Gsb10 hardcap.";return "Increase Gsb8 hardcap."},
            cost(){return new Decimal(hasMilestone('Z',35)?'1e1322':hasMilestone('Z',34)?'1e652':'1e342')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (upg('G',163))},
        },
        165: {
            title:'Gsq5',
            description: "Gsb15 add to Gsb14.",
            cost(){return new Decimal(hasMilestone('Z',35)?'1e1382':hasMilestone('Z',34)?'1e734':'1e374')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (upg('G',164))},
        },
        171: {
            title:'Gsq6',
            description: "Increase Gse 2nd effect hardcap.",
            cost(){return new Decimal(hasMilestone('Z',35)?'1e2462':'1e1880')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            effect()  { 
                let ef=new Decimal(111)
                if(upg('G',172))ef = ef.add(player.G.Gsq.add(10).log10());
                if(upg('G',181))ef = ef.mul(player.G.Gsg.add(10).log10().sqrt());
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect()) },
            unlocked() { return (mil('H',0))},
        },
        172: {
            title:'Gsq7',
            description: "Boost previous upgrade based on Gsq.",
            cost(){return new Decimal('1e2584')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (upg('G',171) && mil('Z',35))},
        },
        173: {
            title:'Gsq8',
            description: "Harsh boost Gsq.",
            cost(){return new Decimal('1e2621')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            effect()  { 
                return player.H.harsh.add(1);
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg('G',172) && mil('H',2))},
        },
        174: {
            title:'Gsq9',
            description: "Gsq boost Gsb10 hardcap.",  
            cost(){return new Decimal('1e3275')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            effect()  { 
                let ef=player.G.Gsq.add(10).log10().sqrt().div(20);
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect()) },
            unlocked() { return (upg('G',173))},
        },
        175: {
            title:'Gsq10',
            description: "Unlock Gsg.",  
            cost(){return new Decimal('1e24407')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsq",
            currencyInternalName: "Gsq",
            unlocked() { return (upg('G',174))},
        },
        181: {
            title:'Gsg1',
            description: "Increase Gsq6 effect based on Gsg.",  
            cost(){return new Decimal('1e40')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsg",
            currencyInternalName: "Gsg",
            unlocked() { return (upg('G',175))},
        },
        182: {
            title:'Gsg2',
            description: "Hyper gain is boosted by Gsg.",  
            cost(){return new Decimal('1e76')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsg",
            currencyInternalName: "Gsg",
            effect()  { 
                let ef=player.G.Gsg.add(10).log10();
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg('G',181))},
        },
        183: {
            title:'Gsg3',
            description: "G30 affects Gsb16.",        
            cost(){return new Decimal('1e83')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsg",
            currencyInternalName: "Gsg",
            unlocked() { return (upg('G',182))},
        },
        184: {
            title:'Gsg4',
            description: "Gsg boost Gsb10 hardcap.",  
            cost(){return new Decimal('1e315')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsg",
            currencyInternalName: "Gsg",
            effect()  { 
                let ef=player.G.Gsg.add(10).log10();
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect()) },
            unlocked() { return (upg('G',183))},
        },
        185: {
            title:'Gsg5',
            description: "Gsg boost Gs effect exp.",  
            cost(){return new Decimal('1e318')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "Gsg",
            currencyInternalName: "Gsg",
            effect()  { 
                let ef=player.G.Gsg.add(10).log10().pow(0.985);
                return ef;
            },
            effectDisplay() { return '^'+format(this.effect()) },
            unlocked() { return (upg('G',184))},
        },
    },
    clickables:{    
        11: {
            title(){return "Gt0"},
            display: "respec (reset Gt upg,get GG back.)",
            canClick() {return !gcs(this.layer,this.id)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() {
                for (let i in player.G.clickables) if (!["11"].includes(i)) setClickableState("G",i,0)
                player.G.Gtc=n(0)
                if (player.G.Gsetot.gte('1e13144')) scs("G",21,1),scs("G",31,1)
                if (player.G.Gsetot.gte('1e42090')) scs("G",32,1),scs("G",33,1)
                if (mil('G',25)) scs("G",41,1),scs("G",51,1)
                if (mil('G',27)) scs("G",42,1),scs("G",43,1),scs("G",44,1)//scs("G",91,1)
                if (mil('G',28)) scs("G",91,1)
                if (upg('H',15)) scs("G",101,1)
                if(n(challengeCompletions('I',22)).gte(3)) scs("G",21,1),scs("G",31,1),scs("G",32,1),scs("G",33,1),scs("G",41,1),scs("G",51,1),scs("G",42,1),scs("G",43,1),scs("G",44,1),scs("G",91,1)
                        ,scs("G",101,1),scs("G",102,1),scs("G",103,1),scs("G",104,1)
                if(n(challengeCompletions('I',22)).gte(4)) scs("G",111,1),scs("G",112,1),scs("G",121,1),scs("G",122,1)
                if(gcs('I',76)) scs("G",61,1),scs("G",62,1),scs("G",63,1),scs("G",71,1),scs("G",72,1),scs("G",73,1),scs("G",81,1),scs("G",82,1),scs("G",83,1),scs("G",131,1)
            },
            unlocked() {return hasUpgrade('G',player.Z.points.gte(35)?82:115)},
        },
        12: {
            title(){return "e"},
            display: "choose t9,11,14(e path),need 91 GG",
            canClick() {return  player.G.GG.gte(91)&&!gcs(this.layer,this.id)&&!gcs(this.layer,61)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(91)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,61,1)
                setClickableState(this.layer,71,1)
                setClickableState(this.layer,81,1)
            },
            unlocked() {return (mil('G',22)||(mil('I',0)))},
        },
        13: {
            title(){return "i"},
            display: "choose t10,12,15(i path),need 94 GG",
            canClick() {return  player.G.GG.gte(94)&&!gcs(this.layer,this.id)&&!gcs(this.layer,62)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(94)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,62,1)
                setClickableState(this.layer,72,1)
                setClickableState(this.layer,82,1)
            },
            unlocked() {return (mil('G',22)||(mil('I',0)))},
        },
        14: {
            title(){return "s"},
            display: "choose t61,17,18(s path),need 85 GG",
            canClick() {return  player.G.GG.gte(85)&&!gcs(this.layer,this.id)&&!gcs(this.layer,63)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            onClick() { player.G.Gtc=player.G.Gtc.add(85)
                setClickableState(this.layer,this.id,1)
                setClickableState(this.layer,63,1)
                setClickableState(this.layer,73,1)
                setClickableState(this.layer,83,1)
            },
            unlocked() {return (mil('G',22)||(mil('I',0)))},
        },
        21: {
            title(){return "Gt1"},
            display(){/*if(hasUpgrade('G',132)) return "Gs raise Gse <br> cost:"+format(this.cost())+" GG <br> eff:^"+format(this.effect()[1],3) 
                else */return "Gs boost Gse <br> cost:"+format(this.cost())+" GG <br> eff:x"+format(this.effect())},
            cost(){return n(player.Z.points.gte(31)?1:2)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(player.Z.points.gte(31)?1:2)&&!gcs(this.layer,this.id)},
            onClick() {if (!player.G.Gsetot.gte('1e13144')) {player.G.Gtc=player.G.Gtc.add(player.Z.points.gte(31)?1:2)}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(2)
                if(gcs('G',32))  exp=exp.mul(1.15)
                if (player.G.Gsetot.gte('1e13144')) exp=exp.mul(1.2)
                if (player.G.Gsetot.gte('1e42090')) exp=exp.mul(3)
                let ef=player.G.Gs.add(10).log(10).pow(exp)
                //let ef2=player.G.Gs.add(10).log(10).add(10).log(10).pow(0.4).div(50).add(0.98)
                return ef;//[ef,ef2]
            },
            unlocked() {return hasUpgrade('G',player.Z.points.gte(35)?82:115)},
        },
        31: {
            title(){return "Gt2"},
            display(){return "Gsb9 base x1.02 <br> cost:"+format(this.cost())+" GG "},
            cost(){return n(2)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!player.G.Gsetot.gte('1e13144')) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',player.Z.points.gte(35)?82:115)},
            branches(){return ["21"]},
        },
        32: {
            title(){return "Gt3"},
            display(){return "Gsb11-12 base +0.002,t1 ^1.15 <br> cost:"+format(this.cost())+" GG "},
            cost(){return n(6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!player.G.Gsetot.gte('1e42090')) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',121)},
            branches(){return ["21"]},
        },
        33: {
            title(){return "Gt4"},
            display(){return "total GG multiply Gse <br> cost:"+format(this.cost())+"  GG <br> eff:x"+format(this.effect(),4)},
            cost(){return n(3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!player.G.Gsetot.gte('1e42090')) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
        return Decimal.pow(1e8,player.G.GGtot.pow(gcs('G',43)?1.5:1)).pow(hasUpgrade('G',131)?10:1)
                return ef
            },
            unlocked() {return hasUpgrade('G',player.Z.points.gte(35)?91:115)},
            branches(){return ["21"]},
        },
        41: {
            title(){return "Gt5"},
            cost(){return n(5)},
            display(){return "Gse gain exp +0.05,eff exp +0.03 <br> cost:"+format(this.cost())+" GG "},//,Gsi eff nerf is weaker
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(this.cost())&&!gcs(this.layer,this.id)&&(gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33))},
            onClick() {if (!hasMilestone('G',25)) {player.G.Gtc=player.G.Gtc.add(this.cost())}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',player.Z.points.gte(35)?82:115)},
            branches(){return ["31","33"]},
        },
        42: {
            title(){return "Gt6"},
            display(){return "Gsb9 add to Gsb6 <br> cost: 20 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(20)&&!gcs(this.layer,this.id)&&(gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33))},
            onClick() {if (!mil('G',27)) {player.G.Gtc=player.G.Gtc.add(20)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["31","33"]},
        },
        43: {
            title(){return "Gt7"},
            display(){return "Gt4 exp ^1.5<br> cost: 18 GG <br>"},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(18)&&!gcs(this.layer,this.id)&&(gcs(this.layer,31)|| gcs(this.layer,32)|| gcs(this.layer,33))},
            onClick() {if (!hasMilestone('G',27)) {player.G.Gtc=player.G.Gtc.add(18)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',121)},
            branches(){return ["31","33"]},
        },
        44: {
            title(){return "Gt13"},
            display(){return "Gse raise Gs <br> cost: 26 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(26)&&!gcs(this.layer,this.id)&&gcs(this.layer,21)},
            onClick() {if (!hasMilestone('G',27)) {player.G.Gtc=player.G.Gtc.add(26)}
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2.5).div(90).add(89/90)
                if(hasUpgrade('H',12)) ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(2.6).div(80).add(79/80)
                if (gcs('G',82))  ef=ef.pow('1.2')
                return ef
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["21"]},
        },
        51: {
            title(){return "Gt8"},
            display(){return "Gsb7-8 are cheaper <br> cost: 18 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(18)&&!gcs(this.layer,this.id)&&(gcs(this.layer,41)|| gcs(this.layer,42)|| gcs(this.layer,43))},
            onClick() {if (!hasMilestone('G',25)) {player.G.Gtc=player.G.Gtc.add(18)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',20)},
            branches(){return ["41","42","43"]},
        },
        61: {
            title(){return "Gt9"},
            display(){return "Gse raise itself (base on max) <br> cost: 36 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(36)&&!gcs(this.layer,this.id)&&gcs(this.layer,51)},
            onClick() {player.G.Gtc=player.G.Gtc.add(36)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(150).add(149/150)
                if(gcs('G',122)) ef=player.G.Gsetot.add(10).log(10).add(10).log(10).pow(1.5).div(120).add(119/120)
                return ef
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["51"]},
        },
        62: {
            title(){return "Gt10"},
            display(){return "Gsi raise itself (base on max) <br> cost: 39 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(39)&&!gcs(this.layer,this.id)&&gcs(this.layer,51)},
            onClick() {player.G.Gtc=player.G.Gtc.add(39)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.5).div(250).add(249/250)
                if(gcs('G',122)) ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.6).div(180).add(179/180)
                return ef
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["51"]},
        },
        63: {
            title(){return "Gt16"},
            display(){return "Gs raise itself (base on max) <br> cost: 32 GG <br> eff:^"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(32)&&!gcs(this.layer,this.id)&&gcs(this.layer,51)},
            onClick() {player.G.Gtc=player.G.Gtc.add(32)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.2)
                if(gcs('G',91)) exp=exp.add(0.04)
                let ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(200).add(199/200)
                if(gcs('G',122)) ef=player.G.Gs.add(10).log(10).add(10).log(10).pow(exp).div(150).add(149/150)
                return ef
            },
            unlocked() {return hasMilestone('G',21)},
            branches(){return ["51"]},
        },
        71: {
            title(){return "Gt11"},
            display(){return "b4 eff boost Gse(hardcap at ee5) <br> cost: 15 GG <br> eff:x"+format(this.effect())},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(15)&&!gcs(this.layer,this.id)&&gcs(this.layer,61)},
            onClick() {player.G.Gtc=player.G.Gtc.add(15)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=n(10).pow(n(buyableEffect('G',31)).add(10).log(10).pow(1/3)).pow(0.005)
                if(gcs('G',81)) ef=ef.pow(1.2)
                if(gcs('G',91)) ef=ef.pow(1.2)
                ef=ef.min('ee5')
                return ef
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["61"]},
        },
        72: {
            title(){return "Gt12"},
            display(){
                return "b7 eff raise Gsi <br> cost: 15 GG <br> eff:^"+format(this.effect(),3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(15)&&!gcs(this.layer,this.id)&&gcs(this.layer,62)},
            onClick() {player.G.Gtc=player.G.Gtc.add(15)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef2=n(1)
                let exp=n(0.125)
                if(gcs('G',91)) exp=exp.add(0.005)
                ef2=n(buyableEffect('G',41)).add(10).log(10).pow(exp).div(16).add(1)
                return ef2
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["62"]},
        },
        73: {
            title(){return "Gt17"},
            display(){return "b1 eff raise Gs <br> cost: 13 GG <br> eff:^"+format(this.effect(),3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(13)&&!gcs(this.layer,this.id)&&gcs(this.layer,63)},
            onClick() {player.G.Gtc=player.G.Gtc.add(13)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let exp=n(1.1)
                if(gcs('G',91)) exp=exp.add(0.04)
                if(hasUpgrade('H',12)) exp=exp.add(0.011)
                let t=n(25)
                if(hasUpgrade('H',12)) t=t.sub(10)
                let ef=n(buyableEffect('G',21)).add(10).log(10).add(10).log(10).pow(exp).add(t.sub(1)).div(t)
                return ef
            },
            unlocked() {return hasMilestone('G',21)},
            branches(){return ["63"]},
        },
        81: {
            title(){return "Gt14"},
            display(){return "Gt11 ^1.2 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&!gcs(this.layer,this.id)&&gcs(this.layer,71)},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["71"]},
        },
        82: {
            title(){return "Gt15"},
            display(){return "Gt13 ^1.2 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&!gcs(this.layer,this.id)&&gcs(this.layer,72)},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',125)},
            branches(){return ["72"]},
        },
        83: {
            title(){return "Gt18"},
            display(){return "b11 base +0.0025,b12 base +0.0015 <br> cost: 40 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(40)&&!gcs(this.layer,this.id)&&gcs(this.layer,73)},
            onClick() {player.G.Gtc=player.G.Gtc.add(40)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',21)},
            branches(){return ["73"]},
        },
        91: {
            title(){return "Gt19"},
            display(){return "Gse gain exp x1.2,buff t11,12,16,17 <br> cost: 160 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(160)&&!gcs(this.layer,this.id)&&(gcs(this.layer,81)|| gcs(this.layer,82)|| gcs(this.layer,83))},
            onClick() {if(!mil('G',28)) {player.G.Gtc=player.G.Gtc.add(160)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',131)},
            branches(){return ["81","82","83"]},
        },
        101: {
            title(){return "Gt20"},
            display(){return "b11-12 are stronger <br> cost: 80 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(80)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {if(!mil('H',15)) {player.G.Gtc=player.G.Gtc.add(80)}
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasMilestone('G',23)},
            branches(){return ["91"]},
        },
        102: {
            title(){return "Gt21"},
            display(){ if(hasMilestone('G',25)) return "total GG add b6/9 hardcap and ^1.005 Gse after mil25 <br> cost: 120 GG <br> eff:+"+format(this.effect(),4)
                else return "total GG add b6/9 hardcap <br> cost: 120 GG <br> eff:+"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(120)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(120)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.GGtot.pow(0.4).div(666)
                if(hasMilestone('G',25)) ef=player.G.GGtot.pow(0.42).div(600)        
                if(ef.gte(0.04)) ef=ef.div(0.04).pow(0.6).mul(0.04)  
                return ef
            },
            unlocked() {return hasMilestone('G',23)},
            branches(){return ["91"]},
        },
        111: {
            title(){return "Gt22"},
            display(){ if(hasMilestone('G',25)) return "Gsi add b6/9 hardcap(max 0.6) and ^1.004 Gse after mil25 <br> cost: 110 GG <br> eff:+"+format(this.effect(),4)
                else return "Gsi add b6/9 hardcap(max 0.6) <br> cost: 110 GG <br> eff:+"+format(this.effect(),4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(110)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(110)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.33).div(1e4)   
                if(hasMilestone('G',25)) ef=player.G.Gsi.add(10).log(10).add(10).log(10).pow(1.33).div(8000) 
                if(ef.gte(0.11)) ef=ef.div(0.11).pow(0.4).mul(0.11)   
                ef=ef.min(0.6)           
                return ef
            },
            unlocked() {return hasMilestone('G',25)},
            branches(){return ["91"]},
        },
        112: {
            title(){return "Gt23"},
            display(){return "Gsq raise its base gain <br> cost: 110 GG <br> eff:^"+format(this.effect())},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(110)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(110)
                setClickableState(this.layer,this.id,1)
            },
            effect(){
                let ef=player.G.Gsq.add(1).log(10).add(1).log(10).pow(1.25).div(10).add(1)
                return ef
            },
            unlocked() {return hasMilestone('G',25)},
            branches(){return ["91"]},
        },
        121: {
            title(){return "Gt24"},
            display(){return "Gsb6/9 hardcap x1.06 <br> cost: 200 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(200)&&!gcs(this.layer,this.id)&&gcs(this.layer,111)},
            onClick() {player.G.Gtc=player.G.Gtc.add(200)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('H',11)},
            branches(){return ["111"]},
        },
        122: {
            title(){return "Gt25"},
            display(){return "boost r5,s^1.8,i^1.5,e^1.01 <br> cost: 200 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(200)&&!gcs(this.layer,this.id)&&gcs(this.layer,112)},
            onClick() {player.G.Gtc=player.G.Gtc.add(200)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('H',12)},
            branches(){return ["112"]},
        },
        103: {
            title(){return "Gt26"},
            display(){return "t22 x2 applies to b10, Gsb15 hardcap +0.01. <br> cost: 800 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(800)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(800)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('H',13)},
            branches(){return ["91"]},
        },
        104: {
            title(){return "Gt27"},
            display(){return "Gsb10 hardcap +10 <br> cost: 600 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(600)&&!gcs(this.layer,this.id)&&gcs(this.layer,91)},
            onClick() {player.G.Gtc=player.G.Gtc.add(600)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('H',14)},
            branches(){return ["91"]},
        },
        131: {
            title(){return "Gt28"},
            display(){return "Increase Gsb15 hardcap <br> cost: 900 GG "},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#77BF5F":layers.G.clickables[this.id].canClick()?"#695735":"#BF8F8F"}},
            canClick() {return player.G.GG.gte(900)&&!gcs(this.layer,this.id)&&(gcs(this.layer,121)||gcs(this.layer,122))},
            onClick() {player.G.Gtc=player.G.Gtc.add(900)
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return hasUpgrade('G',135)},
            branches(){return ["121","122"]},
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
    buyables:{
        11: {
            title: "Gb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x.pow(1.1)).mul(player.Z.points.gte(19)?1:player.Z.points.gte(17)?1e7:1e10)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(2)          
            if (hasUpgrade('G',42)) base = Decimal.add(base,0.5)
                if(mil('G',8))  base=Decimal.add(base,0.5)
                if(upg('G',52))  base=Decimal.pow(base,1.3)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.pow(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give G a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasUpgrade('G',25) }
        },
        12: {
            title: "Gb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(100, x.pow(1.2)).mul(player.Z.points.gte(19)?1:player.Z.points.gte(17)?1e8:1e11)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(2)    
                if (hasUpgrade('F',74))  base=Decimal.add(base,upgradeEffect('F',74)[0])                   
            if (hasUpgrade('G',42)) base = Decimal.mul(base,2)
                if (hasUpgrade('G',33)) base=Decimal.pow(base,2)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.pow(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give F dim a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasUpgrade('G',25) }
        },
        13: {
            title: "Gb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                if(player.Z.points.gte(23)){
                    return Decimal.pow(10, Decimal.pow(2, x));
                }
        if(player.Z.points.gte(20)){
                    return Decimal.pow(100, Decimal.pow(2, x));
                }
                let cost = Decimal.pow(1000, x.pow(player.Z.points.gte(17)?3:1.5)).mul(player.Z.points.gte(19)?1:player.Z.points.gte(17)?1e9:1e12)
                if(x.gte(10) && player.Z.points.gte(19))cost = Decimal.pow(1000, x.pow(6).div(1000));
        return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { if(!player.Z.points.gte(23))setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(1.1)              
            if (hasUpgrade('G',42)) base = n(1.11)
                if (hasUpgrade('F',75))  base=Decimal.add(base,upgradeEffect('F',75))
                if (hasUpgrade('F',82))  base=Decimal.mul(base,upgradeEffect('F',82))
                if (hasUpgrade('F',84))  base=Decimal.mul(base,upgradeEffect('F',84))
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.pow(this.base(),x.pow(exp))                
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Bb5/Eb10 a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " G \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasUpgrade('G',25) }
        },
        //Gs babs
        21: {
            title: "Gsb1", 
            cost(x) {
        if (mil('G',17) || player.Z.points.gte(29)) {
            let cost = Decimal.pow(hasUpgrade("G",122)?4:4.1, x.pow(hasUpgrade("G",122)?1.25:1.35))
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
                    if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
            return cost
        }

                let bas=n(10)
                if (hasUpgrade('G',61)) bas=n(5)
                if (hasUpgrade('G',82)) bas=bas.sub(0.2)
                if (hasUpgrade('G',93)) bas=bas.sub(0.2)
                if (hasUpgrade('G',102)) bas=bas.sub(0.4)
                let e=n(1.35)
                if (x.gte(500) && !hasMilestone('Z',27)) e=e.add(0.03)
                let cost = Decimal.pow(bas, x.pow(e)).div(hasMilestone('Z',25)?10:1000)
                if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
                if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
                return cost
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            buy() { if(!mil('G',27) && player.Z.points.lt(29)) {player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',111))  e=e.add(getBuyableAmount('G',22))
                if (hasUpgrade('G',111))  e=e.add(layers.G.buyables[22].extra())
                if (hasUpgrade('G',93))  e=e.add(getBuyableAmount('G',31))
                if (hasUpgrade('G',93))  e=e.add(layers.G.buyables[31].extra())
                return e
            },
            base(){
        let t=n(1.1)
                if (hasUpgrade('G',103)) t=t.add(0.1)
                if(hasUpgrade('G',105)) t=t.mul(1.05)
                let base = player.G.Gs.add(10).log(10).pow(t)   
                if (hasUpgrade('G',63)) base=Decimal.mul(base,1.2) 
                if (hasMilestone('G',15)) base=Decimal.mul(base,13/12) 
                if (hasUpgrade('G',71)) base=Decimal.mul(base,1.1) 
                if (hasUpgrade('G',74))  base=Decimal.mul(base,upgradeEffect('G',74))
                if (hasUpgrade('G',75))  base=Decimal.mul(base,upgradeEffect('G',75))
                if(hasMilestone('G',19)) base=Decimal.mul(base,1.1)
                return base
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.add(this.extra()))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gs gain x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return (hasMilestone('G',14) && hasMilestone('Z',24)) || hasMilestone('Z',25)}
        },
        22: {
            title: "Gsb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
        if (player.Z.points.gte(30)) {
            let cost = Decimal.pow(hasUpgrade("G",92)?5:10, x.pow(player.Z.points.gte(33)?2:2.5))
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
                    if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
            return cost
        }

                let bas=n(1e5)
                if (hasUpgrade('G',85))  bas=Decimal.mul(bas,0.4)
                if (hasUpgrade('G',92))  bas=Decimal.mul(bas,0.5)
                let e=n(1.8)
                if (x.gte(50)) e=e.add(0.1)
                if (hasUpgrade('G',104))  e=e.sub(0.05)
                if (hasUpgrade('G',113))  e=e.sub(0.05)
                let cost = Decimal.pow(bas, x.pow(e)).times(hasUpgrade('G',91)?1:1e60)
                if (hasUpgrade('G',65))  cost=Decimal.pow(cost,upgradeEffect('G',65))
                if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
                return cost
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            buy() { if(!mil('G',27) && player.Z.points.lt(30)) {player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',104) && player.Z.points.gte(30))  e=e.add(getBuyableAmount('G',23))
                if (hasUpgrade('G',104) && player.Z.points.gte(30))  e=e.add(layers.G.buyables[23].extra())
                if (hasUpgrade('G',112) && player.Z.points.gte(30))  e=e.add(getBuyableAmount('G',32))
                if (hasUpgrade('G',112) && player.Z.points.gte(30))  e=e.add(layers.G.buyables[32].extra())
                return e
            },
            base(){
                let base = player.G.Gs.add(10).log(10).pow(0.6).div(200);
        if(player.Z.points.gte(32))base = player.G.Gs.add(1).log(10).cbrt().div(115);
                if (hasUpgrade('G',64)) base=base.mul(1.15)
                if (hasMilestone('G',19)) base=base.mul(1.1)
        if(player.Z.points.gte(32))return base;
                return base.min(1111)
            },
            purchaseLimit() {
        if(hasMilestone('Z',29))return Decimal.dInf
        let lim=n(4000)
        return lim
        },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.add(this.extra()).pow(exp)).add(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
        if(hasMilestone('Z',29))return "Gs gain base +^"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect())
                return "Gs  gain base +^"+ format(this.base()) + "(hardcap at "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect())
            },
            unlocked() { return (hasUpgrade('G',63)) || hasMilestone('Z',29) }
        },
        23: {
            title: "Gsb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                if (player.Z.points.gte(30)) {
            let cost = Decimal.pow(1000, x.pow(3))
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
                    if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
            return cost
        }
        if (mil('G',17)) {
            let cost = Decimal.pow(100, x)
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
                    if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
            return cost
        }

        let bas=n(1000)
                let e=n(1.2)
                if (hasUpgrade('G',94))  bas=bas.div(10)
                if (hasUpgrade('G',104))  e=e.sub(0.1)

                let cost = Decimal.pow(bas, x.pow(e)).times(hasUpgrade('G',91)?1:1e260)
                if (hasUpgrade('G',73))  cost=cost.pow(upgradeEffect('G',65))
                if (hasUpgrade('G',81))  cost=cost.div(upgradeEffect('G',81))
                return cost
            },
            canAfford() { return player[this.layer].Gs.gte(this.cost()) },
            buy() { if(!mil('G',27) && player.Z.points.lt(30)) {player[this.layer].Gs = player[this.layer].Gs.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
    extra(){
                let e=n(0)
                if (hasUpgrade('G',player.Z.points.gte(33)?73:102) && player.Z.points.gte(32))  e=e.add(getBuyableAmount('G',33))
                if (hasUpgrade('G',player.Z.points.gte(33)?73:102) && player.Z.points.gte(32))  e=e.add(layers.G.buyables[33].ex())
                return e
            },
            base(){   
            if(player.Z.points.gte(30))return player.G.Gs.add(1).log(10).cbrt().div(hasUpgrade('G',125)?100:110).mul(hasMilestone('G',19)?1.1:1);
                  let base = player.G.Gs.add(10).log(10).div(1000).mul(player.G.buyables[23].add(1))   
                if (hasUpgrade('G',125))  base=base.mul('1.1')
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.mul(this.base(),x.add(this.extra()))
        if (player.Z.points.gte(30)) ef = ef.add(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
        if(hasMilestone('Z',29))return "Gs eff +^"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect());
                return "Gs eff exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gs \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',72)) || hasMilestone('Z',29) }
        },
        31: {
            title: "Gsb4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
        if (player.Z.points.gte(31)) {
            let cost = Decimal.pow(hasUpgrade("G",93)?4:4.8, x.pow(hasUpgrade("G",122)?1.5:1.6))
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
            return cost
        }
                let bas=n(10)
                let e=n(1.4)
                if (hasUpgrade('G',85))  bas=n(7)
                if (hasUpgrade('G',93))  bas=n(5)
                if (hasUpgrade('G',112))  bas=n(4.9)
        if (x.gte(200) && player.Z.points.gte(30))e = e.add(0.03)
        if (x.gte(286) && player.Z.points.gte(30))e = x.div(200)
                let cost = Decimal.pow(bas, x.pow(e)).times('10')
                if (hasUpgrade('G',104) && player.Z.points.lt(30))  cost=cost.pow(upgradeEffect('G',104))
                if (hasUpgrade('G',73) && player.Z.points.gte(30))  cost=cost.pow(upgradeEffect('G',65))
                return cost
            },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            buy() { if(!mil('G',27) && player.Z.points.lt(31)) {player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',111))  e=e.add(getBuyableAmount('G',32))
                if (hasUpgrade('G',111))  e=e.add(layers.G.buyables[32].extra())
                if (hasUpgrade('G',113) && player.Z.points.gte(30))  e=e.add(getBuyableAmount('G',41))
                if (hasUpgrade('G',113) && player.Z.points.gte(30))  e=e.add(layers.G.buyables[41].extra())
                let b5=n(0)
                if (hasUpgrade('G',114))  b5=b5.add(0.2)
                if (hasUpgrade('G',115))  b5=b5.add(0.6)
                if (hasUpgrade('G',121))  b5=b5.add(0.2)
                if(player.Z.points.lt(31))e=e.add(n(getBuyableAmount('G',33)).mul(b5))
                return e
            },
            purchaseLimit() {let lim=n(1000)
        if(player.Z.points.gte(31))return Decimal.dInf
        return lim
        },
            base(){   let base = player.G.Gsi.add(10).log(10).pow(1.1).mul(2)
                if (hasUpgrade('G',player.Z.points.gte(33)?75:85))  base=Decimal.mul(base,upgradeEffect('G',player.Z.points.gte(33)?75:85)) 
                if (hasMilestone('G',19)) base=base.mul(1.1)  
                if (hasUpgrade('G',63) && player.Z.points.gte(34)) base=Decimal.mul(base,1.2)
                if (hasUpgrade('G',71) && player.Z.points.gte(34)) base=Decimal.mul(base,1.1) 

                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.add(this.extra())).max(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
            if(hasMilestone('Z',30))return "Gsi gain x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())
                return "Gsi gain x"+ format(this.base()) + "(hardcap at "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#FF00F1' }},
            unlocked() { return (hasUpgrade('G',83) && hasMilestone('Z',26)) || hasMilestone('Z',29) }
        },
        32: {
            title: "Gsb5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
        if (player.Z.points.gte(32)) {
            let cost = Decimal.pow(player.Z.points.gte(33)?5:100, x.pow(player.Z.points.gte(33)?2:hasMilestone("G",18)?2:3))
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
            return cost
        }
                let bas=n(1e4)
                let e=n(1.85)
                if (hasUpgrade('G',94) && player.Z.points.lt(30)) bas=bas.mul(0.25)
                if (hasMilestone('G',17))  bas=n(1000)
                if (hasUpgrade('G',112))  bas=n(500)
        if (x.gte(62))e = x.mul(0.03)
                let cost = Decimal.pow(bas, x.pow(e)).times(player.Z.points.gte(31)?1:player.Z.points.gte(29)?'1e100':'1e64')
                if (hasUpgrade('G',103) && player.Z.points.lt(31)) cost=cost.div(player.Z.points.gte(29)?'1e100':'1e64')
                if (hasUpgrade('G',104) && player.Z.points.lt(31))  cost=cost.pow(upgradeEffect('G',104))
                if (hasUpgrade('G',73) && player.Z.points.gte(31))  cost=cost.pow(upgradeEffect('G',65))
                return cost
            },
            purchaseLimit() {let lim=n(40)
        if(player.Z.points.gte(32))return Decimal.dInf
        if(mil('Z',28))lim = lim.add(20)
        if(hasUpgrade("G",115) && player.Z.points.gte(31))lim = lim.add(40)
        return lim
        },
            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            buy() { if(!mil('G',27) && player.Z.points.lt(32)) {player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',player.Z.points.gte(33)?73:102) && player.Z.points.gte(32))  e=e.add(getBuyableAmount('G',33))
                if (hasUpgrade('G',player.Z.points.gte(33)?73:102) && player.Z.points.gte(32))  e=e.add(layers.G.buyables[33].ex())
                if (hasUpgrade('G',114) && player.Z.points.gte(32))  e=e.add(getBuyableAmount('G',42))
                if (hasUpgrade('G',114) && player.Z.points.gte(34))  e=e.add(layers.G.buyables[42].extra())
                return e
            },
            base(){   let base = player.G.Gsi.add(10).log(10).pow(0.65).div(100)  
        if(player.Z.points.gte(32))base = player.G.Gsi.add(1).log(10).cbrt().div(100)
                if (hasMilestone('G',19)) base=base.mul(1.1) 
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.mul(this.base(),x.add(this.extra()))
        if (player.Z.points.gte(32)) ef = ef.add(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
        if(hasMilestone('Z',31))return "Gsi gain base +^"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect())
                return "Gsi gain exp +"+ format(this.base())  + "(hardcap at "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#FF00F1' }},
            unlocked() { return (hasUpgrade('G',83) && hasMilestone('Z',26)) || hasMilestone('Z',30) }
        },
        33: {
            title: "Gsb6", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                if (player.Z.points.gte(36)) {
                    let cost = Decimal.pow(10, Decimal.pow(2.5, x).mul(upgradeEffect('G',65)));
                    return cost
                }
                let bas=n('1e20')
                let e=n(2.1)
        if (x.gte(21))e = x.mul(0.1)
                if(player.Z.points.gte(33))bas = n(10), e = x.mul(0.2).add(1)
                let cost = Decimal.pow(bas, x.pow(e)).times(player.Z.points.gte(32)?1:hasMilestone('Z',28)?'1e500':hasMilestone('Z',27)?'1e700':'1e600')
                if(hasUpgrade('G',111) && player.Z.points.lt(32)) cost=cost.div(hasMilestone('Z',28)?'1e500':hasMilestone('Z',27)?'1e700':'1e600')
                if ((hasUpgrade('G',73) && player.Z.points.gte(32)) || (hasUpgrade('G',65) && player.Z.points.gte(33)))  cost=cost.pow(upgradeEffect('G',65))
                return cost
            },
            purchaseLimit() {
                if(player.Z.points.gte(36))return Decimal.dInf
                let lim=n(7)
        if(mil('Z',28))lim = lim.add(3)
        if(mil('Z',30))lim = lim.add(5)
        if(hasUpgrade("G",115) && player.Z.points.gte(31))lim = lim.add(85)
                if(mil('H',0)) lim=lim.add(100)
                //if(upg('H',42)) lim=lim.add(1)
                //if(upg('G',143)) lim=lim.add(2)
                //if(upg('G',144)) lim=lim.add(2)
                //if(upg('G',145)) lim=lim.add(10)
                //if(mil('G',33)) lim=lim.add('1e308')
                return lim},            canAfford() { return player[this.layer].Gsi.gte(this.cost()) },
            buy() { if(!mil('G',27) && player.Z.points.lt(36)) {player[this.layer].Gsi = player[this.layer].Gsi.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
        if(player.Z.points.gte(33))return this.hardcap();
        let base = player.G.Gsi.add(10).log(10).pow(0.4).div(600) 
                if (hasUpgrade('G',103)) base=base.mul(1.25)  
                let sc=n(0.7)
                if (base.gte(0.03)) base=base.div(0.03).pow(sc).mul(0.03)
                base=base.min(this.hardcap())
                return base},
            hardcap(){
                let hp=n(0.05)
                if(player.Z.points.gte(36)){
                    hp=Decimal.mul(0.01,player.G.upgrades.length);
                }else if(player.Z.points.gte(33) && hasUpgrade("G",65)){
                    hp=n(player.G.upgrades.length-20).mul(0.01).max(0.05);
                }else if(hasUpgrade("G",115) && player.Z.points.gte(31))hp = hp.add(0.25)
        if(hasUpgrade("G",123))hp = hp.add(0.02)
                if(upg('G',125)) hp=hp.add(upgradeEffect('G',125))
                if(hasMilestone('G',21)) hp=hp.add(0.005)
                if(upg('G',133)) hp=hp.add(0.02)
                if(gcs('G',102)) hp=hp.add(clickableEffect('G',102))
                if(gcs('G',111)) hp=hp.add(clickableEffect('G',111))
                hp=hp.add(tmp.H.effect)
                if(gcs('G',121)) hp=hp.mul(1.06)
        if(hasUpgrade('G',103) && player.Z.points.gte(33))hp = hp.mul(1.25)
                return hp
            },
            ex(){
                let e=n(0)
                if(gcs('G',42)) e=e.add(getBuyableAmount('G',43))
                return e
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = this.base().mul(x.add(this.ex()))
                if(player.Z.points.gte(33))return ef.add(1)
                let sc=n(0.5)
                if(player.G.Gsetot.gte("1e4555"))sc=sc.add(0.25);
                if(mil('G',21)) sc=sc.add(0.03)
                if(gcs('G',121)) sc=sc.add(0.07)
                if(gcs('G',104)) sc=sc.add(0.02)
                if(upg('H',35)) sc=sc.add(0.05)
                if(mil('G',31)) sc=sc.add(0.03)//0.72
                if(mil('H',10)) sc=sc.add(0.01)//0.73
                if(upg('G',154)) sc=sc.add(0.02)
                if(ef.gte(4.2))  ef=ef.div(4.2).pow(sc).mul(4.2)
                return ef
            },
            display() { // Everything else displayed in the buyable button after the title
                if(player.Z.points.gte(36))return "Gsi eff +^"+ format(this.base(),3)  + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+format(this.ex())+"\n\
                Effect: ^" + format(this.effect());
                if(player.Z.points.gte(33))return "Gsi eff +^"+ format(this.base(),3)  + "  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +"/"+format(this.purchaseLimit())+" + "+format(this.ex())+"\n\
                Effect: ^" + format(this.effect());
                return "Gsi eff exp +"+ format(this.base(),3)  + "(hardcap at "+format(this.hardcap(),3)+" eff and "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gsi \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#FF00F1' }},
            unlocked() { return (hasUpgrade('G',83) && hasMilestone('Z',26)) || hasMilestone('Z',31) }
        },
        41: {
            title: "Gsb7", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                if (hasUpgrade('G',162) || player.Z.points.gte(35)) {
                let cost = Decimal.pow(4, x.pow(1.4))
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
            return cost
        }
        let bas=n(10)
                //if (hasUpgrade('G',104))  bas=bas.sub(4)
                if (hasMilestone('G',17))  bas=bas.sub(1)
                if (hasUpgrade('G',122))bas = n(4)
                let e=n(1.45)
                if (x.gte(500) && player.Z.points.lt(29)) e=e.add(0.1)
        if (hasMilestone('G',20))e = n(1.44)
                if(gcs('G',51)) e=e.sub(0.04)
                let cost = Decimal.pow(bas, x.pow(e)).times('200')
                if (hasUpgrade('G',104) && player.Z.points.gte(31))  cost=cost.pow(upgradeEffect('G',104))
                return cost
            },
            purchaseLimit() {let lim=n(100)
                if(hasUpgrade('G',162) || player.Z.points.gte(35))return Decimal.dInf
                if(player.Z.points.gte(30))lim = lim.add(100)
                if(hasUpgrade('G',122))lim = lim.add(800)
                if (hasMilestone('G',20))lim = lim.add(1000)
                if(hasUpgrade('G',125))lim = lim.add(1000)
                return lim
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27) && player.Z.points.lt(35)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',114))  e=e.add(getBuyableAmount('G',player.Z.points.gte(31)?42:43)).add(getBuyableAmount('G',44))
        if (hasUpgrade('G',114) && player.Z.points.gte(34)) e=e.add(layers.G.buyables[42].extra())
                return e
            },
            base(){   let base = player.G.Gse.add(10).log(10).pow(1.1).mul(player.Z.points.gte(33)?1:2)
                if (hasUpgrade('G',75) && player.Z.points.gte(35))  base=Decimal.mul(base,upgradeEffect('G',75)) 
                if (hasUpgrade('G',85) && player.Z.points.gte(33) && player.Z.points.lt(35))  base=Decimal.mul(base,upgradeEffect('G',85)) 
                if (hasMilestone('G',19)) base=base.mul(1.1)
                if (hasUpgrade('G',63) && player.Z.points.gte(35)) base=Decimal.mul(base,1.2)
                if (hasUpgrade('G',71) && player.Z.points.gte(35)) base=Decimal.mul(base,1.1) 
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.add(this.extra())).max(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
        if(hasUpgrade('G',162) || hasMilestone('Z',34))return "Gse gain x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())
                return "Gse gain base x"+ format(this.base()) + "(hardcap at "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#14FFF3' }},
            unlocked() { return (hasUpgrade('G',101)) || hasMilestone('Z',33)}
        },
        42: {
            title: "Gsb8", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                if (hasUpgrade('G',162) && player.Z.points.gte(35)) {
                let cost = Decimal.pow(100, x.pow(2))
                    if (hasUpgrade('G',65))  cost=cost.pow(upgradeEffect('G',65))
            return cost
        }
        let bas=n(4000)
                let e=n(player.Z.points.gte(35)?2.08:1.95)
                if (x.gte(20) && player.Z.points.lt(29)) e=e.add(0.15)
                if(gcs('G',51)) e=e.sub(0.08)
                if (hasMilestone('G',17))  bas=n(1000)
                if (hasUpgrade('G',112))  bas=n(200)
                if (hasMilestone('G',19))  bas=n(100)
                let cost = Decimal.pow(bas, x.pow(e)).times(player.Z.points.gte(35)?1:'1e26')
                return cost
            },
            purchaseLimit() {let lim=n(20)
            if(hasMilestone('Z',34) && upg('G',162))return Decimal.dInf
        if(upg('G',123))lim = lim.add(80)
        if(upg('G',164))lim = lim.add(1900)
        return lim
        },
        extra(){
                let e=n(0)
                if (hasUpgrade('G',115) && player.Z.points.gte(34))  e=e.add(getBuyableAmount('G',43))
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() {if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   
                let exp=n(0.5)
                if(player.Z.points.gte(35)) exp = n(1/3-0.05)
                if (hasUpgrade('G',112))  exp=exp.add(0.05) 
                let b = player.G.Gse.add(10).log(10).pow(exp).div(100).add(0.05) 
                return b},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.add(this.extra()).pow(exp)).add(player.Z.points.gte(35)?1:0) 
                return ef},
            display() { // Everything else displayed in the buyable button after the title
        if(hasMilestone('Z',34) && upg('G',162))return "Gse gain base +^"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect())
                if(hasMilestone('Z',34))return "Gse gain base +^"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +"/"+format(this.purchaseLimit())+" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect())
                return "Gse gain exp +"+ format(this.base()) + "(hardcap at "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#14FFF3' }},
            unlocked() { return (hasUpgrade('G',101)) || player.Z.points.gte(35)}
        },
        43: {
            title: "Gsb9", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n('1e4')
                let e=n(2.4)
                if (x.gte(8) && player.Z.points.lt(29)) e=e.add(0.6)
                if (x.gte(12) && player.Z.points.gte(34)) e = x.mul(0.2)
                let cost = Decimal.pow(bas, x.pow(e)).times(player.Z.points.gte(36)?1:player.Z.points.gte(29)?'1e48':'2e52')   
                if (mil('G',24))  cost=cost.pow(0.8)
                if (mil('G',26))  cost=cost.pow(0.8)
                if (upg('G',111)) cost=cost.div('2e5')
                return cost
            },
            purchaseLimit() {let lim=n(10)
        if(upg('G',123))lim = lim.add(90)
        return lim
        },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){
        if(player.Z.points.gte(33))return this.hardcap();
           let base = player.G.Gsi.add(10).log(10).pow(0.38).div(750)
                let sc=n(0.7)
                if (base.gte(0.02)) base=base.div(0.02).pow(sc).mul(0.02) 
                if(getClickableState('G',31))  base=base.mul(1.02)
                base=base.min(this.hardcap())
                return base},
            hardcap(){
                let hp=n(0.3)
                if(player.Z.points.gte(33))hp=n(0.05)
                if(hasUpgrade('G',104) && player.Z.points.gte(36)) hp = hp.add(player.G.upgrades.length*0.001);
                if(hasUpgrade('G',123)) hp=hp.add(0.02)
                if(hasUpgrade('G',124)) hp=hp.add(0.03)
                if(hasMilestone('G',21)) hp=hp.add(0.005)
                if(gcs('G',102)) hp=hp.add(clickableEffect('G',102))
                if(gcs('G',111)) hp=hp.add(clickableEffect('G',111))
                hp=hp.add(tmp.H.effect)
                if(upg('G',133)) hp=hp.add(0.02)
                if(gcs('G',121)) hp=hp.mul(1.06)
        if(getClickableState('G',31) && player.Z.points.gte(33))hp = hp.mul(1.02)
                return hp
            },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.mul(this.base(),x)
        if(hasUpgrade('G',131))return ef;
                let sc=n(0.5)
        if(player.G.Gsetot.gte('1e6415'))sc = sc.add(0.1)
                if(hasMilestone('G',21)) sc=sc.add(0.03)
                if(gcs('G',121)) sc=sc.add(0.07)
                if(hasUpgrade('G',133)) sc=sc.add(0.02)
                if(gcs('G',104)) sc=sc.add(0.02)
                if(ef.gte(1.1))  ef=ef.div(1.1).pow(sc).mul(1.1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                if(player.Z.points.gte(33))return "Gse 1st eff exp +"+ format(this.base(),3)  + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +"/"+format(this.purchaseLimit())+" \n\
                Effect: +" + format(this.effect());
                return "Gse 1st eff exp +"+ format(this.base(),3) + "(hardcap at "+format(this.hardcap(),3)+" and "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#14FFF3' }},
            unlocked() { return (hasUpgrade('G',101))  || player.Z.points.gte(36)}
        },
        44: {
            title: "Gsb10", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let e=n(0.75)
                if(player.Z.points.gte(36))e = n(1)
                let cost = n(10).pow(n(2).pow(x.pow(e))).mul(player.Z.points.gte(36)?1:upg('G',122)?1:player.Z.points.gte(30)?'1e60':'1e100')
                return cost
            },
            purchaseLimit() {let lim=n(20)
        if(upg('G',164) && mil('Z',34))lim = lim.add(10)
        if(upg('G',122))lim = lim.add(10)
        if(player.G.Gsetot.gte('1e6415'))lim = lim.add(10)
                if(mil('G',30)) lim=lim.add(5)
                if(mil('H',8)) lim=lim.add(10)
                //if(player.H.max.gte(681)) lim=lim.add(5)
                return lim},
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = player.G.Gse.add(10).log(10).pow(0.5).div(300) 
                if(player.G.Gsetot.gte('1e6415')) b=b.mul(1.1)
                b=b.min(this.hardcap())
                return b},
            hardcap(){
                let h=n(52)
        if(upg('G',164) && mil('Z',35))h = h.add(10)
        if(gcs('G',104))h = h.add(10)
                if(gcs('G',103)) h=h.add(n(clickableEffect('G',111)).mul(2))
                if(upg('G',174)) h=h.add(upgradeEffect('G',174))
                if(upg('G',184)) h=h.add(upgradeEffect('G',184))
                if(upg('H',41)) h=h.add(upgradeEffect('H',41)[0])
                return h
                },
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = Decimal.mul(this.base(),x.pow(exp))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gse 2nd eff mult +"+ format(this.base(),3) + "(hardcap at "+format(this.hardcap(),3)+" eff and "+format(this.purchaseLimit())+" purchases)  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()&&(!getBuyableAmount(this.layer, this.id).gte(this.purchaseLimit()))) return {'background-color': '#14FFF3' }},
            unlocked() { return (hasUpgrade('G',111)) }
        },
        51: {
            title: "Gsb11", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(20)).mul('1e647')
                if(upg('G',124)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(16))
                if(upg('G',131)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(10))
                if(upg('G',132)) cost = n(10).pow(n(2).pow(x.pow(this.sc())).mul(6))
                if(mil('G',37)) cost = n(10).pow(n(2).pow(x.pow(this.sc())))
                return cost
            },
            sc(){
                let e=n(0.95)
                if(upg('G',121))  e=e.sub(0.03)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(1.01) 
                if(gcs('G',32))  base=base.add(0.002)
                if(gcs('G',83))  base=base.add(0.0025)
                if(gcs('G',101))  base=base.add(0.0035)
                if(upg('H',15))  base=base.add(0.004)
                return base},
            effect(x) {
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() {
                return "raise Gs gain to ^"+ format(this.base(),4) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            style() {if (this.canAfford()) return {'background-color': '#14FFF3' }},
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
                let e=n(1.05)
                if(upg('G',121))  e=e.sub(0.04)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = n(1.0085) 
                if(getClickableState('G',32))  base=base.add(0.002)
                if(gcs('G',83))  base=base.add(0.0015)
                if(gcs('G',101))  base=base.add(0.004)
                if(upg('H',15))  base=base.add(0.004)
                return base},
            effect(x) { 
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() {
                return "raise Gsi gain to ^"+ format(this.base(),4) + "  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            style() {if (this.canAfford()) return {'background-color':'#14FFF3'}},
            unlocked() { return upg('G',121) }
        },
        61: {
            title: "GG1", 
            cost(x) {
                let cost = n(10).pow(x.pow(this.scaling())).mul(player.Z.points.gte(35)?1:player.Z.points.gte(31)?'1e400':'1e700')
                if (hasUpgrade('G',121))cost = n(10).pow(x.pow(this.scaling()))
                return cost
            },
            scaling(){
                let e=n(3)
                return e
            },
            canAfford() { return player[this.layer].Gse.gte(this.cost()) },
            am(){let a=n(1)
                a=a.mul(tmp.G.ggmt)
                return a
            },
            buy() { if(!mil('G',27)) {player[this.layer].Gse = player[this.layer].Gse.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) { 
                let ef = n(x)
                return ef},
            display() { 
                return "gain " + format(this.am()) + " GG  \n\
                Cost: " + format(this.cost()) + " Gse \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return (hasUpgrade('G',player.Z.points.gte(35)?82:115)) }
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
                return ef},
            am(){
                let a=n(5)
                if(upg('G',133)) a=a.add(5)
                a=a.mul(tmp.G.ggmt)
                return a
            },
            display() { 
                return "gain " + format(this.am()) + " GG  \n\
                Cost: " + format(this.cost()) + " points \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return hasUpgrade('G',132) }
        },
        63: {
            title: "GG3", 
            cost(x) {
                let cost = n(10).pow(x.pow(this.scaling()))
                return cost
            },
            scaling(){
                let e=n(3)
                return e
            },
            canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
            buy() { 
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) { 
                let ef = n(x).mul(this.am())
                return ef},
            am(){
                let a=n(10)
                a=a.mul(tmp.G.ggmt)
                return a
            },
            display() { 
                return "gain " + format(this.am()) + " GG  \n\
                Cost: " + format(this.cost()) + " Gsq \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return hasUpgrade('G',133) }
        },
        71: {
            title: "Gr1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(2).pow(x.sub(1).max(0))).mul(10)
                if(x.gte(6)) c=c.mul(n(4).pow(x.sub(6).pow(1.25)))
                if(x.gte(100)) c= n(10).pow(n(4).pow(x.sub(10).pow(this.sc())))
                if(player[this.layer].Gsr.gte('1e1284')||n(challengeCompletions('I',22)).gte(1)) c=n(10).pow(n(4).pow(x.pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.25)
                if(mil('G',33)) e=e.sub(0.01)
                if(mil('G',37)) e=e.sub(0.04)
                if(gba(this.layer, this.id).gte(100)) e=e.add(0.05)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)
                if(player[this.layer].Gsr.gte('1e1284')) e=e.mul(0.98)
                return e
            },
            bulk(){
                let tar=n(0)
                if(upg('G',152)&&player.H.auto7)   tar=player[this.layer].Gsr.add(10).log(10).max(1).log(4).pow(this.sc().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).sub(1).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gsr.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                e=e.add(getBuyableAmount('G',73).div(5))
                if(upg('H',42)) e=e.add(getBuyableAmount('G',33).sub(155).max(0).mul(1.2))
                e=e.add(getBuyableAmount('G',74).div(5))
                return e
            },
            base(){   let base = player.G.Gsr.add(10).log(10).pow(0.45).mul(3)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let exp=n(1)
                let ef = this.base().pow(x.add(this.extra()).pow(exp)).max(1)
                if(upg('G',143))  ef=ef.mul(2)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "GsR gain base x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return (mil('G',30)) }
        },
        72: {
            title: "Gr2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(100).pow(x)).mul(2e15)
                if(mil('G',36)) c=n(10).pow(n(2).pow(x.pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.5)
                //if(getBuyableAmount(this.layer, this.id).gte(100)) e=e.add(0.05)
                //if(gba(this.layer, this.id).gte(600)) e=e.add(0.02)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)//0.49
                if(upg('H',44)) e=e.sub(0.02)
                return e
            },
            bulk(){
                let t=n(0)
                if(mil('G',36)&&player.H.auto9)   t=t.max(player[this.layer].Gsr.max(1).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil())
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gsr.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(1.01)
                b=b.add(buyableEffect('H',83)[0])
                return b},
            efxp(){let e=n(0.5)
                if(upg('G',144)) e=e.add(0.02)
                if(mil('H',8)) e=e.add(0.03)
                if(upg('G',153)) e=e.add(0.025)
                return e},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = this.base().pow(x.pow(this.efxp()))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "div h1/y1 exp by "+ format(this.base(),4) + "^x^"+format(this.efxp())+"  \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: /" + format(this.effect(),4)},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return (mil('G',30)) }
        },
        73: {
            title: "Gr3", 
            cost(x) { 
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(10).pow(x)).mul(1e22)
                if(x.gte(100)||n(challengeCompletions('I',22)).gte(1)) c=n(10).pow(n(2).pow(x.sub(5).pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.4)
                if(getBuyableAmount(this.layer, this.id).gte(100)) e=e.add(0.05)
                if(upg('H',43)) e=e.sub(0.01)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)
                if(player[this.layer].Gsr.gte('1e1284')) e=e.mul(0.98)
                return e
            },
            bulk(){
                let tar=n(0)
                if(upg('G',152)&&player.H.auto7)   tar=player[this.layer].Gsr.add(10).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(getBuyableAmount(this.layer, this.id)).add(4).ceil().max(1)
                let c = this.cost(getBuyableAmount(this.layer, this.id).add(tar))
                if (player[this.layer].Gsr.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(tar)
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let e=n(1.5)
                if(player[this.layer].Gsr.gte('5e1432')) e=e.add(0.25)
                let b = player.G.Gsr.add(10).log(10).add(10).log(10).pow(e).div(10).add(0.1)
                b=b.add(buyableEffect('G',74)[1])
                return b},
            effect(x) { 
                let exp=n(0.9)
                let ef = this.base().mul(x.pow(exp))
                return ef},
            display() { 
                return "GsR gain exp +"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return (mil('G',30)) }
        },
        74: {
            title: "Gr4", 
            cost(x) {
                let c = n(10).pow(n(2).pow(x.pow(this.sc()))).mul(n(1000).pow(x)).mul('1e412')
                //if(x.gte(100)) c = n(10).pow(n(2).pow(x.sub(5).pow(this.sc())))
                if(mil('G',36)) c=n(10).pow(n(2).pow(x.pow(this.sc())))
                return c
            },
            sc(){
                let e=n(0.4)
                if(getBuyableAmount(this.layer, this.id).gte(25)) e=e.add(0.05)
                if(player[this.layer].Gsr.gte('1e1164')) e=e.mul(0.99)
                return e
            },
            bulk(){
                let t=n(0)
                if(mil('G',36)&&player.H.auto9)   t=t.max(player[this.layer].Gsr.max(1).log(10).max(1).log(2).pow(this.sc().pow(-1)).sub(gba(this.layer, this.id)).sub(1).ceil())
                let c = this.cost(gba(this.layer, this.id).add(t))
                if (player[this.layer].Gsr.gte(c)) player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(t)
            },
            canAfford() { return player[this.layer].Gsr.gte(this.cost()) },
            buy() { if(!mil('I',3)) player[this.layer].Gsr = player[this.layer].Gsr.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let b = n(0.02)
                return b},
            base2(){   let b = n(0.01)
                return b},
            effect(x) {
                let exp=[n(0.85),n(0.9)]
                //if(upg('H',45)) exp[1]=n(1)
                let ef = this.base().mul(x.pow(exp[0]))
                let ef2 = this.base2().mul(x.pow(exp[1]))
                return [ef,ef2]},
            display() {
                return "GsR eff exp +"+ format(this.base()) + " and r3 base +"+ format(this.base2()) + " \n\
                Cost: " + format(this.cost()) + " GsR \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: eff +" + format(this.effect()[0],3)+",r3 +"+ format(this.effect()[1],3)},
            style() {if (this.canAfford()) return {'background-color': '#6DA462'}},
            unlocked() { return player.H.dhmax[1].gte(1) }
        },
        81: {
            title: "Gsb13", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(10)
        if(hasUpgrade("G",124))bas = n(4)
                let e=n(1.5)
                let cost = Decimal.pow(bas, x.pow(e)).times(player.G.Gsetot.gte('1e24000')?1:100)
                if (hasUpgrade('G',163))  cost=cost.pow(upgradeEffect('G',65))
                return cost
            },
            canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gsq = player[this.layer].Gsq.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',161))  e=e.add(getBuyableAmount('G',82))
        if (hasUpgrade('G',161)) e=e.add(layers.G.buyables[82].extra())
                e=e.add(getBuyableAmount('G',91))
                e=e.add(layers.G.buyables[91].extra())

                return e
            },
            base(){   let base = player.G.Gsq.add(10).log(10)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.add(this.extra())).max(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gsq gain x"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsq \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#00FF00' }},
            unlocked() { return (hasUpgrade('G',115)) && hasMilestone('Z',33)}
        },
        82: {
            title: "Gsb14", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(4)
                let e=n(2)
                let cost = Decimal.pow(bas, x.pow(e)).times(player.G.Gsetot.gte('1e24000')?1:1e10)
                return cost
            },
            canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gsq = player[this.layer].Gsq.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                if (hasUpgrade('G',165))  e=e.add(getBuyableAmount('G',83))
        if (hasUpgrade('G',165)) e=e.add(layers.G.buyables[83].extra())
                e=e.add(getBuyableAmount('G',92))
                e=e.add(layers.G.buyables[92].extra())

                return e
            },
            base(){   let base = player.G.Gsq.add(10).log(10).cbrt().div(20)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.mul(this.base(),x.add(this.extra())).add(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gsq gain base +^"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsq \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#00FF00' }},
            unlocked() { return (hasUpgrade('G',115)) && hasMilestone('Z',33)}
        },
        83: {
            title: "Gsb15", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(4)
                let e=n(3)
                let cost = Decimal.pow(bas, x.pow(e)).times(player.G.Gsetot.gte('1e24000')?1:1e14)
                return cost
            },
            canAfford() { return player[this.layer].Gsq.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gsq = player[this.layer].Gsq.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)

                e=e.add(getBuyableAmount('G',93))
                e=e.add(layers.G.buyables[93].extra())

                return e
            },
            base(){   let base = n(0.1)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.mul(this.base(),x.add(this.extra())).add(1).min(this.hardcap())
                return ef},
               hardcap(){
                   let h=n(2.226);
                   if(gcs('G',103))h=h.add(0.01);
                    if(gcs('G',131))h=h.add(0.178);
                   return h;
               },
            display() { // Everything else displayed in the buyable button after the title
                return "Gsq effect +^"+ format(this.base()) + "  \n\
                Cost: " + format(this.cost()) + " Gsq \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect(),3) + "(hardcap: "+format(this.hardcap(),3)+")"},
            style() {if (this.canAfford()) return {'background-color': '#00FF00' }},
            unlocked() { return (hasUpgrade('G',115)) && hasMilestone('Z',33)}
        },
        91: {
            title: "Gsb16", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(10)
                let e=n(1.5)
                let cost = Decimal.pow(bas, x.pow(e)).times(100)
                if (hasUpgrade('G',183))  cost=cost.pow(upgradeEffect('G',65))
                return cost
            },
            canAfford() { return player[this.layer].Gsg.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gsg = player[this.layer].Gsg.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                e=e.add(getBuyableAmount('G',92))
                e=e.add(layers.G.buyables[92].extra())
                return e
            },
            base(){   let base = player.G.Gsg.add(10).log(10)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.add(this.extra())).max(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gsg gain x"+ format(this.base()) + " and add 1 to Gsb13 level  \n\
                Cost: " + format(this.cost()) + " Gsg \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: x" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#FFFF00' }},
            unlocked() { return (hasUpgrade('G',175)) && hasMilestone('Z',35)}
        },
        92: {
            title: "Gsb17", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(4)
                let e=n(2)
                let cost = Decimal.pow(bas, x.pow(e)).times(1e4)
                return cost
            },
            canAfford() { return player[this.layer].Gsg.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gsg = player[this.layer].Gsg.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                e=e.add(getBuyableAmount('G',93))
                e=e.add(layers.G.buyables[93].extra())
                return e
            },
            base(){   let base = player.G.Gsg.add(10).log(10).cbrt().div(20)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.mul(this.base(),x.add(this.extra())).add(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "Gsg gain base +^"+ format(this.base()) + " and add 1 to Gsb14 and Gsb16 level \n\
                Cost: " + format(this.cost()) + " Gsg \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect())},
            style() {if (this.canAfford()) return {'background-color': '#FFFF00' }},
            unlocked() { return (hasUpgrade('G',175)) && hasMilestone('Z',35)}
        },
        93: {
            title: "Gsb18", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let bas=n(1e5)
                let e=n(3)
                let cost = Decimal.pow(bas, x.pow(e)).times(1e48)
                return cost
            },
            canAfford() { return player[this.layer].Gsg.gte(this.cost()) },
            buy() { if(!mil('G',27)) {player[this.layer].Gsg = player[this.layer].Gsg.sub(this.cost())}
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            extra(){
                let e=n(0)
                return e
            },
            base(){   let base = n(0.1)
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.mul(this.base(),x.add(this.extra())).add(1).min(this.hardcap())
                return ef},
               hardcap(){
                   let h=n(3);
                   return h;
               },
            display() { // Everything else displayed in the buyable button after the title
                return "Gsg effect +^"+ format(this.base()) + "  and add 1 to Gsb15 and Gsb17 level \n\
                Cost: " + format(this.cost()) + " Gsg \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" + "+ format(this.extra())+" \n\
                Effect: ^" + format(this.effect(),3) + "(hardcap: "+format(this.hardcap(),3)+")"},
            style() {if (this.canAfford()) return {'background-color': '#FFFF00' }},
            unlocked() { return (hasUpgrade('G',175)) && hasMilestone('Z',35)}
        },

    },
    challenges:{
        11: {//1x1,31,1x2,32,33,1x3,34,1x4,35,1x5,c2
            name: "Gc1",
            completionLimit: 5,
            challengeDescription: function() {
                return "F1 prod ^0.9. <br> Completion: " +challengeCompletions("G", 11) + "/5"},
            unlocked() { return (hasMilestone("G", 2))},
            goal(){
                let a=[n(player.Z.points.gte(21)?'e720':'e780'),n('e880'),n('e1080'),n('e1220'),n('e1670'),n('e1670')]
                return a[n(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            //currencyInternalName: "F1",
            rewardDescription: "Fd8 mult all dims.<br>unlock Gc1p at 3 comp.",
            rewardEffect() {
                if(player.Z.points.gte(19))return getBuyableAmount('F',32).add(1).pow(challengeCompletions("G", 11))
                let exp = Decimal.mul(challengeCompletions("G", 11),0.3).add(0.7)
                let ef = Decimal.pow(getBuyableAmount('F',32),exp).max(1)
                if (challengeCompletions("G", 11) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect())},
        },
        12: {
            name: "Gc2",
            completionLimit: 5,
            challengeDescription: function() {
                return "dim mult per buy ^0.5. <br> Completion: " +challengeCompletions("G", 12) + "/5"},
            unlocked() { return (hasUpgrade("F", 75))},
            goal(){
                let a=[n(player.Z.points.gte(19)?'e1340':'e1740'),n('e2250'),n('e3050'),n('e5888'),n('e8300'),n('e8300')]//7000
                return a[n(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "tickspeed is stronger.<br>unlock Gc2p at 3 comp.",
            rewardEffect() {
                let ef = Decimal.mul(challengeCompletions("G", 12),0.025).add(1)
                if(player.Z.points.gte(25))ef = Decimal.mul(challengeCompletions("G", 12),0.04).add(1)
                if(hasUpgrade('G',45)) ef=Decimal.pow(ef,2)
                if (challengeCompletions("G", 12) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect(),3)},
        },
        21: {
            name: "Gc3",
            completionLimit: 5,
            challengeDescription: function() {
                return "Fds are expensive. <br> Completion: " +challengeCompletions("G", 21) + "/5"},
            unlocked() { return (hasMilestone("G",5))},
            goal(){
                let a=[n('e3.5e4'),n('e4.46e4'),n('e1.83e5'),n('e1.2e8'),n('e2.4e8'),n('e2.4e8')]
                return a[n(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "Gc3 comp add to dim mult per buy.<br>unlock Gc3p at 3 comp.",
            rewardEffect() {
                let b=n(0.06)
                if(hasUpgrade('G',45)) b=Decimal.add(b,0.04)
                let ef = Decimal.mul(challengeCompletions("G", 21),b)
                if (challengeCompletions("G", 21) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect(),3)},
        },
        22: {
            name: "Gc4",
            completionLimit: 5,
            challengeDescription: function() {
                return "Tickspeed is disabled. <br> Completion: " +challengeCompletions("G", 22) + "/5"},
            unlocked() { return (hasMilestone("G",7))},
            goal(){
                // if (challengeCompletions("G", 22) == 0) return n('e6.45e8');      //improved at v0.7.1
                // if (challengeCompletions("G", 22) == 1) return n('e9.72e8');
                // if (challengeCompletions("G", 22) == 2) return n('e2.35e9');
                // if (challengeCompletions("G", 22) == 3) return n('e3.02e9');
                // if (challengeCompletions("G", 22) == 4) return n('e1.93e10');
                let a=[n(player.Z.points.gte(22)?'e7.75e7':'e3.73e8'),n('e9.72e8'),n('e2.35e9'),n('e3.02e9'),n('e1.93e10'),n('e1.93e10')]
                return a[n(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' F1'},
            canComplete(){return player.F.F1.gte(this.goal())},
            rewardDescription: "Gc4 comp multiply F dim buy mult based on tickboost.<br>unlock Gc4p at 3 comp,edit Gc3p and Gc4p formula at 4 and 5 comp.",
            rewardEffect() {
                let ef = player.F.buyables[102].mul(challengeCompletions("G", 22)).div(player.Z.points.gte(22)?5000:50000).add(1)
                if (challengeCompletions("G", 22) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect(),3)},
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