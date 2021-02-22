<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER resultat" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" totalBoucles="5000000" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#chiffre1" algoitem="chiffre1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#chiffre2" algoitem="chiffre2 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#resultat" algoitem="resultat EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#chiffre1#pasliste" algoitem="LIRE chiffre1"/>
        <item code="2#chiffre2#pasliste" algoitem="LIRE chiffre2"/>
        <item code="5#resultat#chiffre1 * chiffre2#pasliste" algoitem="resultat PREND_LA_VALEUR chiffre1 * chiffre2"/>
        <item code="3#resultat#1#pasliste" algoitem="AFFICHER resultat"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
