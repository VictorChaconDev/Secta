<template>
  <div class="min-h-screen py-10 px-4 text-white">
    <div class="max-w-3xl mx-auto bg-zinc-900 rounded-2xl shadow-lg p-6">
      <h1 class="text-3xl font-bold text-center mb-8">Quina probabilitat tens de ser reclutat per una secta?</h1>

      <!-- Edad -->
      <div class="mb-6">
        <label for="edad" class="block text-lg font-medium mb-2">Edat:</label>
        <input
          id="edad"
          v-model="form.Edad"
          type="text"
          class="w-full p-2 rounded-md border border-zinc-700 bg-zinc-800 text-white placeholder-zinc-400"
          placeholder="Introdueix la teva edat"
        />
      </div>

      <!-- Preguntas -->
      <div
        v-for="pregunta in preguntas"
        :key="pregunta.clave"
        class="mb-8"
      >
        <p class="text-lg font-semibold mb-3">{{ pregunta.texto }}</p>
        <div class="flex flex-col gap-2">
          <button
            v-for="opcion in pregunta.opciones"
            :key="opcion.valor"
            @click="responder(pregunta.clave, opcion)"
            :class="[
              'py-2 px-4 rounded-md border transition-all',
              form.preguntes[pregunta.clave] === opcion.valor
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700'
            ]"
          >
            {{ opcion.valor }}) {{ opcion.texto }}
          </button>
        </div>
      </div>

      <!-- Botón enviar -->
      <button
        @click="enviar"
        class="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
      >
        Aceptar
      </button>

      <!-- Mensaje de error -->
      <div v-if="error" class="mt-4 text-center text-red-500 font-semibold">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Questionario } from '../../models/Questionario'

const error = ref<string | null>(null)

interface Opcion {
  valor: string
  texto: string
  puntos: number
}

interface Pregunta {
  clave: keyof Questionario['preguntes']
  texto: string
  opciones: Opcion[]
}

const form = ref(new Questionario())

const preguntas: Pregunta[] = [
  {
    clave: 'pregunta1',
    texto: 'Com reacciones davant promeses de resoldre tots els teus problemes?',
    opciones: [
      { valor: 'a', texto: 'Desconfio i ho qüestiono tot', puntos: 0 },
      { valor: 'b', texto: 'Escolto amb interès, però analitzo abans de creure', puntos: 2 },
      { valor: 'c', texto: 'Sona genial! Tots necessitem solucions', puntos: 4 }
    ]
  },
  {
    clave: 'pregunta2',
    texto: 'Amb quina facilitat confies en desconeguts?',
    opciones: [
      { valor: 'a', texto: 'Em costa molt confiar', puntos: 0 },
      { valor: 'b', texto: 'Depèn de la situació i de la persona', puntos: 2 },
      { valor: 'c', texto: 'Solc confiar en les persones, crec que són bones per naturalesa', puntos: 4 }
    ]
  },
  {
    clave: 'pregunta3',
    texto: 'Et consideres una persona amb necessitat de pertànyer a un grup?',
    opciones: [
      { valor: 'a', texto: "No, m'agrada ser independent", puntos: 0 },
      { valor: 'b', texto: 'Una mica, però prefereixo mantenir la meva individualitat', puntos: 2 },
      { valor: 'c', texto: "Si, em sento millor formant part d'alguna cosa més gran", puntos: 4 }
    ]
  },
  {
    clave: 'pregunta4',
    texto: 'Fins a quin punt ers crític/a amb les teves creences o decisions?',
    opciones: [
      { valor: 'a', texto: "Molt crític/a, sempre les reviso", puntos: 0 },
      { valor: 'b', texto: "De vegades, però no m'obsessiono a qüestionar-les", puntos: 2 },
      { valor: 'c', texto: "Poc crític/a, confio en els meus instints", puntos: 4 }
    ]
  },
  {
    clave: 'pregunta5',
    texto: "Com reacciones davant figures d'autoritat carismàtiques?",
    opciones: [
      { valor: 'a', texto: "No m'impressiona l'autoritat, analitzo les seves accions", puntos: 0 },
      { valor: 'b', texto: "Si semblen sincers, els escolto", puntos: 2 },
      { valor: 'c', texto: "Em sento inspirat/da i m'agrada seguir les seves idees", puntos: 4 }
    ]
  },
  {
    clave: 'pregunta6',
    texto: "Com d'obert/a estàs a noves filosofies o ideologies?",
    opciones: [
      { valor: 'a', texto: "Molt tancat/da, em quedo amb el que conec", puntos: 0 },
      { valor: 'b', texto: "Escolto, però només adopto el que té sentit per a mi", puntos: 2 },
      { valor: 'c', texto: "Sempre busco noves idees, em fascinen", puntos: 4 }
    ]
  }
]

function responder(pregunta: keyof typeof form.value.preguntes, opcion: Opcion) {
  if (form.value.preguntes[pregunta] !== opcion.valor) {
    form.value.seleccionarRespuesta(pregunta, opcion.valor, opcion.puntos)
  }
}

function enviar() {
  // Comprobar si hay campos vacíos
  if (!form.value.Edad.trim()) {
    error.value = 'Has d’introduir la teva edat.'
    return
  }

  const sinResponder = preguntas.some(
    (p) => !form.value.preguntes[p.clave]
  )

  if (sinResponder) {
    error.value = 'Has de respondre totes les preguntes.'
    return
  }

  // Si todo está bien
  error.value = null
  console.log('Formulario preparado para el backend:', form.value)
  // Aquí puedes hacer el POST cuando el backend esté listo
}
</script>
