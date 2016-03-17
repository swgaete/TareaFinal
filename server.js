var http = require('http');

// tarea


//Mensaje ABCDE

var mensaje='ABCDE';
var crypto = require("crypto");
var sha256 = crypto.createHash("sha256");
sha256.update(mensaje, "utf8");
var result = sha256.digest("hex");
console.log('Su hash para el mensaje es: '+result);
console.log('Su mensaje es: '+ mensaje);

//Mensaje texto

var mensaje2='Los chilenos que estarán en Lollapalooza 2016 A los ya conocidos Gepe, Javiera Mena y Aguaturbia, se suman nombres como Planeta No, Rootz Hi-Fi & M8cky Banton y Kuervos del Sur. Gepe, Movimiento Original, Javiera Mena, Aguaturbia, Ases Falsos y Bitman & Roban, son algunos de los artistas nacionales que estarán presentes este 19 y 20 marzo en la sexta versión de Lollapalooza  Chile. Ellos tienen el reconocimiento masivo en el país. Pero hay otros nombres como Planeta No, Rootz Hi-Fi & M8cky Banton y Kuervos del Sur entre otros, que también están invitados a la fiesta de Perry Farrel, pero que no son conocidos por el público masivo. Con seis años de historia Planeta No, fusiona pop bailable con tintes punk. El trio oriundo de Concepción, comandado por Gonzalo García, llega a Lollapalooza  con dos discos bajo el brazo, Matucana (2014) y Odio (2015). Tras la publicación de su primera placa, se presentaron en Perú y México, y ya confirmaron nuevamente visita a tierra azteca, además de Costa rica. El primer single de la segunda placa es Sol a Sol. Rootz Hi-Fi & M8cky Banton, es un colectivo musical y cultural encargado de promover los sonidos provenientes de Jamaica. Desde sus inicios en 2006 con Andrej Rootz, a la cabeza, la agrupación ha experimentado con el reggae-dub (música electrónica con base en el reggae) y sus diferentes variantes. El formato de la agrupación, consiste en un soundsystem, además de una tornamesa. En 2012 el colectivo fundó el sello Gratitude Records. Con esta presentación en Lollapalooza Chile será la cuarta vez de los nacionales tras ser invitados en 2013, 2014 y 2015. Kuervos del sur, es una banda de rock alternativo, con tintes de rock andino, y música folklórica. Con dos discos editados, Porvenir (2009) y En vivo en Sala Master (2011), los nacionales resaltan la identidad latinoamericana. The Suicide Bitches, busca rememorar los mejor del hard rock, y el punk de los 70, y de los 90, ya que sus influencias van desde Led Zeppelin, The The Stooges, hasta Kyuss. La banda que lleva 10 años en los escenarios y que debutó con el EP Johnny Yen en (2008), tiene en su curriculum destacadas presentaciones, como la participación en el festival SXSW en Austin, Texas (2012). Además de ser la única agrupación latinoamericana que fue invitada a la primera versión del CBGB’s Festival en Nueva York. Tunacola, fusiona pop, con electrónica y elementos de música negra. Con dos discos editados durante sus seis años de vida Tunacola (2011) y Todos los Veranos del Mundo (2014), la banda que tiene a siete músicos en escena, ha logrado alta rotación de algunos de sus temas (Danky) en MTV Latinoamérica. Para la segunda placa la banda giró por Estados Unidos y México. El dúo chileno de rock Magaly Fields nunca olvidará la experiencia de grabar dos canciones los estudios de Abbey Road, el mismo legendario lugar por donde pasaron Los Beatles, Pink Floyd entre otros. Los nacionales influenciados por el garage, y el blues, lanzaron  su primer disco Chromatic Days (2014), el que fue masterizado por Chris Hanzsek, quien ha trabajado con The Melvinsy Soundgarden. La lista de artistas nacionales que estarán en la sexta versión de Lollapalooza la completan: Oddó, Föllakzoid, Dj Who, Jiminelson.';
var crypto2 = require("crypto");
var sha2562 = crypto.createHash("sha256");
sha2562.update(mensaje2, "utf8");
var result2 = sha2562.digest("hex");
console.log('Su hash para el texto es: '+result2);
console.log('Su texto es: '+ mensaje2);

//Rutas



//

//tarea

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<h1>Su Hash para el mensaje es: <h1>'+result+'<h1>Su Mensaje es: <h1>'+mensaje+'<h1>Su Hash para el texto es: <h1>'+result2+'<h1>Su texto es: <h1>'+mensaje2);

});



var port = Number(process.env.PORT || 3000);
server.listen(port);
