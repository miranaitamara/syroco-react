export interface OptionType {
    id: string;
    name: string;
    photoUrL: string;
}
export interface OptionCategoryType {
    id: string;
    name: string;
    items: OptionType[];
}
