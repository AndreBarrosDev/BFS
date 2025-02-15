const MAXV = 6;
const grafo = Array.from({ length: MAXV }, () => []);

// Função para adicionar arestas no grafo
function adicionarAresta(origem, destino) {
    grafo[origem].push(destino);
}

// Função de busca em largura (BFS)
function buscaEmLargura(inicio, alvo) {
    const fila = [];              // Fila para armazenar nós a serem visitados
    const visitado = Array(MAXV).fill(false);  // Vetor para marcar nós visitados

    console.log("=-=-=-= Busca em Largura =-=-=-=");

    fila.push(inicio); // Adiciona o nó inicial à fila
    visitado[inicio] = true;

    while (fila.length > 0) {
        const corrente = fila.shift(); // Remove o primeiro elemento da fila
        console.log(`VISITANDO: ${corrente}.`);

        if (corrente === alvo) {
            console.log(`Alvo encontrado! ${alvo}`);
            return;
        }

        // Adiciona todos os vizinhos não visitados à fila
        for (const vizinho of grafo[corrente]) {
            if (!visitado[vizinho]) {
                fila.push(vizinho); // Adiciona ao final da fila
                visitado[vizinho] = true; // Marca como visitado
            }
        }
    }

    console.log("Encerrando a busca. Alvo não encontrado.");
}

// Adicionando arestas ao grafo
adicionarAresta(0, 1);
adicionarAresta(0, 2);
adicionarAresta(1, 3);
adicionarAresta(1, 4);
adicionarAresta(2, 5);

// Chamada da busca em largura
const inicio = 0, alvo = 5;
buscaEmLargura(inicio, alvo);

