int L = int.Parse(Console.ReadLine());
string T = Console.ReadLine();
double soma = 0;

for(int i = 0; i < 2; i++){
  for(int j = 0; j < 2; j++){
    double N = double.Parse(Console.ReadLine());
    if(i == L) soma += N;
  }
}

if(T == "S") Console.WriteLine($"{soma:F1}");
else Console.WriteLine($"{(soma / 2):F1}");