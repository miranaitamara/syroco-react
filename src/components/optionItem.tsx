import { Box, Typography } from '@mui/material';
import { OptionType } from '@/utils/type';

type OptionItemProps = {
    option: OptionType;
    handleSelectOption: (id: string) => void;
    otherOptionsSelected: string[];
};

const OptionItem = ({ option, handleSelectOption, otherOptionsSelected }: OptionItemProps) => {
    const isSelected = otherOptionsSelected.includes(option.id);

    return (
        <Box sx={{ flexGrow: 1 }} className={`computation-option ${isSelected ? 'selected' : ''}`}>
            <div className="computation-cards-contents">
                <Typography style={{ color: '#262525' }} variant="h5">
                    {option.name}
                </Typography>
                <img alt="option" style={{ borderRadius: '50%' }} height={'128'} width={'128'} src={option.photoUrL} />
                <div className={`computation-option-button ${isSelected ? 'selected-item' : ''}`} onClick={() => handleSelectOption(option.id)}>
                    {isSelected ? 'Selected' : 'Select'}
                </div>
            </div>
        </Box>
    );
};

export default OptionItem;
