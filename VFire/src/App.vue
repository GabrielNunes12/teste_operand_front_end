<template>
  <div id="app">
    <div>
      CRUD usando VUEJS + Firebase
      <hr>
      <div class="formulario">
        <label>
          Nome:
        </label>
        <input type="text" v-model="nome"/>
        <br>
        <label>
          Profissão:
        </label>
        <input type="text" v-model="job"/>
        <br>
        <button @click="addPessoa">
          Adicionar
        </button>
      </div>
      <div>
        <ul>
          <li v-for="nomePessoa in nomesRef" :key="nomePessoa['.key']">
            <div v-if="!nomePessoa.edit"> 
              <p>
                Nome - {{nomePessoa.nome}}
                <br>
                Profissao - {{nomePessoa.job}}
                <br>
                <button @click="removerPessoa(nomePessoa['.key'])">
                  Remover
                </button>
                <button @click="editarPessoa(nomePessoa['.key'])">
                  Editar
                </button>
              </p> 
            </div>
            <div v-else>
              <input type="text" v-model="nomePessoa.nome"/>
              <br>
              <input type="text" v-model="nomePessoa.job"/>
              <br>
              <button @click.prevent="salvarPessoa(nomePessoa)">
                Salvar
              </button>
            </div>
            <br>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {namesRef} from './Firebase'
export default {
  data () {
    return {
      nome: '',
      job: '',
      nomesRef: []
    }
  },
  firebase:{
    nomesRef:namesRef,
  },
  methods: {
    addPessoa(){
      let nomesRef = namesRef.push({nome: this.nome, edit: false, job: this.job})
      
    },
    removerPessoa(key){
      this.nomesRef.splice(key, 1);
      namesRef.child(key).remove();
    },
    editarPessoa(key){
      namesRef.child(key).update({edit: true});
    },
    salvarPessoa(nomePessoa){
      const chave = nomePessoa['.key'];
      namesRef.child(chave).set({nome: nomePessoa.nome, job: nomePessoa.job, edit: false});
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.formulario{
  width: 170px;
  border: 3px aqua solid;
  margin: 20px auto;
  background-color: rgb(102, 201, 255);
}
button{
  border: 2px;
  background-color: transparent;
}
</style>
