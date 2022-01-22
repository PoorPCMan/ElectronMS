function start()
{
	St = -1;
	action(1, 0, 0);
}

function action(M, T, S)
{
	if(M != 1)
	{
		cm.dispose();
		return;
	}

	if(M == 1)
	St++;
	else
	St--;

	if(St == 0)
	{
			//	cm.getPlayer().gainRC(140000);
		cm.sendSimple("#fs11#Good Morning~! We can help you move to ElectronMS #dHalocate#k is! Want to move quickly and safely elsewhere? If so, customer satisfaction is the first priority #bWarp System #kTry it. Specially free! We will take you to the place you want.#b\r\n"
		+ "#k#d#fs11##L0##fUI/GuildMark.img/Mark/Pattern/00004001/10# #e#rLevel Hunting ground#k#n#d로 이동하고 싶습니다.#l\r\n"
		+ "#k#d#fs11##L500##fUI/GuildMark.img/Mark/Pattern/00004001/10# #e#rLevel Hunting Ground2#k#n#d로 이동하고 싶습니다.#l\r\n"
		+ "#k#d#fs11##L7##fUI/GuildMark.img/Mark/Pattern/00004001/14# #e#rExploration#k#n#dI want to use.#l\r\n"
                        + "#k#d#fs11##L6##fUI/GuildMark.img/Mark/Pattern/00004001/15# #dEvent map#e#r (O.X퀴즈,빙고,등)#k#n#d을 이용하고 싶습니다.#l\r\n"
                        //+ "#k#d#fs11##L15##fUI/GuildMark.img/Mark/Pattern/00004001/4# #e#r낚시터#e#r#k#n#d을 이용하고 싶습니다.#l\r\n"
		+ "#k#d#fs11##L5##fUI/GuildMark.img/Mark/Pattern/00004001/14# #e#rBoss system#k#n#d을 이용하고 싶습니다.#l\r\n"
		+ "#k#d#fs11##L13##fUI/GuildMark.img/Mark/Pattern/00004001/14# #e#rComposition#k#n#d을 이용하고 싶습니다.#l\r\n"
			+ (cm.getPlayer().getJob() >= 3300 && cm.getPlayer().getJob() <= 3312 ? "#b#L4##dLeave this place #e재규어 서식지#n로 이동하고 싶습니다.#l\r\n" : "")
 			);
	}

	else if(St == 1)
	{
		mapType = S;
		switch(mapType)
		{
			default:
			cm.sendSimple("목적지를 선택해 주세요. #e#r노말 모드 이외의 도전가능한 모드#k#n가 적혀있으니 참고하면 좋습니다.\r\n#b"
				+ "#b#L211042300#자쿰　　  │ Gate to Zakum　　    │ 이지, 카오스#l\r\n"
				+ "#b#L240050400#혼테일　  │ 혼테일의 동굴 입구　　  │ 이지, 카오스#l\r\n"
				+ "#b#L270050000#핑크빈　  │ 잊혀진 황혼　　　　　   │ 카오스#l\r\n"
				+ "#b#L262030000#힐라　　  │ 힐라의 탑 입구　　　　  │ 하드#l\r\n"
				+ "#b#L211070000#반 레온　 │ 알현실 앞 복도　　　　  │ 이지#l\r\n"
				+ "#b#L272020110#아카이럼  │ 아카이럼의 제단 앞　　  │ 이지#l\r\n"
				+ "#b#L271040000#시그너스  │ 시그너스의 정원　　　   │ 이지#l\r\n"
				+ "#b#L105200000#루타비스  │ 거대한 뿌리　　　　　   │ 카오스#l\r\n"
				+ "#b#L401060000#매그너스  │ 헬리시움 최상층 입구　  │ 이지, 하드#l\r\n"
				+ "#b#L350060300#스우　　  │ 코어 입구　　　　　　   │ 하드#l\r\n"
				+ "#b#L105300303#데미안　  │ 세계수 정상으로 가는 길 │ 하드#l\r\n"
				+ "#b#L450004000#루시드    | 악몽의 시계탑           | 이지, 하드#l\r\n");
			break;

			case 0:
			cm.sendSimple("#fn나눔고딕 Extrabold##r[알림]#k #h #님 원하시는 사냥터를 선택해주세요.#b\r\n"
                                               + "#b#L100040300#(Lv.10~30) Temple of the Golem 3\r\n"
                                               + "#b#L101070100#(Lv.10~30) Ellin -  A Midsummer Night's Forest\r\n"
                                               + "#b#L400010400#(Lv.30~60) Pantheon - Forest full of magic\r\n"
                                               + "#L141010100#(Lv.30~60) Riena Strait - Fossil Haunted Area\r\n"
                                               + "#L260020600#(Lv.60~100) Sunset Road - Sahel 2\r\n"
                                               + "#L251010402#(Lv.100~140) Mu Lung - Lair of the Red Nose Pirates 2#l\r\n"
                                               + "\r\n#e#r※주의 ↓↓ 사냥터들은 스타포스를 필요로합니다.#k#b#n\r\n"
                                               + "#L240040510#(Lv.140~170) Minar Forest - Dead Dragon's Lair\r\n"
                                               + "#L271010000#(Lv.170~200) Future Henesys - 파괴된 헤네시스\r\n"
                                               + "#L271030310#(Lv.170~200) Future Ereve - Stronghold 1#l\r\n"
                                               + "\r\n#e#r※주의 ↓↓ 사냥터들은 강력한 몬스터가 나옵니다.#k#b#n\r\n"
                                               + "#L273060200#(Lv.190~) Twilight Perion - Forsaken Excavation Site\r\n"
                                               + "#L310070200#(Lv.200~) Scrapyard - Road to Skyline\r\n"
                                               + "#L241020205#(Lv.200~) Broken Map *Unknown*\r\n"
                                               + "#L241020215#(Lv.200~) Kingdom Road - The Forest of Tragedy Begins\r\n"
                                               + "#L241000216#(Lv.200~) Kingdom Road - Forest of Fallen Magic\r\n"
                                               + "#L301040000#(Lv.200~) Crimsonwood Keep Marauders\r\n"
                                               + "#L450001216#(Lv.200~210) Cave of Rest - Bottom of the Cave\r\n"
                                               + "#L450002010#(Lv.210~220) Chu Chu Island - Deep in the Chu Forest\r\n"
                                               + "#L450003420#(Lv.220~250) Lacheln - A place where one's true nature is revealed 3\r\n"
                                               + "#L450003310#(Lv.220~250) Lacheln Night Market - Where the Chickens Run 2\r\n"
                                               + "#L450003500#(Lv.220~250) Lacheln Clock Tower - 1st floor of Clock Tower of Nightmare\r\n");
			break;

			case 500:
			cm.sendSimple("#fn나눔고딕 Extrabold##r[알림]#k #h #님 Please select the desired hunting ground#b\r\n"
                                               + "\r\n#e#r※주의 ↓↓ 사냥터들은 강력한 몬스터가 나옵니다.#k#b#n\r\n"
                                                + "\r\n#e#r※신규 맵 #b아#g르#r카#b나#b#n\r\n"
                                               + "#L450005430#(Lv.220~250) Arcana - Under the Cave\r\n"
                                               + "#L450005500#(Lv.220~250) Arcana - The Five Forked Cave\r\n"
                                               + "#L450005110#(Lv.220~250) Arcana - Water Forest #l\r\n"
                                                + "\r\n#e#r※신규 맵 #b모#g라#r스#k#b#n\r\n"
                                               + "#L450006000#(Lv.220~250) Moras - Path to the Coral Forest 1\r\n"
                                               + "#L450006020#(Lv.220~250) Moras - Path to the Coral Forest 3\r\n"
                                               + "#L450006040#(Lv.220~250) Moras - Path to the Coral Forest 5\r\n"
                                               + "#L450006100#(Lv.220~250) Moras - Haunting Cats 1\r\n"
                                               + "#L450006140#(Lv.220~250) Moras - Brothers Zone 1\r\n"
                                               + "#L450006210#(Lv.220~250) Moras - Where the shadows dance 2\r\n"
                                               + "#L450006230#(Lv.220~250) Moras - Where the shadows dance 4\r\n"
                                               + "#L450006300#(Lv.220~250) Moras - Closed Area 1 #l\r\n"
                                                + "\r\n#e#r※신규 맵 #b에#g스#r페#b라#k#b#n\r\n"
                                               + "#L450007010#(Lv.220~250) Espera - where life begins 2\r\n"
                                               + "#L450007030#(Lv.220~250) 에스페라 - 생명이 시작되는 곳4\r\n"
                                               + "#L450007110#(Lv.220~250) 에스페라 - 겨울빛에 물든 바다2\r\n"
                                               + "#L450007130#(Lv.220~250) 에스페라 - 겨울빛에 물든 바다4\r\n"
                                               + "#L450007210#(Lv.220~250) 에스페라 - 겨울에 비친 빛의 신전2\r\n"
                                               + "#L450007230#(Lv.220~250) 에스페라 - 겨울에 비친 빛의 신전4#l\r\n"
                                                + "\r\n#e#r※신규 맵 #b문#g브#r릿#d지#k#b#n\r\n"
                                               + "#L450009120#(Lv.220~250) 문브릿지 - 사상의 경계2\r\n"
                                               + "#L450009140#(Lv.220~250) 문브릿지 - 사상의 경계4\r\n"
                                               + "#L450009220#(Lv.220~250) 문브릿지 - 미지의 안개2\r\n"
                                               + "#L450009240#(Lv.220~250) 문브릿지 - 미지의 안개4\r\n"
                                               + "#L450009320#(Lv.220~250) 문브릿지 - 공허의 파도2#l\r\n"
                                                + "\r\n#e#r※신규 맵 #b리#g맨#k#b#n\r\n"
                                               + "#L450012020#(Lv.220~250) 리맨 - 세계의 눈물 하단1\r\n"
                                               + "#L450012040#(Lv.220~250) 리맨 - 세계의 눈물 하단3\r\n"
                                               + "#L450012100#(Lv.220~250) 리맨 - 세계의 눈물 중단1\r\n"
                                               + "#L450012120#(Lv.220~250) 리맨 - 세계의 눈물 중단3\r\n"
                                               + "#L450012330#(Lv.220~250) 리맨 - 세계가 끝나는 곳 1-4\r\n"
                                               + "#L450012420#(Lv.220~250) 리맨 - 세계의 끝나는 곳 2-3#l\r\n"
                                                + "\r\n#e#r※신규 맵 #b고#g통#r의#b미#d궁#k#b#n\r\n"
                                               + "#L450011610#(Lv.220~250) 고통의미궁 - 고통의 미궁 최심부2\r\n"
                                               + "#L450011630#(Lv.220~250) 고통의미궁 - 고통의 미궁 최심부4\r\n"
                                               + "#L450011520#(Lv.220~250) 고통의미궁 - 고통의 미궁 중심부2\r\n"
                                               + "#L450011540#(Lv.220~250) 고통의미궁 - 고통의 미궁 중심부4\r\n"
                                               + "#L450011410#(Lv.220~250) 고통의미궁- 고통의 미궁 내부2\r\n"
                                               + "#L450011430#(Lv.220~250) 고통의미궁 - 고통의 미궁 내부4\r\n");
			break;


			case 3:
				cm.dispose();
				cm.openNpc(9071003);
                        break;
			case 5:
				cm.dispose();
				cm.warp(970060000,0);
			break;
			case 4:
				cm.dispose();
				cm.openNpc(2159314);
			break;
                        case 6:
		cm.sendSimple("#fn나눔고딕 Extrabold##r[알림]#k #h #님 원하시는 이벤트맵를 선택해주세요.#b\r\n"
                 + "#L109020001# #e#rOX퀴즈#k#n#d맵을 선택하겠습니다.\r\n"
                 + "#L180010002# #e#r하얀 쉼터#k#n#d 선택하겠습니다.\r\n"
                 + "#L922290000# #e#r빙고#k#n#d맵으로 선택하겠습니다.\r\n"
                 + "#L993014000# #e#r아이스콜드#k#n#d맵으로 선택하겠습니다.\r\n"
                 + "#L993017000# #e#r와글와글하우스(블록쌓기)#k#n#d 선택하겠습니다.\r\n");
			break;
                        case 7:
		cm.sendSimple("#fn나눔고딕 Extrabold##r[알림]#k #h # Please select a map you would like to go to.#b\r\n"
                  + "#L230040401#Wrecked Boat Deep Sea Aquarium.\r\n"
                  + "#L200090001#Orbis Boat Cabin\r\n"
                  + "#L200110020#Flight Travel to Ludibrium \r\n"
                  + "#L100000100#Henesys\r\n"
                  + "#L103000000#Kerning City\r\n"
                  + "#L101000000#Ellinia\r\n"
                  + "#L102000000#Perion\r\n"
                  + "#L310000000#Edelstein\r\n"
                  + "#L105000000#Sleepywood\r\n"
                  + "#L130000000#Ereve\r\n"
                  + "#L101050000#Elluel\r\n"
                  + "#L140000000#Rien\r\n"
                  + "#L200000000#Orbis\r\n"
                  + "#L211000000#El Nath\r\n"
                  + "#L220000000#Ludibrium\r\n"
                  + "#L240000000#Leafre\r\n"
                  + "#L260000000#Ariant\r\n"
                  + "#L261000000#Magatia\r\n"
                  + "#L252000000#Golden Temple\r\n"
                  + "#L100040000#Colossus Giant\r\n"
                  + "#L273000000#Twilight Perion\r\n"
                  + "#L219000000#Coca Cola town\r\n"
                  + "#L105200000#Root Abyss.\r\n"
                  + "#L931050810#Pantheon Hideout.\r\n"
                  + "#L105300000#Fallen World Tree\r\n"
                  + "#L450003330#Lacheln\r\n"
                  + "#L103041000#Kerning Tower\r\n"
                  + "#L450005000#Arcana\r\n"
                  + "#L450002000#Chu Chu Island\r\n"
                  + "#L450001000#Nameless Town\r\n"
                  + "#L450006130#Moras Truepe Square\r\n"
                  + "#L450007040#Espera ( Base Camp )\r\n"
                  + "#L180000002#GM2\r\n"
                  + "#L180000003#GM3\r\n"
                  + "#L180000004#GM4\r\n"
                  + "#L180000000#GM Main Map\r\n"
                  + "#L180000001#GM\r\n");
			break;
                        case 8:
				cm.dispose();
				cm.warp(993014000,0);
			break;
                        case 9:
				cm.dispose();
				cm.warp(993017000,0);
			break;
                        case 10:
				cm.dispose();
				cm.warp(100000202,0);
			break;
                        case 11:
				cm.dispose();
				cm.warp(910530000,0);
			break;
                        case 12:
				cm.dispose();
				cm.warp(910130000,0);
			break;
                        case 13:
				cm.dispose();
				cm.warp(100000001,0);
			break;
                        case 15:
				cm.dispose();
				cm.warp(100000055,0);
			break;
}
}
	else if(St == 2)
	{
		cm.dispose();
		cm.warp(S, "sp");
	}
}
function z(i, z)
{
	switch(z)
	{
		case 1:
		return "#fn돋움체#"+i+"  #fn돋움#";

		case 2:
		return "#fn돋움체#"+i+" #fn돋움#";

		default:
		return "#fn돋움체#"+i+"#fn돋움#";
	}
}
