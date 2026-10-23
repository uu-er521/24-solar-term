    // 节气完整数据（融合官方文化信息）
    const solarTerms = [
        { name:"立春", date:"2月3日-5日", season:"spring", shortDesc:"东风解冻，蛰虫始振，鱼陟负冰。", custom:"迎春、鞭春牛、咬春", longDesc:"二十四节气之首，万物起始。民间有打春牛、食春饼习俗，象征农耕启动。", content:"东风破冰，蛰虫初醒，立春是二十四节气的开篇，宣告寒冬退场、万物复苏。民间迎春、鞭春牛，祈愿风调雨顺；食春饼、咬春菜，以鲜嫩滋味拥抱新生。这一天，天地间的生机悄然涌动，人间烟火与自然节律同频。\n天文：太阳到达黄经 315°，春季自此开端，天地之气由闭藏转向生发。\n物候：东风解冻，蛰虫始振，鱼上冰。\n习俗：迎春、鞭春牛、咬春，祈愿农事顺遂、年岁丰登。\n饮食：春饼、生菜、萝卜，取迎新之意。\n养生：早睡早起，舒缓情志，护持阳气，勿过早减衣。", poem:"律回岁晚冰霜少，春到人间草木知。便觉眼前生意满，东风吹水绿参差。—— 张栻《立春偶成》" },
        { name:"雨水", date:"2月18日-20日", season:"spring", shortDesc:"獭祭鱼，鸿雁来，草木萌动。", custom:"回娘屋、占稻色", longDesc:"气温回升，降水增多，川西一带出嫁女回娘家探望。", content:"气温回升，降水渐增，春雨润物，大地回暖。民间有回娘家、拉保保的习俗，祈佑孩童安康；湿冷渐消，草木抽芽，人间烟火在淅沥春雨中愈发温柔。此时的雨，是天地写给大地的情诗，温柔且有力量。\n天文：太阳到达黄经 330°，气温回升，降水由雪转雨。\n物候：獭祭鱼，鸿雁来，草木萌动。\n习俗：回娘家、送雨水，感念养育，祈福安康。\n饮食：春笋、蜂蜜、红枣，温润健脾。\n养生：防倒春寒，顾护脾胃，少酸多甘。", poem:"小楼一夜听春雨，深巷明朝卖杏花。矮纸斜行闲作草，晴窗细乳戏分茶。—— 陆游《临安春雨初霁》" },
        { name:"惊蛰", date:"3月5日-6日", season:"spring", shortDesc:"桃始华，仓庚鸣，鹰化为鸠。", custom:"吃梨、祭白虎", longDesc:"春雷乍响，蛰虫惊醒。吃梨寓意远离病害。", content:"春雷乍响，蛰伏生灵破土而出，万物从沉睡中苏醒。古时祭白虎、打小人、熏艾草，驱邪避灾；民间食梨，寓意远离病虫、顺遂安康。一声惊雷，震醒天地，也唤醒了繁忙的春耕。\n天文：太阳到达黄经 345°，春雷乍动，气温显著上升。\n物候：桃始华，仓庚鸣，鹰化为鸠。\n习俗：祭雷神、扫虫祟，祈求无病无灾。\n饮食：梨、芋头、荠菜，润肺清燥。\n养生：疏肝理气，平稳情绪，防肝火上炎。", poem:"微雨众卉新，一雷惊蛰始。田家几日闲，耕种从此起。—— 韦应物《观田家》" },
        { name:"春分", date:"3月20日-21日", season:"spring", shortDesc:"玄鸟至，雷乃发声，始电。", custom:"竖蛋、吃春菜", longDesc:"昼夜均分，民间立蛋游戏，祈求平衡安康。", content:"昼夜均分，寒暑平衡，春色平分人间。民间竖蛋、放风筝、踏青赏春，祭祀祖先；百花盛放，燕语莺啼，天地间一派明媚祥和。这一天，阴阳相半，万物均衡，藏着中式哲学的中庸之美。\n天文：太阳到达黄经 0°，昼夜均分，阴阳平衡。\n物候：玄鸟至，雷乃发声，始电。\n习俗：竖蛋、踏青、放风筝、祭日。\n饮食：春菜、汤圆、香椿，调和寒热。\n养生：作息规律，适度运动，保持身心平衡。", poem:"胜日寻芳泗水滨，无边光景一时新。等闲识得东风面，万紫千红总是春。—— 朱熹《春日》" },
        { name:"清明", date:"4月4日-6日", season:"spring", shortDesc:"桐始华，田鼠化鴽，虹始见。", custom:"扫墓、踏青、插柳", longDesc:"既是节气又是节日，追思与迎春相融。", content:"气清景明，万物皆显，兼具自然与人文双重内涵。扫墓祭祖、缅怀先人，是血脉的传承；踏青、插柳、放风筝，是对生机的拥抱。食青团、艾饺，以清润滋味，寄思念与希望。\n天文：太阳到达黄经 15°，气清景明，万物皆显。\n物候：桐始华，田鼠化为鴽，虹始见。\n习俗：扫墓祭祖、踏青插柳、寒食禁火。\n饮食：青团、馓子、清明粿，清淡应季。\n养生：疏肝解郁，防过敏，避风寒湿邪。", poem:"清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。—— 杜牧《清明》" },
        { name:"谷雨", date:"4月19日-21日", season:"spring", shortDesc:"萍始生，鸣鸠拂羽，戴胜降桑。", custom:"喝谷雨茶、食香椿", longDesc:"雨生百谷，南方采谷雨茶，清火明目。", content:"雨生百谷，农事繁忙，是春季最后一个节气。此时播种移苗、埯瓜点豆，民间赏牡丹、喝谷雨茶，清热除湿。春雨滋养土地，也滋养着人间的丰收期盼，春的生机在此刻抵达顶峰。\n天文：太阳到达黄经 30°，雨生百谷，春季最后一气。\n物候：萍始生，鸣鸠拂其羽，戴胜降于桑。\n习俗：祭仓颉、赏牡丹、走谷雨。\n饮食：谷雨茶、香椿、新笋，祛湿健脾。\n养生：祛湿排毒，调补脾胃，为入夏做准备。", poem:"谷雨如丝复似尘，煮瓶浮蜡正尝新。牡丹破萼樱桃熟，未许飞花减却春。—— 范成大《晚春田园杂兴》" },
        { name:"立夏", date:"5月5日-6日", season:"summer", shortDesc:"蝼蝈鸣，蚯蚓出，王瓜生。", custom:"称人、吃蛋", longDesc:"夏季开始，尝新活动，秤人祈福。", content:"夏日伊始，万物繁茂，气温攀升，绿荫渐浓。民间迎夏、尝新、称人，祈求康健无病；食青梅、品新茶，以清爽滋味迎接盛夏。告别春的温柔，迎来夏的热烈，天地万物肆意生长。\n天文：太阳到达黄经 45°，夏季开始，万物至此皆长大。\n物候：蝼蝈鸣，蚯蚓出，王瓜生。\n习俗：尝新、斗蛋、迎夏，祈求康健顺遂。\n饮食：立夏饭、鸭蛋、青梅，清补不腻。\n养生：养心安神，少怒多静，防心火过旺。", poem:"晴日暖风生麦气，绿阴幽草胜花时。石榴开遍透帘明，树阴满地日当午。—— 王安石《初夏即事》" },
        { name:"小满", date:"5月20日-22日", season:"summer", shortDesc:"苦菜秀，靡草死，麦秋至。", custom:"祭车神、吃苦菜", longDesc:"麦类灌浆，小得盈满，宜食苦菜。", content:"夏熟作物籽粒渐满，却未成熟，得名小满。民间祭车神、祈丰收，寓意知足常乐；麦田泛黄，蚕事繁忙，天地间藏着满而不盈的东方智慧。小得盈满，是人生最好的状态。\n天文：太阳到达黄经 60°，夏熟作物籽粒渐满，尚未成熟。\n物候：苦菜秀，靡草死，麦秋至。\n习俗：祭车神、祈蚕，祝祷丰收。\n饮食：苦菜、黄瓜、樱桃，清热祛湿。\n养生：防湿热内蕴，清淡饮食，勿贪凉。", poem:"夜莺啼绿柳，皓月醒长空。最爱垄头麦，迎风笑落红。—— 欧阳修《五绝・小满》" },
        { name:"芒种", date:"6月5日-7日", season:"summer", shortDesc:"螳螂生，鹏始鸣，反舌无声。", custom:"煮青梅、安苗", longDesc:"忙于夏收夏种，皖南有安苗祭祀。", content:"有芒之谷可种，夏收夏种至忙，是一年中最繁忙的节气。民间送花神、煮青梅，告别春景，迎接盛夏；麦浪金黄，稻禾青青，汗水浇灌着丰收的希望。\n天文：太阳到达黄经 75°，麦类有芒，夏收夏种最忙。\n物候：螳螂生，鵙始鸣，反舌无声。\n习俗：送花神、安苗、煮梅。\n饮食：青梅、绿豆汤、桑葚，生津解暑。\n养生：防暑祛湿，保证午休，顾护心气。", poem:"梅子金黄杏子肥，麦花雪白菜花稀。日长篱落无人过，惟有蜻蜓蛱蝶飞。—— 范成大《四时田园杂兴?其二》" },
        { name:"夏至", date:"6月21日-22日", season:"summer", shortDesc:"鹿角解，蝉始鸣，半夏生。", custom:"吃夏至面、祭地", longDesc:"白昼最长，北方吃面尝新麦。", content:"白昼最长，黑夜最短，阳气至极，阴气始生。民间祭神祭祖、吃夏至面，寓意尝新祈福；蝉鸣阵阵，荷风送香，盛夏的热烈在此刻尽情绽放。\n天文：太阳到达黄经 90°，白昼最长，阳极阴生。\n物候：鹿角解，蝉始鸣，半夏生。\n习俗：祭神祀祖、消夏避伏、吃面。\n饮食：夏至面、绿豆、苦瓜，清心降火。\n养生：静养勿躁，避大汗伤阳，晚睡早起。", poem:"积雨空林烟火迟，蒸藜炊黍饷东菑。漠漠水田飞白鹭，阴阴夏木啭黄鹂。—— 王维《积雨辋川庄作》" },
        { name:"小暑", date:"7月6日-8日", season:"summer", shortDesc:"温风至，蟋蟀居宇，鹰始鸷。", custom:"食新、吃藕", longDesc:"入初伏，尝新米，清补养生。", content:"暑气初盛，热浪渐起，盛夏正式登场。民间食新、尝荔枝，祈愿平安；伏天将至，万物在酷暑中积蓄力量，蝉鸣、荷香、晚风，构成夏日最动人的画卷。\n天文：太阳到达黄经 105°，暑气渐盛，尚未至极。\n物候：温风至，蟋蟀居壁，鹰始挚。\n习俗：食新、晒书画衣物，去潮防霉。\n饮食：莲藕、冬瓜、莲子，清热健脾。\n养生：防暑降温，少动多静，防情绪中暑。", poem:"毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。—— 杨万里《晓出净慈寺送林子方》" },
        { name:"大暑", date:"7月22日-24日", season:"summer", shortDesc:"腐草为萤，土润溽暑，大雨时行。", custom:"喝暑羊、烧伏香", longDesc:"最热时节，鲁南喝羊汤，广东吃仙草。", content:"一年中最热时节，酷热难耐，万物生长至盛。民间饮伏茶、晒伏姜、赏荷避暑，以清凉对抗酷暑；暴雨频至，万物蓬勃，生命在极致炎热中绽放活力。\n天文：太阳到达黄经 120°，一年中最热之时。\n物候：腐草为萤，土润溽暑，大雨时行。\n习俗：饮伏茶、晒伏姜、送大暑船。\n饮食：冬瓜汤、薏米、西瓜，清暑利湿。\n养生：避暑湿，护脾胃，慎食生冷。", poem:"仲夏苦夜短，开轩纳微凉。虚明见纤毫，羽虫亦飞扬。—— 杜甫《夏夜叹》" },
        { name:"立秋", date:"8月7日-9日", season:"autumn", shortDesc:"凉风至，白露降，寒蝉鸣。", custom:"贴秋膘、晒秋", longDesc:"秋来暑去，补回夏季损耗。", content:"秋意初至，暑气未消，立秋是秋季的开篇。民间啃秋、贴秋膘、晒秋，以烟火气迎接丰收；梧桐叶落，凉风渐起，天地从热烈转向沉静，收获的序章由此开启。\n天文：太阳到达黄经 135°，秋季开端，阳气渐收。\n物候：凉风至，白露生，寒蝉鸣。\n习俗：贴秋膘、啃秋、迎秋。\n饮食：西瓜、茄子、鸭肉，清润不腻。\n养生：防秋老虎，少辛多酸，润肺生津。", poem:"银烛秋光冷画屏，轻罗小扇扑流萤。天阶夜色凉如水，卧看牵牛织女星。—— 杜牧《秋夕》" },
        { name:"处暑", date:"8月22日-24日", season:"autumn", shortDesc:"鹰乃祭鸟，天地始肃，禾乃登。", custom:"开渔节、吃鸭子", longDesc:"出暑，沿海开渔，鸭肉润燥。", content:"暑气至此而止，秋凉正式登场。民间祭祖、迎秋、放河灯，开渔节启航，告别盛夏，拥抱清秋。天地褪去燥热，回归清爽，人间多了几分闲适。\n天文：太阳到达黄经 150°，暑气至此而止，气温转凉。\n物候：鹰乃祭鸟，天地始肃，禾乃登。\n习俗：祭祖、迎秋、放河灯。\n饮食：百合、银耳、梨，滋阴润燥。\n养生：收敛神气，防秋燥，适度添衣。", poem:"尘世难逢开口笑，菊花须插满头归。但将酩酊酬佳节，不用登临恨落晖。—— 杜牧《九日齐山登高》" },
        { name:"白露", date:"9月7日-8日", season:"autumn", shortDesc:"鸿雁来，玄鸟归，群鸟养羞。", custom:"饮白露茶、收清露", longDesc:"夜凉露凝，白露茶甘醇。", content:"水汽凝露，洁白如玉，秋意渐浓。民间收清露、饮白露茶、吃番薯，润燥养生；草木染霜，鸿雁南飞，天地间多了几分清冷诗意。\n天文：太阳到达黄经 165°，水汽凝而为露，秋凉明显。\n物候：鸿雁来，玄鸟归，群鸟养羞。\n习俗：祭禹王、饮白露茶、吃龙眼。\n饮食：白露茶、番薯、蜂蜜，润肺平燥。\n养生：防凉燥，夜卧勿露身，护肺养津。", poem:"戍鼓断人行，边秋一雁声。露从今夜白，月是故乡明。—— 杜甫《月夜忆舍弟》" },
        { name:"秋分", date:"9月22日-24日", season:"autumn", shortDesc:"雷始收声，蛰虫坯户，水始涸。", custom:"祭月、吃秋菜", longDesc:"昼夜平分，岭南吃秋菜。", content:"昼夜均分，秋色平分，是秋季的中点。民间祭月、送秋牛、粘雀子嘴，祈愿丰收；丹桂飘香，蟹肥菊黄，天地间满是丰收的喜悦与平和。\n天文：太阳到达黄经 180°，昼夜再均分，阴气渐盛。\n物候：雷始收声，蛰虫坯户，水始涸。\n习俗：祭月、竖蛋、秋收感恩。\n饮食：秋菜、板栗、芝麻，养阴润肺。\n养生：平衡阴阳，早睡早起，舒缓情志。", poem:"自古逢秋悲寂寥，我言秋日胜春朝。晴空一鹤排云上，便引诗情到碧霄。—— 刘禹锡《秋词?其一》" },
        { name:"寒露", date:"10月8日-9日", season:"autumn", shortDesc:"鸿雁来宾，雀入大水为蛤，菊有黄华。", custom:"登高、饮菊花酒", longDesc:"露水寒冷，秋钓边。", content:"露气寒冷，将凝结为霜，秋意深浓。民间登高、赏枫、饮秋茶，强身健体；草木枯黄，雁阵南迁，天地间尽显萧瑟之美，也藏着对冬日的期盼。\n天文：太阳到达黄经 195°，露气寒冷，将欲凝霜。\n物候：鸿雁来宾，雀入大水为蛤，菊有黄华。\n习俗：登高、赏菊、饮菊花酒。\n饮食：菊花、山药、柿子，温润养肺。\n养生：防寒保暖，护足护胃，防呼吸道疾病。", poem:"风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。—— 杜甫《登高》" },
        { name:"霜降", date:"10月23日-24日", season:"autumn", shortDesc:"豺乃祭兽，草木黄落，蛰虫咸俯。", custom:"吃柿子、赏菊", longDesc:"霜打红叶，红柿御寒。", content:"秋季最后一个节气，霜华满地，万物收敛。民间赏菊、吃柿子、进补养生，抵御寒气；草木凋零，蛰虫休眠，天地为冬日的蛰伏做好准备。\n天文：太阳到达黄经 210°，秋季终章，霜始降。\n物候：豺乃祭兽，草木黄落，蛰虫咸俯。\n习俗：赏菊、扫墓、吃柿子。\n饮食：柿子、萝卜、羊肉，温补防寒。\n养生：温补脾肾，防咳喘，固护阳气。", poem:"远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。—— 杜牧《山行》" },
        { name:"立冬", date:"11月7日-8日", season:"winter", shortDesc:"水始冰，地始冻，雉入大水为蜃。", custom:"吃饺子、贺冬", longDesc:"补冬，北方饺子交子之时。", content:"冬季伊始，万物收藏，寒气渐生。民间拜冬、酿黄酒、进补食俗，积蓄能量；大地褪去繁华，回归沉静，人间烟火在寒风中愈发温暖。\n天文：太阳到达黄经 225°，冬季开始，万物闭藏。\n物候：水始冰，地始冻，雉入大水为蜃。\n习俗：迎冬、祭祖、贺冬、补冬。\n饮食：饺子、羊肉、鸡汤，温补养阳。\n养生：早睡晚起，敛阴护阳，减少耗损。", poem:"冻笔新诗懒写，寒炉美酒时温。醉看墨花月白，恍疑雪满前村。—— 李白《立冬》" },
        { name:"小雪", date:"11月22日-23日", season:"winter", shortDesc:"虹藏不见，天气上升，闭塞成冬。", custom:"腌腊肉、吃糍粑", longDesc:"气温下降，腌菜备冬。", content:"气温骤降，初雪飘落，雪量尚小。民间腌腊肉、晒干货，为冬日储备滋味；天地素白，万物静谧，冬日的诗意悄然绽放。\n天文：太阳到达黄经 240°，气温下降，始有小雪。\n物候：虹藏不见，天气上升，闭塞而成冬。\n习俗：腌菜、酿酒、晒腊肉。\n饮食：白菜、萝卜、羊肉，温肾散寒。\n养生：护肾藏精，温和进补，防抑郁。", poem:"绿蚁新醅酒，红泥小火炉。晚来天欲雪，能饮一杯无？—— 白居易《问刘十九》" },
        { name:"大雪", date:"12月6日-8日", season:"winter", shortDesc:"鹖鴠不鸣，虎始交，荔挺出。", custom:"观封河、腌肉", longDesc:"大雪节气，腌肉迎年。", content:"雪盛地寒，万物冰封，天地一片苍茫。民间赏雪、滑冰、进补羊肉，抵御严寒；银装素裹，山河静谧，冬日的壮阔在此刻尽显。\n天文：太阳到达黄经 255°，雪盛，寒更深。\n物候：鹖鴠不鸣，虎始交，荔挺出。\n习俗：腌肉、赏雪、进补。\n饮食：红枣、桂圆、牛肉，温阳益气。\n养生：防寒护阳，暖足暖背，静心养神。", poem:"千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。—— 柳宗元《江雪》" },
        { name:"冬至", date:"12月21日-23日", season:"winter", shortDesc:"蚯蚓结，麋角解，水泉动。", custom:"饺子汤圆、画九", longDesc:"数九寒天，阴极阳生。", content:"白昼最短，黑夜最长，阴极之至，阳气始生。民间祭天祭祖、吃饺子汤圆，数九寒天自此开始；这一天，人间团圆，烟火温暖，藏着对春天的期盼。\n天文：太阳到达黄经 270°，阴极之至，阳气始生。\n物候：蚯蚓结，麋角解，水泉动。\n习俗：祭天祭祖、吃饺子汤圆、画九。\n饮食：饺子、汤圆、羊肉，温补助阳。\n养生：护阳固本，早卧晚起，避寒就温。", poem:"邯郸驿里逢冬至，抱膝灯前影伴身。想得家中夜深坐，还应说着远行人。—— 白居易《邯郸冬至夜思家》" },
        { name:"小寒", date:"1月5日-7日", season:"winter", shortDesc:"雁北乡，鹊始巢，雉始鸲。", custom:"探梅、吃腊八粥", longDesc:"寒气逼人，踏雪寻梅。", content:"寒气渐盛，未达极致，是冬日的纵深。民间赏梅、进补、熬煮腊八粥，暖身暖心；天地严寒，却有暗香浮动，生命在寒冬中坚守希望。\n天文：太阳到达黄经 285°，冷气积久而寒。\n物候：雁北乡，鹊始巢，雉始雊。\n习俗：腊祭、赏梅、进补。\n饮食：腊八粥、糯米、坚果，温补脾肾。\n养生：强肾固本，防严寒冻伤，护心脉。", poem:"墙角数枝梅，凌寒独自开。遥知不是雪，为有暗香来。—— 王安石《梅花》" },
        { name:"大寒", date:"1月20日-21日", season:"winter", shortDesc:"鸡乳，征鸟厉疾，水泽腹坚。", custom:"尾牙祭、除尘", longDesc:"岁末大寒，迎新春。", content:"一年中最后一个节气，寒气至极，岁末将至。民间扫尘、备年货、迎新年，辞旧迎新；严寒过后，便是立春，四季轮回至此圆满，新的希望悄然孕育。\n天文：太阳到达黄经 300°，一年终章，寒至极而春将归。\n物候：鸡乳，征鸟厉疾，水泽腹坚。\n习俗：尾牙祭、扫尘、备年货，迎新春。\n饮食：年糕、鸡汤、萝卜，温补兼清润。\n养生：固阳护精，调畅情志，为开春蓄力。", poem:"岁暮风动地，夜寒雪连天。老夫何处宿，暖帐温炉前。—— 白居易《村居卧病三首?其三》" }
    ];

    // 非遗名录数据 (来源于官网)
    const heritageItems = [
        { name:"九华立春祭", desc:"春风灯火，祈福九华。", detail:"嘉礼鼓声起，村落在迎春的火焰与香烟中，祈愿河山岁丰。" },
        { name:"班春劝农", desc:"春令鼓声，劝耕千里。", detail:"古老的乡间集市，将春天的愿望化作铿锵的农耕鼓点。" },
        { name:"石阡说春", desc:"侗乡说春，天地归暖。", detail:"说春的言辞与歌舞，将自然的节律细数成春的仪式。" },
        { name:"苗族赶秋", desc:"红裳赶秋，丰年蝴蝶。", detail:"赶秋的旌旗与花鼓，让丰收的期盼在秋日里盛开。" },
        { name:"安仁赶分社", desc:"春分旗队，礼赞田禾。", detail:"祭神巡游中，春耕的希望与乡愁并肩前行。" },
        { name:"壮族霜降节", desc:"霜叶登高，歌声入云。", detail:"在凉风与霜露中，壮乡用歌舞迎接秋收的诗意。" },
        { name:"三门祭冬", desc:"冬至祭礼，炉火映寒。", detail:"冬至之夜，祭祀与温酒让寒冬有了温暖的烛光。" },
        { name:"半山立夏习俗", desc:"夏声初起，鼓声远扬。", detail:"立夏之际，人们用歌舞与礼俗拥抱夏日的苏醒。" },
        { name:"送大暑船", desc:"大暑送瘟，锣鼓扬帆。", detail:"彩船起行，是沿海村落向酷暑与瘟疫宣战的仪式。" },
        { name:"梅源芒种开犁节", desc:"芒种启耕，牛耕田畴。", detail:"开犁的牛蹄踏出希望，田野翻新出夏日的绿意。" },
        { name:"内乡打春牛习俗", desc:"打春牛醒，春耕再启。", detail:"锣鼓震天，打春牛的声响唤醒沉睡的大地。" }
    ];

    // 渲染节气网格 + 滚动视差动画
    const gridContainer = document.getElementById('solarGrid');
    function renderCards() {
        const termIcons = {
            立春: '🌱', 雨水: '🌧', 惊蛰: '⚡', 春分: '🌿', 清明: '🌼', 谷雨: '🍃',
            立夏: '🌻', 小满: '🌾', 芒种: '🌱', 夏至: '☀️', 小暑: '🔥', 大暑: '🌤',
            立秋: '🍂', 处暑: '🍉', 白露: '🌫', 秋分: '🍁', 寒露: '❄️', 霜降: '☃️',
            立冬: '❄️', 小雪: '🌨', 大雪: '⛄', 冬至: '🍲', 小寒: '🧊', 大寒: '⛄'
        };
        let html = '';
        solarTerms.forEach((term, idx) => {
            let seasonIcon = term.season === 'spring' ? '🌸' : (term.season === 'summer' ? '☀️' : (term.season === 'autumn' ? '🍁' : '❄️'));
            const customIcon = termIcons[term.name] || '🤲';
            html += `
                <div class="card" data-idx="${idx}">
                    <div class="card-image"><img src="./image/${idx + 1}.${term.name}.webp" alt="${term.name}" loading="lazy" decoding="async"></div>
                    <div class="season-icon">${seasonIcon}</div>
                    <h3>${term.name}</h3>
                    <div class="card-date">${term.date}</div>
                    <div class="card-desc">${term.shortDesc}</div>
                    <div class="custom-tag">${customIcon} ${term.custom.split('、')[0]}</div>
                </div>
            `;
        });
        gridContainer.innerHTML = html;
        // 卡片点击打开模态
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', (e) => {
                const idx = card.getAttribute('data-idx');
                if (idx !== null) showFullTerm(solarTerms[parseInt(idx)], parseInt(idx));
            });
        });
        renderFullNav();
        // 滚动显示动画 Intersection Observer
        const cards = document.querySelectorAll('.card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('reveal', entry.isIntersecting);
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
        cards.forEach(card => observer.observe(card));

        const slideSections = document.querySelectorAll('.slide-section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('reveal', entry.isIntersecting);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -10px 0px' });
        slideSections.forEach(section => sectionObserver.observe(section));
    }

    function showModal(term) {
        const modal = document.getElementById('detailModal');
        document.getElementById('modalName').innerText = term.name;
        document.getElementById('modalDate').innerHTML = `📅 ${term.date}`;
        document.getElementById('modalDesc').innerHTML = `<p>${term.content}</p><p>${term.longDesc}</p><p style="margin-top:1rem; color:#7a5b30; font-style:italic;">${term.poem}</p>`;
        document.getElementById('modalCustom').innerHTML = term.custom + "。体现了顺应自然、尊重物候的传统智慧。";
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // 全屏展示节气（淡入淡出、左右切换、键盘导航）
    let currentFullIdx = -1;
    function updateFullContent(term, idx) {
        const view = document.getElementById('termFullView');
        const bgPath = `./backgrounds/${idx + 1}.${term.name}bg.webp`;
        view.style.backgroundImage = `url('${bgPath}')`;
        document.getElementById('termFullIndex').innerText = idx + 1;
        document.getElementById('termFullName').innerText = term.name;
        document.getElementById('termFullDate').innerText = term.date;
        document.getElementById('termFullContent').innerText = term.content || term.longDesc || term.shortDesc;
        document.getElementById('termFullPoem').innerText = term.poem || '';
        currentFullIdx = idx;
        highlightThumb(idx);
    }

    function showFullTerm(term, idx) {
        const view = document.getElementById('termFullView');
        // 如果已打开则做淡出换图再淡入
        if (view.style.display === 'flex' && view.classList.contains('active')) {
            view.classList.remove('active');
            setTimeout(() => {
                updateFullContent(term, idx);
                // 强制重绘后淡入
                void view.offsetWidth;
                view.classList.add('active');
            }, 260);
            return;
        }
        updateFullContent(term, idx);
        view.style.display = 'flex';
        view.setAttribute('aria-hidden','false');
        // 触发过渡
        requestAnimationFrame(() => view.classList.add('active'));
        document.body.style.overflow = 'hidden';
    }

        function closeFullTerm() {
        const view = document.getElementById('termFullView');
        if (!view) return;
        view.classList.remove('active');
        setTimeout(() => {
            view.style.display = 'none';
            view.setAttribute('aria-hidden','true');
            document.body.style.overflow = '';
        }, 420);
    }
    // 全屏节气视图 — 统一事件绑定
    document.getElementById('fullViewOverlay')?.addEventListener('click', closeFullTerm);
    document.getElementById('closeFullBtn')?.addEventListener('click', closeFullTerm);
    document.getElementById('navLeftBtn')?.addEventListener('click', function(e) { prevTerm(e); });
    document.getElementById('navRightBtn')?.addEventListener('click', function(e) { nextTerm(e); });

    function renderFullNav() {
        const thumbList = document.getElementById('termThumbList');
        if (!thumbList) return;
                thumbList.innerHTML = solarTerms.map((term, idx) => `
            <div class="nav-thumb" data-idx="${idx}">
                <div class="thumb-image" style="background-image:url('./image/${idx + 1}.${term.name}.webp')"></div>
                <div class="thumb-label">
                    <strong>${idx + 1}. ${term.name}</strong>
                    <small>${term.date}</small>
                </div>
            </div>
        `).join('');
        // 事件委托：点击缩略图切换节气
        thumbList.addEventListener('click', function(e) {
            var thumb = e.target.closest('.nav-thumb');
            if (!thumb) return;
            var idx = parseInt(thumb.getAttribute('data-idx'), 10);
            if (!isNaN(idx)) showFullTerm(solarTerms[idx], idx);
        });
    }

    function highlightThumb(idx) {
        document.querySelectorAll('#termThumbList .nav-thumb').forEach((thumb) => {
            thumb.classList.toggle('active', parseInt(thumb.getAttribute('data-idx')) === idx);
        });
    }

    function prevTerm(e) { if (e) e.stopPropagation(); if (currentFullIdx < 0) return; const idx = (currentFullIdx - 1 + solarTerms.length) % solarTerms.length; showFullTerm(solarTerms[idx], idx); }
    function nextTerm(e) { if (e) e.stopPropagation(); if (currentFullIdx < 0) return; const idx = (currentFullIdx + 1) % solarTerms.length; showFullTerm(solarTerms[idx], idx); }

    // 键盘导航：Esc 关闭，←/→ 切换
    window.addEventListener('keydown', (e) => {
        const view = document.getElementById('termFullView');
        if (!view || view.style.display !== 'flex') return;
        if (e.key === 'Escape') closeFullTerm();
        else if (e.key === 'ArrowLeft') prevTerm();
        else if (e.key === 'ArrowRight') nextTerm();
    });
    function closeModalFunc() {
        const modal = document.getElementById('detailModal');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    document.querySelector('.close-modal')?.addEventListener('click', closeModalFunc);
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('detailModal')) closeModalFunc();
    });

    document.getElementById('backToTopBtn')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 渲染横向可扩展的非遗竖块区域
    function renderHeritageFan() {
        const heritageBar = document.getElementById('heritageBar');
        if (!heritageBar) return;
        heritageBar.innerHTML = heritageItems.map((item, index) => {
            const mainImage = `./custom-image/习俗${index + 1}.1.webp`;
            const hoverImage = `./custom-image/习俗${index + 1}.2.webp`;
            return `
                <div class="heritage-block" tabindex="0" role="listitem">
                    <div class="block-image" style="background-image:url('${mainImage}')"></div>
                    <div class="block-caption">
                        <h4>${item.name}</h4>
                        <p>${item.desc}</p>
                    </div>
                    <div class="block-extra">
                        <h5>${item.name}</h5>
                        <div class="detail-image" style="background-image:url('${hoverImage}')"></div>
                        <p>${item.detail}</p>
                    </div>
                </div>
            `;
        }).join('');

        // 鼠标点击后主动失焦：移出鼠标即回到原始状态；键盘操作（detail === 0）保留焦点
        heritageBar.querySelectorAll('.heritage-block').forEach((el) => {
            el.addEventListener('click', (ev) => {
                if (ev.detail > 0) el.blur();
            });
        });
    }

    // 滚动引导
    document.getElementById('scrollDownBtn')?.addEventListener('click', () => {
        window.scrollTo({ top: window.innerHeight - 50, behavior: 'smooth' });
    });

    renderCards();
    renderHeritageFan();
    
    // 添加背景视差额外效果: 滚动时hero变换透明度（高级感）
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
                const hero = document.querySelector('.hero-parallax');
        if(hero) {
            const opacity = Math.max(0, 1 - scrolled / 800);
            hero.style.opacity = opacity;
        }
        });

    // ===== 节气钟 JS =====
    (function() {
        "use strict";
                const TERM_NAMES = ["立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至","小寒","大寒"];
                /* 节气太阳黄经（单位：度）：立春315°, 雨水330°, 惊蛰345°, 春分0°, 清明15° ... 大寒300° */
                const TERM_LONGITUDES = [315, 330, 345, 0, 15, 30, 45, 60, 75, 90, 105, 120,
                                         135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300];
                /* === 节气时刻推算：以太阳视黄经低精度公式迭代求解，用于实时定位当前节气 === */
                function getTermDate(year, termIndex) {
                    var RAD = Math.PI / 180;
                    function jdToDate(jd) { return new Date((jd - 2440587.5) * 86400000); }
                    // 计算太阳黄经（精确到 0.01°）
                    function sunLongitude(jd) {
                        var T = (jd - 2451545.0) / 36525;  // 儒略世纪（注意：不是 365250！）
                        var L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
                        var M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
                        var C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M * RAD)
                              + (0.019993 - 0.000101 * T) * Math.sin(2 * M * RAD)
                              + 0.000289 * Math.sin(3 * M * RAD);
                        var lon = L0 + C;
                        return ((lon % 360) + 360) % 360;
                    }
                    var targetLon = TERM_LONGITUDES[termIndex];
                    var y = (termIndex >= 22) ? year + 1 : year;
                    // 粗估起始儒略日（2000年立春≈JD2451545 + 立春距春分约-45天）
                    var startJD = 2451545.0 + (y - 2000) * 365.2422 + (termIndex * 15.2 - 45);
                    // 牛顿迭代法求精确时间（最多 10 次迭代）
                    var jd = startJD;
                    for (var iter = 0; iter < 10; iter++) {
                        var lon = sunLongitude(jd);
                        var diff = (lon - targetLon + 360) % 360;
                        if (diff > 180) diff -= 360;
                        // 太阳每日约移动 0.9856°，因此修正量 = diff / 0.9856
                        jd -= diff / 0.9856;
                        if (Math.abs(diff) < 0.0001) break;
                    }
                    return jdToDate(jd);
                }
        function getCurrentSolarTermInfo(nowDate) {
            const year = nowDate.getFullYear();
            let candidates = [];
            for (let y = year - 1; y <= year + 1; y++)
                for (let i = 0; i < 24; i++)
                    candidates.push({ date: getTermDate(y, i), index: i, name: TERM_NAMES[i] });
                        candidates.sort((a,b) => a.date - b.date);
                        let next = null, prev = null;
                        // 按日期比较（忽略时分秒），避免精确时间戳边界问题
                        var nowMs = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()).getTime();
                        for (let i = 0; i < candidates.length; i++) {
                            var d = new Date(candidates[i].date.getFullYear(), candidates[i].date.getMonth(), candidates[i].date.getDate());
                            if (d.getTime() >= nowMs) { next = candidates[i]; if (i > 0) prev = candidates[i-1]; break; }
                        }
            if (!next) { prev = candidates[candidates.length-2]; next = candidates[candidates.length-1]; }
            if (!prev) { prev = candidates[candidates.length-2]; }
                        // 检查 prev 是否确实在当前时间之前；如果 prev 也在当前时间之后，再往前找
            if (prev && prev.date.getTime() > nowMs) {
                let idx = candidates.indexOf(prev);
                while (idx > 0) {
                    var pd = new Date(candidates[idx].date.getFullYear(), candidates[idx].date.getMonth(), candidates[idx].date.getDate());
                    if (pd.getTime() <= nowMs) break;
                    idx--;
                }
                prev = candidates[idx];
            }
            return { prev, next, current: prev };
        }
        const clockEl = document.getElementById('clockDisplay');
        const dateEl = document.getElementById('dateDisplay');
        const termNameEl = document.getElementById('solarTermName');
        const countdownEl = document.getElementById('countdownDays');
        const countdownNextTerm = document.getElementById('countdownNextTerm');
        const currentTermTag = document.getElementById('currentTermTag');
        const prevHint = document.getElementById('prevTermHint');
        const currentHint = document.getElementById('currentTermHint');
        const nextHint = document.getElementById('nextTermHint');
        if (!clockEl) return;
        function updateTimeAndTerms() {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2,'0'), mm = String(now.getMinutes()).padStart(2,'0'), ss = String(now.getSeconds()).padStart(2,'0');
            clockEl.textContent = hh+':'+mm+':'+ss;
            const y = now.getFullYear(), m = now.getMonth()+1, d = now.getDate();
            const stems = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'], branches = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
            const yearStem = stems[(y-4)%10], yearBranch = branches[(y-4)%12];
            dateEl.textContent = yearStem+yearBranch+'年 · '+m+'月'+d+'日';
            const info = getCurrentSolarTermInfo(now);
            const currentTerm = info.current, nextTerm = info.next;
            termNameEl.innerHTML = currentTerm.name+' <small>· '+nextTerm.name+'前</small>';
            currentTermTag.textContent = currentTerm.name;
            // 动态更新 countdown 标签中的下一节气名
            if (countdownNextTerm) countdownNextTerm.textContent = nextTerm.name;
            const diffMs = nextTerm.date.getTime() - now.getTime();
            let diffDays = Math.floor(diffMs/(1000*60*60*24)), diffHours = Math.floor((diffMs%(1000*60*60*24))/(1000*60*60));
            let countdownStr = diffDays > 0 ? diffDays+'天'+diffHours+'时' : diffHours+'时'+Math.floor((diffMs%(1000*60*60))/(1000*60))+'分';
            countdownEl.textContent = countdownStr;
            const prevTerm = info.prev;
            if (prevTerm && prevTerm.name !== currentTerm.name) prevHint.textContent = '❀ '+prevTerm.name;
            else {
                const candidates = [];
                const year = now.getFullYear();
                for (let y = year-1; y <= year+1; y++) for (let i = 0; i < 24; i++) candidates.push({ date: getTermDate(y,i), index: i, name: TERM_NAMES[i] });
                candidates.sort((a,b)=>a.date-b.date);
                let idx = candidates.findIndex(c => c.name === currentTerm.name && c.date <= now);
                prevHint.textContent = '❀ '+(idx > 0 ? candidates[idx-1].name : currentTerm.name);
            }
            currentHint.textContent = '● '+currentTerm.name;
            nextHint.textContent = '➜ '+nextTerm.name;
        }
                updateTimeAndTerms();
        setInterval(updateTimeAndTerms, 1000);

        // ===== 全屏屏保逻辑 =====
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const ssOverlay = document.getElementById('screensaverOverlay');

        // 十二时辰数据
        const SHI_CHEN = [
            { name:'子时', start:23, end:1, period:'23:00-01:00', desc:'夜半·星汉低垂' },
            { name:'丑时', start:1, end:3, period:'01:00-03:00', desc:'鸡鸣·万籁俱寂' },
            { name:'寅时', start:3, end:5, period:'03:00-05:00', desc:'平旦·东方欲晓' },
            { name:'卯时', start:5, end:7, period:'05:00-07:00', desc:'日出·晨曦初露' },
            { name:'辰时', start:7, end:9, period:'07:00-09:00', desc:'食时·朝霞满天' },
            { name:'巳时', start:9, end:11, period:'09:00-11:00', desc:'隅中·日华正酣' },
            { name:'午时', start:11, end:13, period:'11:00-13:00', desc:'日中·烈日当空' },
            { name:'未时', start:13, end:15, period:'13:00-15:00', desc:'日昳·斜阳微暖' },
            { name:'申时', start:15, end:17, period:'15:00-17:00', desc:'晡时·夕照流金' },
            { name:'酉时', start:17, end:19, period:'17:00-19:00', desc:'日入·暮色四合' },
            { name:'戌时', start:19, end:21, period:'19:00-21:00', desc:'黄昏·华灯初上' },
            { name:'亥时', start:21, end:23, period:'21:00-23:00', desc:'人定·夜深人静' }
        ];

        function getShiChen(hour) {
            for (let sc of SHI_CHEN) {
                if (sc.start < sc.end) {
                    if (hour >= sc.start && hour < sc.end) return sc;
                } else {
                    // 子时跨天 23:00-01:00
                    if (hour >= sc.start || hour < sc.end) return sc;
                }
            }
            return SHI_CHEN[0];
        }

        // 干支月柱（近似：按公历月份换算，未按交节分界）
        function getGanZhiMonth(year, month) {
            const stems = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
            const branches = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
            // 年干决定月干起始：甲己之年丙作首，乙庚之岁戊为头，丙辛之年寻庚上，丁壬壬寅顺水流，戊癸何方发，甲寅之上好追求
            const yearGan = (year - 4) % 10;
            let monthGanStart;
            if (yearGan === 0 || yearGan === 5) monthGanStart = 2;  // 丙
            else if (yearGan === 1 || yearGan === 6) monthGanStart = 4; // 戊
            else if (yearGan === 2 || yearGan === 7) monthGanStart = 6; // 庚
            else if (yearGan === 3 || yearGan === 8) monthGanStart = 8; // 壬
            else monthGanStart = 0; // 甲
            const gan = stems[(monthGanStart + month - 1) % 10];
            const zhi = branches[(month + 1) % 12]; // 寅 = 正月
            return gan + zhi;
        }

        // 干支日柱（近似换算，非天文历书值，仅作界面装饰）
        function getGanZhiDay(year, month, day) {
            const stems = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
            const branches = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
            // 以 2000-01-01 为基准日的近似干支序号推算
            const baseDate = new Date(2000, 0, 1);
            const targetDate = new Date(year, month - 1, day);
            const diffDays = Math.round((targetDate - baseDate) / (24*60*60*1000));
            const idx = ((diffDays % 60) + 60) % 60;
            return stems[idx % 10] + branches[idx % 12];
        }

        function updateScreensaver() {
            const now = new Date();
            const y = now.getFullYear(), m = now.getMonth()+1, d = now.getDate();
            const h = now.getHours(), min = now.getMinutes();

                        // 左上实时时钟
            const hh = String(now.getHours()).padStart(2,'0');
            const mm = String(now.getMinutes()).padStart(2,'0');
            const ss = String(now.getSeconds()).padStart(2,'0');
            document.getElementById('ssClockHM').textContent = hh+':'+mm;
            document.getElementById('ssClockSS').textContent = ss;

            // 公历日期
            document.getElementById('ssDateGreg').textContent = y+'年'+String(m).padStart(2,'0')+'月'+String(d).padStart(2,'0')+'日';
            const weekDays = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
            document.getElementById('ssDateWeek').textContent = weekDays[now.getDay()];

                        // 干支纪年/月/日（非农历月日，仅作节气钟装饰信息）
            const stems = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
            const branches = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
            const yearStem = stems[(y - 4) % 10];
            const yearBranch = branches[(y - 4) % 12];
            const gzMonth = getGanZhiMonth(y, m);
            const gzDay = getGanZhiDay(y, m, d);
            document.getElementById('ssDateLunar').textContent = yearStem+yearBranch+'年 · '+gzMonth+'月 · '+gzDay+'日';
            document.getElementById('ssLunarSmall').textContent = yearStem+yearBranch+'年 · '+gzMonth+'月 · '+gzDay+'日';

            // 十二时辰
            const sc = getShiChen(h);
            document.getElementById('ssShiChen').textContent = sc.name;
            document.getElementById('ssShiChenPeriod').textContent = sc.period;
            document.getElementById('ssShiChenDesc').textContent = sc.desc;

            // 中央 — 当前节气名 + 倒计时 + 下一节气名
            const curTerm = document.getElementById('currentTermTag');
            if (curTerm) {
                document.getElementById('ssTermName').textContent = curTerm.textContent;
                document.getElementById('ssTermNameBg').textContent = curTerm.textContent;
            }
            // 利用节气钟已有的倒计时数据
            const nextTermEl = document.getElementById('nextTermHint');
            const countdownEl2 = document.getElementById('countdownDays');
            if (nextTermEl) {
                var nextTermText = nextTermEl.textContent.replace(/➜\s*/,'');
                document.getElementById('ssNextTermName').textContent = nextTermText;
            }
            if (countdownEl2) {
                document.getElementById('ssCountdownDays').textContent = countdownEl2.textContent;
            }
        }

                if (fullscreenBtn && ssOverlay) {
                    fullscreenBtn.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        // 更新屏保数据
                        updateScreensaver();
                        // 启用屏保（纯 CSS 全屏模拟，不调用浏览器全屏 API，避免 http://127 问题）
                        ssOverlay.classList.add('active');
                        // 屏保内每秒更新
                        if (window._ssTimer) clearInterval(window._ssTimer);
                        window._ssTimer = setInterval(updateScreensaver, 1000);
                    });

                    // 点击屏保退出（使用 mouseup 替代 click，避免与全屏点击冲突）
                    ssOverlay.addEventListener('mouseup', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        exitScreenSaver();
                    });

                    // 触摸设备支持
                    ssOverlay.addEventListener('touchend', function(e) {
                        e.preventDefault();
                        exitScreenSaver();
                    });

                    function exitScreenSaver() {
                        ssOverlay.classList.remove('active');
                        if (window._ssTimer) {
                            clearInterval(window._ssTimer);
                            window._ssTimer = null;
                        }
                    }

                    // ESC 键退出屏保
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && ssOverlay.classList.contains('active')) {
                            e.preventDefault();
                            e.stopPropagation();
                            exitScreenSaver();
                        }
                    });
                }
    })();

/* =====================================================================
   节气钟 · 侧边抽屉（原为页面末尾的内嵌区块，现改为右侧挂件 + 抽屉）
   ===================================================================== */
(function () {
    var fab = document.getElementById('clockFab');
    var drawer = document.getElementById('solarClockSection');
    var mask = document.getElementById('clockMask');
    var closeBtn = document.getElementById('clockClose');
    if (!fab || !drawer || !mask) return;

    function openDrawer() {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        mask.hidden = false;
        // 强制一次回流，保证过渡生效
        void mask.offsetWidth;
        mask.classList.add('show');
        fab.setAttribute('aria-expanded', 'true');
    }
    function closeDrawer() {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        mask.classList.remove('show');
        fab.setAttribute('aria-expanded', 'false');
        window.setTimeout(function () { if (!drawer.classList.contains('open')) mask.hidden = true; }, 320);
    }

    fab.addEventListener('click', function () {
        if (drawer.classList.contains('open')) closeDrawer(); else openDrawer();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    mask.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
})();

