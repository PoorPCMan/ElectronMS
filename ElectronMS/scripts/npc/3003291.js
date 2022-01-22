// Music Player Test - Hotoke

var status = 0;
var musicplayer

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
 } else {
 if (mode == 0) {
  cm.sendOk("Change music?");
  cm.dispose();
 }
  status++;
  if(status == 0) {
   cm.sendSimple ("#h ##kHello !.\r\nBGM Map Changer\r\n#I#L0# [Missing You BGM02] ");
  } else if(status == 1) {
    musicplayer = cm.getChar().getName();
    if (selection == 0) {
    if(cm.getMeso() > 1000000 == true) {
     cm.gainMeso(-1000000);
     cm.changeMusic("Bgm02/MissingYou");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e Missing You BGM02");
     cm.mapMessage("[BGM] "+ musicplayer +" Ellinia - Missing You.");
     cm.dispose();
    } else {
     cm.sendOk("Not enough mesos.");
     cm.dispose();
    }
    /*} else if (selection == 1) {
    if(cm.getMeso() > 1000000 == true) {
     cm.gainMeso(-1000000);
    } else {
     cm.sendOk("Not enough mesos".);
     cm.dispose();
    }*/

 }
}
}
}
