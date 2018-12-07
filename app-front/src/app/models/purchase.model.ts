export interface Purchase {
    id: number;
    motif: string;
    quantite: number;
    produit: string;
    lien: string;
    idUtilsateur: number;
    commentaire_acheteur: string;
    date_validation: string;
    etat_commande: string;
    date_creation: string;
    commentaire_demande: string;
}