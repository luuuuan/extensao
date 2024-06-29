let vendido = document.querySelector('#vendido');
let metaMes = document.querySelector('#metaMes');
let metaMin = document.querySelector('#metaMin');
let btnResultado = document.querySelector('#btnResultado');
let h2metas = document.querySelector('#metas');
let percentualMeta = document.querySelector('#percentualMeta');
let percentualMetaMinima = document.querySelector('#percentualMetaMinima');

function Vendas(){
    let vendas = Number(vendido.value);
    let meta = Number(metaMes.value);
    let minimo = Number(metaMin.value);

    let percMeta = Math.round((vendas / meta)*100) ;
    let percMetaMin = Math.round((vendas/minimo)*100);
    
    if (vendas >= meta){
        h2metas.textContent = "Meta batida";
    } else if(vendas >= minimo){
        h2metas.textContent = "Meta minima do mês batida";
    }else{
        metas.textContent = "Meta do mês não batida";
    }
    percentualMeta.textContent = "Percentual da meta do mês atingido: " + percMeta + "%";
    percentualMetaMinima.textContent = "Percentual da meta minima do mês atingido: " + percMetaMin + "%";

}

btnResultado.onclick = function(){
    Vendas();
}