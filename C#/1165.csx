int qtdTestes = int.Parse(Console.ReadLine());
int contador = 0;
for(int i = 0; i < qtdTestes; i++){
  long N = long.Parse(Console.ReadLine());
  
  for(int j = 2; j < N; j++){
    if(N % j == 0) contador++;
  }
  if(contador > 0) Console.WriteLine($"{N} nao eh primo");
  else Console.WriteLine($"{N} eh primo");
  contador = 0;
}