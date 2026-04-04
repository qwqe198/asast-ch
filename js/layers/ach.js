
// A side layer with achievements, with no prestige
addLayer("ac", {
    startData() { return {
        unlocked: true,
        //points: new Decimal(0),
    }},
    color: "yellow",
    row: "side",
    tooltip() { // 可选，当层被锁定时显示提示
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "1. 万事开头难",
            done() {return player.A.total.gte('1')}, 
            tooltip: "获得 1 A", 
        },
        12: {
            name: "2. 常数",
            done() {return (hasUpgrade("A", 14))},
            tooltip: "获得 A1-A4", 
        },
        13: {
            name: "3. 自我增强",
            done() {return (hasUpgrade("A", 15))},
            tooltip: "获得 A5",
        },
        14: {
            name: "4. 100 井",
            done() {return player.A.total.gte('100')},
            tooltip: "获得 100 A",
        },
        15: {
            name: "5. 对数化",
            done() {return (hasUpgrade("A", 24))},
            tooltip: "获得 A9",
        },
        16: {
            name: "6. 为何不升格",
            done() {return player.B.total.gte('1')},
            tooltip: "获得 1 B",
        },
        21: {
            name: "7. 常数^2",
            done() {return (hasUpgrade("B", 15))},
            tooltip: "获得 B1-B5",
        },
        22: {
            name: "8. 初级自动化",
            done() {return (hasUpgrade("B", 23))},
            tooltip: "获得 B8", 
        },
        23: {
            name: "9. 充满挑战",
            done() {return (hasUpgrade("B", 25))},
            tooltip: "解锁 A 挑战", 
        },
        24: {
            name: "10. 已挑战",
            done() {return (hasChallenge("A", 11))},
            tooltip: "完成 Ac1", 
        },
        25: {
            name: "11. 挑战*3",
            done() {return (hasChallenge("A", 21))},
            tooltip: "完成 Ac3", 
        },
        26: {
            name: "12. 第1行满",
            done() {return (hasUpgrade("B", 35))},
            tooltip: "获得 B15", 
        },
        31: {
            name: "13. 第2行 为何不升格",
            done() {return (hasUpgrade("B", 35))},
            tooltip: "解锁 C",
        },
        32: {
            name: "14. 隐藏升级",
            done() {return (hasUpgrade("A", 41))},
            tooltip: "获得 A16", 
        },
        33: {
            name: "15. 一组时间墙",
            done() {return (hasUpgrade("A", 45))},
            tooltip: "获得 A20", 
        },
        34: {
            name: "16. 可点击物",
            done() {return (hasUpgrade("C", 25))},
            tooltip: "获得 C10", 
        },
        35: {
            name: "17. 为何不升格^3",
            done() {return player.D.total.gte('1')},
            tooltip: "解锁 D",
        },
        36: {
            name: "18. 常数^3",
            done() {return (hasUpgrade("D", 14))},
            tooltip: "获得 D1-D4", 
        },
        41: {
            name: "19. 隐藏升级^2",
            done() {return (hasUpgrade("A", 52))},
            tooltip: "获得 A22", 
        },
        42: {
            name: "20. 完美的指数",
            done() {return (hasUpgrade("D", 21))},
            tooltip: "获得 D6", 
        },
        43: {
            name: "21. 第一个购买项",
            done() { return hasMilestone('D',2)},
            tooltip: "解锁 B 购买项",
        },
        44: {
            name: "22. 第1行增强",
            done() { return hasUpgrade('B',41)},
            tooltip: "解锁 Bb2",
        },
        45: {
            name: "23. 折扣",
            done() { return hasUpgrade('B',43)},
            tooltip: "获得 B18",
        },
        46: {
            name: "24. 多重效果",
            done() { return hasUpgrade('B',52)},
            tooltip: "获得 B22",
        },
        51: {
            name: "25. 非凡",
            done() { return hasMilestone('B',0)},
            tooltip: "获得一个 B 里程碑",
        },
        52: {
            name: "26. 隐藏升级^3",
            done() {return (hasChallenge("A", 32))},
            tooltip: "完成 Ac6", 
        },
        53: {
            name: "27. 无限？",
            done() {return player.A.total.gte('1e308')},
            tooltip: "获得 1e308 A", 
        },
        54: {
            name: "28. 随心所欲",
            done() { return hasMilestone('B',2)},
            tooltip: "自动购买 B 购买项",
        },
        55: {
            name: "29. 常数^4",
            done() {return (hasUpgrade("B", 72))},
            tooltip: "获得 B32", 
        },
        56: {
            name: "30. 4倍自动",
            done() { return hasMilestone('B',4)},
            tooltip: "D 被动生成",
        },
        61: {
            name: "31. A中的一年",
            done() { return (challengeCompletions("A", 41) >= 5)},
            tooltip: "在 Ac7 中获得 1e2025 点数",
        },
        62: {
            name: "32. A中的一年^2",
            done() { return player.A.total.gte('1e2025')},
            tooltip: "获得 1e2025 A",
        },
        63: {
            name: "33. 一组时间墙^2",
            done() {return (hasUpgrade("A", 65))},
            tooltip: "获得 A30", 
        },
        64: {
            name: "34. 此处通胀",
            done() {return (hasUpgrade("B", 82))},
            tooltip: "获得 B37", 
        },
        65: {
            name: "35. 'E'指数",
            done() {return player.E.total.gte('1')}, 
            tooltip: "获得 1 E", 
        },
        66: {
            name: "36. 点击它！",
            done() {return player.E.total.gte('1000')}, 
            tooltip: "获得 1000 E", 
        },
        71: {
            name: "37. 4种成分",
            done() {return (hasMilestone("E", 2))},
            tooltip: "解锁 E 挑战", 
        },
        72: {
            name: "38. 点击亿万富翁",
            done() {return player.E.total.gte('1e9')}, 
            tooltip: "获得 1e9 E", 
        },
        73: {
            name: "39. 仅为E",
            done() { return (challengeCompletions("E", 11) >= 3)},
            tooltip: "完成 Ec1x3",
        },
        74: {
            name: "40. 更大的时间墙",
            done() {return (challengeCompletions("E", 12) >= 2)},
            tooltip: "完成 Ec2x2", 
        },
        75: {
            name: "41. 10000 不错",
            done() {return player.points.gte('1e10000')},
            tooltip: "获得 1e10000 点数",
        },
        76: {
            name: "42. 3个‘反物质星系’",
            done() {return (hasUpgrade("E", 45))},
            tooltip: "获得 E20", 
        },
        81: {
            name: "43. ‘985’",
            done() {return (hasUpgrade("E", 54))},
            tooltip: "获得 E24", 
        },
        82: {
            name: "44. 挑战^2",
            done() {return (challengeCompletions("E", 22) >= 1)},
            tooltip: "完成 Ec4x1",
        },
        83: {
            name: "45. 隐藏升级^4",
            done() {return (hasUpgrade("E", 64))},
            tooltip: "获得 E29", 
        },
        84: {
            name: "46. 强力 666",
            done() { return player.D.points.gte('1e666')},
            tooltip: "获得 1e666 D",
        },
        85: {
            name: "47. 不再点击？",
            done() {return (hasMilestone('E',10))},
            tooltip: "获得 10倍 E 被动",
        },
        86: {
            name: "48. Emmm...",
            done() {return (hasMilestone('Z',9))},
            tooltip: "解锁 Em", 
        },
        91: {
            name: "49. Em 增强",
            done() {return player.E.Em.gte('1e10')},
            tooltip: "获得 1e10 Em",
        },
        92: {
            name: "50. 古戈尔 E",
            done() {return player.E.points.gte('1e100')},
            tooltip: "获得 1e100 E",
        },
        93: {
            name: "51. 回归",
            done() {return (hasUpgrade("E", 92))},
            tooltip: "获得 E42", 
        },
        94: {
            name: "52. 线性",
            done() {return (challengeCompletions("E", 32) >= 1)},
            tooltip: "完成 Ec6x1",
        },
        95: {
            name: "53. Ek 红宝石",
            done() {return (hasMilestone('Z',10))},
            tooltip: "解锁 Ek", 
        },
        96: {
            name: "54. 隐藏升级^5",
            done() {return (hasUpgrade("E", 101))},
            tooltip: "获得 E46", 
        },
        101: {
            name: "55. GOODRAGE",
            done() {return player.E.points.gte('2e222')},
            tooltip: "获得 2e222 E",
        },
        102: {
            name: "56. 再次通胀",
            done() {return (hasUpgrade("E", 104))},
            tooltip: "获得 E49", 
        },
        103: {
            name: "57. 提升指数",
            done() {return (challengeCompletions("E", 42) >= 2)},
            tooltip: "完成 Ec8x2",
        },
        104: {
            name: "58. 50个升级",
            done() {return (hasUpgrade("E", 105))},
            tooltip: "获得 E50", 
        },
        105: {
            name: "59. 10个Babs",
            done() {return (hasMilestone("E", 18))},
            tooltip: "解锁 Eb10", 
        },
        106: {
            name: "60. 通胀至 ee5",
            done() {return player.points.gte('e100000')},
            tooltip: "获得 e100000 点数",
        },
        111: {
            name: "61. 复杂",
            done() {return (challengeCompletions("E", 42) >= 5)},
            tooltip: "完成 Ec8x5",
        },
        112: {
            name: "62. 1000S E",
            done() {return player.E.points.gte('1e1000')},
            tooltip: "获得 1e1000 E",
        },
        113: {
            name: "63. 未被软上限",
            done() {return player.E.Ek.gte('1e590')},
            tooltip: "获得 1e590 Ek",
        },
        114: {
            name: "64. 真正的升格",
            done() {return player.F.total.gte('1')},
            tooltip: "获得 1 F",
        },
        115: {
            name: "65. 再次升格",
            done() {return player.F.total.gte('2')},
            tooltip: "获得 2 F",
        },
        116: {
            name: "66. 三杀",
            done() {return player.F.total.gte('3')},
            tooltip: "获得 3 F",
        },
        121: {
            name: "67. 自动 E",
            done() {return player.F.total.gte('6')},
            tooltip: "获得 6 F",
        },
        122: {
            name: "68. 2个F很简单",
            done() {return player.E.points.gte('1.8e1099')},
            tooltip: "一次获得 2 F",//获得 1.8e1099 E
        },
        123: {
            name: "69. 无需等待",
            done() {return (hasMilestone("F", 4))},
            tooltip: "保留 E 升级", 
        },
        124: {
            name: "70. 无点击",
            done() {return (hasMilestone("F", 5))},
            tooltip: "保留 E 挑战", 
        },
        125: {
            name: "71. 氟",
            done() {return (hasUpgrade("F", 24))},
            tooltip: "获得 F9", 
        },
        126: {
            name: "72. AT 通胀",
            done() {return (hasMilestone("F", 7))},
            tooltip: "获得 F 里程碑 7", 
        },
        131: {
            name: "73. 隐藏升级^6",
            done() {return (hasUpgrade("C", 41))},
            tooltip: "获得 C16", 
        },
        132: {
            name: "74. 真正的挑战",
            done() {return (challengeCompletions("F", 11) >= 1)},
            tooltip: "完成 Fc1x1",
        },
        133: {
            name: "75. 更多通胀-e5e5",
            done() {return player.points.gte('e500000')},
            tooltip: "获得 e500000 点数",
        },
        134: {
            name: "76. 超级激增",
            done() {return (hasUpgrade("F", 34))},
            tooltip: "获得 F14", 
        },
        135: {
            name: "77. 100万 数量级",
            done() {return player.points.gte('e1000000')},
            tooltip: "获得 e1000000 点数",
        },
        136: {
            name: "78. 受限",
            done() {return (challengeCompletions("F", 11) >= 3)},
            tooltip: "完成 Fc1x3",
        },
        141: {
            name: "79. 如此之快？",
            done() {return (hasMilestone("F", 9))},
            tooltip: "获得 F 被动生成", 
        },
        142: {
            name: "80. 为何更快？",
            done() {return player.points.gte('e3000000')},
            tooltip: "获得 e3000000 点数<br>还有软上限吗？",
        },
        143: {
            name: "81. 真正的 AD",
            done() {return (getBuyableAmount('F',11))>=1},
            tooltip: "获得 F 维度 1", 
        },
        144: {
            name: "82. 迭代",
            done() {return (getBuyableAmount('F',13))>=1},
            tooltip: "获得 F 维度 3", 
        },
        145: {
            name: "83. 移除的软上限",
            done() {return player.points.gte('e1e7')},
            tooltip: "获得 e1e7 点数",
        },
        146: {
            name: "84. 没有维度助推？",
            done() {return (getBuyableAmount('F',22))>=1},
            tooltip: "获得 F 维度 5.<br>在AD中，需要1次维度助推才能解锁AD5", 
        },
        151: {
            name: "85. 顺从？",
            done() {return (getBuyableAmount('F',32))>=1},
            tooltip: "获得 F 维度 8.", 
        },
        152: {
            name: "86. 巨大通胀",
            done() {return player.points.gte('e1e8')},
            tooltip: "获得 e1e8 点数",
        },
        153: {
            name: "87. massive_inf",
            done() {return player.points.gte('e1e9')},
            tooltip: "获得 e1e9 点数",
        },
        154: {
            name: "88. 只需等待",
            done() {return (challengeCompletions("F", 12) >= 3)},
            tooltip: "完成 Fc2x3", 
        },
        155: {
            name: "89. 类似于星系...",
            done() {return (getBuyableAmount('F',102)>=1)},
            tooltip: "获得一个刻度助推",
        },
        156: {
            name: "90. F3.0！",
            done() {return player.points.gte('e1e10')},
            tooltip: "获得 e1e10 点数",
        },
        161: {
            name: "91. 退出控制",
            done() {return (hasUpgrade("F", 63))},
            tooltip: "获得 F28", 
        },
        162: {
            name: "92. 半无限",
            done() {return player.F.F1.gte('1e154')},
            tooltip: "获得 1e154 F1", 
        },
        163: {
            name: "93. 兆级激增",
            done() {return player.points.gte('e1e16')},
            tooltip: "获得 e1e16 点数",
        },
        164: {
            name: "94. 这是软上限吗？",
            done() {return player.F.F1.gte('1e500')},
            tooltip: "获得 1e500 F1.<br>在AD中，AM在2^1024处硬上限（突破前），之后开始折算（突破后）。", 
        },
        165: {
            name: "95. effariG",
            done() {return player.G.total.gte('1')},
            tooltip: "获得 1 G",
        },
        166: {
            name: "96. 折算星系",
            done() {return (getBuyableAmount('F',102)>=5)},
            tooltip: "获得 5 个刻度助推",
        },
        171: {
            name: "97. 移除一个折算",
            done() {return (hasUpgrade("G", 15))},
            tooltip: "获得 G5", 
        },
        172: {
            name: "98. 为何它在衰减？",
            done() {return player.E.Ek.gte('ee15')},
            tooltip: "获得 ee15 Ek<br>在之前的版本中，Ek效果在大数后会减少。这在后来的版本中被修复了。", 
        },
        173: {
            name: "99. x2 IP",
            done() {return (getBuyableAmount('G',11)>=1)},
            tooltip: "获得一个 Gc1<br>在AD中，在16个无限升级下方有一个x2 IP购买项。<br>代价是x10（在e3e6和e6e6之间为x1e10），效果是x2。", 
        },
        174: {
            name: "100. 特权",
            done() {return (hasUpgrade("F", 71))},
            tooltip: "获得 F31", 
        },
        175: {
            name: "101. G 力量",
            done() {return (challengeCompletions("G", 11) >= 3)},
            tooltip: "完成 Gc1x3",
        },
        176: {
            name: "102. 真正无折算",
            done() {return (hasUpgrade("G", 32))},
            tooltip: "获得 G12", 
        },
        181: {
            name: "103. 年^3",
            done() { return player.F.F1.gte('1e2024')},
            tooltip: "获得 1e2024 F1",
        },
        182: {
            name: "104. 回归？",
            done() {return (hasUpgrade("F", 81))},
            tooltip: "获得 F36", 
        },
        183: {
            name: "105. 真正无折算^2",
            done() {return (challengeCompletions("G", 12) >= 3)},
            tooltip: "完成 Gc2x3", 
        },
        184: {
            name: "106. 立方？",
            done() {return (getBuyableAmount('F',102)>=10)},
            tooltip: "获得 10 个刻度助推",
        },
        185: {
            name: "107. 膨胀",
            done() {return (challengeCompletions("G", 12) >= 5)},
            tooltip: "完成 Gc2x5", 
        },
        186: {
            name: "108. 古戈尔普勒克斯",
            done() {return player.points.gte('e1e100')},
            tooltip: "获得 e1e100 点数",
        },
        191: {
            name: "109. 通胀中的通胀",
            done() {return (hasUpgrade("G", 35))},
            tooltip: "获得 G15", 
        },
        192: {
            name: "110. 昂贵！",
            done() {return (challengeCompletions("G", 21) >= 3)},
            tooltip: "完成 Gc3x3",
        },
        193: {
            name: "111. F3.5",
            done() {return player.points.gte('ee100000')},
            tooltip: "获得 ee100000 点数",
        },
        194: {
            name: "112. 吉咖激增",
            done() {return (challengeCompletions("G", 21) >= 5)},
            tooltip: "完成 Gc3x5", 
        },
        195: {
            name: "113. 对数化星系",
            done() {return (challengeCompletions("G", 22) >= 1)},
            tooltip: "完成 Gc4x1", 
        },
        196: {
            name: "114. 为F1去折算",
            done() {return (hasUpgrade("G", 44))},
            tooltip: "获得 G19", 
        },
        201: {
            name: "115. F3_F1",
            done() { return player.F.F1.gte('ee10')},
            tooltip: "获得 e1e10 F1",
        },
        202: {
            name: "116. F4.0！",
            done() {return player.points.gte('eee10')},
            tooltip: "获得 eee10 点数",
        },
        203: {
            name: "117. ID 但略有不同",
            done() {return (hasMilestone("G", 8))},
            tooltip: "解锁 F2.<br>在AD中，ID是乘性的而非指数性的。", 
        },
        204: {
            name: "118. 我们还需要G挑战？",
            done() {return (hasUpgrade("G", 52))},
            tooltip: "获得 G22", 
        },
        205: {
            name: "119. 超越反物质",
            done() { return player.F.F1.gte('e9e15')},
            tooltip: "获得 e9e15 F1.<br>在AD中，AM在e9e15处硬上限（可在Pelle之前达到。在Pelle中显示为‘END’并到达终局）。",
        },
        206: {
            name: "120. F5.0！！",
            done() {return player.points.gte('eeee10')},
            tooltip: "获得 eeee10 点数",
        },
        211: {
            name: "121. 平衡失效",
            done() {return (hasUpgrade("G", 55))},
            tooltip: "获得 G25", 
        },
        212: {
            name: "122. 另一个‘反’",
            done() {return (hasMilestone("G", 14))},
            tooltip: "解锁 Gs.<br>Gs部分灵感来自瘟疫树。在PT中一些货币被命名为‘anti-xxx’。", 
        },
        213: {
            name: "123. F6 兆级激增",
            done() {return player.points.gte('10^^6')},
            tooltip: "获得 1F6 点数",
        },
        214: {
            name: "124. 指数-指数助推器",
            done() {return (getBuyableAmount('G',23)>=1)},
            tooltip: "获得一个 Gsb3",
        },
        215: {
            name: "125. PrPsc？",
            done() {return (hasUpgrade("G", 83))},
            tooltip: "解锁 Gsi", 
        },
        216: {
            name: "126. 仍然不是软上限",
            done() {return (getBuyableAmount('G',21)>=500)},
            tooltip: "获得 500 Gsb1",
        },
        221: {
            name: "127. 此处的永恒",
            done() {return (hasUpgrade("G", 101))},
            tooltip: "解锁 Gse", 
        },
        222: {
            name: "128. 神秘？",
            done() {return (hasUpgrade("G", 104))},
            tooltip: "获得 G49", 
        },
        223: {
            name: "129. 时间膨胀？",
            done() {return player.G.Gsetot.gte('1e1300')},
            tooltip: "获得 1e1300 Gse", 
        },
        224: {
            name: "130. 在G中创造现实",
            done() {return player.G.Gs.gte('e1e9')},
            tooltip: "获得 e1e9 Gs",
        },
        225: {
            name: "131. d1lated",
            done() {return (hasMilestone('G',19))},
            tooltip: "解锁 Gsb11-12",
        },
        226: {
            name: "132. +ERABY+E 1NFLA+10N",
            done() {return tmp.G.gsief.gte('1e12')},
            tooltip: "获得 1e12 Gsi 效果", 
        },
        231: {
            name: "133. 世界 n+1",
            done() {return (hasUpgrade("G", 115))},
            tooltip: "解锁 GG", 
        },
        232: {
            name: "134. 分离",
            done() {return player.G.GGtot.gte('15')},
            tooltip: "获得 15 GG", 
        },
        233: {
            name: "135. 奢侈",
            done() {return player.G.GGtot.gte('50')},
            tooltip: "获得 50 GG", 
        },
        234: {
            name: "136. 探索者",
            done() {return (upg("G", 123))},
            tooltip: "获得 G58", 
        },
        235: {
            name: "137. 迷途",
            done() {return player.G.GGtot.gte('200')},
            tooltip: "获得 200 GG", 
        },
        236: {
            name: "138. F7 一座真正的塔",
            done() {return player.points.gte('10^^7')},
            tooltip: "获得 1F7 点数",
        },
        241: {
            name: "139. 系统革命",
            done() {return (mil('G',22))},
            tooltip: "解锁 r5-7 生活质量（QoL）",
        },
        242: {
            name: "140. 延伸",
            done() {return player.G.GGtot.gte('500')},
            tooltip: "获得 500 GG", 
        },
        243: {
            name: "141. +ERABY+E PrPres",
            done() {return tmp.G.gseef.gte('1e12')},
            tooltip: "获得 1e12 Gse 第一效果", 
        },
        244: {
            name: "142. 古戈尔pleS",
            done() {return player.G.Gs.gte('e1e100')},
            tooltip: "获得 e1e100 Gs", 
        },
        245: {
            name: "143. 为了整棵树？",
            done() {return player.G.GGtot.gte('1400')},
            tooltip: "获得 1400 GG", 
        },
        246: {
            name: "144. 并非现实",
            done() {return player.H.points.gte('1')},
            tooltip: "获得 1 H", 
        },
        251: {
            name: "145. 破产",
            done() {return (upg("G",135))},
            tooltip: "解锁 t28", 
        },
        252: {
            name: "146. 为了整棵树！",
            done() {return player.G.GGtot.gte('3300')},
            tooltip: "获得 3300 GG", 
        },
        253: {
            name: "147. 混沌",
            done() {return player.H.harsh.gte('1')},
            tooltip: "获得 1 harsh", 
        },
        254: {
            name: "148. 迫近的无限",
            done() {return player.H.harsh.gte('1.8e308')},
            tooltip: "获得 1.8e308 harsh", 
        },
        255: {
            name: "149. 通往 F7s",
            done() {return (upg("H",75))},
            tooltip: "解锁 Hb9", 
        },
        256: {
            name: "150. 软上限 1-1",
            done() {return (upg("H",25))},
            tooltip: "获得 H10", 
        },
        261: {
            name: "151. 亢奋",
            done() {return (mil('H',4))},
            tooltip: "解锁 hyper（超）",
        },
        262: {
            name: "152. 那速度？",
            done() {return player.H.hyper.gte('1e10000')},
            tooltip: "获得 1e10000 hyper", 
        },
        263: {
            name: "153. 移除的软上限^2",
            done() {return (upg("H",83))},
            tooltip: "获得 H38", 
        },
        264: {
            name: "154. 安全的增强",
            done() {return n(getBuyableAmount("H",63)).gte(1)},
            tooltip: "获得 Hy6", 
        },
        265: {
            name: "155. 记得 sb6 吗？",
            done() {return (upg("H",33))},
            tooltip: "获得 H13", 
        },
        266: {
            name: "156. d1l4t3d",
            done() {return (mil('H',6))},
            tooltip: "增加 sb6 限制",
        },
        271: {
            name: "157. sn4p b4ck t0 r34l1ty",
            done() {return (mil('G',30))},
            tooltip: "获得 1 GsR",
        },
        272: {
            name: "158. 超越 ng+3",
            done() {return player.G.Gsetot.gte('e1e32')},
            tooltip: "获得 e1e32 Gse", 
        },
        273: {
            name: "159. -原子",
            done() {return player.G.Gsr.gte('1.8e308')},
            tooltip: "获得 1.8e308 GsR <br>atomic：一个在 cel7 后添加层的 AD 模组", 
        },
        274: {
            name: "160. 超级膨胀",
            // done:  function(){let s=n(0)
            //     for(let i=0;i<=3;i++) s=s.add(player.H.dh[i])
            //     return s.gte(5)},
            done() {return tmp.H.totdh.gte(5)},
            tooltip: "获得 5 dH（任意类型）", 
        },
        275: {
            name: "161. 阿列夫-1",
            done() {return player.H.dhp.gte('1.8e308')},
            tooltip: "获得 1.8e308 dH 点数", 
        },
        276: {
            name: "162. 起起落落",
            done:  function(){let m=n(0)
                for(let i=0;i<=5;i++) m=m.max(player.H.dh[i])
                return m.gte(10)},
            tooltip: "获得 10 单一类型的 dH", 
        },
        281: {
            name: "163. GooGolplEx",
            done() {return player.G.Gsetot.gte('e1e100')},
            tooltip: "获得 e1e100 Gse", 
        },
        282: {
            name: "164. 软上限 3-3",
            done() {return player.H.dh[4].gte(3)},
            tooltip: "获得 3 dH5", 
        },
        283: {
            name: "165. f3.33f",
            done() {return player.H.harsh.gte('10^^3.333')},
            tooltip: "获得 F3.333 harsh（等于多少？）", 
        },
        284: {
            name: "166. 快与慢",
            done() {return player.points.gte('10^^7.602')},
            tooltip: "获得 4F7 点数", 
        },
        285: {
            name: "167. 3.5 并不疯狂",
            done() {return player.G.Gs.gte('ee100000')},
            tooltip: "获得 ee100000 Gs", 
        },
        286: {
            name: "168. fullyHarshGlitch",
            done() {return player.H.points.gte('1000')},
            tooltip: "自动购买 Hb3/Hy3", 
        },
        291: {
            name: "169. 亢奋的Hyper",
            done() {return player.H.hyper.gte('ee1000000')},
            tooltip: "获得 ee1000000 hyper", 
        },
        292: {
            name: "170. 被诅咒",
            done() {return tmp.H.totdh.gte(6666)},
            tooltip: "获得 6666 dH（任意类型）", 
        },
        293: {
            name: "171. 1e10 静态？",
            done() {return player.H.points.gte('1e10')},
            tooltip: "获得 1e10 H", 
        },
        294: {
            name: "172. 快到了",
            done() {return player.points.gte('10^^8')},
            tooltip: "获得 1F8 点数", 
        },
        295: {
            name: "173. 我无法平衡它！！",
            done() {return player.points.gte('10^^9')},
            tooltip: "获得 1F9 点数", 
        },
        296: {
            name: "174. 崩塌",
            done() {return player.I.points.gte(1)},
            tooltip: "获得 1 I", 
        },
        301: {
            name: "175. GG^2 在 4",
            done() {return mil('I',2)},
            tooltip: "解锁 生活质量（Qol）点数", 
        },
        302: {
            name: "176. 等等等等",
            done() {return player.I.qolpoints.gte(1e5)},
            tooltip: "获得 1e5 生活质量点数", 
        },
        303: {
            name: "177. 点击击击击",
            done() {return tmp.I.comp.gte(1)},
            tooltip: "完成一次速通", 
        },
        304: {
            name: "178. 最大化它",
            done() {return gcs('I',16)},
            tooltip: "获得 kp9", 
        },
        305: {
            name: "179. iniskiped",
            done() {return n(challengeCompletions('I',11)).gte(10)},
            tooltip: "完成 Ic1x10", 
        },
        306: {
            name: "180. 转换",
            done() {return n(challengeCompletions('I',22)).gte(1)},
            tooltip: "完成 Ic4x1", 
        },
        311: {
            name: "181. secgros",
            done() {return !player.I.m[0].gte(120)},
            tooltip: "行4 在120秒内重置", 
        },
        312: {
            name: "182. r4 很简单",
            done() {return tmp.I.comp.gte(35)},
            tooltip: "完成所有速通", 
        },
        313: {
            name: "183. 第10层！",
            done() {return player.J.best.gte(1)},
            tooltip: "获得 1 J", 
        },
        314: {
            name: "184. 好吧突破",
            done() {return player.J.bp.gte('1e308')},
            tooltip: "获得 1e308 突破点数", 
        },
        315: {
            name: "185. 巨大的削弱",
            done() {return player.I.hi.gte('10')},
            tooltip: "获得 10 硬化 I", 
        },
        316: {
            name: "186. 年 但 +1",//'有区别吗？' 最初，在 F1000 点数
            done() {return player.points.gte('10^^2025')},
            tooltip: "获得 1F2025 点数", 
        },
        321: {
            name: "187. d1_l4_t3_d..",
            done() {return player.J.bp.gte('e1e6')},
            tooltip: "获得 e1e6 突破点数 <br>这也是 No.destruction 3,2,1 成就！", 
        },
        322: {
            name: "188. 经验上不可能",
            done() {return player.I.hi.gte('150')},
            tooltip: "获得 150 硬化 I", 
        },
        323: {
            name: "189. 走 Fe308！",
            done() {return player.J.ss.gte('1e308')},
            tooltip: "获得 1e308 slog 加速器", 
        },
        324: {
            name: "190. 燃烧你的点数",
            done() {return player.I.res[0].gte(40)},
            tooltip: "将点数的诅咒选项设为 40", 
        },
        325: {
            name: "191. 一次转世",
            done() {return player.points.gte('10^^1e6')},
            tooltip: "获得 F1e6 点数 <br>源自‘职业树’。Fe6 解锁虚空和 Re 层。", 
        },
        326: {
            name: "192. IMR 墙墙墙",
            done() {return gba('J',101).gte(10)},
            tooltip: "达到 BP 等级 10", 
        },
        331: {
            name: "193. 飞速",
            done() {return tmp.J.ssef.gte('2019')},
            tooltip: "获得 2019 slog 加速器效果", 
        },
        332: {
            name: "194. 无限品质",
            done() {return player.I.qolpoints.gte('e9e15')},
            tooltip: "获得 e9e15 生活质量点数", 
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>成就: " + player.ac.achievements.length + "/194 </h4>"
    }
    ], "blank", "blank", "achievements", ],
},
)