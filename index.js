import express from 'express'

const app = express()

const holidays = [
    { date: "01/01/2022", name: "Confraternização mundial" },
    { date: "01/03/2022", name: "Carnaval" },
    { date: "17/04/2022", name: "Páscoa" },
    { date: "21/04/2022", name: "Tiradentes" },
    { date: "01/05/2022", name: "Dia do trabalho" },
    { date: "16/06/2022", name: "Corpus Christi" },
    { date: "09/07/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "02/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
  ];

app.get("/holidays", (request, response)=>{
    response.send(holidays)
})

app.get("/is-today-holiday", (request, response)=>{
    const hoje = new Date()
    let menssagem = 'Não, hoje não é feriado'

    for(let i=0; i<holidays.length; i++){
        if(holidays[i].date === hoje.toLocaleDateString()){
            menssagem = `Sim, hoje é ${holidays[i].name}`
            break
        }
    }

    response.send(menssagem)
})

app.listen(5000)