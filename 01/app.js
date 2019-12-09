
const fuel = function(m) { return Math.round(m / 3 - ((m / 3) % 1)) - 2; };

let list;
// fetch isn't working for me, I got a cors message but changing the mode to no-cors didn't help
// so I wonder if advent of code isn't letting me fetch from localhost for some reason
// fetch(
//     "https://adventofcode.com/2019/day/1/input",
//     {
//         "credentials":"include",
//         "headers":{
//             "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
//             "accept-language":"en-US,en;q=0.9",
//             "cache-control":"no-cache",
//             "pragma":"no-cache",
//             "sec-fetch-mode":"navigate",
//             "sec-fetch-site":"same-origin",
//             "sec-fetch-user":"?1",
//             "upgrade-insecure-requests":"1"
//         },
//         "referrer":"https://adventofcode.com/2019/day/1",
//         "referrerPolicy":"no-referrer-when-downgrade",
//         "body":null,
//         "method":"GET",
//         "mode":"no-cors"
//     })
//     .then((t) => t.text())
//     .then((s) => list = s);



const data = "51753\n" +
    "53456\n" +
    "128133\n" +
    "118219\n" +
    "136490\n" +
    "113318\n" +
    "134001\n" +
    "99775\n" +
    "84746\n" +
    "68712\n" +
    "104274\n" +
    "72530\n" +
    "101517\n" +
    "65533\n" +
    "98719\n" +
    "100215\n" +
    "144296\n" +
    "114166\n" +
    "62930\n" +
    "118494\n" +
    "144800\n" +
    "97604\n" +
    "112836\n" +
    "73074\n" +
    "62591\n" +
    "99278\n" +
    "94544\n" +
    "73035\n" +
    "146631\n" +
    "148331\n" +
    "144573\n" +
    "121956\n" +
    "94088\n" +
    "60092\n" +
    "126397\n" +
    "117285\n" +
    "122292\n" +
    "77413\n" +
    "145860\n" +
    "76968\n" +
    "64790\n" +
    "58479\n" +
    "94035\n" +
    "148441\n" +
    "78999\n" +
    "74329\n" +
    "145182\n" +
    "129497\n" +
    "106765\n" +
    "67046\n" +
    "58702\n" +
    "123344\n" +
    "63866\n" +
    "121123\n" +
    "126808\n" +
    "115190\n" +
    "86467\n" +
    "136359\n" +
    "148718\n" +
    "88225\n" +
    "126185\n" +
    "82745\n" +
    "142546\n" +
    "149788\n" +
    "137524\n" +
    "114690\n" +
    "68075\n" +
    "60244\n" +
    "127157\n" +
    "123719\n" +
    "87843\n" +
    "107714\n" +
    "51281\n" +
    "92123\n" +
    "146495\n" +
    "50761\n" +
    "130708\n" +
    "53103\n" +
    "75289\n" +
    "121675\n" +
    "61726\n" +
    "70674\n" +
    "101755\n" +
    "97736\n" +
    "100141\n" +
    "81085\n" +
    "55493\n" +
    "73071\n" +
    "85321\n" +
    "119965\n" +
    "147313\n" +
    "105201\n" +
    "107107\n" +
    "130007\n" +
    "67834\n" +
    "137614\n" +
    "140848\n" +
    "64038\n" +
    "106078\n" +
    "71447";

data.split(String.fromCharCode(10)).reduce((acc, curr) => acc + fuel(Number(curr)), 0); //3373568