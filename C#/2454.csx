string[] portinhas = Console.ReadLine().Split();
int P = int.Parse(portinhas[0]);
int R = int.Parse(portinhas[1]);
if(P == 0 && R == 0)
  Console.WriteLine("C");
else if(P == 0 && R == 1)
  Console.WriteLine("C");
else if (P == 1 && R == 0)
  Console.WriteLine("B");
else
  Console.WriteLine("A");