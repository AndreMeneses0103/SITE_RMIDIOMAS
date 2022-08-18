//variaveis globais

var nlist1 = 0;
var nlist2 = 0;
var nlist3 = 0;
var nlist4 = 0;
var nlist5 = 0;
var nlist6 = 0;

var nself1 = 0;
var nself2 = 0;
var nself3 = 0;
var nself4 = 0;
var nself5 = 0;
var nself6 = 0;

var nvideo1 = 0;
var nvideo2 = 0;
var nvideo3 = 0;
var nvideo4 = 0;
var nvideo5 = 0;
var nvideo6 = 0;

var nbook1 = 0;
var nbook2 = 0;
var nbook3 = 0;
var nbook4 = 0;
var nbook5 = 0;
var nbook6 = 0;

var nvoc1 = 0;
var nvoc2 = 0;
var nvoc3 = 0;
var nvoc4 = 0;
var nvoc5 = 0;
var nvoc6 = 0;

var nclass1 = 0;
var nclass2 = 0;

var nquiz1 = 0;
var nquiz2 = 0;
var nquiz3 = 0;
var nquiz4 = 0;
var nquiz5 = 0;
var nquiz6 = 0;

var nproject1 = 0;
var nproject2 = 0;
var nproject3 = 0;
var nproject4 = 0;
var nproject5 = 0;
var nproject6 = 0;

var finallist = 0;
var finalself = 0;
var finalvideo = 0;
var finalbook = 0;
var finalvoc = 0;
var finalclass = 0;
var finallquiz = 0;
var finallproject = 0;

var finallist2 = 0;
var finalself2 = 0;
var finalvideo2 = 0;
var finalbook2 = 0;
var finalvoc2 = 0;
var finalclass2 = 0;
var finallquiz2 = 0;
var finallproject2 = 0;


var mediafinal1 = 0;
var mediafinal2 = 0;


var abstences = 0;
var abstences2 = 0;

function setValores() {
    nlist1 = parseInt(document.getElementById("list1").innerText);
    nlist2 = parseInt(document.getElementById("list2").innerText);
    nlist3 = parseInt(document.getElementById("list3").innerText);
    nlist4 = parseInt(document.getElementById("list4").innerText);
    nlist5 = parseInt(document.getElementById("list5").innerText);
    nlist6 = parseInt(document.getElementById("list6").innerText);

    nself1 = parseInt(document.getElementById("self1").innerText);
    nself2 = parseInt(document.getElementById("self2").innerText);
    nself3 = parseInt(document.getElementById("self3").innerText);
    nself4 = parseInt(document.getElementById("self4").innerText);
    nself5 = parseInt(document.getElementById("self5").innerText);
    nself6 = parseInt(document.getElementById("self6").innerText);

    nvideo1 = parseInt(document.getElementById("video1").innerText);
    nvideo2 = parseInt(document.getElementById("video2").innerText);
    nvideo3 = parseInt(document.getElementById("video3").innerText);
    nvideo4 = parseInt(document.getElementById("video4").innerText);
    nvideo5 = parseInt(document.getElementById("video5").innerText);
    nvideo6 = parseInt(document.getElementById("video6").innerText);

    nbook1 = parseInt(document.getElementById("book1").innerText);
    nbook2 = parseInt(document.getElementById("book2").innerText);
    nbook3 = parseInt(document.getElementById("book3").innerText);
    nbook4 = parseInt(document.getElementById("book4").innerText);
    nbook5 = parseInt(document.getElementById("book5").innerText);
    nbook6 = parseInt(document.getElementById("book6").innerText);

    nvoc1 = parseInt(document.getElementById("voc1").innerText);
    nvoc2 = parseInt(document.getElementById("voc2").innerText);
    nvoc3 = parseInt(document.getElementById("voc3").innerText);
    nvoc4 = parseInt(document.getElementById("voc4").innerText);
    nvoc5 = parseInt(document.getElementById("voc5").innerText);
    nvoc6 = parseInt(document.getElementById("voc6").innerText);


    nclass1 = parseInt(document.getElementById("class1").innerText);
    nclass2 = parseInt(document.getElementById("class2").innerText);

    nquiz1 = parseInt(document.getElementById("quiz1").innerText);
    nquiz2 = parseInt(document.getElementById("quiz2").innerText);
    nquiz3 = parseInt(document.getElementById("quiz3").innerText);
    nquiz4 = parseInt(document.getElementById("quiz4").innerText);
    nquiz5 = parseInt(document.getElementById("quiz5").innerText);
    nquiz6 = parseInt(document.getElementById("quiz6").innerText);

    nproject1 = parseInt(document.getElementById("project1").innerText);
    nproject2 = parseInt(document.getElementById("project2").innerText);
    nproject3 = parseInt(document.getElementById("project3").innerText);
    nproject4 = parseInt(document.getElementById("project4").innerText);
    nproject5 = parseInt(document.getElementById("project5").innerText);
    nproject6 = parseInt(document.getElementById("project6").innerText);

    abstences = parseInt(document.getElementById("abst").innerText);
    abstences2 = parseInt(document.getElementById("abst2").innerText);

    totalList();
    totalSelf();
    totalVideo();
    totalBook();
    totalVoc();
    totalClass();
    totalQuiz();
    totalProject();
    totalNota();

    totalList2();
    totalSelf2();
    totalVideo2();
    totalBook2();
    totalVoc2();
    totalClass2();
    totalQuiz2();
    totalProject2();
    totalNota2();
}

function printa(){
    alert("ola manoss");
}


function viewlist1() {

    var x = parseInt(prompt("Digite a nota: Listening - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 5)) {
        x = parseInt(prompt("Digite valor entre 0 e 5:"));
    }
    nlist1 = x;
    document.getElementById("list1").innerHTML = x;
    totalList();
}

function viewlist2() {

    var y = parseInt(prompt("Digite a nota: Listening - 2:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 5)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nlist2 = y;
    document.getElementById("list2").innerHTML = y;
    totalList();


}

function viewlist3() {

    var z = parseInt(prompt("Digite a nota: Listening - 3:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 5)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nlist3 = z;
    document.getElementById("list3").innerHTML = z;
    totalList();

}


function totalList() {
    var total = nlist1 + nlist2 + nlist3;
    document.getElementById("listtotal").innerHTML = total;
    finallist = total;
    totalNota();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewSelf1() {

    var x = parseInt(prompt("Digite a nota: Self-Study - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 5)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nself1 = x;
    document.getElementById("self1").innerHTML = x;
    totalSelf();


}

function viewSelf2() {

    var y = parseInt(prompt("Digite a nota: Self-Study - 2:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 5)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nself2 = y;
    document.getElementById("self2").innerHTML = y;
    totalSelf();
}

function viewSelf3() {

    var z = parseInt(prompt("Digite a nota: Self-Study - 3:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 5)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nself3 = z;
    document.getElementById("self3").innerHTML = z;
    totalSelf();

}

function totalSelf() {
    var total = nself1 + nself2 + nself3;
    document.getElementById("selftotal").innerHTML = total;
    finalself = total;
    totalNota();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewVideo1() {

    var x = parseInt(prompt("Digite a nota: Video Test - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 10)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvideo1 = x;
    document.getElementById("video1").innerHTML = x;
    totalVideo();

}

function viewVideo2() {

    var y = parseInt(prompt("Digite a nota: Video Test - 2:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 10)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvideo2 = y;
    document.getElementById("video2").innerHTML = y;
    totalVideo();
}

function viewVideo3() {

    var z = parseInt(prompt("Digite a nota: Video Test - 3:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 10)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvideo3 = z;
    document.getElementById("video3").innerHTML = z;
    totalVideo();
}

function totalVideo() {
    var total = nvideo1 + nvideo2 + nvideo3;
    document.getElementById("videototal").innerHTML = total;
    finalvideo = total;
    totalNota();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewBook1() {

    var x = parseInt(prompt("Digite a nota: Workbook - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 10)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nbook1 = x;
    document.getElementById("book1").innerHTML = x;
    totalBook();

}

function viewBook2() {

    var y = parseInt(prompt("Digite a nota: Workbook - 2:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 10)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nbook2 = y;
    document.getElementById("book2").innerHTML = y;
    totalBook();
}

function viewBook3() {

    var z = parseInt(prompt("Digite a nota: Workbook - 3:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 10)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nbook3 = z;
    document.getElementById("book3").innerHTML = z;
    totalBook();
}

function totalBook() {
    var total = nbook1 + nbook2 + nbook3;
    document.getElementById("booktotal").innerHTML = total;
    finalbook = total;
    totalNota();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewVoc1() {

    var x = parseInt(prompt("Digite a nota: Vocabulary Test - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 10)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvoc1 = x;
    document.getElementById("voc1").innerHTML = x;
    totalVoc();

}

function viewVoc2() {

    var y = parseInt(prompt("Digite a nota: Vocabulary Test - 2:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 10)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvoc2 = y;
    document.getElementById("voc2").innerHTML = y;
    totalVoc();
}

function viewVoc3() {

    var z = parseInt(prompt("Digite a nota: Vocabulary Test - 3:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 10)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvoc3 = z;
    document.getElementById("voc3").innerHTML = z;
    totalVoc();
}

function totalVoc() {
    var total = nvoc1 + nvoc2 + nvoc3;
    document.getElementById("voctotal").innerHTML = total;
    finalvoc = total;
    totalNota();
    total = 0;
}

//----------------------------------------------------------------------------------------

function viewClass1() {

    var x = parseInt(prompt("Digite a nota: Class Performance - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 50)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nclass1 = x;
    document.getElementById("class1").innerHTML = x;
    totalClass();

}

function totalClass() {
    var total = nclass1;
    document.getElementById("classtotal").innerHTML = total;
    finalclass = total;
    totalNota();
    total = 0;
}

//----------------------------------------------------------------------------------------

function viewQuiz1() {

    var x = parseInt(prompt("Digite a nota: Quiz - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 50)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nquiz1 = x;
    document.getElementById("quiz1").innerHTML = x;
    totalQuiz();


}

function viewQuiz2() {

    var y = parseInt(prompt("Digite a nota: Quiz - 2:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 50)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nquiz2 = y;
    document.getElementById("quiz2").innerHTML = y;
    totalQuiz();
}

function viewQuiz3() {

    var z = parseInt(prompt("Digite a nota: Quiz Test - 3:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 50)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nquiz3 = z;
    document.getElementById("quiz3").innerHTML = z;
    totalQuiz();
}

function totalQuiz() {
    var total = nquiz1 + nquiz2 + nquiz3;
    document.getElementById("quiztotal").innerHTML = total;
    finallquiz = total;
    totalNota();
    total = 0;
}

//----------------------------------------------------------------------------------------

function viewProj1() {

    var x = parseInt(prompt("Digite a nota: Project - 1:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 60)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nproject1 = x;
    document.getElementById("project1").innerHTML = x;
    totalProject();

}

function viewProj2() {

    var y = parseInt(prompt("Digite a nota: Project - 2:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 60)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nproject2 = y;
    document.getElementById("project2").innerHTML = y;
    totalProject();
}

function viewProj3() {

    var z = parseInt(prompt("Digite a nota: Project - 3:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 60)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nproject3 = z;
    document.getElementById("project3").innerHTML = z;
    totalProject();
}

function totalProject() {
    var total = nproject1 + nproject2 + nproject3;
    document.getElementById("projecttotal").innerHTML = total;
    finallproject = total;
    totalNota();
    total = 0;
}

function maisAbstences() {
    abstences++;
    document.getElementById("abst").innerHTML = abstences;
}

function menosAbstences() {
    abstences--;
    if (abstences < 0) {
        abstences = 0;
    }
    document.getElementById("abst").innerHTML = abstences;
}

//----------------------------------------------------------------------------------------

function totalNota() {

    var total = finallist + finalself + finalvideo + finalbook + finalvoc + finalclass + finallquiz + finallproject;
    var media = total / 5;
    mediafinal1 = media;
    document.getElementById("notatotal").innerHTML = total;
    document.getElementById("mediatotal").innerHTML = media;
    total = 0;
    media = 0;
    final();
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function viewlist4() {

    var x = parseInt(prompt("Digite a nota: Listening - 4:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 5)) {
        x = parseInt(prompt("Digite valor entre 0 e 5:"));
    }
    nlist4 = x;
    document.getElementById("list4").innerHTML = x;
    totalList2();
}

function viewlist5() {

    var y = parseInt(prompt("Digite a nota: Listening - 5:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 5)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nlist5 = y;
    document.getElementById("list5").innerHTML = y;
    totalList2();


}

function viewlist6() {

    var z = parseInt(prompt("Digite a nota: Listening - 6:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 5)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nlist6 = z;
    document.getElementById("list6").innerHTML = z;
    totalList2();

}


function totalList2() {
    var total = nlist4 + nlist5 + nlist6;
    document.getElementById("listtotal2").innerHTML = total;
    finallist2 = total;
    totalNota2();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewSelf4() {

    var x = parseInt(prompt("Digite a nota: Self-Study - 4:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 5)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nself4 = x;
    document.getElementById("self4").innerHTML = x;
    totalSelf2();


}

function viewSelf5() {

    var y = parseInt(prompt("Digite a nota: Self-Study - 5:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 5)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nself5 = y;
    document.getElementById("self5").innerHTML = y;
    totalSelf2();
}

function viewSelf6() {

    var z = parseInt(prompt("Digite a nota: Self-Study - 6:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 5)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nself6 = z;
    document.getElementById("self6").innerHTML = z;
    totalSelf2();

}

function totalSelf2() {
    var total = nself4 + nself5 + nself6;
    document.getElementById("selftotal2").innerHTML = total;
    finalself2 = total;
    totalNota2();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewVideo4() {

    var x = parseInt(prompt("Digite a nota: Video Test - 4:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 10)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvideo4 = x;
    document.getElementById("video4").innerHTML = x;
    totalVideo2();

}

function viewVideo5() {

    var y = parseInt(prompt("Digite a nota: Video Test - 5:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 10)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvideo5 = y;
    document.getElementById("video5").innerHTML = y;
    totalVideo2();
}

function viewVideo6() {

    var z = parseInt(prompt("Digite a nota: Video Test - 6:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 10)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvideo6 = z;
    document.getElementById("video6").innerHTML = z;
    totalVideo2();
}

function totalVideo2() {
    var total = nvideo4 + nvideo5 + nvideo6;
    document.getElementById("videototal2").innerHTML = total;
    finalvideo2 = total;
    totalNota2();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewBook4() {

    var x = parseInt(prompt("Digite a nota: Workbook - 4:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 10)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nbook4 = x;
    document.getElementById("book4").innerHTML = x;
    totalBook2();

}

function viewBook5() {

    var y = parseInt(prompt("Digite a nota: Workbook - 5:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 10)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nbook5 = y;
    document.getElementById("book5").innerHTML = y;
    totalBook2();
}

function viewBook6() {

    var z = parseInt(prompt("Digite a nota: Workbook - 6:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 10)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nbook6 = z;
    document.getElementById("book6").innerHTML = z;
    totalBook2();
}

function totalBook2() {
    var total = nbook4 + nbook5 + nbook6;
    document.getElementById("booktotal2").innerHTML = total;
    finalbook2 = total;
    totalNota2();
    total = 0;

}

//----------------------------------------------------------------------------------------

function viewVoc4() {

    var x = parseInt(prompt("Digite a nota: Vocabulary Test - 4:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 10)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvoc4 = x;
    document.getElementById("voc4").innerHTML = x;
    totalVoc2();

}

function viewVoc5() {

    var y = parseInt(prompt("Digite a nota: Vocabulary Test - 5:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 10)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvoc5 = y;
    document.getElementById("voc5").innerHTML = y;
    totalVoc2();
}

function viewVoc6() {

    var z = parseInt(prompt("Digite a nota: Vocabulary Test - 6:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 10)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nvoc6 = z;
    document.getElementById("voc6").innerHTML = z;
    totalVoc2();
}

function totalVoc2() {
    var total = nvoc4 + nvoc5 + nvoc6;
    document.getElementById("voctotal2").innerHTML = total;
    finalvoc2 = total;
    totalNota2();
    total = 0;
}

//----------------------------------------------------------------------------------------

function viewClass2() {

    var x = parseInt(prompt("Digite a nota: Class Performance - 2:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 50)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nclass2 = x;
    document.getElementById("class2").innerHTML = x;
    totalClass2();

}

function totalClass2() {
    var total = nclass2;
    document.getElementById("classtotal2").innerHTML = total;
    finalclass2 = total;
    totalNota2();
    total = 0;
}

//----------------------------------------------------------------------------------------

function viewQuiz4() {

    var x = parseInt(prompt("Digite a nota: Quiz - 4:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 50)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nquiz4 = x;
    document.getElementById("quiz4").innerHTML = x;
    totalQuiz2();


}

function viewQuiz5() {

    var y = parseInt(prompt("Digite a nota: Quiz - 5:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 50)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nquiz5 = y;
    document.getElementById("quiz5").innerHTML = y;
    totalQuiz2();
}

function viewQuiz6() {

    var z = parseInt(prompt("Digite a nota: Quiz Test - 6:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 50)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nquiz6 = z;
    document.getElementById("quiz6").innerHTML = z;
    totalQuiz2();
}

function totalQuiz2() {
    var total = nquiz4 + nquiz5 + nquiz6;
    document.getElementById("quiztotal2").innerHTML = total;
    finallquiz2 = total;
    totalNota2();
    total = 0;
}

//----------------------------------------------------------------------------------------

function viewProj4() {

    var x = parseInt(prompt("Digite a nota: Project - 4:"));
    while (Number.isInteger(x) == false || (x < 0 || x > 60)) {
        x = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nproject4 = x;
    document.getElementById("project4").innerHTML = x;
    totalProject2();

}

function viewProj5() {

    var y = parseInt(prompt("Digite a nota: Project - 5:"));
    while (Number.isInteger(y) == false || (y < 0 || y > 60)) {
        y = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nproject5 = y;
    document.getElementById("project5").innerHTML = y;
    totalProject2();
}

function viewProj6() {

    var z = parseInt(prompt("Digite a nota: Project - 6:"));
    while (Number.isInteger(z) == false || (z < 0 || z > 60)) {
        z = parseInt(prompt("Nao e possivel digitar esta nota, digite novamente:"));
    }
    nproject6 = z;
    document.getElementById("project6").innerHTML = z;
    totalProject2();
}

function totalProject2() {
    var total = nproject4 + nproject5 + nproject6;
    document.getElementById("projecttotal2").innerHTML = total;
    finallproject2 = total;
    totalNota2();
    total = 0;
}

function maisAbstences2() {
    abstences2++;
    document.getElementById("abst2").innerHTML = abstences2;
}

function menosAbstences2() {
    abstences2--;
    if (abstences2 < 0) {
        abstences2 = 0;
    }
    document.getElementById("abst2").innerHTML = abstences2;
}

//----------------------------------------------------------------------------------------

function totalNota2() {

    var total = finallist2 + finalself2 + finalvideo2 + finalbook2 + finalvoc2 + finalclass2 + finallquiz2 + finallproject2;
    var media = total / 5;
    mediafinal2 = media;
    document.getElementById("notatotal2").innerHTML = total;
    document.getElementById("mediatotal2").innerHTML = media;
    total = 0;
    media = 0;
    final();
}

//----------------------------------------------------------------------------------------

function final(){
    var notafinal = (mediafinal1 + mediafinal2)/2;
    document.getElementById("notafinal").innerHTML = notafinal.toFixed(1);
    notafinal = 0;
}