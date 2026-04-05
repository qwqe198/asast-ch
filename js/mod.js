let modInfo = {
    name: "反软上限反折算树 (Anti-softcap anti-scaling tree)",
    id: "asast",
    author: "4294967296 / loader3229",
    pointsName: "点数",
    modFiles: ["layers/A.js", "layers/B.js","layers/C.js","layers/D.js","layers/E.js","layers/F.js","layers/G.js","layers/H.js","layers/I.js","layers/J.js","layers/Z.js","layers/ach.js","tree.js",],

    discordName: "",
    discordLink: "",
    initialStartPoints: new Decimal (10), // 用于硬重置和新玩家
    offlineLimit: 8760,  // 单位：小时
}

// 在此处设置你的版本号（num）和版本名（name）
let VERSION = {
    num: "1.036",
    name: "Gsg",
}

let changelog = ``

let winText = `恭喜！你已经到达终点并通关了此游戏，但就目前而言...`

// 如果你在层内的任何地方添加了新函数，且这些函数在被调用时会产生效果，请将它们添加到这里。
// （此处列出的是示例，所有官方函数已被自动处理）
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// 决定是否显示每秒获得点数
function canGenPoints(){
    return true
}

// 计算每秒获得的点数！
function getPointGen() {
    if(!canGenPoints())
        return new Decimal(0)
        
    let gain = new Decimal(1)
    gain = gain.mul(hasUpgrade("A",11)?upgradeEffect("A",11):1)
    gain = gain.mul(hasUpgrade("A",15)?upgradeEffect("A",15):1)
    gain = gain.mul(hasUpgrade("A",24)?upgradeEffect("A",24):1)
    gain = gain.mul(hasUpgrade("A",35)?upgradeEffect("A",35):1)
    gain = gain.mul(hasUpgrade("B",11)?upgradeEffect("B",11):1)
    gain = gain.mul(hasUpgrade("B",21)?upgradeEffect("B",21):1)
    gain = gain.mul(hasUpgrade("B",44)?upgradeEffect("B",44):1)
    gain = gain.mul(hasUpgrade("B",52)?upgradeEffect("B",52):1)

    gain = gain.mul(hasUpgrade("C",11)?upgradeEffect("C",11):1)
    gain = gain.mul(hasUpgrade("C",13)?upgradeEffect("C",13):1)
    gain = gain.mul(hasUpgrade("D",11)?upgradeEffect("D",11):1)
    gain = gain.mul(hasUpgrade("D",15)?upgradeEffect("D",15):1)
    gain = gain.mul(hasUpgrade("D",21)?upgradeEffect("D",21):1)
    gain = gain.mul(hasUpgrade("D",24)?upgradeEffect("D",24):1)
    gain = gain.mul(hasUpgrade("D",32)?upgradeEffect("D",32):1)
    gain = gain.mul(hasUpgrade("E",11)?upgradeEffect("E",11):1)
    gain = gain.mul(hasUpgrade("E",12)?upgradeEffect("E",12):1)
    gain = gain.mul(hasUpgrade("E",22)?upgradeEffect("E",22):1)
    gain = gain.mul(hasUpgrade("C",33)?upgradeEffect("C",33):1)
    gain = gain.mul(hasUpgrade("D",43)?upgradeEffect("D",43):1)
    gain = gain.mul(hasUpgrade("E",85)?upgradeEffect("E",85):1)
    gain = gain.mul(hasUpgrade("E",104)?upgradeEffect("E",104):1)
    gain = gain.mul(hasUpgrade("F",11)?upgradeEffect("F",11):1)

    if (inChallenge("A", 11))  gain = gain.pow(0.75)
    if (inChallenge("A", 21))  gain = gain.pow(0.55)
    if (inChallenge("A", 31))  gain = gain.pow(0.5)
    if (inChallenge("C", 11))  gain = gain.pow(0.45)
    if (inChallenge("E", 22))  gain = gain.pow(player.points.add(10).log(10).pow(-0.06).max('1e-100'))
    if (inChallenge("E", 32))  gain = gain.pow(player.E.Em.add(10).log(10).pow(-0.2).max('1e-100'))
    if (inChallenge("E", 42))  gain = gain.pow(player.points.add(10).log(10).pow(-0.12).max('1e-100'))
    if (inChallenge("F", 12))  gain = Decimal.pow(10,gain.add(10).log(10).pow(0.8).max('1e-100'))

    if (hasChallenge("A", 21))  gain = gain.mul(50)
    if (hasChallenge("A", 22))  gain = gain.mul(100)
    if (hasChallenge("C", 11))  gain = gain.mul(2000)
    if (hasChallenge("C", 12))  gain = gain.mul(8000)
    if (hasChallenge("A", 41))  gain = gain.mul(challengeEffect('A',41))
        
    if(hasMilestone("Z",11)){
        if (hasChallenge("E", 21))  gain = gain.mul(challengeEffect('E',21))
        if (hasChallenge("E", 22))  gain = gain.mul(challengeEffect('E',22))
    }
    if (hasUpgrade("F", 14))  gain = gain.pow(1.0012)
    if (hasUpgrade("F", 52))  gain = gain.pow(1.002)
    if (hasUpgrade("F", 65))  gain = gain.pow(1.006)
    if (mil("I",0))  gain = gain.pow(1.01)
    if (mil("I",1))  gain = gain.pow(1.02)
    if (mil('I',3))  gain = gain.pow(buyableEffect('I',12))
    if(n(challengeCompletions('I',22)).gte(1))  gain = gain.pow(1.25)

    if(hasMilestone("Z",12)){
        gain = gain.pow(1.25)
    }else if(hasMilestone("Z",11)){
        gain = gain.pow(1.234321)
        if (hasUpgrade("F", 11))  gain = gain.pow(1.0016)
    }else{
        if (hasChallenge("A", 32))  gain = gain.pow(1.01)
        if (hasChallenge("C", 11))  gain = gain.pow(1.01)
        if(hasMilestone("Z", 3))gain = gain.pow(1.05)
        if(hasMilestone("Z", 4))gain = gain.pow(1.02)
        if (hasChallenge("E", 21))  gain = gain.mul(challengeEffect('E',21))
        if (hasChallenge("E", 22))  gain = gain.mul(challengeEffect('E',22))
    }

    if ((mil('G',14) || player.Z.points.gte(26)) && player.Z.points.lt(30))gain = gain.pow(tmp.G.gsef1)
    if (player.Z.points.gte(29))gain = gain.pow(tmp.F.F1f2)

    if (player.Z.points.gte(30))gain = Decimal.pow(10,gain.add(10).log10().pow(tmp.G.gsef2))
            
    let tet=n(0)
              if (hasUpgrade('G',174))  tet=tet.add(0.00031);
    if(gcs('I',124))  tet=tet.add(0.3)
    if(gcs('I',125))  tet=tet.add(0.5)
    if(gcs('I',135))  tet=tet.add(1)
    if(mil('J',8)) tet=tet.mul(2)
    if(mil('J',11)) tet=tet.mul(tmp.J.ssef)
    if(mil('I',23)) tet=tet.mul(tmp.I.hief[4])
    if(gcs('I',311)) {if(gain.gte('10^^25')&&mil('I',21)) gain=n(10).tetrate(gain.max(10).slog().add(tet))
        else if(gain.gte('10^^10')&&gba('J',101).gte(23)) gain=n(10).tetrate(gain.max(10).slog().add(tet))
        else gain=n(10).tetrate(gain.max(10).slog().sub(tmp.I.resv[0]).max(0))}
    else{if(gain.gte('10^^6'))  gain=n(10).tetrate(gain.max(10).slog().add(tet))}
//
    gain=gain.min(tmp.H.php)
    
    
    gain = gain.min([1e100,1e250,"1e450","1e700","1e1000","1e1400","1e2740","1e4300","1e10100","1e22600","1e45100","1e99100","1e360100","1e650100","e56e5","e15e6","e8e7","e34e7","e342e7","e513e8","e25e13","e22e17","e25e24","e5e28","ee35","eee4","eee10","eee25","eee75","eee360","eee2e4","eeee110","eeee2000","eeeee5","eeeee7","eeeee11","eeeee21","10^^1e100"][player.Z.points.min(37).toNumber()]);
    return gain
}

// 你可以在此处添加与层无关但需要存入 "player" 的对象及默认值
function addedPlayerData() { return {
}}

// 显示在页面顶部的额外内容
var displayThings = [
    '原作者: 4294967296 / Mod作者: loader3229/ 汉化作者: 22222',
    function() {
        let s='当前终局目标: eeeee20 (1.301F6)'
        if(upg('G',155)||mil('I',0)) s=s+"<br><h4 style='color: #C52C14'>点数增益被硬上限限制于 "+format(tmp.H.php)+"。"
        return s},//<br> 点数被硬上限限制在 1F100。
]
// 决定游戏何时“结束”
function isEndgame() {
    return player.points.gte('eeeee20')
}

//<br> bilibili: @bili_50929957100 / @loader3229

// 以下内容重要性较低！

// 背景样式，可以是函数
var backgroundStyle = {

}

// 如果某些内容可能因过长的时间刻度（tick length）而出错，可以在此修改
function maxTickLength() {
    return(1e10) // 默认为100小时，这是一个任意大的数值
}//1e8

// 如果旧版本存在通货膨胀问题，可用此函数修复旧存档。
// 如果版本早于修复问题的版本，你可以用此函数封顶玩家当前的资源。
function fixOldSave(oldVersion){
}