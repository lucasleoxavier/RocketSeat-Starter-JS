function pares (ini, fim)
{
    for(var i = ini; i<=fim; i++)
    {
        if (i % 2 == 0)
        {
            console.log(i);
        }
    }
}

pares(32, 526);