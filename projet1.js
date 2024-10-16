const prompt = require('prompt-sync')()

let chemin = prompt("Vous arrivez a l'entrée d'un labyrinthe, 2 chemin s'offre a vous le chemin de gauche ou celui de droite: ")
let choix = ""

while (chemin != "gauche" && chemin != "droite") {
    chemin = prompt("Vous devez écrire gauche ou droite: ")
}
if (chemin == "droite") {
    choix = prompt("Vous arrivez devant la tombe du chevalier sans tete, voulez l'ouvrir? oui ou non: ")
    while (choix != "oui" && choix != "non") {
        choix = prompt("oui ou non: ")
    }
    if (choix == "oui") {
        console.log("Bravo vous avez touvé un passage secret et sortez vivant du laby");

    } else if (choix == "non") {
        chemin = prompt("Vous continuez tout droit et arrivez a une intersection, à gauche un air nauséabonte flotte dans les aires et à droite votre instinct vous fait frissonner: ");
        while (chemin != "gauche" && chemin != "droite") {
            chemin = prompt("Vous devez écrire gauche ou droite: ")
        }
        if (chemin == "gauche") {
            choix = prompt("Vous voyez devant vous un marécage, voulez vous le traverser? oui ou non: ")
            while (choix != "oui" && choix != "non") {
                choix = prompt("oui ou non: ")
            }
            if (choix == "oui") {
                console.log("vous arrivez à traverser et trouvez la sortie !!  Bravo !!");
            } else if (choix == "non") {
                console.log("Vous mourrez asphyxier dans d'attroce souffrance !!");
            }
        } else if (chemin == "droite") {
            choix = prompt("Vous arrivez dans une clairière, voulez vous la traverser? oui ou non: ")
            while (choix != "oui" && choix != "non") {
                choix = prompt("oui ou non: ")
            }
            if (choix == "oui") {
                console.log("vous arrivez à traverser et trouvez la sortie !!  Bravo !!");
            } else if (choix == "non") {
                console.log("Vous mourrez attaqué par un essein de frelon !! ");
            }
        }
    }
} else if (chemin == "gauche") {
    choix = prompt("Vous tombez nez à nez devant un zombie, voulez vous le combatre? oui ou non: ")
    while (choix != "oui" && choix != "non") {
        choix = prompt("oui ou non: ")
    }
    if (choix == "oui") {
        console.log("Vous etes mort");
    } else if (choix == "non") {
        choix = prompt("Vous rebroussez chemin et prenez vos jambes a votre coup jusqu'à tomber sur mur. Voulez-vous l'ecalader? oui ou non:  ");
        while (choix != "oui" && choix != "non") {
            choix = prompt("oui ou non: ")
        }
        if (choix == "oui") {
            chemin = prompt("En haut du mur se trouve le père fourasse qui vous demande quelle route entre le Valhalla à gauche ou le chemin de traverse à droite vous choisissez: ");
            while (chemin != "gauche" && chemin != "droite") {
                chemin = prompt("Vous devez écrire gauche ou droite: ")
            }
            if (chemin == "gauche") {
                console.log("C'était un piège le Valhalla est le domaine des morts, vous mourrez");
            } else if (chemin == "droite") {
                choix = prompt("Vous voyez un autre mur et repensez a l'énigme du père Fourasse, voulez-vous le traverser? oui ou non:  ");
                while (choix != "oui" && choix != "non") {
                    choix = prompt("oui ou non: ")
                }
                if (choix == "oui") {
                    console.log("vous arrivez à traverser et trouvez la sortie!!  Bravo!!");
                } else if (choix == "non") {
                    console.log("vous mourrez mangé par Hagrid !!!");
                }
            }
        } else if (choix == "non") {
            choix = prompt("Vous pouvez passer entre les jambes du zombie, le faite vous? oui ou non:  ");
            while (choix != "oui" && choix != "non") {
                choix = prompt("oui ou non: ")
            }
            if (choix == "oui") {
                choix = prompt("Voulez vous revenir au début et prendre le chemin de gauche? oui et non: ");
                while (choix != "oui" && choix != "non") {
                    chemin = prompt("oui ou non: ")
                }
                if (choix == "oui") {
                    choix = prompt("Vous arrivez devant la tombe du chevalier sans tete, voulez l'ouvrir? oui ou non: ")
                    while (choix != "oui" && choix != "non") {
                        choix = prompt("oui ou non: ")
                    }
                    if (choix == "oui") {
                        console.log("Bravo vous avez touvé un passage secret et sortez vivant du laby");
                
                    } else if (choix == "non") {
                        chemin = prompt("Vous continuez tout droit et arrivez a une intersection, à gauche un air nauséabonte flotte dans les aires et à droite votre instinct vous fait frissonner: ");
                        while (chemin != "gauche" && chemin != "droite") {
                            chemin = prompt("Vous devez écrire gauche ou droite: ")
                        }
                        if (chemin == "gauche") {
                            choix = prompt("Vous voyez devant vous un marécage, voulez vous le traverser? oui ou non: ")
                            while (choix != "oui" && choix != "non") {
                                choix = prompt("oui ou non: ")
                            }
                            if (choix == "oui") {
                                console.log("vous arrivez à traverser et trouvez la sortie !!  Bravo !!");
                            } else if (choix == "non") {
                                console.log("Vous mourrez asphyxier dans d'attroce souffrance !!");
                            }
                        } else if (chemin == "droite") {
                            choix = prompt("Vous arrivez dans une clairière, voulez vous la traverser? oui ou non: ")
                            while (choix != "oui" && choix != "non") {
                                choix = prompt("oui ou non: ")
                            }
                            if (choix == "oui") {
                                console.log("vous arrivez à traverser et trouvez la sortie !!  Bravo !!");
                            } else if (choix == "non") {
                                console.log("Vous mourrez attaqué par un essein de frelon !! ");
                            }
                        }
                    }
                } else if (choix == "non") {
                    console.log("Le zombie vous attrape et vous mange !!");
                }
            } else if (choix == "non") {
                console.log("Le zombie vous attrape et vous mange !!");

            }
        }
    }
}