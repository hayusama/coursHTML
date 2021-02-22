<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SINON" texte="Affichage table multiplication d'un chiffre demandé à l'utilisateur"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" nbDecimales="8" epaisseurLigne="2" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" maxBoucle="500000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre"/>
        <item algoitem="resultat EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat"/>
        <item algoitem="resultat2 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat2"/>
        <item algoitem="resultat3 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat3"/>
        <item algoitem="resultat4 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat4"/>
        <item algoitem="resultat5 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat5"/>
        <item algoitem="resultat6 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat6"/>
        <item algoitem="resultat7 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat7"/>
        <item algoitem="resultat8 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat8"/>
        <item algoitem="resultat9 EST_DU_TYPE NOMBRE" code="1#NOMBRE#resultat9"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE chiffre" code="2#chiffre#pasliste"/>
        <item algoitem="SI (chiffre &lt; 1 OU chiffre > 9) ALORS" code="6#chiffre &lt; 1 OU chiffre > 9">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Mauvaise saisie&quot;" code="4#Mauvaise saisie#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="resultat PREND_LA_VALEUR 1 * chiffre" code="5#resultat#1 * chiffre#pasliste"/>
                <item algoitem="AFFICHER &quot;1 *&quot;" code="4#1 *#0"/>
                <item algoitem="AFFICHER chiffre" code="3#chiffre#0#pasliste"/>
                <item algoitem="AFFICHER &quot;=&quot;" code="4#=#0"/>
                <item algoitem="AFFICHER resultat" code="3#resultat#1#pasliste"/>
                <item algoitem="resultat2 PREND_LA_VALEUR 2 * chiffre" code="5#resultat2#2 * chiffre#pasliste"/>
                <item algoitem="AFFICHER &quot;2 *&quot;" code="4#2 *#0"/>
                <item algoitem="AFFICHER chiffre" code="3#chiffre#0#pasliste"/>
                <item algoitem="AFFICHER &quot;=&quot;" code="4#=#0"/>
                <item algoitem="AFFICHER resultat2" code="3#resultat2#1#pasliste"/>
                <item algoitem="resultat3 PREND_LA_VALEUR 3 * chiffre" code="5#resultat3#3 * chiffre#pasliste"/>
                <item algoitem="AFFICHER &quot;3*&quot;" code="4#3*#0"/>
                <item algoitem="AFFICHER chiffre" code="3#chiffre#0#pasliste"/>
                <item algoitem="AFFICHER &quot;=&quot;" code="4#=#0"/>
                <item algoitem="AFFICHER resultat3" code="3#resultat3#1#pasliste"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
