do {
    string[] valores = Console.ReadLine().Split();
    int M = int.Parse(valores[0]);
    int N = int.Parse(valores[1]);
    int soma = 0;
    if (M > 0 && N > 0) {
        if (M > N) {
            for (N = N; N <= M; N++) {
                Console.Write($"{N} ");
                soma += N;
            }
            Console.WriteLine($"Sum={soma}");
        }
        else {
            for (M = M; M <= N; M++) {
                Console.Write($"{M} ");
                soma += M;
            }
            Console.WriteLine($"Sum={soma}");
        }
    }
    else break;
} while(true);