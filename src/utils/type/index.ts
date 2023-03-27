export interface OptionType {
    id: string;
    name: string;
    photoUrL: string;
}
export interface CategoryType {
    id: string;
    name: string;
    items: OptionType[];
}
