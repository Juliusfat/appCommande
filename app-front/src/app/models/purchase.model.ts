export interface Purchase {
    id: number;
    motif: string;
    quantite: number;
    produit: string;
    lien: string;
    idUser: number;
    commentaire_acheteur: string;
    date_validation: string;
    etat: string;
    date_creation: string;
}