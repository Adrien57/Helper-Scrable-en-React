# Un helper pour le Scrabble en React

On se propose de coder un helper pour le Scrabble en React (triche ?! mais non :smirk:)

## Instructions

Avant toute chose, allez jeter un oeil à l'organisation du code :
tous **les composants**, pour comprendre un peu comment ils fonctionnent,
ainsi que **les data**.

Pour démarrer :

* Dans le composant `<Letter />`, rajouter un `<div className="letter-points">`
pour afficher le nombre de points.

* A la place de « React », l'application doit afficher les lettres tapées par l'utilisateur.
Au chargement de la page, aucune lettre s'affiche… on devrait donc écouter le clavier.
A chaque fois qu'on tape **une lettre**, on l'affiche.
On pourrait poser l'évenement sur document dans un lifecycle de `<Letters />`,
et stocker chaque lettre tapées dans le state du composant.

* Au bout de la 7e lettre, on ne doit plus pouvoir ajouter de lettre.

* Une fois que tout ça fonctionne, modifier le code pour stocker les lettres *via* Redux.
Pour cela, on peut créer une propriété `letters` dans le state de notre store.

* Une fois qu'on ne peut plus taper (= quand on obtient la 7e lettre),
le composant `<Board />` doit afficher « loading ». Pour cela, on peut
créer une propriété `status` dans le state de notre store.

* Bonus : à l'aide du composant `<Word />`, afficher « loading », mais avec des lettres
Scrabble :smiley:
