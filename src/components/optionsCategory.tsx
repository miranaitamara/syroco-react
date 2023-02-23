import { OptionCategoryType } from '@/utils/type';

type OptionsCategoryProps = {
    category: OptionCategoryType;
    handleSelectOption: (id: string) => void;
    otherOptionsSelected: string[];
};

const ComputationOptionsCategory = ({ category, handleSelectOption, otherOptionsSelected }: OptionsCategoryProps) => {
    return <></>;
};

export default ComputationOptionsCategory;
