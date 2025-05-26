<template>
  <!-- Contenidor principal que ocupa tota la pantalla -->
  <div class="h-screen w-screen flex flex-col text-white">
    <!-- TÍTOL -->
    <div class="text-center text-4xl md:text-5xl lg:text-6xl font-now py-4">
      EQUIP TÈCNIC
    </div>

    <!-- TEXT -->
    <div class="flex-1 p-4 flex flex-col">
      <!-- Contenidor responsive -->
      <div class="flex-1 flex flex-col lg:flex-row justify-center items-center w-full gap-4 pb-16">
        <!-- Text esquerre -->
        <div class="bg-white px-4 py-2 w-full md:max-w-[90%] lg:max-w-[40%] h-full overflow-auto text-black">
          <p class="font-now text-2xl p-5 leading-relaxed">
            En plena era digital, on les xarxes socials marquen la pauta del pensament col·lectiu, cada vegada és més difícil distingir entre moviments
            legítims i <b>organitzacions que amaguen intencions ocultes.</b> El nostre projecte multimèdia explora un fenomen alarmant però real: la manipulació
            social que exerceixen certs grups que, sota la façana d'activisme en el que tenen un objectiu de millora i canvi, <b>amaguen estructures sectàries
            amb objectius econòmics o de control.</b> <br><br>
            Segons informes de la Red de Prevención del Sectarismo,<b> cada vegada hi ha més joves captats per grups que prometen solucions</b> a crisis com el canvi
            climàtic o la insatisfacció vital. <b>Aprofitant la vulnerabilitat emocional i el desig de pertinença,</b> aquests col·lectius utilitzen estratègies de
            seducció emocional, lideratges carismàtics i discurs ideològic per atraure i retenir membres.
          </p>
        </div>

        <!-- Separador vertical blanc amb espai (mx-10 per seprar textos mes del separador)-->
        <div class="w-full lg:w-1 h-1 lg:h-full bg-white mx-0 lg:mx-10 my-4 lg:my-0"></div>

        <!-- Text dret -->
        <div class="bg-white px-4 py-2 w-full md:max-w-[90%] lg:max-w-[40%] h-full overflow-auto text-black">
          <p class="font-now text-2xl leading-relaxed p-5">
            A través d’un curtmetratge i un blog narratiu, presentem, per una banda, la història fictícia de Raquel, una estudiant reclutada per una
            aparent organització ecologista que resulta ser una secta universitària. I, per l’altre banda, la història de Caleb, un estudiant que investiga
            aquesta organització. Aquest relat, tot i ser ficció, es basa en <b>dinàmiques reals </b>que avui dia afecten centenars de joves arreu del món. <b>La incredulitat
            social</b> davant aquest tipus de manipulació sovint juga a favor dels captadors: <b>"a mi no em passaria mai",</b> pensen molts, sense adonar-se que el primer pas
            cap a la captació és justament <b>no detectar-ne els senyals.</b> <br><br>
            El nostre projecte busca fer <b>reflexionar sobre la necessitat de criteri propi, d’esperit crític i de suport emocional</b> per a aquells que busquen un lloc
            on sentir-se escoltats. Perquè darrere d’un discurs aparentment inofensiu pot amagar-se un mecanisme de control molt ben dissenyat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
