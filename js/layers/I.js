addLayer("I", {
    name: "I", 
    symbol: "I", 
    position: 0, 
    startData() { return {
        unlocked:false,
        points:n(0),
        qolpoints:n(0),
        time:n(0),
        resetamt:n(0),
        m:[n('1e308'),n(0)],//min and max
        mpr:n(1),
        chalbest:[n('1e308'),n('1e308'),n('1e308'),n('1e308')],
        res:[n(0),n(0),n(0),n(0)],
        hi:n(0),
        si:n(0),
    }},
    passiveGeneration(){    let p=0
        return p},
    color: "#4F4F4F",
    requires: n('100'), 
    resource: "I", 
    baseResource: "slog pts",// points
    baseAmount() {let k=player.points //
        k=k.max(10).slog()
        return k},
    type: "normal", //custom    //edited at v0.7.1,but failed
    exponent: n(0.75), 
    // getResetGain(){
    //     let k=player.points
    //     //k=k.max(10).slog().div(100).max(1).pow(1.25).div(4).add(0.75).ceil()
    //     k=k.max(10).slog().div(100).max(1).pow(0.75).ceil()
    //     return k
    // },
    // getNextAt() {
    //     let t=tmp.I.getResetGain.add(1).max(1)
    //     let a=n(10).tetrate(t.pow(4/3).mul(100))
    //     return a
    // },
    // prestigeButtonText() {
    //     let s='Reset for '+format(tmp.I.getResetGain)+' I<br>'
    //     s=s+'next at '+format(tmp.I.getNextAt)+'<br>'
    //     s=s+format(tmp.I.getResetGain.div(player.I.time.max(0.01)))+' I/s'
    //     return s
    // },
    // canReset() {return true},//player.points.gte('10^^100')
    gainExp() {return n(1)},
    row: 4, 
    hotkeys: [
        {key: "i", description: "I: Reset for I points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return ((upg('G',155))||player[this.layer].unlocked)},
    gainMult() { 
        let m=n(1)
        if(mil('J',2)) m=m.mul(1.5)
        m=m.mul(buyableEffect('I',41))
        return m
    },
    branches: ['F'],
    milestones: {
        0: {requirementDescription: "1 total I (1",
            done() {return player[this.layer].total.gte(1)}, 
            effectDescription: "5x A-E,^1.01 points,x1e10 and ^1.05 F1,x5 and ^1.1 G,x100 Gs/i/e,x10 Gs eff,x1.1 GG,^1.1 harsh/hyper,keep GG tree,G passive and 'all dHs' qol,x10 GsR,remove ee2000 Gse nerf.",
        },
        1: {requirementDescription: "2 total I (2",
            done() {return player[this.layer].total.gte(2)}, 
            effectDescription: "keep all passive(and H resets nothing),^1.02 points,x1e10 F1,auto gain dH.",
            toggles: [ ['I',"auto1"] ]
        },
        2: {requirementDescription: "3 total I (3",
            done() {return player[this.layer].total.gte(3)}, 
            effectDescription: "^1.005 Gs eff,unlock a qol layer.",
        },
        3: {requirementDescription: "5 total I (4",
            done() {return player[this.layer].total.gte(5)}, 
            effectDescription: "unlock buyables.GsR babs cost nothing.",
        },
        4: {requirementDescription: "7 total I (5",
            done() {return player[this.layer].total.gte(7)}, 
            effectDescription: "unlock speedrun.",
        },
        5: {requirementDescription: "1200s best reset time (6",
            done() {return (!player.I.m[0].gte(1200))}, 
            effectDescription: "ee12 Gse nerf +0.03 at start,unlock more Qol.",
        },
        6: {requirementDescription: "11 total I (7",
            done() {return player[this.layer].total.gte(11)}, 
            effectDescription: "Ib2 cost nothing,unlock next row of babs.",
        },
        7: {requirementDescription: "10 speedrun completions (8",
            done() {return (tmp.I.comp.gte(10))}, 
            effectDescription: "unlock next 2 speedrun chal.",
        },
        8: {requirementDescription: "400s best reset time (9",
            done() {return (!player.I.m[0].gte(400))}, 
            effectDescription: "boost Ibs eff,harsh slog +0.002,keep H11.",
        },
        9: {requirementDescription: "25 speedrun completions (10",
            done() {return (tmp.I.comp.gte(25))}, 
            effectDescription: "unlock more Qol and babs,Ib3 cost nothing,H req exp cap -1000.",
        },
        10: {requirementDescription: "180s best reset time (11",
            done() {return (!player.I.m[0].gte(180))}, 
            effectDescription: function(){
                let s="fastest reset boost QP gain,set G to eee500 at eee7.<br>currently:"+format(tmp.I.m10ef,3)+'x'
                if(!player.I.m[0].gte(1)) s=s+' (capped at 1s reset time)'
                return s},
        },
        11: {requirementDescription: "60s best reset time (12",
            done() {return (!player.I.m[0].gte(60))}, 
            effectDescription: "unlock more Qol,Ib4-6 cost nothing,H req exp cap -500.",
        },
        12: {requirementDescription: "40 total I (13",
            done() {return player[this.layer].total.gte(40)}, 
            effectDescription: "edit QP formula:3^(resets)^0.9.",
        },
        13: {requirementDescription: "upgrade Ib9 effect to x0.3 (14",
            done() {return n(buyableEffect('I',33)).pow(-1).gte(10/3)}, 
            effectDescription: "unlock a layer to break infinity.",//(coming soon)
        },
        14: {requirementDescription: "90 total I (15",
            done() {return player[this.layer].total.gte(90)}, 
            effectDescription: "autobuy Ib1-9 and remove linear cost,Ib9 limit is x0.1.",
            toggles: [ ['I',"auto1"] ]
        },
        15: {requirementDescription: "get 2 I at once (16",
            done() {return player.points.max(10).slog().div(100).max(1).pow(0.75).gte(2)}, 
            effectDescription: "unlock next bp bab.",
        },
        16: {requirementDescription: "7 harden I (17",
            done() {return player.I.hi.gte(7)}, 
            effectDescription: "unlock slog integral,unlock next curse option and bp bab.",
        },
        17: {requirementDescription: "308 total I (18",
            done() {return player[this.layer].total.gte(308)}, 
            effectDescription: "edit bps formula.",
        },
        18: {requirementDescription: "28 harden I (19",
            done() {return player.I.hi.gte(28)}, 
            effectDescription: "unlock next curse option and next HI effect(unlock Ib10 at 34).",
        },
        19: {requirementDescription: "46 harden I (20",
            done() {return player.I.hi.gte(46)}, 
            effectDescription: "+5 options limit,^1.25 SI,unlock next bp bab.",
        },
        20: {requirementDescription: "2024 total I (21",
            done() {return player[this.layer].total.gte(2024)}, 
            effectDescription: "edit HI eff and unlock next eff.",
        },
        21: {requirementDescription: "150 harden I (22",//167
            done() {return player.I.hi.gte(150)}, 
            effectDescription: "keep all G-H milestones(except G13/H17) at I reset. Auto slog and ignore option 1 at 1F25 in the curse.",
        },
        22: {requirementDescription: "167 harden I (23",
            done() {return player.I.hi.gte(167)}, 
            effectDescription: "unlock next 3 BP bab,r1^/r2^ amt ^1.05.",
        },
        23: {requirementDescription: "1e7 total I (24",
            done() {return player[this.layer].total.gte(1e7)}, 
            effectDescription: "unlock 3 SS babs and an HI eff,nerf cop1-3.",
        },
        24: {requirementDescription: "1e10 total I (25",
            done() {return player[this.layer].total.gte(1e10)}, 
            effectDescription: "unlock 2 SS babs and an HI eff(starts at 200),nerf cop1-4,again.",
        },
        25: {requirementDescription: "233 harden I (26",
            done() {return player.I.hi.gte(233)}, 
            effectDescription: "r1^,r2^,b2b+,Gs^ is much cheaper.r^2 base +0.01,edit ss1/4,autobuy r1^,r2^,cop3 x0.7.",
            toggles: [ ['I',"auto2"] ]
        },
    },
    m10ef(){
        let exp=n(0.4)
        let ef=n(180).div(player.I.m[0].max(1)).pow(exp).mul(n(1.025).pow(n(180).sub(player.I.m[0]))).max(1)
        return ef
    },
    softcap(){return n(Infinity)},
    softcapPower(){return n(1)},
    microtabs: {
        stuff: {       
            // "Upgrades": {
            //     unlocked() {return true},
            //     content: [ "upgrades"]}, 
            "Milestones": {
                unlocked() {return true},
                content: ["milestones"]},
            "Buyables": {
                unlocked() {return (mil('I',3))},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #5FFF9B; text-shadow: 0 0 2px #c2b280'>" + format(player.I.qolpoints) + "</h3> Qol points "
                    return s}]
                ,["raw-html", () => `<h4 style="opacity:.5">give qol to speed up the resets.</h4>`],"buyables"]},
            "Speedrun": {
                unlocked() {return (mil("I",4))},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #5FFF9B; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.comp) + "</h3> completions "
                    return s}]
                    ,["raw-html", () => `<h4 style="opacity:.5">tips:start speedrun triggers an I reset.</h4>`]
                    ,["challenges",[1,2]],
                    ["display-text", function() { let s=''
                        if(shiftDown) {
                            if(!n(challengeCompletions('I',22)).gte(1)) return 'you has no Ic4 completions yet.'
                            s=s+'current Ic4 comps qol:<br>'
                            if(n(challengeCompletions('I',22)).gte(1)) s=s+"<h4 style='color: #75C56E'>comp1: ^1.25 points,keep Gr1/3 buy max eff(G72),auto Gc3-4p req is ee250.<br>" 
                            if(n(challengeCompletions('I',22)).gte(2)) s=s+"<h4 style='color: #716CCD'>comp2: x100 Gs eff,^1.25 Gse,keep upg G66-70.<br>" 
                            if(n(challengeCompletions('I',22)).gte(3)) s=s+"<h4 style='color: #D73BB0'>comp3: x1e10 harsh/hyper,keep GG r1-4,9 at start,keep H mil 19,auto Gc3-4p req is ee100.<br>" 
                            if(n(challengeCompletions('I',22)).gte(4)) s=s+"<h4 style='color: #D78903'>comp4: remove ee1500 e nerf,keep GG r10-11 at start,raise QP to 1.05.<br>" 
                            if(n(challengeCompletions('I',22)).gte(5)) s=s+"<h4 style='color: #C52C14'>comp5: x1e1000 Gs,Ib7-9 cost nothing,auto Gc3-4p req is ee40.<br>" 
                            return s}
                        }]]},
            "Curse": {
                unlocked() {return mil('J',3)},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #9B1F41; text-shadow: 0 0 2px #c2b280'>" + format(player.I.hi) + "</h3> harden I.current effect:<br>"
                    s=s+"raise QP gain by ^<h3 style='color: #9B1F41; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.hief[0],3) + "</h3><br>"
                    if(mil('I',18)) s=s+"BP formula exp +<h3 style='color: #9B1F41; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.hief[1],3) + "</h3><br>"
                    if(mil('I',20)) s=s+"SI exp +<h3 style='color: #9B1F41; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.hief[2],3) + "</h3><br>"
                    if(mil('J',12)) s=s+"BP formula exp x<h3 style='color: #9B1F41; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.hief[3],3) + "</h3><br>"
                    if(mil('I',23)) s=s+"pts slog speed x<h3 style='color: #9B1F41; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.hief[4],3) + "</h3><br>"
                    if(mil('I',24)) s=s+"BP/SS slog +<h3 style='color: #9B1F41; text-shadow: 0 0 2px #c2b280'>" + format(tmp.I.hief[5],3) + "</h3><br>"
                    s=s+"<h4>current options value:" + format(tmp.I.ressum)
                    return s}]
                    ,["display-text", function() {return " <br>1.points slog -" + format(tmp.I.resv[0])+" (level "+ format(player.I.res[0])+"/"+ format(tmp.I.reslim[0])+")(count as "+ format(tmp.I.resq[0])+") <h4>"}],["clickables",[21]]
                    ,["display-text", function() {return " <br>2.Gs slog -" + format(tmp.I.resv[1])+" (level "+ format(player.I.res[1])+"/"+ format(tmp.I.reslim[1])+")(count as "+ format(tmp.I.resq[1])+") <h4>"}],["clickables",[22]]
                    ,["display-text", function() {if(mil('I',16)) return " <br>3.Gsi/e/r slog -" + format(tmp.I.resv[2])+" (level "+ format(player.I.res[2])+"/"+ format(tmp.I.reslim[2])+")(count as "+ format(tmp.I.resq[2])+") <h4>"}],["clickables",[23]]
                    ,["display-text", function() {if(mil('I',18)) return " <br>4.dH effective count ^" + format(tmp.I.resv[3])+" (level "+ format(player.I.res[3])+"/"+ format(tmp.I.reslim[3])+")(count as "+ format(tmp.I.resq[3])+") <h4>"}],["clickables",[24]]
                    ,["clickables",[31]]],},
            "Qol Tree": {
                unlocked() {return mil('I',2)},
                content: [["display-text", function() { 
                    let s="You have <h3 style='color: #5FFF9B; text-shadow: 0 0 2px #c2b280'>" + format(player.I.qolpoints) + "</h3> Qol points "+ "<h4>" + format(tmp.I.qb) + " Qol points/s <h4>"
                    s=s+"<br><h4>QP gain formula(without boosts):4^(total I)^0.85"
                    // s=s+"<br><h4 style='color: #C52C14'>QP prod is halted after 1e4 sec reset time."
                    // if(player.I.time.gte(1e4)) s=s+"<br><h4 style='color: #C52C14'>QP prod is currently halted."
                    return s}]
                ,["clickables",[1,2,3,4,5,6,7,8,10,11,12,13]]]},
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", function(){
            let tot='total I:'+format(player.I.total)+'<br>You have reset '+format(player.I.resetamt)+' times<br>'//you get '+format(player.I.mpr)+' I in a reset at best<br>'
            let t='Current reset time:'+format(player.I.time)+'s<br>'
            let m='Fastest:'+format(player.I.m[0])+'s   Longest:'+format(player.I.m[1])+'s<br>'
            let s=tot+t+m
            if(mil('I',16)) s=s+'You have ' + format(player.I.si) + ' slog integral (based on pts on each reset)(+'+ format(tmp.I.sig) + '/s)'//tmp.I.sig
            return s
        }],
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    onPrestige(){        
        //player.I.si=player.I.si.add(tmp.I.sig)
        player.I.m[0]=player.I.m[0].min(player.I.time)
        player.I.m[1]=player.I.m[1].max(player.I.time)
        player.I.time=n(0)
        player.I.resetamt=player.I.resetamt.add(1)
        //mpr=mpr.max(player.points.max(10).slog().div(100).max(1).pow(0.75).ceil())
    },
    sig(){
        let ef=n(0)
        let e=n(1)
        if(mil('I',19)) e=e.add(0.25)
        if(mil('I',20)) e=e.add(tmp.I.hief[2])
        if(mil('J',6)) e=e.add(buyableEffect('J',25))
        ef=player.points.max(10).slog().pow(e)
        return ef
    },
    // doReset(layer){
    // },
    clickables:{
        11: {
            title(){return "kp1"},
            display(){return "keep A-D milestones<br>need:"+format(this.cost())+" QP"},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            cost(){return n(200)},//120
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
        },
        12: {
            title(){return "kp2"},
            display(){return "keep A-E challenges<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:11'},
            cost(){return n(500)},//400
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',11)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["11"]},
        },
        13: {
            title(){return "kp3"},
            display(){return "keep F chals and A-B upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:12'},
            cost(){return n(2e3)},//400
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',12)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["12"]},
        },
        14: {
            title(){return "kp4"},
            display(){return "keep C-E upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:13'},
            cost(){return n(5e3)},//4500
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',13)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["13"]},
        },
        15: {
            title(){return "kp5"},
            display(){return "keep E mil,F mil 12-17 and G mil 1-2<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:14'},
            cost(){return n(3e4)},//1e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',14)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["14"]},
        },
        16: {
            title(){return "kp9"},
            display(){return "keep G mil 28,29,38<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:15'},
            cost(){return n(3e7)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',15)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["15"]},
        },
        26: {
            title(){return "kp11"},
            display(){return "keep H mil 14,15<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:16'},
            cost(){return n(8e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',16)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["16"]},
        },
        21: {
            title(){return "kp8"},
            display(){return "keep some buy max effect<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:22,15'},
            cost(){return n(7.5e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',22)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["22"]},
        },
        22: {
            title(){return "kp6"},
            display(){return "keep G mil 3-7<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:12,15'},
            cost(){return n(6e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',12)&&gcs('I',15)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["13"]},
        },
        23: {
            title(){return "kp7"},
            display(){return "keep G mil 18<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:13,15'},
            cost(){return n(2.5e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',13)&&gcs('I',15)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["13"]},
        },
        24: {
            title(){return "kp13"},
            display(){return "keep G mil 1-13,34,37<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:23'},
            cost(){return n(3e10)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',23)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["23"]},
        },
        31: {
            title(){return "bF1"},
            display(){return "F1 ^1.12<br>need:"+format(this.cost())+" QP"},
            cost(){return n(200)},//120
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
        },
        32: {
            title(){return "bF2"},
            display(){return "F gain exp +0.2<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:31'},
            cost(){return n(600)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',31)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["31"]},
        },
        33: {
            title(){return "bF3"},
            display(){return "F dim mult per buy x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:32'},
            cost(){return n(4000)},//2000
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',32)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["32"]},
        },
        34: {
            title(){return "bF4"},
            display(){return "TB power +0.001<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:33'},
            cost(){return n(2e4)},//1e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',33)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["33"]},
        },
        25: {
            title(){return "bF6"},
            display(){return "TB scaling mul is 1.9<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:34'},
            cost(){return n(1e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',34)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["34"]},
        },
        36: {
            title(){return "kp10"},
            display(){return "keep all F mil and upg F31-40<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:35'},
            cost(){return n(1e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',35)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["35"]},
        },
        46: {
            title(){return "kp12"},
            display(){return "keep Gc comp<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:36'},
            cost(){return n(5e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',36)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["36"]},
        },
        56: {
            title(){return "kp13"},
            display(){return "keep G mil 19-27,H mil 6-9<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:46'},
            cost(){return n(1e12)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',46)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["46"]},
        },
        66: {
            title(){return "kp14"},
            display(){return "keep G mil 30,36,H mil 10,11,16<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:56'},
            cost(){return n(1e13)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',56)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["56"]},
        },
        76: {
            title(){return "kp15"},
            display(){return "keep all GG upg<br>(need to click respec)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:66'},
            cost(){return n(5e17)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',66)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ["66"]},
        },
        86: {
            title(){return "kp16"},
            display(){return "keep G26-30,G64-65,H1-19<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:76'},
            cost(){return n(3e18)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#B45958":layers[this.layer].clickables[this.id].canClick()?"#FF2400":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',76)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ["76"]},
        },
        35: {
            title(){return "bF5"},
            display(){return "F passive is 100%<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:34'},
            cost(){return n(1e5)},//4e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#85914F":layers[this.layer].clickables[this.id].canClick()?"#999933":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',34)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["34"]},
        },
        41: {
            title(){return "bG1"},
            display(){return "G gain exp +0.03<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:31'},
            cost(){return n(1e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',31)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["31"]},
        },
        42: {
            title(){return "bG2"},
            display(){return "Gc1-2's power exp +0.01<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:41'},
            cost(){return n(3e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',41)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["41"]},
        },
        43: {
            title(){return "bG3"},
            display(){return "F31-40 no longer req the G chal<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(1e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',42)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["42"]},
        },
        44: {
            title(){return "bG4"},
            display(){return "set G to eee500 at eee10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:43'},
            cost(){return n(2e4)},//4e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',43)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["43"]},
        },
        45: {
            title(){return "bG5"},
            display(){return "Gc3-4p exp +0.05 at ee16 G<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:44'},
            cost(){return n(4e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',44)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["44"]},
        },
        55: {
            title(){return "bG6"},
            display(){return "Gc3-4p exp +0.03<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:45'},
            cost(){return n(5e10)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',45)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["45"]},
        },
        65: {
            title(){return "bG7"},
            display(){return "auto Gc1-2p instantly<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:55'},
            cost(){return n(3e12)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#987F26":layers[this.layer].clickables[this.id].canClick()?"#996600":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',55)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["55"]},
        },
        51: {
            title(){return "bGs1"},
            display(){return "Gs eff ^1.005<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(1e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',42)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["42"]},
        },
        52: {
            title(){return "bGs2"},
            display(){return "gain an additional sb6<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:51'},
            cost(){return n(2e4)},//4e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',51)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["51"]},
        },
        53: {
            title(){return "bGs3"},
            display(){return "Gse ^1.05<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:52'},
            cost(){return n(1.5e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',52)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["52"]},
        },
        54: {
            title(){return "bGs7"},
            display(){return "GG x1.1,Gs eff x10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:53'},
            cost(){return n(8e9)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',53)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["53"]},
        },
        64: {
            title(){return "bGs8"},
            display(){return "Gs x1e4,dilate Gse to 1.025<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:54'},
            cost(){return n(1e11)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',54)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["54"]},
        },
        63: {
            title(){return "bGs4"},
            display(){return "GG x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:53'},
            cost(){return n(3e5)},//2e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',53)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["53"]},
        },
        62: {
            title(){return "bGs5"},
            display(){return "keep Gt6/7/13 with G mil 23<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:53'},
            cost(){return n(3e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',53)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["53"]},
        },
        61: {
            title(){return "bGs6"},
            display(){return "GG x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:62'},
            cost(){return n(1.2e7)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#60E5B4":layers[this.layer].clickables[this.id].canClick()?"#60E5B4":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',62)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["62"]},
        },
        71: {
            title(){return "bH1"},
            display(){return "harsh/hyper x10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:51'},
            cost(){return n(5e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',51)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["51"]},
        },
        72: {
            title(){return "bH2"},
            display(){return "hyper eff mul x2<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:71'},
            cost(){return n(1e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',71)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["71"]},
        },
        73: {
            title(){return "bH7"},
            display(){return "remove 6000 dH2 sc,nerf dH1-2 sc<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:72'},
            cost(){return n(1e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',72)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ["72"]},
        },
        74: {
            title(){return "bH9"},
            display(){return "h3/y3 base x1.1<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:73'},
            cost(){return n(4e15)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',73)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ["73"]},
        },
        83: {
            title(){return "bH8"},
            display(){return "ee12 nerf exp +0.02<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:73'},
            cost(){return n(2e10)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',72)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',9)},
            branches(){return ["73"]},
        },
        101: {
            title(){return "au1"},
            display(){return "autobuy F upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(1e5)},//5e4
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            //branches(){return ["42"]},&&gcs('I',42)
        },
        102: {
            title(){return "au2"},
            display(){return "autobuy G upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(5e5)},//2e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',101)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["101"]},
        },
        103: {
            title(){return "au3"},
            display(){return "autobuy H upgs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(3e6)},//3e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',102)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["102"]},
        },
        104: {
            title(){return "au7"},
            display(){return "autobuy sb10,Hb8,y5<br>need:"+format(this.cost())+" QP"},
            //tooltip(){return 'req:42'},&&gcs('I',102)
            cost(){return n(8e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            //branches(){return ["102"]},
        },
        114: {
            title(){return "au8"},
            display(){return "autobuy dHp3-4<br>need:"+format(this.cost())+" QP"},
            //tooltip(){return 'req:42'},&&gcs('I',102)
            cost(){return n(1e6)},//5e5
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["104"]},
        },
        105: {
            title(){return "au9"},
            display(){return "buy max Bbs<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:42'},
            cost(){return n(2e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',104)&&gcs('I',114)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ['104','114']},
        },
        115: {
            title(){return "au10"},
            display(){return "buy max sb9,11,12,<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:105'},
            cost(){return n(2e8)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',105)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ['105']},
        },
        124: {
            title(){return "au11"},
            display(){return "pts slog +0.3 per tick after 1F10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:105'},
            cost(){return n(1e16)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',115)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ['115']},
        },
        125: {
            title(){return "au12"},
            display(){return "pts slog +0.5 per tick after 1F10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:124'},
            cost(){return n(3e17)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',124)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ['124']},
        },
        135: {
            title(){return "au13"},
            display(){return "pts slog +1 per tick after 1F10<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:125'},
            cost(){return n(1e21)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',125)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',11)},
            branches(){return ['125']},
        },
        111: {
            title(){return "au4"},
            display(){return "bulk H req -2000(3000)<br>need:"+format(this.cost())+" QP"},
            //tooltip(){return 'req:42'},
            cost(){return n(2e3)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            //branches(){return ["102"]},&&gcs('I',102)
        },
        121: {
            title(){return "bH3"},
            display(){return "H req exp cap -500(4500)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:111'},
            cost(){return n(1e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',111)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["111"]},
        },
        112: {
            title(){return "au5"},
            display(){return "bulk H req -1000(2000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:111'},
            cost(){return n(1e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',111)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["111"]},
        },
        122: {
            title(){return "bH4"},
            display(){return "H req exp cap -500(4000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:121,112'},
            cost(){return n(4e5)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',112)&&gcs('I',121)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ['121','112']},
        },
        113: {
            title(){return "au6"},
            display(){return "bulk H req -500(1500)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:112'},
            cost(){return n(5e4)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#BDDCCC":layers[this.layer].clickables[this.id].canClick()?"#CCCCCC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',112)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ["112"]},
        },
        123: {
            title(){return "bH5"},
            display(){return "H req exp cap -1000(3000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:122,113'},
            cost(){return n(4e6)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',113)&&gcs('I',122)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',2)},
            branches(){return ['122','113']},
        },
        132: {
            title(){return "bH6"},
            display(){return "H req exp cap -500(2500),bulk req -500(1000)<br>need:"+format(this.cost())+" QP"},
            tooltip(){return 'req:123'},
            cost(){return n(1e7)},
            style() { return { 'background-color': gcs(this.layer,this.id)?"#A0BCDB":layers[this.layer].clickables[this.id].canClick()?"#9999CC":"#BF8F8F"}},
            canClick() {return player.I.qolpoints.gte(this.cost())&&gcs('I',123)&&!gcs(this.layer,this.id)},
            onClick() {player.I.qolpoints=player.I.qolpoints.sub(this.cost())
                setClickableState(this.layer,this.id,1)
            },
            unlocked() {return mil('I',5)},
            branches(){return ['123']},
        },
        //curse options
        211:{
            display(){return "+1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return !player.I.res[0].gte(tmp.I.reslim[0])&&!gcs('I',311)},
            onClick() {player.I.res[0]=player.I.res[0].add(1)},
            unlocked() {return mil('J',3)},
        },
        212:{
            display(){return "-1"},//'height':'80px','width':'80px',
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return player.I.res[0].gte(1)&&!gcs('I',311)},
            onClick() {player.I.res[0]=player.I.res[0].sub(1)},
            unlocked() {return mil('J',3)},
        },
        221:{
            display(){return "+1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return !player.I.res[1].gte(tmp.I.reslim[1])&&!gcs('I',311)},
            onClick() {player.I.res[1]=player.I.res[1].add(1)},
            unlocked() {return mil('J',3)},
        },
        222:{
            display(){return "-1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return player.I.res[1].gte(1)&&!gcs('I',311)},
            onClick() {player.I.res[1]=player.I.res[1].sub(1)},
            unlocked() {return mil('J',3)},
        },
        231:{
            display(){return "+1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return !player.I.res[2].gte(tmp.I.reslim[2])&&!gcs('I',311)},
            onClick() {player.I.res[2]=player.I.res[2].add(1)},
            unlocked() {return mil('I',16)},
        },
        232:{
            display(){return "-1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return player.I.res[2].gte(1)&&!gcs('I',311)},
            onClick() {player.I.res[2]=player.I.res[2].sub(1)},
            unlocked() {return mil('I',16)},
        },
        241:{
            display(){return "+1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return !player.I.res[3].gte(tmp.I.reslim[3])&&!gcs('I',311)},
            onClick() {player.I.res[3]=player.I.res[3].add(1)},
            unlocked() {return mil('I',18)},
        },
        242:{
            display(){return "-1"},
            style() {return {'background-color': layers[this.layer].clickables[this.id].canClick()?"#9B1F41":"#BF8F8F",'width':'50px','height':'50px','min-height':'50px'}},
            canClick() {return player.I.res[3].gte(1)&&!gcs('I',311)},
            onClick() {player.I.res[3]=player.I.res[3].sub(1)},
            unlocked() {return mil('I',18)},
        },
        311:{
            display(){
                let s="<h3>Enter the Curse<br><br><h4>reach 1F100 points to complete<br>"
                if(gcs(this.layer,this.id)) {s=s+'(IN)<br>'
                    if(player.points.gte('10^^100')) s=s+'<h4>complete the curse and gain '+format(tmp.I.ressum.sub(player.I.hi).max(0))+' harden I'
                    else s=s+'<h4>quit early<br> (no rewards)'
                }
                //else s=s+
                return s},//'height':'80px','width':'80px',
            style() {return {'background-color':gcs(this.layer,this.id)?"#C52C14":"#9B1F41",'width':'160px','height':'160px'}},
            canClick() {return true},  //1 is in the curse
            onClick() {
                if(gcs(this.layer,this.id)){if(gba('J',101).gte(23)?player.G.Gsetot.gte('10^^5'):player.points.gte('10^^100')) {player.I.hi=player.I.hi.max(tmp.I.ressum)}
                    scs(this.layer,this.id,0)}
                else scs(this.layer,this.id,1) 
                doReset('I')
            },
            unlocked() {return mil('J',3)},
        },
    },
    upgrades: {//coming soon
        // 11: {
        //     title:'D1',
        //     description: function() {return '1000x points \n\
        //         '+'layer D total: \n\
        //         '+ format(this.effect()) +'x'},            
        //     cost:new Decimal(1),
        // },
    },
    automate(){
        if (player.I.auto1)  buyBuyable("I",11),buyBuyable("I",12),buyBuyable("I",13),buyBuyable("I",21),buyBuyable("I",22),buyBuyable("I",23)
            ,buyBuyable("I",31),buyBuyable("I",32),buyBuyable("I",33)
    },
    buyables:{
        11: {
            title: "Ib1", 
            cost(x) { 
                let c = n(2).pow(x)
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(2).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t) 
            },//if(player[this.layer].qolpoints.gte(c))
            base(){   
                let b=n(1.04)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let e=n(1)
                //e=e.mul(buyableEffect('J',22))
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "QP x"+ format(this.base()) + "(dont spend) \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return mil('I',3) }
        },
        12: {
            title: "Ib2", 
            cost(x) { 
                let c=n(2).pow(x).mul(100)
                if(mil('I',14)) c=n(2).pow(x)
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() { if(!mil('I',6)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(2).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t) 
            },
            base(){   
                let b=n(1.01)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let e=n(1)
                e=e.mul(buyableEffect('J',22))
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "points ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',3) }
        },
        13: {
            title: "Ib3", 
            cost(x) { 
                let c = n(3).pow(x).mul(100)
                if(mil('I',14)) c=n(3).pow(x)
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',9)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(3).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t)   
                },
            base(){   
                let b=n(1.01)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) 
                let e=n(1)
                e=e.mul(buyableEffect('J',22))
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "F1 ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',3) }
        },
        21: {
            title: "Ib4", 
            cost(x) { 
                let c = n(5).pow(x).mul(1e3)
                if(mil('I',14)) c=n(5).pow(x)
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',11)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(5).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t) 
                },
            base(){   
                let b=n(0.005)
                if(mil('I',8)) b=b.add(0.001)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().mul(x)
                return ef},
            display() { 
                return "Gc3-4p gain exp +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect(),3)},
            unlocked() { return mil('I',6) }
        },
        22: {
            title: "Ib5", 
            cost(x) { 
                let cost = n(4).pow(x).mul(1e3)
                if(mil('I',14)) c=n(4).pow(x)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',11)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(4).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t)  
                },
            base(){   
                let b=n(1.05)
                if(mil('I',8)) b=b.add(0.03)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let e=n(1)
                e=e.mul(buyableEffect('J',23))
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "Gse gain ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',6) }
        },
        23: {
            title: "Ib6", 
            cost(x) { 
                let c = n(3).pow(x).mul(1e3)
                if(mil('I',14)) c=n(3).pow(x)
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!mil('I',11)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(3).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t)    
                },
            base(){   
                let b=n(1.02)
                if(mil('I',8)) b=b.add(0.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let e=n(1)
                e=e.mul(buyableEffect('J',23))
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "dH base to dHp x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',6) }
        },
        31: {
            title: "Ib7", 
            cost(x) { 
                let c = n(6).pow(x).mul(1e6)
                if(mil('I',14)) c=n(6).pow(x)
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!n(challengeCompletions('I',22)).gte(5)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(6).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t)     
                },
            base(){   
                let b=n(0.0005)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef = this.base().mul(x)
                return ef},
            display() { 
                return "hy3 base +"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: +" + format(this.effect(),4)},
            unlocked() { return mil('I',9) }
        },
        32: {
            title: "Ib8", 
            cost(x) { 
                let c = n(3).pow(x).mul(1e7)
                if(mil('I',14)) c=n(3).pow(x)
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!n(challengeCompletions('I',22)).gte(5)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(3).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t)     
                },
            base(){   
                let b=n(1.01)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let e=n(1)
                e=e.mul(buyableEffect('J',23))
                let ef=this.base().pow(x.pow(e))
                return ef},
            display() { 
                return "GsR gain ^"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: ^" + format(this.effect(),3)},
            unlocked() { return mil('I',9) }
        },
        33: {
            title: "Ib9", 
            cost(x) { 
                let cost = n(4).pow(x).mul(1e7)
                if(mil('I',14)) c=n(4).pow(x)
                return cost
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {if(!n(challengeCompletions('I',22)).gte(5)) player[this.layer].qolpoints = player[this.layer].qolpoints.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            bulk(){
                let t=player[this.layer].qolpoints.max(1).log(4).sub(1).ceil().max(gba(this.layer,this.id))
                let c=this.cost(t)
                if(player[this.layer].auto1) setBuyableAmount(this.layer,this.id,t)      
                },
            base(){   
                let b=n(0.96)
                return b},
            hardcap(){let max=n(0.3)
                if(mil('I',14)) max=n(0.1)
                return max    
            },
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef=this.base().pow(x).max(this.hardcap())
                return ef},
            display() { 
                return "bulk H req x"+ format(this.base()) + "(capped at "+ format(this.hardcap()) + ") \n\
                Cost: " + format(this.cost()) + " QP \n\
                Amount: " + format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect(),3)},
            unlocked() { return mil('I',9) }
        },
        41: {
            title: function(){
                let s=''
                if(gba(this.layer,this.id).gte(80)) s='sc '
                if(gba(this.layer,this.id).gte(100)) s='sc2 '
                if(gba(this.layer,this.id).gte(180)) s='sc3 '
                if(gba(this.layer,this.id).gte(320)) s='sc4 '
                s=s+'Ib10'
                return s
            },  
            cost(x) { 
                let c=n(10).pow(x.add(40).pow(3).div(160))
                if(x.gte(80)) c=n(10).pow(n(10).pow(x.sub(30).pow(0.33)).mul(3))
                if(x.gte(100)) c=n(10).pow(n(10).pow(x.sub(70).pow(0.45)))
                if(x.gte(180)) c=n(10).pow(n(10).pow(x.sub(10).pow(0.55).div(2)))
                if(x.gte(320)) c=n(10).pow(n(10).pow(x.pow(0.83).div(10)))
                return c
            },
            canAfford() { return player[this.layer].qolpoints.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            // bulk(){let t=n(0)
            //     let c=n(0)
            //     if(player[this.layer].auto2&&(upg('H',81))) {
            //         t=player[this.layer].harsh.max(1).log(10).max(1).log(10).add(1).pow(this.sc().pow(-1)).sub(1).ceil().max(getBuyableAmount(this.layer, this.id))
            //         c = this.cost(t)
            //         if (player[this.layer].harsh.gte(c)) setBuyableAmount(this.layer,this.id,t)}    
            //     },
            base(){   
                let b=n(1.05)
                return b},
            effect(x) { //.add(this.extra()) if(!upg('G',141))
                let ef=this.base().pow(x)
                return ef},
            display() { 
                return "I gain x"+ format(this.base()) + " \n\
                Cost: " + format(this.cost()) + " QP \n\
                 Amount: " + format(player[this.layer].buyables[this.id])  +" \n\                Effect: x" + format(this.effect())},
            unlocked() {return player.I.hi.gte(34)}
        },
    },
    challenges:{
        11: {
            name: "Ic1",
            completionLimit: n(10),
            challengeDescription: function() {
                return "the start part.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/10 <br> best time:"+player.I.chalbest[0]+ "s" },
            unlocked() { return (mil('I',4))},
            onEnter(){ player.I.time=n(0)},
            goal(){
                let ef=n(60).div(n(challengeCompletions(this.layer,this.id)).add(1).pow(0.6))
                if(n(challengeCompletions(this.layer,this.id)).gte(6)) ef=ef.div(n(challengeCompletions(this.layer,this.id)).pow(0.15))
                return ef
            },  
            onComplete(){
                player.I.chalbest[0]=player.I.chalbest[0].min(player.I.time)
            },          
            onExit() {doReset('I')
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'ee30 points in '+format(this.goal())+'s reset time'},
            canComplete(){return (player.points.gte('ee30')&&!player.I.chalbest[0].gte(this.goal()))},
            rewardDescription: "raise Gs eff.",
            rewardEffect() {
                let ef = n(challengeCompletions(this.layer,this.id)).pow(0.65)//.add(1)
                ef=ef.div(150).add(1)
                if (n(challengeCompletions(this.layer,this.id)).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return '^'+format(this.rewardEffect(),4)},
        },
        12: {
            name: "Ic2",
            completionLimit: n(10),
            challengeDescription: function() {
                return "the F dim part.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/10<br> best time:"+player.I.chalbest[1]+ "s"},
            unlocked() { return (mil('I',4))},
            onEnter(){ player.I.time=n(0)},
            goal(){
                let ef=n(200).div(n(challengeCompletions(this.layer,this.id)).add(1).pow(0.45))
                if(n(challengeCompletions(this.layer,this.id)).gte(6)) ef=ef.sub(n(challengeCompletions(this.layer,this.id)).sub(5).mul(8))
                return ef
            },       
            onComplete(){
                player.I.chalbest[1]=player.I.chalbest[1].min(player.I.time)
            },      
            onExit() {doReset('I')
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'get G25 in '+format(this.goal())+'s reset time'},
            canComplete(){return (upg('G',55)&&!player.I.chalbest[1].gte(this.goal()))},
            rewardDescription: "raise GsR gain.",
            rewardEffect() {
                let ef = n(challengeCompletions(this.layer,this.id)).add(1).pow(0.8)
                if(n(challengeCompletions(this.layer,this.id)).gte(6)) ef=n(challengeCompletions(this.layer,this.id)).add(1).pow(1.1)
                ef=ef.div(200).add(1)
                if(n(challengeCompletions(this.layer,this.id)).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return '^'+format(this.rewardEffect(),4)},
        },
        21: {
            name: "Ic3",
            completionLimit: n(10),
            challengeDescription: function() {
                return "the Gs part.<br>you start with ee1000 G.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/10<br> best time:"+player.I.chalbest[2]+ "s"},
            unlocked() { return (mil('I',7))},
            onEnter(){ player.I.time=n(0)
                player.G.points=n('ee1000')
                player.G.total=n('ee1000')
            },
            goal(){
                let ef=n(90).div(n(challengeCompletions(this.layer,this.id)).add(1).pow(0.4))
                if(n(challengeCompletions(this.layer,this.id)).gte(4)) ef=ef.sub(n(challengeCompletions(this.layer,this.id)).sub(3).mul(3).pow(0.8))
                if(n(challengeCompletions(this.layer,this.id)).gte(7)) ef=n(30).sub(n(challengeCompletions(this.layer,this.id)).sub(7).mul(6))
                if(n(challengeCompletions(this.layer,this.id)).gte(9)) ef=n(15)
                return ef
            },    
            onComplete(){
                player.I.chalbest[2]=player.I.chalbest[2].min(player.I.time)
            },         
            onExit() {doReset('I')
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'get 17 H in '+format(this.goal())+'s reset time'},
            canComplete(){return (player.H.max.gte(17)&&!player.I.chalbest[2].gte(this.goal()))},
            rewardDescription: "reduce bulk H req.",
            rewardEffect() {
                let ef = n(challengeCompletions(this.layer,this.id)).mul(0.06)
                ef=n(1).sub(ef)
                if (n(challengeCompletions(this.layer,this.id)).gte(1))  return ef
                else return n(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect())},
        },
        22: {
            name: "Ic4",
            completionLimit: n(5),
            challengeDescription: function() {
                return "the H part.<br>you start with 1F7 pts.<br> Completion: " +challengeCompletions(this.layer,this.id)+ "/5<br> best time:"+player.I.chalbest[3]+ "s"},
            unlocked() { return (mil('I',7))},
            onEnter(){ player.I.time=n(0)
                player.points=player.points.add(n(10).tetrate(8))
                //player.G.Gse=n('e1.5e8')
            },
            goal(){
                //let ef=n(200).sub(n(challengeCompletions(this.layer,this.id)).mul(40))
                let a=[n(200),n(130),n(90),n(45),n(25),n(20)]
                return a[n(challengeCompletions(this.layer,this.id))]
            },            
            onComplete(){
                player.I.chalbest[3]=player.I.chalbest[3].min(player.I.time)
            }, 
            onExit() {doReset('I')// shiftDown
                player.I.time=n(0)
            },
            goalDescription:  function() {return 'get G75 in '+format(this.goal())+'s reset time'},
            canComplete(){return (upg('G',155)&&!player.I.chalbest[3].gte(this.goal()))},
            rewardDescription: "give more qol(hold shift to see).",
        },
        // 31: {
        //     name: "Enter the curse",
        //     completionLimit: n(Infinity),
        //     challengeDescription: function() {
        //         return "start new I reset with your restriction." },
        //     unlocked() { return (mil('J',3))},
        //     onEnter(){doReset('I')},
        //     //goal(){return n('10^^100')},          
        //     onExit() {doReset('I')},
        //     goalDescription:  function() {return 'get G75(and cause infinite growth)'},
        //     canComplete(){return upg('G',155)},//true
        //     onComplete(){player.I.hi=player.I.hi.add(tmp.I.ressum.sub(player.I.hi).max(0))},
        //     style: {"color":"#9B1F41"},
        //     buttonColor: '#9B1F41',
        //     rewardDescription: function() {
        //         let s="gain harden I equal to your restriction."
        //         if(tmp.I.ressum.gte(player.I.hi.add(1))) s=s+'this completion will gain '+format(tmp.I.ressum.sub(player.I.hi))+' harden I'
        //         return s}
            // rewardEffect() {
            //     let ef = n(challengeCompletions(this.layer,this.id)).mul(0.06)
            //     ef=n(1).sub(ef)
            //     if (n(challengeCompletions(this.layer,this.id)).gte(1))  return ef
            //     else return n(1)
            // },
            // rewardDisplay() {return 'x'+format(this.rewardEffect())},
        //},
    },
    comp(){
        let ef=n(0)
        for(let i in player[this.layer].challenges) ef=ef.add(challengeCompletions(this.layer,i))
        return ef
    },
    qb(){
        let ef=n(0)
        if(mil('I',2)&&player.I.total.gte(3)) ef=n(4).pow(player.I.total.sub(3).pow(0.85))
        let b=n(3)
        if(mil('J',0)) b=b.add(0.2)
        if(gba('J',101).gte(20)) b=b.add(buyableEffect('J',41))
        if(mil('I',12)) ef=ef.max(n(b).pow(player.I.total.pow(0.9)))
        if(n(challengeCompletions('I',22)).gte(4)) ef=ef.pow(1.05)
        if(mil('I',3))  ef=ef.mul(buyableEffect('I',11))
        if(mil('I',10))  ef=ef.mul(tmp.I.m10ef)
        ef=ef.mul(buyableEffect('J',21))
        if(player.I.hi.gte(1)) ef=ef.pow(tmp.I.hief[0])
        return ef
    },
    resv(){
        let ef=[n(0),n(0),n(0),n(0)]
        let e=[n(1.05),n(0.8),n(0.75),n(0.55)]
        let m=[n(0.2),n(0.1),n(0.07),n(2)]
        if(mil('J',4)) e[0]=e[0].sub(0.05),m[0]=m[0].sub(0.02)
        if(mil('I',24)) e[3]=e[3].sub(0.15)
        if(player.I.res[1].gte(10)) e[1]=e[1].add(player.I.res[1].sub(10).div(100))
        if(player.I.res[2].gte(10)) e[2]=e[2].add(player.I.res[2].sub(10).div(100))
        for(let i=0;i<=2;i++) ef[i]=player.I.res[i].pow(e[i]).mul(m[i])
        ef[3]=n(0.5).pow(player.I.res[3].pow(e[3]))
        if(mil('I',23)) for(let i=0;i<=2;i++) ef[i]=ef[i].mul(0.9)//e[1]=e[1].mul(0.9),e[2]=e[2].mul(0.9)
        if(mil('I',24)) for(let i=0;i<=2;i++) ef[i]=ef[i].mul(0.9)
        if(gba('J',101).gte(11)) for(let i=0;i<=2;i++) ef[i]=ef[i].div(buyableEffect('J',34))
        if(gba('J',101).gte(23)) ef[1]=ef[1].mul(0.7)
        if(mil('J',25)) ef[2]=ef[2].mul(0.7)
        ef[3]=ef[3].mul(buyableEffect('J',34))
        return ef
    },
    reslim(){
        let ef=[n(15),n(15),n(15),n(15)]
        if(mil('I',19)) for(let i=0;i<=3;i++) ef[i]=ef[i].add(5)
        if(mil('J',5)) for(let i=0;i<=3;i++) ef[i]=ef[i].add(10)
        if(mil('J',10)) for(let i=0;i<=3;i++) ef[i]=ef[i].add(5)
        if(gba('J',101).gte(11)) for(let i=0;i<=3;i++) ef[i]=ef[i].add(5)
        if(gba('J',101).gte(27)) for(let i=0;i<=1;i++) ef[i]=ef[i].add(5)
        return ef
    },
    resq(){
        let ef=[n(1),n(2),n(3),n(1)]
        return ef
    },
    ressum(){
        let b=n(0)
        for(let i=0;i<=3;i++) b=b.add(player.I.res[i].mul(tmp.I.resq[i]))
        return b
    },
    hief(){
        let ef=[n(0),n(0),n(0),n(0),n(0),n(0)]
        let e=[n(0.85),n(0.7),n(1.1),n(4),n(1.1),n(0.8)]
        if(mil('I',20)) {e[0]=n(0.9),e[1]=n(0.75)}
        if(mil('J',12)) e[1]=n(0.9)
        if(gba('J',101).gte(3)) {e[0]=n(0.925),e[1]=n(1),e[3]=n(4.2)}
        if(gba('J',101).gte(17)) e[0]=n(0.99)
        ef[0]=player.I.hi.max(0).pow(e[0]).div(20).add(1)
        ef[1]=player.I.hi.max(0).pow(e[1]).div(10)
        ef[2]=player.I.hi.max(0).pow(e[2]).div(200)
        ef[3]=player.I.hi.add(2).log(2).pow(e[3]).div(5000).add(1).max(1)
        ef[4]=player.I.hi.max(0).pow(e[4]).div(50).add(1)
        ef[5]=player.I.hi.sub(200).max(0).pow(e[5]).div(1e3)
        return ef
    },
    update(diff){
        player.I.time = player.I.time.add(diff)
        if(mil('I',16)) player.I.si=player.I.si.add(tmp.I.sig.mul(diff))
        if (inChallenge('I',11)&&player.points.gte('ee30'))  player.I.chalbest[0]=player.I.chalbest[0].min(player.I.time)
        if (inChallenge('I',12)&&upg('G',55))  player.I.chalbest[1]=player.I.chalbest[1].min(player.I.time)
        if (inChallenge('I',21)&&player.H.max.gte('17'))  player.I.chalbest[2]=player.I.chalbest[2].min(player.I.time)
        if (inChallenge('I',22)&&upg('G',155))  player.I.chalbest[3]=player.I.chalbest[3].min(player.I.time)
        if (mil('I',2))  player.I.qolpoints = player.I.qolpoints.add(tmp.I.qb.mul(diff))
    },//&&!player.I.time.gte(10000)
})