# Guide de développement Web - HTML, CSS, JavaScript, Hugo, Netlify, Forestry

## Introduction

Bienvenue sur ce guide !

Sa vocation est de proposer un parcours simple qui vous permettra d'explorer différentes technologies Web.

Vous pourrez voir comment :

* créer une page Web statique
* structurer ses données avec JavaScript
* créer des composants réutilisables
* créer un site statique avec Hugo et Forestry
* automatiser le déploiement sur Netlify

Suivez le guide dans l'ordre et vous devriez arriver à la fin sans problèmes. Vous pouvez bien sûr me contacter sur les réseaux sociaux, via mon blog ou directement par mail.

Ce n’est pas un cours ! Je ne décris pas la syntaxe du code. Je vous invite à parcourir les documentations si nécessaire. Pour cela, il existe l'outil [DevDocs API Documentation](https://devdocs.io) qui propose une centralisation efficace des différentes documentations disponibles.

Dans ce guide, j’utilise le système d’exploitation Ubuntu et les logiciels fournis par défaut : Firefox, Terminal et Gedit.

## Initialisation

Depuis l’application Terminal, créez un dossier `guide_dev` dans votre répertoire personnel :

```sh
cd $HOME && mkdir guide_dev
```

Tous les fichiers nécessaires pour suivre ce guide seront créés dans ce dossier.

## Créer une page Web

Une page Web est un document lisible par un navigateur. C’est un script HTML qui contient des informations sur la façon dont le navigateur doit afficher cette page.

La structure de base d'une page Web est la suivante :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem Ipsum</title>
</head>
<body>
    <!-- Le contenu de la page Web -->
</body>
</html>
```

Cette structure se répète sur toutes les pages affichées par le navigateur. Elle contient les données nécessaires au bon affichage du document HTML :

* le doctype
* la langue du contenu de la page
* les métadonnées : encodage des caractères, taille de la zone d'affichage et niveau de zoom (pour le web `responsive`), titre de la page
* le contenu à proprement parler, entre les balises `<body></body>`

Ce sont les informations de bases à insérer dans un document HTML, mais il en existe beaucoup d'autres à utiliser suivant vos besoins.

## Créer et structurer le contenu

Je souhaite créer une simple page Web qui contient trois parties principales :

* un entête qui englobe logo, titre, sous-titre et menu de navigation
* le contenu composé de quattre sections avec titre, image, sous-titre et texte
* un pied de page qui reprend le menu de navigation et un texte

Le texte est généré via [Lorem Ipsum](https://www.lipsum.com/) et les images proviennent de [Wikimedia Commons](https://commons.wikimedia.org/wiki/Accueil).

Le rendu final est le suivant :

![](/images/screenshot-from-2021-08-18-13-45-45.png)

Ceci est une maquette très précise de ce que l'on veut obtenir. Faire une maquette, ou du moins, avoir une idée la plus précise possible de l'objectif final, est indispensable pour ne pas se perdre dans des considérations inutiles.

> Vous comprendrez que j'ai triché ici, en vous fournissant le rendu final généré une fois le code créé. Mais j'ai effectivement commencé par une maquette, avec papier et crayon.

Par où commencer au niveau du code ?

Il faut d'abord décrire la page Web en HTML :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem Ipsum</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div id="headerLeft">
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Books_icon.png" alt=""></a>
            <h1><a href="#">Lorem Ipsum</a></h1>
            <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h2>
        </div>
        <div id="headerRight">
            <nav>
                <ul>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Fusce</a></li>
                    <li><a href="#">Etiam</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section>
            <header>
                <h1>Lorem ipsum</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/001-teacher.svg" alt="">
                <h2>Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat</h2>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat. Etiam sed semper orci. Pellentesque vitae scelerisque augue. Cras pharetra erat tincidunt eros feugiat, non gravida nisl fringilla. Etiam finibus, lectus eget molestie lacinia, mauris ipsum suscipit purus, ut sagittis massa sem id tortor. Proin nec faucibus turpis. Aliquam vulputate facilisis tortor vel consectetur. Proin aliquam magna quis convallis pulvinar. Etiam convallis, mauris eu viverra consequat, sem risus luctus felis, lobortis rutrum mauris dui sit amet est. Aenean lacinia enim nec augue malesuada, sit amet pellentesque dui interdum. Donec at consectetur orci. Etiam ac lacus risus. Donec vitae ex luctus, rhoncus tellus vel, euismod massa. Integer at facilisis nibh, in varius tellus. Nulla purus est, vestibulum nec nunc eu, tincidunt scelerisque magna.
            </p>
        </section>
        <section>
            <header>
                <h1>Ut sit amet</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Button_DINA_Voraussetzungen_Digitale_Nachhaltigkeit_06_Geteiltes_Wissen.svg" alt="">
                <h2>Cras pretium commodo felis, non tincidunt tellus elementum vel</h2>
            </header>
            <p>
                Ut sit amet diam hendrerit, sollicitudin orci in, dapibus erat. Cras pretium commodo felis, non tincidunt tellus elementum vel. Morbi ullamcorper imperdiet gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus ac lacus quis commodo. Vivamus mattis tellus lectus, in egestas massa tincidunt sed. Quisque euismod tellus a malesuada finibus. Nullam finibus, dui in interdum tristique, orci metus semper neque, quis fermentum metus leo nec ipsum. Sed nec tempor tellus.
            </p>
        </section>
        <section>
            <header>
                <h1>Fusce vitae magna ex</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Degree.svg" alt="">
                <h2>Curabitur id dignissim ligula, quis vulputate ligula</h2>
            </header>
            <p>
                Fusce vitae magna ex. Curabitur id dignissim ligula, quis vulputate ligula. Nullam volutpat lorem eu justo accumsan, quis hendrerit tellus hendrerit. Sed venenatis odio a risus ornare, vitae tincidunt odio pretium. Cras dapibus a ante quis ultrices. Nunc placerat semper lacinia. Quisque et molestie justo. Nunc elementum nisl quam, ut lacinia augue mollis a.
            </p>
        </section>
        <section>
            <header>
                <h1>Cras bibendum dolor in varius finibus</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Disconnect_-_Donne_e_rete.png" alt="">
                <h2>Cras elementum nisl velit, feugiat laoreet elit congue ut</h2>
            </header>
            <p>
                Cras bibendum dolor in varius finibus. Cras elementum nisl velit, feugiat laoreet elit congue ut. Cras sit amet est felis. Curabitur congue sollicitudin dolor id tincidunt. Donec lobortis tincidunt fermentum. Integer imperdiet lacus eu semper finibus. Morbi orci tortor, tincidunt ut sapien at, finibus facilisis lectus. Morbi eget accumsan dui. Duis aliquam at lectus et luctus. Cras non sagittis libero.
            </p>
        </section>
    </main>
    <footer>
        <ul>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Fusce</a></li>
            <li><a href="#">Etiam</a></li>
        </ul>
        <p>Integer id volutpat risus</p>
    </footer>
</body>
</html>
```

> Vous remarquerez que les liens de navigations du pied de page ne sont pas déclarés comme éléments `<nav></nav>`. Sémantiquement, c'est une simple liste de liens, qui ne reprend pas forcément les liens de navigation.

Puis créer le code CSS :

```css
body {
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.2em;
}

body img {
    max-width: 100%;
    height: auto;
}

/* header */
/**************************************************/
header {
    flex: 1;    /* body container */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}

header div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#headerLeft {
    max-width: 300px;
}

#headerLeft h1 a {
    color: gray;
    text-decoration: none;
}

#headerLeft h2 {
    font-size: 1em;
    font-weight: lighter;
    color: darkgray;
    font-style: italic;
    text-align: center;
}

#headerRight nav ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
}

#headerRight nav ul li {
    padding: 15px;
}

#headerRight nav ul li a {
    padding: 5px;
    text-decoration: none;
    color: steelblue;
}

/* main */
/**************************************************/
main {
    flex: 1;    /* body container */
    display: flex;
    flex-direction: column;
    padding: 25px;
}

/* section */
/**************************************************/
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
}

section header {
    flex-direction: column;
    align-items: center;
}

section header h1 {
    text-align: center;
    text-transform: uppercase;
    color: steelblue;
}

section header h2 {
    font-size: 1em;
    color: gray;
}

section header img {
    max-width: 250px;
    max-height: 200px;
}

section p {
    max-width: 800px;
    text-align: justify;
    line-height: 2rem;
    color: darkgray;
}

/* footer */
/**************************************************/
footer {
    flex: 1;    /* body container */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    min-height: 250px;
}
footer p {
    color: darkgray;
    font-style: italic;
}

footer ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
}

footer ul li {
    padding: 15px;
}

footer ul li a {
    padding: 5px;
    text-decoration: none;
    color: steelblue;
}
```

Si vous souhaitez copier le code manuellement, les deux fichiers doivent se trouver dans le même dossier, le HTML nommé `index.html`, et `style.css` pour le code CSS.

Sinon, vous pouvez cloner le dépôt GitHub :

* vérifier que `git` est installé :

  ```sh
  git --version
  
  # doit retourner quelque chose comme :
  # git version 2.25.1
  
  # ou si git n'est pas installé :
  # La commande « git » n'a pas été trouvée, mais peut être installée avec :
  # sudo apt install git
  ```
* si `git` n'est pas installé :

  ```sh
  sudo apt-get install -y git
  ```
* cloner le dépôt `git` [https://github.com/psthely/lorem_ipsum-0.1.git](https://github.com/psthely/lorem_ipsum-0.1.git) :

  ```sh
  cd $HOME/guide_dev
  git clone https://github.com/psthely/lorem_ipsum-0.1.git
  ```

La page Web est directement lisible par un navigateur, il suffit d'ouvrir le fichier `index.html` avec firefox :

```sh
cd $HOME/guide_dev
firefox index.html
```

## Gérer le contenu avec JavaScript

Nous possédons maintenant une page Web statique, c'est à dire codée en dur. Pour modifier son contenu, on devra agir sur le code HTML. Ça fonctionne, mais ce n'est clairement pas l'idéal.

Une bonne idée serait d'externaliser les données susceptible d'être modifiées, en l'occurence les sections contenues dans la balise `<main></main>` du document HTML.

Une première approche simple est de créer un fichier JavaScript dans lequel sont stockées les données. Une fonction `$(selector)` permet de cibler la balise `<main></main>` pour l'alimenter en HTML grâce à la propriété JavaScript `innerHTML` :

```javascript
/**
 * Obtenir l'Element HTML ciblé par les sélecteurs
 * @function $
 * @param { String } selectors
 * @return { Element }
 */
function $(selectors) {
    return document.querySelector(selectors)
}

/**
 * Données des sections
 * @constant sections
 * @type {Object[<string, string>]}
 * @property {string} sections[key].title - titre de la section
 * @property {string} sections[key].imageSrc - lien vers l'image de la section
 * @property {string} sections[key].description - description de la section
 * @property {string} sections[key].content - contenu de la section
 */
const sections = [
    {
        title: "Lorem Ipsum",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/001-teacher.svg",
        description: "Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat. Etiam sed semper orci. Pellentesque vitae scelerisque augue. Cras pharetra erat tincidunt eros feugiat, non gravida nisl fringilla. Etiam finibus, lectus eget molestie lacinia, mauris ipsum suscipit purus, ut sagittis massa sem id tortor. Proin nec faucibus turpis. Aliquam vulputate facilisis tortor vel consectetur. Proin aliquam magna quis convallis pulvinar. Etiam convallis, mauris eu viverra consequat, sem risus luctus felis, lobortis rutrum mauris dui sit amet est. Aenean lacinia enim nec augue malesuada, sit amet pellentesque dui interdum. Donec at consectetur orci. Etiam ac lacus risus. Donec vitae ex luctus, rhoncus tellus vel, euismod massa. Integer at facilisis nibh, in varius tellus. Nulla purus est, vestibulum nec nunc eu, tincidunt scelerisque magna."
    },
    {
        title: "Ut sit amet",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Button_DINA_Voraussetzungen_Digitale_Nachhaltigkeit_06_Geteiltes_Wissen.svg",
        description: "Cras pretium commodo felis, non tincidunt tellus elementum vel",
        content: "Ut sit amet diam hendrerit, sollicitudin orci in, dapibus erat. Cras pretium commodo felis, non tincidunt tellus elementum vel. Morbi ullamcorper imperdiet gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus ac lacus quis commodo. Vivamus mattis tellus lectus, in egestas massa tincidunt sed. Quisque euismod tellus a malesuada finibus. Nullam finibus, dui in interdum tristique, orci metus semper neque, quis fermentum metus leo nec ipsum. Sed nec tempor tellus."
    },
    {
        title: "Fusce vitae magna ex",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Degree.svg",
        description: "Curabitur id dignissim ligula, quis vulputate ligula",
        content: "Fusce vitae magna ex. Curabitur id dignissim ligula, quis vulputate ligula. Nullam volutpat lorem eu justo accumsan, quis hendrerit tellus hendrerit. Sed venenatis odio a risus ornare, vitae tincidunt odio pretium. Cras dapibus a ante quis ultrices. Nunc placerat semper lacinia. Quisque et molestie justo. Nunc elementum nisl quam, ut lacinia augue mollis a."
    },
    {
        title: "Cras bibendum dolor in varius finibus",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/98/Disconnect_-_Donne_e_rete.png",
        description: "Cras elementum nisl velit, feugiat laoreet elit congue ut",
        content: "Cras bibendum dolor in varius finibus. Cras elementum nisl velit, feugiat laoreet elit congue ut. Cras sit amet est felis. Curabitur congue sollicitudin dolor id tincidunt. Donec lobortis tincidunt fermentum. Integer imperdiet lacus eu semper finibus. Morbi orci tortor, tincidunt ut sapien at, finibus facilisis lectus. Morbi eget accumsan dui. Duis aliquam at lectus et luctus. Cras non sagittis libero."
    }
]

/** Alimenter l'élément main avec innerHTML */
for(let key in sections) {
    $('main').innerHTML += (
        '<section>\
            <header>\
                <h1>' + sections[key].title + '</h1>\
                <img src="' + sections[key].imageSrc + '" alt="" />\
                <h2>' + sections[key].description + '</h2>\
            </header>\
            <p>\
            ' + sections[key].content + '\
            </p>\
        </section>'
    )
}
```

> Il existe bien sûr de meilleures solutions pour stocker les données et décrire le code HTML à insérer. Mais pour le moment, l'important est que le code fonctionne.

Au niveau du script HTML, il suffit de supprimer le contenu dans la balise `<main></main>` et de déclarer le script JavaScript à la fin du code :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem Ipsum</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div id="headerLeft">
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Books_icon.png" alt=""></a>
            <h1><a href="#">Lorem Ipsum</a></h1>
            <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h2>
        </div>
        <div id="headerRight">
            <nav>
                <ul>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Fusce</a></li>
                    <li><a href="#">Etiam</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main></main>		<!-- Suppression du contenu -->
    <footer>
        <ul>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Fusce</a></li>
            <li><a href="#">Etiam</a></li>
        </ul>
        <p>Integer id volutpat risus</p>
    </footer>
    <script src="script.js"></script>	<!-- Déclaration du script JavaScript -->
</body>
</html>
```

Voici l'adresse du dépôt GitHub à cloner si besoin : [https://github.com/psthely/lorem_ipsum-0.2](https://github.com/psthely/lorem_ipsum-0.2)

Bien sûr, cette solution n'est pas idéale, mais il y a du mieux :

* on supprime la redondance dans le HTML
* les données sont structurées dans un unique objet
* l'ensemble est plus maintenable et évolutif

On peut appliquer cette logique à l'ensemble des éléments de la page Web. Ainsi le code HTML serait le suivant :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lorem Ipsum</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header></header>
    
    <main></main>
    
    <footer></footer>
    
    <script src="script.js"></script>
    <script src="header.js"></script>
    <script src="main.js"></script>
    <script src="footer.js"></script>
    <script src="navLink.js"></script>
</body>
</html>
```

> Notez qu'il faut veiller à appeler le script `navLink` après la déclaration de `header`, car le menu de navigation à besoin d'alimenter l'élément `ul` de la `div` dont l'identifiant est `headerRight`.

Le fichier `script.js` ne contient plus que la fonction permettant de cibler les éléments HTML :

```javascript
/**
 * Obtenir l'Element HTML ciblé par les sélecteurs
 * @function $
 * @param { String } selectors
 * @return { Element }
 */
function $(selectors) {
    return document.querySelector(selectors)
}
```

Voici le code JavaScript des différents éléments :

* `header.js` :

  ```javascript
  /**
   * Données du header
   * @constant header
   * @type {Object[<string, string>]}
   * @property {string} header[key].imageSrc - lien vers l'image de la section
   * @property {string} header[key].title - titre de la section
   * @property {string} header[key].description - description de la section
   */
  const header = [
      {
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Books_icon.png",
          title: "Lorem Ipsum",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          href: "#"
      }
  ]
  
  /** Alimenter l'élément header avec les données */
  $('header').innerHTML += (
      '<div id="headerLeft">\
          <a href="' + header[0].href + '"><img src="' + header[0].imageSrc + '" alt=""></a>\
          <h1><a href="' + header[0].href + '">' + header[0].title + '</a></h1>\
  		<h2>' + header[0].description + '</h2>\
      </div>\
      <div id="headerRight">\
          <nav>\
              <ul>\
              </ul>\
      </nav>\
      </div>'
  )
  ```
* `main.js` :

  ```javascript
  /**
   * Données des sections
   * @constant sections
   * @type {Object[<string, string>]}
   * @property {string} sections[i].title - titre de la section
   * @property {string} sections[i].imageSrc - lien vers l'image de la section
   * @property {string} sections[i].description - description de la section
   * @property {string} sections[i].content - contenu de la section
   */
  const sections = [
      {
          title: "Lorem Ipsum",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/001-teacher.svg",
          description: "Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat. Etiam sed semper orci. Pellentesque vitae scelerisque augue. Cras pharetra erat tincidunt eros feugiat, non gravida nisl fringilla. Etiam finibus, lectus eget molestie lacinia, mauris ipsum suscipit purus, ut sagittis massa sem id tortor. Proin nec faucibus turpis. Aliquam vulputate facilisis tortor vel consectetur. Proin aliquam magna quis convallis pulvinar. Etiam convallis, mauris eu viverra consequat, sem risus luctus felis, lobortis rutrum mauris dui sit amet est. Aenean lacinia enim nec augue malesuada, sit amet pellentesque dui interdum. Donec at consectetur orci. Etiam ac lacus risus. Donec vitae ex luctus, rhoncus tellus vel, euismod massa. Integer at facilisis nibh, in varius tellus. Nulla purus est, vestibulum nec nunc eu, tincidunt scelerisque magna."
      },
      {
          title: "Ut sit amet",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Button_DINA_Voraussetzungen_Digitale_Nachhaltigkeit_06_Geteiltes_Wissen.svg",
          description: "Cras pretium commodo felis, non tincidunt tellus elementum vel",
          content: "Ut sit amet diam hendrerit, sollicitudin orci in, dapibus erat. Cras pretium commodo felis, non tincidunt tellus elementum vel. Morbi ullamcorper imperdiet gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus ac lacus quis commodo. Vivamus mattis tellus lectus, in egestas massa tincidunt sed. Quisque euismod tellus a malesuada finibus. Nullam finibus, dui in interdum tristique, orci metus semper neque, quis fermentum metus leo nec ipsum. Sed nec tempor tellus."
      },
      {
          title: "Fusce vitae magna ex",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Degree.svg",
          description: "Curabitur id dignissim ligula, quis vulputate ligula",
          content: "Fusce vitae magna ex. Curabitur id dignissim ligula, quis vulputate ligula. Nullam volutpat lorem eu justo accumsan, quis hendrerit tellus hendrerit. Sed venenatis odio a risus ornare, vitae tincidunt odio pretium. Cras dapibus a ante quis ultrices. Nunc placerat semper lacinia. Quisque et molestie justo. Nunc elementum nisl quam, ut lacinia augue mollis a."
      },
      {
          title: "Cras bibendum dolor in varius finibus",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/98/Disconnect_-_Donne_e_rete.png",
          description: "Cras elementum nisl velit, feugiat laoreet elit congue ut",
          content: "Cras bibendum dolor in varius finibus. Cras elementum nisl velit, feugiat laoreet elit congue ut. Cras sit amet est felis. Curabitur congue sollicitudin dolor id tincidunt. Donec lobortis tincidunt fermentum. Integer imperdiet lacus eu semper finibus. Morbi orci tortor, tincidunt ut sapien at, finibus facilisis lectus. Morbi eget accumsan dui. Duis aliquam at lectus et luctus. Cras non sagittis libero."
      }
  ]
  
  /** Alimenter l'élément main avec les données */
  for(let key in sections) {
      $('main').innerHTML += (
          '<section>\
              <header>\
                  <h1>' + sections[key].title + '</h1>\
                  <img src="' + sections[key].imageSrc + '" alt="" />\
                  <h2>' + sections[key].description + '</h2>\
              </header>\
              <p>\
              ' + sections[key].content + '\
              </p>\
          </section>'
      )
  }
  ```
* `footer.js` :

  ```javascript
  /**
   * Données du footer
   * @constant footer
   * @type {Object<string, string>}
   * @property {string} footer.text - texte du footer
   */
  const footer = {
      text: "Integer id volutpat risus",
      links: [
          { name: "Lorem", href: "#" },
          { name: "Fusce", href: "#" },
          { name: "Etiam", href: "#" }
       ]
  }
  
  /** Construire la liste de liens */
  let links = new String()
  for(let key in footer.links) {
      links += (
          '<li><a href="' + footer.links[key].href + '">' + footer.links[key].name + '</a></li>'
      )
  }   
  
  /** Alimenter l'élément footer avec les données */
  $('footer').innerHTML += (
      '<ul>'
          + links +
      '</ul>\
      <p>' + footer.text + '</p>'
  )
  
  ```
* `navLink.js` :

  ```javascript
  /**
   * Données du menu de navigation
   * @constant navLink
   * @type {Object[<string, string>]}
   * @property {string} navLink[key].name - nom du lien de navigation
   * @property {string} navLink[key].href - adresse du lien
   */
  const navLink = [
      {
          name: "Lorem",
          href: "#"
      },
      {
          name: "Fusce",
          href: "#"
      },
      {
          name: "Etiam",
          href: "#"
      }
  ]
  
  /** Alimenter l'élément ul avec les données */
  for(let key in navLink) {
      $('#headerRight nav ul').innerHTML += (
          '<li><a href="' + navLink[key].href + '">' + navLink[key].name + '</a></li>'
      )
  }
  ```

Voici l'adresse du dépôt sur GitHub : [https://github.com/psthely/lorem_ipsum-0.3](https://github.com/psthely/lorem_ipsum-0.3)

Cette approche fonctionne, mais on ne fait qu'appeler une propriété d'affichage (`innerHTML`) sur des éléments HTML. Cependant, c'est un premier pas intéressant par rapport à une simple page HTML.

## Déclarer des composants avec les modules JavaScript

`TODO`
