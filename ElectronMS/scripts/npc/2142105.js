// Justice Unlock NPC in Lobby.

importPackage(Packages.packet.creators);
importPackage(Packages.handler.channel);
importPackage(Packages.constants);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.tools);
importPackage(java.util);

var txe = 0;

function action(mode, type, selection) {

    if (txe == 0) {
        cm.sendNext("Temporarily Debug Justice Boss Unlock.");
        cm.getChar().setKeyValue("JusticeUnlock", "ok");
        cm.dispose();
        return;
        }
    }