addLayer("Z", {
    name: "Z", // 可选，仅用于少数位置，若缺失则默认使用首字母大写的层id
    symbol: "Z", // 显示在层节点上。默认为id首字母大写
    position: 0, // 在一行中的水平位置。默认使用层id并按字母顺序排序
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires(){ if(hasMilestone("Z",13))return new Decimal(1); return new Decimal(1e100);}, // 可以是考虑需求增长的函数
    resource: "Z", // 声望货币名称
    baseResource: "点数", // 声望所基于的资源名称
    baseAmount() {return player.points}, // 获取当前基础资源数量
    type: "static", // normal: 获得货币的成本取决于获得的数量。static: 成本取决于你已经拥有的数量
    base(){
        return new Decimal([1e100,1e150,1e175,1e200,1e225,1e260,"1e440","1e600","1e1250","1e2500","1e4500","e9e3","e3e4","e5e4","e4e5","ee6","e5e6","e2e7","e19e7","e27e8","e124e11","ee17","ee24","e18e26","e4e33","ee9990","ee9999999990","eee24","eee70","eee350","eee17000","eeee100","eeee1000","eeee50000","eeeee6","eeeee10","10^^10"][player.Z.points.toNumber()]);
    },
    exponent: n(1), // 声望货币指数
    row: "side", // 层在树中的行（0是第一行）
    hotkeys: [
        {key: "z", description: "Z: 重置以获得Z点数", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",function(){if(player.Z.points.gte(25))return "你拥有 "+format(layers.Z.getZp())+" Zp (基于点数)，其正通过 "+format(upgradeEffect("A",15))+"x (A5效果) 增强点数";return "";}],
    "clickables",
    "milestones"
    ],
    layerShown(){return true},
    doReset(layer){
        if (layer=="Z") {
            layerDataReset("A");
            layerDataReset("B");
            layerDataReset("C");
            layerDataReset("D");
            layerDataReset("E");
            layerDataReset("F");
            layerDataReset("G");
            layerDataReset("H");
            if(player.Z.points.gte(4))player.A.challenges[11]=1;
            if(player.Z.points.gte(4))player.A.challenges[12]=1;
            if(player.Z.points.gte(4))player.A.challenges[21]=1;
            if(player.Z.points.gte(4))player.A.challenges[22]=1;
            if(player.Z.points.gte(4))player.A.challenges[31]=1;
            if(player.Z.points.gte(4))player.A.challenges[32]=1;
            if(player.Z.points.gte(8))player.A.challenges[41]=5;
            if(player.Z.points.gte(5))player.C.challenges[11]=1;
            if(player.Z.points.gte(5))player.C.challenges[12]=1;
            if(player.Z.points.gte(11))player.E.challenges[11]=3;
            if(player.Z.points.gte(11))player.E.challenges[12]=3;
            if(player.Z.points.gte(12))player.E.challenges[21]=3;
            if(player.Z.points.gte(12))player.E.challenges[22]=3;
            if(player.Z.points.gte(13))player.E.challenges[31]=5;
            if(player.Z.points.gte(13))player.E.challenges[32]=5;
            if(player.Z.points.gte(14))player.E.challenges[41]=5;
            if(player.Z.points.gte(14))player.E.challenges[42]=5;
            if(player.Z.points.gte(20))player.F.challenges[11]=3;
            if(player.Z.points.gte(20))player.F.challenges[12]=3;
            if(player.Z.points.gte(21))player.E.challenges[11]=6;
            if(player.Z.points.gte(21))player.E.challenges[12]=6;
            if(player.Z.points.gte(21))player.E.challenges[21]=6;
            if(player.Z.points.gte(21))player.E.challenges[22]=6;
            if(player.Z.points.gte(21))player.E.challenges[31]=6;
            if(player.Z.points.gte(21))player.E.challenges[32]=6;
            if(player.Z.points.gte(21))player.E.challenges[41]=6;
            if(player.Z.points.gte(21))player.E.challenges[42]=6;
            if(player.Z.points.gte(26))player.G.challenges[11]=5;
            if(player.Z.points.gte(26))player.G.challenges[12]=5;
            if(player.Z.points.gte(27))player.G.challenges[21]=5;
            if(player.Z.points.gte(27))player.G.challenges[22]=5;
            if(player.Z.points.gte(6))player.A.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65];
            if(player.Z.points.gte(7))player.B.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82];
            if(player.Z.points.gte(14))player.C.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42];
            if(player.Z.points.gte(15))player.D.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52];
            if(player.Z.points.gte(13))player.F.upgrades=[11];
            if(player.Z.points.gte(16))player.F.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 55];
            if(player.Z.points.gte(18))player.F.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25,26,27,28,29,30, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65];
            if(player.Z.points.gte(24))player.F.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85];
            if(player.Z.points.gte(23))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25];
            if(player.Z.points.gte(29))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35];
            if(player.Z.points.gte(30))player.C.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55];
            if(player.Z.points.gte(30))player.D.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55];
            if(player.Z.points.gte(30))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55];
            if(player.Z.points.gte(32))player.B.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85];
            if(player.Z.points.gte(36))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65];
            if(player.Z.points.gte(10))player.B.milestones=['0','1','2','3','4','5','6','7'];
            if(player.Z.points.gte(10))player.C.milestones=['0','1','2','3'];
            if(player.Z.points.gte(12))player.D.milestones=['0','1','2','3','4'];
            if(player.Z.points.gte(13))player.E.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
            if(player.Z.points.gte(18))player.F.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
            if(player.Z.points.gte(22))player.G.milestones=['0','1','2','3','4','5','6'];
            if(player.Z.points.gte(31))player.G.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
            player.points=new Decimal(10);
            for(let i=0;i<10;i++)updateTemp();
        }
    },
    update(){
        player.Z.best=player.Z.best.floor();
        if(player.Z.points.gte(9)){
            let effective_B = player.B.points.add(1).mul(10);
            if (hasMilestone('B',1))effective_B=effective_B.mul(upgradeEffect('B',61));
                if (hasChallenge('E',31))effective_B=effective_B.mul(challengeEffect('E',31))
            if(player.Z.points.gte(11))effective_B=effective_B.mul(tmp.E.ekf);
            player.B.buyables[11]=player.B.buyables[11].max(effective_B.log(player.Z.points.gte(24)?2.5:hasUpgrade('E',73)?2.6:hasUpgrade('E',43)?2.7:2.8).max(0).root(1.1).ceil().max(0));
            player.B.buyables[12]=player.B.buyables[12].max(effective_B.log(player.Z.points.gte(24)?2.5:hasUpgrade('E',73)?7:hasUpgrade('E',43)?7.5:8).max(0).root(1.1).ceil().max(0));
            player.B.buyables[21]=player.B.buyables[21].max(effective_B.log(player.Z.points.gte(24)?2.5:player.Z.points.gte(22)?2.6:hasUpgrade('F',35)?3.6:9).max(0).root(1.1).ceil().max(0));
            player.B.buyables[22]=player.B.buyables[22].max(effective_B.log(player.Z.points.gte(24)?2.5:player.Z.points.gte(22)?2.6:hasUpgrade('F',35)?4.9:10).max(0).root(1.1).ceil().max(0));
            player.B.buyables[23]=player.B.buyables[23].max(effective_B.log(player.Z.points.gte(24)?2.5:hasUpgrade('F',35)?700:hasUpgrade('D',44)?800:hasUpgrade('E',62)?900:1000).max(0).root(player.Z.points.gte(24)?1.1:1.2).ceil().max(0));
        }
        if(player.Z.points.gte(14)){
            let effective_E = player.E.points.add(1);
            if (hasChallenge('E',41))effective_E=effective_E.mul(challengeEffect('E',41));
            player.E.buyables[11]=player.E.buyables[11].max(effective_E.div(hasUpgrade('E',54)?1:1000).log(2).max(0).root(1.1).ceil().max(0));
            player.E.buyables[12]=player.E.buyables[12].max(effective_E.div(hasUpgrade('E',54)?1:1000).log(3).max(0).root(1.1).ceil().max(0));
            player.E.buyables[13]=player.E.buyables[13].max(effective_E.div(hasUpgrade('E',54)?1:40000).log(5).max(0).root(1.1).ceil().max(0));
            player.E.buyables[21]=player.E.buyables[21].max(effective_E.div(hasUpgrade('E',94)?1:1e10).log(25).max(0).root(1.1).ceil().max(0));
            player.E.buyables[31]=player.E.buyables[31].max(player.E.points.add(1).log(2).max(0).root(1.2).ceil().max(0));
            player.E.buyables[32]=player.E.buyables[32].max(player.E.points.add(1).log(5).max(0).root(1.2).ceil().max(0));
            player.E.buyables[33]=player.E.buyables[33].max(player.E.points.add(1).log(hasUpgrade("E",93)?9:10).max(0).root(1.2).ceil().max(0));
            player.E.buyables[41]=player.E.buyables[41].max(player.E.points.add(1).div(1e24).log(10).max(0).root(1.2).ceil().max(0));        player.E.buyables[42]=player.E.buyables[42].max(player.E.points.add(1).div(1e40).log(10).max(0).root(1.2).ceil().max(0));    player.E.buyables[22]=player.E.buyables[22].max(player.E.points.add(1).div('1e330').log(1e6).max(0).root(1.5).ceil().max(0));

        }
        if((player.Z.points.gte(17) || hasMilestone('G',3)) && player.Z.points.lt(30)){
            player.F.fd1=player.F.fd1.max(player.F.buyables[11]=player.F.buyables[11].max(player.F.points.div(player.Z.points.gte(19)?1:10).max(1).log(10).max(0).div(layers.F.scaling().pow(1)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd2=player.F.fd2.max(player.F.buyables[12]=player.F.buyables[12].max(player.F.points.div(player.Z.points.gte(19)?1:100).max(1).log(10).max(0).div(layers.F.scaling().pow(2)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd3=player.F.fd3.max(player.F.buyables[13]=player.F.buyables[13].max(player.F.points.div(player.Z.points.gte(19)?1:1e4).max(1).log(10).max(0).div(layers.F.scaling().pow(3)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd4=player.F.fd4.max(player.F.buyables[21]=player.F.buyables[21].max(player.F.points.div(player.Z.points.gte(19)?1:1e7).max(1).log(10).max(0).div(layers.F.scaling().pow(4)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd5=player.F.fd5.max(player.F.buyables[22]=player.F.buyables[22].max(player.F.points.div(player.Z.points.gte(19)?1:1e11).max(1).log(10).max(0).div(layers.F.scaling().pow(5)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd6=player.F.fd6.max(player.F.buyables[23]=player.F.buyables[23].max(player.F.points.div(player.Z.points.gte(19)?1:1e16).max(1).log(10).max(0).div(layers.F.scaling().pow(6)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd7=player.F.fd7.max(player.F.buyables[31]=player.F.buyables[31].max(player.F.points.div(player.Z.points.gte(19)?1:1e22).max(1).log(10).max(0).div(layers.F.scaling().pow(7)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd8=player.F.fd8.max(player.F.buyables[32]=player.F.buyables[32].max(player.F.points.div(player.Z.points.gte(19)?1:1e29).max(1).log(10).max(0).div(layers.F.scaling().pow(8)).root(layers.F.scaling()).ceil().max(0)));
player.F.buyables[101]=player.F.buyables[101].max(player.F.points.div(player.Z.points.gte(19)?1:1e10).max(1).log(10).max(0).root(layers.F.scaling()).ceil().max(0))

        }
        if(player.Z.points.gte(20)){
            player.G.buyables[11]=player.G.buyables[11].max(player.G.points.add(1).log(10).max(0).root(1.1).ceil().max(0));
            player.G.buyables[12]=player.G.buyables[12].max(player.G.points.add(1).log(100).max(0).root(1.2).ceil().max(0));
        }
        if((player.Z.points.gte(21) || hasUpgrade('F',85)) && player.Z.points.lt(30)){
            player.F.buyables[102]=player.F.buyables[102].max(player.F.buyables[32].div(player.Z.points.gte(21)?1:5).sqrt().floor());
        }
        if(player.Z.points.gte(23) || hasMilestone('G',10)){
            player.F.f2d1 = player.F.f2d1.max(player.F.buyables[111]=player.F.buyables[111].max(player.G.points.add(1).log10().max(1).div(player.Z.points.gte(23)?1:43300000).log(1.01).ceil().max(0)));
        }
        if(player.Z.points.gte(23)){
            player.F.f2d2 = player.F.f2d2.max(player.F.buyables[112]=player.F.buyables[112].max(player.G.points.add(1).log10().max(1).div(player.Z.points.gte(24)?1e4:4e8).log(1.01).ceil().max(0)));
            player.G.buyables[13] = player.G.buyables[13].max(player.G.points.add(1).log10().max(1).log(2).max(0));
        }
        if(player.Z.points.gte(24) && upg('G',52)){
            player.F.f2d3 = player.F.f2d3.max(player.F.buyables[113]=player.F.buyables[113].max(player.G.points.add(1).log10().max(1).div(1e8).log(1.01).ceil().max(0)));
            player.F.f2d4 = player.F.f2d4.max(player.F.buyables[121]=player.F.buyables[121].max(player.G.points.add(1).log10().max(1).div(1e12).log(1.01).ceil().max(0)));
        }
        if(player.Z.points.gte(30)){
            let target=Decimal.pow(10, player.F.points.add(10).log10().log10().root(layers.F.scaling()));
            player.F.fd1=player.F.fd1.max(player.F.buyables[11]=player.F.buyables[11].max(target));
            player.F.fd2=player.F.fd2.max(player.F.buyables[12]=player.F.buyables[12].max(target));
            player.F.fd3=player.F.fd3.max(player.F.buyables[13]=player.F.buyables[13].max(target));
            player.F.fd4=player.F.fd4.max(player.F.buyables[21]=player.F.buyables[21].max(target));
            player.F.fd5=player.F.fd5.max(player.F.buyables[22]=player.F.buyables[22].max(target));
            player.F.fd6=player.F.fd6.max(player.F.buyables[23]=player.F.buyables[23].max(target));
            player.F.fd7=player.F.fd7.max(player.F.buyables[31]=player.F.buyables[31].max(target));
            player.F.fd8=player.F.fd8.max(player.F.buyables[32]=player.F.buyables[32].max(target));
            player.F.buyables[101]=player.F.buyables[101].max(target);
            player.F.buyables[102]=player.F.buyables[102].max(target);
        }

        if(player.Z.points.gte(27)){
            let effective_Gs = player.G.Gs.add(1);
                    if (hasUpgrade('G',81))  effective_Gs=effective_Gs.mul(upgradeEffect('G',81))
                    if (hasUpgrade('G',65))  effective_Gs=effective_Gs.root(upgradeEffect('G',65))

            if(mil('G',17) || player.Z.points.gte(29))player.G.buyables[21]=player.G.buyables[21].max(effective_Gs.add(1).log(hasUpgrade("G",122)?4:4.1).max(0).root(hasUpgrade("G",122)?1.25:1.35).ceil().max(0));
            if(player.Z.points.gte(30))player.G.buyables[22]=player.G.buyables[22].max(effective_Gs.add(1).log(hasUpgrade("G",92)?5:10).max(0).root(player.Z.points.gte(33)?2:2.5).ceil().max(0));
            if(mil('G',17) && player.Z.points.lt(30))player.G.buyables[23]=player.G.buyables[23].max(effective_Gs.add(1).log(100).max(0).root(1).ceil().max(0));
            if(player.Z.points.gte(30))player.G.buyables[23]=player.G.buyables[23].max(effective_Gs.add(1).log(1000).max(0).root(3).ceil().max(0));
        }
    if(player.Z.points.gte(31)){
            let effective_Gsi = player.G.Gsi.add(1);
                    if (hasUpgrade('G',65))  effective_Gsi=effective_Gsi.root(upgradeEffect('G',65))
            if(player.Z.points.gte(31))player.G.buyables[31]=player.G.buyables[31].max(effective_Gsi.add(1).log(hasUpgrade("G",93)?4:4.8).max(0).root(hasUpgrade("G",122)?1.5:1.6).ceil().max(0));
            if(player.Z.points.gte(32))player.G.buyables[32]=player.G.buyables[32].max(effective_Gsi.add(1).log(player.Z.points.gte(33)?5:100).max(0).root(player.Z.points.gte(33)?2:hasMilestone("G",18)?2:3).ceil().max(0));
            if(player.Z.points.gte(36))player.G.buyables[33]=player.G.buyables[33].max(effective_Gsi.add(1).log(10).add(1).log(2.5).ceil().max(0));
        }
    if(player.Z.points.gte(34)){
            let effective_Gse = player.G.Gse.add(1);
                    if (hasUpgrade('G',65))  effective_Gse=effective_Gse.root(upgradeEffect('G',65))
            if(hasUpgrade("G",162) || player.Z.points.gte(35))player.G.buyables[41]=player.G.buyables[41].max(effective_Gse.add(1).log(4).max(0).root(1.4).ceil().max(0));
            if(hasUpgrade("G",162) && player.Z.points.gte(35))player.G.buyables[42]=player.G.buyables[42].max(effective_Gse.add(1).log(100).max(0).root(2).ceil().max(0));
            if(hasUpgrade("H",11) && player.Z.points.gte(35))player.G.buyables[61]=player.G.buyables[61].max(player.G.Gse.add(1).log(10).max(0).root(3).ceil().max(0));
        }
    },
    milestones: {
        0: {requirementDescription: "1 Z",
            done() {return player.Z.points.gte(1)}, 
            effectDescription: "100倍 A/B 被动，解锁 D。",
        },
        1: {requirementDescription: "2 Z",
            done() {return player.Z.points.gte(2)}, 
            effectDescription: "100倍 A/B/C 被动。",
        },
        2: {requirementDescription: "3 Z",
            done() {return player.Z.points.gte(3)}, 
            effectDescription: "100倍 A/B/C 被动，1倍 D 被动。<br>更便宜的 B 购买项，平方 B26 的基础效果。",
        },
        3: {requirementDescription: "4 Z",
            done() {return player.Z.points.gte(4)}, 
            effectDescription: "100倍 A/B/C/D 被动。开始时已完成前6个 A 挑战。<br>点数^1.05。B35 更强。",
        },
        4: {requirementDescription: "5 Z",
            done() {return player.Z.points.gte(5)}, 
            effectDescription: "100倍 A/B/C/D 被动。开始时已完成前2个 C 挑战。<br>将 A/B/C/D 的需求降低至 1。<br>所有乘数应用于 B26 的基础值。点数^1.02。",
        },
        5: {requirementDescription: "6 Z",
            done() {return player.Z.points.gte(6)}, 
            effectDescription: "开始时拥有所有 A 升级。A9^15。",
        },
        6: {requirementDescription: "7 Z",
            done() {return player.Z.points.gte(7)}, 
            effectDescription: "开始时拥有所有 B 升级。更便宜的 B 购买项。",
        },
        7: {requirementDescription: "8 Z",
            done() {return player.Z.points.gte(8)}, 
            effectDescription: "开始时 Ac7 已完成5次。前2个 B 购买项的基础值 +1",
        },
        8: {requirementDescription: "9 Z",
            done() {return player.Z.points.gte(9)}, 
            effectDescription: "自动购买最大数量的 B 购买项。更便宜的 Bb3。改变 Bb5 公式。10倍 E。",
        },
        9: {requirementDescription: "10 Z",
            done() {return player.Z.points.gte(10)}, 
            effectDescription: "开始时拥有所有 B 和 C 里程碑。改变 Bb5 公式。<br>10倍 E 被动并解锁 Em。更便宜的 Eb4。更强的 E25。",
        },
        10: {requirementDescription: "11 Z",
            done() {return player.Z.points.gte(11)}, 
            effectDescription: "开始时前2个 E 挑战已完成3次。<br>解锁 Ek。更便宜的 Eb5-7。",
        },
        11: {requirementDescription: "12 Z",
            done() {return player.Z.points.gte(12)}, 
            effectDescription: "开始时 Ec3-4 已完成3次以及所有 D 里程碑。<br>10倍 E 被动并将 E 的需求降低至 1。<br>点数^1.13 且 Ec3-4 在幂运算前应用。<br>改变 Bb5 公式。",
        },
        12: {requirementDescription: "13 Z",
            done() {return player.Z.points.gte(13)}, 
            effectDescription: "开始时 Ec5-6 已完成5次，所有 E 里程碑和首个 F 升级。<br>10倍 E 被动。<br>点数^1.011。2倍 F。<br>改变 Ac7 和 E22 的公式。",
        },
        13: {requirementDescription: "14 Z",
            done() {return player.Z.points.gte(14)}, 
            effectDescription: "开始时 Ec7-8 已完成5次和前17个 C 升级。3倍 F。<br>自动购买最大数量的 E 购买项。<br>解锁 F1 和 F 维度。",
        },
        14: {requirementDescription: "15 Z",
            done() {return player.Z.points.gte(15)}, 
            effectDescription: "开始时拥有前22个 D 升级。4倍 F 和 F1，10倍 F 被动并将 F 的需求降低至 1。<br>改变 Ac7 的公式。",
        },
        15: {requirementDescription: "16 Z",
            done() {return player.Z.points.gte(16)}, 
            effectDescription: "开始时拥有前15个 F 升级。5倍 F 和 F1，10倍 F 被动。<br>F 维度需求 F 而非 F1，但在 F24 之前增加基础 F1 效果。<br>改变 Ac7 和 F30 的公式。",
        },
        16: {requirementDescription: "17 Z",
            done() {return player.Z.points.gte(17)}, 
            effectDescription: "自动购买最大数量的 F 维度。A1,B1,C1,D1 和 F1 升级 ^10；E1 ^100。6倍 F 和 F1，10倍 F 被动。<br>改变 Ac7 的公式。改变 Gb3 消耗。",
        },
        17: {requirementDescription: "18 Z",
            done() {return player.Z.points.gte(18)}, 
            effectDescription: "开始时拥有所有 F 里程碑。将所有 E 挑战的最大完成次数提升至 6。A1,B1,C1,D1,E1 和 F1 升级 ^10。刻度加速效果已改变。",
        },
        18: {requirementDescription: "19 Z",
            done() {return player.Z.points.gte(19)}, 
            effectDescription: "开始时拥有前30个 F 升级。将 G 的需求降低至 1。同时 F 维度和 G 购买项的初始成本为 1。改变 G7 和 G8。",
        },
        19: {requirementDescription: "20 Z",
            done() {return player.Z.points.gte(20)}, 
            effectDescription: "开始时 Fc1-2 已完成3次。自动购买最大数量的 Gb1-Gb2。改变 Fd 和 Gb3 消耗但增加 F1 效果。",
        },
        20: {requirementDescription: "21 Z",
            done() {return player.Z.points.gte(21)}, 
            effectDescription: "开始时 Ec1-8 已完成6次。改变刻度助推消耗并自动购买最大数量的刻度助推。改变 Fd 消耗和 Ac7 但增加 F1 效果。解锁更多 C 和 D 升级。",
        },
        21: {requirementDescription: "22 Z",
            done() {return player.Z.points.gte(22)}, 
            effectDescription: "开始时拥有前7个 G 里程碑。改变 Fd 消耗和 E22 但增加 F1 效果。降低 Bb3-4 消耗并增加 Bb3-4，A1 和 B1 效果。解锁 F2 和更多 C 升级。",
        },
        22: {requirementDescription: "23 Z",
            done() {return player.Z.points.gte(23)}, 
            effectDescription: "开始时拥有前10个 G 升级。改变 Fd 消耗和 Gc3p 但增加 F1 效果。改变 F2 维度消耗，购买最大数量的 F2d1 和 F2d2。购买最大数量的小数 Gb3。解锁更多 D 升级。",
        },
        23: {requirementDescription: "24 Z",
            done() {return player.Z.points.gte(24)}, 
            effectDescription: "开始时拥有前40个 F 升级。改变 Fd 消耗和 F30 但增加 F1 效果。改变所有 B 购买项。改变 F2 维度消耗，购买最大数量的 F2d3 和 F2d4。增加 F2 效果。",
        },
        24: {requirementDescription: "25 Z",
            done() {return player.Z.points.gte(25)}, 
            effectDescription: "解锁 Zp。A 的获取基于 Zp 而非点数。C 的获取现在基于 B。A5 改为 Zp 增强点数。改变 Fd 消耗但增加 F1 效果。",
        },
        25: {requirementDescription: "26 Z",
            done() {return player.Z.points.gte(26)}, 
            effectDescription: "开始时 Gc1 和 Gc2 已完成5次。永久解锁 Gs，当你达到 1e10 G 时可获得 Gs。Gs 效果指数 ^1.2。改变 Fd 消耗但增加 F1 效果。",
        },
        26: {requirementDescription: "27 Z",
            done() {return player.Z.points.gte(27)}, 
            effectDescription: "开始时 Gc3 和 Gc4 已完成5次。Gs 效果指数 ^1.5。改变 Fd 消耗但增加 F1 效果。",
        },
        27: {requirementDescription: "28 Z",
            done() {return player.Z.points.gte(28)}, 
            effectDescription: "F2 效果更好。Gs 效果指数 ^2。改变 Fd 消耗但增加 F1 效果。",
        },
        28: {requirementDescription: "29 Z",
            done() {return player.Z.points.gte(29)}, 
            effectDescription: "开始时拥有前15个 G 升级。Gs 效果 ^5 且指数 ^1.389。改变 Fd 消耗并改变 F1 效果为点数增强，永久自动购买最大数量的 Gsb1。",
        },
        29: {requirementDescription: "30 Z",
            done() {return player.Z.points.gte(30)}, 
            effectDescription: "开始时拥有前25个 C、D 和 G 升级。改变 Fd、Gsb2 和 Gsb3 消耗以及 Gs 效果但增加 F2 效果，永久自动购买最大数量的 Gsb2 和 Gsb3 并改变消耗，永久解锁 Gsi。",
        },
        30: {requirementDescription: "31 Z",
            done() {return player.Z.points.gte(31)}, 
            effectDescription: "开始时拥有前18个 G 里程碑。Gs 效果指数 ^1.2。改变 Fd 和 Gsb4 消耗但增加 F1 效果，永久自动购买最大数量的 Gsb4。",
        },
        31: {requirementDescription: "32 Z",
            done() {return player.Z.points.gte(32)}, 
            effectDescription: "开始时拥有前40个 B 升级。每秒获得等于 F1 的所有4种 Gc 点数。改变 Gs 效果。改变 Gsb5 消耗但增加 F1 效果，永久自动购买最大数量的 Gsb5。",
        },
        32: {requirementDescription: "33 Z",
            done() {return player.Z.points.gte(33)}, 
            effectDescription: "Gsb6 和 Gsb9 的基础固定为硬上限，且任何基础乘数都作用于其硬上限。改变 Fd 消耗但增加 Gs 和 F2 效果。",
        },
        33: {requirementDescription: "34 Z",
            done() {return player.Z.points.gte(34)}, 
            effectDescription: "A-G 获取指数为 1。Gs 效果指数 ^5。永久解锁 Gse。",
        },
        34: {requirementDescription: "35 Z",
            done() {return player.Z.points.gte(35)}, 
            effectDescription: "永久自动购买最大数量的 Gsb7，解锁 H。",
        },
        35: {requirementDescription: "36 Z",
            done() {return player.Z.points.gte(36)}, 
            effectDescription: "开始时拥有前5个 Gs 升级。H 的需求为 1。改变 Gsb6 消耗并移除 Gsb6 限制，永久自动购买最大数量的 Gsb6。",
        },
    },
    setZ(a){
        if(a === undefined)return;
        player.Z.points=new Decimal(a).floor();
        player.Z.milestones=[];
        for(let i=0;i<new Decimal(a).floor().toNumber();i++){
            player.Z.milestones.push(i+'');
        }
        player.Z.best=player.Z.best.max(player.Z.points);
        layers.Z.doReset('Z');
    },
    getZp(){
        if(player.Z.points.lt(25))return player.points;
    if(player.Z.points.gte(35)){
        return Decimal.tetrate(10,player.points.add(1).slog().div([1.00001,1.00005][player.Z.points.sub(35).toNumber()]));
    }
    if(player.Z.points.gte(29)){
        return Decimal.pow(10,Decimal.pow(10,player.points.add(1).log10().add(1).log10().pow(Decimal.pow(0.99,player.Z.points.sub(28)))));
    }
        return Decimal.pow(10,player.points.add(10).log10().pow(Decimal.pow(0.99,player.Z.points.sub(24))));
    },
    clickables: {
        11: {
            title() {
                return "-1 Z"
            },
            canClick() {
                return player.Z.points.gte(1)
            },
            onClick() {
                if (!player.Z.points.gte(1)) return;
                layers.Z.setZ(player.Z.points.sub(1));
            },
            unlocked: true,
        },21: {
            title() {
                return "强制 Z 重置"
            },
            canClick() {
                return true;
            },
            onClick() {
                layers.Z.setZ(player.Z.points);
            },
            unlocked: true,
        },    12: {
            title() {
                return "+1 Z"
            },
            canClick() {
                return player.Z.points.lt(player.Z.best);
            },
            onClick() {
                if (!player.Z.points.lt(player.Z.best)) return;
                layers.Z.setZ(player.Z.points.add(1));
            },
            unlocked: true,
        },    
    }
})
