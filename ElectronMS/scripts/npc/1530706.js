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
		+ "#k#d#fs11##L0##fUI/GuildMark.img/Mark/Pattern/00004001/10# #e#rLevel Hunting ground#k#n#d�� �̵��ϰ� �ͽ��ϴ�.#l\r\n"
		+ "#k#d#fs11##L500##fUI/GuildMark.img/Mark/Pattern/00004001/10# #e#rLevel Hunting Ground2#k#n#d�� �̵��ϰ� �ͽ��ϴ�.#l\r\n"
		+ "#k#d#fs11##L7##fUI/GuildMark.img/Mark/Pattern/00004001/14# #e#rExploration#k#n#dI want to use.#l\r\n"
                        + "#k#d#fs11##L6##fUI/GuildMark.img/Mark/Pattern/00004001/15# #dEvent map#e#r (O.X����,����,��)#k#n#d�� �̿��ϰ� �ͽ��ϴ�.#l\r\n"
                        //+ "#k#d#fs11##L15##fUI/GuildMark.img/Mark/Pattern/00004001/4# #e#r������#e#r#k#n#d�� �̿��ϰ� �ͽ��ϴ�.#l\r\n"
		+ "#k#d#fs11##L5##fUI/GuildMark.img/Mark/Pattern/00004001/14# #e#rBoss system#k#n#d�� �̿��ϰ� �ͽ��ϴ�.#l\r\n"
		+ "#k#d#fs11##L13##fUI/GuildMark.img/Mark/Pattern/00004001/14# #e#rComposition#k#n#d�� �̿��ϰ� �ͽ��ϴ�.#l\r\n"
			+ (cm.getPlayer().getJob() >= 3300 && cm.getPlayer().getJob() <= 3312 ? "#b#L4##dLeave this place #e��Ծ� ������#n�� �̵��ϰ� �ͽ��ϴ�.#l\r\n" : "")
 			);
	}

	else if(St == 1)
	{
		mapType = S;
		switch(mapType)
		{
			default:
			cm.sendSimple("�������� ������ �ּ���. #e#r�븻 ��� �̿��� ���������� ���#k#n�� ���������� �����ϸ� �����ϴ�.\r\n#b"
				+ "#b#L211042300#���񡡡�  �� Gate to Zakum����    �� ����, ī����#l\r\n"
				+ "#b#L240050400#ȥ���ϡ�  �� ȥ������ ���� �Ա�����  �� ����, ī����#l\r\n"
				+ "#b#L270050000#��ũ��  �� ������ Ȳȥ����������   �� ī����#l\r\n"
				+ "#b#L262030000#���󡡡�  �� ������ ž �Ա���������  �� �ϵ�#l\r\n"
				+ "#b#L211070000#�� ���¡� �� ������ �� ������������  �� ����#l\r\n"
				+ "#b#L272020110#��ī�̷�  �� ��ī�̷��� ���� �ա���  �� ����#l\r\n"
				+ "#b#L271040000#�ñ׳ʽ�  �� �ñ׳ʽ��� ����������   �� ����#l\r\n"
				+ "#b#L105200000#��Ÿ��  �� �Ŵ��� �Ѹ�����������   �� ī����#l\r\n"
				+ "#b#L401060000#�ű׳ʽ�  �� �︮�ÿ� �ֻ��� �Ա���  �� ����, �ϵ�#l\r\n"
				+ "#b#L350060300#���졡��  �� �ھ� �Ա�������������   �� �ϵ�#l\r\n"
				+ "#b#L105300303#���̾ȡ�  �� ����� �������� ���� �� �� �ϵ�#l\r\n"
				+ "#b#L450004000#��õ�    | �Ǹ��� �ð�ž           | ����, �ϵ�#l\r\n");
			break;

			case 0:
			cm.sendSimple("#fn������� Extrabold##r[�˸�]#k #h #�� ���Ͻô� ����͸� �������ּ���.#b\r\n"
                                               + "#b#L100040300#(Lv.10~30) Temple of the Golem 3\r\n"
                                               + "#b#L101070100#(Lv.10~30) Ellin -  A Midsummer Night's Forest\r\n"
                                               + "#b#L400010400#(Lv.30~60) Pantheon - Forest full of magic\r\n"
                                               + "#L141010100#(Lv.30~60) Riena Strait - Fossil Haunted Area\r\n"
                                               + "#L260020600#(Lv.60~100) Sunset Road - Sahel 2\r\n"
                                               + "#L251010402#(Lv.100~140) Mu Lung - Lair of the Red Nose Pirates 2#l\r\n"
                                               + "\r\n#e#r������ ��� ����͵��� ��Ÿ������ �ʿ���մϴ�.#k#b#n\r\n"
                                               + "#L240040510#(Lv.140~170) Minar Forest - Dead Dragon's Lair\r\n"
                                               + "#L271010000#(Lv.170~200) Future Henesys - �ı��� ��׽ý�\r\n"
                                               + "#L271030310#(Lv.170~200) Future Ereve - Stronghold 1#l\r\n"
                                               + "\r\n#e#r������ ��� ����͵��� ������ ���Ͱ� ���ɴϴ�.#k#b#n\r\n"
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
			cm.sendSimple("#fn������� Extrabold##r[�˸�]#k #h #�� Please select the desired hunting ground#b\r\n"
                                               + "\r\n#e#r������ ��� ����͵��� ������ ���Ͱ� ���ɴϴ�.#k#b#n\r\n"
                                                + "\r\n#e#r�ؽű� �� #b��#g��#rī#b��#b#n\r\n"
                                               + "#L450005430#(Lv.220~250) Arcana - Under the Cave\r\n"
                                               + "#L450005500#(Lv.220~250) Arcana - The Five Forked Cave\r\n"
                                               + "#L450005110#(Lv.220~250) Arcana - Water Forest #l\r\n"
                                                + "\r\n#e#r�ؽű� �� #b��#g��#r��#k#b#n\r\n"
                                               + "#L450006000#(Lv.220~250) Moras - Path to the Coral Forest 1\r\n"
                                               + "#L450006020#(Lv.220~250) Moras - Path to the Coral Forest 3\r\n"
                                               + "#L450006040#(Lv.220~250) Moras - Path to the Coral Forest 5\r\n"
                                               + "#L450006100#(Lv.220~250) Moras - Haunting Cats 1\r\n"
                                               + "#L450006140#(Lv.220~250) Moras - Brothers Zone 1\r\n"
                                               + "#L450006210#(Lv.220~250) Moras - Where the shadows dance 2\r\n"
                                               + "#L450006230#(Lv.220~250) Moras - Where the shadows dance 4\r\n"
                                               + "#L450006300#(Lv.220~250) Moras - Closed Area 1 #l\r\n"
                                                + "\r\n#e#r�ؽű� �� #b��#g��#r��#b��#k#b#n\r\n"
                                               + "#L450007010#(Lv.220~250) Espera - where life begins 2\r\n"
                                               + "#L450007030#(Lv.220~250) ������� - ������ ���۵Ǵ� ��4\r\n"
                                               + "#L450007110#(Lv.220~250) ������� - �ܿ���� ���� �ٴ�2\r\n"
                                               + "#L450007130#(Lv.220~250) ������� - �ܿ���� ���� �ٴ�4\r\n"
                                               + "#L450007210#(Lv.220~250) ������� - �ܿ￡ ��ģ ���� ����2\r\n"
                                               + "#L450007230#(Lv.220~250) ������� - �ܿ￡ ��ģ ���� ����4#l\r\n"
                                                + "\r\n#e#r�ؽű� �� #b��#g��#r��#d��#k#b#n\r\n"
                                               + "#L450009120#(Lv.220~250) ���긴�� - ����� ���2\r\n"
                                               + "#L450009140#(Lv.220~250) ���긴�� - ����� ���4\r\n"
                                               + "#L450009220#(Lv.220~250) ���긴�� - ������ �Ȱ�2\r\n"
                                               + "#L450009240#(Lv.220~250) ���긴�� - ������ �Ȱ�4\r\n"
                                               + "#L450009320#(Lv.220~250) ���긴�� - ������ �ĵ�2#l\r\n"
                                                + "\r\n#e#r�ؽű� �� #b��#g��#k#b#n\r\n"
                                               + "#L450012020#(Lv.220~250) ���� - ������ ���� �ϴ�1\r\n"
                                               + "#L450012040#(Lv.220~250) ���� - ������ ���� �ϴ�3\r\n"
                                               + "#L450012100#(Lv.220~250) ���� - ������ ���� �ߴ�1\r\n"
                                               + "#L450012120#(Lv.220~250) ���� - ������ ���� �ߴ�3\r\n"
                                               + "#L450012330#(Lv.220~250) ���� - ���谡 ������ �� 1-4\r\n"
                                               + "#L450012420#(Lv.220~250) ���� - ������ ������ �� 2-3#l\r\n"
                                                + "\r\n#e#r�ؽű� �� #b��#g��#r��#b��#d��#k#b#n\r\n"
                                               + "#L450011610#(Lv.220~250) �����ṉ̀� - ������ �̱� �ֽɺ�2\r\n"
                                               + "#L450011630#(Lv.220~250) �����ṉ̀� - ������ �̱� �ֽɺ�4\r\n"
                                               + "#L450011520#(Lv.220~250) �����ṉ̀� - ������ �̱� �߽ɺ�2\r\n"
                                               + "#L450011540#(Lv.220~250) �����ṉ̀� - ������ �̱� �߽ɺ�4\r\n"
                                               + "#L450011410#(Lv.220~250) �����ṉ̀�- ������ �̱� ����2\r\n"
                                               + "#L450011430#(Lv.220~250) �����ṉ̀� - ������ �̱� ����4\r\n");
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
		cm.sendSimple("#fn������� Extrabold##r[�˸�]#k #h #�� ���Ͻô� �̺�Ʈ�ʸ� �������ּ���.#b\r\n"
                 + "#L109020001# #e#rOX����#k#n#d���� �����ϰڽ��ϴ�.\r\n"
                 + "#L180010002# #e#r�Ͼ� ����#k#n#d �����ϰڽ��ϴ�.\r\n"
                 + "#L922290000# #e#r����#k#n#d������ �����ϰڽ��ϴ�.\r\n"
                 + "#L993014000# #e#r���̽��ݵ�#k#n#d������ �����ϰڽ��ϴ�.\r\n"
                 + "#L993017000# #e#r�ͱۿͱ��Ͽ콺(��Ͻױ�)#k#n#d �����ϰڽ��ϴ�.\r\n");
			break;
                        case 7:
		cm.sendSimple("#fn������� Extrabold##r[�˸�]#k #h # Please select a map you would like to go to.#b\r\n"
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
		return "#fn����ü#"+i+"  #fn����#";

		case 2:
		return "#fn����ü#"+i+" #fn����#";

		default:
		return "#fn����ü#"+i+"#fn����#";
	}
}
