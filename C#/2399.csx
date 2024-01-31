int qtdCelulas = int.Parse(Console.ReadLine());
int[] vetor = new int[qtdCelulas];
for(int i = 0; i < qtdCelulas; i++){
	vetor[i] = int.Parse(Console.ReadLine());
}
for(int i = 0; i < qtdCelulas; i++){
	if(qtdCelulas == 1)
    Console.WriteLine(vetor[i]);
  else if(i == 0)
    Console.WriteLine($"{vetor[i] + vetor[i + 1]}");
  else if(i == qtdCelulas - 1)
    Console.WriteLine($"{vetor[i] + vetor[i - 1]}");
  else
    Console.WriteLine($"{vetor[i] + vetor[i + 1] + vetor[i - 1]}");
}