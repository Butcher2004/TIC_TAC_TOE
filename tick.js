var arr;
var x_num =0;
var o_num = 0;
var score_x = 0;
var score_o = 0;
var lev = 0;

function start()
{
    arr = [["-","-","-"],["-","-","-"],["-","-","-"]];
    k0.disabled = false;
    k1.disabled = false;
    k2.disabled = false;
    k3.disabled = false;
    k4.disabled = false;
    k5.disabled = false;
    k6.disabled = false;
    k7.disabled = false;
    k8.disabled = false;
}
function greet(a)
{
    var b = document.getElementById(a);
    if(b.innerHTML =='-')
    {
        b.innerHTML = 'X';
    }
    
}
function res()
{
    var arr1 = ["k0","k1","k2","k3","k4","k5","k6","k7","k8"];
    for(var i = 0;i<9;i++)
    {
        var x = document.getElementById(arr1[i]);
        x.innerHTML = "-"
    }
    arr = [["-","-","-"],["-","-","-"],["-","-","-"]];
    var e = document.getElementById("win")
    e.innerHTML = "";
    o_num = 0;
    x_num = 0;

}

function check(i,j,sym)
{
    var res = 0;
    if(j==0)
    {
        for(var t = 1;t<3;t++)
        {
            if(arr[i][j+t]==sym)
            {
                res = res+1;
            }
        }
        if(res==2)
        {
            return true;
        }
        else{
            res = 0;
        }
    }
    if(j==1)
    {
        if(arr[i][j-1] == sym && arr[i][j+1] == sym)
        {
            return true;
        }
    }
    if(j==2)
    {
        for(var t = 1;t<3;t++)
        {
            if(arr[i][j-t]==sym)
            {
                res = res+1;
            }
        }
        if(res==2)
        {
            return true;
        }
        else{
            res = 0;
        }
        
    }
    if(i==0)
    {
        for(var t = 1;t<3;t++)
        {
            if(arr[i+t][j]==sym)
            {
                res = res+1;
            }
        }
        if(res==2)
        {
            return true;
        }
        else{
            res = 0;
        }
    }
    if(i==1)
    {
        if(arr[i-1][j] == sym && arr[i+1][j] == sym)
        {
            return true;
        }
    }
    if(i==2)
    {
        for(var t = 1;t<3;t++)
        {
            if(arr[i-t][j]==sym)
            {
                res = res+1;
            }
        }
        if(res==2)
        {
            return true;
        }
        
    }
    if(i==0 && j==0)
    {
        if(arr[1][1] == sym && arr[2][2]==sym)
        {
            return true;
        }
    }
    if(i==0 && j==2)
    {
        if(arr[1][1] == sym && arr[2][0]==sym)
        {
            return true;
        }
    }
    if(i==2 && j==0)
    {
        if(arr[1][1] == sym && arr[0][2]==sym)
        {
            return true;
        }
    }
    if(i==2 && j==2)
    {
        if(arr[1][1] == sym && arr[0][0]==sym)
        {
            return true;
        }
    }
    if(i==1 && j==1)
    {
        if(arr[0][0] == sym && arr[2][2]==sym)
        {
            return true;
        }
        if(arr[0][2] == sym && arr[2][0]==sym)
        {
            return true;
        }
    }
    return false;

}
function convert(i,j)
{
    if(i==0 && j==0)
    {
        return "k0";
    }
    if(i==0 && j==1)
    {
        return "k1";
    }
    if(i==0 && j==2)
    {
        return "k2";
    }
    if(i==1 && j==0)
    {
        return "k3";
    }
    if(i==1 && j==1)
    {
        return "k4";
    }
    if(i==1 && j==2)
    {
        return "k5";
    }
    if(i==2 && j==0)
    {
        return "k6";
    }
    if(i==2 && j==1)
    {
        return "k7";
    }
    if(i==2 && j==2)
    {
        return "k8";
    }
}
function final(ind)
{
    var m = document.getElementById(ind);
    if(m.innerHTML=="-" && (x_num!=1) && (o_num!=1))
    {
        greet(ind);
        
        var i;
        var j;
        if(ind == "k0")
        {
            i = 0;
            j = 0;
        }
        if(ind == "k1")
        {
            i = 0;
            j = 1;
        }
        if(ind == "k2")
        {
            i = 0;
            j = 2;
        }
        if(ind == "k3")
        {
            i = 1;
            j = 0;
        }
        if(ind == "k4")
        {
            i = 1;
            j = 1;
        }
        if(ind == "k5")
        {
            i = 1;
            j = 2;
        }
        if(ind == "k6")
        {
            i = 2;
            j = 0;
        }
        if(ind == "k7")
        {
            i = 2;
            j = 1;
        }
        if(ind == "k8")
        {
            i = 2;
            j = 2;
        }
        arr[i][j] = "X";
        var count = 0;
        for(var a = 0;a<3;a++)
        {
            for(var b = 0;b<3;b++)
            {
                if(arr[a][b]=="-")
                {
                    
                    count = count+1;
                }
            }
        }
        if(count==0)
        {
            var z = document.getElementById("win");
            z.innerHTML = "TIE!";
        }
        outerloop: for(var a = 0;a<3;a++)
        {
            for(var b = 0;b<3;b++)
            {
                if(arr[a][b]=="X")
                {
                    if(check(a,b,"X"))
                    {
                        x_num = 1;
                        break outerloop;
                    }
                    
                    
                }
            }
        }
        if(x_num==1)
        {
            var e = document.getElementById("win");
            e.innerHTML = "YOU WON";
            score_x = score_x+1;
            var f = document.getElementById("x_score");
            f.innerHTML = score_x;
        }


        if(x_num!=1)        
        {    
            if(count==8 & lev==3)
            {
                if(i==1 & j==1)
                {
                    var choice = [[0,0],[0,2],[2,0],[2,2]]
                    var indi = Math.floor(Math.random()*choice.length);
                    var a = choice[indi][0];
                    var b = choice[indi][1];
                    arr[a][b] = "O";
                    var t = document.getElementById(convert(a,b));
                    t.innerHTML = "O";
                }
                if((i==0 && j==0) || (i==0 && j==2) || (i==2 && j==0) || (i==2 && j==2))
                {
                    arr[1][1] = "O"
                    var t = document.getElementById(convert(1,1));
                    t.innerHTML = "O";
                }
                if(i==0 && j==1)
                {
                    var choice = [[0,0],[0,2]]
                    var indi = Math.floor(Math.random()*choice.length);
                    var a = choice[indi][0];
                    var b = choice[indi][1];
                    arr[a][b] = "O";
                    var t = document.getElementById(convert(a,b));
                    t.innerHTML = "O";
                }
                if(i==1 && j==0)
                {
                    var choice = [[0,0],[2,0]]
                    var indi = Math.floor(Math.random()*choice.length);
                    var a = choice[indi][0];
                    var b = choice[indi][1];
                    arr[a][b] = "O";
                    var t = document.getElementById(convert(a,b));
                    t.innerHTML = "O";
                }
                if(i==1 && j==2)
                {
                    var choice = [[0,2],[2,2]]
                    var indi = Math.floor(Math.random()*choice.length);
                    var a = choice[indi][0];
                    var b = choice[indi][1];
                    arr[a][b] = "O";
                    var t = document.getElementById(convert(a,b));
                    t.innerHTML = "O";
                }
                if(i==2 && j==1)
                {
                    var choice = [[2,0],[2,2]]
                    var indi = Math.floor(Math.random()*choice.length);
                    var a = choice[indi][0];
                    var b = choice[indi][1];
                    arr[a][b] = "O";
                    var t = document.getElementById(convert(a,b));
                    t.innerHTML = "O";
                }
            }
            else
            {
                var dec = 0;
                
                outerloop: for(var a = 0;a<3;a++)
                    {
                        for(var b = 0;b<3;b++)
                        {
                            if(arr[a][b]=="-")
                            {
                                if(check(a,b,"O"))
                                {
                                    var t = document.getElementById(convert(a,b));
                                    t.innerHTML = "O";
                                    arr[a][b] = "O";
                                    dec = 1;
                                    break outerloop;
                                }
                                
                            }
                        }
                    }
                if(dec==0 && lev!=1)
                {
                    outerloop: for(var a = 0;a<3;a++)
                {
                    for(var b = 0;b<3;b++)
                    {
                        if(arr[a][b]=="-")
                        {
                            if(check(a,b,"X"))
                            {
                                var t = document.getElementById(convert(a,b));
                                t.innerHTML = "O";
                                arr[a][b] = "O";
                                dec = 1;
                                break outerloop;
                            }
                            
                        }
                    }
                }
                }
                if(dec==0)
                {
                    if(arr[1][1]=="-" && lev==3)
                    {
                        var t = document.getElementById(convert(1,1));
                        t.innerHTML = "O";
                        arr[1][1] = "O";
                        dec = 1;
                    }
                    else
                    {
                        var lp = 1;
                        count = 0;
                        for(var a = 0;a<3;a++)
                        {
                            for(var b = 0;b<3;b++)
                            {
                                if(arr[a][b]=="-")
                                {
                                    
                                    count = count+1;
                                }
                            }
                        }
                        if(count!=0)
                        {
                            while(lp==1)
                            {
                                var choice = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
                                var indi = Math.floor(Math.random()*choice.length);
                                var a = choice[indi][0];
                                var b = choice[indi][1];
                                if(arr[a][b]=="-")
                                {
                                    var t = document.getElementById(convert(a,b));
                                    t.innerHTML = "O";
                                    arr[a][b] = 'O';
                                    lp = 0;
                                }
                            }
                        }
                    }
                }
            }
            
            outerloop: for(var a = 0;a<3;a++)
            {
                for(var b = 0;b<3;b++)
                {
                    if(arr[a][b]=="O")
                    {
                        if(check(a,b,"O"))
                        {
                            o_num = 1;
                            break outerloop;
                        } 
                    }
                }
            }
            
                
            
            if(o_num==1 && x_num!==1)
            {
                var e = document.getElementById("win");
                e.innerHTML = "YOU LOST";
                score_o = score_o+1;
                var f = document.getElementById("o_score");
                f.innerHTML = score_o;
            }
            
        }  
        
    }
}

function decide(val)
{
    start();
    res();
    score_o = 0;
    score_x = 0;
    var f = document.getElementById("o_score");
    f.innerHTML = score_o;
    var e = document.getElementById("x_score");
    e.innerHTML = score_x;
    lev = val;
}

