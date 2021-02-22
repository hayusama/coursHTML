<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER quotient" texte="Exercice 3 - Quotient"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" nbDecimales="8" epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" maxBoucle="500000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="numerateur EST_DU_TYPE NOMBRE" code="1#NOMBRE#numerateur"/>
        <item algoitem="denominateur EST_DU_TYPE NOMBRE" code="1#NOMBRE#denominateur"/>
        <item algoitem="quotient EST_DU_TYPE NOMBRE" code="1#NOMBRE#quotient"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE numerateur" code="2#numerateur#pasliste"/>
        <item algoitem="LIRE denominateur" code="2#denominateur#pasliste"/>
        <item algoitem="TANT_QUE (denominateur == 0) FAIRE" code="15#denominateur == 0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE denominateur" code="2#denominateur#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="quotient PREND_LA_VALEUR numerateur / denominateur" code="5#quotient#numerateur / denominateur#pasliste"/>
        <item algoitem="AFFICHER quotient" code="3#quotient#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
