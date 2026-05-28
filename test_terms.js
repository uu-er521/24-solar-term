// 从 index.html 中提取的天文算法测试
var TERM_NAMES = ["立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至","小寒","大寒"];
var TERM_LONGITUDES = [315, 330, 345, 0, 15, 30, 45, 60, 75, 90, 105, 120,
                       135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300];

var RAD = Math.PI / 180;
function jdToDate(jd) { return new Date((jd - 2440587.5) * 86400000); }
function sunLongitude(jd) {
    var T = (jd - 2451545.0) / 365250;
    var L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    var M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
    var C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M * RAD)
          + (0.019993 - 0.000101 * T) * Math.sin(2 * M * RAD)
          + 0.000289 * Math.sin(3 * M * RAD);
    var lon = L0 + C;
    return ((lon % 360) + 360) % 360;
}
function getTermDate(year, termIndex) {
    var targetLon = TERM_LONGITUDES[termIndex];
    var y = (termIndex >= 22) ? year + 1 : year;
    var startJD = 2451551.0 + (y - 2000) * 365.2422 + termIndex * 15.2;
    var jd = startJD;
    for (var iter = 0; iter < 8; iter++) {
        var lon = sunLongitude(jd);
        var diff = (lon - targetLon + 360) % 360;
        if (diff > 180) diff -= 360;
        jd -= diff * 1.0;
        if (Math.abs(diff) < 0.0001) break;
    }
    return jdToDate(jd);
}

// 测试 2025 年的所有节气
console.log("=== 2025年节气日期（天文算法） ===");
for (var i = 0; i < 24; i++) {
    var d = getTermDate(2025, i);
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var h = d.getHours();
    var min = d.getMinutes();
    var dayOfYear = Math.floor((d - new Date(2025, 0, 1)) / 86400000) + 1;
    console.log(TERM_NAMES[i] + ": " + month + "月" + day + "日 " + h + ":" + min + " (年第" + dayOfYear + "天)");
}

// 显示排序后结果
console.log("\n=== 排序验证 ===");
var candidates = [];
for (var y = 2024; y <= 2026; y++) {
    for (var i = 0; i < 24; i++) {
        var d = getTermDate(y, i);
        candidates.push({ date: d, index: i, name: TERM_NAMES[i] + "(" + y + ")" });
    }
}
candidates.sort(function(a,b) { return a.date - b.date; });

var now = new Date(2025, 4, 23, 14, 0, 0); // 2025年5月23日
console.log("\n当前时间: " + now);
for (var i = 0; i < candidates.length; i++) {
    if (candidates[i].date >= now) {
        console.log("下一个节气: " + candidates[i].name + " -> " + candidates[i].date);
        if (i > 0) console.log("上一个节气: " + candidates[i-1].name + " -> " + candidates[i-1].date);
        break;
    }
}
