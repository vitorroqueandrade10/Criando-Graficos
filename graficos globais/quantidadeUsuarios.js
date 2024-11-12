import { getCSS, tickConfig } from ".common.js"

async function quantidadeUsuariosPorRede() {
   const url = "https://rawgithubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"
   const res = await fetch(url)
   const dados = await res.json()
   const nomeDasRedes = Object.keys(dados)
   const quantidadeUsuarios = Object.values(dados)
   
   const data = [
       {
           x: nomeDasRedes,
           y: quantidadedeusuarios,
           type: 'bar',
           marker: {
                color: getCSS('--primary-color')
           }
    }
]

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes Sociais com mais usuários',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            size: 30,
            font: getCSS('--font')
        } 
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Nome das redes',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickConfig,
        title: {
            text: 'Bilhões de usuários ativos',
            font: {
                color: getCSS('--seconfary-color')
            }
         }
    }
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementsById('graficos-container').appendChild(grafico)
}
