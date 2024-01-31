string risada = Console.ReadLine();
string vogais = "", vogaisInvertida = "";
for(int i = 0; i < risada.Length; i++){
  char letra = risada[i];
  switch(letra){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      vogais += letra; break;
    default: break;  
  }
}

for(int i = vogais.Length - 1; i > -1; i--){
  vogaisInvertida += vogais[i];
}

if(vogais == vogaisInvertida) Console.WriteLine("S");
else Console.WriteLine("N");