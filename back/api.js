const express = require("express")
const ex = express()
const mysql = require("mysql2");

ex.use('/', express.static("C:/Users/andre/Desktop/Just Coding/WEB/TESTES_RM/InsercaoNotaBd/front/Index"));

ex.use(express.urlencoded({ extended: false }))
//O USE ACIMA SERVE PARA O REQ RECONHECER O NAME DO BODY (NO POST)

ex.get("/stylegrade", function (req, res) {
    res.sendFile("C:/Users/andre/Desktop/Just Coding/WEB/TESTES_RM/InsercaoNotaBd/front/PaginaNota/style.css")
})

ex.get("/img", function (req, res) {
    res.sendFile("C:/Users/andre/Desktop/Just Coding/WEB/TESTES_RM/InsercaoNotaBd/front/PaginaNota/img.webp")
})

ex.get("/script", function (req, res) {
    res.sendFile("C:/Users/andre/Desktop/Just Coding/WEB/TESTES_RM/InsercaoNotaBd/front/PaginaNota/script.js")
})


ex.get("/aluno", function (req, res) {

    var pessoa = req.query.usuario

    function conecta() {
        const user = "root";
        const banco = "db_escola";
        const port = 3306;
        const password = "";

        var conexao = mysql.createConnection({ host: "localhost", user: user, database: banco });
        return conexao
    }

    console.log("Iniciando...");

    const con = conecta()
    con.connect(function(err){
        if(err){
            console.log("O ERRO AQUI ----> " + err);
            con.destroy();
            res.send(`
            <!DOCTYPE html>
            <html lang="pt-br">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style3.css">
                <script src="script.js"></script>
                <title>Erro</title>
            </head>
            
            <body>
                <div class="window">
                    <h1>Erro</h1>
                    <h2>Não foi possivel estabelecer conexao com o Banco.</h2>
                    <div class="buttons">
                        <button id="voltar" class="botao" onclick="back()">Voltar</button>
                    </div>
                </div>
            </body>
            
            </html>
            `);
        }else{
            const query = "SELECT * FROM tbl_aluno WHERE rm = ?"

            con.query(query, pessoa, function (error, data) {
            if(error)throw error;
            const value = data[0]
            if (value == undefined) {
                res.send(`
                <!DOCTYPE html>
                    <html lang="pt-br">

                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="stylesheet" href="style3.css">
                        <script src="script.js"></script>
                        <title>Criar</title>
                    </head>

                    <body>
                        <div class="window">
                            <h1>Criar</h1>
                            <h2>Deseja inserir um novo aluno neste RM?</h2>
                            <div class="buttons">
                                <button id="criar" class="botao" onclick="confirma()">Criar</button>
                                <button id="voltar" class="botao" onclick="back()">Voltar</button>
                            </div>
                        </div>
                    </body>

                    </html>
                `);
            } else {
                //Varivaveis das notas
                const livro = value.livro;

                //VERIFICAR OS LIVROS QUE SAO DE 7 E ACIMA PARA MUDAR NO HTML!!!!

                const rm = value.rm;
                const nome = value.nome;

                const list = [];
                const self = [];
                const video = [];
                const book = [];
                const voc = [];
                const classp = [];
                const quiz = [];
                const project = [];
                const abstences = [];

                list[0] = value.list1;
                list[1] = value.list2;
                list[2] = value.list3;
                list[3] = value.list4;
                list[4] = value.list5;
                list[5] = value.list6;
    
                self[0] = value.self1;
                self[1] = value.self2;
                self[2] = value.self3;
                self[3] = value.self1;
                self[4] = value.self2;
                self[5] = value.self3;
    
                video[0] = value.video1;
                video[1] = value.video2;
                video[2] = value.video3;
                video[3] = value.video4;
                video[4] = value.video5;
                video[5] = value.video6;
    
    
                book[0]  = value.book1;
                book[1] = value.book2;
                book[2] = value.book3;
                book[3] = value.book4;
                book[4] = value.book5;
                book[5] = value.book6;
    
                voc[0] = value.voc1;
                voc[1] = value.voc2;
                voc[2] = value.voc3;
                voc[3] = value.voc4;
                voc[4] = value.voc5;
                voc[5] = value.voc6;
    
                classp[0] = value.class1;
                classp[1]  = value.class2;
    
                quiz[0] = value.quiz1;
                quiz[1] = value.quiz2;
                quiz[2] = value.quiz3;
                quiz[3] = value.quiz4;
                quiz[4] = value.quiz5;
                quiz[5] = value.quiz6;
    
                project[0] = value.project1;
                project[1] = value.project2;
                project[2] = value.project3;
                project[3] = value.project4;
                project[4] = value.project5;
                project[5] = value.project6;
                
                abstences[0] = value.abs1;
                abstences[1] = value.abs1;
                res.send(`
        
                <!DOCTYPE html>
                <html lang="en">
                
                <head>
                  <meta charset="UTF-8" />
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Boletim</title>
                  <script src="script"></script>
                  <link rel="stylesheet" href="stylegrade" />
                </head>
                
                <body onload="setValores(); printa();">
                  <img src="img" id="img1" />
                
                  <h1>Name: `+nome+`</h1>
                  <h2>Book: `+livro+`</h2>
                  <h3>RM: `+rm+`</h3>
                
                  <table id="tabela1">
                    <tr>
                      <th>Grading Criterias</th>
                      <th>Points</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>Total</th>
                    </tr>
                
                    <tr>
                      <th>Listening</th>
                      <th>15</th>
                      <th class="notas">
                        <button class="botao" id="list1" onclick="viewlist1()">`+list[0]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="list2" onclick="viewlist2()">`+list[1]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="list3" onclick="viewlist3()">`+list[2]+`</button>
                      </th>
                      <th id="listtotal"></th>
                    </tr>
                    <tr>
                      <th>Self-Study</th>
                      <th>15</th>
                      <th class="notas">
                        <button class="botao" id="self1" onclick="viewSelf1()">`+self[0]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="self2" onclick="viewSelf2()">`+self[1]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="self3" onclick="viewSelf3()">`+self[2]+`</button>
                      </th>
                      <th id="selftotal"></th>
                    </tr>
                    <tr>
                      <th>Video Test</th>
                      <th>30</th>
                      <th class="notas">
                        <button class="botao" id="video1" onclick="viewVideo1()">
                          `+video[0]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="video2" onclick="viewVideo2()">
                        `+video[1]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="video3" onclick="viewVideo3()">
                        `+video[2]+`
                        </button>
                      </th>
                      <th id="videototal"></th>
                    </tr>
                    <tr>
                      <th>Workbook</th>
                      <th>30</th>
                      <th class="notas">
                        <button class="botao" id="book1" onclick="viewBook1()">`+book[0]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="book2" onclick="viewBook2()">`+book[1]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="book3" onclick="viewBook3()">`+book[2]+`</button>
                      </th>
                      <th id="booktotal"></th>
                    </tr>
                    <tr>
                      <th>Vocabulary Test</th>
                      <th>30</th>
                      <th class="notas">
                        <button class="botao" id="voc1" onclick="viewVoc1()">`+voc[0]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="voc2" onclick="viewVoc2()">`+voc[1]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="voc3" onclick="viewVoc3()">`+voc[2]+`</button>
                      </th>
                      <th id="voctotal"></th>
                    </tr>
                
                    <tr>
                      <th>Class Performance</th>
                      <th>50</th>
                      <th class="notas" colspan="3">
                        <button class="botao" id="class1" onclick="viewClass1()">
                          `+classp[0]+`
                        </button>
                      </th>
                      <th id="classtotal"></th>
                    </tr>
                
                    <tr>
                      <th>Quizzes</th>
                      <th>150</th>
                      <th class="notas">
                        <button class="botao" id="quiz1" onclick="viewQuiz1()">`+quiz[0]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="quiz2" onclick="viewQuiz2()">`+quiz[1]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="quiz3" onclick="viewQuiz3()">`+quiz[2]+`</button>
                      </th>
                      <th id="quiztotal"></th>
                    </tr>
                
                    <tr>
                      <th>Project</th>
                      <th>180</th>
                      <th class="notas">
                        <button class="botao" id="project1" onclick="viewProj1()">
                        `+project[0]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="project2" onclick="viewProj2()">
                        `+project[1]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="project3" onclick="viewProj3()">
                        `+project[2]+`
                        </button>
                      </th>
                      <th id="projecttotal"></th>
                    </tr>
                  </table>
                
                  <table id="tabela2">
                    <tr>
                      <th>Total(500)</th>
                      <th id="notatotal" width="60px"></th>
                    </tr>
                    <tr>
                      <th>1st Average</th>
                      <th id="mediatotal"></th>
                    </tr>
                    <tr>
                      <th>Abstences</th>
                      <th id="abst">`+abstences[0]+`</th>
                    </tr>
                    <tr>
                      <th colspan="2" id="inv">
                        <button class="btnmuda" onclick="maisAbstences()">↑</button>
                        <button class="btnmuda" onclick="menosAbstences()">↓</button>
                      </th>
                    </tr>
                
                  </table>
                
                
                  <!-- SEGUNDA PARTE DAS NOTAS!!! -->
                
                  <table id="tabela3">
                    <tr>
                      <th>Grading Criterias</th>
                      <th>Points</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>Total</th>
                    </tr>
                
                    <tr>
                      <th>Listening</th>
                      <th>15</th>
                      <th class="notas">
                        <button class="botao" id="list4" onclick="viewlist4()">`+list[3]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="list5" onclick="viewlist5()">`+list[4]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="list6" onclick="viewlist6()">`+list[5]+`</button>
                      </th>
                      <th id="listtotal2"></th>
                    </tr>
                    <tr>
                      <th>Self-Study</th>
                      <th>15</th>
                      <th class="notas">
                        <button class="botao" id="self4" onclick="viewSelf4()">`+self[3]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="self5" onclick="viewSelf5()">`+self[4]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="self6" onclick="viewSelf6()">`+self[5]+`</button>
                      </th>
                      <th id="selftotal2"></th>
                    </tr>
                    <tr>
                      <th>Video Test</th>
                      <th>30</th>
                      <th class="notas">
                        <button class="botao" id="video4" onclick="viewVideo4()">
                        `+video[3]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="video5" onclick="viewVideo5()">
                        `+video[4]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="video6" onclick="viewVideo6()">
                        `+video[5]+`
                        </button>
                      </th>
                      <th id="videototal2"></th>
                    </tr>
                    <tr>
                      <th>Workbook</th>
                      <th>30</th>
                      <th class="notas">
                        <button class="botao" id="book4" onclick="viewBook4()">`+book[3]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="book5" onclick="viewBook5()">`+book[4]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="book6" onclick="viewBook6()">`+book[5]+`</button>
                      </th>
                      <th id="booktotal2"></th>
                    </tr>
                    <tr>
                      <th>Vocabulary Test</th>
                      <th>30</th>
                      <th class="notas">
                        <button class="botao" id="voc4" onclick="viewVoc4()">`+voc[3]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="voc5" onclick="viewVoc5()">`+voc[4]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="voc6" onclick="viewVoc6()">`+voc[5]+`</button>
                      </th>
                      <th id="voctotal2"></th>
                    </tr>
                
                    <tr>
                      <th>Class Performance</th>
                      <th>50</th>
                      <th class="notas" colspan="3">
                        <button class="botao" id="class2" onclick="viewClass2()">
                        `+classp[1]+`
                        </button>
                      </th>
                      <th id="classtotal2"></th>
                    </tr>
                
                    <tr>
                      <th>Quizzes</th>
                      <th>150</th>
                      <th class="notas">
                        <button class="botao" id="quiz4" onclick="viewQuiz4()">`+quiz[3]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="quiz5" onclick="viewQuiz5()">`+quiz[4]+`</button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="quiz6" onclick="viewQuiz6()">`+quiz[5]+`</button>
                      </th>
                      <th id="quiztotal2"></th>
                    </tr>
                
                    <tr>
                      <th>Project</th>
                      <th>180</th>
                      <th class="notas">
                        <button class="botao" id="project4" onclick="viewProj4()">
                        `+project[3]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="project5" onclick="viewProj5()">
                        `+project[4]+`
                        </button>
                      </th>
                      <th class="notas">
                        <button class="botao" id="project6" onclick="viewProj6()">
                        `+project[5]+`
                        </button>
                      </th>
                      <th id="projecttotal2"></th>
                    </tr>
                  </table>
                
                  <table id="tabela4">
                    <tr>
                      <th>Total(500)</th>
                      <th id="notatotal2"></th>
                    </tr>
                    <tr>
                      <th>1st Average</th>
                      <th id="mediatotal2"></th>
                    </tr>
                    <tr>
                      <th>Abstences</th>
                      <th id="abst2">`+abstences[1]+`</th>
                    </tr>
                    <tr>
                      <th colspan="2" id="inv">
                        <button class="btnmuda" onclick="maisAbstences2()">↑</button>
                        <button class="btnmuda" onclick="menosAbstences2()">↓</button>
                      </th>
                    </tr>
                
                  </table>
                
                  <div id="caixa">
                    <div id="textofinal">Final Average</div>
                    <div id="notafinal"></div>
                  </div>
                  
                
                  <h6>TERMINAR O BANCO (CREATE E DELETE)</h6>
                  <button id="salvar">Save</button>
                
                </body>
                
                </html>
                `);
            }
        })
        }
    })

    

    
})

ex.get("/", function (req, res) {
    res.sendFile(__dirname + '/front')
})

ex.get("/create", function(req,res){
    res.send("Usuario e: " + req.query.usuario)
})

ex.listen(3000, function () {
    console.log("Funcionando...")
});


//(value.nome).replace(/"/g,'')

// O INSERT
// insert into tbl_aluno values(1, "x", "y", 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 9, 10, 9, 9, 8, 10, 10, 10, 10, 10,10,10,9,9,8,10,10,45, 45, 50,48,50,48,44,43,55,56,55,57,53,55,0,0);





//FINALMENTE PEGOU O VALOR, AGR E SO FAZER ELE CARREGAR UMA PAGINA COM RESULTADO!!!!!!
//2. CARREGOU DESGRACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//O MALUCOIDE MANDA O HTML NO STRING MESMO, O MALUCO E BRABO (EU TAMBEM)