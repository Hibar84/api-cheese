let eventSelected; // type d'événement
let cheeseNumber; // Nombre de variétés de fromages
let cheeseQtyPP; // quantité par personne
let cheeseTypesSelected = []; // types de variétés de fromages
let nbPersonnes; // nombre de personne prévues

// Instanciation des listes de fromages par type
let blue_cheeses = [];
let fresh_cheeses = [];
let uncooked_pressed_cheeses = [];
let cooked_pressed_cheeses = [];
let rind_washed_cheeses = [];
let soft_ripened_cheeses = [];
let mixed_cheeses = [];
let stretched_curd_cheeses = [];

// Tri des fromages et stockage dans les listes associées
for (var i=0; i<fromages.length; i++){
    let currentCheese = fromages[i];

    switch (currentCheese.curd){
        case 'blue-cheese':
            blue_cheeses.push(currentCheese);
            break;
        case 'fresh-cheese':
            fresh_cheeses.push(currentCheese);
            break;
        case 'uncooked-pressed-cheese':
            uncooked_pressed_cheeses.push(currentCheese);
            break;
        case 'cooked-pressed-cheese':
            cooked_pressed_cheeses.push(currentCheese);
            break;
        case 'rind-washed-cheese':
            rind_washed_cheeses.push(currentCheese);
            break;
        case 'soft-ripened-cheese':
            soft_ripened_cheeses.push(currentCheese);
            break;
        case 'mixed-cheese':
            mixed_cheeses.push(currentCheese);
            break;
        case 'stretched-curd-cheese':
            stretched_curd_cheeses.push(currentCheese);
            break;
    }

}

console.log(stretched_curd_cheeses);

// Fonctions de configuration du plateau
function selected_event_type(eventType){
    // défini le type d'événement ainsi que la quantité par personne
    switch (eventType){
        case 'repas':
            eventSelected = 'repas';
            cheeseQtyPP = 200;
            break;
        case 'apero':
            eventSelected = 'apero';
            cheeseQtyPP = 75;
            break;
        case 'degustation':
            eventSelected = 'degustation';
            cheeseQtyPP = 125;
            break;
    }
}

function cheese_types_quantity(value){
    nbPersonnes = value;
    // Définit le nombre de variétés de fromages en fonction du nombre de personne
    if (value <4){
        cheeseNumber = 3;
    } else
    if (value < 15){
        cheeseNumber = ~~(value/3)*3;
    } else
        cheeseNumber = 15;
} 

function check_cheese_types_selection(){
    var checkboxes = document.getElementsByName('cheese-type');
    var cheeses = [];
    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked == true){
            document.getElementById(checkboxes[i].value).classList.remove('hidden');
            cheeses.push(checkboxes[i].value);
        }
    }
    cheeseTypesSelected = cheeses;
}

// Fonctions de générations du plateau
function generate_cheese_type_box(cheese_type){
    document.getElementById(cheese_type).innerHTML='';
    var template = document.querySelector("#cheese-type-bloc");
    var box = document.importNode(template.content, true);
    
    var header = box.querySelector('h3.fr-h4');
    var list = box.querySelector('div.fr-grid-row');
    //var btn = box.querySelector('button.fr-btn');
    //btn.onclick = function() {generate_cheese_type_box(cheese_type)};

    // Calcul du nombre de fromages proposés par type
    // S'effectue en fonction du nombre de types sélectionnés : on répartit le nombre total de fromage (calculé à partir du nb de personnes attendues) sur les différents types de fromages.
    var numberOfCard = Math.floor(cheeseNumber/cheeseTypesSelected.length);
    
    // Génération des cartes fromages initiales
    for (var i=0; i<numberOfCard; i++){
        let card = generate_cheese_card(cheese_type);
        list.appendChild(card);     
    }

    // Construction du titre en fonction du cas
    switch (cheese_type){
        case 'blue-cheese':
            header.textContent = "Fromages persillés";         
            while(indexes.length < numberOfCard){
                var r = Math.floor(Math.random() * blue_cheeses.length);
                if(indexes.indexOf(r) === -1){
                    indexes.push(r);
                };
            };
        
            break
        
        case 'fresh-cheese':
            header.textContent = "Fromages frais";           
            break

        case 'mixed-cheese':
            header.textContent = "Fromages forts";           
            break

        case 'cooked-pressed-cheese':
            header.textContent = "Fromages à pâte pressée cuite";
            break

        case 'rind-washed-cheese':
            header.textContent = "Fromages à croûte lavée";
            break

        case 'stretched-curd-cheese':
            header.textContent = "Fromages à pâte filée";
            break

        case 'soft-ripened-cheese':
            header.textContent = "Fromages à croûte fleurie";
            break

        case 'uncooked-pressed-cheese':
            header.textContent = "Fromages à pâte pressée non cuite";
            break
    }
    document.getElementById(cheese_type).appendChild(box);
}

function generate_cheese_card(cheese_type){
    var template = document.querySelector("#cheese-example");
    var card = document.importNode(template.content, true);

    // Sélection des variables à attribuer
    var name = card.querySelector('h5.fr-card__title');
    var origin = card.querySelector('p.fr-card__desc');
    var img = card.querySelector('img.fr-responsive-img');
    var country = card.querySelector('#cheese-country');
    var milk = card.querySelector('#cheese-milk');
    var wiki = card.querySelector('#wiki');
    var btnChanger = card.querySelector('#btn-changer');

    function select_cheese(cheese_type){
        console.log("Je suis actionné!")
        // Sélection d'un fromage au hasard du type sélectionné
        var cheese;
        switch (cheese_type){
            case 'blue-cheese':
                var r = Math.floor(Math.random() * blue_cheeses.length);
                cheese = blue_cheeses[r];        
                break
            
            case 'fresh-cheese':
                var r = Math.floor(Math.random() * fresh_cheeses.length);
                cheese = fresh_cheeses[r];          
                break

            case 'mixed-cheese':
                var r = Math.floor(Math.random() * mixed_cheeses.length);
                cheese = mixed_cheeses[r];       
                break

            case 'cooked-pressed-cheese':
                var r = Math.floor(Math.random() * cooked_pressed_cheeses.length);
                cheese = cooked_pressed_cheeses[r];  
                break

            case 'rind-washed-cheese':
                var r = Math.floor(Math.random() * rind_washed_cheeses.length);
                cheese = rind_washed_cheeses[r];  
                break

            case 'stretched-curd-cheese':
                var r = Math.floor(Math.random() * stretched_curd_cheeses.length);
                cheese = stretched_curd_cheeses[r]; 
                break

            case 'soft-ripened-cheese':
                var r = Math.floor(Math.random() * soft_ripened_cheeses.length);
                cheese = soft_ripened_cheeses[r]; 
                break

            case 'uncooked-pressed-cheese':
                var r = Math.floor(Math.random() * uncooked_pressed_cheeses.length);
                cheese = uncooked_pressed_cheeses[r]; 
                break
        }

        // Attribution des valeurs aux variables de la carte
        name.textContent = cheese.name;
        origin.textContent = cheese.geo;
        country.textContent = cheese.country;
        milk.textContent = cheese.milk;
        wiki.href = cheese.url;

        // Si l'url de l'image manque, on met un placeholder
        if (cheese.img == ""){
            img.src = "./img/placeholders/placeholder.1x1.png"
        }   else {
            img.src = cheese.img;
        }

    }

    select_cheese(cheese_type);
    btnChanger.onclick = function() {select_cheese(cheese_type)};
   
    return card; 
}

function generatePlateau(){
    // Calcul de la quantité totale de fromage à prévoir
    let qtyFromageTot = cheeseQtyPP*nbPersonnes;
    
    //Réinitialisation du message d'erreur
    let messageErreur = document.getElementById("message-erreur");
    messageErreur.classList.add("hidden");

    if (isNaN(qtyFromageTot)){
        messageErreur.classList.remove("hidden");
        return;   
    } else
        document.getElementById("qtyFromage").innerText = qtyFromageTot +'gr.';
        
        // Réinitialisation des divs
        document.getElementById("blue-cheese").innerHTML = '';
        document.getElementById("fresh-cheese").innerHTML = '';
        document.getElementById("mixed-cheese").innerHTML = '';
        document.getElementById("stretched-curd-cheese").innerHTML = '';
        document.getElementById("cooked-pressed-cheese").innerHTML = '';
        document.getElementById("uncooked-pressed-cheese").innerHTML = '';
        document.getElementById("rind-washed-cheese").innerHTML = '';
        document.getElementById("soft-ripened-cheese").innerHTML = '';
        
        // Génération des listes de fromages
        if (cheeseTypesSelected.length>0){
            for (var i = 0; i<cheeseTypesSelected.length; i++){
                generate_cheese_type_box(cheeseTypesSelected[i]);
            }
        } else
            messageErreur.classList.remove("hidden");
            return;
    
}

// Déclenchement de la génération quand on charge l'onglet "Plateau"
btnGeneration = document.getElementById('panel-result');
btnGeneration.addEventListener('click', generatePlateau);