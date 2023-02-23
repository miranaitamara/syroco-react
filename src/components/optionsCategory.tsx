import { Box, Grid } from '@mui/material';
import { OptionCategoryType } from '@/utils/type';
import OptionItem from './optionItem';

type OptionsCategoryProps = {
    category: OptionCategoryType;
    handleSelectOption: (id: string) => void;
    otherOptionsSelected: string[];
};

const ComputationOptionsCategory = ({ category, handleSelectOption, otherOptionsSelected }: OptionsCategoryProps) => {
    return (
        <div className="container">
            <div className="category-title">{category.name}</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {category.items.map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <OptionItem option={item} handleSelectOption={handleSelectOption} otherOptionsSelected={otherOptionsSelected} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default ComputationOptionsCategory;
