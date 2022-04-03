const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
  },
  filters: {
    numeroParaPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    async fetchProdutos() {
      const response = await fetch("./api/produtos.json");
      const data = await response.json();
      this.produtos = data;
    },
    async fetchProduto(produto) {
      const response = await fetch(`./api/produtos/${produto}/dados.json`);
      const data = await response.json();
      this.produto = data;
    }
  },
  created() {
    this.fetchProdutos();
  },
});
