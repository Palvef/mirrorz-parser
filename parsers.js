const nju = require("./nju");
const neusoft = require("./neusoft");
const tuna = require("./tuna");
const bfsu = require("./bfsu");
const nano = require("./nano");
const neo = require("./neo");
const hit = require("./hit");
const cqu = require("./cqu");
const xjtu = require("./xjtu");
const neu = require("./neu");
const pku = require("./pku");
const byrio = require("./byrio");
const cqupt = require("./cqupt");
const ynuosa = require("./ynuosa");
const xtom_hk = require("./xtom-hk");
const xtom = require("./xtom");
const xtom_de = require("./xtom-de");
const xtom_nl = require("./xtom-nl");
const xtom_ee = require("./xtom-ee");
const xtom_jp = require("./xtom-jp");
const xtom_au = require("./xtom-au");
const njupt = require("./njupt");
const wsyu = require("./wsyu");
const bjtu = require("./bjtu");
const bupt = require("./bupt");
const njtech = require("./njtech");
const geekpie = require("./geekpie");
const qlut = require("./qlut");

const config = require('./config.json')

const site = (abbr) => config.url + '/static/json/site/' + abbr + '.json';

module.exports = {
  "nju"     :             nju                       ,
  "neusoft" : async () => neusoft (site("neusoft" )),
  "tuna"    : async () => tuna    (site("tuna"    )),
  "bfsu"    : async () => bfsu    (site("bfsu"    )),
  "nano"    : async () => nano    (site("nano"    )),
  "neo"     : async () => neo     (site("neo"     )),
  "hit"     : async () => hit     (site("hit"     )),
  "cqu"     : async () => cqu     (site("cqu"     )),
  "xjtu"    : async () => xjtu    (site("xjtu"    )),
  "neu"     : async () => neu     (site("neu"     )),
  "pku"     : async () => pku     (site("pku"     )),
  "byrio"   : async () => byrio   (site("byrio"   )),
  "cqupt"   : async () => cqupt   (site("cqupt"   )),
  "ynuosa"  : async () => ynuosa  (site("ynuosa"  )),
  "xtom-hk" : async () => xtom_hk (site("xtom-hk" )),
  "xtom"    : async () => xtom    (site("xtom"    )),
  "xtom-de" : async () => xtom_de (site("xtom-de" )),
  "xtom-nl" : async () => xtom_nl (site("xtom-nl" )),
  "xtom-ee" : async () => xtom_ee (site("xtom-ee" )),
  "xtom-jp" : async () => xtom_jp (site("xtom-jp" )),
  "xtom-au" : async () => xtom_au (site("xtom-au" )),
  "njupt"   : async () => njupt   (site("njupt"   )),
  "wsyu"    :             wsyu                      ,
  "bjtu"    : async () => bjtu    (site("bjtu"    )),
  "bupt"    : async () => bupt    (site("bupt"    )),
  "njtech"  : async () => njtech  (site("njtech"  )),
  "geekpie" : async () => geekpie (site("geekpie" )),
  "qlut"    : async () => qlut    (site("qlut"    )),
};
