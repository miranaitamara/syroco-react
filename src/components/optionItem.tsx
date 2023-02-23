import { OptionType } from '@/utils/type';

type OptionItemProps = {
    option: OptionType;
    handleSelectOption: (id: string) => void;
    otherOptionsSelected: string[];
};

const OptionItem = ({ option, handleSelectOption, otherOptionsSelected }: OptionItemProps) => {
   

    return (
        <></>
    );
};

export default OptionItem;
