var exp = [ //i 레벨에서 레벨업에 필요한 경험치 량
    0, // 미사용
    100, //exp[1] 1->2
    200,
    300,
    400,
    500,
    660,
    700,
    800,
    1000,
    1100,
    1200,
    1320,
    1440,
    1680,
    1800,
    1920,
    2160,
    2280,
    2520,
    2800,
    2940,
    3220,
    3500,
    3780,
    4200,
    4480,
    4900,
    5320,
    5740,
    6630,
    6880,
    7520,
    8160,
    8960,
    9860,
    10880,
    12070,
    13260,
    14580,
    16020,
    17820,
    19760,
    21850,
    24400,
    27300,
    30800,
    34500,
    38400,
    44200,
    47500,
    54000,
    58800,
    63800,
    69000,
    76800,
    80600,
    89100,
    95200,
    104400,
    111000,
    117800,
    128000,
    132000,
    142800,
    150500,
    158400,
    166500,
    174800, //exp[68] 68->69
    348000,
    383500,
    420000,
    457500,
    496000, //exp[69] 73->74
];

var exp_sum = [0]; //1 레벨부터 i+1 레벨까지 필요한 경험치 량
for (i = 1; i < exp.length; i++) {
    exp_sum[i] = exp_sum[i-1] + exp[i];
}
// console.log("exp", exp); 
// console.log("exp_sum", exp_sum); 

function exp_refresh(x) {
    document.getElementById("now_exp_text").innerHTML = "현제 경험치 " + x.value + "%";
}

function exp_cal() {
    var now_lvl = document.getElementById("now_lvl").value; //현제 레벨
    var goal_lvl = document.getElementById("goal_lvl").value; //목표 레벨
    var now_exp = document.getElementById("now_exp").value; //현제 경험치
    var goal_exp = Math.round(exp_sum[goal_lvl - 1] - exp_sum[now_lvl - 1] - exp[now_lvl] * (now_exp / 100));
    if (goal_exp < 0) {
        document.getElementById("goal_exp").innerHTML = "필요 경험치량 : 0";
    }
    else if (!isNaN(goal_exp)) {
        document.getElementById("goal_exp").innerHTML = "필요 경험치량 : " + goal_exp;
    }
}

function goal_lvl_min(x) {
    var goal_lvl = document.getElementById("goal_lvl");
    goal_lvl.setAttribute('min', x.value);
    if (goal_lvl.value < x.value) {
        goal_lvl.value = x.value;
    }
}

function max_check(x) {
    var max = parseInt(x.getAttribute('max'));
    if (x.value > max) {
        x.value = max;
    }
}

window.onload = function () {
    alert("2.10 업데이트로 만렙 확장후 데이터를 수집해야합니다");
}